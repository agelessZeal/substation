import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {BroadcastService, MsalService} from '@azure/msal-angular';
import {HttpServiceHelper} from "./core/http/HttpServiceHelper";
import {Router} from "@angular/router";

import version from '../../version.json';
import {ScrollMovingService} from "./core/services/scroll-moving.service";
import {AuthService} from "./core/services/auth.service";
import {SettingService} from "./core/services/setting.service";

declare var config;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'ManagementApp';
    appVersion: string;
    accessToken: string;
    loginFailedMsg: string;
    isIframe: boolean;
    loggedIn: boolean;
    pageLoaded: boolean;

    settingKey: string;

    @ViewChild('panel', {read: ElementRef}) public panel: ElementRef<any>;

    constructor(private broadcastService: BroadcastService,
                private httpService: HttpServiceHelper,
                private router: Router,
                private authService: MsalService,
                private evAuthService: AuthService,
                private settingService: SettingService,
                private scrollMovingService: ScrollMovingService) {

        this.appVersion = version.version;
        this.isIframe = window !== window.parent && !window.opener;
        this.loginFailedMsg = '';
        this.loggedIn = false;
        this.pageLoaded = false;

        this.settingKey = config.client_info.storeInfo.settingKey;

        if (location.href.indexOf('access_token') < 0) {
            this.checkLogin();
        }
    }

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
        this.httpService.httpGetRequest(curToken, config.client_info.apiURL.serverURL + '/authorize')
            .subscribe((resp: any) => {
                localStorage.setItem(config.client_info.storeInfo.username, this.authService.getUser().name);
                this.pageLoaded = true;
                this.loggedIn = true;
                if (this.router.url == '/' || this.router.url == '/app/home') {
                    this.router.navigateByUrl('/app/substation');
                }
            }, error => {
                console.log('Http get request to MS Graph failed' + JSON.stringify(error));
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
        this.clearLocalStorage();
        let curURL = window.location.href;
        if (curURL.indexOf('substation') > 0 ||
            curURL.indexOf('partner') > 0 ||
            curURL.indexOf('measurements') > 0 ||
            curURL.indexOf('global-settings') > 0 ||
            curURL.indexOf('virtual-substation') > 0 ||
            curURL.indexOf('device-types') > 0) {
            this.router.navigateByUrl('/app/home');
        }
    }

    ngOnInit() {
        let self = this;
        this.broadcastService.subscribe('msal:loginSuccess', (idToken) => {
            // console.log('login success ' + JSON.stringify(idToken));
            console.log('login success', JSON.stringify(idToken));
            // this.loggedIn = true;
            this.pageLoaded = false;
            // will work for acquireTokenSilent and acquireTokenPopup
            this.authService.acquireTokenSilent([config.client_info.msal_info.reqScopes]).then(function (accessToken) {
                localStorage.setItem(config.client_info.storeInfo.tokenKey, accessToken);
                localStorage.setItem(config.client_info.storeInfo.username, '');
                self.accessToken = accessToken;
                self.setExpireTime();
                self.getUserProfile(accessToken);
            }).catch(function (err) {
                let result = self.stringAllReplace(err, '\\r\\n', '<br>');
                result = self.stringAllReplace(err, '\\r', '<br>');
                result = self.stringAllReplace(err, '\\n', '<br>');
                self.loginFailedMsg = result;
                self.loggedIn = false;
                self.pageLoaded = true;
            });
        });

        this.broadcastService.subscribe('msal:loginFailure', (payload) => {
            console.log('login failure ' + JSON.stringify(payload)); // _errorDesc
            let rawMsg = (payload._error.length > payload._errorDesc.length) ? payload._error : payload._errorDesc;
            let result = this.stringAllReplace(rawMsg, '\\r\\n', '<br>');
            result = this.stringAllReplace(rawMsg, '\\r', '<br>');
            result = this.stringAllReplace(rawMsg, '\\n', '<br>');
            this.loginFailedMsg = result;
            this.loggedIn = false;
            this.pageLoaded = true;
        });

        this.scrollMovingService.getMovedScroll().subscribe(scrollInfo => {
            setTimeout(function () {
                let htmlElem: any;
                if (scrollInfo.elem == 'partner-contact-list' ||
                    scrollInfo.elem == 'partner-address-list' ||
                    scrollInfo.elem == 'partner-substation-list') {
                    htmlElem = document.getElementsByClassName(scrollInfo.elem);
                } else {
                    htmlElem = document.getElementsByClassName('mg-width-virtual');
                }
                if (htmlElem) {
                    htmlElem[htmlElem.length - 1].scrollIntoView({
                        behavior: "smooth",
                        block: "end",
                        inline: "nearest"
                    });
                }
            }, 100);
        });

        this.evAuthService.getAuthInfo().subscribe(authInfo => {
            if(!authInfo.login_st){
                alert('Expired, login again');
                console.log(authInfo);
                this.logout();
            }
        });

        this.settingService.getSettingInfo().subscribe(settingInfo => {
            let oldSetting:any = localStorage.getItem(settingInfo.tbl);
            console.log(settingInfo);
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

    onLeftRightScroll() {
        const htmlElem = document.getElementsByClassName('mg-width-virtual');
        if (htmlElem) {
            htmlElem[htmlElem.length - 1].scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
        }
    }

    onForwardScroll() {
        let parentViewTag: any;
        let componentsList: any;
        let curScrollPosX: number;
        componentsList = document.getElementsByClassName('mg-app-component');
        parentViewTag = document.getElementsByClassName('mg-app-content')[0];
        curScrollPosX = parentViewTag.scrollLeft;
        for (let i = 1; i < componentsList.length; i++) {
            if (curScrollPosX < componentsList[i].offsetLeft) {
                componentsList[i].scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
                return;
            }
        }
    }

    onRightLeftScroll() {
        const htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[0].scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
    }

    onBackwardScroll() {
        let parentViewTag: any;
        let componentsList: any;
        let curScrollPosX: number;
        componentsList = document.getElementsByClassName('mg-app-component');
        parentViewTag = document.getElementsByClassName('mg-app-content')[0];
        curScrollPosX = parentViewTag.scrollLeft;

        for (let i = componentsList.length - 1; i > -1; i--) {
            if ((curScrollPosX + parentViewTag.offsetWidth) > (componentsList[i].offsetLeft)) {
                if (componentsList[i - 1]) {
                    componentsList[i - 1].scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
                }
                return;
            }
        }
    }

    stringAllReplace(srcStr: string, search: string, replacement: string) {
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

    clearLocalStorage() {
        //don't delete key names with suffix
        for (let key in localStorage){
            if(key.indexOf('_width')<0 && key.indexOf('_setting')<0){
                localStorage.removeItem(key);
            }
        }
    }

    ngOnDestroy() {
    }
}
