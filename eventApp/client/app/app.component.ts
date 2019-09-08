import {Component, OnDestroy, OnInit} from '@angular/core';
import {BroadcastService, MsalService} from '@azure/msal-angular';
import {HttpServiceHelper} from './core/http/HttpServiceHelper';
import {Router} from '@angular/router';

import version from '../../version.json';
import {AuthService} from "./core/services/auth.service";
import {GoldenLayoutService} from "@embedded-enterprises/ng6-golden-layout";
import {SettingService} from "./core/services/setting.service";

declare var config: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'EventApp';
    appVersion: string;
    accessToken: string;
    loginFailedMsg: string;
    isIframe: boolean;
    loggedIn: boolean;
    pageLoaded: boolean;

    constructor(private broadcastService: BroadcastService,
                private httpService: HttpServiceHelper,
                private router: Router,
                private settingService: SettingService,
                private evAuthService: AuthService,
                private authService: MsalService) {

        this.appVersion = version.version;
        this.isIframe = window !== window.parent && !window.opener;
        this.loginFailedMsg = '';
        this.loggedIn = false;
        this.pageLoaded = false;

        if (location.href.indexOf('access_token') < 0) {
            this.checkLogin();
        }
    }

    checkLogin() {
        console.log(this.router.url);
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
        this.httpService.httpAuthGetRequest(curToken, config.client_info.apiURL.serverURL + '/authorize')
            .subscribe((respData: any) => {
                localStorage.setItem(config.client_info.storeInfo.username, this.authService.getUser().name);
                this.pageLoaded = true;
                this.loggedIn = true;
                if (this.router.url == '/' || this.router.url == '/app/home') {
                    this.router.navigateByUrl('/app/events');
                }
            }, error => {
                console.log('Authorization Failed' + JSON.stringify(error));
                this.logout();
            });
    }

    login() {
        this.loginFailedMsg = '';
        this.authService.loginPopup(['user.read']);
    }

    logout() {
        this.loggedIn = false;
        this.accessToken = '';
        this.pageLoaded = true;
        localStorage.clear();
        if (this.router.url != '/' && this.router.url != '/app/home') {
            // this.router.navigateByUrl('/app/home');
            location.href = '/app/home';
        }
    }

    ngOnInit() {
        let self = this;
        this.broadcastService.subscribe('msal:loginSuccess', (idToken) => {
            // console.log('login success ' + JSON.stringify(idToken));
            console.log('login success', JSON.stringify(idToken));
            // this.loggedIn = true;
            this.pageLoaded = false;
            // will work for acquireTokenSilent and acquireTokenPopup for Event Application
            this.authService.acquireTokenSilent([config.client_info.msal_info.reqScopes])
                .then(function (accessToken) {
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
                alert('Expired, login again');
                this.logout();
            }
        });

        this.settingService.getSettingInfo().subscribe(settingInfo => {
            let oldSetting:any = localStorage.getItem(settingInfo.tbl);
            if (oldSetting) {
                oldSetting = JSON.parse(oldSetting);
                if (settingInfo.key == 'filter') {
                    oldSetting.filter = !settingInfo.value;
                } else {
                    //This is visible features of column
                    let prevColList = oldSetting.visible;
                    if(settingInfo.value.st) {
                        prevColList.push(settingInfo.value.col);
                    } else {
                        let indexOfCol = prevColList.indexOf(settingInfo.value.col);
                        if (indexOfCol > -1) {
                            prevColList.splice(indexOfCol, 1);
                        }
                    }
                    oldSetting.visible = prevColList;
                }
                localStorage.setItem(settingInfo.tbl, JSON.stringify(oldSetting));
            }
        });

    }

    stringAllReplace(srcStr: string, search: string, replacement: string) {
        // let token = '\\r\\n';
        // let newToken = '<br>';
        return srcStr.split(search).join(replacement);
    }

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

    ngOnDestroy() {
    }
}
