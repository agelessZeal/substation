(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./client/$$_lazy_route_resource lazy recursive":
/*!*************************************************************!*\
  !*** ./client/$$_lazy_route_resource lazy namespace object ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./client/app/app-routing.module.ts":
/*!******************************************!*\
  !*** ./client/app/app-routing.module.ts ***!
  \******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./client/app/modules/pages/home/home.component.ts");
/* harmony import */ var _modules_pages_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pages/explorer/explorer.component */ "./client/app/modules/pages/explorer/explorer.component.ts");





var routes = [
    { path: 'app/home', component: _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'app/explorer', component: _modules_pages_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_4__["ExplorerComponent"] },
    { path: '', redirectTo: 'app/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./client/app/app.component.css":
/*!**************************************!*\
  !*** ./client/app/app.component.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-nav {\r\n  flex-direction: row;\r\n}\r\n\r\n.nav-link {\r\n  padding-right: .5rem !important;\r\n  padding-left: .5rem !important;\r\n}\r\n\r\n/* Fixes dropdown menus placed on the right side */\r\n\r\n.ml-auto .dropdown-menu {\r\n  left: auto !important;\r\n  right: 0px;\r\n}\r\n\r\n.navbar a {\r\n   cursor: pointer;\r\n}\r\n\r\n.page-loading{\r\n  position: absolute;\r\n  z-index: 300;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #e2e2e6fc;\r\n  border: 1px solid black;\r\n}\r\n\r\n.tree-waiting .loader{\r\n  width: 50px;\r\n  height: 50px;\r\n  border-width: 6px;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n  min-width: 7rem;\r\n}\r\n\r\n.dropdown-menu a:hover{\r\n  background-color: #037bfc;\r\n  color: white;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.login-failed-msg {\r\n  position: fixed;\r\n  right: 10px;\r\n  top: 62px;\r\n  padding: 9px;\r\n  color: #ffffff;\r\n  background-color: #f90837;\r\n  border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDOztBQUVBLGtEQUFrRDs7QUFDbEQ7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0dBQ0csZUFBZTtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLW5hdiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctbGVmdDogLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogRml4ZXMgZHJvcGRvd24gbWVudXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlICovXHJcbi5tbC1hdXRvIC5kcm9wZG93bi1tZW51IHtcclxuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wYWdlLWxvYWRpbmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDMwMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlNmZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi50cmVlLXdhaXRpbmcgLmxvYWRlcntcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiA2cHg7XHJcbn1cclxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gIG1pbi13aWR0aDogN3JlbTtcclxufVxyXG4uZHJvcGRvd24tbWVudSBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzdiZmM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZC1tc2cge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IDYycHg7XHJcbiAgcGFkZGluZzogOXB4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTA4Mzc7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <a class=\"navbar-brand\" href=\"#\">{{title}} {{appVersion}} </a>\r\n  <ul class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item active\"><a class=\"nav-link\" [routerLink]=\"['/app/explorer']\" *ngIf=\"loggedIn\">{{ 'Explorer.title' | translate }}</a></li>\r\n  </ul>\r\n  <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"lang-dropdown\"\r\n             data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <i class=\"fa fa-globe\"></i> {{curLang}}\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"lang-dropdown\">\r\n              <a class=\"dropdown-item\" *ngFor=\"let lang of languages\" (click)=\"switchLanguage(lang.id, lang.name)\">{{lang.name}}</a>\r\n          </div>\r\n      </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"!loggedIn\" (click)=\"login()\">\r\n        <i class=\"fa fa-sign-in\"></i>{{ 'Home.login' | translate }}\r\n        </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n        <a class=\"nav-link\" *ngIf=\"loggedIn\" (click)=\"logout()\">\r\n            <i class=\"fa fa-sign-out\"></i>{{ 'Explorer.logout' | translate }}\r\n        </a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n<div class=\"login-failed-msg\" [innerHTML]=\"loginFailedMsg\" *ngIf=\"!!(loginFailedMsg)\">\r\n</div>\r\n\r\n<div class=\"container-fluid sb-app-container\">\r\n  <router-outlet *ngIf=\"!isIframe\"></router-outlet>\r\n</div>\r\n\r\n<div class=\"sb-page-loading\" *ngIf=\"!pageLoaded\">\r\n  <div class=\"loader\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./client/app/app.component.ts":
/*!*************************************!*\
  !*** ./client/app/app.component.ts ***!
  \*************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _version_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../version.json */ "./version.json");
var _version_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../version.json */ "./version.json", 1);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/auth.service */ "./client/app/core/services/auth.service.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(translate, broadcastService, authService, router, evAuthService, httpService) {
        this.translate = translate;
        this.broadcastService = broadcastService;
        this.authService = authService;
        this.router = router;
        this.evAuthService = evAuthService;
        this.httpService = httpService;
        this.title = 'SubstationApp';
        this.tokenSavingKey = 'ss_sub_key';
        this.loginFailedMsg = '';
        this.appVersion = _version_json__WEBPACK_IMPORTED_MODULE_5__.version;
        this.pageLoaded = false;
        this.isIframe = window !== window.parent && !window.opener;
        this.languages = config.client_info.languages;
        this.curLang = this.languages[0].name;
        translate.setDefaultLang(this.languages[0].id);
        translate.use(this.languages[0].id);
        var curURL = location.href;
        if (config.client_info.aloneMode) {
            if (curURL.indexOf('access_token') < 0) {
                this.checkLogin();
            }
        }
        else {
            localStorage.setItem(this.tokenSavingKey, '1');
            if (curURL.indexOf('?sbs=logout') > -1) {
                this.logout();
            }
            else if (curURL.indexOf('u=') > -1 && curURL.indexOf('t=') > -1 && curURL.indexOf('e=') > -1) {
                var tokenInfo = this.getJsonFromUrl(location.href);
                localStorage.setItem(config.client_info.storeInfo.username, tokenInfo.u);
                localStorage.setItem(config.client_info.storeInfo.tokenKey, tokenInfo.t);
                localStorage.setItem(config.client_info.storeInfo.exptime, tokenInfo.e);
                localStorage.setItem(this.tokenSavingKey, '1');
                location.href = '/app/explorer';
            }
            else {
                this.checkLogin();
            }
        }
    }
    /**
     * Popup Login window
     */
    AppComponent.prototype.login = function () {
        this.loginFailedMsg = '';
        this.authService.loginPopup(['user.read']);
    };
    /**
     * Logout
     */
    AppComponent.prototype.logout = function () {
        this.loggedIn = false;
        this.accessToken = '';
        this.pageLoaded = true;
        localStorage.clear();
        if (config.client_info.aloneMode) {
            if (window.location.href.indexOf('/app/explorer') > 0) {
                //this.router.navigateByUrl('/app/home');
                window.location.href = '/app/home';
            }
        }
        else {
            window.location.href = config.client_info.pubWebsiteInfo.url + '?sbp=logout';
        }
    };
    /**
     * Check User Login Status
     */
    AppComponent.prototype.checkLogin = function () {
        var curToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        var expireTime = localStorage.getItem(config.client_info.storeInfo.exptime);
        var nowTime = Math.floor(new Date().getTime() / 1000);
        if (curToken) {
            if (expireTime && +expireTime > nowTime) {
                if (curToken) {
                    this.getUserProfile(curToken);
                }
                else {
                    this.logout();
                }
            }
            else {
                //alert('Expired, login again');
                this.logout();
            }
        }
        else {
            this.logout();
        }
    };
    AppComponent.prototype.getUserProfile = function (curToken) {
        var _this = this;
        this.httpService.httpGetRequest(curToken, config.client_info.apiEndPoints.serverBaseURL + '/authorize')
            .subscribe(function (resp) {
            if (config.client_info.aloneMode) {
                localStorage.setItem(config.client_info.storeInfo.username, _this.authService.getUser().name);
            }
            _this.pageLoaded = true;
            _this.loggedIn = true;
            if (_this.router.url == '/' || _this.router.url == '/app/home') {
                _this.loginFailedMsg = '';
                _this.router.navigateByUrl('app/explorer');
            }
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    AppComponent.prototype.httpErrorHandler = function (error) {
        // console.error('HTTP Error', error);
        switch (error.status) {
            case 401:
                alert(error.status + " : " + error.statusText);
                this.logout();
                break;
            case 404:
                alert(error.status + " : " + error.statusText);
                break;
            default:
                alert("Error occurred Status Code : " + error.status + " <br> Message: " + error.error.Message);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.broadcastService.subscribe('msal:loginSuccess', function (idToken) {
            console.log('login success ' + JSON.stringify(idToken));
            // this.loggedIn = true;
            _this.pageLoaded = false;
            // will work for acquireTokenSilent and acquireTokenPopup
            _this.authService.acquireTokenSilent([config.client_info.msal_info.reqScopes]).then(function (accessToken) {
                //console.log('access token', JSON.stringify(accessToken));
                localStorage.setItem(config.client_info.storeInfo.tokenKey, accessToken);
                localStorage.setItem(config.client_info.storeInfo.username, '');
                self.accessToken = accessToken;
                self.setExpireTime();
                self.getUserProfile(accessToken);
            }).catch(function (err) {
                var result = self.stringAllReplace(err, '\r\n', '<br>');
                result = self.stringAllReplace(err, '\r', '<br>');
                result = self.stringAllReplace(err, '\n', '<br>');
                self.loginFailedMsg = result;
                self.loggedIn = false;
                self.pageLoaded = true;
            });
        });
        this.broadcastService.subscribe('msal:loginFailure', function (payload) {
            console.log('login failure ' + JSON.stringify(payload)); // _errorDesc
            var rawMsg = (payload._error.length > payload._errorDesc.length) ? payload._error : payload._errorDesc;
            var result = _this.stringAllReplace(rawMsg, '\r\n', '<br>');
            result = _this.stringAllReplace(rawMsg, '\r', '<br>');
            result = _this.stringAllReplace(rawMsg, '\n', '<br>');
            _this.loginFailedMsg = result;
            _this.loggedIn = false;
            _this.pageLoaded = true;
        });
        this.evAuthService.getAuthInfo().subscribe(function (authInfo) {
            if (!authInfo.login_st) {
                if (authInfo.hasOwnProperty('errorobj')) {
                    console.log(authInfo.errorobj.status + " : " + authInfo.errorobj.statusText);
                }
                else {
                    console.log(JSON.stringify(authInfo));
                }
                alert('Expired, login again');
                _this.logout();
            }
        });
    };
    /**
     * Custom Replace All function
     * @param srcStr
     * @param search
     * @param replacement
     */
    AppComponent.prototype.stringAllReplace = function (srcStr, search, replacement) {
        // let token = '\\r\\n';
        // let newToken = '<br>';
        return srcStr.split(search).join(replacement);
    };
    AppComponent.prototype.switchLanguage = function (language, langName) {
        this.translate.use(language);
        this.curLang = langName;
    };
    /**
     * Get expiration time from initial login response and save it
     */
    AppComponent.prototype.setExpireTime = function () {
        var i;
        for (i = 0; i < localStorage.length; i++) {
            var value = localStorage.getItem(localStorage.key(i));
            if ((value.indexOf('accessToken')) > -1 &&
                (value.indexOf('idToken')) > -1 &&
                (value.indexOf('expiresIn')) > -1) {
                var expireTime = JSON.parse(value).expiresIn;
                localStorage.setItem(config.client_info.storeInfo.exptime, expireTime);
            }
        }
    };
    AppComponent.prototype.getJsonFromUrl = function (url) {
        if (!url)
            url = location.href;
        var question = url.indexOf('?');
        var hash = url.indexOf('#');
        if (hash == -1 && question == -1)
            return {};
        if (hash == -1)
            hash = url.length;
        var query = question == -1 || hash == question + 1 ? url.substring(hash) :
            url.substring(question + 1, hash);
        var result = {};
        query.split('&').forEach(function (part) {
            if (!part)
                return;
            part = part.split('+').join(' '); // replace every + with space, regexp-free version
            var eq = part.indexOf('=');
            var key = eq > -1 ? part.substr(0, eq) : part;
            var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : '';
            var from = key.indexOf('[');
            if (from == -1)
                result[decodeURIComponent(key)] = val;
            else {
                var to = key.indexOf(']', from);
                var index = decodeURIComponent(key.substring(from + 1, to));
                key = decodeURIComponent(key.substring(0, from));
                if (!result[key])
                    result[key] = [];
                if (!index)
                    result[key].push(val);
                else
                    result[key][index] = val;
            }
        });
        return result;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./client/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: HttpLoaderFactory, loggerCallback, protectedResourceMap, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerCallback", function() { return loggerCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedResourceMap", function() { return protectedResourceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! msal */ "./node_modules/msal/lib-commonjs/index.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(msal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-tree */ "./node_modules/ng2-tree/index.js");
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_tree__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-tooltip-directive */ "./node_modules/ng2-tooltip-directive/fesm5/ng2-tooltip-directive.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./client/app/modules/pages/home/home.component.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _modules_pages_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/pages/explorer/explorer.component */ "./client/app/modules/pages/explorer/explorer.component.ts");
/* harmony import */ var _modules_components_device_tree_device_tree_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/components/device-tree/device-tree.component */ "./client/app/modules/components/device-tree/device-tree.component.ts");
/* harmony import */ var _modules_components_chart_view_chart_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/components/chart-view/chart-view.component */ "./client/app/modules/components/chart-view/chart-view.component.ts");


























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}
var protectedResourceMap = [[config.client_info.apiEndPoints.graphProfileAPI, ['user.read']]];
var AppModule = /** @class */ (function () {
    function AppModule() {
        console.log('....AppModule Constructor');
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
                _modules_pages_explorer_explorer_component__WEBPACK_IMPORTED_MODULE_22__["ExplorerComponent"],
                _modules_components_device_tree_device_tree_component__WEBPACK_IMPORTED_MODULE_23__["DeviceTreeComponent"],
                _modules_components_chart_view_chart_view_component__WEBPACK_IMPORTED_MODULE_24__["ChartViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_14__["ChartModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_19__["MomentModule"],
                ng2_tooltip_directive__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_6__["MsalModule"].forRoot({
                    clientID: config.client_info.msal_info.clientID,
                    authority: config.client_info.msal_info.authority,
                    validateAuthority: true,
                    redirectUri: config.client_info.msal_info.redirectUri,
                    cacheLocation: 'localStorage',
                    postLogoutRedirectUri: config.client_info.msal_info.postLogoutRedirectUri,
                    navigateToLoginRequestUrl: true,
                    popUp: false,
                    consentScopes: ['user.read', config.client_info.msal_info.consentScopes],
                    unprotectedResources: ['https://www.microsoft.com/en-us/'],
                    protectedResourceMap: protectedResourceMap,
                    logger: loggerCallback,
                    correlationId: '9843',
                    level: msal__WEBPACK_IMPORTED_MODULE_8__["LogLevel"].Info,
                    piiLoggingEnabled: true
                }),
                ng2_tree__WEBPACK_IMPORTED_MODULE_9__["TreeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_10__["OwlNativeDateTimeModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_11__["NgxMaskModule"].forRoot(),
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_12__["NgxJsonViewerModule"],
            ],
            providers: [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_21__["HttpServiceHelper"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./client/app/core/http/HttpServiceHelper.ts":
/*!***************************************************!*\
  !*** ./client/app/core/http/HttpServiceHelper.ts ***!
  \***************************************************/
/*! exports provided: HttpServiceHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceHelper", function() { return HttpServiceHelper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HttpServiceHelper = /** @class */ (function () {
    function HttpServiceHelper(http) {
        this.http = http;
    }
    HttpServiceHelper.prototype.httpAuthGetRequest = function (accessToken, url) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.get(url, httpOptions);
    };
    /**
     * Return only Response Body
     * @param accessToken
     * @param url
     */
    HttpServiceHelper.prototype.httpGetRequest = function (accessToken, url) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
        };
        return this.http.get(url, httpOptions);
    };
    /**
     * Return both Header and Response Body
     * @param accessToken
     * @param url
     */
    HttpServiceHelper.prototype.httpGetRequestWithHeader = function (accessToken, url) {
        return this.http.get(url, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }), observe: 'response' });
    };
    HttpServiceHelper.prototype.httpPostRequest = function (accessToken, url, postBody) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.post(url, postBody, httpOptions);
    };
    HttpServiceHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServiceHelper);
    return HttpServiceHelper;
}());



/***/ }),

/***/ "./client/app/core/interfaces/chart-settings.ts":
/*!******************************************************!*\
  !*** ./client/app/core/interfaces/chart-settings.ts ***!
  \******************************************************/
/*! exports provided: ChartSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartSettings", function() { return ChartSettings; });
/**
 * Chart Basic Setting
 */
var ChartSettings = /** @class */ (function () {
    function ChartSettings() {
    }
    ChartSettings.splinePlot = {
        series: {
            connectNulls: true,
            color: '#5d62b5',
            lineWidth: 1,
            shadow: true,
            marker: {
                enabled: true,
                symbol: 'circle',
                width: 4,
                height: 4,
                states: {
                    hover: {
                        enabled: true
                    }
                }
            }
        }
    };
    ChartSettings.yAxis = {
        min: 0,
        max: 3.5,
        lineWidth: 1,
        lineColor: '#CCCCCC',
        tickPixelInterval: 50,
        tickLength: 5,
        tickWidth: 1,
        tickColor: '#FFFFFF',
        tickPosition: 'inside',
        gridLineWidth: 1,
        gridLineColor: '#444444',
        alternateGridColor: 'rgba(0, 0, 0, .2)',
        minorTickInterval: null,
        minorTickLength: 2,
        minorTickWidth: 0,
        minorTickColor: '#cccccc',
        minorTickPosition: 'outside',
        minorGridLineWidth: 1,
        minorGridLineColor: '#333333',
        minRange: 1,
        showFirstLabel: false,
        showLastLabel: true,
        maxZoom: 1
    };
    return ChartSettings;
}());



/***/ }),

/***/ "./client/app/core/services/auth.service.ts":
/*!**************************************************!*\
  !*** ./client/app/core/services/auth.service.ts ***!
  \**************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AuthService.prototype.setAuthInfo = function (authInfo) {
        this.subject.next(authInfo);
    };
    AuthService.prototype.getAuthInfo = function () {
        return this.subject.asObservable();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./client/app/core/services/node-type.service.ts":
/*!*******************************************************!*\
  !*** ./client/app/core/services/node-type.service.ts ***!
  \*******************************************************/
/*! exports provided: NodeInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeInfoService", function() { return NodeInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NodeInfoService = /** @class */ (function () {
    function NodeInfoService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    NodeInfoService.prototype.setNodeInfo = function (nodeType, nodeValue) {
        this.subject.next({ type: nodeType, value: nodeValue });
    };
    NodeInfoService.prototype.getNodeInfo = function () {
        return this.subject.asObservable();
    };
    NodeInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NodeInfoService);
    return NodeInfoService;
}());



/***/ }),

/***/ "./client/app/core/services/tree-toggle.service.ts":
/*!*********************************************************!*\
  !*** ./client/app/core/services/tree-toggle.service.ts ***!
  \*********************************************************/
/*! exports provided: TreeToggleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeToggleService", function() { return TreeToggleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var TreeToggleService = /** @class */ (function () {
    function TreeToggleService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TreeToggleService.prototype.setToggle = function (toggledTree) {
        this.subject.next(toggledTree);
    };
    TreeToggleService.prototype.getToggleInfo = function () {
        return this.subject.asObservable();
    };
    TreeToggleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TreeToggleService);
    return TreeToggleService;
}());



/***/ }),

/***/ "./client/app/modules/components/chart-view/chart-view.component.css":
/*!***************************************************************************!*\
  !*** ./client/app/modules/components/chart-view/chart-view.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart-view-wrapper {\r\n    width: 100%;\r\n    height: 89vh;\r\n    display: flex;\r\n    align-items: stretch;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\n#ms-label {\r\n    border: none;\r\n}\r\n\r\n.chart-area {\r\n    background-color: #eaeaeac9;\r\n    position: relative;\r\n    padding: 0px;\r\n    flex: 1;\r\n}\r\n\r\n#time-span-set-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.time-span-group .form-control {\r\n    display: inline-block;\r\n    padding: .375rem .25rem;\r\n}\r\n\r\n.time-span-group button {\r\n    width: 13%;\r\n    margin-left: 5px;\r\n    vertical-align: inherit !important;\r\n\r\n}\r\n\r\n.time-span-group span {\r\n    padding: 0.1rem;\r\n}\r\n\r\n#ts-group-day {\r\n    width: 20%;\r\n}\r\n\r\n#ts-group-hour {\r\n    width: 10%;\r\n}\r\n\r\n#ts-group-minute {\r\n    width: 10%;\r\n}\r\n\r\n#ts-group-seconds {\r\n    width: 10%;\r\n}\r\n\r\n.invalid-form-elem {\r\n    border: 1px solid red;\r\n}\r\n\r\n#numberOf-set-btn {\r\n    cursor: pointer;\r\n}\r\n\r\n.data-load-waiting {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n    /*border: 1px solid black;*/\r\n}\r\n\r\n.data-load-waiting .loader {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-width: 6px;\r\n    margin: 30vh auto !important;\r\n}\r\n\r\n.smart_dev_chart {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    position: absolute;\r\n}\r\n\r\n.start-from-date {\r\n    float: left;\r\n}\r\n\r\n.end-to-date {\r\n    float: right;\r\n}\r\n\r\n.my-inline-form-group {\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.my-inline-form-label {\r\n    margin-bottom: 0\r\n}\r\n\r\n.my-inline-form-control {\r\n    width: auto;\r\n    min-width: 150px;\r\n}\r\n\r\n.custom-control-inline {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.ms-metering-type {\r\n    display: inline-block;\r\n}\r\n\r\n.ms-metering-type .form-group{\r\n    display: inline-block;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.chart-view-wrapper .date-range-wrapper .form-group {\r\n    margin-top: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.chart-area .form-group {\r\n    position: absolute;\r\n    right: 10px;\r\n    top:10px;\r\n    z-index: 1;\r\n    border-radius: 0;\r\n}\r\n\r\n.date-range-wrapper {\r\n    margin-bottom: 10px\r\n}\r\n\r\n.my-time-span-group {\r\n    /*width: 320px;*/\r\n    align-items: center;\r\n    margin-top: 10px;\r\n}\r\n\r\n.my-refresh-time-span-group {\r\n    /*width: 320px;*/\r\n    align-items: center;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#timespan,\r\n#refreshtime,\r\n#totaltime {\r\n    padding-left: 0.3rem;\r\n    padding-right: 0;\r\n}\r\n\r\n#measurement-types:hover .ms-tooltip {\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n\r\n#metering-types:hover .ms-tooltip {\r\n    display: block;\r\n    opacity: 1;\r\n}\r\n\r\n.ms-tooltip{\r\n    position: absolute;\r\n    background-color: black;\r\n    left: 102%;\r\n    min-width: 220px;\r\n    top: 0;\r\n    border-radius: 10px;\r\n    display: none;\r\n    opacity: 0;\r\n    transition: opacity 0.5s;\r\n    text-align: left;\r\n    padding: 10px;\r\n    z-index: 1000;\r\n}\r\n\r\n.ms-tooltip span {\r\n    display: block;\r\n    color: white;\r\n}\r\n\r\n.series-types {\r\n    display: flex;\r\n}\r\n\r\n.tree-toggle-btn {\r\n    margin-right: 10px;\r\n}\r\n\r\n.series-types .series-types-btn {\r\n    background-color: #77757a;\r\n    margin-right: 10px;\r\n    border-color: #77757a;\r\n}\r\n\r\n.series-types .series-types-btn.selected {\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2NoYXJ0LXZpZXcvY2hhcnQtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLE9BQU87QUFDWDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUNBOzs7SUFHSSxvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvY2hhcnQtdmlldy9jaGFydC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnQtdmlldy13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4OXZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNtcy1sYWJlbCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGFydC1hcmVhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYWVhZWFjOTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbiN0aW1lLXNwYW4tc2V0LWJ0biB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aW1lLXNwYW4tZ3JvdXAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC4yNXJlbTtcclxufVxyXG5cclxuLnRpbWUtc3Bhbi1ncm91cCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLnRpbWUtc3Bhbi1ncm91cCBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuI3RzLWdyb3VwLWRheSB7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4jdHMtZ3JvdXAtaG91ciB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcblxyXG4jdHMtZ3JvdXAtbWludXRlIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbiN0cy1ncm91cC1zZWNvbmRzIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbn1cclxuXHJcbi5pbnZhbGlkLWZvcm0tZWxlbSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbiNudW1iZXJPZi1zZXQtYnRuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRhdGEtbG9hZC13YWl0aW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTZmYztcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cclxufVxyXG5cclxuLmRhdGEtbG9hZC13YWl0aW5nIC5sb2FkZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxuICAgIG1hcmdpbjogMzB2aCBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbWFydF9kZXZfY2hhcnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnN0YXJ0LWZyb20tZGF0ZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmVuZC10by1kYXRlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm15LWlubGluZS1mb3JtLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubXktaW5saW5lLWZvcm0tbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4ubXktaW5saW5lLWZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1pbmxpbmUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5tcy1tZXRlcmluZy10eXBlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubXMtbWV0ZXJpbmctdHlwZSAuZm9ybS1ncm91cHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLmNoYXJ0LXZpZXctd3JhcHBlciAuZGF0ZS1yYW5nZS13cmFwcGVyIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5jaGFydC1hcmVhIC5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOjEwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uZGF0ZS1yYW5nZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHhcclxufVxyXG4ubXktdGltZS1zcGFuLWdyb3VwIHtcclxuICAgIC8qd2lkdGg6IDMyMHB4OyovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubXktcmVmcmVzaC10aW1lLXNwYW4tZ3JvdXAge1xyXG4gICAgLyp3aWR0aDogMzIwcHg7Ki9cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4jdGltZXNwYW4sXHJcbiNyZWZyZXNodGltZSxcclxuI3RvdGFsdGltZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuI21lYXN1cmVtZW50LXR5cGVzOmhvdmVyIC5tcy10b29sdGlwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4jbWV0ZXJpbmctdHlwZXM6aG92ZXIgLm1zLXRvb2x0aXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5tcy10b29sdGlwe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBsZWZ0OiAxMDIlO1xyXG4gICAgbWluLXdpZHRoOiAyMjBweDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG4ubXMtdG9vbHRpcCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zZXJpZXMtdHlwZXMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRyZWUtdG9nZ2xlLWJ0biB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXJpZXMtdHlwZXMgLnNlcmllcy10eXBlcy1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzU3YTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1jb2xvcjogIzc3NzU3YTtcclxufVxyXG5cclxuLnNlcmllcy10eXBlcyAuc2VyaWVzLXR5cGVzLWJ0bi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/chart-view/chart-view.component.html":
/*!****************************************************************************!*\
  !*** ./client/app/modules/components/chart-view/chart-view.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-view-wrapper\">\r\n    <div class=\"series-types\">\r\n        <button class=\"btn btn-outline-primary tree-toggle-btn\" (click)=\"onTreeToggle()\">\r\n            <i class=\"fa\" [ngClass]=\"{'fa-angle-double-right': isTreeShowed, 'fa-angle-double-left': !isTreeShowed}\" aria-hidden=\"true\"></i>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary series-types-btn\" *ngFor=\"let seriesType of seriesTypes\"\r\n                [ngClass]=\"{'selected': (seriesType == curSeriesType)}\" (click)=\"onSelectSeries(seriesType)\">\r\n            {{ 'Explorer.'+ seriesType | translate}}\r\n        </button>\r\n        <div class=\"ms-metering-type\">\r\n            <div class=\"form-group my-inline-form-group\" *ngIf=\"curSeriesType !== 'Metering'\" id=\"measurement-types\">\r\n                <select class=\"form-control my-inline-form-control\" name=\"ms-type\" id=\"ms-type\"\r\n                        (change)=\"onSelectMSType($event.target.value)\">\r\n                    <option *ngFor=\"let msitem of msTypes\" [value]=\"msitem.id\" [selected]=\"curMSType.id == msitem.id\">\r\n                        {{msitem.name}}\r\n                    </option>\r\n                </select>\r\n                <div class=\"ms-tooltip\">\r\n                    <span>{{ 'Explorer.id' | translate }} : {{curMSType?.id}}</span>\r\n                    <span>{{ 'Explorer.name' | translate }} : {{curMSType?.name}}</span>\r\n                    <span>{{ 'Explorer.unit' | translate }} : {{curMSType?.unit}}</span>\r\n                    <span>{{ 'Explorer.multiplier' | translate }} : {{curMSType?.multiplier}}</span>\r\n                    <span>{{ 'Explorer.description' | translate }} : {{curMSType?.description}}</span>\r\n                    <span>{{ 'Explorer.format' | translate }} : {{curMSType?.format}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group my-inline-form-group\" *ngIf=\"curSeriesType == 'Metering'\" id=\"metering-types\">\r\n                <select class=\"form-control my-inline-form-control\" name=\"metering-type\" id=\"metering-type\"\r\n                        (change)=\"onSelectMetering($event.target.value)\">\r\n                    <option *ngFor=\"let metering of meterings\" [value]=\"metering.id\"  [selected]=\"curMeteringType.id == metering.id\">\r\n                        {{metering.name}}\r\n                    </option>\r\n                </select>\r\n                <div class=\"ms-tooltip\">\r\n                    <span>{{ 'Explorer.id' | translate }} : {{curMeteringType?.id}}</span>\r\n                    <span>{{ 'Explorer.name' | translate }} : {{curMeteringType?.name}}</span>\r\n                    <span>{{ 'Explorer.unit' | translate }} : {{curMeteringType?.unit}}</span>\r\n                    <span>{{ 'Explorer.multiplier' | translate }} : {{curMeteringType?.multiplier}}</span>\r\n                    <span>{{ 'Explorer.description' | translate }} : {{curMeteringType?.description}}</span>\r\n                    <span>{{ 'Explorer.format' | translate }} : {{curMeteringType?.format}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 col-sm-12 col-12\" *ngIf=\"curSeriesType == 'Metering'\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"form-group\" style=\"display: none\">\r\n                        <label for=\"numberOf\">Number Of <span class=\"red\">*</span> : </label>\r\n                        <div class=\"input-group mb-3\">\r\n                            <input class=\"form-control\" id=\"numberOf\"\r\n                                   [(ngModel)]=\"numberOf\" (ngModelChange)=\"onChangeNumberOf($event)\"\r\n                                   name=\"numberOf\" type=\"number\" step=\"1\">\r\n                            <div class=\"input-group-append\" (click)=\"onSelectNumberOf()\" id=\"numberOf-set-btn\">\r\n                                <span class=\"input-group-text\">{{ 'Explorer.set' | translate }}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"date-range-wrapper\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"start-from-date\">\r\n                    <div class=\"form-group my-inline-form-group\" *ngIf=\"curSeriesType == 'Metering'\">\r\n                        <label for=\"ms-type\" class=\"my-inline-form-label\">{{ 'Explorer.startdt' | translate }} </label>\r\n                        <input placeholder=\"Date Time:\" class=\"form-control my-inline-form-control\"\r\n                               [(ngModel)]=\"startDate\" (ngModelChange)=\"onChangeStartDate($event)\"\r\n                               [owlDateTimeTrigger]=\"startdt\" [owlDateTime]=\"startdt\">\r\n                        <owl-date-time #startdt></owl-date-time>\r\n                    </div>\r\n                    <div class=\"form-group my-inline-form-group\" *ngIf=\"curSeriesType == 'Historical Measurement'\">\r\n                        <label for=\"ms-type\" class=\"my-inline-form-label\">{{ 'Explorer.fromdt' | translate }}&nbsp;</label>\r\n                        <input placeholder=\"Date Time:\" class=\"form-control my-inline-form-control\"\r\n                               [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeFromDate($event)\"\r\n                               [owlDateTimeTrigger]=\"fromdt\" [owlDateTime]=\"fromdt\">\r\n                        <owl-date-time #fromdt></owl-date-time>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"input-group my-time-span-group\"\r\n                     [ngClass]=\"{'invalid-form-elem ':!isTimeSpanValid}\" *ngIf=\"curSeriesType == 'Metering'\">\r\n                    <label for=\"timespan\" class=\"my-inline-form-label\">{{ 'Explorer.timespan' | translate }}&nbsp;</label>\r\n                    <input type=\"number\" class=\"form-control\" name=\"timespan\" [min]=\"1\" step=\"1\"\r\n                           id=\"timespan\" [(ngModel)]=\"tsValue\">\r\n                    <select class=\"form-control\" data-live-search=\"true\"\r\n                            (change)=\"onSelectTimeSpanPrecision($event.target.value)\">\r\n                        <option *ngFor=\"let timeprec of timePrecList\"\r\n                                [selected]=\"timeprec == curPrecision\"\r\n                                value=\"{{timeprec}}\">\r\n                            {{ 'Explorer.'+timeprec | translate }}\r\n                        </option>\r\n                    </select>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-outline-secondary\"\r\n                                type=\"button\"  (click)=\"onSelectTimeSpan()\">{{ 'Explorer.set' | translate }}</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"end-to-date\">\r\n                    <div class=\"form-group my-inline-form-group\" *ngIf=\"curSeriesType == 'Metering'\">\r\n                        <label for=\"ms-type\" class=\"my-inline-form-label\">{{ 'Explorer.enddt' | translate }}&nbsp;</label>\r\n                        <input placeholder=\"Date Time:\" class=\"form-control my-inline-form-control\"\r\n                               [(ngModel)]=\"endDate\" (ngModelChange)=\"onChangeEndDate($event)\"\r\n                               [owlDateTimeTrigger]=\"enddt\" [owlDateTime]=\"enddt\">\r\n                        <owl-date-time #enddt></owl-date-time>\r\n                    </div>\r\n                    <div class=\"form-group my-inline-form-group\" *ngIf=\"curSeriesType == 'Historical Measurement'\">\r\n                        <label for=\"ms-type\">{{ 'Explorer.todt' | translate }}&nbsp;</label>\r\n                        <input placeholder=\"Date Time:\" class=\"form-control my-inline-form-control\"\r\n                               [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeToDate($event)\"\r\n                               [owlDateTimeTrigger]=\"todt\" [owlDateTime]=\"todt\">\r\n                        <owl-date-time #todt></owl-date-time>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n            <div class=\"input-group my-refresh-time-span-group\"  *ngIf=\"curSeriesType == 'Actual Measurement'\">\r\n                <label for=\"timespan\" class=\"my-inline-form-label\">{{ 'Explorer.refreshtime' | translate }}&nbsp;</label>\r\n                <input type=\"number\" class=\"form-control\" name=\"refresh\" id=\"refreshtime\" [(ngModel)]=\"tsPeriodValue\">\r\n                <select class=\"form-control\" data-live-search=\"true\"  [(ngModel)]=\"curPeriodPrecision\"\r\n                        (change)=\"onSelectPeriodPrecision($event.target.value)\">\r\n                    <option value=\"day\" [selected]=\"curPeriodPrecision=='day'\">{{ 'Explorer.day' | translate }}</option>\r\n                    <option value=\"hour\" [selected]=\"curPeriodPrecision=='hour'\">{{ 'Explorer.hour' | translate }}</option>\r\n                    <option value=\"minute\" [selected]=\"curPeriodPrecision=='minute'\">{{ 'Explorer.minute' | translate }}</option>\r\n                    <option value=\"second\" [selected]=\"curPeriodPrecision=='second'\">{{ 'Explorer.second' | translate }}</option>\r\n                </select>\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" type=\"button\"\r\n                            (click)=\"onSetPeriodTime()\">{{ 'Explorer.set' | translate }}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"offset-md-4 col-md-4\">\r\n            <div class=\"input-group my-refresh-time-span-group\"  *ngIf=\"curSeriesType == 'Actual Measurement'\">\r\n                <label for=\"totaltime\" class=\"my-inline-form-label\">{{ 'Explorer.totaltime' | translate }}&nbsp;</label>\r\n                <input type=\"number\" class=\"form-control\" name=\"totaltime\" id=\"totaltime\" [(ngModel)]=\"tsTotalTimeValue\">\r\n                <select class=\"form-control\" data-live-search=\"true\"  [(ngModel)]=\"curTotalTimePrecision\"\r\n                        (change)=\"onSelectTotalTimePrecision($event.target.value)\">\r\n                    <option value=\"day\" [selected]=\"curTotalTimePrecision=='day'\">{{ 'Explorer.day' | translate }}</option>\r\n                    <option value=\"hour\" [selected]=\"curTotalTimePrecision=='hour'\">{{ 'Explorer.hour' | translate }}</option>\r\n                    <option value=\"minute\" [selected]=\"curTotalTimePrecision=='minute'\">{{ 'Explorer.minute' | translate }}</option>\r\n                    <option value=\"second\" [selected]=\"curTotalTimePrecision=='second'\">{{ 'Explorer.second' | translate }}</option>\r\n                </select>\r\n                <div class=\"input-group-append\">\r\n                    <button class=\"btn btn-outline-secondary\" type=\"button\"\r\n                            (click)=\"onSetTotalTime()\">{{ 'Explorer.set' | translate }}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"chart-area\">\r\n        <div class=\"form-group my-inline-form-group\">\r\n            <ng-select [items]=\"chartTypes\"\r\n                       *ngIf=\"!(curMSType && curMSType.enumeration && curMSType.enumeration.flags)\"\r\n                       bindLabel=\"name\"\r\n                       bindValue=\"name\"\r\n                       placeholder=\"Select Chart\"\r\n                       [(ngModel)]=\"selectedChartType\"\r\n                       (ngModelChange)=\"onChangeChartType($event)\">\r\n                <ng-template ng-label-tmp let-item=\"item\">\r\n                    <img height=\"15\" width=\"15\" [src]=\"item.thumbnail\"/>\r\n                    <b> {{ 'Explorer.'+item.lang | translate}}</b>\r\n                </ng-template>\r\n                <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\r\n                    <img height=\"15\" width=\"15\" [src]=\"item.thumbnail\"/>\r\n                    <b> {{ 'Explorer.'+item.lang | translate}}</b>\r\n                </ng-template>\r\n            </ng-select>\r\n        </div>\r\n        <div class=\"data-load-waiting\" *ngIf=\"!chatDataLoaded\">\r\n            <div class=\"loader\" *ngIf=\"httpErrorMsg.length == 0\"></div>\r\n            <div class=\"data-error-msg\" *ngIf=\"httpErrorMsg.length != 0\">{{httpErrorMsg}}</div>\r\n        </div>\r\n        <div class=\"smart_dev_chart\" [chart]=\"chart\"></div>\r\n        <ngx-json-viewer [json]=\"jsonData\" *ngIf=\"false\"></ngx-json-viewer>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./client/app/modules/components/chart-view/chart-view.component.ts":
/*!**************************************************************************!*\
  !*** ./client/app/modules/components/chart-view/chart-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChartViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartViewComponent", function() { return ChartViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_node_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/node-type.service */ "./client/app/core/services/node-type.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/fesm5/angular-highcharts.js");
/* harmony import */ var _core_interfaces_chart_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/interfaces/chart-settings */ "./client/app/core/interfaces/chart-settings.ts");
/* harmony import */ var _core_services_tree_toggle_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/tree-toggle.service */ "./client/app/core/services/tree-toggle.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");










var ChartViewComponent = /** @class */ (function () {
    function ChartViewComponent(httpService, cdRef, router, nodeTypeService, authService, treeToggleService) {
        this.httpService = httpService;
        this.cdRef = cdRef;
        this.router = router;
        this.nodeTypeService = nodeTypeService;
        this.authService = authService;
        this.treeToggleService = treeToggleService;
        this.timePrecList = ['day', 'hour', 'minute', 'second'];
        this.dataBaseURL = config.client_info.apiEndPoints.serverBaseURL;
        this.seriesTypes = ['Historical Measurement', 'Actual Measurement', 'Metering'];
        this.curSeriesType = 'Historical Measurement';
        var yesterday = new Date(Date.now() - 864e5);
        var oneHourAgo = new Date(Date.now() - 36e5);
        this.fromDate = oneHourAgo;
        this.startDate = oneHourAgo;
        this.numberOf = 10; //no used in data api
        this.timeSpan = '';
        this.isLoggedIn = true;
        this.actualChartInterval = 1;
        this.actualCurPoint = 0;
        this.actualTempData = [];
        this.tsValue = ''; //Metering Time Span Value (day, hour, minute, second)
        this.curPrecision = 'day'; //Metering Time Span Precision (day, hour, minute, second)
        this.prevActualPoint = { x: 0, y: 0 };
        this.httpErrorMsg = '';
        this.userSetting = {
            period: config.client_info.actualChartSetting.period,
            totalTime: config.client_info.actualChartSetting.totalTime,
            periodPrecision: config.client_info.actualChartSetting.periodPrecision,
            totalTimePrecision: config.client_info.actualChartSetting.totalTimePrecision
        };
        //Check user cookie
        var userChartSetting = localStorage.getItem(config.client_info.storeInfo.settingKey);
        if (userChartSetting) {
            try {
                this.userSetting = JSON.parse(userChartSetting);
            }
            catch (e) {
                console.error('User Setting Parsing Error');
            }
        }
        this.tsPeriodValue = this.userSetting.period;
        this.tsTotalTimeValue = this.userSetting.totalTime;
        this.curPeriodPrecision = this.userSetting.periodPrecision; //Actual Period Time Precision measurement (day, hour, minute, second)
        this.curTotalTimePrecision = this.userSetting.totalTimePrecision; //Actual Total Time Precision (day, hour, minute, second)
        this.actualMaxPoint = 6; // Initial total time  5 mins => max point count = 5 mins / 2 seconds
        this.tsDay = '';
        this.tsHour = '';
        this.tsMin = '';
        this.tsSecond = '';
        this.isTimeSpanValid = false;
        this.chatDataLoaded = false;
        this.chartOptions = {
            chart: { type: 'spline', },
            title: { text: 'All Data' },
            xAxis: {
                visible: true,
                lineWidth: 1,
                type: 'datetime',
                labels: {
                    formatter: function () {
                        var dt = new Date(this.value);
                        return moment__WEBPACK_IMPORTED_MODULE_7__["utc"](dt).format('YYYY.MM.DD') + '<br>' + moment__WEBPACK_IMPORTED_MODULE_7__["utc"](dt).format('HH:mm:ss');
                    }
                }
            },
            yAxis: {
                visible: true,
                labels: { formatter: null, useHTML: true },
                title: { text: '' },
                lineWidth: 1,
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.x + '</b> : <b>' + this.y + '</b>';
                },
                crosshairs: {
                    color: '#77757a',
                    dashStyle: 'solid'
                },
                shared: true
            },
            plotOptions: _core_interfaces_chart_settings__WEBPACK_IMPORTED_MODULE_5__["ChartSettings"].splinePlot,
            credits: { enabled: false },
            series: [{ name: 'Line 1', data: [] }]
        };
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
        this.chartTypes = [
            { id: 1, name: 'Line Chart', lang: 'linechart', thumbnail: '../assets/img/linechart.jpg' },
            { id: 2, name: 'Bar Chart', lang: 'barchart', thumbnail: '../assets/img/barchart.jpg' },
        ];
        this.selectedChartType = 'Line Chart';
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.apiBaseURL = config.client_info.apiEndPoints.serverBaseURL;
        this.tzOffset = new Date().getTimezoneOffset() * 60000;
        this.scatterOption = {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    shared: true,
                    crosshairs: true,
                    split: true
                }
            }
        };
    }
    ChartViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msTypes = [];
        var self = this;
        setTimeout(function () {
            self.getMSTypes();
        }, 500);
        setTimeout(function () {
            self.getMeterings();
        }, 1000);
        //Subscriber to receive device click event
        this.nodeTypeService.getNodeInfo().subscribe(function (msTypeInfo) {
            _this.curDevInfo = msTypeInfo;
            _this.makeAPIRequest();
        });
        //Subscriber to handle toggle button click
        this.treeToggleService.getToggleInfo().subscribe(function (toggleInfo) {
            _this.chart.destroy();
            _this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](_this.chartOptions);
        });
    };
    /**
     * Get Measurement types
     */
    ChartViewComponent.prototype.getMSTypes = function () {
        var _this = this;
        this.httpService.httpGetRequest(this.accToken, this.dataBaseURL + '/measurements')
            .subscribe(function (res) {
            if (config.client_info.testEnumMode) {
                _this.msTypes = _this.genTestAddEnumData(res);
            }
            else {
                _this.msTypes = res;
            }
            if (_this.msTypes.length > 0) {
                _this.curMSType = _this.msTypes[0]; // set Default measurement information;
            }
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    /**
     * Testing purpose functions Start
     */
    ChartViewComponent.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ChartViewComponent.prototype.genTestAddEnumData = function (msList) {
        for (var i = 0; i < msList.length; i++) {
            var enumValues = [];
            for (var j = 0; j < 10; j++) {
                enumValues.push('E' + j);
            }
            msList[i]['enumeration'] = {
                flags: false,
                values: enumValues
            };
        }
        return msList;
    };
    /**
     * Get Metering Types
     */
    ChartViewComponent.prototype.getMeterings = function () {
        var _this = this;
        this.httpService.httpGetRequest(this.accessToken, this.dataBaseURL + '/meterings')
            .subscribe(function (res) {
            if (config.client_info.testEnumMode) {
                _this.meterings = _this.genTestAddEnumData(res);
            }
            else {
                _this.meterings = res;
            }
            console.log("Meterings Data===>", _this.meterings);
            if (_this.meterings.length > 0) {
                _this.curMeteringType = _this.meterings[0];
            }
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    ChartViewComponent.prototype.httpErrorHandler = function (error) {
        switch (error.status) {
            case 401:
                this.isLoggedIn = false;
                this.authService.setAuthInfo({ login_st: false, errorobj: error });
                break;
            case 404:
                this.httpErrorMsg = "No " + this.curSeriesType.toLowerCase() + " available";
                break;
            default:
                this.httpErrorMsg = "Error occurred Status Code : " + error.status + " <br> Message: " + error.error.Message;
        }
        this.chatDataLoaded = false;
    };
    /**
     * Get Data Series
     */
    ChartViewComponent.prototype.makeAPIRequest = function () {
        this.chatDataLoaded = true;
        this.httpErrorMsg = '';
        switch (this.curSeriesType) {
            case 'Historical Measurement':
                //Get Device Info, fromDate, toDate.
                console.log('====Making Historical API===');
                this.actualCurPoint = 0;
                clearInterval(this.actualChartTimer);
                this.actualChartTimer = null;
                this.chartOptions.series = [{ name: 'Line 1', data: [] }];
                this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
                this.makeHistoryAPI(this.curDevInfo, this.curMSType, this.fromDate, this.toDate);
                break;
            case 'Metering':
                console.log('====Making Metering API===');
                this.actualCurPoint = 0;
                clearInterval(this.actualChartTimer);
                this.actualChartTimer = null;
                this.chartOptions.series = [{ name: 'Line 1', data: [] }];
                this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
                this.makeMeteringAPI(this.curDevInfo, this.curMeteringType, this.numberOf, this.timeSpan, this.startDate, this.endDate);
                break;
            case 'Actual Measurement':
                console.log('====Making Actual API===');
                this.updateActualChart();
                break;
        }
    };
    /**
     * Get Historical Measurement Data Series
     * @param devInfo
     * @param msType
     * @param fromDate
     * @param toDate
     */
    ChartViewComponent.prototype.makeHistoryAPI = function (devInfo, msType, fromDate, toDate) {
        var _this = this;
        this.chatDataLoaded = false;
        console.log(devInfo, msType, fromDate, toDate);
        if (typeof msType == 'undefined' || typeof devInfo == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = "No " + this.curSeriesType.toLowerCase() + " available";
            return;
        }
        var apiURL = this.apiBaseURL + "/measurements/" + msType.id + "/historical/";
        if (devInfo.type == 'all') {
            apiURL += 'all';
        }
        else if (devInfo.type == 'sub') {
            apiURL += 'substation/';
        }
        else if (devInfo.type == 'bay') {
            apiURL += 'bay/';
        }
        else if (devInfo.type == 'vsub') {
            apiURL += 'virtual_substation/';
        }
        else {
            apiURL += 'device/';
        }
        if (devInfo.type != 'all')
            apiURL += devInfo.value;
        apiURL += '?c=1';
        if (fromDate) {
            apiURL += '&fromDate=' + moment__WEBPACK_IMPORTED_MODULE_7__["utc"](fromDate).format();
        }
        if (toDate) {
            apiURL += '&toDate=' + moment__WEBPACK_IMPORTED_MODULE_7__["utc"](toDate).format();
        }
        if (this.curHistoryHttpReq) {
            this.curHistoryHttpReq.unsubscribe();
        }
        this.curHistoryHttpReq = this.httpService.httpGetRequest(this.accToken, apiURL)
            .subscribe(function (res) {
            _this.timeSeries = res;
            console.log('Historical Measurement Time Series Data');
            _this.updateChartData(devInfo, msType, res.data);
            _this.chatDataLoaded = true;
        }, function (error) {
            _this.updateChartData(devInfo, msType, []);
            _this.httpErrorHandler(error);
        });
    };
    /**
     *
     * @param devInfo
     * @param meteringType //required
     * @param numberOf //optional
     * @param timeSpan
     * @param startDate //optional
     * @param endDate //optional
     */
    ChartViewComponent.prototype.makeMeteringAPI = function (devInfo, meteringType, numberOf, timeSpan, startDate, endDate) {
        var _this = this;
        console.log(devInfo, meteringType, numberOf, timeSpan, startDate, endDate);
        console.log('Metering Series API Called');
        if (typeof devInfo == 'undefined' || typeof meteringType == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = "No " + this.curSeriesType.toLowerCase() + " available";
            return;
        }
        var apiURL = this.apiBaseURL + "/meterings/" + meteringType.id + "/";
        if (devInfo.type == 'all') {
            apiURL += 'all';
        }
        else if (devInfo.type == 'sub') {
            apiURL += 'substation/';
        }
        else if (devInfo.type == 'bay') {
            apiURL += 'bay/';
        }
        else if (devInfo.type == 'vsub') {
            apiURL += 'virtual_substation/';
        }
        else {
            apiURL += 'device/';
        }
        if (devInfo.type != 'all')
            apiURL += devInfo.value;
        apiURL += '?c=1';
        if (typeof timeSpan != 'undefined' && timeSpan != '') {
            apiURL += '&timeSpan=' + timeSpan;
        }
        if (typeof startDate != 'undefined') {
            apiURL += '&startDate=' + moment__WEBPACK_IMPORTED_MODULE_7__["utc"](startDate).format();
        }
        if (typeof endDate != 'undefined') {
            apiURL += '&endDate=' + moment__WEBPACK_IMPORTED_MODULE_7__["utc"](endDate).format();
        }
        this.chatDataLoaded = false;
        this.httpService.httpGetRequest(this.accToken, apiURL)
            .subscribe(function (res) {
            _this.timeSeries = res.data;
            console.log('Metering Time Series Data');
            console.log(_this.timeSeries);
            _this.updateChartData(devInfo, meteringType, res.data);
            _this.chatDataLoaded = true;
        }, function (error) {
            _this.updateChartData(devInfo, meteringType, []);
            _this.httpErrorHandler(error);
        });
    };
    ChartViewComponent.prototype.updateChartData = function (devInfo, msType, rawData) {
        var retData = [];
        var self = this;
        var enumLen = 0;
        var enumVal;
        if (this.curMSType.enumeration) {
            enumLen = self.curMSType.enumeration.values.length;
            this.chartOptions.yAxis.min = 0;
            this.chartOptions.chart.type = 'line';
            if (this.curMSType.enumeration.flags) {
                this.chartOptions.yAxis.max = enumLen;
            }
            else {
                this.chartOptions.yAxis.max = enumLen - 1;
            }
        }
        for (var i = 0; i < rawData.length; i++) {
            var ts = new Date(rawData[i].date).getTime() - this.tzOffset;
            if (this.curMSType.enumeration) {
                enumVal = parseInt(rawData[i].value) % enumLen;
                if (this.curMSType.enumeration.flags) {
                    this.chartOptions.chart.type = 'scatter';
                    this.chartOptions.plotOptions = this.scatterOption;
                    //for the single data => multiple points using binary format
                    var binValueStr = parseInt(rawData[i].value).toString(2);
                    console.log(binValueStr.length, 'Line 512');
                    for (var j = 0; j < binValueStr.length; j++) {
                        if (binValueStr[j] == '1') {
                            retData.push([ts, (binValueStr.length - j - 1)]);
                        }
                    }
                }
                else {
                    retData.push([ts, enumVal]);
                }
            }
            else {
                retData.push([ts, rawData[i].value]);
            }
        }
        this.chartOptions.yAxis.labels.formatter = function () {
            if (self.curMSType.enumeration) {
                if (self.curMSType.enumeration.values[this.value]) {
                    return "<img src=\"/assets/resources/" + self.curMSType.enumeration.values[this.value] + ".png\"  alt=\"\"/>";
                }
                else {
                    return '';
                }
            }
            else {
                return this.value + msType.unit;
            }
        };
        if (this.curMSType.enumeration) {
            this.chartOptions.chart.events = {
                load: function () {
                    var selfChart = this, points = selfChart.series[0].points;
                    points.forEach(function (point, index) {
                        if (self.curMSType.enumeration.values[point.y]) {
                            point.update({
                                marker: {
                                    symbol: "url(/assets/resources/" + self.curMSType.enumeration.values[point.y] + ".png)",
                                }
                            });
                        }
                    });
                }
            };
        }
        this.chartOptions.tooltip.formatter = function () {
            //Get All Points with current x axis point
            var tf = moment__WEBPACK_IMPORTED_MODULE_7__["utc"](this.x).format().replace('T', ' ').replace('Z', '');
            if (self.curMSType.enumeration && self.curMSType.enumeration.flags) {
                var seriesData = void 0;
                seriesData = self.chart.ref.series[0];
                var dataPointsX = seriesData.processedXData;
                var dataPointsY = seriesData.processedYData;
                var yAxisVal = 0;
                for (var i = 0; i < dataPointsX.length; i++) {
                    if (this.x == dataPointsX[i]) {
                        yAxisVal += Math.pow(2, dataPointsY[i]);
                    }
                }
                return '<b>' + tf + '</b> : <b>' + yAxisVal + msType.unit + '</b>';
            }
            else {
                return '<b>' + tf + '</b> : <b>' + this.y + msType.unit + '</b>';
            }
        };
        this.chartOptions.yAxis.title.text = msType.description + ' (' + msType.unit + ')';
        this.chartOptions.series = [{ name: 'Line 1', data: retData }];
        this.chartOptions.title.text = devInfo.value + ' Data';
        this.chart.destroy();
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
    };
    ChartViewComponent.prototype.onChangeChartType = function (newValue) {
        if (this.curMSType.enumeration && !this.curMSType.enumeration.flags) {
            this.chartOptions.chart.type = 'line';
        }
        else {
            if (newValue == 'Bar Chart') {
                this.chartOptions.chart.type = 'column';
            }
            else {
                this.chartOptions.chart.type = 'spline';
            }
        }
        this.chart.destroy();
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
    };
    ChartViewComponent.prototype.onSelectSeries = function (newValue) {
        if (this.curSeriesType != newValue) {
            this.curSeriesType = newValue;
            console.log(this.curSeriesType);
            this.makeAPIRequest();
        }
    };
    ChartViewComponent.prototype.onSelectMSType = function (newValue) {
        for (var i = 0; i < this.msTypes.length; i++) {
            if (newValue == this.msTypes[i].id) {
                this.curMSType = this.msTypes[i];
                this.makeAPIRequest();
                break;
            }
        }
    };
    ChartViewComponent.prototype.onSelectMetering = function (newValue) {
        for (var i = 0; i < this.meterings.length; i++) {
            if (newValue == this.meterings[i].id) {
                this.curMeteringType = this.meterings[i];
                this.makeAPIRequest();
                break;
            }
        }
    };
    ChartViewComponent.prototype.onSelectTimeSpanPrecision = function (newValue) {
        this.curPrecision = newValue;
    };
    ChartViewComponent.prototype.onSelectPeriodPrecision = function (newValue) {
        this.curPeriodPrecision = newValue;
    };
    ChartViewComponent.prototype.onSelectTotalTimePrecision = function (newValue) {
        this.curTotalTimePrecision = newValue;
    };
    ChartViewComponent.prototype.onSetTotalTime = function () {
        this.updateActualChart();
    };
    ChartViewComponent.prototype.onSetPeriodTime = function () {
        this.updateActualChart();
    };
    /**
     * Entry Point to get Actual data Series
     */
    ChartViewComponent.prototype.updateActualChart = function () {
        if (typeof this.curDevInfo == 'undefined' || typeof this.curMSType == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = "No " + this.curSeriesType.toLowerCase() + " available";
            return;
        }
        //Get Period Time Value
        var periodValue = Number(this.tsPeriodValue);
        if (periodValue < 0 || periodValue == 0)
            return;
        this.userSetting.period = periodValue;
        this.userSetting.periodPrecision = this.curPeriodPrecision;
        localStorage.setItem(config.client_info.storeInfo.settingKey, JSON.stringify(this.userSetting));
        var realPeriodTime = 0;
        switch (this.curPeriodPrecision) {
            case 'day':
                realPeriodTime = periodValue * 86400;
                break;
            case 'hour':
                realPeriodTime = periodValue * 3600;
                break;
            case 'minute':
                realPeriodTime = periodValue * 60;
                break;
            case 'second':
                realPeriodTime = periodValue;
                break;
        }
        //Get Total Time Value
        var curTotalTime = Number(this.tsTotalTimeValue);
        if (curTotalTime < 0 || curTotalTime == 0)
            return;
        this.userSetting.totalTime = curTotalTime;
        this.userSetting.totalTimePrecision = this.curTotalTimePrecision;
        localStorage.setItem(config.client_info.storeInfo.settingKey, JSON.stringify(this.userSetting));
        var realTotalTime = 0;
        switch (this.curTotalTimePrecision) {
            case 'day':
                realTotalTime = curTotalTime * 86400;
                break;
            case 'hour':
                realTotalTime = curTotalTime * 3600;
                break;
            case 'minute':
                realTotalTime = curTotalTime * 60;
                break;
            case 'second':
                realTotalTime = curTotalTime;
                break;
        }
        if (realTotalTime < realPeriodTime) {
            alert('Total Time must be bigger than Period');
            return;
        }
        this.actualMaxPoint = Math.floor(realTotalTime / realPeriodTime);
        clearInterval(this.actualChartTimer);
        this.actualTempData = [];
        var self = this;
        var actualStartTime = new Date();
        for (var i = +this.actualMaxPoint; i > -1; i--) {
            // this.actualTempData.push([actualStartTime.getTime() + i * (+realPeriodTime) * 1000, null]);
            this.actualTempData.push([actualStartTime.getTime() - this.tzOffset - i * (+realPeriodTime) * 1000, null]);
        }
        this.chartOptions.yAxis.labels.formatter = function () {
            if (self.curMSType.enumeration) {
                self.chartOptions.yAxis.min = 0;
                var enumValues = self.curMSType.enumeration.values;
                if (self.curMSType.enumeration.flags) {
                    self.chartOptions.yAxis.max = enumValues.length;
                }
                else {
                    self.chartOptions.yAxis.max = enumValues.length - 1;
                }
                if (this.value.toString().indexOf('.') > -1) {
                    // When data value downward or upward,
                    // chart generate float numbers such 2.2, 2.4 , resource missing issue
                    return '';
                }
                else {
                    if (self.curMSType.enumeration.flags) {
                    }
                    else {
                        console.error(this.value, self.curMSType.enumeration.values[this.value], "Line 705");
                    }
                    if (self.curMSType.enumeration.values[this.value]) {
                        return "<img src=\"/assets/resources/" + self.curMSType.enumeration.values[this.value] + ".png\"  alt=\"\"/>";
                    }
                    else {
                        return '';
                    }
                }
            }
            else {
                return this.value + self.curMSType.unit;
            }
        };
        this.chartOptions.yAxis.title.text = this.curMSType.description + ' (' + this.curMSType.unit + ')';
        this.chartOptions.series = [{ name: 'Line 1', data: this.actualTempData }];
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
        this.actualCurPoint = 0;
        this.actualChartTimer = setInterval(function () {
            self.actualLiveData(self.curDevInfo, self.curMSType);
        }, +realPeriodTime * 1000);
    };
    /**
     * Acutal single data and update using specified parameters
     * @param devInfo
     * @param msType
     */
    ChartViewComponent.prototype.actualLiveData = function (devInfo, msType) {
        var _this = this;
        if (this.curSeriesType != 'Actual Measurement')
            return;
        console.log('History Actual Time Series API Called');
        if (typeof msType == 'undefined' || typeof devInfo == 'undefined') {
            this.chatDataLoaded = false;
            this.httpErrorMsg = "No " + this.curSeriesType.toLowerCase() + " available";
            return;
        }
        var apiURL = this.apiBaseURL + "/measurements/" + msType.id + "/actual/";
        if (devInfo.type == 'all') {
            apiURL += 'all';
        }
        else if (devInfo.type == 'sub') {
            apiURL += 'substation/';
        }
        else if (devInfo.type == 'bay') {
            apiURL += 'bay/';
        }
        else if (devInfo.type == 'vsub') {
            apiURL += 'virtual_substation/';
        }
        else {
            apiURL += 'device/';
        }
        if (devInfo.type != 'all')
            apiURL += devInfo.value;
        this.httpService.httpGetRequest(this.accToken, apiURL)
            .subscribe(function (res) {
            _this.timeSeries = res.data;
            console.log('Actual Measurement Time Series Data');
            var enumValueLen = (msType.enumeration) ? msType.enumeration.values.length : 0;
            var transValue, pSeries, firstPx, k, indexSeries = [];
            var ts = new Date(res.data[0].date).getTime() - _this.tzOffset;
            if (msType.enumeration && msType.enumeration.flags) { // Binary Mode
                _this.chartOptions.chart.type = 'scatter';
                var binValueStr = parseInt(res.data[0].value).toString(2);
                for (var j = 0; j < binValueStr.length; j++) {
                    if (binValueStr[j] == '1') {
                        _this.chart.addPoint([ts, (binValueStr.length - j - 1)]);
                    }
                }
                //Remove all points with first x Axis value,
                pSeries = _this.chart.ref.series[0].points;
                firstPx = pSeries[0].x;
                indexSeries = [];
                for (k = 0; k < pSeries.length; k++) {
                    if (firstPx == pSeries[k].x) {
                        indexSeries.push(k);
                    }
                    else {
                        break;
                    }
                }
                for (k = 0; k < indexSeries.length; k++) {
                    _this.chart.removePoint(0);
                }
                //Update Point Operation
                _this.prevActualPoint = { x: ts, y: res.data[0].value };
            }
            else { // Standard and modulation Mode
                if (msType.enumeration && !msType.enumeration.flags) {
                    transValue = parseInt(res.data[0].value) % enumValueLen;
                }
                else {
                    transValue = res.data[0].value;
                }
                if (ts != _this.prevActualPoint.x || transValue != _this.prevActualPoint.y) {
                    _this.chart.addPoint([ts, transValue], 0, true, true);
                }
                _this.prevActualPoint = { x: ts, y: transValue };
            }
            //*Real Time Update when data point at the end*/
            // https://stackoverflow.com/questions/11083794/dynamically-draw-marker-on-last-point-in-highcharts
            if (msType.enumeration) {
                pSeries = _this.chart.ref.series[0].points;
                var lastPoint = _this.chart.ref.series[0].points[pSeries.length - 1];
                if (msType.enumeration.flags) { //Binary mode
                    for (k = pSeries.length - 1; k > -1; k--) {
                        if (lastPoint.x == pSeries[k].x) {
                            if (msType.enumeration.values[pSeries[k].y]) {
                                pSeries[k].update({
                                    marker: {
                                        symbol: "url(/assets/resources/" + msType.enumeration.values[pSeries[k].y] + ".png)",
                                    }
                                });
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
                else { // Modulation Mode
                    if (msType.enumeration.values[lastPoint.y]) {
                        lastPoint.update({
                            marker: {
                                symbol: "url(/assets/resources/" + msType.enumeration.values[lastPoint.y] + ".png)",
                            }
                        });
                    }
                }
            }
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    ChartViewComponent.prototype.onSelectTimeSpan = function () {
        this.tsDay = this.tsHour = this.tsMin = this.tsSecond = '';
        if (!this.tsValue) {
            this.tsValue = '';
            this.isTimeSpanValid = false;
            this.httpErrorMsg = 'Specify one of the following parameters: numberOf or timespan';
            this.chatDataLoaded = false;
            return;
        }
        this.isTimeSpanValid = true;
        switch (this.curPrecision) {
            case 'day':
                this.tsDay = this.tsValue;
                break;
            case 'hour':
                this.tsHour = this.tsValue;
                break;
            case 'minute':
                this.tsMin = this.tsValue;
                break;
            case 'second':
                this.tsSecond = this.tsValue;
                break;
        }
        if (this.tsDay == '')
            this.tsDay = '0';
        if (this.tsHour == '')
            this.tsHour = '0';
        if (this.tsMin == '')
            this.tsMin = '0';
        if (this.tsSecond == '')
            this.tsSecond = '0';
        var i = 0, len = 0;
        len = this.tsHour.length;
        for (i = 0; i < 2 - len; i++) {
            this.tsHour = '0' + this.tsHour;
        }
        len = this.tsMin.length;
        for (i = 0; i < 2 - len; i++) {
            this.tsMin = '0' + this.tsMin;
        }
        len = this.tsSecond.length;
        for (i = 0; i < 2 - len; i++) {
            this.tsSecond = '0' + this.tsSecond;
        }
        this.timeSpan = this.tsDay + ":" + this.tsHour + ":" + this.tsMin + ":" + this.tsSecond;
        this.makeAPIRequest();
    };
    ChartViewComponent.prototype.onChangeFromDate = function (fromDate) {
        this.fromDate = fromDate;
        console.log(this.fromDate.toUTCString());
        this.makeAPIRequest();
    };
    ChartViewComponent.prototype.onChangeToDate = function (toDate) {
        this.toDate = toDate;
        this.makeAPIRequest();
    };
    ChartViewComponent.prototype.onChangeNumberOf = function (newValue) {
        this.numberOf = newValue;
    };
    ChartViewComponent.prototype.onSelectNumberOf = function () {
        this.makeAPIRequest();
    };
    ChartViewComponent.prototype.onChangeStartDate = function (startDate) {
        this.startDate = startDate;
        this.makeAPIRequest();
    };
    ChartViewComponent.prototype.onChangeEndDate = function (endDate) {
        this.endDate = endDate;
        this.makeAPIRequest();
    };
    ChartViewComponent.prototype.onTreeToggle = function () {
        this.isTreeShowed = !this.isTreeShowed;
        this.treeToggleService.setToggle(!this.isTreeShowed);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChartViewComponent.prototype, "accToken", void 0);
    ChartViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart-view',
            template: __webpack_require__(/*! ./chart-view.component.html */ "./client/app/modules/components/chart-view/chart-view.component.html"),
            styles: [__webpack_require__(/*! ./chart-view.component.css */ "./client/app/modules/components/chart-view/chart-view.component.css")]
        })
        // https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-marker-symbol/
        // https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/plotoptions/series-marker-width-height/
        // http://api.highcharts.com/highcharts/Point.update http://api.highcharts.com/highcharts/plotOptions.series.marker.symbol
        // http://jsfiddle.net/abk21rdy/
        // https://stackoverflow.com/questions/11083794/dynamically-draw-marker-on-last-point-in-highcharts
        // https://www.highcharts.com/demo/spline-symbols/grid-light
        // https://www.highcharts.com/forum/viewtopic.php?t=40901
        // http://jsfiddle.net/BlackLabel/76qrjhoz/
        // https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/tooltip/shared-x-crosshair/
        // https://api.highcharts.com/highcharts/series.scatter.tooltip.split
        // https://stackoverflow.com/questions/18988329/highcharts-use-shared-tooltip-only-when-series-overlap
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _core_services_node_type_service__WEBPACK_IMPORTED_MODULE_3__["NodeInfoService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _core_services_tree_toggle_service__WEBPACK_IMPORTED_MODULE_6__["TreeToggleService"]])
    ], ChartViewComponent);
    return ChartViewComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-tree/device-tree.component.css":
/*!*****************************************************************************!*\
  !*** ./client/app/modules/components/device-tree/device-tree.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sb-dev-tree {\r\n    position: relative;\r\n    min-width: 360px;\r\n    max-width: 360px;\r\n    height: 90vh;\r\n    border: 1px solid #77757a;\r\n    border-right: none;\r\n    overflow-y: auto;\r\n    /*-webkit-transition: min-width 0.1s; !* Safari *!*/\r\n    /*transition: min-width 0.1s;*/\r\n}\r\n\r\n.sb-dev-tree.toggle {\r\n    min-width: 0;\r\n    border: 0;\r\n}\r\n\r\n.sb-dev-tree.toggle .device-tree-wrapper {\r\n    display: none;\r\n}\r\n\r\n.device-tree-wrapper {\r\n    padding-top: 20px;\r\n}\r\n\r\n.tree-waiting {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.tree-waiting .loader {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-width: 6px;\r\n    margin-top: calc(40vh) !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS10cmVlL2RldmljZS10cmVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbURBQW1EO0lBQ25ELDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQ0FBaUM7QUFDckMiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvZGV2aWNlLXRyZWUvZGV2aWNlLXRyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYi1kZXYtdHJlZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3Nzc1N2E7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgLyotd2Via2l0LXRyYW5zaXRpb246IG1pbi13aWR0aCAwLjFzOyAhKiBTYWZhcmkgKiEqL1xyXG4gICAgLyp0cmFuc2l0aW9uOiBtaW4td2lkdGggMC4xczsqL1xyXG59XHJcblxyXG4uc2ItZGV2LXRyZWUudG9nZ2xlIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnNiLWRldi10cmVlLnRvZ2dsZSAuZGV2aWNlLXRyZWUtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uZGV2aWNlLXRyZWUtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRyZWUtd2FpdGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmU2ZmM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmVlLXdhaXRpbmcgLmxvYWRlciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci13aWR0aDogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyg0MHZoKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/device-tree/device-tree.component.html":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/device-tree/device-tree.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sb-dev-tree\" [ngClass]=\"{'toggle': !isTreeShowed}\">\r\n    <div class=\"device-tree-wrapper\">\r\n        <tree *ngIf=\"tree\"\r\n              [tree]=\"tree\"\r\n              [settings]=\"{rootIsVisible: false}\"\r\n              (nodeSelected)=\"onDevItemClick($event)\" #treeComponent>\r\n        </tree>\r\n        <div class=\"tree-waiting\" *ngIf=\"!devTreeLoaded\">\r\n            <div class=\"loader\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./client/app/modules/components/device-tree/device-tree.component.ts":
/*!****************************************************************************!*\
  !*** ./client/app/modules/components/device-tree/device-tree.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeviceTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTreeComponent", function() { return DeviceTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tree_setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree-setting */ "./client/app/modules/components/device-tree/tree-setting.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_node_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/node-type.service */ "./client/app/core/services/node-type.service.ts");
/* harmony import */ var _core_services_tree_toggle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/tree-toggle.service */ "./client/app/core/services/tree-toggle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");










//https://github.com/valor-software/ng2-tree/issues/299
//https://github.com/valor-software/ng2-tree/issues/316
var DeviceTreeComponent = /** @class */ (function () {
    function DeviceTreeComponent(httpService, nodeInfoService, translate, router, authService, treeToggleService) {
        this.httpService = httpService;
        this.nodeInfoService = nodeInfoService;
        this.translate = translate;
        this.router = router;
        this.authService = authService;
        this.treeToggleService = treeToggleService;
        //3 - make sure that tree object conforms to the TreeModel interface
        this.tree = {
            value: 'All',
            id: 'root_1##root',
            settings: _tree_setting__WEBPACK_IMPORTED_MODULE_2__["MyTreeSetting"].settings,
            children: [{
                    value: 'Physical Substations',
                    id: 'all_1##all',
                    children: []
                }, {
                    value: 'Virtual Substations',
                    id: 'virtual_1##virtual',
                    settings: { 'selectionAllowed': false },
                    children: []
                },]
        };
        this.devTreeLoaded = false;
        this.isTreeShowed = true;
        this.isLoggedIn = true;
        this.apiBaseURL = config.client_info.apiEndPoints.serverBaseURL;
        this.devTreeData = [];
    }
    DeviceTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadTreeData();
        this.treeToggleService.getToggleInfo().subscribe(function (toggleInfo) {
            _this.isTreeShowed = toggleInfo;
        });
        this.translate.onLangChange.subscribe(function (event) {
            if (_this.treeComponent) {
                var pTreeNode = _this.treeComponent.getControllerByNodeId('all_1##all');
                pTreeNode.rename(event.translations['Home']['PhysicalSubstations']);
                pTreeNode = _this.treeComponent.getControllerByNodeId('virtual_1##virtual');
                pTreeNode.rename(event.translations['Home']['VirtualSubstations']);
            }
        });
    };
    /**
     * Construct Device Tree using token from Auth server
     */
    DeviceTreeComponent.prototype.loadTreeData = function () {
        var _this = this;
        var subs = [];
        var subIdsURL = this.apiBaseURL + '/substations';
        var actk = this.accToken;
        var i, j, k, self = this;
        this.httpService.httpGetRequest(actk, subIdsURL).subscribe(function (subsRes) {
            subs = subsRes;
            var promiseList = [];
            var subObjList = [];
            var devPromiseList = [];
            if (subs.length == 0) {
                _this.isLoggedIn = false;
                _this.authService.setAuthInfo({ login_st: false, errorobj: { status: '', statusText: 'No substation data is accessible' } });
                return;
            }
            for (i = 0; i < subs.length; i++) {
                var baysURL = _this.apiBaseURL + '/substations/' + subs[i] + '/bays?suborder=' + i;
                var subObjId = self.getRandomId('sub_', 10, 50000);
                subObjList.push({ value: subs[i], id: subObjId + '##' + subs[i], children: [] });
                promiseList.push(_this.httpService.httpGetRequestWithHeader(actk, baysURL));
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                for (var op = 0; op < results.length; op++) {
                    var baysRes = results[op];
                    var bays = baysRes.body;
                    var subOrder = baysRes.url.split('/substations/')[1].split('/bays')[1].split('?suborder=')[1];
                    for (j = 0; j < bays.length; j++) {
                        var devsURL = self.apiBaseURL + "/bays/" + bays[j] + "/devices?suborder=" + subOrder;
                        devPromiseList.push(self.httpService.httpGetRequestWithHeader(actk, devsURL));
                    }
                }
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(devPromiseList).subscribe(function (devResults) {
                    devResults.forEach(function (devsRes) {
                        var devs = devsRes.body;
                        var bayName = devsRes.url.split('/bays/')[1].split('/devices')[0];
                        var subOrder = devsRes.url.split('/bays/')[1].split('/devices')[1].split('?suborder=')[1];
                        //console.log('Sub Id :' + subName, 'Bay Id : ' + bayName,devsRes.data);
                        var bayObj = { value: bayName, id: self.getRandomId('bay_', 10, 50000) + '##' + bayName, children: [] };
                        for (k = 0; k < devs.length; k++) {
                            var devObj = { value: devs[k], id: self.getRandomId('dev_', 10, 50000) + '##' + devs[k], children: [] };
                            bayObj.children.push(devObj);
                        }
                        subObjList[Number(subOrder)].children.push(bayObj);
                    });
                    self.getDeviceTreeDetail(subObjList);
                }, function (error) {
                    _this.httpErrorHandler(error);
                    _this.devTreeLoaded = true;
                });
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.devTreeLoaded = true;
            });
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.devTreeLoaded = true;
        });
    };
    DeviceTreeComponent.prototype.loadVirtualTreeData = function () {
        var _this = this;
        var vsubs = [];
        var subIdsURL = this.apiBaseURL + '/virtual_substations';
        var actk = this.accToken;
        var i, self = this;
        this.httpService.httpGetRequest(actk, subIdsURL).subscribe(function (vsubsRes) {
            vsubs = vsubsRes;
            var promiseList = [];
            var vSubObjList = [];
            for (i = 0; i < vsubs.length; i++) {
                var vSubDetailURL = _this.apiBaseURL + '/virtual_substations/' + vsubs[i] + '?suborder=' + i;
                var subObjId = self.getRandomId('vsub_', 10, 50000);
                vSubObjList.push({ value: vsubs[i], id: subObjId + '##' + vsubs[i], children: [] });
                promiseList.push(_this.httpService.httpGetRequestWithHeader(actk, vSubDetailURL));
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                for (i = 0; i < results.length; i++) {
                    var vSubItem = results[i];
                    var vsubOrder = vSubItem.url.split('suborder=')[1];
                    vSubObjList[vsubOrder].value = _this.makeVSubTooltip(vSubItem.body);
                    vSubObjList[vsubOrder].children = _this.getSubSubstationTree(vSubItem.body.substations);
                }
                var oopNodeController = self.treeComponent.getControllerByNodeId('virtual_1##virtual');
                for (i = 0; i < vSubObjList.length; i++) {
                    oopNodeController.addChild(vSubObjList[i]);
                }
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.devTreeLoaded = true;
            });
            _this.devTreeLoaded = true;
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.devTreeLoaded = true;
        });
    };
    DeviceTreeComponent.prototype.getSubSubstationTree = function (subs) {
        var subtree = [];
        for (var j = 0; j < subs.length; j++) {
            for (var i = 0; i < this.devTreeData.length; i++) {
                var subTreeNodeId = this.devTreeData[i].id.split('##')[1];
                if (subTreeNodeId == subs[j].substationmrid) {
                    var subinfo = JSON.parse(JSON.stringify(this.devTreeData[i]));
                    subinfo.value = this.makeSubToolTip(this.devTreeData[i].additionalData, true, subs[j].role);
                    subtree.push(subinfo);
                }
            }
        }
        return subtree;
    };
    DeviceTreeComponent.prototype.httpErrorHandler = function (error) {
        console.error(error);
        switch (error.status) {
            case 401:
                this.isLoggedIn = false;
                this.authService.setAuthInfo({ login_st: false, errorobj: error });
                break;
            case 404:
                console.error("No Device Tree available");
                break;
            default:
                alert("Backend returned code " + error.status + ", body was: " + error.error.Message);
        }
    };
    ///Getting Device Structure Details============================================
    DeviceTreeComponent.prototype.getDeviceTreeDetail = function (devSt) {
        var _this = this;
        var i, j, k, self = this;
        var subPromiseList = [];
        var devPromiseList = [];
        var bayPromiseList = [];
        var devTypes = {};
        var ttipHTML = '';
        var actk = this.accToken;
        for (i = 0; i < devSt.length; i++) {
            var subDetailURL = this.apiBaseURL + "/substations/" + devSt[i].value + "?suborder=" + i;
            subPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, subDetailURL));
            var bayList = devSt[i].children;
            for (j = 0; j < bayList.length; j++) {
                var bayDetailURL = this.apiBaseURL + "/bays/" + bayList[j].value + "?suborder=" + i + "&bayorder=" + j;
                bayPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, bayDetailURL));
                var devList = bayList[j].children;
                for (k = 0; k < devList.length; k++) {
                    var devDetailURL = this.apiBaseURL + "/devices/" + devList[k].value + "?suborder=" + i + "&bayorder=" + j + "&devorder=" + k;
                    devPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, devDetailURL));
                }
            }
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(subPromiseList).subscribe(function (subDetailsRes) {
            for (i = 0; i < subDetailsRes.length; i++) {
                var subDetailRes = subDetailsRes[i];
                ttipHTML = self.makeSubToolTip(subDetailRes.body, false, '');
                var subOrder = subDetailRes.url.split('?suborder=')[1];
                devSt[Number(subOrder)].value = ttipHTML;
                devSt[Number(subOrder)].additionalData = subDetailRes.body;
            }
            //make bay tool tip
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(bayPromiseList).subscribe(function (bayDetailsRes) {
                for (i = 0; i < bayDetailsRes.length; i++) {
                    var bayDetailRes = bayDetailsRes[i];
                    ttipHTML = self.makeBayToolTip(bayDetailRes.body);
                    var bayOrderInfo = bayDetailRes.url.split('?suborder=')[1];
                    var baySubOrder = bayOrderInfo.split('&bayorder=')[0];
                    var bayOrder = bayOrderInfo.split('&bayorder=')[1];
                    devSt[Number(baySubOrder)].children[Number(bayOrder)].value = ttipHTML;
                }
                //make device tool tip
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(devPromiseList).subscribe(function (deviceDetailsRes) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var deviceDetailRes, devTypeInfo, devTypeDetailURL, err_1, deviceOrderInfo, deviceSubOrder, deviceBayOrder, deviceOrder, oopNodeController;
                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < deviceDetailsRes.length)) return [3 /*break*/, 8];
                                    deviceDetailRes = deviceDetailsRes[i];
                                    devTypeInfo = void 0;
                                    if (!devTypes[deviceDetailRes.body.devicetypemrid]) return [3 /*break*/, 2];
                                    devTypeInfo = devTypes[deviceDetailRes.body.devicetypemrid];
                                    return [3 /*break*/, 6];
                                case 2:
                                    _a.trys.push([2, 4, , 5]);
                                    devTypeDetailURL = self.apiBaseURL + "/devices/" + deviceDetailRes.body.mrid + "/devicetype";
                                    return [4 /*yield*/, self.httpService.httpGetRequest(actk, devTypeDetailURL).toPromise()];
                                case 3:
                                    devTypeInfo = _a.sent();
                                    return [3 /*break*/, 5];
                                case 4:
                                    err_1 = _a.sent();
                                    console.log("Can't get device type information", err_1.status + 'Error');
                                    return [3 /*break*/, 5];
                                case 5:
                                    devTypes[deviceDetailRes.body.devicetypemrid] = devTypeInfo;
                                    _a.label = 6;
                                case 6:
                                    ttipHTML = self.makeDeviceToolTip(deviceDetailRes.body, devTypeInfo);
                                    deviceOrderInfo = deviceDetailRes.url.split('?suborder=')[1];
                                    deviceSubOrder = deviceOrderInfo.split('&bayorder=')[0];
                                    deviceBayOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[0];
                                    deviceOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[1];
                                    devSt[Number(deviceSubOrder)].children[Number(deviceBayOrder)].children[Number(deviceOrder)].value = ttipHTML;
                                    _a.label = 7;
                                case 7:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 8:
                                    oopNodeController = self.treeComponent.getControllerByNodeId('all_1##all');
                                    for (i = 0; i < devSt.length; i++) {
                                        oopNodeController.addChild(devSt[i]);
                                    }
                                    //Set Device TreeData
                                    self.devTreeData = devSt;
                                    self.loadVirtualTreeData();
                                    //Select Default Node
                                    setTimeout(function () {
                                        oopNodeController.select();
                                    }, 1200);
                                    self.devTreeLoaded = true;
                                    return [2 /*return*/];
                            }
                        });
                    });
                }, function (error) {
                    self.httpErrorHandler(error);
                    self.devTreeLoaded = true;
                });
            }, function (error) {
                self.httpErrorHandler(error);
                self.devTreeLoaded = true;
            });
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.devTreeLoaded = true;
        });
    };
    /**
     * Send Device click event into chart-view component
     * @param $e
     */
    DeviceTreeComponent.prototype.onDevItemClick = function ($e) {
        var nodeType = $e.node.id.split('_')[0];
        var nodeId = $e.node.id.split('##')[1];
        console.log($e.node.id);
        if (nodeType == 'virtual')
            return;
        this.nodeInfoService.setNodeInfo(nodeType, nodeId);
    };
    /**
     * Return random id to construct device tree
     * @param type
     * @param min
     * @param max
     * @returns {*}
     */
    DeviceTreeComponent.prototype.getRandomId = function (type, min, max) {
        return type + Math.round(Math.random() * (max - min) + min);
    };
    DeviceTreeComponent.prototype.makeSubToolTip = function (subInfo, isVirtual, role) {
        var ttipWrap = '<div class="ctip sub"  onmouseover="oTh()">';
        var ttipItem = '<span class="ttext">';
        var ttipHTML = '';
        ttipHTML += ttipWrap;
        console.log(subInfo.mrid);
        var emptyAddress = {
            'number': '',
            'street': '',
            'city': '',
            'locality': '',
            'zip': '',
            'country': '',
            'region': ''
        };
        var emptyPos = { 'latitude': '', 'longitude': '', 'altitude': '' };
        var subPos = (subInfo.location) ? subInfo.location : emptyPos;
        var subContact = (subInfo.contact) ? subInfo.contact : { 'name': '', 'phone': '', 'email': '' };
        var subAddress = (subInfo.address) ? subInfo.address : emptyAddress;
        //Make HTML for Tooltip
        ttipHTML += subInfo.mrid;
        ttipHTML += ttipItem;
        if (isVirtual) {
            ttipHTML += '<span class="tipitem role">Role : ' + role + '</span>';
            ttipHTML += '<hr>';
        }
        ttipHTML += '<span class="tipitem">MRID : ' + subInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + subInfo.description + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">latitude : ' + subPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + subPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + subPos.altitude + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">name : ' + subContact.name + '</span>';
        ttipHTML += '<span class="tipitem">phone : ' + subContact.phone + '</span>';
        ttipHTML += '<span class="tipitem">email : ' + subContact.email + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">number : ' + subAddress.number + '</span>';
        ttipHTML += '<span class="tipitem">street : ' + subAddress.street + '</span>';
        ttipHTML += '<span class="tipitem">city : ' + subAddress.city + '</span>';
        ttipHTML += '<span class="tipitem">locality : ' + subAddress.locality + '</span>';
        ttipHTML += '<span class="tipitem">zip : ' + subAddress.zip + '</span>';
        ttipHTML += '<span class="tipitem">country : ' + subAddress.country + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    };
    DeviceTreeComponent.prototype.makeBayToolTip = function (bayInfo) {
        var emptyPos = { 'latitude': '', 'longitude': '', 'altitude': '' };
        var ttipWrapBay = '<div class="ctip bay"  onmouseover="oTh()">';
        var ttipItem = '<span class="ttext">';
        var ttipHTML = '';
        var bayPos = (bayInfo.location) ? bayInfo.location : emptyPos;
        ttipHTML += ttipWrapBay;
        ttipHTML += bayInfo.mrid;
        ttipHTML += ttipItem;
        ttipHTML += '<span class="tipitem">MRID : ' + bayInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">Name : ' + bayInfo.name + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + bayInfo.description + '</span>';
        ttipHTML += '<hr>';
        ttipHTML += '<span class="tipitem">latitude : ' + bayPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + bayPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + bayPos.altitude + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    };
    DeviceTreeComponent.prototype.makeDeviceToolTip = function (devInfo, devtypeInfo) {
        var emptyDevType = {
            'vendor': '',
            'hwRev': '',
            'swRev': '',
            'serNum': '',
            'model': '',
            'owner': '',
            'primeOps': '',
            'secondOps': ''
        };
        var ttipWrapDev = '<div class="ctip dev"  onmouseover="oTh()">';
        var ttipItem = '<span class="ttext">';
        var emptyPos = { 'latitude': '', 'longitude': '', 'altitude': '' };
        var devPos = (devInfo.location) ? devInfo.location : emptyPos;
        var devType = (devInfo.devicetypemrid) ? devtypeInfo : emptyDevType;
        var ttipHTML = '';
        ttipHTML += ttipWrapDev;
        ttipHTML += devInfo.mrid;
        ttipHTML += ttipItem;
        ttipHTML += '<span class="tipitem">MRID : ' + devInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">Name : ' + devInfo.name + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + devInfo.description + '</span>';
        ttipHTML += '<hr>';
        if (devInfo.devicetypemrid) {
            ttipHTML += '<span class="tipitem">vendor : ' + devType.vendor + '</span>';
            ttipHTML += '<span class="tipitem">hwRev : ' + devType.hwRev + '</span>';
            ttipHTML += '<span class="tipitem">swRev : ' + devType.swRev + '</span>';
            ttipHTML += '<span class="tipitem">serNum : ' + devType.serNum + '</span>';
            ttipHTML += '<span class="tipitem">model : ' + devType.model + '</span>';
            ttipHTML += '<span class="tipitem">owner : ' + devType.owner + '</span>';
            ttipHTML += '<span class="tipitem">primeOps : ' + this.replaceHTMLSymbol(devType.primeOps) + '</span>';
            ttipHTML += '<span class="tipitem">secondOps : ' + this.replaceHTMLSymbol(devType.secondOps) + '</span>';
            ttipHTML += '<hr>';
        }
        ttipHTML += '<span class="tipitem">latitude : ' + devPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + devPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + devPos.altitude + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    };
    DeviceTreeComponent.prototype.makeVSubTooltip = function (vSubInfo) {
        var ttipWrapDev = '<div class="ctip dev"  onmouseover="oTh()">';
        var ttipItem = '<span class="ttext">';
        var emptyPos = { 'latitude': '', 'longitude': '', 'altitude': '' };
        var devPos = (vSubInfo.location) ? vSubInfo.location : emptyPos;
        var ttipHTML = '';
        ttipHTML += ttipWrapDev;
        ttipHTML += vSubInfo.mrid;
        ttipHTML += ttipItem;
        ttipHTML += '<span class="tipitem">MRID : ' + vSubInfo.mrid + '</span>';
        ttipHTML += '<span class="tipitem">PMRID : ' + vSubInfo.partnermrid + '</span>';
        ttipHTML += '<span class="tipitem">Description : ' + vSubInfo.description + '</span>';
        ttipHTML += '<hr>';
        if (vSubInfo.address) {
            ttipHTML += '<span class="tipitem">Number : ' + vSubInfo.address.number + '</span>';
            ttipHTML += '<span class="tipitem">Country : ' + vSubInfo.address.country + '</span>';
            ttipHTML += '<span class="tipitem">City : ' + vSubInfo.address.city + '</span>';
            ttipHTML += '<span class="tipitem">Street : ' + vSubInfo.address.street + '</span>';
            ttipHTML += '<span class="tipitem">Locality : ' + vSubInfo.address.locality + '</span>';
            ttipHTML += '<span class="tipitem">Zip : ' + vSubInfo.address.zip + '</span>';
            ttipHTML += '<span class="tipitem">Region : ' + vSubInfo.address.region + '</span>';
            ttipHTML += '<hr>';
        }
        ttipHTML += '<span class="tipitem">latitude : ' + devPos.latitude + '</span>';
        ttipHTML += '<span class="tipitem">longitude : ' + devPos.longitude + '</span>';
        ttipHTML += '<span class="tipitem">altitude : ' + devPos.altitude + '</span>';
        ttipHTML += '</span>';
        ttipHTML += '</div>';
        return ttipHTML;
    };
    DeviceTreeComponent.prototype.replaceHTMLSymbol = function (srcstr) {
        return srcstr.replace(/>/g, '&gt;').replace(/</g, '&lt;');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DeviceTreeComponent.prototype, "accToken", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('treeComponent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeviceTreeComponent.prototype, "treeComponent", void 0);
    DeviceTreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-tree',
            template: __webpack_require__(/*! ./device-tree.component.html */ "./client/app/modules/components/device-tree/device-tree.component.html"),
            styles: [__webpack_require__(/*! ./device-tree.component.css */ "./client/app/modules/components/device-tree/device-tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _core_services_node_type_service__WEBPACK_IMPORTED_MODULE_4__["NodeInfoService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_services_tree_toggle_service__WEBPACK_IMPORTED_MODULE_5__["TreeToggleService"]])
    ], DeviceTreeComponent);
    return DeviceTreeComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-tree/tree-setting.ts":
/*!*******************************************************************!*\
  !*** ./client/app/modules/components/device-tree/tree-setting.ts ***!
  \*******************************************************************/
/*! exports provided: MyTreeSetting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTreeSetting", function() { return MyTreeSetting; });
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-tree */ "./node_modules/ng2-tree/index.js");
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ng2_tree__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Basic Tree Setting
 */

var MyTreeSetting = {
    settings: {
        'rootIsVisible': true,
        'static': true,
        'rightMenu': false,
        'leftMenu': true,
        'cssClasses': {
            'expanded': 'fa fa-minus-square-o fa-lg',
            'collapsed': 'fa fa-plus-square-o fa-lg',
            'leaf': 'fa fa-lg',
            'empty': 'fa fa-caret-right'
        },
        'templates': {
            'node': '<i class="fa fa-building-o fa-lg"></i>',
            'leaf': '<i class="fa fa-angle-right fa-lg"></i>',
            'leftMenu': '<i class="fa fa-navicon fa-lg"></i>'
        },
        'menuItems': [
            { action: ng2_tree__WEBPACK_IMPORTED_MODULE_0__["NodeMenuItemAction"].Custom, name: 'Foo', cssClass: 'fa fa-arrow-right' },
        ]
    }
};


/***/ }),

/***/ "./client/app/modules/pages/explorer/explorer.component.css":
/*!******************************************************************!*\
  !*** ./client/app/modules/pages/explorer/explorer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sb-main-explorer {\r\n    display: flex;\r\n    align-items: stretch;\r\n    margin-top: 10px;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.sb-dev-tree {\r\n    position: relative;\r\n    min-width: 360px;\r\n    max-width: 360px;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n}\r\n\r\n.sb-dev-chart {\r\n    width: calc(100vw - 390px);\r\n    height: 100%;\r\n    min-height: 90vh;\r\n    border: 1px solid #77757a;\r\n}\r\n\r\n.sb-dev-chart.toggle {\r\n    width: calc(100vw);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9leHBsb3Jlci9leHBsb3Jlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL2V4cGxvcmVyL2V4cGxvcmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ItbWFpbi1leHBsb3JlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zYi1kZXYtdHJlZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5zYi1kZXYtY2hhcnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzOTBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzc3NzU3YTtcclxufVxyXG4uc2ItZGV2LWNoYXJ0LnRvZ2dsZSB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/explorer/explorer.component.html":
/*!*******************************************************************!*\
  !*** ./client/app/modules/pages/explorer/explorer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sb-main-explorer\">\r\n  <app-device-tree [accToken]=\"accessToken\" *ngIf=\"(accessToken!='')\"></app-device-tree>\r\n  <div class=\"sb-dev-chart\" [ngClass]=\"{'toggle': !isTreeShowed}\">\r\n    <app-chart-view [accToken]=\"accessToken\" *ngIf=\"(accessToken!='')\"></app-chart-view>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./client/app/modules/pages/explorer/explorer.component.ts":
/*!*****************************************************************!*\
  !*** ./client/app/modules/pages/explorer/explorer.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_tree_toggle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/tree-toggle.service */ "./client/app/core/services/tree-toggle.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ExplorerComponent = /** @class */ (function () {
    function ExplorerComponent(authService, http, router, httpService, broadcastService, treeToggleService) {
        this.authService = authService;
        this.http = http;
        this.router = router;
        this.httpService = httpService;
        this.broadcastService = broadcastService;
        this.treeToggleService = treeToggleService;
        this.isTreeShowed = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
    }
    ExplorerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treeToggleService.getToggleInfo().subscribe(function (toggleInfo) {
            _this.isTreeShowed = toggleInfo;
            console.error(toggleInfo);
        });
    };
    ExplorerComponent.prototype.ngOnDestroy = function () {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explorer',
            template: __webpack_require__(/*! ./explorer.component.html */ "./client/app/modules/pages/explorer/explorer.component.html"),
            styles: [__webpack_require__(/*! ./explorer.component.css */ "./client/app/modules/pages/explorer/explorer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_4__["HttpServiceHelper"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
            _core_services_tree_toggle_service__WEBPACK_IMPORTED_MODULE_5__["TreeToggleService"]])
    ], ExplorerComponent);
    return ExplorerComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sb-app-container a{\r\n  cursor: pointer;\r\n  color: white;\r\n}\r\n.sb-public-wrap{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ItYXBwLWNvbnRhaW5lciBhe1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnNiLXB1YmxpYy13cmFwe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sb-public-wrap\">\r\n  <h3>Public Area</h3>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./client/app/modules/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(httpService) {
        this.httpService = httpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.pageLoaded = true;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./client/app/modules/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./client/app/modules/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./client/environments/environment.ts":
/*!********************************************!*\
  !*** ./client/environments/environment.ts ***!
  \********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
};


/***/ }),

/***/ "./client/main.ts":
/*!************************!*\
  !*** ./client/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./version.json":
/*!**********************!*\
  !*** ./version.json ***!
  \**********************/
/*! exports provided: version, default */
/***/ (function(module) {

module.exports = {"version":"1.0"};

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Work\02-Web\16-JavaScript\14-API Gateway-1\work\Substation\server-client\client\main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map