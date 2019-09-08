import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BroadcastService, MsalService} from '@azure/msal-angular';
import {HttpServiceHelper} from './core/http/HttpServiceHelper';
import {TranslateService, TranslationChangeEvent} from '@ngx-translate/core';
import version from '../../version.json';
import {Router} from '@angular/router';
import {AuthService} from './core/services/auth.service';

declare var config;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'SubstationApp';
    appVersion: string;
    loggedIn: boolean;
    accessToken: string;
    languages: any;
    curLang: string;
    pageLoaded: boolean;
    subscription: Subscription;
    isIframe: boolean;
    loginFailedMsg: string;

    tokenSavingKey = 'ss_sub_key';

    constructor(private translate: TranslateService,
                private broadcastService: BroadcastService,
                private authService: MsalService,
                private router: Router,
                private evAuthService: AuthService,
                private httpService: HttpServiceHelper) {


        this.loginFailedMsg = '';

        this.appVersion = version.version;
        this.pageLoaded = false;
        this.isIframe = window !== window.parent && !window.opener;

        this.languages = config.client_info.languages;
        this.curLang = this.languages[0].name;
        translate.setDefaultLang(this.languages[0].id);
        translate.use(this.languages[0].id);

        let curURL: string = location.href;
        if (config.client_info.aloneMode) {
            if (curURL.indexOf('access_token') < 0) {
                this.checkLogin();
            }
        } else {
            localStorage.setItem(this.tokenSavingKey, '1');
            if (curURL.indexOf('?sbs=logout') > -1) {
                this.logout();
            } else if(curURL.indexOf('u=')>-1 &&  curURL.indexOf('t=')>-1 && curURL.indexOf('e=')>-1){
                let tokenInfo: any = this.getJsonFromUrl(location.href);
                localStorage.setItem(config.client_info.storeInfo.username, tokenInfo.u);
                localStorage.setItem(config.client_info.storeInfo.tokenKey, tokenInfo.t);
                localStorage.setItem(config.client_info.storeInfo.exptime, tokenInfo.e);
                localStorage.setItem(this.tokenSavingKey, '1');
                location.href = '/app/explorer';
            }else {
                this.checkLogin();
            }
        }
    }

    /**
     * Popup Login window
     */
    login() {
        this.loginFailedMsg = '';
        this.authService.loginPopup(['user.read']);
    }

    /**
     * Logout
     */
    logout() {
        this.loggedIn = false;
        this.accessToken = '';
        this.pageLoaded = true;
        localStorage.clear();
        if (config.client_info.aloneMode) {
            if (window.location.href.indexOf('/app/explorer') > 0) {
                //this.router.navigateByUrl('/app/home');
                window.location.href = '/app/home';
            }
        } else {
            window.location.href = config.client_info.pubWebsiteInfo.url + '?sbp=logout';
        }

    }

    /**
     * Check User Login Status
     */
    checkLogin() {
        let curToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        let expireTime = localStorage.getItem(config.client_info.storeInfo.exptime);
        let nowTime = Math.floor(new Date().getTime() / 1000);
        if (curToken) {
            if (expireTime && +expireTime > nowTime) {
                if (curToken) {
                    this.getUserProfile(curToken);
                } else {
                    this.logout();
                }
            } else {
                //alert('Expired, login again');
                this.logout();
            }
        } else {
            this.logout();
        }

    }

    getUserProfile(curToken) {
        this.httpService.httpGetRequest(curToken, config.client_info.apiEndPoints.serverBaseURL + '/authorize')
            .subscribe((resp: any) => {
                if (config.client_info.aloneMode) {
                    localStorage.setItem(config.client_info.storeInfo.username, this.authService.getUser().name);
                }
                this.pageLoaded = true;
                this.loggedIn = true;
                if (this.router.url == '/' || this.router.url == '/app/home') {
                    this.loginFailedMsg = '';
                    this.router.navigateByUrl('app/explorer');
                }
            }, error => {
                this.httpErrorHandler(error);
            });
    }

    httpErrorHandler(error: any) {
        // console.error('HTTP Error', error);
        switch (error.status) {
            case 401:
                alert(`${error.status} : ${error.statusText}`);
                this.logout();
                break;
            case 404:
                alert(`${error.status} : ${error.statusText}`);
                break;
            default:
                alert(`Error occurred Status Code : ${error.status} <br> Message: ${error.error.Message}`);
        }
    }

    ngOnInit() {

        let self = this;
        this.broadcastService.subscribe('msal:loginSuccess', (idToken) => {
            console.log('login success ' + JSON.stringify(idToken));
            // this.loggedIn = true;
            this.pageLoaded = false;
            // will work for acquireTokenSilent and acquireTokenPopup
            this.authService.acquireTokenSilent([config.client_info.msal_info.reqScopes]).then(function (accessToken) {
                //console.log('access token', JSON.stringify(accessToken));
                localStorage.setItem(config.client_info.storeInfo.tokenKey, accessToken);
                localStorage.setItem(config.client_info.storeInfo.username, '');
                self.accessToken = accessToken;
                self.setExpireTime();
                self.getUserProfile(accessToken);
            }).catch(function (err) {
                let result = self.stringAllReplace(err, '\r\n', '<br>');
                result = self.stringAllReplace(err, '\r', '<br>');
                result = self.stringAllReplace(err, '\n', '<br>');
                self.loginFailedMsg = result;
                self.loggedIn = false;
                self.pageLoaded = true;
            });
        });

        this.broadcastService.subscribe('msal:loginFailure', (payload) => {
            console.log('login failure ' + JSON.stringify(payload)); // _errorDesc
            let rawMsg = (payload._error.length > payload._errorDesc.length) ? payload._error : payload._errorDesc;
            let result = this.stringAllReplace(rawMsg, '\r\n', '<br>');
            result = this.stringAllReplace(rawMsg, '\r', '<br>');
            result = this.stringAllReplace(rawMsg, '\n', '<br>');
            this.loginFailedMsg = result;
            this.loggedIn = false;
            this.pageLoaded = true;
        });

        this.evAuthService.getAuthInfo().subscribe(authInfo => {
            if (!authInfo.login_st) {
                if (authInfo.hasOwnProperty('errorobj')) {
                    console.log(`${authInfo.errorobj.status} : ${authInfo.errorobj.statusText}`);
                } else {
                    console.log(JSON.stringify(authInfo));
                }
                alert('Expired, login again');
                this.logout();
            }
        });
    }

    /**
     * Custom Replace All function
     * @param srcStr
     * @param search
     * @param replacement
     */
    stringAllReplace(srcStr: string, search: string, replacement: string) {
        // let token = '\\r\\n';
        // let newToken = '<br>';
        return srcStr.split(search).join(replacement);
    }

    switchLanguage(language: string, langName: string) {
        this.translate.use(language);
        this.curLang = langName;
    }

    /**
     * Get expiration time from initial login response and save it
     */
    setExpireTime() {
        let i: number;
        for (i = 0; i < localStorage.length; i++) {
            let value: string = localStorage.getItem(localStorage.key(i));
            if ((value.indexOf('accessToken')) > -1 &&
                (value.indexOf('idToken')) > -1 &&
                (value.indexOf('expiresIn')) > -1) {
                let expireTime = JSON.parse(value).expiresIn;
                localStorage.setItem(config.client_info.storeInfo.exptime, expireTime);
            }
        }
    }

    getJsonFromUrl(url) {
        if (!url) url = location.href;
        let question = url.indexOf('?');
        let hash = url.indexOf('#');
        if (hash == -1 && question == -1) return {};
        if (hash == -1) hash = url.length;
        let query = question == -1 || hash == question + 1 ? url.substring(hash) :
            url.substring(question + 1, hash);
        let result = {};
        query.split('&').forEach(function (part) {
            if (!part) return;
            part = part.split('+').join(' '); // replace every + with space, regexp-free version
            let eq = part.indexOf('=');
            let key = eq > -1 ? part.substr(0, eq) : part;
            let val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : '';
            let from = key.indexOf('[');
            if (from == -1) result[decodeURIComponent(key)] = val;
            else {
                let to = key.indexOf(']', from);
                let index = decodeURIComponent(key.substring(from + 1, to));
                key = decodeURIComponent(key.substring(0, from));
                if (!result[key]) result[key] = [];
                if (!index) result[key].push(val);
                else result[key][index] = val;
            }
        });
        return result;
    }


    ngOnDestroy() {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
