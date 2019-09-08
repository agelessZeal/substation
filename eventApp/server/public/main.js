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
/* harmony import */ var _modules_pages_sb_event_sb_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pages/sb-event/sb-event.component */ "./client/app/modules/pages/sb-event/sb-event.component.ts");





var routes = [
    { path: 'app/home', component: _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'app/events', component: _modules_pages_sb_event_sb_event_component__WEBPACK_IMPORTED_MODULE_4__["SbEventComponent"] },
    { path: '', redirectTo: 'app/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "nav.navbar {\r\n    box-shadow: 0 1px #232323;\r\n}\r\n\r\n.navbar-nav {\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n.nav-link {\r\n    padding-right: .5rem !important;\r\n    padding-left: .5rem !important;\r\n}\r\n\r\n/* Fixes dropdown menus placed on the right side */\r\n\r\n.ml-auto .dropdown-menu {\r\n    left: auto !important;\r\n    right: 0;\r\n}\r\n\r\n.navbar a {\r\n    cursor: pointer;\r\n}\r\n\r\n.page-loading {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n    border: 1px solid black;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n    min-width: 7rem;\r\n}\r\n\r\n.dropdown-menu a:hover {\r\n    background-color: #037bfc;\r\n    color: white;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.login-failed-msg {\r\n    position: fixed;\r\n    right: 10px;\r\n    top: 62px;\r\n    padding: 9px;\r\n    color: #ffffff;\r\n    background-color: #f90837;\r\n    border-radius: 10px;\r\n    z-index:10;\r\n}\r\n\r\n.ev-app-container {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.ev-app-content {\r\n    padding-top: 1px;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n    height: calc(100vh - 56px);\r\n}\r\n\r\n.sb-page-loading {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n}\r\n\r\n.loader {\r\n    margin: 42vh auto;\r\n    font-size: 10px;\r\n    position: relative;\r\n    text-indent: -9999em;\r\n    border-top: 9px solid rgba(37, 37, 37, 0.2);\r\n    border-right: 9px solid rgba(37, 37, 37, 0.2);\r\n    border-bottom: 9px solid rgba(37, 37, 37, 0.2);\r\n    border-left: 9px solid #252525;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-animation: load8 1.1s infinite linear;\r\n    animation: load8 1.1s infinite linear;\r\n}\r\n\r\n.loader, .loader:after {\r\n    border-radius: 50%;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\n@-webkit-keyframes load8 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes load8 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQSxrREFBa0Q7O0FBQ2xEO0lBQ0kscUJBQXFCO0lBQ3JCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsWUFBWTtJQUNaLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5Qjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwyQ0FBMkM7SUFDM0MsNkNBQTZDO0lBQzdDLDhDQUE4QztJQUM5Qyw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtJQUN4Qiw2Q0FBNkM7SUFDN0MscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7UUFDL0IsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyx5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJjbGllbnQvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2Lm5hdmJhciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAjMjMyMzIzO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEZpeGVzIGRyb3Bkb3duIG1lbnVzIHBsYWNlZCBvbiB0aGUgcmlnaHQgc2lkZSAqL1xyXG4ubWwtYXV0byAuZHJvcGRvd24tbWVudSB7XHJcbiAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogMDtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhZ2UtbG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmU2ZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWluLXdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzdiZmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZC1tc2cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTA4Mzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDoxMDtcclxufVxyXG5cclxuLmV2LWFwcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXYtYXBwLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbn1cclxuXHJcblxyXG4uc2ItcGFnZS1sb2FkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTZmYztcclxufVxyXG5cclxuLmxvYWRlciB7XHJcbiAgICBtYXJnaW46IDQydmggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xyXG4gICAgYm9yZGVyLXRvcDogOXB4IHNvbGlkIHJnYmEoMzcsIDM3LCAzNywgMC4yKTtcclxuICAgIGJvcmRlci1yaWdodDogOXB4IHNvbGlkIHJnYmEoMzcsIDM3LCAzNywgMC4yKTtcclxuICAgIGJvcmRlci1ib3R0b206IDlweCBzb2xpZCByZ2JhKDM3LCAzNywgMzcsIDAuMik7XHJcbiAgICBib3JkZXItbGVmdDogOXB4IHNvbGlkICMyNTI1MjU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIGFuaW1hdGlvbjogbG9hZDggMS4xcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbi5sb2FkZXIsIC5sb2FkZXI6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsb2FkOCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"[(loggedIn)?'/app/events':'/app/home']\">{{title}} {{appVersion}} </a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!loggedIn\" (click)=\"login()\">\n                <i class=\"fa fa-sign-in\"></i>Login\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"loggedIn\" (click)=\"logout()\">\n                <i class=\"fa fa-sign-out\"></i>Logout\n            </a>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"login-failed-msg\" [innerHTML]=\"loginFailedMsg\" *ngIf=\"!!(loginFailedMsg)\"></div>\n\n<div class=\"mg-app-container\">\n    <div class=\"ev-app-content\" *ngIf=\"loggedIn\">\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"public-area\" *ngIf=\"!loggedIn\">\n        <h5>Public Area</h5>\n    </div>\n</div>\n\n<div class=\"sb-page-loading\" *ngIf=\"!pageLoaded\">\n    <div class=\"loader\"></div>\n</div>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _version_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../version.json */ "./version.json");
var _version_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../version.json */ "./version.json", 1);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/setting.service */ "./client/app/core/services/setting.service.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(broadcastService, httpService, router, settingService, evAuthService, authService) {
        this.broadcastService = broadcastService;
        this.httpService = httpService;
        this.router = router;
        this.settingService = settingService;
        this.evAuthService = evAuthService;
        this.authService = authService;
        this.title = 'EventApp';
        this.appVersion = _version_json__WEBPACK_IMPORTED_MODULE_5__.version;
        this.isIframe = window !== window.parent && !window.opener;
        this.loginFailedMsg = '';
        this.loggedIn = false;
        this.pageLoaded = false;
        if (location.href.indexOf('access_token') < 0) {
            this.checkLogin();
        }
    }
    AppComponent.prototype.checkLogin = function () {
        console.log(this.router.url);
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
        this.httpService.httpAuthGetRequest(curToken, config.client_info.apiURL.serverURL + '/authorize')
            .subscribe(function (respData) {
            localStorage.setItem(config.client_info.storeInfo.username, _this.authService.getUser().name);
            _this.pageLoaded = true;
            _this.loggedIn = true;
            if (_this.router.url == '/' || _this.router.url == '/app/home') {
                _this.router.navigateByUrl('/app/events');
            }
        }, function (error) {
            console.log('Authorization Failed' + JSON.stringify(error));
            _this.logout();
        });
    };
    AppComponent.prototype.login = function () {
        this.loginFailedMsg = '';
        this.authService.loginPopup(['user.read']);
    };
    AppComponent.prototype.logout = function () {
        this.loggedIn = false;
        this.accessToken = '';
        this.pageLoaded = true;
        localStorage.clear();
        if (this.router.url != '/' && this.router.url != '/app/home') {
            // this.router.navigateByUrl('/app/home');
            location.href = '/app/home';
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.broadcastService.subscribe('msal:loginSuccess', function (idToken) {
            // console.log('login success ' + JSON.stringify(idToken));
            console.log('login success', JSON.stringify(idToken));
            // this.loggedIn = true;
            _this.pageLoaded = false;
            // will work for acquireTokenSilent and acquireTokenPopup for Event Application
            _this.authService.acquireTokenSilent([config.client_info.msal_info.reqScopes])
                .then(function (accessToken) {
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
                alert('Expired, login again');
                _this.logout();
            }
        });
        this.settingService.getSettingInfo().subscribe(function (settingInfo) {
            var oldSetting = localStorage.getItem(settingInfo.tbl);
            if (oldSetting) {
                oldSetting = JSON.parse(oldSetting);
                if (settingInfo.key == 'filter') {
                    oldSetting.filter = !settingInfo.value;
                }
                else {
                    //This is visible features of column
                    var prevColList = oldSetting.visible;
                    if (settingInfo.value.st) {
                        prevColList.push(settingInfo.value.col);
                    }
                    else {
                        var indexOfCol = prevColList.indexOf(settingInfo.value.col);
                        if (indexOfCol > -1) {
                            prevColList.splice(indexOfCol, 1);
                        }
                    }
                    oldSetting.visible = prevColList;
                }
                localStorage.setItem(settingInfo.tbl, JSON.stringify(oldSetting));
            }
        });
    };
    AppComponent.prototype.stringAllReplace = function (srcStr, search, replacement) {
        // let token = '\\r\\n';
        // let newToken = '<br>';
        return srcStr.split(search).join(replacement);
    };
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
    AppComponent.prototype.ngOnDestroy = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./client/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./client/app/app.module.ts":
/*!**********************************!*\
  !*** ./client/app/app.module.ts ***!
  \**********************************/
/*! exports provided: loggerCallback, protectedResourceMap, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggerCallback", function() { return loggerCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protectedResourceMap", function() { return protectedResourceMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! msal */ "./node_modules/msal/lib-commonjs/index.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(msal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./client/app/modules/pages/home/home.component.ts");
/* harmony import */ var _modules_pages_sb_event_sb_event_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/pages/sb-event/sb-event.component */ "./client/app/modules/pages/sb-event/sb-event.component.ts");
/* harmony import */ var _modules_components_openstreet_map_openstreet_map_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/components/openstreet-map/openstreet-map.component */ "./client/app/modules/components/openstreet-map/openstreet-map.component.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _modules_components_openstreet_map_html_marker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/components/openstreet-map/html-marker.component */ "./client/app/modules/components/openstreet-map/html-marker.component.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/fesm5/angular-split.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _modules_components_ev_breadcrumb_ev_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/components/ev-breadcrumb/ev-breadcrumb.component */ "./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.ts");
/* harmony import */ var _modules_components_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/components/event-table/event-table.component */ "./client/app/modules/components/event-table/event-table.component.ts");
/* harmony import */ var _modules_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/components/alarm/alarm.component */ "./client/app/modules/components/alarm/alarm.component.ts");
/* harmony import */ var _modules_components_inactive_alarm_in_active_alarm_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/components/inactive-alarm/in-active-alarm.component */ "./client/app/modules/components/inactive-alarm/in-active-alarm.component.ts");
/* harmony import */ var _modules_components_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/components/page-loading/page-loading.component */ "./client/app/modules/components/page-loading/page-loading.component.ts");
/* harmony import */ var _modules_components_test_http_test_http_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/components/test-http/test-http.component */ "./client/app/modules/components/test-http/test-http.component.ts");
/* harmony import */ var _modules_components_openstreet_map_leaflet_markercluster_leaflet_markercluster_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.module */ "./client/app/modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.module.ts");
/* harmony import */ var _modules_components_time_selector_time_selector_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/components/time-selector/time-selector.component */ "./client/app/modules/components/time-selector/time-selector.component.ts");
/* harmony import */ var _modules_components_measurement_measurement_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/components/measurement/measurement.component */ "./client/app/modules/components/measurement/measurement.component.ts");
/* harmony import */ var _modules_components_metering_metering_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/components/metering/metering.component */ "./client/app/modules/components/metering/metering.component.ts");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./core/services/data.service */ "./client/app/core/services/data.service.ts");
/* harmony import */ var _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./core/services/interaction-marker.service */ "./client/app/core/services/interaction-marker.service.ts");
/* harmony import */ var _core_services_map_resize_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./core/services/map-resize.service */ "./client/app/core/services/map-resize.service.ts");
/* harmony import */ var _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./core/services/msmr-device-selection.service */ "./client/app/core/services/msmr-device-selection.service.ts");
/* harmony import */ var _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./core/services/update-msmr-marker.service */ "./client/app/core/services/update-msmr-marker.service.ts");
/* harmony import */ var _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./core/services/update-bread-crumb.service */ "./client/app/core/services/update-bread-crumb.service.ts");
/* harmony import */ var _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./core/services/update-marker.service */ "./client/app/core/services/update-marker.service.ts");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var _core_services_alarm_tab_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./core/services/alarm-tab.service */ "./client/app/core/services/alarm-tab.service.ts");













































// declare var config: any;
function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}
var protectedResourceMap = [['https://graph.microsoft.com/v1.0/me', ['user.read']]];
var glConfig = {
    components: [
        {
            component: _modules_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_26__["AlarmComponent"],
            componentName: 'app-alarm'
        }, {
            component: _modules_components_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_25__["EventTableComponent"],
            componentName: 'app-event-table'
        }, {
            component: _modules_components_openstreet_map_openstreet_map_component__WEBPACK_IMPORTED_MODULE_19__["OpenStreetMapComponent"],
            componentName: 'app-openstreet-map'
        },
    ],
    defaultLayout: {
        content: [
            {
                type: "row",
                content: [
                    {
                        type: 'column',
                        content: [
                            {
                                type: 'component',
                                componentName: 'app-alarm',
                                isClosable: false,
                                title: 'Alarms',
                            },
                            {
                                type: 'component',
                                componentName: 'app-event-table',
                                isClosable: false,
                                title: 'Events',
                            }
                        ],
                    },
                    {
                        type: 'component',
                        componentName: 'app-openstreet-map',
                        isClosable: false,
                        title: 'Map',
                    }
                ],
            }
        ]
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _modules_pages_sb_event_sb_event_component__WEBPACK_IMPORTED_MODULE_18__["SbEventComponent"],
                _modules_components_openstreet_map_openstreet_map_component__WEBPACK_IMPORTED_MODULE_19__["OpenStreetMapComponent"],
                _modules_components_openstreet_map_html_marker_component__WEBPACK_IMPORTED_MODULE_21__["HTMLMarkerComponent"],
                _modules_components_ev_breadcrumb_ev_breadcrumb_component__WEBPACK_IMPORTED_MODULE_24__["EvBreadcrumbComponent"],
                _modules_components_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_25__["EventTableComponent"],
                _modules_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_26__["AlarmComponent"],
                _modules_components_inactive_alarm_in_active_alarm_component__WEBPACK_IMPORTED_MODULE_27__["InActiveAlarmComponent"],
                _modules_components_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_28__["PageLoadingComponent"],
                _modules_components_test_http_test_http_component__WEBPACK_IMPORTED_MODULE_29__["TestHttpComponent"],
                _modules_components_time_selector_time_selector_component__WEBPACK_IMPORTED_MODULE_31__["TimeSelectorComponent"],
                _modules_components_measurement_measurement_component__WEBPACK_IMPORTED_MODULE_32__["MeasurementComponent"],
                _modules_components_metering_metering_component__WEBPACK_IMPORTED_MODULE_33__["MeteringComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__["DropdownModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_13__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_14__["ButtonModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_15__["CheckboxModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_43__["TooltipModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_16__["OwlNativeDateTimeModule"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__["MsalModule"].forRoot({
                    clientID: config.client_info.msal_info.clientID,
                    authority: config.client_info.msal_info.authority,
                    validateAuthority: true,
                    redirectUri: config.client_info.msal_info.redirectUri,
                    cacheLocation: 'localStorage',
                    postLogoutRedirectUri: config.client_info.msal_info.postLogoutRedirectUri,
                    navigateToLoginRequestUrl: true,
                    popUp: false,
                    consentScopes: ['user.read', config.client_info.msal_info.reqScopes, config.client_info.msal_info.reqScopesSub],
                    unprotectedResources: ['https://www.microsoft.com/en-us/'],
                    protectedResourceMap: protectedResourceMap,
                    logger: loggerCallback,
                    correlationId: '9843',
                    level: msal__WEBPACK_IMPORTED_MODULE_9__["LogLevel"].Info,
                    piiLoggingEnabled: true
                }),
                angular_split__WEBPACK_IMPORTED_MODULE_22__["AngularSplitModule"].forRoot(),
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_23__["LeafletModule"].forRoot(),
                _modules_components_openstreet_map_leaflet_markercluster_leaflet_markercluster_module__WEBPACK_IMPORTED_MODULE_30__["LeafletMarkerClusterModule"],
                _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_34__["GoldenLayoutModule"].forRoot(glConfig),
            ],
            entryComponents: [_modules_components_openstreet_map_html_marker_component__WEBPACK_IMPORTED_MODULE_21__["HTMLMarkerComponent"], _modules_components_alarm_alarm_component__WEBPACK_IMPORTED_MODULE_26__["AlarmComponent"], _modules_components_event_table_event_table_component__WEBPACK_IMPORTED_MODULE_25__["EventTableComponent"], _modules_components_openstreet_map_openstreet_map_component__WEBPACK_IMPORTED_MODULE_19__["OpenStreetMapComponent"]],
            providers: [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_20__["HttpServiceHelper"],
                _core_services_alarm_tab_service__WEBPACK_IMPORTED_MODULE_44__["AlarmTabService"],
                _core_services_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"],
                _core_services_data_service__WEBPACK_IMPORTED_MODULE_36__["DataService"],
                _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_37__["InteractionMarkerService"],
                _core_services_map_resize_service__WEBPACK_IMPORTED_MODULE_38__["MapResizeService"],
                _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_39__["MsMrDeviceSelectionService"],
                _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_41__["UpdateBreadCrumbService"],
                _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_40__["UpdateMsMrMarkerService"],
                _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_42__["UpdateMarkerService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
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
    HttpServiceHelper.prototype.httpPutRequest = function (accessToken, url, putBody) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.put(url, putBody, httpOptions);
    };
    HttpServiceHelper.prototype.httpPatchRequest = function (accessToken, url, putBody) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.patch(url, putBody, httpOptions);
    };
    HttpServiceHelper.prototype.httpDeleteRequest = function (accessToken, url) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.delete(url, httpOptions);
    };
    HttpServiceHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServiceHelper);
    return HttpServiceHelper;
}());



/***/ }),

/***/ "./client/app/core/interfaces/actions.ts":
/*!***********************************************!*\
  !*** ./client/app/core/interfaces/actions.ts ***!
  \***********************************************/
/*! exports provided: Actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
var Actions;
(function (Actions) {
    Actions["post"] = "Postpone";
    Actions["ext"] = "External";
    Actions["close"] = "Close";
})(Actions || (Actions = {}));


/***/ }),

/***/ "./client/app/core/interfaces/severity.ts":
/*!************************************************!*\
  !*** ./client/app/core/interfaces/severity.ts ***!
  \************************************************/
/*! exports provided: Severity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Severity", function() { return Severity; });
var Severity;
(function (Severity) {
    Severity["critical"] = "Critical";
    Severity["major"] = "Major";
    Severity["minor"] = "Minor";
    Severity["warning"] = "Warning";
    Severity["info"] = "Information";
})(Severity || (Severity = {}));


/***/ }),

/***/ "./client/app/core/services/alarm-tab.service.ts":
/*!*******************************************************!*\
  !*** ./client/app/core/services/alarm-tab.service.ts ***!
  \*******************************************************/
/*! exports provided: AlarmTabService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmTabService", function() { return AlarmTabService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var AlarmTabService = /** @class */ (function () {
    function AlarmTabService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AlarmTabService.prototype.setTabMode = function (authInfo) {
        this.subject.next(authInfo);
    };
    AlarmTabService.prototype.getTabMode = function () {
        return this.subject.asObservable();
    };
    AlarmTabService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AlarmTabService);
    return AlarmTabService;
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
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




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
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./client/app/core/services/data.service.ts":
/*!**************************************************!*\
  !*** ./client/app/core/services/data.service.ts ***!
  \**************************************************/
/*! exports provided: Marker, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");



var Marker = /** @class */ (function () {
    function Marker() {
    }
    return Marker;
}());

var DataService = /** @class */ (function () {
    function DataService() {
        this.markers = [
            {
                id: 1,
                name: 'Marker name 1',
                description: 'descr 1',
                position: [46.879966, -121.726909]
            },
            {
                id: 2,
                name: 'Marker name 2',
                description: 'descr 2',
                position: [46.000966, -123.726909]
            }
        ];
    }
    DataService.prototype.getMarkers = function () {
        return this.markers;
    };
    DataService.prototype.getMarkerById = function (id) {
        return this.markers.filter(function (entry) { return entry.id === id; })[0];
    };
    DataService.prototype.changeMarkerData = function () {
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            // just add a random number at the end
            marker.description = "Some random value " + Math.random() * 100;
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_2__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./client/app/core/services/interaction-marker.service.ts":
/*!****************************************************************!*\
  !*** ./client/app/core/services/interaction-marker.service.ts ***!
  \****************************************************************/
/*! exports provided: InteractionMarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionMarkerService", function() { return InteractionMarkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var InteractionMarkerService = /** @class */ (function () {
    function InteractionMarkerService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Select Marker and Select Row
     * @param type //'event' = >Events Data, 'alarm' =>Active Alarm Data, 'in-alarm'=>InActive Alarm
     * @param mkInfo
     * @param is_selected //True => select, False => Deselect Event
     */
    InteractionMarkerService.prototype.setMarkerInfo = function (type, mkInfo, is_selected) {
        this.subject.next({ type: type, mkInfo: mkInfo, is_selected: is_selected });
    };
    InteractionMarkerService.prototype.getMarkerInfo = function () {
        return this.subject.asObservable();
    };
    InteractionMarkerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], InteractionMarkerService);
    return InteractionMarkerService;
}());



/***/ }),

/***/ "./client/app/core/services/map-resize.service.ts":
/*!********************************************************!*\
  !*** ./client/app/core/services/map-resize.service.ts ***!
  \********************************************************/
/*! exports provided: MapResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapResizeService", function() { return MapResizeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var MapResizeService = /** @class */ (function () {
    function MapResizeService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MapResizeService.prototype.setMapResizeInfo = function (resizeInfo) {
        this.subject.next(resizeInfo);
    };
    MapResizeService.prototype.getMapResizeInfo = function () {
        return this.subject.asObservable();
    };
    MapResizeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MapResizeService);
    return MapResizeService;
}());



/***/ }),

/***/ "./client/app/core/services/msmr-device-selection.service.ts":
/*!*******************************************************************!*\
  !*** ./client/app/core/services/msmr-device-selection.service.ts ***!
  \*******************************************************************/
/*! exports provided: MsMrDeviceSelectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsMrDeviceSelectionService", function() { return MsMrDeviceSelectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var MsMrDeviceSelectionService = /** @class */ (function () {
    function MsMrDeviceSelectionService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MsMrDeviceSelectionService.prototype.setDevList = function (type, unitList, devIdList, timeInfo) {
        if (timeInfo === void 0) { timeInfo = null; }
        this.subject.next({ type: type, unitList: unitList, devIdList: devIdList, timeInfo: timeInfo });
    };
    MsMrDeviceSelectionService.prototype.getDevList = function () {
        return this.subject.asObservable();
    };
    MsMrDeviceSelectionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], MsMrDeviceSelectionService);
    return MsMrDeviceSelectionService;
}());



/***/ }),

/***/ "./client/app/core/services/setting.service.ts":
/*!*****************************************************!*\
  !*** ./client/app/core/services/setting.service.ts ***!
  \*****************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SettingService = /** @class */ (function () {
    function SettingService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SettingService.prototype.setSettingInfo = function (tblName, settingKey, settingValue) {
        this.subject.next({ tbl: tblName, key: settingKey, value: settingValue });
    };
    SettingService.prototype.getSettingInfo = function () {
        return this.subject.asObservable();
    };
    SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SettingService);
    return SettingService;
}());



/***/ }),

/***/ "./client/app/core/services/update-bread-crumb.service.ts":
/*!****************************************************************!*\
  !*** ./client/app/core/services/update-bread-crumb.service.ts ***!
  \****************************************************************/
/*! exports provided: UpdateBreadCrumbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBreadCrumbService", function() { return UpdateBreadCrumbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var UpdateBreadCrumbService = /** @class */ (function () {
    function UpdateBreadCrumbService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Set Current Selected Item
     * @param searchInfo : {sub:sub, bay:bay, dev:dev}
     */
    UpdateBreadCrumbService.prototype.setBDInfo = function (searchInfo) {
        this.subject.next(searchInfo);
    };
    UpdateBreadCrumbService.prototype.getBDInfo = function () {
        return this.subject.asObservable();
    };
    UpdateBreadCrumbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UpdateBreadCrumbService);
    return UpdateBreadCrumbService;
}());



/***/ }),

/***/ "./client/app/core/services/update-marker.service.ts":
/*!***********************************************************!*\
  !*** ./client/app/core/services/update-marker.service.ts ***!
  \***********************************************************/
/*! exports provided: Marker, UpdateMarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMarkerService", function() { return UpdateMarkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var Marker = /** @class */ (function () {
    function Marker() {
    }
    return Marker;
}());

var UpdateMarkerService = /** @class */ (function () {
    function UpdateMarkerService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Draw Maker List on the openstreet map
     * @param type //'event' = >Events Data, 'alarm' => Alarm Data
     * @param mkList
     */
    UpdateMarkerService.prototype.drawMks = function (type, mkList) {
        this.subject.next({ type: type, mkList: mkList });
    };
    UpdateMarkerService.prototype.getMksInfo = function () {
        return this.subject.asObservable();
    };
    UpdateMarkerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UpdateMarkerService);
    return UpdateMarkerService;
}());



/***/ }),

/***/ "./client/app/core/services/update-msmr-marker.service.ts":
/*!****************************************************************!*\
  !*** ./client/app/core/services/update-msmr-marker.service.ts ***!
  \****************************************************************/
/*! exports provided: Marker, UpdateMsMrMarkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMsMrMarkerService", function() { return UpdateMsMrMarkerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");




var Marker = /** @class */ (function () {
    function Marker() {
    }
    return Marker;
}());

var UpdateMsMrMarkerService = /** @class */ (function () {
    function UpdateMsMrMarkerService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // type: 'Meaurements' / 'Meterings'
    // devId': devId
    // unitId: unitId,
    // devInfo: devInfo
    // unitInfo: unitInfo
    // value: measurement value
    UpdateMsMrMarkerService.prototype.setMsMarker = function (type, layerType, mkList) {
        this.subject.next({
            type: type,
            layerType: layerType,
            mkList: mkList
        });
    };
    UpdateMsMrMarkerService.prototype.getMsMarketInfo = function () {
        return this.subject.asObservable();
    };
    UpdateMsMrMarkerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_3__["MultiWindowService"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UpdateMsMrMarkerService);
    return UpdateMsMrMarkerService;
}());



/***/ }),

/***/ "./client/app/modules/components/alarm/alarm.component.css":
/*!*****************************************************************!*\
  !*** ./client/app/modules/components/alarm/alarm.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alarm-list {\r\n    position: relative;\r\n    overflow: auto;\r\n}\r\n.row-edit-btn {\r\n    color: #007bff !important;\r\n    cursor: pointer !important;\r\n}\r\n.row-edit-btn:hover{\r\n    text-decoration: underline !important;\r\n}\r\n.ev-table-wrapper {\r\n    position: relative;\r\n}\r\n.th-id-wrap:first-child{\r\n    width: 70px;\r\n}\r\nth input[type='text'],\r\nth input[type='number'] {\r\n    width: 100%;\r\n}\r\n/*th:nth-child(8) {*/\r\n/*    width: 115px;*/\r\n/*}*/\r\n/*th:nth-child(6) {*/\r\n/*    width: 100px;*/\r\n/*}*/\r\n.alarm-detail-form {\r\n    margin-bottom: 0;\r\n}\r\n.alarm-detail-form p>span {\r\n    font-weight: bold;\r\n}\r\n.ui-dialog .ui-dialog-titlebar .ui-dialog-title {\r\n    font-size: 1.15em;\r\n}\r\n.ev-severity-btn {\r\n    padding: 2px 10px;\r\n    color: white;\r\n    border-radius: 3px;\r\n}\r\n.ev-add-action-btn {\r\n    margin-top: 10px;\r\n}\r\n.dlg-resize-btn {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 19px;\r\n}\r\n#alarm-container{\r\n    height: 100%;\r\n    position: relative;\r\n    padding-bottom: 5px;\r\n    padding-right: 5px;\r\n}\r\n#alarm-container>div {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2FsYXJtL2FsYXJtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0kscUNBQXFDO0FBQ3pDO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBOztJQUVJLFdBQVc7QUFDZjtBQUVBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVKO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9hbGFybS9hbGFybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYXJtLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLnJvdy1lZGl0LWJ0biB7XHJcbiAgICBjb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvdy1lZGl0LWJ0bjpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV2LXRhYmxlLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50aC1pZC13cmFwOmZpcnN0LWNoaWxke1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbn1cclxudGggaW5wdXRbdHlwZT0ndGV4dCddLFxyXG50aCBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyp0aDpudGgtY2hpbGQoOCkgeyovXHJcbi8qICAgIHdpZHRoOiAxMTVweDsqL1xyXG4vKn0qL1xyXG4vKnRoOm50aC1jaGlsZCg2KSB7Ki9cclxuLyogICAgd2lkdGg6IDEwMHB4OyovXHJcbi8qfSovXHJcblxyXG4uYWxhcm0tZGV0YWlsLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYWxhcm0tZGV0YWlsLWZvcm0gcD5zcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciAudWktZGlhbG9nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG59XHJcbi5ldi1zZXZlcml0eS1idG4ge1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5ldi1hZGQtYWN0aW9uLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5kbGctcmVzaXplLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxOXB4O1xyXG59XHJcbiNhbGFybS1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbiNhbGFybS1jb250YWluZXI+ZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/alarm/alarm.component.html":
/*!******************************************************************!*\
  !*** ./client/app/modules/components/alarm/alarm.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"alarm-container\">\n    <div>\n        <app-ev-breadcrumb></app-ev-breadcrumb>\n        <button type=\"button\" id=\"alarm-tbl-sel-btn\" (click)=\"onForceRowSelect()\" style=\"display: none\"></button>\n        <app-page-loading *ngIf=\"!contentLoaded\"></app-page-loading>\n        <p-tabView (onChange)=\"onChangeTabView($event)\">\n            <p-tabPanel header=\"Active\" leftIcon=\"pi pi-check\" [selected]=\"alarmTabMode\">\n                <div class=\"ev-table-wrapper\" id=\"{{tableId}}\">\n                    <div class=\"table-setting-bar\">\n                        <div class=\"dropdown mg-dropdown-area\" >\n                            <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                            <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                                    pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                                    (click)=\"isShowSetting = !isShowSetting\">\n                                <i class=\"fa fa-cog\"></i>\n                            </button>\n                            <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                                <div style=\"text-align:left\">\n                                    <table>\n                                        <thead>\n                                        <tr>\n                                            <th>Visible</th>\n                                            <th>Column</th>\n                                        </tr>\n                                        </thead>\n                                        <tbody>\n                                        <tr *ngFor=\"let alarmcol of alarmCols\">\n                                            <td>\n                                                <p-checkbox binary=\"true\" value=\"true\" [disabled]=\"alarmcol.visibility && curSelColsCnt == 1\"\n                                                            (onChange)=\"onChangeVisibility(alarmcol)\"\n                                                            [(ngModel)]=\"alarmcol.visibility\">\n                                                </p-checkbox>\n                                            </td>\n                                            <td>{{alarmcol.header}}</td>\n                                        </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                        <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                                pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                                [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                            <i class=\"fa fa-filter\"></i>\n                        </button>\n                        <div class=\"clearfix\"></div>\n                    </div>\n                    <p-table #activedt sortMode=\"multiple\"\n                             [style]=\"{'width':'1670px'}\"\n                             [value]=\"alarms\"\n                             [paginator]=\"true\"\n                             [rows]=\"10\"\n                             [totalRecords]=\"alarms.length\"\n                             [(selection)]=\"selectedRow\"\n                             selectionMode=\"single\"\n                             (onRowSelect)=\"onActiveAlarmSelect($event)\"\n                             (onRowUnselect)=\"onActiveAlarmDeselect($event)\">\n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th class=\"th-id-wrap\"\n                                    [pSortableColumn]=\"'id'\">ID\n                                    <p-sortIcon [field]=\"'id'\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                </th>\n                                <th class=\"th-id-wrap\" style=\"width: 76px;\">Action</th>\n                                <th class=\"th-id-wrap\"\n                                    *ngFor=\"let alarmcol of alarmCols\"\n                                    [ngClass]=\"{'mg-hide': !alarmcol.visibility}\"\n                                    [pSortableColumn]=\"alarmcol.field\" pResizableColumn>\n                                    {{alarmcol.header}}\n                                    <p-sortIcon [field]=\"alarmcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                </th>\n                            </tr>\n                            <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                                <th [ngSwitch]=\"'id'\">\n                                    <input *ngSwitchCase=\"'id'\" pInputText type=\"text\"\n                                           (input)=\"activedt.filter($event.target.value, 'id', null)\">\n                                </th>\n                                <th></th>\n                                <th *ngFor=\"let alarmcol of alarmCols\"\n                                    [ngClass]=\"{'mg-hide':!alarmcol.visibility}\"\n                                    [ngSwitch]=\"alarmcol.field\">\n                                    <input *ngSwitchCase=\"alarmcol.field\" pInputText type=\"text\"\n                                           (input)=\"activedt.filter($event.target.value, alarmcol.field, null)\">\n                                </th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-activeAlarm>\n                            <tr [pSelectableRow]=\"activeAlarm\" id=\"active-alarm-{{activeAlarm.id}}\">\n                                <td>\n                                    {{ activeAlarm['id']}}\n                                </td>\n                                <td>\n                                    <a class=\"row-edit-btn\" (click)=\"onEditActiveAlarmRow(activeAlarm)\">Edit</a>\n                                </td>\n                                <td *ngFor=\"let alarmcol of alarmCols\"\n                                    [ngClass]=\"{'mg-hide':!alarmcol.visibility}\">\n                                    <span *ngIf=\"alarmcol.field == 'severity'\"\n                                          class=\"ev-severity-btn ev-sv-{{activeAlarm[alarmcol.field].toLowerCase()}}\">\n                                        {{activeAlarm[alarmcol.field]}}\n                                    </span>\n                                    {{ (alarmcol.field != 'severity')? activeAlarm[alarmcol.field]:'' }}\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n                </div>\n            </p-tabPanel>\n            <p-tabPanel header=\"InActive\" leftIcon=\"pi pi-times\" [selected]=\"!alarmTabMode\">\n                <in-active-app-alarm></in-active-app-alarm>\n            </p-tabPanel>\n        </p-tabView>\n        <div class=\"action-detail-form\">\n            <p-dialog header=\"Action Details\" [style]=\"{'min-width': '400px'}\" [resizable]=\"true\" [closable]=\"false\"\n                      [(visible)]=\"displayAddActionModal\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label>Action</label>\n                            <p-dropdown [options]=\"actionList\"\n                                        [(ngModel)]=\"newActionName\"\n                                        (onChange)=\"onNewActionNameChange($event)\"\n                                        [style]=\"{'width':'100%'}\"></p-dropdown>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label for=\"nActionDate\">Date</label>\n                            <input placeholder=\"Date Time:\"\n                                   class=\"form-control\" id=\"nActionDate\"\n                                   [(ngModel)]=\"newActionDate\" (ngModelChange)=\"onNewActionDateChange($event)\"\n                                   [owlDateTimeTrigger]=\"actiondt\" [owlDateTime]=\"actiondt\">\n                            <owl-date-time #actiondt></owl-date-time>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label for=\"newActionMsg\">Message</label>\n                            <textarea rows=\"5\" id=\"newActionMsg\" class=\"form-control\"\n                                      [(ngModel)]=\"newActionMsg\"\n                                      (ngModelChange)=\"onNewActionMsgChange($event)\"></textarea>\n                        </div>\n                    </div>\n                </div>\n                <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <button type=\"button\" pButton\n                                icon=\"fa fa-close\"\n                                (click)=\"onDiscard()\"\n                                label=\"Cancel\"></button>\n                        <button type=\"button\" pButton\n                                [disabled]=\"!(newActionDate && newActionMsg)\"\n                                icon=\"fa {{isActionAdding?'fa-spinner fa-spin':'fa-check'}}\"\n                                (click)=\"onAddAlarmAction()\"\n                                label=\"Add\"></button>\n                        <img src=\"../../../../assets/img/resizer.png\" class=\"dlg-resize-btn\">\n                    </div>\n                </p-footer>\n            </p-dialog>\n        </div>\n        <div class=\"alarm-edit-form\">\n            <p-dialog header=\"Alarm Details\" [style]=\"{'width': '800px','min-width':'800px'}\" [resizable]=\"true\"\n                      [closable]=\"false\"\n                      [(visible)]=\"displayEditAlarmModal\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group alarm-detail-form\">\n                            <p><span>AlarmID: </span>{{curAlarmInfo?.id}}</p>\n                            <p><span>DeviceMrID: </span>{{curAlarmInfo?.devicemrid}}</p>\n                            <p><span>Date: </span>{{curAlarmInfo?.date}}</p>\n                            <p><span>PostponeDate: </span>{{curAlarmInfo?.postponedate}}</p>\n                            <p><span>State: </span>{{curAlarmInfo?.state}}</p>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group alarm-detail-form\">\n                            <p><span>Name: </span>{{curAlarmInfo?.name}}</p>\n                            <p><span>Cause: </span>{{curAlarmInfo?.cause}}</p>\n                            <p><span>ActiveCount: </span>{{curAlarmInfo?.activecount}}</p>\n                            <p><span>ActiveDate: </span>{{curAlarmInfo?.activedate}}</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label for=\"severity-sel\">Severity: </label>\n                            <select class=\"form-control\"\n                                    [(ngModel)]=\"curSeverity\"\n                                    (ngModelChange)=\"onSeverityChange($event)\"\n                                    id=\"severity-sel\">\n                                <option *ngFor=\"let svitem of severities\"\n                                        [selected]=\"curAlarmInfo && (svitem == curAlarmInfo.severity)\">{{svitem}}\n                                </option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"remark\">Remark: </label>\n                            <textarea class=\"form-control\"\n                                      [(ngModel)]=\"curRemark\"\n                                      (ngModelChange)=\"onRemarkChange($event)\"\n                                      rows=\"3\" id=\"remark\">{{curAlarmInfo?.remark}}</textarea>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <p-table #dt sortMode=\"multiple\"\n                                 [value]=\"alarmActions\"\n                                 [paginator]=\"true\"\n                                 [rows]=\"5\"\n                                 [totalRecords]=\"alarmActions.length\"\n                                 selectionMode=\"single\"\n                                 (onRowSelect)=\"onActiveAlarmSelect($event)\"\n                                 (onRowUnselect)=\"onActiveAlarmDeselect($event)\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th *ngFor=\"let actioncol of actionCols\"\n                                        [pSortableColumn]=\"actioncol.field\">\n                                        {{actioncol.header}}\n                                        <p-sortIcon [field]=\"actioncol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                    </th>\n                                </tr>\n                                <tr>\n                                    <th *ngFor=\"let actioncol of actionCols\" [ngSwitch]=\"actioncol.field\">\n                                        <input *ngSwitchCase=\"actioncol.field\" pInputText type=\"text\"\n                                               (input)=\"dt.filter($event.target.value, actioncol.field, actioncol.filterMatchMode)\">\n                                    </th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-actiondata>\n                                <tr [pSelectableRow]=\"actiondata\">\n                                    <td *ngFor=\"let actioncol of actionCols\">\n                                        {{actiondata[actioncol.field]}}\n                                    </td>\n                                </tr>\n                            </ng-template>\n                        </p-table>\n                        <div style=\"text-align:left\" *ngIf=\"alarmTabMode\" class=\"ev-add-action-btn\">\n                            <button type=\"button\" pButton\n                                    icon=\"fa fa-plus\"\n                                    (click)=\"onAddActionDialog()\"\n                                    label=\"Add\"></button>\n                        </div>\n                    </div>\n                </div>\n                <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <button type=\"button\" pButton\n                                icon=\"fa fa-close\"\n                                (click)=\"onDiscardAlarm()\"\n                                label=\"Cancel\"></button>\n                        <button type=\"button\" pButton\n                                [disabled]=\"!isAlarmEditFormChanged\"\n                                icon=\"fa {{isAlarmSaving?'fa-spinner fa-spin':'fa-check'}}\"\n                                (click)=\"onSaveAlarm()\"\n                                label=\"Save\"></button>\n                        <img src=\"../../../../assets/img/resizer.png\" class=\"dlg-resize-btn\">\n                    </div>\n                </p-footer>\n            </p-dialog>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/alarm/alarm.component.ts":
/*!****************************************************************!*\
  !*** ./client/app/modules/components/alarm/alarm.component.ts ***!
  \****************************************************************/
/*! exports provided: AlarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmComponent", function() { return AlarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/interaction-marker.service */ "./client/app/core/services/interaction-marker.service.ts");
/* harmony import */ var _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-marker.service */ "./client/app/core/services/update-marker.service.ts");
/* harmony import */ var _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/update-bread-crumb.service */ "./client/app/core/services/update-bread-crumb.service.ts");
/* harmony import */ var _core_interfaces_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/interfaces/actions */ "./client/app/core/interfaces/actions.ts");
/* harmony import */ var _core_interfaces_severity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/interfaces/severity */ "./client/app/core/interfaces/severity.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! golden-layout */ "./node_modules/golden-layout/dist/goldenlayout.js");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_alarm_tab_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/services/alarm-tab.service */ "./client/app/core/services/alarm-tab.service.ts");
















var AlarmComponent = /** @class */ (function () {
    function AlarmComponent(container, interactMkService, updateMKService, httpService, router, alarmTabService, settingService, authService, bdService) {
        this.container = container;
        this.interactMkService = interactMkService;
        this.updateMKService = updateMKService;
        this.httpService = httpService;
        this.router = router;
        this.alarmTabService = alarmTabService;
        this.settingService = settingService;
        this.authService = authService;
        this.bdService = bdService;
        this.alarmTabMode = true;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.isAlarmSaving = false;
        this.isActionAdding = false;
        this.alarmTimer = false;
        this.isLoggedIn = true;
        this.alarmCols = [
            { field: 'name', header: 'Name', group: '' },
            { field: 'date', header: 'Date' },
            { field: 'postponedate', header: 'PostponeDate', group: '' },
            { field: 'state', header: 'State', group: '' },
            { field: 'remark', header: 'Remark', group: '' },
            { field: 'cause', header: 'Cause', group: '' },
            { field: 'severity', header: 'Severity', group: '' },
            { field: 'devicemrid', header: 'Devicemrid', group: '' },
            { field: 'activecount', header: 'ActiveCount', group: '' },
            { field: 'activedate', header: 'ActiveDate', group: '' },
        ];
        this.actionCols = [
            { field: 'action', header: 'Action' },
            { field: 'date', header: 'Date' },
            { field: 'targetdate', header: 'TargetDate' },
            { field: 'message', header: 'Message' },
        ];
        this.alarmActions = [];
        this.alarms = [];
        this.curSearchInfo = { sub: '', bay: '', dev: '' };
        this.displayAddActionModal = false;
        this.displayEditAlarmModal = false;
        this.newActionName = this.newActionMsg = '';
        this.newActionDate = new Date();
        this.curSeverity = this.curRemark = '';
        this.isAlarmEditFormChanged = false;
        this.actionList = [];
        for (var item in _core_interfaces_actions__WEBPACK_IMPORTED_MODULE_7__["Actions"]) {
            if (isNaN(Number(item))) {
                this.actionList.push({ label: _core_interfaces_actions__WEBPACK_IMPORTED_MODULE_7__["Actions"][item], value: _core_interfaces_actions__WEBPACK_IMPORTED_MODULE_7__["Actions"][item] });
            }
        }
        this.severities = [];
        for (var item in _core_interfaces_severity__WEBPACK_IMPORTED_MODULE_8__["Severity"]) {
            if (isNaN(Number(item))) {
                this.severities.push(_core_interfaces_severity__WEBPACK_IMPORTED_MODULE_8__["Severity"][item]);
            }
        }
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.tableId = 'alarm-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
    }
    AlarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get Active Alarms
        this.initTableSetting();
        this.getAlarms();
        this.interactMkService.getMarkerInfo().subscribe(function (mkInfo) {
            if (mkInfo.type == 'Alarms') {
                _this.curSelectedRow = mkInfo.mkInfo;
                //Angular Model Rendering Issue (Force Rendering)
                _this.alarmTabMode = true;
                var alarmTblSelBtn = document.getElementById('alarm-tbl-sel-btn');
                if (alarmTblSelBtn) {
                    alarmTblSelBtn.click();
                }
            }
            if (mkInfo.type == 'In-Alarms') {
                _this.alarmTabMode = false;
            }
        });
        this.bdService.getBDInfo().subscribe(function (bdInfo) {
            _this.curSearchInfo = bdInfo;
            _this.stopAlarmTimer();
            _this.getAlarms();
        });
    };
    AlarmComponent.prototype.onForceRowSelect = function () {
        this.selectedRow = this.curSelectedRow;
        var htmlDomItem = document.getElementById("active-alarm-" + this.selectedRow.id);
        if (htmlDomItem) {
            htmlDomItem.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
        }
    };
    AlarmComponent.prototype.getAlarms = function () {
        var _this = this;
        var alarmIds = [];
        var promiseList = [];
        var alarmListURL = config.client_info.apiURL.serverURL + "/events/alarm?active=true";
        if (this.curSearchInfo.sub)
            alarmListURL += "&substationmrid=" + this.curSearchInfo.sub;
        if (this.curSearchInfo.bay)
            alarmListURL += "&baymrid=" + this.curSearchInfo.bay;
        if (this.curSearchInfo.dev)
            alarmListURL += "&devicemrid=" + this.curSearchInfo.dev;
        if (!this.alarmTimer) {
            this.contentLoaded = false;
        }
        this.httpService.httpGetRequest(this.accessToken, alarmListURL).subscribe(function (results) {
            alarmIds = results;
            for (var i = 0; i < alarmIds.length; i++) {
                var alarmDetailURL = config.client_info.apiURL.serverURL + "/events/alarm/" + alarmIds[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, alarmDetailURL));
            }
            if (promiseList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (alarmDetails) {
                    _this.contentLoaded = true;
                    _this.getAlarmLocation(alarmDetails);
                });
            }
            else {
                _this.contentLoaded = true;
                _this.getAlarmLocation([]);
            }
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.contentLoaded = true;
            _this.getAlarmLocation([]);
        });
    };
    AlarmComponent.prototype.getAlarmLocation = function (alarmList) {
        var _this = this;
        var promiseList = [];
        var devIdList = [];
        for (var i = 0; i < alarmList.length; i++) {
            if (devIdList.indexOf(alarmList[i].devicemrid) < 0) {
                devIdList.push(alarmList[i].devicemrid);
            }
        }
        if (devIdList.length > 0) {
            for (var i = 0; i < devIdList.length; i++) {
                var devDetailURL = config.client_info.apiURL.serverURL + "/devices/" + devIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, devDetailURL));
            }
            if (!this.alarmTimer) {
                this.contentLoaded = false;
            }
            console.warn('------------------Get Alarm Locations-----------------------');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (devDetailList) {
                for (var _i = 0, devDetailList_1 = devDetailList; _i < devDetailList_1.length; _i++) {
                    var devInfo = devDetailList_1[_i];
                    for (var _a = 0, alarmList_1 = alarmList; _a < alarmList_1.length; _a++) {
                        var alarmInfo = alarmList_1[_a];
                        if (devInfo.mrid == alarmInfo.devicemrid) {
                            alarmInfo.location = devInfo.location;
                        }
                    }
                }
                _this.contentLoaded = true;
                _this.getActionDetails(alarmList);
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.contentLoaded = true;
                _this.getActionDetails([]);
            });
        }
        else {
            this.getActionDetails([]);
        }
    };
    AlarmComponent.prototype.getActionDetails = function (alarmList) {
        var _this = this;
        var promiseList = [];
        var alarmIdList = [];
        for (var i = 0; i < alarmList.length; i++) {
            if (alarmIdList.indexOf(alarmList[i].id) < 0) {
                alarmIdList.push(alarmList[i].id);
            }
        }
        if (alarmIdList.length > 0) {
            for (var i = 0; i < alarmIdList.length; i++) {
                var actionsDetailURL = config.client_info.apiURL.serverURL + "/events/alarm/" + alarmIdList[i] + "/actions";
                promiseList.push(this.httpService.httpGetRequestWithHeader(this.accessToken, actionsDetailURL));
            }
            if (!this.alarmTimer) {
                this.contentLoaded = false;
            }
            console.log('------------------Get InActive Alarm Actions-----------------------');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (results) {
                // let alarmActionList = res.body;
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var resp = results_1[_i];
                    var alamid = resp.url.split('alarm/')[1].split('/actions')[0];
                    for (var _a = 0, alarmList_2 = alarmList; _a < alarmList_2.length; _a++) {
                        var alarmItem = alarmList_2[_a];
                        if (alarmItem.id == alamid) {
                            alarmItem.actions = resp.body;
                            alarmItem.mk_type = 'Alarms';
                        }
                    }
                }
                _this.alarms = alarmList;
                _this.updateMKService.drawMks('Alarms', alarmList);
                _this.contentLoaded = true;
                _this.startAlarmTimer();
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.alarms = [];
                _this.updateMKService.drawMks('Alarms', []);
                _this.contentLoaded = true;
            });
        }
        else {
            this.alarms = [];
            this.updateMKService.drawMks('Alarms', []);
            this.startAlarmTimer();
        }
    };
    AlarmComponent.prototype.httpErrorHandler = function (error) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log(error);
                break;
            case 401:
                this.isLoggedIn = false;
                this.stopAlarmTimer();
                this.authService.setAuthInfo({ login_st: false });
                break;
            default:
                alert("Backend returned code " + error.status + ", body was: " + error.error.Message);
                this.startAlarmTimer();
        }
    };
    AlarmComponent.prototype.startAlarmTimer = function () {
        if (this.isLoggedIn) {
            this.stopAlarmTimer();
            var self_1 = this;
            this.alarmTimer = setTimeout(function () {
                self_1.getAlarms();
            }, config.client_info.polling_time * 1000);
        }
    };
    AlarmComponent.prototype.stopAlarmTimer = function () {
        if (this.alarmTimer) {
            clearTimeout(this.alarmTimer);
            this.alarmTimer = false;
        }
    };
    AlarmComponent.prototype.onActiveAlarmSelect = function (event) {
        this.interactMkService.setMarkerInfo('Alarms', event.data, true);
    };
    AlarmComponent.prototype.onActiveAlarmDeselect = function (event) {
        this.interactMkService.setMarkerInfo('Alarms', event.data, false);
    };
    AlarmComponent.prototype.onAddActionDialog = function () {
        this.newActionName = _core_interfaces_actions__WEBPACK_IMPORTED_MODULE_7__["Actions"].post;
        this.newActionDate = new Date();
        this.newActionMsg = '';
        this.displayAddActionModal = true;
    };
    AlarmComponent.prototype.onDiscard = function () {
        this.displayAddActionModal = false;
    };
    AlarmComponent.prototype.onAddAlarmAction = function () {
        var _this = this;
        //updating current alarms
        var actioninfo = {
            alarmid: this.curAlarmInfo.id,
            action: this.newActionName,
            date: moment__WEBPACK_IMPORTED_MODULE_9__["utc"](this.newActionDate).format(),
            targetdate: moment__WEBPACK_IMPORTED_MODULE_9__["utc"](this.newActionDate).format(),
            message: this.newActionMsg
        };
        var actionPostURL = config.client_info.apiURL.serverURL + "/events/alarm/" + this.curAlarmInfo.id + "/actions";
        this.isActionAdding = true;
        this.httpService.httpPostRequest(this.accessToken, actionPostURL, actioninfo).subscribe(function (res) {
            _this.alarmActions.push(actioninfo);
            ///update table action data
            var curalarmList;
            curalarmList = _this.alarms;
            for (var _i = 0, curalarmList_1 = curalarmList; _i < curalarmList_1.length; _i++) {
                var alarmitem = curalarmList_1[_i];
                if (alarmitem.id == actioninfo.alarmid) {
                    alarmitem.actions.push(actioninfo);
                    break;
                }
            }
            _this.displayAddActionModal = false;
            _this.isActionAdding = false;
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.isActionAdding = false;
            _this.displayAddActionModal = false;
        });
    };
    AlarmComponent.prototype.onDiscardAlarm = function () {
        this.displayEditAlarmModal = false;
    };
    AlarmComponent.prototype.onSaveAlarm = function () {
        var _this = this;
        //1. update alarm info
        var alarmObj;
        alarmObj = JSON.parse(JSON.stringify(this.curAlarmInfo));
        alarmObj.severity = this.curSeverity;
        alarmObj.remark = this.curRemark;
        var alarmPatchURL = config.client_info.apiURL.serverURL + "/events/alarm/" + alarmObj.id;
        this.isAlarmEditFormChanged = false;
        this.isAlarmSaving = true;
        this.httpService.httpPatchRequest(this.accessToken, alarmPatchURL, alarmObj).subscribe(function (res) {
            console.log('Updated Alarm successfully');
            var curalarmList;
            curalarmList = _this.alarms;
            for (var _i = 0, curalarmList_2 = curalarmList; _i < curalarmList_2.length; _i++) {
                var alarmitem = curalarmList_2[_i];
                if (alarmitem.id == alarmObj.id) {
                    alarmitem.severity = alarmObj.severity;
                    alarmitem.remark = alarmObj.remark;
                    break;
                }
            }
            _this.displayEditAlarmModal = false;
            _this.isAlarmSaving = false;
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.isAlarmEditFormChanged = true;
            _this.isAlarmSaving = false;
        });
    };
    AlarmComponent.prototype.onNewActionNameChange = function (event) {
        this.newActionName = event.value;
    };
    AlarmComponent.prototype.onNewActionDateChange = function (newVal) {
        this.newActionDate = newVal;
    };
    AlarmComponent.prototype.onNewActionMsgChange = function (newVal) {
        this.newActionMsg = newVal;
    };
    AlarmComponent.prototype.onInActiveAlarmSelect = function (event) {
    };
    AlarmComponent.prototype.onInActiveAlarmDeselect = function (event) {
    };
    //////Edit Alarm Form/////////
    AlarmComponent.prototype.checkEditAlarmForm = function () {
        this.isAlarmEditFormChanged = (this.curSeverity != this.curAlarmInfo.severity ||
            this.curRemark != this.curAlarmInfo.remark);
    };
    AlarmComponent.prototype.onEditActiveAlarmRow = function (alarmInfo) {
        this.curAlarmInfo = alarmInfo;
        this.alarmActions = JSON.parse(JSON.stringify(alarmInfo.actions));
        this.curSeverity = alarmInfo.severity;
        this.curRemark = alarmInfo.remark;
        this.displayEditAlarmModal = true;
    };
    AlarmComponent.prototype.onEditInActiveAlarmRow = function (alarmInfo) {
        this.curAlarmInfo = alarmInfo;
        this.alarmActions = JSON.parse(JSON.stringify(alarmInfo.actions));
        this.curSeverity = alarmInfo.severity;
        this.curRemark = alarmInfo.remark;
        this.displayEditAlarmModal = true;
    };
    AlarmComponent.prototype.onSeverityChange = function (newVal) {
        this.curSeverity = newVal;
        this.checkEditAlarmForm();
    };
    AlarmComponent.prototype.onRemarkChange = function (newVal) {
        this.curRemark = newVal;
        this.checkEditAlarmForm();
    };
    AlarmComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = [
                'Name', 'Date', 'PostponeDate', 'State', 'Remark', 'Cause',
                'Severity', 'Devicemrid', 'ActiveCount', 'ActiveDate'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.alarmCols = this.checkColVisibility(this.alarmCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    AlarmComponent.prototype.onChangeTabView = function ($ev) {
        if ($ev.index == 1) {
            this.alarmTabService.setTabMode(true);
        }
    };
    AlarmComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    AlarmComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    AlarmComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    AlarmComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    AlarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alarm',
            template: __webpack_require__(/*! ./alarm.component.html */ "./client/app/modules/components/alarm/alarm.component.html"),
            styles: [__webpack_require__(/*! ./alarm.component.css */ "./client/app/modules/components/alarm/alarm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_13__["GoldenLayoutContainer"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_4__["InteractionMarkerService"],
            _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_5__["UpdateMarkerService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            _core_services_alarm_tab_service__WEBPACK_IMPORTED_MODULE_15__["AlarmTabService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_14__["SettingService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
            _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_6__["UpdateBreadCrumbService"]])
    ], AlarmComponent);
    return AlarmComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.css":
/*!*********************************************************************************!*\
  !*** ./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ev-breadcrumb{\r\n    position: relative;\r\n}\r\n#ev-breadcrumb label {\r\n    display: block;\r\n}\r\n#ev-breadcrumb .form-group{\r\n    margin-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2V2LWJyZWFkY3J1bWIvZXYtYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvZXYtYnJlYWRjcnVtYi9ldi1icmVhZGNydW1iLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXYtYnJlYWRjcnVtYntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4jZXYtYnJlYWRjcnVtYiBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4jZXYtYnJlYWRjcnVtYiAuZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.html":
/*!**********************************************************************************!*\
  !*** ./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ev-breadcrumb\">\n    <app-page-loading *ngIf=\"!contentLoaded\"></app-page-loading>\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <div class=\"form-group\">\n                <label for=\"ev-substation\">Substations</label>\n                <select class=\"form-control\" [(ngModel)]=\"selectedSub\" id=\"ev-substation\"\n                        (ngModelChange)=\"onSelectSubstation($event)\">\n                    <option *ngFor=\"let sub of substations\" [value]=\"sub\">{{sub}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <div class=\"form-group\">\n                <label for=\"ev-bay\">Bays</label>\n                <select class=\"form-control\"\n                        [(ngModel)]=\"selectedBay\" id=\"ev-bay\"\n                        [disabled]=\"selectedSub == 'All'\"\n                        (ngModelChange)=\"onSelectBay($event)\">\n                    <option *ngFor=\"let bay of bays\" [value]=\"bay\">{{bay}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-md-6 ui-lg-4\">\n            <div class=\"form-group\">\n                <label for=\"ev-dev\">Devices</label>\n                <select class=\"form-control\" id=\"ev-dev\"\n                        [(ngModel)]=\"selectedDevice\"\n                        [disabled]=\"selectedSub == 'All' || selectedBay == 'All'\"\n                        (ngModelChange)=\"onSelectDevice($event)\">\n                    <option *ngFor=\"let device of devices\" [value]=\"device\">{{device}}</option>\n                </select>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.ts":
/*!********************************************************************************!*\
  !*** ./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.ts ***!
  \********************************************************************************/
/*! exports provided: EvBreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvBreadcrumbComponent", function() { return EvBreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/update-bread-crumb.service */ "./client/app/core/services/update-bread-crumb.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/msmr-device-selection.service */ "./client/app/core/services/msmr-device-selection.service.ts");






var EvBreadcrumbComponent = /** @class */ (function () {
    function EvBreadcrumbComponent(bdService, authService, msmrLayerService, httpService) {
        this.bdService = bdService;
        this.authService = authService;
        this.msmrLayerService = msmrLayerService;
        this.httpService = httpService;
        this.substations = ['All'];
        this.bays = ['All'];
        this.devices = ['All'];
        this.contentLoaded = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.selectedSub = 'All';
        this.selectedBay = 'All';
        this.selectedDevice = 'All';
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;
    }
    EvBreadcrumbComponent.prototype.ngOnInit = function () {
        this.getSubstations();
        var self = this;
    };
    EvBreadcrumbComponent.prototype.getSubstations = function () {
        var _this = this;
        var subListURL = config.client_info.apiURL.serverURL + "/substations";
        this.substations = ['All'];
        this.contentLoaded = false;
        this.httpService.httpGetRequest(this.accessToken, subListURL).subscribe(function (res) {
            _this.substations = _this.substations.concat(res);
            _this.contentLoaded = true;
        }, function (error) {
            _this.httpErrorHandler(error);
            console.error("Can't get substation list", error);
            _this.contentLoaded = true;
        });
    };
    EvBreadcrumbComponent.prototype.getBays = function (subId) {
        var _this = this;
        var getBayURL = config.client_info.apiURL.serverURL + "/substations/" + subId + "/bays";
        this.contentLoaded = false;
        this.bays = ['All'];
        this.httpService.httpGetRequest(this.accessToken, getBayURL)
            .subscribe(function (res) {
            _this.bays = _this.bays.concat(res);
            _this.contentLoaded = true;
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.contentLoaded = true;
        });
    };
    EvBreadcrumbComponent.prototype.getDevices = function (bayId) {
        var _this = this;
        var getDeviceURL = config.client_info.apiURL.serverURL + "/bays/" + bayId + "/devices";
        this.contentLoaded = false;
        this.devices = ['All'];
        this.httpService.httpGetRequest(this.accessToken, getDeviceURL)
            .subscribe(function (res) {
            _this.devices = _this.devices.concat(res);
            _this.contentLoaded = true;
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.contentLoaded = true;
        });
    };
    EvBreadcrumbComponent.prototype.httpErrorHandler = function (error) {
        var msgPrefix = "The remote server returned an error: ";
        var err401Msg = "(401) Unauthorized.";
        console.error(error);
        switch (error.status) {
            case 400:
                var errMsg = error.error.Message;
                var idx = errMsg.indexOf(msgPrefix);
                if (idx > -1) {
                    var trueMsgPart = errMsg.substr(msgPrefix.length);
                    alert(trueMsgPart);
                    if (trueMsgPart == err401Msg) {
                        this.authService.setAuthInfo({ login_st: false });
                    }
                }
                else {
                    alert(errMsg);
                }
                break;
            case 401:
                this.authService.setAuthInfo({ login_st: false });
                break;
            default:
                alert("Backend returned code " + error.status + ", body was: " + error.error.Message);
        }
    };
    EvBreadcrumbComponent.prototype.onSelectSubstation = function (newVal) {
        this.bays = ['All'];
        this.devices = ['All'];
        if (newVal != 'All') {
            this.getBays(newVal);
        }
        else {
            this.selectedBay = 'All';
            this.selectedDevice = 'All';
        }
        this.sendSearchMsg('sub');
    };
    EvBreadcrumbComponent.prototype.onSelectBay = function (newVal) {
        this.devices = ['All'];
        this.selectedDevice = 'All';
        if (newVal != 'All') {
            this.getDevices(newVal);
        }
        this.sendSearchMsg('bay');
    };
    EvBreadcrumbComponent.prototype.onSelectDevice = function (newVal) {
        this.sendSearchMsg('dev');
    };
    EvBreadcrumbComponent.prototype.sendSearchMsg = function (type) {
        var subId = (this.selectedSub == 'All') ? '' : this.selectedSub;
        var bayId = (this.selectedBay == 'All') ? '' : this.selectedBay;
        var devId = (this.selectedDevice == 'All') ? '' : this.selectedDevice;
        this.bdService.setBDInfo({ sub: subId, bay: bayId, dev: devId, type: type });
    };
    EvBreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ev-breadcrumb',
            template: __webpack_require__(/*! ./ev-breadcrumb.component.html */ "./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./ev-breadcrumb.component.css */ "./client/app/modules/components/ev-breadcrumb/ev-breadcrumb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_3__["UpdateBreadCrumbService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_5__["MsMrDeviceSelectionService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"]])
    ], EvBreadcrumbComponent);
    return EvBreadcrumbComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/event-table/event-table.component.css":
/*!*****************************************************************************!*\
  !*** ./client/app/modules/components/event-table/event-table.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#events-table-container {\r\n    position: relative;\r\n    /*overflow: auto;*/\r\n    height: 100%;\r\n    padding-bottom: 5px;\r\n}\r\nth input[type='text'],\r\nth input[type='number'] {\r\n    width: 100%;\r\n}\r\n.th-id-wrap:first-child{\r\n    width: 70px;\r\n}\r\n#events-table-container>div {\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2V2ZW50LXRhYmxlL2V2ZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTs7SUFFSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvZXZlbnQtdGFibGUvZXZlbnQtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNldmVudHMtdGFibGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qb3ZlcmZsb3c6IGF1dG87Ki9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxudGggaW5wdXRbdHlwZT0ndGV4dCddLFxyXG50aCBpbnB1dFt0eXBlPSdudW1iZXInXSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGgtaWQtd3JhcDpmaXJzdC1jaGlsZHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcbiNldmVudHMtdGFibGUtY29udGFpbmVyPmRpdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/event-table/event-table.component.html":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/event-table/event-table.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page-loading *ngIf=\"!contentLoaded\"></app-page-loading>\n<div id=\"events-table-container\">\n    <div id=\"{{tableId}}\">\n        <button type=\"button\" id=\"tbl-sel-btn\" (click)=\"onForceRowSelect()\" style=\"display: none\">Rendering</button>\n        <div class=\"ev-date-range-control\">\n            <div class=\"form-group my-inline-form-group\">\n                <label class=\"my-inline-form-label\">From : </label>\n                <input placeholder=\"Date Time:\"  [ngClass] = \"{'ev-error':fromDate>toDate}\"\n                       class=\"form-control my-inline-form-control\"\n                       [(ngModel)]=\"fromDate\" (ngModelChange)=\"onChangeFromDate($event)\"\n                       [owlDateTimeTrigger]=\"fromdt\" [owlDateTime]=\"fromdt\">\n                <owl-date-time #fromdt></owl-date-time>\n            </div>\n            <div class=\"form-group my-inline-form-group\">\n                <label class=\"my-inline-form-label\">To : </label>\n                <input placeholder=\"Date Time:\"\n                       class=\"form-control my-inline-form-control\"\n                       [(ngModel)]=\"toDate\" (ngModelChange)=\"onChangeToDate($event)\"\n                       [owlDateTimeTrigger]=\"todt\" [owlDateTime]=\"todt\">\n                <owl-date-time #todt></owl-date-time>\n            </div>\n            <div class=\"form-group my-inline-form-group\">\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"getSbEvents()\">Search</button>\n            </div>\n            <div class=\"form-group my-inline-form-group\">\n                <button type=\"button\" class=\"btn btn-info\" (click)=\"onResetTime()\">Reset</button>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <div class=\"table-setting-bar\">\n                    <div class=\"dropdown mg-dropdown-area\" >\n                        <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                                pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                                (click)=\"isShowSetting = !isShowSetting\">\n                            <i class=\"fa fa-cog\"></i>\n                        </button>\n                        <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                            <div style=\"text-align:left\">\n                                <table>\n                                    <thead>\n                                    <tr>\n                                        <th>Visible</th>\n                                        <th>Column</th>\n                                    </tr>\n                                    </thead>\n                                    <tbody>\n                                    <tr *ngFor=\"let eventcol of eventsCols\">\n                                        <td>\n                                            <p-checkbox binary=\"true\" value=\"true\" [disabled]=\"eventcol.visibility && curSelColsCnt == 1\"\n                                                        (onChange)=\"onChangeVisibility(eventcol)\"\n                                                        [(ngModel)]=\"eventcol.visibility\">\n                                            </p-checkbox>\n                                        </td>\n                                        <td>{{eventcol.header}}</td>\n                                    </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                            pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                            [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                        <i class=\"fa fa-filter\"></i>\n                    </button>\n                    <div class=\"clearfix\"></div>\n                </div>\n                <p-table #dt sortMode=\"multiple\"\n                         [value]=\"events\"\n                         [paginator]=\"true\" [rows]=\"10\"\n                         [totalRecords]=\"events.length\"\n                         [(selection)]=\"selectedRow\"\n                         selectionMode=\"single\"\n                         (onRowSelect)=\"onSelectRow($event)\"\n                         (onRowUnselect)=\"onDeselectRow($event)\">\n                    <ng-template pTemplate=\"header\">\n                        <tr>\n                            <th class=\"th-id-wrap\" *ngFor=\"let eventcol of eventsCols\"\n                                [ngClass]=\"{'mg-hide': !eventcol.visibility}\"\n                                [pSortableColumn]=\"eventcol.field\">\n                                {{eventcol.header}}\n                                <p-sortIcon [field]=\"eventcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                            </th>\n                        </tr>\n                        <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                            <th *ngFor=\"let eventcol of eventsCols\"\n                                [ngClass]=\"{'mg-hide':!eventcol.visibility}\"\n                                [ngSwitch]=\"eventcol.field\">\n                                <input *ngSwitchCase=\"eventcol.field\" pInputText type=\"text\"\n                                       (input)=\"dt.filter($event.target.value, eventcol.field, eventcol.filterMatchMode)\">\n                            </th>\n                        </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-eventdata>\n                        <tr [pSelectableRow]=\"eventdata\">\n                            <td *ngFor=\"let eventcol of eventsCols\"\n                                [ngClass]=\"{'mg-hide':!eventcol.visibility}\">\n                                {{eventdata[eventcol.field]}}\n                            </td>\n                        </tr>\n                    </ng-template>\n                </p-table>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/event-table/event-table.component.ts":
/*!****************************************************************************!*\
  !*** ./client/app/modules/components/event-table/event-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: EventTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTableComponent", function() { return EventTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-marker.service */ "./client/app/core/services/update-marker.service.ts");
/* harmony import */ var _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/interaction-marker.service */ "./client/app/core/services/interaction-marker.service.ts");
/* harmony import */ var _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/update-bread-crumb.service */ "./client/app/core/services/update-bread-crumb.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");










var EventTableComponent = /** @class */ (function () {
    function EventTableComponent(interactMkService, updateMKService, httpService, authService, settingService, bdService) {
        this.interactMkService = interactMkService;
        this.updateMKService = updateMKService;
        this.httpService = httpService;
        this.authService = authService;
        this.settingService = settingService;
        this.bdService = bdService;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.eventTimer = false;
        this.eventsCols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'date', header: 'Date' },
            { field: 'remark', header: 'Remark' },
            { field: 'cause', header: 'Cause' },
            { field: 'devicemrid', header: 'Devicemrid' },
        ];
        this.events = [];
        this.isLoggedIn = true;
        this.curSearchInfo = { sub: '', bay: '', dev: '' };
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.fromDate = new Date(Date.now() - 864e5);
        this.tableId = 'event-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
    }
    EventTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.getSbEvents();
        this.interactMkService.getMarkerInfo().subscribe(function (mkInfo) {
            if (mkInfo.type == 'Events') {
                _this.curSelectedRow = mkInfo.mkInfo;
                document.getElementById('tbl-sel-btn').click(); //Angular Model Rendering Issue (Force Rendering)
            }
        });
        this.bdService.getBDInfo().subscribe(function (bdInfo) {
            _this.curSearchInfo = bdInfo;
            _this.stopEventTimer();
            _this.getSbEvents();
        });
    };
    EventTableComponent.prototype.onForceRowSelect = function () {
        this.selectedRow = this.curSelectedRow;
    };
    EventTableComponent.prototype.startEventTimer = function () {
        if (this.isLoggedIn) {
            this.stopEventTimer();
            var self_1 = this;
            this.eventTimer = setTimeout(function () {
                self_1.getSbEvents();
            }, config.client_info.polling_time * 1000);
        }
    };
    EventTableComponent.prototype.stopEventTimer = function () {
        if (this.eventTimer) {
            clearTimeout(this.eventTimer);
            this.eventTimer = false;
        }
    };
    EventTableComponent.prototype.getSbEvents = function () {
        var _this = this;
        var eventIds = [];
        var promiseList = [];
        var fromdt = moment__WEBPACK_IMPORTED_MODULE_4__["utc"](this.fromDate).format();
        var todt = moment__WEBPACK_IMPORTED_MODULE_4__["utc"](this.toDate).format();
        if (fromdt > todt)
            return;
        var alarmListURL = config.client_info.apiURL.serverURL + "/events/all?";
        if (this.curSearchInfo.sub)
            alarmListURL += "&substationmrid=" + this.curSearchInfo.sub;
        if (this.curSearchInfo.bay)
            alarmListURL += "&baymrid=" + this.curSearchInfo.bay;
        if (this.curSearchInfo.dev)
            alarmListURL += "&devicemrid=" + this.curSearchInfo.dev;
        if (this.fromDate)
            alarmListURL += "&fromDate=" + fromdt;
        if (this.toDate)
            alarmListURL += "&toDate=" + todt;
        if (!this.eventTimer) {
            this.contentLoaded = false;
        }
        this.httpService.httpGetRequest(this.accessToken, alarmListURL).subscribe(function (results) {
            eventIds = results;
            for (var i = 0; i < eventIds.length; i++) {
                var eventDetailURL = config.client_info.apiURL.serverURL + "/events/all/" + eventIds[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, eventDetailURL));
            }
            if (promiseList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (eventDetails) {
                    //Split Active Alarms and InActive Alarms =================================================================
                    _this.contentLoaded = true;
                    _this.getEventsLocation(eventDetails);
                });
            }
            else {
                _this.contentLoaded = true;
                _this.getEventsLocation([]);
            }
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.contentLoaded = true;
            _this.getEventsLocation([]);
        });
    };
    EventTableComponent.prototype.httpErrorHandler = function (error) {
        var msgPrefix = "The remote server returned an error: ";
        var err401Msg = "(401) Unauthorized.";
        console.error(error);
        switch (error.status) {
            case 400:
                var errMsg = error.error.Message;
                var idx = errMsg.indexOf(msgPrefix);
                if (idx > -1) {
                    var trueMsgPart = errMsg.substr(msgPrefix.length);
                    alert(trueMsgPart);
                    if (trueMsgPart == err401Msg) {
                        this.isLoggedIn = false;
                        this.authService.setAuthInfo({ login_st: false });
                    }
                }
                else {
                    alert(errMsg);
                }
                this.stopEventTimer();
                break;
            case 401:
                this.isLoggedIn = false;
                this.stopEventTimer();
                this.authService.setAuthInfo({ login_st: false });
                break;
            default:
                alert("Backend returned code " + error.status + ", body was: " + error.error.Message);
                this.startEventTimer();
        }
    };
    EventTableComponent.prototype.getEventsLocation = function (eventList) {
        var _this = this;
        var promiseList = [];
        var devIdList = [];
        for (var i = 0; i < eventList.length; i++) {
            if (devIdList.indexOf(eventList[i].devicemrid) < 0) {
                devIdList.push(eventList[i].devicemrid);
            }
        }
        if (devIdList.length > 0) {
            for (var i = 0; i < devIdList.length; i++) {
                var devDetailURL = config.client_info.apiURL.serverURL + "/devices/" + devIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, devDetailURL));
            }
            if (!this.eventTimer) {
                this.contentLoaded = false;
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (devDetailList) {
                for (var _i = 0, devDetailList_1 = devDetailList; _i < devDetailList_1.length; _i++) {
                    var devInfo = devDetailList_1[_i];
                    for (var _a = 0, eventList_1 = eventList; _a < eventList_1.length; _a++) {
                        var evInfo = eventList_1[_a];
                        if (devInfo.mrid == evInfo.devicemrid) {
                            evInfo.location = devInfo.location;
                            evInfo.mk_type = 'Events';
                        }
                    }
                }
                _this.events = eventList;
                _this.contentLoaded = true;
                _this.startEventTimer();
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.contentLoaded = true;
                _this.events = [];
                _this.startEventTimer();
            });
        }
        else {
            this.events = [];
            this.startEventTimer();
        }
    };
    EventTableComponent.prototype.onSelectRow = function (event) {
        this.interactMkService.setMarkerInfo('Events', event.data, true);
    };
    EventTableComponent.prototype.onDeselectRow = function (event) {
        this.interactMkService.setMarkerInfo('Events', event.data, false);
    };
    EventTableComponent.prototype.onChangeFromDate = function (fromdt) {
        this.fromDate = fromdt;
    };
    EventTableComponent.prototype.onChangeToDate = function (todt) {
        this.toDate = todt;
        console.log(this.toDate);
    };
    EventTableComponent.prototype.onResetTime = function () {
        this.fromDate = new Date(Date.now() - 864e5);
        this.toDate = '';
        //
        // let tstEv = {
        //     "id": "12",
        //     "date": "2019-05-28T08:50:27.978Z",
        //     "remark": "23",
        //     "name": "666",
        //     "cause": "666",
        //     "mk_type" :'Events',
        //     "devicemrid": "sub2_bay2_device0",
        //     "location":{latitude:47.4979, longitude:19.0402},
        // };
        // this.interactMkService.setMarkerInfo('Events', tstEv, true);
    };
    EventTableComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = ['ID', 'Name', 'Date', 'Remark', 'Cause', 'Devicemrid'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.eventsCols = this.checkColVisibility(this.eventsCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    EventTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    EventTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    EventTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    EventTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    EventTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event-table',
            template: __webpack_require__(/*! ./event-table.component.html */ "./client/app/modules/components/event-table/event-table.component.html"),
            styles: [__webpack_require__(/*! ./event-table.component.css */ "./client/app/modules/components/event-table/event-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_6__["InteractionMarkerService"],
            _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_5__["UpdateMarkerService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
            _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_7__["UpdateBreadCrumbService"]])
    ], EventTableComponent);
    return EventTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/inactive-alarm/in-active-alarm.component.css":
/*!************************************************************************************!*\
  !*** ./client/app/modules/components/inactive-alarm/in-active-alarm.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".alarm-list {\r\n    position: relative;\r\n}\r\n.row-edit-btn {\r\n    color: #007bff !important;\r\n    cursor: pointer !important;\r\n}\r\n.row-edit-btn:hover{\r\n    text-decoration: underline !important;\r\n}\r\n.ev-table-wrapper {\r\n    position: relative;\r\n}\r\n.th-id-wrap:first-child{\r\n    width: 70px;\r\n}\r\nth input[type='text'],\r\nth input[type='number'] {\r\n    width: 100%;\r\n}\r\nth:nth-child(8) {\r\n    width: 115px;\r\n}\r\nth:nth-child(5) {\r\n    width: 100px;\r\n}\r\n.alarm-detail-form {\r\n    margin-bottom: 0;\r\n}\r\n.alarm-detail-form p>span {\r\n    font-weight: bold;\r\n}\r\n.ui-dialog .ui-dialog-titlebar .ui-dialog-title {\r\n    font-size: 1.15em;\r\n}\r\n.ev-severity-btn {\r\n    padding: 2px 10px;\r\n    color: white;\r\n    border-radius: 3px;\r\n}\r\n.ev-add-action-btn {\r\n    margin-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2luYWN0aXZlLWFsYXJtL2luLWFjdGl2ZS1hbGFybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxxQ0FBcUM7QUFDekM7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2luYWN0aXZlLWFsYXJtL2luLWFjdGl2ZS1hbGFybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYXJtLWxpc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5yb3ctZWRpdC1idG4ge1xyXG4gICAgY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5yb3ctZWRpdC1idG46aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcbi5ldi10YWJsZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udGgtaWQtd3JhcDpmaXJzdC1jaGlsZHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcbnRoIGlucHV0W3R5cGU9J3RleHQnXSxcclxudGggaW5wdXRbdHlwZT0nbnVtYmVyJ10ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoOm50aC1jaGlsZCg4KSB7XHJcbiAgICB3aWR0aDogMTE1cHg7XHJcbn1cclxudGg6bnRoLWNoaWxkKDUpIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4uYWxhcm0tZGV0YWlsLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYWxhcm0tZGV0YWlsLWZvcm0gcD5zcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi51aS1kaWFsb2cgLnVpLWRpYWxvZy10aXRsZWJhciAudWktZGlhbG9nLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG59XHJcbi5ldi1zZXZlcml0eS1idG4ge1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuXHJcbi5ldi1hZGQtYWN0aW9uLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/inactive-alarm/in-active-alarm.component.html":
/*!*************************************************************************************!*\
  !*** ./client/app/modules/components/inactive-alarm/in-active-alarm.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"in-alarm-container\">\n    <div class=\"alarm-list\">\n        <button type=\"button\" id=\"in-alarm-tbl-sel-btn\" (click)=\"onForceRowSelect()\" style=\"display: none\"></button>\n        <app-page-loading *ngIf=\"!contentLoaded && alarmTabMode\"></app-page-loading>\n        <div class=\"ev-table-wrapper\" id=\"{{tableId}}\">\n            <div class=\"table-setting-bar\">\n                <div class=\"dropdown mg-dropdown-area\" >\n                    <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                            pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                            (click)=\"isShowSetting = !isShowSetting\">\n                        <i class=\"fa fa-cog\"></i>\n                    </button>\n                    <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                        <div style=\"text-align:left\">\n                            <table>\n                                <thead>\n                                <tr>\n                                    <th>Visible</th>\n                                    <th>Column</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let alarmcol of alarmCols\">\n                                    <td>\n                                        <p-checkbox binary=\"true\" value=\"true\"\n                                                    [disabled]=\"alarmcol.visibility && curSelColsCnt == 1\"\n                                                    (onChange)=\"onChangeVisibility(alarmcol)\"\n                                                    [(ngModel)]=\"alarmcol.visibility\">\n                                        </p-checkbox>\n                                    </td>\n                                    <td>{{alarmcol.header}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                        pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                        [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                    <i class=\"fa fa-filter\"></i>\n                </button>\n                <div class=\"clearfix\"></div>\n            </div>\n            <p-table #indt sortMode=\"multiple\"\n                     [value]=\"alarms\"\n                     [style]=\"{'width':'1670px'}\"\n                     [paginator]=\"true\" [rows]=\"10\"\n                     [totalRecords]=\"alarms.length\"\n                     [(selection)]=\"selectedRow\"\n                     selectionMode=\"single\"\n                     (onRowSelect)=\"onAlarmSelect($event)\"\n                     (onRowUnselect)=\"onAlarmDeselect($event)\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th class=\"th-id-wrap\"\n                            *ngFor=\"let alarmcol of alarmCols\"\n                            [ngClass]=\"{'mg-hide': !alarmcol.visibility}\"\n                            [pSortableColumn]=\"alarmcol.field\">\n                            {{alarmcol.header}}\n                            <p-sortIcon [field]=\"alarmcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                        </th>\n                    </tr>\n                    <tr  [ngClass]=\"{'mg-hide':isHideFilter}\">\n                        <th *ngFor=\"let alarmcol of alarmCols\"\n                            [ngClass]=\"{'mg-hide':!alarmcol.visibility}\"\n                            [ngSwitch]=\"alarmcol.field\">\n                            <input *ngSwitchCase=\"alarmcol.field\" pInputText type=\"text\"\n                                   (input)=\"indt.filter($event.target.value, alarmcol.field, alarmcol.filterMatchMode)\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-alarm>\n                    <tr [pSelectableRow]=\"alarm\"  id=\"in-active-alarm-{{alarm.id}}\">\n                        <td *ngFor=\"let alarmcol of alarmCols\"\n                            [ngClass]=\"{'mg-hide':!alarmcol.visibility}\">\n                                    <span *ngIf=\"alarmcol.field == 'severity'\"\n                                          class=\"ev-severity-btn ev-sv-{{alarm[alarmcol.field].toLowerCase()}}\">\n                                        {{alarm[alarmcol.field]}}\n                                    </span>\n                            {{ (alarmcol.field != 'severity')? alarm[alarmcol.field]:'' }}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/inactive-alarm/in-active-alarm.component.ts":
/*!***********************************************************************************!*\
  !*** ./client/app/modules/components/inactive-alarm/in-active-alarm.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InActiveAlarmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InActiveAlarmComponent", function() { return InActiveAlarmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/interaction-marker.service */ "./client/app/core/services/interaction-marker.service.ts");
/* harmony import */ var _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-marker.service */ "./client/app/core/services/update-marker.service.ts");
/* harmony import */ var _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/update-bread-crumb.service */ "./client/app/core/services/update-bread-crumb.service.ts");
/* harmony import */ var _core_interfaces_severity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/interfaces/severity */ "./client/app/core/interfaces/severity.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_alarm_tab_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/alarm-tab.service */ "./client/app/core/services/alarm-tab.service.ts");












var InActiveAlarmComponent = /** @class */ (function () {
    function InActiveAlarmComponent(interactMkService, updateMKService, httpService, router, authService, alarmTabService, settingService, bdService) {
        this.interactMkService = interactMkService;
        this.updateMKService = updateMKService;
        this.httpService = httpService;
        this.router = router;
        this.authService = authService;
        this.alarmTabService = alarmTabService;
        this.settingService = settingService;
        this.bdService = bdService;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.alarmTimer = false;
        this.isLoggedIn = true;
        this.curSearchInfo = { sub: '', bay: '', dev: '' };
        this.alarmCols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'date', header: 'Date' },
            { field: 'postponedate', header: 'PostponeDate' },
            { field: 'state', header: 'State' },
            { field: 'remark', header: 'Remark' },
            { field: 'cause', header: 'Cause' },
            { field: 'severity', header: 'Severity' },
            { field: 'devicemrid', header: 'Devicemrid' },
            { field: 'activecount', header: 'ActiveCount' },
            { field: 'activedate', header: 'ActiveDate' },
        ];
        this.alarms = [];
        this.severities = [];
        for (var item in _core_interfaces_severity__WEBPACK_IMPORTED_MODULE_7__["Severity"]) {
            if (isNaN(Number(item))) {
                this.severities.push(_core_interfaces_severity__WEBPACK_IMPORTED_MODULE_7__["Severity"][item]);
            }
        }
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.tableId = 'in-alarm-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
    }
    InActiveAlarmComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alarmTabService.getTabMode().subscribe(function (info) {
            if (info) {
                _this.initTableSetting();
            }
        });
        //Get Active Alarms
        this.getAlarms();
        this.interactMkService.getMarkerInfo().subscribe(function (mkInfo) {
            if (mkInfo.type == 'In-Alarms') {
                _this.curSelectedRow = mkInfo.mkInfo;
                //Angular Model Rendering Issue (Force Rendering)
                document.getElementById('in-alarm-tbl-sel-btn').click();
            }
        });
        this.bdService.getBDInfo().subscribe(function (bdInfo) {
            _this.curSearchInfo = bdInfo;
            _this.stopAlarmTimer();
            _this.getAlarms();
        });
    };
    InActiveAlarmComponent.prototype.onForceRowSelect = function () {
        this.selectedRow = this.curSelectedRow;
        document.getElementById("in-active-alarm-" + this.selectedRow.id).scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
    };
    InActiveAlarmComponent.prototype.getAlarms = function () {
        var _this = this;
        var alarmIds = [];
        var promiseList = [];
        var alarmListURL = config.client_info.apiURL.serverURL + "/events/alarm?active=false";
        if (this.curSearchInfo.sub)
            alarmListURL += "&substationmrid=" + this.curSearchInfo.sub;
        if (this.curSearchInfo.bay)
            alarmListURL += "&baymrid=" + this.curSearchInfo.bay;
        if (this.curSearchInfo.dev)
            alarmListURL += "&devicemrid=" + this.curSearchInfo.dev;
        if (!this.alarmTimer) {
            this.contentLoaded = false;
        }
        this.httpService.httpGetRequest(this.accessToken, alarmListURL).subscribe(function (results) {
            alarmIds = results;
            for (var i = 0; i < alarmIds.length; i++) {
                var alarmDetailURL = config.client_info.apiURL.serverURL + "/events/alarm/" + alarmIds[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, alarmDetailURL));
            }
            if (promiseList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (alarmDetails) {
                    _this.contentLoaded = true;
                    _this.getAlarmLocation(alarmDetails);
                });
            }
            else {
                _this.contentLoaded = true;
                _this.getAlarmLocation([]);
            }
        }, function (error) {
            _this.httpErrorHandler(error);
            _this.contentLoaded = true;
            _this.getAlarmLocation([]);
        });
    };
    InActiveAlarmComponent.prototype.getAlarmLocation = function (alarmList) {
        var _this = this;
        var promiseList = [];
        var devIdList = [];
        for (var i = 0; i < alarmList.length; i++) {
            if (devIdList.indexOf(alarmList[i].devicemrid) < 0) {
                devIdList.push(alarmList[i].devicemrid);
            }
        }
        if (devIdList.length > 0) {
            for (var i = 0; i < devIdList.length; i++) {
                var devDetailURL = config.client_info.apiURL.serverURL + "/devices/" + devIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, devDetailURL));
            }
            if (!this.alarmTimer) {
                this.contentLoaded = false;
            }
            console.warn('------------------Get Alarm Locations-----------------------');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (devDetailList) {
                for (var _i = 0, devDetailList_1 = devDetailList; _i < devDetailList_1.length; _i++) {
                    var devInfo = devDetailList_1[_i];
                    for (var _a = 0, alarmList_1 = alarmList; _a < alarmList_1.length; _a++) {
                        var alarmInfo = alarmList_1[_a];
                        if (devInfo.mrid == alarmInfo.devicemrid) {
                            alarmInfo.location = devInfo.location;
                        }
                    }
                }
                _this.contentLoaded = true;
                _this.getActionDetails(alarmList);
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.contentLoaded = true;
                _this.getActionDetails([]);
            });
        }
        else {
            this.getActionDetails([]);
        }
    };
    InActiveAlarmComponent.prototype.getActionDetails = function (alarmList) {
        var _this = this;
        var promiseList = [];
        var alarmIdList = [];
        for (var i = 0; i < alarmList.length; i++) {
            if (alarmIdList.indexOf(alarmList[i].id) < 0) {
                alarmIdList.push(alarmList[i].id);
            }
        }
        if (alarmIdList.length > 0) {
            for (var i = 0; i < alarmIdList.length; i++) {
                var actionsDetailURL = config.client_info.apiURL.serverURL + "/events/alarm/" + alarmIdList[i] + "/actions";
                promiseList.push(this.httpService.httpGetRequestWithHeader(this.accessToken, actionsDetailURL));
            }
            if (!this.alarmTimer) {
                this.contentLoaded = false;
            }
            console.log('------------------Get In Active Alarm Actions-----------------------');
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(promiseList).subscribe(function (results) {
                // let alarmActionList = res.body;
                for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
                    var resp = results_1[_i];
                    var alamid = resp.url.split('alarm/')[1].split('/actions')[0];
                    for (var _a = 0, alarmList_2 = alarmList; _a < alarmList_2.length; _a++) {
                        var alarmItem = alarmList_2[_a];
                        if (alarmItem.id == alamid) {
                            alarmItem.actions = resp.body;
                            alarmItem.mk_type = 'In-Alarms';
                        }
                    }
                }
                _this.alarms = alarmList;
                _this.updateMKService.drawMks('In-Alarms', alarmList);
                _this.contentLoaded = true;
                _this.startAlarmTimer();
            }, function (error) {
                _this.httpErrorHandler(error);
                _this.alarms = alarmList;
                _this.updateMKService.drawMks('In-Alarms', alarmList);
                _this.contentLoaded = true;
            });
        }
        else {
            this.alarms = [];
            this.updateMKService.drawMks('In-Alarms', []);
            this.startAlarmTimer();
        }
    };
    InActiveAlarmComponent.prototype.httpErrorHandler = function (error) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log('Bad Request');
                break;
            case 401:
                this.isLoggedIn = false;
                this.stopAlarmTimer();
                this.authService.setAuthInfo({ login_st: false });
                break;
            default:
                alert("Backend returned code " + error.status + ", body was: " + error.error.Message);
                this.startAlarmTimer();
        }
    };
    InActiveAlarmComponent.prototype.startAlarmTimer = function () {
        if (this.isLoggedIn) {
            this.stopAlarmTimer();
            var self_1 = this;
            this.alarmTimer = setTimeout(function () {
                self_1.getAlarms();
            }, config.client_info.polling_time * 1000);
        }
    };
    InActiveAlarmComponent.prototype.stopAlarmTimer = function () {
        if (this.alarmTimer) {
            clearTimeout(this.alarmTimer);
            this.alarmTimer = false;
        }
    };
    InActiveAlarmComponent.prototype.onAlarmSelect = function (event) {
        this.interactMkService.setMarkerInfo('In-Alarms', event.data, true);
    };
    InActiveAlarmComponent.prototype.onAlarmDeselect = function (event) {
        this.interactMkService.setMarkerInfo('In-Alarms', event.data, false);
    };
    InActiveAlarmComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = [
                'ID', 'Name', 'Date', 'PostponeDate', 'State', 'Remark', 'Cause',
                'Severity', 'Devicemrid', 'ActiveCount', 'ActiveDate'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.alarmCols = this.checkColVisibility(this.alarmCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    InActiveAlarmComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    InActiveAlarmComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    InActiveAlarmComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    InActiveAlarmComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    InActiveAlarmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'in-active-app-alarm',
            template: __webpack_require__(/*! ./in-active-alarm.component.html */ "./client/app/modules/components/inactive-alarm/in-active-alarm.component.html"),
            styles: [__webpack_require__(/*! ./in-active-alarm.component.css */ "./client/app/modules/components/inactive-alarm/in-active-alarm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_4__["InteractionMarkerService"],
            _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_5__["UpdateMarkerService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _core_services_alarm_tab_service__WEBPACK_IMPORTED_MODULE_11__["AlarmTabService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"],
            _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_6__["UpdateBreadCrumbService"]])
    ], InActiveAlarmComponent);
    return InActiveAlarmComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/measurement/measurement.component.css":
/*!*****************************************************************************!*\
  !*** ./client/app/modules/components/measurement/measurement.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9tZWFzdXJlbWVudC9tZWFzdXJlbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./client/app/modules/components/measurement/measurement.component.html":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/measurement/measurement.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/modules/components/measurement/measurement.component.ts":
/*!****************************************************************************!*\
  !*** ./client/app/modules/components/measurement/measurement.component.ts ***!
  \****************************************************************************/
/*! exports provided: MeasurementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementComponent", function() { return MeasurementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/msmr-device-selection.service */ "./client/app/core/services/msmr-device-selection.service.ts");
/* harmony import */ var _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-msmr-marker.service */ "./client/app/core/services/update-msmr-marker.service.ts");






var MeasurementComponent = /** @class */ (function () {
    function MeasurementComponent(authService, msmrLayerService, httpService, updateMsMarkerService) {
        this.authService = authService;
        this.msmrLayerService = msmrLayerService;
        this.httpService = httpService;
        this.updateMsMarkerService = updateMsMarkerService;
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;
        this.msList = [];
        this.devIdList = [];
        this.pollingTs = config.client_info.measurement_polling_time;
    }
    MeasurementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msmrLayerService.getDevList().subscribe(function (info) {
            if (info.type == 'ms') {
                _this.msList = info.unitList;
                _this.devIdList = info.devIdList;
                _this.getMeteringData();
            }
        });
    };
    MeasurementComponent.prototype.getMeteringData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, j, detailUrlList, mslayers, devmsorder, devid, msid, keyName, results, layerMkInfo, dataObj, e_1, key;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        detailUrlList = [];
                        for (j = 0; j < this.msList.length; j++) {
                            for (i = 0; i < this.devIdList.length; i++) {
                                detailUrlList.push(this.apiBaseURL + "/measurements/" + this.msList[j].id + "/actual/device/" + this.devIdList[i].mrid + "?devmsorder=" + i + "-" + j);
                            }
                        }
                        mslayers = {};
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < detailUrlList.length)) return [3 /*break*/, 7];
                        devmsorder = detailUrlList[i].split('devmsorder=')[1];
                        devid = devmsorder.split('-')[0];
                        msid = devmsorder.split('-')[1];
                        keyName = this.msList[msid].id;
                        results = void 0;
                        layerMkInfo = { dev: this.devIdList[devid], unit: this.msList[msid], value: null };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService.httpGetRequestWithHeader(this.accessTokenSub, detailUrlList[i]).toPromise()];
                    case 3:
                        results = _a.sent();
                        dataObj = void 0;
                        dataObj = results.body.data;
                        if (dataObj.length > 0) {
                            layerMkInfo.value = dataObj[0].value;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log('error===>', e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        if (mslayers.hasOwnProperty(keyName)) {
                            mslayers[keyName].push(layerMkInfo);
                        }
                        else {
                            mslayers[keyName] = [layerMkInfo];
                        }
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7:
                        for (key in mslayers) {
                            if (mslayers.hasOwnProperty(key)) {
                                this.updateMsMarkerService.setMsMarker('Measurements', key, mslayers[key]);
                            }
                        }
                        this.refreshMeasurement();
                        return [2 /*return*/];
                }
            });
        });
    };
    MeasurementComponent.prototype.refreshMeasurement = function () {
        var self = this;
        setTimeout(function () {
            self.getMeteringData();
        }, self.pollingTs * 1000);
    };
    MeasurementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-measurement',
            template: __webpack_require__(/*! ./measurement.component.html */ "./client/app/modules/components/measurement/measurement.component.html"),
            styles: [__webpack_require__(/*! ./measurement.component.css */ "./client/app/modules/components/measurement/measurement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_4__["MsMrDeviceSelectionService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_5__["UpdateMsMrMarkerService"]])
    ], MeasurementComponent);
    return MeasurementComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/metering/metering.component.css":
/*!***********************************************************************!*\
  !*** ./client/app/modules/components/metering/metering.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9tZXRlcmluZy9tZXRlcmluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./client/app/modules/components/metering/metering.component.html":
/*!************************************************************************!*\
  !*** ./client/app/modules/components/metering/metering.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./client/app/modules/components/metering/metering.component.ts":
/*!**********************************************************************!*\
  !*** ./client/app/modules/components/metering/metering.component.ts ***!
  \**********************************************************************/
/*! exports provided: MeteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteringComponent", function() { return MeteringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/msmr-device-selection.service */ "./client/app/core/services/msmr-device-selection.service.ts");
/* harmony import */ var _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-msmr-marker.service */ "./client/app/core/services/update-msmr-marker.service.ts");






var MeteringComponent = /** @class */ (function () {
    function MeteringComponent(authService, msmrLayerService, httpService, updateMsMarkerService) {
        this.authService = authService;
        this.msmrLayerService = msmrLayerService;
        this.httpService = httpService;
        this.updateMsMarkerService = updateMsMarkerService;
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;
        this.tsInfo = {};
        this.mrList = [];
        this.devIdList = [];
        this.pollingTs = config.client_info.measurement_polling_time;
    }
    MeteringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msmrLayerService.getDevList().subscribe(function (info) {
            if (info.type == 'mr') {
                _this.mrList = info.unitList;
                _this.devIdList = info.devIdList;
                _this.tsInfo = info.timeInfo;
                _this.getMeteringData();
            }
        });
    };
    MeteringComponent.prototype.getMeteringData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mrURLList, i, j, tsInfoQuery, mrlayers, devmsorder, devid, mrid, layerMkInfo, results, dataObj, e_1, keyName, key;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mrURLList = [];
                        tsInfoQuery = "?numberOf=1&startDate=" + this.tsInfo.start + "&timeSpan=" + this.tsInfo.span;
                        for (j = 0; j < this.mrList.length; j++) {
                            for (i = 0; i < this.devIdList.length; i++) {
                                mrURLList.push(this.apiBaseURL + "/meterings/" + this.mrList[j].id + "/device/" + this.devIdList[i].mrid + tsInfoQuery + "&devmsorder=" + i + "-" + j);
                            }
                        }
                        mrlayers = {};
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < mrURLList.length)) return [3 /*break*/, 7];
                        devmsorder = mrURLList[i].split('devmsorder=')[1];
                        devid = devmsorder.split('-')[0];
                        mrid = devmsorder.split('-')[1];
                        layerMkInfo = { dev: this.devIdList[devid], unit: this.mrList[mrid], value: null };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService.httpGetRequestWithHeader(this.accessTokenSub, mrURLList[i]).toPromise()];
                    case 3:
                        results = _a.sent();
                        dataObj = void 0;
                        dataObj = results.body.data;
                        if (dataObj.length > 0) {
                            layerMkInfo.value = dataObj[dataObj.length - 1].value;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log('error', e_1);
                        return [3 /*break*/, 5];
                    case 5:
                        keyName = this.mrList[mrid].id;
                        if (mrlayers.hasOwnProperty(keyName)) {
                            mrlayers[keyName].push(layerMkInfo);
                        }
                        else {
                            mrlayers[keyName] = [layerMkInfo];
                        }
                        _a.label = 6;
                    case 6:
                        i++;
                        return [3 /*break*/, 1];
                    case 7:
                        for (key in mrlayers) {
                            if (mrlayers.hasOwnProperty(key)) {
                                this.updateMsMarkerService.setMsMarker('Meterings', key, mrlayers[key]);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MeteringComponent.prototype.refreshMetering = function () {
        var self = this;
        setTimeout(function () {
            self.getMeteringData();
        }, self.pollingTs * 1000);
    };
    MeteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-metering',
            template: __webpack_require__(/*! ./metering.component.html */ "./client/app/modules/components/metering/metering.component.html"),
            styles: [__webpack_require__(/*! ./metering.component.css */ "./client/app/modules/components/metering/metering.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_4__["MsMrDeviceSelectionService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_5__["UpdateMsMrMarkerService"]])
    ], MeteringComponent);
    return MeteringComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/openstreet-map/html-marker.component.ts":
/*!*******************************************************************************!*\
  !*** ./client/app/modules/components/openstreet-map/html-marker.component.ts ***!
  \*******************************************************************************/
/*! exports provided: HTMLMarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLMarkerComponent", function() { return HTMLMarkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HTMLMarkerComponent = /** @class */ (function () {
    function HTMLMarkerComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HTMLMarkerComponent.prototype, "data", void 0);
    HTMLMarkerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'html-marker',
            template: "\n    <div class=\"ev-html-marker\">\n        <h4>{{ data.name }}</h4>\n        <p>ID: {{data.id}}</p>\n        <p>Date:{{ data.date }}</p>\n        <p>Remark:{{ data.remark }}</p>\n        <p>Cause:{{ data.cause }}</p>\n    </div>    \n  "
        })
    ], HTMLMarkerComponent);
    return HTMLMarkerComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.directive.ts":
/*!***************************************************************************************************************!*\
  !*** ./client/app/modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.directive.ts ***!
  \***************************************************************************************************************/
/*! exports provided: LeafletMarkerClusterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletMarkerClusterDirective", function() { return LeafletMarkerClusterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_4__);





var LeafletMarkerClusterDirective = /** @class */ (function () {
    function LeafletMarkerClusterDirective(leafletDirective) {
        // Hexbin data binding
        this.markerData = [];
        // Fired when the marker cluster is created
        this.markerClusterReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.leafletDirective = new _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletDirectiveWrapper"](leafletDirective);
    }
    LeafletMarkerClusterDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.markerClusterGroup = leaflet__WEBPACK_IMPORTED_MODULE_3__["markerClusterGroup"](this.markerClusterOptions);
        // Fire the ready event
        this.markerClusterReady.emit(this.markerClusterGroup);
        // Add the marker cluster group to the map
        this.markerClusterGroup.addTo(map);
        // Set the data
        this.setData(this.markerData);
    };
    LeafletMarkerClusterDirective.prototype.ngOnChanges = function (changes) {
        // Set the new data
        if (changes['markerData']) {
            this.setData(this.markerData);
        }
    };
    LeafletMarkerClusterDirective.prototype.setData = function (layers) {
        if (null != this.markerClusterGroup) {
            this.markerClusterGroup.clearLayers();
            this.markerClusterGroup.addLayers(layers);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('leafletMarkerCluster'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], LeafletMarkerClusterDirective.prototype, "markerData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('leafletMarkerClusterOptions'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LeafletMarkerClusterDirective.prototype, "markerClusterOptions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('leafletMarkerClusterReady'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LeafletMarkerClusterDirective.prototype, "markerClusterReady", void 0);
    LeafletMarkerClusterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[leafletMarkerCluster]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_2__["LeafletDirective"]])
    ], LeafletMarkerClusterDirective);
    return LeafletMarkerClusterDirective;
}());



/***/ }),

/***/ "./client/app/modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.module.ts":
/*!************************************************************************************************************!*\
  !*** ./client/app/modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: LeafletMarkerClusterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletMarkerClusterModule", function() { return LeafletMarkerClusterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _leaflet_markercluster_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet-markercluster.directive */ "./client/app/modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.directive.ts");



var LeafletMarkerClusterModule = /** @class */ (function () {
    function LeafletMarkerClusterModule() {
    }
    LeafletMarkerClusterModule_1 = LeafletMarkerClusterModule;
    LeafletMarkerClusterModule.forRoot = function () {
        return { ngModule: LeafletMarkerClusterModule_1, providers: [] };
    };
    var LeafletMarkerClusterModule_1;
    LeafletMarkerClusterModule = LeafletMarkerClusterModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_leaflet_markercluster_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletMarkerClusterDirective"]],
            declarations: [_leaflet_markercluster_directive__WEBPACK_IMPORTED_MODULE_2__["LeafletMarkerClusterDirective"]]
        })
    ], LeafletMarkerClusterModule);
    return LeafletMarkerClusterModule;
}());



/***/ }),

/***/ "./client/app/modules/components/openstreet-map/openstreet-map.component.css":
/*!***********************************************************************************!*\
  !*** ./client/app/modules/components/openstreet-map/openstreet-map.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.layer-control-wrapper {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 900;\r\n    padding: 10px;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n    border: 1px solid #ff000063;\r\n}\r\n.layer-control-wrapper p-checkbox {\r\n    display: block;\r\n}\r\n.sub-ms-list,\r\n.sub-mr-list {\r\n    padding-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL29wZW5zdHJlZXQtbWFwL29wZW5zdHJlZXQtbWFwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL29wZW5zdHJlZXQtbWFwL29wZW5zdHJlZXQtbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sYXllci1jb250cm9sLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA5MDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwNjM7XHJcbn1cclxuLmxheWVyLWNvbnRyb2wtd3JhcHBlciBwLWNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5zdWItbXMtbGlzdCxcclxuLnN1Yi1tci1saXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/openstreet-map/openstreet-map.component.html":
/*!************************************************************************************!*\
  !*** ./client/app/modules/components/openstreet-map/openstreet-map.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #map class=\"map\" id=\"open-street-map\"></div>\n\n<div class=\"layer-control-wrapper\">\n    <p-checkbox [(ngModel)]=\"overLayerModels.Alarms\" (ngModelChange)=\"apply('Alarms')\"\n                binary=\"true\" label=\"Alarms\"></p-checkbox>\n    <p-checkbox [(ngModel)]=\"overLayerModels.Events\" (ngModelChange)=\"apply('Events')\"\n                binary=\"true\" label=\"Events\"></p-checkbox>\n\n    <p-checkbox [(ngModel)]=\"overLayerModels.Measurements\"\n                *ngIf=\"msList.length>0\"\n                (ngModelChange)=\"apply('Measurements_')\"\n                binary=\"true\" label=\"Measurements\"></p-checkbox>\n    <div class=\"sub-ms-list\">\n        <p-checkbox  *ngFor=\"let msitem of msList\"\n                     binary=\"true\"\n                     [(ngModel)]=\"overLayerModels['Measurements_' + msitem.id]\"\n                     (ngModelChange)=\"onSubMsMrVisible('Measurements', msitem.id)\"\n                     label=\"{{msitem.name}}\"></p-checkbox>\n    </div>\n\n    <p-checkbox [(ngModel)]=\"overLayerModels.Meterings\"\n                *ngIf=\"mrList.length>0\"\n                (ngModelChange)=\"apply('Meterings_')\"\n                binary=\"true\" label=\"Meterings\"></p-checkbox>\n\n    <div class=\"sub-mr-list\">\n        <p-checkbox  *ngFor=\"let mritem of mrList\"\n                     binary=\"true\"\n                     [(ngModel)]=\"overLayerModels['Meterings_' + mritem.id]\"\n                     (ngModelChange)=\"onSubMsMrVisible('Meterings',mritem.id)\"\n                     label=\"{{mritem.name}}\"></p-checkbox>\n    </div>\n\n</div>\n\n<app-time-selector\n        [isEnabledSetBtn] = \"isEnabledTimeSel\"\n        *ngIf=\"isShowTimePicker\"\n        (onSetPeriod)=\"onSetMeteringTs($event)\" ></app-time-selector>\n\n<app-measurement *ngIf=\"accessTokenSub\"></app-measurement>\n<app-metering *ngIf=\"accessTokenSub\"></app-metering>\n"

/***/ }),

/***/ "./client/app/modules/components/openstreet-map/openstreet-map.component.ts":
/*!**********************************************************************************!*\
  !*** ./client/app/modules/components/openstreet-map/openstreet-map.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OpenStreetMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenStreetMapComponent", function() { return OpenStreetMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/update-marker.service */ "./client/app/core/services/update-marker.service.ts");
/* harmony import */ var _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/interaction-marker.service */ "./client/app/core/services/interaction-marker.service.ts");
/* harmony import */ var _core_interfaces_severity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/interfaces/severity */ "./client/app/core/interfaces/severity.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/update-bread-crumb.service */ "./client/app/core/services/update-bread-crumb.service.ts");
/* harmony import */ var _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/services/msmr-device-selection.service */ "./client/app/core/services/msmr-device-selection.service.ts");
/* harmony import */ var _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/services/update-msmr-marker.service */ "./client/app/core/services/update-msmr-marker.service.ts");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! golden-layout */ "./node_modules/golden-layout/dist/goldenlayout.js");
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(golden_layout__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! leaflet.markercluster */ "./node_modules/leaflet.markercluster/dist/leaflet.markercluster-src.js");
/* harmony import */ var leaflet_markercluster__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var leaflet_markercluster_layersupport__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! leaflet.markercluster.layersupport */ "./node_modules/leaflet.markercluster.layersupport/dist/leaflet.markercluster.layersupport.js");
/* harmony import */ var leaflet_markercluster_layersupport__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(leaflet_markercluster_layersupport__WEBPACK_IMPORTED_MODULE_18__);



















// https://github.com/Asymmetrik/ngx-leaflet#readme
//
var OpenStreetMapComponent = /** @class */ (function () {
    function OpenStreetMapComponent(container, updateMkService, updateMsMrMarkerService, httpService, interactMkService, msmrLayerService, msalAuthService, authService, bdService) {
        this.container = container;
        this.updateMkService = updateMkService;
        this.updateMsMrMarkerService = updateMsMrMarkerService;
        this.httpService = httpService;
        this.interactMkService = interactMkService;
        this.msmrLayerService = msmrLayerService;
        this.msalAuthService = msalAuthService;
        this.authService = authService;
        this.bdService = bdService;
        // Marker cluster stuff
        this.markerClusterData = [];
        var self = this;
        this.gL = this.container.layoutManager;
        this.gL.on('componentCreated', function (component) {
            hideCloseControls(); // Hide Pop out/In Icon
            component.container.on('resize', function () {
                self.map.invalidateSize();
            });
        });
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;
        this.isEnabledTimeSel = true;
        this.lat = config.client_info.map.pos.lat;
        this.lng = config.client_info.map.pos.lng;
        this.emptyLayerGroup = L.layerGroup();
        this.curMkInfo = { type: '', id: '' };
        this.mkTypes = ['Alarms', 'In-Alarms', 'Events'];
        this.timeRange = {};
        this.isShowTimePicker = false;
        this.curBdInfo = { sub: '', bay: '', dev: '' };
        this.markers = { 'Alarms': [], 'In-Alarms': [], 'Events': [] };
        this.markerList = { 'Alarms': [], 'In-Alarms': [], 'Events': [] };
        this.overLayerModels = {
            Alarms: true,
            Events: true,
            Measurements: true,
            Meterings: true
        };
        this.severities = [];
        for (var item in _core_interfaces_severity__WEBPACK_IMPORTED_MODULE_6__["Severity"]) {
            if (isNaN(Number(item))) {
                this.severities.push(_core_interfaces_severity__WEBPACK_IMPORTED_MODULE_6__["Severity"][item]);
            }
        }
        this.layerGroupList = {};
        this.layerGroupList['Alarms'] = L.layerGroup();
        this.layerGroupList['Events'] = L.layerGroup();
        this.msList = [];
        this.mrList = [];
        this.layerGroupListLayerSupportOptions = { spiderfyDistanceMultiplier: 2 };
    }
    ;
    OpenStreetMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.map = L.map(this.mapElement.nativeElement, {
            center: [this.lat, this.lng],
            zoom: 7,
            layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
            zoomControl: true,
            attributionControl: true,
        });
        this.mcgLayerSupportGroup = L.markerClusterGroup.layerSupport(this.layerGroupListLayerSupportOptions);
        this.mcgLayerSupportGroup.addTo(this.map);
        this.layersControl = L.control.layers(null, null, { collapsed: false });
        this.mcgLayerSupportGroup.checkIn([this.layerGroupList.Alarms, this.layerGroupList.Events]);
        this.layersControl.addOverlay(this.layerGroupList.Alarms, 'Alarms');
        this.layersControl.addOverlay(this.layerGroupList.Events, 'Events');
        this.layersControl.addTo(this.map);
        this.layerGroupList.Alarms.addTo(this.map); // Adding to map or to AutoMCG are now equivalent.
        this.layerGroupList.Events.addTo(this.map);
        this.updateMkService.getMksInfo().subscribe(function (mkInfo) {
            if (mkInfo.type == 'Alarms') {
                if (_this.isMarkerChanged(mkInfo.mkList, mkInfo.type)) {
                    _this.markers[mkInfo.type] = mkInfo.mkList;
                    _this.generateData(mkInfo.type);
                }
            }
        });
        this.interactMkService.getMarkerInfo().subscribe(function (mkInfo) {
            if (mkInfo.type == 'Events') {
                if (_this.isMarkerChanged([mkInfo.mkInfo], mkInfo.type)) {
                    _this.markers[mkInfo.type] = [mkInfo.mkInfo];
                    _this.generateData(mkInfo.type);
                }
            }
            _this.curMkInfo = { type: mkInfo.type, id: mkInfo.mkInfo.id };
            _this.zoomToMarker(mkInfo.type);
        });
        this.updateMsMrMarkerService.getMsMarketInfo().subscribe(function (mkInfo) {
            var layerName = mkInfo.type + '_' + mkInfo.layerType;
            //Check Metering/Measurement data
            if (mkInfo.type == 'Meterings') {
                _this.isEnabledTimeSel = true;
            }
            if (_this.isMrMsMarkerChanged(mkInfo.mkList, layerName)) {
                _this.markers[layerName] = mkInfo.mkList;
                _this.generateData(layerName);
            }
            else {
                _this.markers[layerName] = mkInfo.mkList;
                _this.updateMsMrData(layerName);
            }
        });
        /// Access token for the substation
        if (!this.accessTokenSub) {
            setTimeout(function () {
                self.msalAuthService.acquireTokenSilent([config.client_info.msal_info.reqScopesSub])
                    .then(function (accessToken) {
                    self.accessTokenSub = accessToken;
                    localStorage.setItem(config.client_info.storeInfo.tokenKey + '_sub', accessToken);
                    self.getMsMr();
                }).catch(function (err) {
                    console.error(err, "Can't get Substation Access Token");
                });
            }, 5000);
        }
        else {
            this.getMsMr();
        }
        this.bdService.getBDInfo().subscribe(function (bdInfo) {
            _this.curBdInfo = bdInfo;
            _this.reloadMsMrMarkers();
        });
    };
    OpenStreetMapComponent.prototype.reloadMsMrMarkers = function () {
        var devlist = this.getDevDetailList(this.curBdInfo.sub, this.curBdInfo.bay, this.curBdInfo.dev);
        if (this.msList.length > 0) {
            this.msmrLayerService.setDevList('ms', this.msList, devlist);
        }
        if (this.mrList.length > 0) {
            //Set Flag ...... at time-Selector
            this.isEnabledTimeSel = false;
            this.msmrLayerService.setDevList('mr', this.mrList, devlist, this.timeRange);
        }
    };
    OpenStreetMapComponent.prototype.createNewLayer = function (newLayerName) {
        this.overLayerModels[newLayerName] = true;
        this.markers[newLayerName] = [];
        this.markerList[newLayerName] = [];
        this.layerGroupList[newLayerName] = L.layerGroup();
        this.mcgLayerSupportGroup.checkIn(this.layerGroupList[newLayerName]);
        this.layersControl.addOverlay(this.layerGroupList[newLayerName], newLayerName);
        this.layerGroupList[newLayerName].addTo(this.map);
    };
    OpenStreetMapComponent.prototype.generateData = function (mkType) {
        var self = this;
        var mkList;
        if (mkType == 'Alarms' || mkType == 'In-Alarms') {
            mkList = this.markers['Alarms'].concat(this.markers['In-Alarms']);
        }
        else {
            mkList = this.markers[mkType];
        }
        this.markerList[mkType] = [];
        this.layerGroupList[mkType].clearLayers();
        console.log('testing openstreetmap.....');
        for (var i = 0; i < mkList.length; i++) {
            var popupHtml = '';
            var latlng = void 0;
            var mkInfo = void 0;
            var markerColor = '';
            var mapMarker = void 0;
            if (mkType.indexOf('_') > -1) {
                mkInfo = mkList[i].dev;
                latlng = mkList[i].dev.location;
                var unitInfo = mkList[i].unit;
                var decimalValue = (mkList[i].value) ? mkList[i].value.toFixed(2) : 'N/A';
                markerColor = this.stringToHslColor(unitInfo.unit);
                if (mkType.indexOf('Measurements') > -1) {
                    popupHtml = self.makePopUpHTML(mkList[i], 'Measurements');
                    var msIcon = L.divIcon({
                        html: "<span style=\"background-color: " + markerColor + "\">" + decimalValue + " " + unitInfo.unit + "</span>",
                        className: 'ev-marker-ms',
                        iconAnchor: [10, -5],
                        bgPos: [10, 30],
                        iconSize: [20, 30],
                    });
                    mapMarker = L.marker([latlng.latitude, latlng.longitude], { icon: msIcon });
                    mapMarker.on('click', self.onAlarmSelEvent, { mkInfo: mkList[i], ref: self });
                    mapMarker.bindPopup(popupHtml).openPopup();
                    mapMarker.addTo(this.layerGroupList[mkType]);
                }
                else {
                    popupHtml = self.makePopUpHTML(mkList[i], 'Meterings');
                    var msIcon = L.divIcon({
                        html: "<span style=\"background-color: " + markerColor + "\">" + decimalValue + " " + unitInfo.unit + "</span>",
                        className: 'ev-marker-ms mr',
                        iconAnchor: [10, -5],
                        bgPos: [10, 30],
                        iconSize: [20, 30],
                    });
                    mapMarker = L.marker([latlng.latitude, latlng.longitude], { icon: msIcon });
                    mapMarker.on('click', self.onAlarmSelEvent, { mkInfo: mkList[i], ref: self });
                    mapMarker.bindPopup(popupHtml).openPopup();
                    mapMarker.addTo(this.layerGroupList[mkType]);
                }
            }
            else {
                latlng = mkList[i].location;
                mkInfo = mkList[i];
                var severityNo = 0;
                popupHtml = self.makePopUpHTML(mkInfo, mkInfo.mk_type);
                switch (mkInfo.mk_type) {
                    case 'Alarms':
                        severityNo = self.severities.length - self.severities.indexOf(mkInfo.severity);
                        var circleIcon = L.divIcon({
                            html: "<div class=\"ev-sv-" + mkInfo.severity.toLowerCase() + "\"><span>" + severityNo + "</span></div>",
                            className: 'ev-marker-alarm',
                            bgPos: [30, 30],
                            iconSize: [30, 30]
                        });
                        mapMarker = L.marker([latlng.latitude, latlng.longitude], { icon: circleIcon });
                        mapMarker.on('click', self.onAlarmSelEvent, { mkInfo: mkInfo, ref: self });
                        mapMarker.bindPopup(popupHtml).openPopup();
                        break;
                    case 'In-Alarms':
                        severityNo = self.severities.length - self.severities.indexOf(mkInfo.severity);
                        var recIcon = L.divIcon({
                            html: "<div class=\"ev-mk-" + mkInfo.severity.toLowerCase() + "\"><span>" + severityNo + "</span></div>",
                            className: 'ev-marker-in-alarm',
                            bgPos: [30, 30],
                            iconSize: [30, 30]
                        });
                        mapMarker = L.marker([latlng.latitude, latlng.longitude], { icon: recIcon });
                        mapMarker.on('click', self.onAlarmSelEvent, { mkInfo: mkInfo, ref: self });
                        mapMarker.bindPopup(popupHtml).openPopup();
                        break;
                    case 'Events':
                        var evIcon = L.divIcon({
                            html: '<img src="/assets/img/star.png">',
                            className: 'ev-div-marker',
                            bgPos: [36, 40],
                            iconSize: [36, 40]
                        });
                        mapMarker = L.marker([latlng.latitude, latlng.longitude], { icon: evIcon });
                        mapMarker.on('click', self.onEvSelEvent, { mkInfo: mkInfo, ref: self });
                        mapMarker.bindPopup(popupHtml).openPopup();
                        break;
                }
                mapMarker.addTo(this.layerGroupList[mkType]);
            }
            this.markerList[mkType].push(mapMarker);
        }
    };
    OpenStreetMapComponent.prototype.updateMsMrData = function (mkType) {
        for (var i = 0; i < this.markerList[mkType].length; i++) {
            var markerInstance = this.markerList[mkType][i];
            var mkInfo = this.markers[mkType][i];
            var popupHtml = '';
            var markerColor = '';
            var unitInfo = mkInfo.unit;
            var decimalValue = (mkInfo.value) ? mkInfo.value.toFixed(2) : 'N/A';
            markerColor = this.stringToHslColor(unitInfo.unit);
            //Update Marker
            if (mkType.indexOf('Measurements') > -1) {
                popupHtml = this.makePopUpHTML(mkInfo, 'Measurements');
                var msIcon = L.divIcon({
                    html: "<span style=\"background-color: " + markerColor + "\">" + decimalValue + " " + unitInfo.unit + "</span>",
                    className: 'ev-marker-ms',
                    bgPos: [10, 30],
                    iconSize: [20, 30],
                });
                markerInstance.setIcon(msIcon);
                markerInstance._popup.setContent(popupHtml);
            }
            else {
                popupHtml = this.makePopUpHTML(mkInfo, 'Meterings');
                var mrIcon = L.divIcon({
                    html: "<span style=\"background-color: " + markerColor + "\">" + decimalValue + " " + unitInfo.unit + "</span>",
                    className: 'ev-marker-ms mr',
                    bgPos: [10, 30],
                    iconSize: [20, 30],
                });
                markerInstance.setIcon(mrIcon);
                markerInstance._popup.setContent(popupHtml);
            }
            //Update PopupHTML
        }
    };
    /**
     * Check Changed Marker List
     * @param inputList
     * @param mktype
     */
    OpenStreetMapComponent.prototype.isMarkerChanged = function (inputList, mktype) {
        var sameCnt = 0;
        var tgtMkList = this.markers[mktype];
        if (tgtMkList.length == 0) {
            return true;
        }
        if (inputList.length != tgtMkList.length) {
            return true;
        }
        for (var i = 0; i < inputList.length; i++) {
            var mkItem = inputList[i];
            if (mktype == 'Events') { //'alarm', 'in-alarm'
                if (mkItem.id == tgtMkList[i].id &&
                    mkItem.date == tgtMkList[i].date &&
                    mkItem.remark == tgtMkList[i].remark &&
                    mkItem.name == tgtMkList[i].name &&
                    mkItem.cause == tgtMkList[i].cause &&
                    mkItem.devicemrid == tgtMkList[i].devicemrid &&
                    this.isSameLocation(mkItem.location, tgtMkList[i].location)) {
                    sameCnt++;
                }
            }
            else {
                if (mkItem.id == tgtMkList[i].id &&
                    mkItem.date == tgtMkList[i].date &&
                    mkItem.postponedate == tgtMkList[i].postponedate &&
                    mkItem.state == tgtMkList[i].state &&
                    mkItem.remark == tgtMkList[i].remark &&
                    mkItem.name == tgtMkList[i].name &&
                    mkItem.cause == tgtMkList[i].cause &&
                    mkItem.severity == tgtMkList[i].severity &&
                    mkItem.devicemrid == tgtMkList[i].devicemrid &&
                    mkItem.activecount == tgtMkList[i].activecount &&
                    mkItem.activedate == tgtMkList[i].activedate &&
                    this.isSameLocation(mkItem.location, tgtMkList[i].location)) {
                    sameCnt++;
                }
            }
        }
        return sameCnt != tgtMkList.length;
    };
    /**
     * If this function return true, then it means device list update, else => only update marker Status
     * @param layerName: layername
     * @param inputList: input Ms Mr List
     */
    OpenStreetMapComponent.prototype.isMrMsMarkerChanged = function (inputList, layerName) {
        var sameCnt = 0;
        var tgtMkList = this.markers[layerName];
        if (!tgtMkList) {
            return true;
        }
        if (inputList.length != tgtMkList.length) {
            return true;
        }
        for (var i = 0; i < inputList.length; i++) {
            var mkItem = inputList[i];
            if (mkItem.dev.mrid == tgtMkList[i].dev.mrid &&
                this.isSameLocation(mkItem.dev.location, tgtMkList[i].dev.location)) {
                sameCnt++;
            }
        }
        return sameCnt != tgtMkList.length;
    };
    OpenStreetMapComponent.prototype.isSameLocation = function (pos1, pos2) {
        return pos1.latitude == pos2.latitude && pos1.longitude == pos2.longitude && pos1.altitude == pos2.altitude;
    };
    OpenStreetMapComponent.prototype.zoomToMarker = function (mkType) {
        if (this.overLayerModels[mkType]) {
            for (var i = 0; i < this.markers[mkType].length; i++) {
                var mkitem = this.markers[mkType][i];
                if (mkitem.id == this.curMkInfo.id) {
                    this.mcgLayerSupportGroup.zoomToShowLayer(this.markerList[mkType][i], function () {
                        console.log('Ok');
                    });
                }
            }
        }
    };
    OpenStreetMapComponent.prototype.onEvSelEvent = function (event) {
        var ctx = this;
        $('.ev-div-marker').removeClass('selected');
        $(window.event.target).parent().addClass('selected');
    };
    OpenStreetMapComponent.prototype.onAlarmSelEvent = function (event) {
        var ctx = this;
        $('.ev-marker-' + ctx.mkInfo.mk_type).removeClass('selected');
        $(window.event.target).parent().parent().addClass('selected');
        ctx.ref.interactMkService.setMarkerInfo(ctx.mkInfo.mk_type, ctx.mkInfo, true);
    };
    /**
     * Construct Device Tree using token from Auth server
     */
    OpenStreetMapComponent.prototype.getDeviceTreeData = function () {
        var _this = this;
        var subs = [];
        var subIdsURL = this.apiBaseURL + '/substations';
        var actk = this.accessTokenSub;
        var i, j, k, self = this;
        this.httpService.httpGetRequest(actk, subIdsURL).subscribe(function (subsRes) {
            subs = subsRes;
            var promiseList = [];
            var subObjList = [];
            var devPromiseList = [];
            if (subs.length == 0)
                return;
            for (i = 0; i < subs.length; i++) {
                var baysURL = _this.apiBaseURL + '/substations/' + subs[i] + '/bays?suborder=' + i;
                subObjList.push({ value: subs[i], children: [] });
                promiseList.push(_this.httpService.httpGetRequestWithHeader(actk, baysURL));
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(promiseList).subscribe(function (results) {
                for (var op = 0; op < results.length; op++) {
                    var baysRes = results[op];
                    var bays = baysRes.body;
                    var subOrder = baysRes.url.split('/substations/')[1].split('/bays')[1].split('?suborder=')[1];
                    for (j = 0; j < bays.length; j++) {
                        var devsURL = self.apiBaseURL + "/bays/" + bays[j] + "/devices?suborder=" + subOrder;
                        devPromiseList.push(self.httpService.httpGetRequestWithHeader(actk, devsURL));
                    }
                }
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(devPromiseList).subscribe(function (devResults) {
                    devResults.forEach(function (devsRes) {
                        var devs = devsRes.body;
                        var bayName = devsRes.url.split('/bays/')[1].split('/devices')[0];
                        var subOrder = devsRes.url.split('/bays/')[1].split('/devices')[1].split('?suborder=')[1];
                        //console.log('Sub Id :' + subName, 'Bay Id : ' + bayName,devsRes.data);
                        var bayObj = { value: bayName, children: [] };
                        for (k = 0; k < devs.length; k++) {
                            var devObj = { value: devs[k], children: [] };
                            bayObj.children.push(devObj);
                        }
                        subObjList[Number(subOrder)].children.push(bayObj);
                    });
                    self.getDeviceTreeDetail(subObjList);
                }, function (error) {
                    _this.httpErrorHandler(error);
                });
            }, function (error) {
                _this.httpErrorHandler(error);
            });
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    OpenStreetMapComponent.prototype.getDeviceTreeDetail = function (devSt) {
        var i, j, k, self = this;
        var devPromiseList = [];
        var devTypes = {};
        var actk = this.accessTokenSub;
        for (i = 0; i < devSt.length; i++) {
            var bayList = devSt[i].children;
            for (j = 0; j < bayList.length; j++) {
                var devList = bayList[j].children;
                for (k = 0; k < devList.length; k++) {
                    var devDetailURL = this.apiBaseURL + "/devices/" + devList[k].value + "?suborder=" + i + "&bayorder=" + j + "&devorder=" + k;
                    devPromiseList.push(this.httpService.httpGetRequestWithHeader(actk, devDetailURL));
                }
            }
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(devPromiseList).subscribe(function (deviceDetailsRes) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                var deviceDetailRes, deviceOrderInfo, deviceSubOrder, deviceBayOrder, deviceOrder;
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                    for (i = 0; i < deviceDetailsRes.length; i++) {
                        deviceDetailRes = deviceDetailsRes[i];
                        deviceOrderInfo = deviceDetailRes.url.split('?suborder=')[1];
                        deviceSubOrder = deviceOrderInfo.split('&bayorder=')[0];
                        deviceBayOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[0];
                        deviceOrder = deviceOrderInfo.split('&bayorder=')[1].split('&devorder=')[1];
                        devSt[Number(deviceSubOrder)].children[Number(deviceBayOrder)].children[Number(deviceOrder)].children = deviceDetailRes.body;
                    }
                    self.devDetailList = devSt;
                    self.curBdInfo = { sub: '', bay: '', dev: '' };
                    self.reloadMsMrMarkers();
                    return [2 /*return*/];
                });
            });
        }, function (error) {
            self.httpErrorHandler(error);
        });
    };
    ///Getting Device Structure Details============================================
    OpenStreetMapComponent.prototype.httpErrorHandler = function (error) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log('Bad Request');
                break;
            case 401:
                this.authService.setAuthInfo({ login_st: false });
                break;
            default:
                alert("Backend returned code " + error.status + ", body was: " + error.error.Message);
        }
    };
    /**
     * Get Measurement and Meterings
     */
    OpenStreetMapComponent.prototype.getMsMr = function () {
        var _this = this;
        var msURL = config.client_info.apiURL.serverURLSubstation + "/measurements";
        var mrURL = config.client_info.apiURL.serverURLSubstation + "/meterings";
        var i;
        this.httpService.httpGetRequest(this.accessTokenSub, msURL).subscribe(function (results) {
            _this.msList = results;
            for (i = 0; i < results.length; i++) {
                _this.createNewLayer('Measurements_' + _this.msList[i].id);
            }
        }, function (error) {
            console.log(error);
            _this.msList = [];
            console.error("Can't get measurement list");
        });
        this.httpService.httpGetRequest(this.accessTokenSub, mrURL).subscribe(function (results) {
            _this.mrList = results;
            for (i = 0; i < _this.mrList.length; i++) {
                _this.createNewLayer('Meterings_' + _this.mrList[i].id);
            }
            if (_this.mrList.length > 0) {
                _this.isShowTimePicker = true;
            }
        }, function (error) {
            console.log(error);
            _this.mrList = [];
            console.error("Can't get metering list");
        });
        this.getDeviceTreeData();
    };
    OpenStreetMapComponent.prototype.getDevDetailList = function (subId, bayId, devId) {
        var devlist = [];
        for (var i = 0; i < this.devDetailList.length; i++) {
            if (this.devDetailList[i].value.indexOf(subId) > -1) {
                var baylist = [];
                baylist = this.devDetailList[i].children;
                for (var j = 0; j < baylist.length; j++) {
                    if (baylist[j].value.indexOf(bayId) > -1) {
                        var tmpdevlist = [];
                        tmpdevlist = baylist[j].children;
                        for (var k = 0; k < tmpdevlist.length; k++) {
                            if (tmpdevlist[k].value.indexOf(devId) > -1) {
                                devlist.push(tmpdevlist[k].children);
                            }
                        }
                    }
                }
            }
        }
        return devlist;
    };
    OpenStreetMapComponent.prototype.apply = function (type) {
        if ((type == 'Measurements_' || type == 'Meterings_')) {
            for (var mdname in this.overLayerModels) {
                if (this.overLayerModels.hasOwnProperty(mdname) && mdname.indexOf(type) > -1) {
                    var tt = type.substr(0, type.length - 1);
                    this.overLayerModels[mdname] = this.overLayerModels[tt];
                }
            }
            if (type == 'Meterings_' && this.overLayerModels[type]) {
                this.isShowTimePicker = true;
            }
        }
        if (type == 'Alarms' || type == 'In-Alarms') {
            if (this.overLayerModels.Alarms) {
                this.layerGroupList.Alarms.addTo(this.map);
            }
            else {
                this.map.removeLayer(this.layerGroupList.Alarms);
            }
        }
        else {
            if (type.indexOf('Measurements_') > -1 || type.indexOf('Meterings_') > -1) {
                //Add or Remove All measurements/meterings layer
                for (var layername in this.layerGroupList) {
                    if (this.layerGroupList.hasOwnProperty(layername) && layername.indexOf(type) > -1) {
                        if (this.overLayerModels[layername]) {
                            this.layerGroupList[layername].addTo(this.map);
                        }
                        else {
                            this.map.removeLayer(this.layerGroupList[layername]);
                        }
                    }
                }
            }
            else {
                if (this.overLayerModels[type]) {
                    this.layerGroupList[type].addTo(this.map);
                }
                else {
                    this.map.removeLayer(this.layerGroupList[type]);
                }
            }
        }
    };
    OpenStreetMapComponent.prototype.onSubMsMrVisible = function (pType, selfType) {
        // check whether parent is true or not.
        var falseCnt = 0;
        var trueCnt = 0;
        var cntOfChildType = (pType == 'Meterings') ? this.mrList.length : this.msList.length;
        for (var overlayname in this.overLayerModels) {
            if (this.overLayerModels.hasOwnProperty(overlayname) && overlayname.indexOf(pType + '_') > -1) {
                if (this.overLayerModels[overlayname]) {
                    trueCnt++;
                }
                else {
                    falseCnt++;
                }
            }
        }
        if (falseCnt == cntOfChildType) {
            this.overLayerModels[pType] = false;
        }
        if (trueCnt == cntOfChildType) {
            this.overLayerModels[pType] = true;
        }
        if (pType == 'Meterings') {
            this.isShowTimePicker = trueCnt > 0;
        }
        this.apply(pType + '_' + selfType);
    };
    OpenStreetMapComponent.prototype.onSetMeteringTs = function ($ev) {
        this.timeRange = $ev;
        if (this.devDetailList) {
            var devlist = this.getDevDetailList(this.curBdInfo.sub, this.curBdInfo.bay, this.curBdInfo.dev);
            this.msmrLayerService.setDevList('mr', this.mrList, devlist, this.timeRange);
            this.isEnabledTimeSel = false;
        }
    };
    OpenStreetMapComponent.prototype.makePopUpHTML = function (mkinfo, mkType) {
        var pphtml = '';
        if (mkType == 'Events') {
            pphtml = "\n                    <div class=\"ev-html-marker\">\n                        <h4>" + mkinfo.name + "</h4>\n                        <p>ID: " + mkinfo.id + "</p>\n                        <p>Date: " + mkinfo.date + "</p>\n                        <p>Remark: " + mkinfo.remark + "</p>\n                        <p>Cause: " + mkinfo.cause + "</p>\n                        <p class=\"ev-pp-location\">Latitude: " + mkinfo.location.latitude + "</p>\n                        <p class=\"ev-pp-location\">Longitude: " + mkinfo.location.longitude + "</p>\n                        <p class=\"ev-pp-location\">Altitude: " + mkinfo.location.altitude + "</p>\n                    </div>";
        }
        else if (mkType == 'Alarms' || mkType == 'In-Alarms') {
            pphtml = "\n                    <div class=\"ev-html-marker\">\n                        <h4>" + mkinfo.name + "</h4>\n                        <p>ID: " + mkinfo.id + "</p>\n                        <p>Date: " + mkinfo.date + "</p>\n                        <p>PpDate: " + mkinfo.postponedate + "</p>\n                        <p>Remark: " + mkinfo.remark + "</p>\n                        <p>State: " + mkinfo.state + "</p>\n                        <p>Cause: " + mkinfo.cause + "</p>\n                        <p class=\"ev-pp-severity ev-mk-" + mkinfo.severity.toLowerCase() + "\">Severity: " + mkinfo.severity + "</p>\n                        <p class=\"ev-pp-location\">Latitude: " + mkinfo.location.latitude + "</p>\n                        <p class=\"ev-pp-location\">Longitude: " + mkinfo.location.longitude + "</p>\n                        <p class=\"ev-pp-location\">Altitude: " + mkinfo.location.altitude + "</p>\n                    </div>";
        }
        else {
            pphtml = "\n                    <div class=\"ev-html-marker\">\n                        <h5>" + mkinfo.dev.name + "</h5>\n                        <p>ID: " + mkinfo.dev.mrid + "</p>\n                        <p>Type: " + mkinfo.unit.id + "</p>\n                        <p>Format: " + mkinfo.unit.format + "</p>\n                        <p>Value: " + mkinfo.value + " " + mkinfo.unit.unit + "</p>\n                        <p class=\"ev-pp-location\">Latitude: " + mkinfo.dev.location.latitude + "</p>\n                        <p class=\"ev-pp-location\">Longitude: " + mkinfo.dev.location.longitude + "</p>\n                        <p class=\"ev-pp-location\">Altitude: " + mkinfo.dev.location.altitude + "</p>\n                    </div>";
        }
        return pphtml;
    };
    OpenStreetMapComponent.prototype.stringToHslColor = function (str) {
        var s = 60;
        var l = 80;
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var h = hash % 360;
        return "hsl(" + h + ", " + s + "%," + l + "%)";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], OpenStreetMapComponent.prototype, "mapElement", void 0);
    OpenStreetMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-openstreet-map',
            template: __webpack_require__(/*! ./openstreet-map.component.html */ "./client/app/modules/components/openstreet-map/openstreet-map.component.html"),
            styles: [__webpack_require__(/*! ./openstreet-map.component.css */ "./client/app/modules/components/openstreet-map/openstreet-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_15__["GoldenLayoutContainer"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _core_services_update_marker_service__WEBPACK_IMPORTED_MODULE_4__["UpdateMarkerService"],
            _core_services_update_msmr_marker_service__WEBPACK_IMPORTED_MODULE_13__["UpdateMsMrMarkerService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_7__["HttpServiceHelper"],
            _core_services_interaction_marker_service__WEBPACK_IMPORTED_MODULE_5__["InteractionMarkerService"],
            _core_services_msmr_device_selection_service__WEBPACK_IMPORTED_MODULE_12__["MsMrDeviceSelectionService"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_8__["MsalService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
            _core_services_update_bread_crumb_service__WEBPACK_IMPORTED_MODULE_11__["UpdateBreadCrumbService"]])
    ], OpenStreetMapComponent);
    return OpenStreetMapComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/page-loading/page-loading.component.css":
/*!*******************************************************************************!*\
  !*** ./client/app/modules/components/page-loading/page-loading.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#page-loading{\r\n    background-color: #a0a0a073;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    text-align: center;\r\n    display: flex;\r\n    justify-content: center;\r\n    z-index: 10;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BhZ2UtbG9hZGluZy9wYWdlLWxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2YiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcGFnZS1sb2FkaW5nL3BhZ2UtbG9hZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2UtbG9hZGluZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTA3MztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/components/page-loading/page-loading.component.html":
/*!********************************************************************************!*\
  !*** ./client/app/modules/components/page-loading/page-loading.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"page-loading\">\n  <img src=\"../../../../assets/img/loading.svg\">\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/page-loading/page-loading.component.ts":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/page-loading/page-loading.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoadingComponent", function() { return PageLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageLoadingComponent = /** @class */ (function () {
    function PageLoadingComponent() {
    }
    PageLoadingComponent.prototype.ngOnInit = function () {
    };
    PageLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-loading',
            template: __webpack_require__(/*! ./page-loading.component.html */ "./client/app/modules/components/page-loading/page-loading.component.html"),
            styles: [__webpack_require__(/*! ./page-loading.component.css */ "./client/app/modules/components/page-loading/page-loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageLoadingComponent);
    return PageLoadingComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/test-http/test-http.component.css":
/*!*************************************************************************!*\
  !*** ./client/app/modules/components/test-http/test-http.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test-container {\r\n    padding-left: 150px;\r\n}\r\n\r\n.test-container button {\r\n    margin-right: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3Rlc3QtaHR0cC90ZXN0LWh0dHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy90ZXN0LWh0dHAvdGVzdC1odHRwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdC1jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNTBweDtcclxufVxyXG5cclxuLnRlc3QtY29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/components/test-http/test-http.component.html":
/*!**************************************************************************!*\
  !*** ./client/app/modules/components/test-http/test-http.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"test-container\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewAlarm()\">Add New Alarm</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addNewEvent()\">Add New Event</button>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/test-http/test-http.component.ts":
/*!************************************************************************!*\
  !*** ./client/app/modules/components/test-http/test-http.component.ts ***!
  \************************************************************************/
/*! exports provided: TestHttpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestHttpComponent", function() { return TestHttpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");



var TestHttpComponent = /** @class */ (function () {
    function TestHttpComponent(httpService) {
        this.httpService = httpService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
    }
    TestHttpComponent.prototype.ngOnInit = function () {
    };
    TestHttpComponent.prototype.addNewAlarm = function () {
        var postBody = {
            "id": "1",
            "date": "2019-05-22T08:53:13.582Z",
            "postponedate": "2019-05-22T08:53:13.582Z",
            "state": "New",
            "remark": "rrr",
            "name": "dfd",
            "cause": "ccccdc",
            "severity": "Major",
            "devicemrid": "sub1_bay0_device0"
        };
        var addNewAlarmURL = config.client_info.apiURL.serverURL + "/events/alarm";
        this.httpService.httpPostRequest(this.accessToken, addNewAlarmURL, postBody).subscribe(function (stInfo) {
            console.log(stInfo);
        }, function (err) {
            console.log(err);
        });
    };
    TestHttpComponent.prototype.addNewEvent = function () {
        var postBody = {
            "id": "12",
            "date": "2019-05-28T08:50:27.978Z",
            "remark": "23",
            "name": "666",
            "cause": "666",
            "devicemrid": "sub2_bay2_device0"
        };
        var addNewAlarmURL = config.client_info.apiURL.serverURL + "/events/all";
        this.httpService.httpPostRequest(this.accessToken, addNewAlarmURL, postBody).subscribe(function (stInfo) {
            console.log(stInfo);
        }, function (err) {
            console.log(err);
        });
    };
    TestHttpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test-http',
            template: __webpack_require__(/*! ./test-http.component.html */ "./client/app/modules/components/test-http/test-http.component.html"),
            styles: [__webpack_require__(/*! ./test-http.component.css */ "./client/app/modules/components/test-http/test-http.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"]])
    ], TestHttpComponent);
    return TestHttpComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/time-selector/time-selector.component.css":
/*!*********************************************************************************!*\
  !*** ./client/app/modules/components/time-selector/time-selector.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ev-time-selector {\r\n    position: absolute;\r\n    top: 10px;\r\n    z-index: 1000;\r\n    background-color: white;\r\n    padding: 5px;\r\n    border: 1px solid #ff000063;\r\n    border-radius: 4px;\r\n    left: 5px\r\n}\r\n.ev-time-selector {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.ev-time-selector input {\r\n    width: 45px;\r\n    font-size: 16px;\r\n    padding-left: 3px;\r\n}\r\n.ev-time-selector span {\r\n    padding: 2px 0;\r\n    background-color: #c3c3c3;\r\n    border-top: 1px;\r\n    border-bottom: 1px;\r\n    border-style: solid;\r\n    border-left: none;\r\n    border-right: none;\r\n    border-color: #a8a9a9;\r\n    width: 15px;\r\n    text-align: center;\r\n}\r\n#ev-time-selector button {\r\n    margin-top: 5px;\r\n    width: 100%;\r\n    border-radius: 2px;\r\n    font-size: 15px;\r\n    padding-top: 0;\r\n    padding-bottom: 2px;\r\n}\r\n#ev-time-selector h6 {\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n#ev-time-selector>input {\r\n    width: 100%;\r\n    margin-bottom: 5px;\r\n}\r\n#ev-time-selector button>i {\r\n    font-size: 18px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3RpbWUtc2VsZWN0b3IvdGltZS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvdGltZS1zZWxlY3Rvci90aW1lLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXYtdGltZS1zZWxlY3RvciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDAwNjM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBsZWZ0OiA1cHhcclxufVxyXG4uZXYtdGltZS1zZWxlY3RvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5ldi10aW1lLXNlbGVjdG9yIGlucHV0IHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLmV2LXRpbWUtc2VsZWN0b3Igc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAycHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjM2MzYzM7XHJcbiAgICBib3JkZXItdG9wOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNhOGE5YTk7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jZXYtdGltZS1zZWxlY3RvciBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbn1cclxuI2V2LXRpbWUtc2VsZWN0b3IgaDYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbiNldi10aW1lLXNlbGVjdG9yPmlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiNldi10aW1lLXNlbGVjdG9yIGJ1dHRvbj5pIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/time-selector/time-selector.component.html":
/*!**********************************************************************************!*\
  !*** ./client/app/modules/components/time-selector/time-selector.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ev-time-selector\">\n    <h6>Metering Setting</h6>\n    <input placeholder=\"Start Time\"\n           [(ngModel)]=\"startDate\"\n           (ngModelChange)=\"onChangeToDate($event)\"\n           [owlDateTimeTrigger]=\"todt\" [owlDateTime]=\"todt\">\n    <owl-date-time #todt></owl-date-time>\n    <div class=\"ev-time-selector\">\n        <input type=\"number\" [(ngModel)]=\"rD\">\n        <span>D</span>\n        <input type=\"number\" [(ngModel)]=\"rH\">\n        <span>H</span>\n        <input type=\"number\" [(ngModel)]=\"rM\">\n        <span>M</span>\n        <input type=\"number\" [(ngModel)]=\"rS\">\n        <span>S</span>\n    </div>\n    <button type=\"button\"\n            [disabled]=\"!isEnabledSetBtn\"\n            class=\"btn btn-primary\"\n            (click)=\"onSetTimeBtn()\">\n        {{ (isEnabledSetBtn)?'SET':'' }}\n        <i class=\"fa fa-spin fa-spinner\" *ngIf=\"!isEnabledSetBtn\"></i>\n    </button>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/time-selector/time-selector.component.ts":
/*!********************************************************************************!*\
  !*** ./client/app/modules/components/time-selector/time-selector.component.ts ***!
  \********************************************************************************/
/*! exports provided: TimeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeSelectorComponent", function() { return TimeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



var TimeSelectorComponent = /** @class */ (function () {
    function TimeSelectorComponent() {
        this.onSetPeriod = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startDate = new Date(Date.now() - 432e5);
        this.rD = '0';
        this.rH = '1';
        this.rM = '0';
        this.rS = '0';
    }
    TimeSelectorComponent.prototype.ngOnInit = function () {
        this.onSetTimeBtn();
    };
    TimeSelectorComponent.prototype.onSetTimeBtn = function () {
        if (parseInt(this.rD) < 0) {
            this.rD = '00';
        }
        if (parseInt(this.rH) > 23 || parseInt(this.rH) < 0) {
            this.rH = '00';
        }
        if (this.rH.toString().length < 2) {
            this.rH = '0' + this.rH;
        }
        if (parseInt(this.rM) > 59 || parseInt(this.rM) < 0) {
            this.rM = '00';
        }
        if (this.rM.toString().length < 2) {
            this.rM = '0' + this.rM;
        }
        if (parseInt(this.rS) > 59 || parseInt(this.rS) < 0) {
            this.rS = '00';
        }
        if (this.rS.toString().length < 2) {
            this.rS = '0' + this.rS;
        }
        var totalTs = parseInt(this.rS) + parseInt(this.rM) * 60 + parseInt(this.rH) * 3600 + parseInt(this.rD) * 86400;
        var startdt = new Date(this.startDate.getTime());
        var enddt = new Date(this.startDate.getTime() + totalTs * 1000);
        var startdtUTC = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](startdt).format();
        var enddtUTC = moment__WEBPACK_IMPORTED_MODULE_2__["utc"](enddt).format();
        var tsSpan = this.rD + ":" + this.rH + ":" + this.rM + ":" + this.rS;
        this.onSetPeriod.emit({ start: startdtUTC, span: tsSpan, end: enddtUTC });
    };
    TimeSelectorComponent.prototype.onChangeToDate = function ($ev) {
        console.log(moment__WEBPACK_IMPORTED_MODULE_2__["utc"](this.startDate).format());
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeSelectorComponent.prototype, "onSetPeriod", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TimeSelectorComponent.prototype, "isEnabledSetBtn", void 0);
    TimeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-selector',
            template: __webpack_require__(/*! ./time-selector.component.html */ "./client/app/modules/components/time-selector/time-selector.component.html"),
            styles: [__webpack_require__(/*! ./time-selector.component.css */ "./client/app/modules/components/time-selector/time-selector.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeSelectorComponent);
    return TimeSelectorComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./client/app/modules/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

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


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./client/app/modules/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./client/app/modules/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/sb-event/sb-event.component.css":
/*!******************************************************************!*\
  !*** ./client/app/modules/pages/sb-event/sb-event.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".events-container {\r\n    height: 100%;\r\n}\r\n.as-split-area:first-child {\r\n    /*padding: 5px 10px 0 10px;*/\r\n}\r\n.ev-sidebar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n}\r\n.ev-alarm-container {\r\n    border: 1px solid #8e8d8d;\r\n    padding-top: 0;\r\n    border-radius: 5px;\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n}\r\n.ev-events-container {\r\n    position: relative;\r\n    height: 100%;\r\n    overflow: auto;\r\n    border: 1px solid #8e8d8d;\r\n    border-radius: 5px;\r\n}\r\n.ev-group-box-title {\r\n    position: absolute;\r\n    top: 0;\r\n    background: transparent;\r\n    text-align: center;\r\n    display: block;\r\n    width: 98%;\r\n    z-index: 5;\r\n}\r\n.ev-group-box-title h5 {\r\n    font-weight: 500;\r\n    background-color: white;\r\n    display: inline-block;\r\n    padding: 0 10px;\r\n    font-size: 1rem;\r\n}\r\n.ev-area-container {\r\n    position: relative;\r\n    height: 100%;\r\n    padding: 20px 10px 10px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9zYi1ldmVudC9zYi1ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL3NiLWV2ZW50L3NiLWV2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXZlbnRzLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmFzLXNwbGl0LWFyZWE6Zmlyc3QtY2hpbGQge1xyXG4gICAgLypwYWRkaW5nOiA1cHggMTBweCAwIDEwcHg7Ki9cclxufVxyXG4uZXYtc2lkZWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uZXYtYWxhcm0tY29udGFpbmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZThkOGQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcbi5ldi1ldmVudHMtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhlOGQ4ZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4uZXYtZ3JvdXAtYm94LXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgei1pbmRleDogNTtcclxufVxyXG4uZXYtZ3JvdXAtYm94LXRpdGxlIGg1IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmV2LWFyZWEtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/sb-event/sb-event.component.html":
/*!*******************************************************************!*\
  !*** ./client/app/modules/pages/sb-event/sb-event.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"events-container\">-->\n<!--    <as-split #splitEl direction=\"horizontal\" [gutterSize]=\"9\">-->\n<!--        <as-split-area size=\"35\">-->\n<!--            <div class=\"ev-sidebar\">-->\n<!--                <div class=\"ev-breadcrumb\">-->\n<!--                    <app-ev-breadcrumb></app-ev-breadcrumb>-->\n<!--                </div>-->\n<!--                <as-split #splitE2   direction=\"vertical\" [gutterSize]=\"9\">-->\n<!--                    <as-split-area size=\"50\">-->\n<!--                        <div class=\"ev-area-container\">-->\n<!--                            <div class=\"ev-group-box-title\">-->\n<!--                                <h5>Alarms</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"ev-alarm-container\">-->\n<!--                                <app-alarm></app-alarm>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </as-split-area>-->\n<!--                    <as-split-area size=\"50\">-->\n<!--                        <div class=\"ev-area-container\">-->\n<!--                            <div class=\"ev-group-box-title\">-->\n<!--                                <h5>Events</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"ev-events-container\">-->\n<!--                                <app-event-table></app-event-table>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </as-split-area>-->\n<!--                </as-split>-->\n<!--            </div>-->\n<!--        </as-split-area>-->\n<!--        <as-split-area size=\"65\">-->\n<!--            <app-test-http *ngIf=\"false\"></app-test-http>-->\n<!--            <app-openstreet-map></app-openstreet-map>-->\n<!--        </as-split-area>-->\n<!--    </as-split>-->\n<!--</div>-->\n\n<golden-layout-root></golden-layout-root>\n\n<!--<div class=\"events-container\">-->\n<!--    <as-split #splitEl direction=\"horizontal\" [gutterSize]=\"9\">-->\n<!--        <as-split-area size=\"35\">-->\n<!--            <div class=\"ev-sidebar\">-->\n<!--                <div class=\"ev-breadcrumb\">-->\n<!--                    <app-ev-breadcrumb></app-ev-breadcrumb>-->\n<!--                </div>-->\n<!--                <as-split #splitE2   direction=\"vertical\" [gutterSize]=\"9\">-->\n<!--                    <as-split-area size=\"50\">-->\n<!--                        <div class=\"ev-area-container\">-->\n<!--                            <div class=\"ev-group-box-title\">-->\n<!--                                <h5>Alarms</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"ev-alarm-container\">-->\n<!--                                <app-alarm></app-alarm>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </as-split-area>-->\n<!--                    <as-split-area size=\"50\">-->\n<!--                        <div class=\"ev-area-container\">-->\n<!--                            <div class=\"ev-group-box-title\">-->\n<!--                                <h5>Events</h5>-->\n<!--                            </div>-->\n<!--                            <div class=\"ev-events-container\">-->\n<!--                                <app-event-table></app-event-table>-->\n<!--                            </div>-->\n<!--                        </div>-->\n<!--                    </as-split-area>-->\n<!--                </as-split>-->\n<!--            </div>-->\n<!--        </as-split-area>-->\n<!--        <as-split-area size=\"65\">-->\n<!--            <app-test-http *ngIf=\"false\"></app-test-http>-->\n<!--            <app-openstreet-map></app-openstreet-map>-->\n<!--        </as-split-area>-->\n<!--    </as-split>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./client/app/modules/pages/sb-event/sb-event.component.ts":
/*!*****************************************************************!*\
  !*** ./client/app/modules/pages/sb-event/sb-event.component.ts ***!
  \*****************************************************************/
/*! exports provided: SbEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbEventComponent", function() { return SbEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SbEventComponent = /** @class */ (function () {
    // @ViewChild('splitEl') splitEl: SplitComponent;
    function SbEventComponent() {
    }
    SbEventComponent.prototype.ngOnInit = function () {
        (window.opener || window).console.log("ngoninit");
    };
    SbEventComponent.prototype.ngOnDestroy = function () {
        (window.opener || window).console.log("ngondestroy");
    };
    SbEventComponent.prototype.ngAfterViewInit = function () {
        // this.splitEl.dragProgress$.subscribe(x => {
        //     this.mapResizeService.setMapResizeInfo(x);
        // });
    };
    SbEventComponent.prototype.glOnClose = function () {
        console.log("glOnClose");
        return new Promise(function (resolve, reject) {
            console.log("glonclose promise");
            setTimeout(function () {
                console.log("resolving");
                resolve();
            }, 1000);
        });
    };
    SbEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sb-event',
            template: __webpack_require__(/*! ./sb-event.component.html */ "./client/app/modules/pages/sb-event/sb-event.component.html"),
            styles: [__webpack_require__(/*! ./sb-event.component.css */ "./client/app/modules/pages/sb-event/sb-event.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SbEventComponent);
    return SbEventComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @embedded-enterprises/ng6-golden-layout */ "./node_modules/@embedded-enterprises/ng6-golden-layout/esm5/embedded-enterprises-ng6-golden-layout.js");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// call MultiWindowInit before bootstrapModule().
Object(_embedded_enterprises_ng6_golden_layout__WEBPACK_IMPORTED_MODULE_4__["MultiWindowInit"])();
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

module.exports = {"version":"source-version"};

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./client/main.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Work\02-Web\16-JavaScript\14-API Gateway-3\work\eventApp\client\main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map