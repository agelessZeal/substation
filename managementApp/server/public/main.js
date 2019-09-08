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
/* harmony import */ var _modules_pages_substation_substation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pages/substation/substation.component */ "./client/app/modules/pages/substation/substation.component.ts");
/* harmony import */ var _modules_pages_partner_partner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pages/partner/partner.component */ "./client/app/modules/pages/partner/partner.component.ts");
/* harmony import */ var _modules_pages_measurements_measurements_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pages/measurements/measurements.component */ "./client/app/modules/pages/measurements/measurements.component.ts");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./client/app/modules/pages/home/home.component.ts");
/* harmony import */ var _modules_pages_device_type_device_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/pages/device-type/device-type.component */ "./client/app/modules/pages/device-type/device-type.component.ts");
/* harmony import */ var _modules_components_global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/components/global-setting/global-setting.component */ "./client/app/modules/components/global-setting/global-setting.component.ts");
/* harmony import */ var _modules_pages_virtual_substation_virtual_substation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/pages/virtual-substation/virtual-substation.component */ "./client/app/modules/pages/virtual-substation/virtual-substation.component.ts");










var routes = [
    { path: 'app/home', component: _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'app/substation', component: _modules_pages_substation_substation_component__WEBPACK_IMPORTED_MODULE_3__["SubstationComponent"] },
    { path: 'app/virtual-substation', component: _modules_pages_virtual_substation_virtual_substation_component__WEBPACK_IMPORTED_MODULE_9__["VirtualSubstationComponent"] },
    { path: 'app/partner', component: _modules_pages_partner_partner_component__WEBPACK_IMPORTED_MODULE_4__["PartnerComponent"] },
    { path: 'app/measurements', component: _modules_pages_measurements_measurements_component__WEBPACK_IMPORTED_MODULE_5__["MeasurementsComponent"] },
    { path: 'app/device-types', component: _modules_pages_device_type_device_type_component__WEBPACK_IMPORTED_MODULE_7__["DeviceTypeComponent"] },
    { path: 'app/global-settings', component: _modules_components_global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_8__["GlobalSettingComponent"] },
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

module.exports = "nav.navbar {\r\n    box-shadow: 0 1px #232323;\r\n}\r\n\r\n.navbar-nav {\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n.nav-link {\r\n    padding-right: .5rem !important;\r\n    padding-left: .5rem !important;\r\n}\r\n\r\n/* Fixes dropdown menus placed on the right side */\r\n\r\n.ml-auto .dropdown-menu {\r\n    left: auto !important;\r\n    right: 0;\r\n}\r\n\r\n.navbar a {\r\n    cursor: pointer;\r\n}\r\n\r\n.page-loading {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n    border: 1px solid black;\r\n}\r\n\r\n.tree-waiting .loader {\r\n    width: 50px;\r\n    height: 50px;\r\n    border-width: 6px;\r\n}\r\n\r\n.navbar-nav .dropdown-menu {\r\n    min-width: 7rem;\r\n}\r\n\r\n.dropdown-menu a:hover {\r\n    background-color: #037bfc;\r\n    color: white;\r\n}\r\n\r\n.navbar-dark .navbar-nav .nav-link {\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.login-failed-msg {\r\n    position: fixed;\r\n    right: 10px;\r\n    top: 62px;\r\n    padding: 9px;\r\n    color: #ffffff;\r\n    background-color: #f90837;\r\n    border-radius: 10px;\r\n    z-index:10;\r\n}\r\n\r\n.mg-app-container {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n\r\n.mg-app-content {\r\n    padding: 50px 0 20px 0;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow-y: auto;\r\n    overflow-x: auto;\r\n    height: calc(100vh - 56px);\r\n}\r\n\r\n.sb-page-loading {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n}\r\n\r\n.loader {\r\n    margin: 42vh auto;\r\n    font-size: 10px;\r\n    position: relative;\r\n    text-indent: -9999em;\r\n    border-top: 9px solid rgba(37, 37, 37, 0.2);\r\n    border-right: 9px solid rgba(37, 37, 37, 0.2);\r\n    border-bottom: 9px solid rgba(37, 37, 37, 0.2);\r\n    border-left: 9px solid #252525;\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-animation: load8 1.1s infinite linear;\r\n    animation: load8 1.1s infinite linear;\r\n}\r\n\r\n.loader, .loader:after {\r\n    border-radius: 50%;\r\n    width: 80px;\r\n    height: 80px;\r\n}\r\n\r\n@-webkit-keyframes load8 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes load8 {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQSxrREFBa0Q7O0FBQ2xEO0lBQ0kscUJBQXFCO0lBQ3JCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCwyQkFBMkI7SUFDM0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDJDQUEyQztJQUMzQyw2Q0FBNkM7SUFDN0MsOENBQThDO0lBQzlDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsd0JBQXdCO0lBQ3hCLDZDQUE2QztJQUM3QyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLCtCQUErQjtRQUMvQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlDQUFpQztRQUNqQyx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksK0JBQStCO1FBQy9CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6ImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYubmF2YmFyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4ICMyMzIzMjM7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogRml4ZXMgZHJvcGRvd24gbWVudXMgcGxhY2VkIG9uIHRoZSByaWdodCBzaWRlICovXHJcbi5tbC1hdXRvIC5kcm9wZG93bi1tZW51IHtcclxuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmF2YmFyIGEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGFnZS1sb2FkaW5nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDMwMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmUyZTZmYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4udHJlZS13YWl0aW5nIC5sb2FkZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItd2lkdGg6IDZweDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgbWluLXdpZHRoOiA3cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzdiZmM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZC1tc2cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IDYycHg7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOTA4Mzc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDoxMDtcclxufVxyXG5cclxuLm1nLWFwcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWctYXBwLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTBweCAwIDIwcHggMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxufVxyXG5cclxuXHJcbi5zYi1wYWdlLWxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMzAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZTJlNmZjO1xyXG59XHJcblxyXG4ubG9hZGVyIHtcclxuICAgIG1hcmdpbjogNDJ2aCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1pbmRlbnQ6IC05OTk5ZW07XHJcbiAgICBib3JkZXItdG9wOiA5cHggc29saWQgcmdiYSgzNywgMzcsIDM3LCAwLjIpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA5cHggc29saWQgcmdiYSgzNywgMzcsIDM3LCAwLjIpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogOXB4IHNvbGlkIHJnYmEoMzcsIDM3LCAzNywgMC4yKTtcclxuICAgIGJvcmRlci1sZWZ0OiA5cHggc29saWQgIzI1MjUyNTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGxvYWQ4IDEuMXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkOCAxLjFzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG5cclxuLmxvYWRlciwgLmxvYWRlcjphZnRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWQ4IHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZDgge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" [routerLink]=\"[(loggedIn)?'/app/substation':'/app/home']\">{{title}} {{appVersion}} </a>\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!loggedIn\" (click)=\"login()\">\n                <i class=\"fa fa-sign-in\"></i>Login\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"loggedIn\" (click)=\"logout()\">\n                <i class=\"fa fa-sign-out\"></i>Logout\n            </a>\n        </li>\n    </ul>\n</nav>\n\n<div class=\"login-failed-msg\" [innerHTML]=\"loginFailedMsg\" *ngIf=\"!!(loginFailedMsg)\">\n</div>\n\n<div class=\"mg-app-container\">\n    <app-sidebar *ngIf=\"loggedIn\"></app-sidebar>\n    <div #panel class=\"mg-app-content\" *ngIf=\"loggedIn\">\n        <router-outlet></router-outlet>\n        <button class=\"btn page-left-right-icon\" *ngIf=\"loggedIn\" (click)=\"onLeftRightScroll()\">\n            <i class=\"fa fa-2x fa-arrow-circle-right\"></i>\n        </button>\n        <button class=\"btn page-forward-icon\" *ngIf=\"loggedIn\" (click)=\"onForwardScroll()\">\n            <i class=\"fa fa-2x fa-step-forward\"></i>\n        </button>\n\n        <!--https://www.npmjs.com/package/@nicky-lenaers/ngx-scroll-to-->\n        <button class=\"btn page-right-left-icon\" *ngIf=\"loggedIn\" (click)=\"onRightLeftScroll()\">\n            <i class=\"fa fa-2x fa-arrow-circle-left\"></i>\n        </button>\n        <button class=\"btn page-backward-icon\" *ngIf=\"loggedIn\" (click)=\"onBackwardScroll()\">\n            <i class=\"fa fa-2x fa-step-backward\"></i>\n        </button>\n    </div>\n    <div class=\"public-area\" *ngIf=\"!loggedIn\">\n        <h5>Public Area</h5>\n    </div>\n</div>\n\n<div class=\"sb-page-loading\" *ngIf=\"!pageLoaded\">\n    <div class=\"loader\"></div>\n</div>\n\n\n\n"

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
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/setting.service */ "./client/app/core/services/setting.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(broadcastService, httpService, router, authService, evAuthService, settingService, scrollMovingService) {
        this.broadcastService = broadcastService;
        this.httpService = httpService;
        this.router = router;
        this.authService = authService;
        this.evAuthService = evAuthService;
        this.settingService = settingService;
        this.scrollMovingService = scrollMovingService;
        this.title = 'ManagementApp';
        this.appVersion = _version_json__WEBPACK_IMPORTED_MODULE_5__.version;
        this.isIframe = window !== window.parent && !window.opener;
        this.loginFailedMsg = '';
        this.loggedIn = false;
        this.pageLoaded = false;
        this.settingKey = config.client_info.storeInfo.settingKey;
        if (location.href.indexOf('access_token') < 0) {
            this.checkLogin();
        }
    }
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
        this.httpService.httpGetRequest(curToken, config.client_info.apiURL.serverURL + '/authorize')
            .subscribe(function (resp) {
            localStorage.setItem(config.client_info.storeInfo.username, _this.authService.getUser().name);
            _this.pageLoaded = true;
            _this.loggedIn = true;
            if (_this.router.url == '/' || _this.router.url == '/app/home') {
                _this.router.navigateByUrl('/app/substation');
            }
        }, function (error) {
            console.log('Http get request to MS Graph failed' + JSON.stringify(error));
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
        this.clearLocalStorage();
        var curURL = window.location.href;
        if (curURL.indexOf('substation') > 0 ||
            curURL.indexOf('partner') > 0 ||
            curURL.indexOf('measurements') > 0 ||
            curURL.indexOf('global-settings') > 0 ||
            curURL.indexOf('virtual-substation') > 0 ||
            curURL.indexOf('device-types') > 0) {
            this.router.navigateByUrl('/app/home');
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
            // will work for acquireTokenSilent and acquireTokenPopup
            _this.authService.acquireTokenSilent([config.client_info.msal_info.reqScopes]).then(function (accessToken) {
                localStorage.setItem(config.client_info.storeInfo.tokenKey, accessToken);
                localStorage.setItem(config.client_info.storeInfo.username, '');
                self.accessToken = accessToken;
                self.setExpireTime();
                self.getUserProfile(accessToken);
            }).catch(function (err) {
                var result = self.stringAllReplace(err, '\\r\\n', '<br>');
                result = self.stringAllReplace(err, '\\r', '<br>');
                result = self.stringAllReplace(err, '\\n', '<br>');
                self.loginFailedMsg = result;
                self.loggedIn = false;
                self.pageLoaded = true;
            });
        });
        this.broadcastService.subscribe('msal:loginFailure', function (payload) {
            console.log('login failure ' + JSON.stringify(payload)); // _errorDesc
            var rawMsg = (payload._error.length > payload._errorDesc.length) ? payload._error : payload._errorDesc;
            var result = _this.stringAllReplace(rawMsg, '\\r\\n', '<br>');
            result = _this.stringAllReplace(rawMsg, '\\r', '<br>');
            result = _this.stringAllReplace(rawMsg, '\\n', '<br>');
            _this.loginFailedMsg = result;
            _this.loggedIn = false;
            _this.pageLoaded = true;
        });
        this.scrollMovingService.getMovedScroll().subscribe(function (scrollInfo) {
            setTimeout(function () {
                var htmlElem;
                if (scrollInfo.elem == 'partner-contact-list' ||
                    scrollInfo.elem == 'partner-address-list' ||
                    scrollInfo.elem == 'partner-substation-list') {
                    htmlElem = document.getElementsByClassName(scrollInfo.elem);
                }
                else {
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
        this.evAuthService.getAuthInfo().subscribe(function (authInfo) {
            if (!authInfo.login_st) {
                alert('Expired, login again');
                console.log(authInfo);
                _this.logout();
            }
        });
        this.settingService.getSettingInfo().subscribe(function (settingInfo) {
            var oldSetting = localStorage.getItem(settingInfo.tbl);
            console.log(settingInfo);
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
    AppComponent.prototype.onLeftRightScroll = function () {
        var htmlElem = document.getElementsByClassName('mg-width-virtual');
        if (htmlElem) {
            htmlElem[htmlElem.length - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
        }
    };
    AppComponent.prototype.onForwardScroll = function () {
        var parentViewTag;
        var componentsList;
        var curScrollPosX;
        componentsList = document.getElementsByClassName('mg-app-component');
        parentViewTag = document.getElementsByClassName('mg-app-content')[0];
        curScrollPosX = parentViewTag.scrollLeft;
        for (var i = 1; i < componentsList.length; i++) {
            if (curScrollPosX < componentsList[i].offsetLeft) {
                componentsList[i].scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
                return;
            }
        }
    };
    AppComponent.prototype.onRightLeftScroll = function () {
        var htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
    };
    AppComponent.prototype.onBackwardScroll = function () {
        var parentViewTag;
        var componentsList;
        var curScrollPosX;
        componentsList = document.getElementsByClassName('mg-app-component');
        parentViewTag = document.getElementsByClassName('mg-app-content')[0];
        curScrollPosX = parentViewTag.scrollLeft;
        for (var i = componentsList.length - 1; i > -1; i--) {
            if ((curScrollPosX + parentViewTag.offsetWidth) > (componentsList[i].offsetLeft)) {
                if (componentsList[i - 1]) {
                    componentsList[i - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
                }
                return;
            }
        }
    };
    AppComponent.prototype.stringAllReplace = function (srcStr, search, replacement) {
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
    AppComponent.prototype.clearLocalStorage = function () {
        //don't delete key names with suffix
        for (var key in localStorage) {
            if (key.indexOf('_width') < 0 && key.indexOf('_setting') < 0) {
                localStorage.removeItem(key);
            }
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('panel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "panel", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./client/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _azure_msal_angular__WEBPACK_IMPORTED_MODULE_2__["MsalService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_6__["ScrollMovingService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./client/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./client/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! msal */ "./node_modules/msal/lib-commonjs/index.js");
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(msal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_pages_substation_substation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/pages/substation/substation.component */ "./client/app/modules/pages/substation/substation.component.ts");
/* harmony import */ var _modules_pages_partner_partner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/pages/partner/partner.component */ "./client/app/modules/pages/partner/partner.component.ts");
/* harmony import */ var _modules_pages_measurements_measurements_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/pages/measurements/measurements.component */ "./client/app/modules/pages/measurements/measurements.component.ts");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./client/app/modules/pages/home/home.component.ts");
/* harmony import */ var _modules_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/components/sidebar/sidebar.component */ "./client/app/modules/components/sidebar/sidebar.component.ts");
/* harmony import */ var _modules_components_bay_table_bay_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/components/bay-table/bay-table.component */ "./client/app/modules/components/bay-table/bay-table.component.ts");
/* harmony import */ var _modules_components_bay_form_bay_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/components/bay-form/bay-form.component */ "./client/app/modules/components/bay-form/bay-form.component.ts");
/* harmony import */ var _modules_components_device_table_device_table_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/components/device-table/device-table.component */ "./client/app/modules/components/device-table/device-table.component.ts");
/* harmony import */ var _modules_components_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/components/device-form/device-form.component */ "./client/app/modules/components/device-form/device-form.component.ts");
/* harmony import */ var _modules_components_substation_table_substation_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/components/substation-table/substation-table.component */ "./client/app/modules/components/substation-table/substation-table.component.ts");
/* harmony import */ var _modules_components_substation_form_substation_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/components/substation-form/substation-form.component */ "./client/app/modules/components/substation-form/substation-form.component.ts");
/* harmony import */ var _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @azure/msal-angular */ "./node_modules/@azure/msal-angular/dist/index.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/confirmdialog */ "./node_modules/primeng/confirmdialog.js");
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! primeng/overlaypanel */ "./node_modules/primeng/overlaypanel.js");
/* harmony import */ var primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! primeng/checkbox */ "./node_modules/primeng/checkbox.js");
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(primeng_checkbox__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/messages.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_messages__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/message.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_message__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _modules_components_partner_table_partner_table_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/components/partner-table/partner-table.component */ "./client/app/modules/components/partner-table/partner-table.component.ts");
/* harmony import */ var _modules_components_partner_form_partner_form_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/components/partner-form/partner-form.component */ "./client/app/modules/components/partner-form/partner-form.component.ts");
/* harmony import */ var _modules_components_partner_substation_table_partner_substation_table_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/components/partner-substation-table/partner-substation-table.component */ "./client/app/modules/components/partner-substation-table/partner-substation-table.component.ts");
/* harmony import */ var _modules_components_partner_contact_table_partner_contact_table_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/components/partner-contact-table/partner-contact-table.component */ "./client/app/modules/components/partner-contact-table/partner-contact-table.component.ts");
/* harmony import */ var _modules_components_partner_address_table_partner_address_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/components/partner-address-table/partner-address-table.component */ "./client/app/modules/components/partner-address-table/partner-address-table.component.ts");
/* harmony import */ var _modules_components_measurement_table_measurement_table_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modules/components/measurement-table/measurement-table.component */ "./client/app/modules/components/measurement-table/measurement-table.component.ts");
/* harmony import */ var _modules_components_measurement_form_measurement_form_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/components/measurement-form/measurement-form.component */ "./client/app/modules/components/measurement-form/measurement-form.component.ts");
/* harmony import */ var _modules_components_device_measurement_form_device_measurement_form_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./modules/components/device-measurement-form/device-measurement-form.component */ "./client/app/modules/components/device-measurement-form/device-measurement-form.component.ts");
/* harmony import */ var _modules_components_device_metering_table_device_metering_table_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modules/components/device-metering-table/device-metering-table.component */ "./client/app/modules/components/device-metering-table/device-metering-table.component.ts");
/* harmony import */ var _modules_components_device_measurement_table_device_measurement_table_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modules/components/device-measurement-table/device-measurement-table.component */ "./client/app/modules/components/device-measurement-table/device-measurement-table.component.ts");
/* harmony import */ var _modules_pages_device_type_device_type_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modules/pages/device-type/device-type.component */ "./client/app/modules/pages/device-type/device-type.component.ts");
/* harmony import */ var _modules_components_device_type_table_device_type_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./modules/components/device-type-table/device-type-table.component */ "./client/app/modules/components/device-type-table/device-type-table.component.ts");
/* harmony import */ var _modules_components_device_type_form_device_type_form_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./modules/components/device-type-form/device-type-form.component */ "./client/app/modules/components/device-type-form/device-type-form.component.ts");
/* harmony import */ var _modules_components_global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./modules/components/global-setting/global-setting.component */ "./client/app/modules/components/global-setting/global-setting.component.ts");
/* harmony import */ var _modules_pages_virtual_substation_virtual_substation_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./modules/pages/virtual-substation/virtual-substation.component */ "./client/app/modules/pages/virtual-substation/virtual-substation.component.ts");
/* harmony import */ var _modules_components_virtual_substation_table_virtual_substation_table_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./modules/components/virtual-substation-table/virtual-substation-table.component */ "./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.ts");
/* harmony import */ var _modules_components_virtual_substation_form_virtual_substation_form_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./modules/components/virtual-substation-form/virtual-substation-form.component */ "./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.ts");
/* harmony import */ var _modules_components_physical_substation_form_physical_substation_form_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./modules/components/physical-substation-form/physical-substation-form.component */ "./client/app/modules/components/physical-substation-form/physical-substation-form.component.ts");























































function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}
var protectedResourceMap = [['https://graph.microsoft.com/v1.0/me', ['user.read']]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _modules_pages_substation_substation_component__WEBPACK_IMPORTED_MODULE_10__["SubstationComponent"],
                _modules_pages_partner_partner_component__WEBPACK_IMPORTED_MODULE_11__["PartnerComponent"],
                _modules_pages_measurements_measurements_component__WEBPACK_IMPORTED_MODULE_12__["MeasurementsComponent"],
                _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _modules_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["SidebarComponent"],
                _modules_components_substation_table_substation_table_component__WEBPACK_IMPORTED_MODULE_19__["SubstationTableComponent"],
                _modules_components_substation_form_substation_form_component__WEBPACK_IMPORTED_MODULE_20__["SubstationFormComponent"],
                _modules_components_bay_table_bay_table_component__WEBPACK_IMPORTED_MODULE_15__["BayTableComponent"],
                _modules_components_bay_form_bay_form_component__WEBPACK_IMPORTED_MODULE_16__["BayFormComponent"],
                _modules_components_device_table_device_table_component__WEBPACK_IMPORTED_MODULE_17__["DeviceTableComponent"],
                _modules_components_device_form_device_form_component__WEBPACK_IMPORTED_MODULE_18__["DeviceFormComponent"],
                _modules_components_partner_table_partner_table_component__WEBPACK_IMPORTED_MODULE_37__["PartnerTableComponent"],
                _modules_components_partner_form_partner_form_component__WEBPACK_IMPORTED_MODULE_38__["PartnerFormComponent"],
                _modules_components_partner_substation_table_partner_substation_table_component__WEBPACK_IMPORTED_MODULE_39__["PartnerSubstationTableComponent"],
                _modules_components_partner_contact_table_partner_contact_table_component__WEBPACK_IMPORTED_MODULE_40__["PartnerContactTableComponent"],
                _modules_components_partner_address_table_partner_address_table_component__WEBPACK_IMPORTED_MODULE_41__["PartnerAddressTableComponent"],
                _modules_components_measurement_table_measurement_table_component__WEBPACK_IMPORTED_MODULE_42__["MeasurementTableComponent"],
                _modules_components_measurement_form_measurement_form_component__WEBPACK_IMPORTED_MODULE_43__["MeasurementFormComponent"],
                _modules_components_device_measurement_form_device_measurement_form_component__WEBPACK_IMPORTED_MODULE_44__["DeviceMeasurementFormComponent"],
                _modules_components_device_metering_table_device_metering_table_component__WEBPACK_IMPORTED_MODULE_45__["DeviceMeteringTableComponent"],
                _modules_components_device_measurement_table_device_measurement_table_component__WEBPACK_IMPORTED_MODULE_46__["DeviceMeasurementTableComponent"],
                _modules_pages_device_type_device_type_component__WEBPACK_IMPORTED_MODULE_47__["DeviceTypeComponent"],
                _modules_components_device_type_table_device_type_table_component__WEBPACK_IMPORTED_MODULE_48__["DeviceTypeTableComponent"],
                _modules_components_device_type_form_device_type_form_component__WEBPACK_IMPORTED_MODULE_49__["DeviceTypeFormComponent"],
                _modules_components_global_setting_global_setting_component__WEBPACK_IMPORTED_MODULE_50__["GlobalSettingComponent"],
                _modules_pages_virtual_substation_virtual_substation_component__WEBPACK_IMPORTED_MODULE_51__["VirtualSubstationComponent"],
                _modules_components_virtual_substation_table_virtual_substation_table_component__WEBPACK_IMPORTED_MODULE_52__["VirtualSubstationTableComponent"],
                _modules_components_virtual_substation_form_virtual_substation_form_component__WEBPACK_IMPORTED_MODULE_53__["VirtualSubstationFormComponent"],
                _modules_components_physical_substation_form_physical_substation_form_component__WEBPACK_IMPORTED_MODULE_54__["PhysicalSubstationFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_23__["MenuModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_24__["TableModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_25__["ButtonModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_22__["BreadcrumbModule"],
                primeng_overlaypanel__WEBPACK_IMPORTED_MODULE_30__["OverlayPanelModule"],
                primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_26__["ConfirmDialogModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_27__["InputTextModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_28__["DropdownModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_29__["DialogModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_31__["MultiSelectModule"],
                primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_32__["TriStateCheckboxModule"],
                primeng_checkbox__WEBPACK_IMPORTED_MODULE_33__["CheckboxModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_34__["TooltipModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_35__["MessagesModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_36__["MessageModule"],
                _azure_msal_angular__WEBPACK_IMPORTED_MODULE_21__["MsalModule"].forRoot({
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
                    level: msal__WEBPACK_IMPORTED_MODULE_9__["LogLevel"].Info,
                    piiLoggingEnabled: true
                }),
            ],
            providers: [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_8__["HttpServiceHelper"] /*, {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }*/],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
    HttpServiceHelper.prototype.httpGetRequest = function (accessToken, url) {
        // https://stackoverflow.com/questions/45286764/angular-httpclient-doesnt-send-header
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.get(url, httpOptions);
    };
    HttpServiceHelper.prototype.httpFileDownload = function (accessToken, url) {
        var httpOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            },
        };
        return this.http.get(url, { responseType: 'arraybuffer', headers: httpOptions.headers });
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
    HttpServiceHelper.prototype.httpFileUploadRequest = function (accessToken, url, fileContent) {
        var httpOptions = {
            headers: {
                'Content-Type': 'text/plain',
                'Authorization': 'Bearer ' + accessToken
            }
        };
        return this.http.post(url, fileContent, httpOptions);
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

/***/ "./client/app/core/interfaces/address-role.ts":
/*!****************************************************!*\
  !*** ./client/app/core/interfaces/address-role.ts ***!
  \****************************************************/
/*! exports provided: AddressRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressRole", function() { return AddressRole; });
var AddressRole;
(function (AddressRole) {
    AddressRole["registered"] = "Registered Seat";
    AddressRole["seat"] = "Seat";
    AddressRole["other"] = "Other";
})(AddressRole || (AddressRole = {}));


/***/ }),

/***/ "./client/app/core/interfaces/ms-aggregation.ts":
/*!******************************************************!*\
  !*** ./client/app/core/interfaces/ms-aggregation.ts ***!
  \******************************************************/
/*! exports provided: MsAggregation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MsAggregation", function() { return MsAggregation; });
var MsAggregation;
(function (MsAggregation) {
    MsAggregation["none"] = "None";
    MsAggregation["sum"] = "Sum";
    MsAggregation["average"] = "Average";
})(MsAggregation || (MsAggregation = {}));


/***/ }),

/***/ "./client/app/core/interfaces/partner-role.ts":
/*!****************************************************!*\
  !*** ./client/app/core/interfaces/partner-role.ts ***!
  \****************************************************/
/*! exports provided: PartnerRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerRole", function() { return PartnerRole; });
var PartnerRole;
(function (PartnerRole) {
    PartnerRole["owner"] = "Owner";
    PartnerRole["primary"] = "PrimaryOperator";
    PartnerRole["secondary"] = "SecondaryOperator";
    PartnerRole["authority"] = "Authority";
    PartnerRole["tso"] = "TSO";
    PartnerRole["dso"] = "DSO";
})(PartnerRole || (PartnerRole = {}));


/***/ }),

/***/ "./client/app/core/interfaces/user-role.ts":
/*!*************************************************!*\
  !*** ./client/app/core/interfaces/user-role.ts ***!
  \*************************************************/
/*! exports provided: UserRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRole", function() { return UserRole; });
var UserRole;
(function (UserRole) {
    UserRole["manager"] = "Manager";
    UserRole["tech"] = "Technical Contact";
    UserRole["finance"] = "Financial Contact";
    UserRole["admin"] = "Administrative Contact";
})(UserRole || (UserRole = {}));


/***/ }),

/***/ "./client/app/core/interfaces/virtual-substation-role.ts":
/*!***************************************************************!*\
  !*** ./client/app/core/interfaces/virtual-substation-role.ts ***!
  \***************************************************************/
/*! exports provided: VirtualSubstationRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualSubstationRole", function() { return VirtualSubstationRole; });
var VirtualSubstationRole;
(function (VirtualSubstationRole) {
    VirtualSubstationRole["tech"] = "Technical";
    VirtualSubstationRole["other"] = "Other";
})(VirtualSubstationRole || (VirtualSubstationRole = {}));


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

/***/ "./client/app/core/services/bay-form.service.ts":
/*!******************************************************!*\
  !*** ./client/app/core/services/bay-form.service.ts ***!
  \******************************************************/
/*! exports provided: BayFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayFormService", function() { return BayFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BayFormService = /** @class */ (function () {
    function BayFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between Bay table and Bay form element
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param subMrId // Substation MrID
     * @param formValue //Selected form data
     */
    BayFormService.prototype.setBayFormInfo = function (formMode, subMrId, formValue) {
        this.subject.next({ type: formMode, subMrId: subMrId, value: formValue });
    };
    BayFormService.prototype.getBayFormInfo = function () {
        return this.subject.asObservable();
    };
    BayFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BayFormService);
    return BayFormService;
}());



/***/ }),

/***/ "./client/app/core/services/device-form.service.ts":
/*!*********************************************************!*\
  !*** ./client/app/core/services/device-form.service.ts ***!
  \*********************************************************/
/*! exports provided: DeviceFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceFormService", function() { return DeviceFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DeviceFormService = /** @class */ (function () {
    function DeviceFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between Bay table and Bay form element
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param bayMrId // Bay MrID
     * @param formValue //Selected form data
     */
    DeviceFormService.prototype.setDeviceFormInfo = function (formMode, bayMrId, formValue) {
        this.subject.next({ type: formMode, bayMrId: bayMrId, value: formValue });
    };
    DeviceFormService.prototype.getDeviceFormInfo = function () {
        return this.subject.asObservable();
    };
    DeviceFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DeviceFormService);
    return DeviceFormService;
}());



/***/ }),

/***/ "./client/app/core/services/device-ms-mt-form.service.ts":
/*!***************************************************************!*\
  !*** ./client/app/core/services/device-ms-mt-form.service.ts ***!
  \***************************************************************/
/*! exports provided: DeviceMsMtFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMsMtFormService", function() { return DeviceMsMtFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DeviceMsMtFormService = /** @class */ (function () {
    function DeviceMsMtFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between Device measurement/metering table and form element
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     * @param name // component Identifier
     * measurement=> service between device measurement and form
     * metering=> service between device metering and form
     */
    DeviceMsMtFormService.prototype.setDeviceMsMtFormInfo = function (formMode, formValue, name) {
        this.subject.next({ type: formMode, value: formValue, name: name });
    };
    DeviceMsMtFormService.prototype.getDeviceMsMtFormInfo = function () {
        return this.subject.asObservable();
    };
    DeviceMsMtFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DeviceMsMtFormService);
    return DeviceMsMtFormService;
}());



/***/ }),

/***/ "./client/app/core/services/device-type-form.service.ts":
/*!**************************************************************!*\
  !*** ./client/app/core/services/device-type-form.service.ts ***!
  \**************************************************************/
/*! exports provided: DeviceTypeFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTypeFormService", function() { return DeviceTypeFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DeviceTypeFormService = /** @class */ (function () {
    function DeviceTypeFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between substation table and device type form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
    DeviceTypeFormService.prototype.setDeviceTypeFormInfo = function (formMode, formValue, showMode) {
        this.subject.next({ type: formMode, value: formValue, showMode: showMode });
    };
    DeviceTypeFormService.prototype.getDeviceTypeFormInfo = function () {
        return this.subject.asObservable();
    };
    DeviceTypeFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DeviceTypeFormService);
    return DeviceTypeFormService;
}());



/***/ }),

/***/ "./client/app/core/services/expanding-bay.service.ts":
/*!***********************************************************!*\
  !*** ./client/app/core/services/expanding-bay.service.ts ***!
  \***********************************************************/
/*! exports provided: ExpandingBayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandingBayService", function() { return ExpandingBayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ExpandingBayService = /** @class */ (function () {
    function ExpandingBayService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for expanding Bay table
     * @param mode // true=> Expanding , false=>Collapse
     * @param substationId //Parent Substation Id
     */
    ExpandingBayService.prototype.setBayStatus = function (mode, substationId) {
        this.subject.next({ mode: mode, substationId: substationId });
    };
    ExpandingBayService.prototype.getBayStatusInfo = function () {
        return this.subject.asObservable();
    };
    ExpandingBayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExpandingBayService);
    return ExpandingBayService;
}());



/***/ }),

/***/ "./client/app/core/services/expanding-device.service.ts":
/*!**************************************************************!*\
  !*** ./client/app/core/services/expanding-device.service.ts ***!
  \**************************************************************/
/*! exports provided: ExpandingDeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandingDeviceService", function() { return ExpandingDeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ExpandingDeviceService = /** @class */ (function () {
    function ExpandingDeviceService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating Device table
     * @param mode // true=> Expanding , false=>Collapse
     * @param bayId //Parent Bay Id
     */
    ExpandingDeviceService.prototype.setDeviceStatus = function (mode, bayId) {
        this.subject.next({ mode: mode, bayId: bayId });
    };
    ExpandingDeviceService.prototype.getDeviceStatusInfo = function () {
        return this.subject.asObservable();
    };
    ExpandingDeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExpandingDeviceService);
    return ExpandingDeviceService;
}());



/***/ }),

/***/ "./client/app/core/services/expanding-ms-mt.service.ts":
/*!*************************************************************!*\
  !*** ./client/app/core/services/expanding-ms-mt.service.ts ***!
  \*************************************************************/
/*! exports provided: ExpandingMsMtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandingMsMtService", function() { return ExpandingMsMtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ExpandingMsMtService = /** @class */ (function () {
    function ExpandingMsMtService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for expanding Device Measurement table
     * @param mode // true=> Expanding , false=>Collapse
     * @param id //Parent Device Id
     * @param name //Component Identifier .. measurement/metering
     */
    ExpandingMsMtService.prototype.setDeviceMsMtStatus = function (mode, id, name) {
        this.subject.next({ mode: mode, id: id, name: name });
    };
    ExpandingMsMtService.prototype.getDeviceMsMtStatusInfo = function () {
        return this.subject.asObservable();
    };
    ExpandingMsMtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExpandingMsMtService);
    return ExpandingMsMtService;
}());



/***/ }),

/***/ "./client/app/core/services/expanding-partner-children.service.ts":
/*!************************************************************************!*\
  !*** ./client/app/core/services/expanding-partner-children.service.ts ***!
  \************************************************************************/
/*! exports provided: ExpandingPartnerChildrenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandingPartnerChildrenService", function() { return ExpandingPartnerChildrenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ExpandingPartnerChildrenService = /** @class */ (function () {
    function ExpandingPartnerChildrenService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for expanding Contact table
     * @param mode // true=> Expanding , false=>Collapse
     * @param data //parent => children
     * @param name //component name [contacts, addresses, substations]
     */
    ExpandingPartnerChildrenService.prototype.setPartnerChildrenStatus = function (mode, data, name) {
        this.subject.next({ mode: mode, data: data, name: name });
    };
    ExpandingPartnerChildrenService.prototype.getPartnerChildrenInfo = function () {
        return this.subject.asObservable();
    };
    ExpandingPartnerChildrenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ExpandingPartnerChildrenService);
    return ExpandingPartnerChildrenService;
}());



/***/ }),

/***/ "./client/app/core/services/measurement-form.service.ts":
/*!**************************************************************!*\
  !*** ./client/app/core/services/measurement-form.service.ts ***!
  \**************************************************************/
/*! exports provided: MeasurementFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementFormService", function() { return MeasurementFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MeasurementFormService = /** @class */ (function () {
    function MeasurementFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between substation table and measurement form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
    MeasurementFormService.prototype.setMeasurementFormInfo = function (formMode, formValue, showMode) {
        this.subject.next({ type: formMode, value: formValue, showMode: showMode });
    };
    MeasurementFormService.prototype.getMeasurementFormInfo = function () {
        return this.subject.asObservable();
    };
    MeasurementFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MeasurementFormService);
    return MeasurementFormService;
}());



/***/ }),

/***/ "./client/app/core/services/metering-form.service.ts":
/*!***********************************************************!*\
  !*** ./client/app/core/services/metering-form.service.ts ***!
  \***********************************************************/
/*! exports provided: MeteringFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeteringFormService", function() { return MeteringFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var MeteringFormService = /** @class */ (function () {
    function MeteringFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between substation table and measurement form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
    MeteringFormService.prototype.setMeteringFormInfo = function (formMode, formValue, showMode, devId) {
        this.subject.next({ type: formMode, value: formValue, showMode: showMode, deviceId: devId });
    };
    MeteringFormService.prototype.getMeteringFormInfo = function () {
        return this.subject.asObservable();
    };
    MeteringFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], MeteringFormService);
    return MeteringFormService;
}());



/***/ }),

/***/ "./client/app/core/services/navigation.service.ts":
/*!********************************************************!*\
  !*** ./client/app/core/services/navigation.service.ts ***!
  \********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating substation table
     * @param elem // Navigation element, [sub-list, sub-form, bay-list, bay-form, dev-list, dev-form]
     * @param st // true => show, false =>hide
     * @param name // element id
     */
    NavigationService.prototype.setNavInfo = function (elem, st, name) {
        this.subject.next({ elem: elem, st: st, name: name });
    };
    NavigationService.prototype.getNavInfo = function () {
        return this.subject.asObservable();
    };
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./client/app/core/services/partner-form.service.ts":
/*!**********************************************************!*\
  !*** ./client/app/core/services/partner-form.service.ts ***!
  \**********************************************************/
/*! exports provided: PartnerFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerFormService", function() { return PartnerFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var PartnerFormService = /** @class */ (function () {
    function PartnerFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between partner table and partner form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
    PartnerFormService.prototype.setPartnerFormInfo = function (formMode, formValue, showMode) {
        this.subject.next({ type: formMode, value: formValue, showMode: showMode });
    };
    PartnerFormService.prototype.getPartnerFormInfo = function () {
        return this.subject.asObservable();
    };
    PartnerFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], PartnerFormService);
    return PartnerFormService;
}());



/***/ }),

/***/ "./client/app/core/services/read-icd.service.ts":
/*!******************************************************!*\
  !*** ./client/app/core/services/read-icd.service.ts ***!
  \******************************************************/
/*! exports provided: ReadIcdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadIcdService", function() { return ReadIcdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ReadIcdService = /** @class */ (function () {
    function ReadIcdService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between Bay form and child component
     * @param bayId // Bay MrID
     */
    ReadIcdService.prototype.setBayInfo = function (bayId) {
        this.subject.next({ bayId: bayId });
    };
    ReadIcdService.prototype.getBayInfo = function () {
        return this.subject.asObservable();
    };
    ReadIcdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ReadIcdService);
    return ReadIcdService;
}());



/***/ }),

/***/ "./client/app/core/services/scroll-moving.service.ts":
/*!***********************************************************!*\
  !*** ./client/app/core/services/scroll-moving.service.ts ***!
  \***********************************************************/
/*! exports provided: ScrollMovingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollMovingService", function() { return ScrollMovingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ScrollMovingService = /** @class */ (function () {
    function ScrollMovingService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notify Scroll Movement
     * @param direction // true=> left - > right, falseL right->left;
     * @param elem // HTML element
     */
    ScrollMovingService.prototype.setMovedScroll = function (direction, elem) {
        this.subject.next({ direction: direction, elem: elem });
    };
    ScrollMovingService.prototype.getMovedScroll = function () {
        return this.subject.asObservable();
    };
    ScrollMovingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ScrollMovingService);
    return ScrollMovingService;
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

/***/ "./client/app/core/services/sub-form.service.ts":
/*!******************************************************!*\
  !*** ./client/app/core/services/sub-form.service.ts ***!
  \******************************************************/
/*! exports provided: SubFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubFormService", function() { return SubFormService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SubFormService = /** @class */ (function () {
    function SubFormService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Communication between substation table and substation form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
    SubFormService.prototype.setSubFormInfo = function (formMode, formValue, showMode) {
        this.subject.next({ type: formMode, value: formValue, showMode: showMode });
    };
    SubFormService.prototype.getSubFormInfo = function () {
        return this.subject.asObservable();
    };
    SubFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SubFormService);
    return SubFormService;
}());



/***/ }),

/***/ "./client/app/core/services/update-bay.service.ts":
/*!********************************************************!*\
  !*** ./client/app/core/services/update-bay.service.ts ***!
  \********************************************************/
/*! exports provided: UpdateBayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBayService", function() { return UpdateBayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateBayService = /** @class */ (function () {
    function UpdateBayService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating Bay table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Bay mrid
     * @param newBay //New Bay Data
     */
    UpdateBayService.prototype.setBayInfo = function (mode, mrid, newBay) {
        this.subject.next({ mode: mode, mrid: mrid, newBay: newBay });
    };
    UpdateBayService.prototype.getBayInfo = function () {
        return this.subject.asObservable();
    };
    UpdateBayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateBayService);
    return UpdateBayService;
}());



/***/ }),

/***/ "./client/app/core/services/update-device-ms-mr.service.ts":
/*!*****************************************************************!*\
  !*** ./client/app/core/services/update-device-ms-mr.service.ts ***!
  \*****************************************************************/
/*! exports provided: UpdateDeviceMsMrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeviceMsMrService", function() { return UpdateDeviceMsMrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateDeviceMsMrService = /** @class */ (function () {
    function UpdateDeviceMsMrService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating device measurement/metering table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param id //Old item id
     * @param newItem //New Item Data
     * @param name //Component Identifier , measurement/metering
     */
    UpdateDeviceMsMrService.prototype.setDeviceMsMrInfo = function (mode, id, newItem, name) {
        this.subject.next({ mode: mode, id: id, newItem: newItem, name: name });
    };
    UpdateDeviceMsMrService.prototype.getDeviceMsMrInfo = function () {
        return this.subject.asObservable();
    };
    UpdateDeviceMsMrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateDeviceMsMrService);
    return UpdateDeviceMsMrService;
}());



/***/ }),

/***/ "./client/app/core/services/update-device-type.service.ts":
/*!****************************************************************!*\
  !*** ./client/app/core/services/update-device-type.service.ts ***!
  \****************************************************************/
/*! exports provided: UpdateDeviceTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeviceTypeService", function() { return UpdateDeviceTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateDeviceTypeService = /** @class */ (function () {
    function UpdateDeviceTypeService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating device type table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Device Type mrid
     * @param newDeviceType //New Device Type Data
     */
    UpdateDeviceTypeService.prototype.setDeviceTypeInfo = function (mode, mrid, newDeviceType) {
        this.subject.next({ mode: mode, mrid: mrid, newDeviceType: newDeviceType });
    };
    UpdateDeviceTypeService.prototype.getDeviceTypeInfo = function () {
        return this.subject.asObservable();
    };
    UpdateDeviceTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateDeviceTypeService);
    return UpdateDeviceTypeService;
}());



/***/ }),

/***/ "./client/app/core/services/update-device.service.ts":
/*!***********************************************************!*\
  !*** ./client/app/core/services/update-device.service.ts ***!
  \***********************************************************/
/*! exports provided: UpdateDeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDeviceService", function() { return UpdateDeviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateDeviceService = /** @class */ (function () {
    function UpdateDeviceService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating Device table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Device mrid
     * @param newDevice //New Device Data
     */
    UpdateDeviceService.prototype.setDeviceInfo = function (mode, mrid, newDevice) {
        this.subject.next({ mode: mode, mrid: mrid, newDevice: newDevice });
    };
    UpdateDeviceService.prototype.getDeviceInfo = function () {
        return this.subject.asObservable();
    };
    UpdateDeviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateDeviceService);
    return UpdateDeviceService;
}());



/***/ }),

/***/ "./client/app/core/services/update-measurement-type.service.ts":
/*!*********************************************************************!*\
  !*** ./client/app/core/services/update-measurement-type.service.ts ***!
  \*********************************************************************/
/*! exports provided: UpdateMeasurementTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMeasurementTypeService", function() { return UpdateMeasurementTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateMeasurementTypeService = /** @class */ (function () {
    function UpdateMeasurementTypeService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating measurement table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param id //Old Measurement id
     * @param newMsType //New Measurement Data
     */
    UpdateMeasurementTypeService.prototype.setMeasurementInfo = function (mode, id, newMsType) {
        this.subject.next({ mode: mode, id: id, newMsType: newMsType });
    };
    UpdateMeasurementTypeService.prototype.getMeasurementTypeInfo = function () {
        return this.subject.asObservable();
    };
    UpdateMeasurementTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateMeasurementTypeService);
    return UpdateMeasurementTypeService;
}());



/***/ }),

/***/ "./client/app/core/services/update-metering-type.service.ts":
/*!******************************************************************!*\
  !*** ./client/app/core/services/update-metering-type.service.ts ***!
  \******************************************************************/
/*! exports provided: UpdateMeteringTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateMeteringTypeService", function() { return UpdateMeteringTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateMeteringTypeService = /** @class */ (function () {
    function UpdateMeteringTypeService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating device metering table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param id //Old Measurement id
     * @param newMtType //New Metering Data
     */
    UpdateMeteringTypeService.prototype.setMeteringInfo = function (mode, id, newMtType) {
        this.subject.next({ mode: mode, id: id, newMtType: newMtType });
    };
    UpdateMeteringTypeService.prototype.getMeteringTypeInfo = function () {
        return this.subject.asObservable();
    };
    UpdateMeteringTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateMeteringTypeService);
    return UpdateMeteringTypeService;
}());



/***/ }),

/***/ "./client/app/core/services/update-partner.service.ts":
/*!************************************************************!*\
  !*** ./client/app/core/services/update-partner.service.ts ***!
  \************************************************************/
/*! exports provided: UpdatePartnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePartnerService", function() { return UpdatePartnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdatePartnerService = /** @class */ (function () {
    function UpdatePartnerService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating Partner table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Partner mrid
     * @param newPartner //New Partner Data
     */
    UpdatePartnerService.prototype.setPartnerInfo = function (mode, mrid, newPartner) {
        this.subject.next({ mode: mode, mrid: mrid, newPartner: newPartner });
    };
    UpdatePartnerService.prototype.getPartnerInfo = function () {
        return this.subject.asObservable();
    };
    UpdatePartnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdatePartnerService);
    return UpdatePartnerService;
}());



/***/ }),

/***/ "./client/app/core/services/update-substation.service.ts":
/*!***************************************************************!*\
  !*** ./client/app/core/services/update-substation.service.ts ***!
  \***************************************************************/
/*! exports provided: UpdateSubstationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSubstationService", function() { return UpdateSubstationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var UpdateSubstationService = /** @class */ (function () {
    function UpdateSubstationService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Notification service for updating substation table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Substation mrid
     * @param newSub //New Substation Data
     */
    UpdateSubstationService.prototype.setSubstationInfo = function (mode, mrid, newSub) {
        this.subject.next({ mode: mode, mrid: mrid, newSub: newSub });
    };
    UpdateSubstationService.prototype.getSubstationInfo = function () {
        return this.subject.asObservable();
    };
    UpdateSubstationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UpdateSubstationService);
    return UpdateSubstationService;
}());



/***/ }),

/***/ "./client/app/modules/components/bay-form/bay-form.component.css":
/*!***********************************************************************!*\
  !*** ./client/app/modules/components/bay-form/bay-form.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9iYXktZm9ybS9iYXktZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./client/app/modules/components/bay-form/bay-form.component.html":
/*!************************************************************************!*\
  !*** ./client/app/modules/components/bay-form/bay-form.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bay-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"bay-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Bay Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-3\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                    </button>\n                </div>\n                <div class=\"ui-g-9\">\n                    <button type=\"button\" class=\"btn btn-success op-btn-details\" (click)=\"onDevicesTable()\"\n                            *ngIf=\"!formMode\">Devices\n                    </button>\n                    <button type=\"button\" pButton\n                            class=\"op-btn-details\"\n                            icon=\"fa {{isReadingICD?'fa-spinner fa-spin':'fa-upload'}}\"\n                            (click)=\"onReadICD()\"\n                            label=\"Read ICD\"\n                            *ngIf=\"!formMode\">\n                    </button>\n                    <input type=\"file\" hidden\n                           id=\"file\" accept='text/plain,.icd'\n                           (change)=\"handleFileInput($event.target.files)\">\n                    <button type=\"button\" pButton\n                            icon = \"fa fa-download\"\n                            class=\"op-btn-details\"\n                            label=\"Generate PLC\"\n                            (click)=\"onGeneratePLC()\"\n                            *ngIf=\"!formMode\">\n                    </button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"mrid\">MrID</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(mrID.trim().length == 0)}\"\n                                   (ngModelChange)=\"mrIDChange($event)\"\n                                   [ngModel]=\"mrID\" id=\"mrid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"nameChange($event)\"\n                                   [ngClass]=\"{'mg-error':(mrID.trim().length == 0)}\"\n                                   [ngModel]=\"name\" id=\"name\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <input name=\"description\" class=\"form-control\" (ngModelChange)=\"descriptionChange($event)\"\n                                   [ngModel]=\"description\" id=\"description\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Location</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"latitude\">Latitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"latitudeChange($event)\"\n                                   [ngModel]=\"latitude\" id=\"latitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"longitude\">Longitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"longitudeChange($event)\"\n                                   [ngModel]=\"longitude\" id=\"longitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"altitude\">Altitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"altitudeChange($event)\"\n                                   [ngModel]=\"altitude\" id=\"altitude\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/bay-form/bay-form.component.ts":
/*!**********************************************************************!*\
  !*** ./client/app/modules/components/bay-form/bay-form.component.ts ***!
  \**********************************************************************/
/*! exports provided: BayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayFormComponent", function() { return BayFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_bay_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/bay-form.service */ "./client/app/core/services/bay-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_bay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-bay.service */ "./client/app/core/services/update-bay.service.ts");
/* harmony import */ var _core_services_expanding_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/expanding-device.service */ "./client/app/core/services/expanding-device.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _core_services_read_icd_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/read-icd.service */ "./client/app/core/services/read-icd.service.ts");










var BayFormComponent = /** @class */ (function () {
    function BayFormComponent(httpService, bayFormService, scrollService, updateBayService, expandDeviceService, navService, readIcdService, confirmationService) {
        this.httpService = httpService;
        this.bayFormService = bayFormService;
        this.scrollService = scrollService;
        this.updateBayService = updateBayService;
        this.expandDeviceService = expandDeviceService;
        this.navService = navService;
        this.readIcdService = readIcdService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.formMode = true;
        this.isEnabled = false;
        this.isReadingICD = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/bays";
    }
    BayFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bayFormService.getBayFormInfo().subscribe(function (bayFormInfo) {
            _this.isEnabled = true;
            _this.formData = bayFormInfo.value;
            _this.substationMrID = bayFormInfo.subMrId;
            _this.formMode = bayFormInfo.type;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.setBayDetails();
        });
    };
    BayFormComponent.prototype.setBayDetails = function () {
        this.substationMrID = this.formData.substationmrid;
        this.mrID = this.formData.mrid;
        this.description = this.formData.description;
        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;
        this.name = this.formData.name;
        this.isFormChanged = false;
    };
    BayFormComponent.prototype.initFormFields = function () {
        this.mrID = this.description = this.name = '';
        this.latitude = this.longitude = this.altitude = 0;
    };
    BayFormComponent.prototype.initFormData = function () {
        this.formData = {
            substationmrid: this.substationMrID,
            mrid: '',
            name: '',
            location: { latitude: 0, longitude: 0, altitude: 0 },
            description: '',
        };
    };
    BayFormComponent.prototype.onDevicesTable = function () {
        var self = this;
        this.navService.setNavInfo('dev-list', true, this.name);
        setTimeout(function () {
            self.expandDeviceService.setDeviceStatus(true, self.formData.mrid);
            self.scrollService.setMovedScroll(true, 'device-list');
        }, 100);
    };
    BayFormComponent.prototype.saveBlobData = function (data, fileName) {
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var blob = new Blob([data], { type: "octet/stream" }), url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    BayFormComponent.prototype.onGeneratePLC = function () {
        var _this = this;
        // window.location.href = `${config.client_info.apiURL.serverURL}/generateplc/${this.formData.mrid}`;
        var apiurl = config.client_info.apiURL.serverURL + "/generateplc/" + this.formData.mrid;
        this.httpService.httpFileDownload(this.accessToken, apiurl).subscribe(function (resp) {
            _this.saveBlobData(resp, 'generated.plc');
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    BayFormComponent.prototype.handleFileInput = function (files) {
        var self = this;
        var readICDURL = config.client_info.apiURL.serverURL + "/readicd/" + this.formData.mrid;
        var fileBody = files.item(0);
        var reader = new FileReader();
        this.isReadingICD = true;
        reader.onload = function () {
            var fileContent = reader.result;
            self.httpService.httpFileUploadRequest(self.accessToken, readICDURL, fileContent).subscribe(function (resBody) {
                console.log('Read ICD Successfully');
                self.isReadingICD = false;
                var fileTag;
                fileTag = document.getElementById('file');
                fileTag.value = '';
                self.readIcdService.setBayInfo(self.formData.mrid);
            }, function (error) {
                self.httpErrorHandler(error);
                self.isReadingICD = false;
            });
        };
        reader.readAsText(fileBody);
    };
    BayFormComponent.prototype.onReadICD = function () {
        document.getElementById('file').click();
    };
    BayFormComponent.prototype.httpErrorHandler = function (ev) {
        switch (ev.status) {
            case 400:
                var msgbody = void 0;
                for (var prop in ev.error) {
                    if (ev.error.hasOwnProperty(prop)) {
                        msgbody += prop + " : " + ev.error[prop] + "\n";
                    }
                }
                msgbody += '\n';
                alert(msgbody);
                break;
            default:
                alert(ev.error);
        }
        console.error(ev);
    };
    BayFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var url = config.client_info.apiURL.serverURL;
            var postBody_1 = {
                substationmrid: this.substationMrID,
                mrid: this.mrID,
                name: this.name,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                description: this.description,
            };
            if (this.formMode) { //Add mode
                var addBayURL = this.apiURL + '?substationId=' + this.substationMrID;
                this.httpService.httpPostRequest(this.accessToken, addBayURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.updateBayService.setBayInfo(true, null, postBody_1);
                    _this.initFormData();
                    _this.initFormFields();
                    _this.isFormChanged = false;
                    console.log('Success in add substation', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in add substation', err);
                });
            }
            else { //Edit mode
                var bayUpdateURL = this.apiURL + '/' + this.formData.mrid + '?substationId=' + this.substationMrID;
                this.httpService.httpPutRequest(this.accessToken, bayUpdateURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updateBayService.setBayInfo(false, _this.formData.mrid, postBody_1);
                    _this.formData = postBody_1;
                    _this.isFormChanged = false;
                    console.log('Success in update substations', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in update substations', err);
                });
            }
        }
    };
    BayFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    BayFormComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('bay-list', true, this.formData.substationmrid);
        this.scrollService.setMovedScroll(true, '');
        this.initFormData();
        this.initFormFields();
    };
    BayFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    BayFormComponent.prototype.checkValidation = function () {
        if (this.mrID.trim() == "") {
            return false;
        }
        if (this.name.trim() == "") {
            return false;
        }
        return true;
    };
    BayFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.name != this.formData.name ||
            this.description != this.formData.description);
    };
    BayFormComponent.prototype.mrIDChange = function (newVal) {
        this.mrID = newVal;
        this.checkFormChange();
    };
    BayFormComponent.prototype.descriptionChange = function (newVal) {
        this.description = newVal;
        this.checkFormChange();
    };
    BayFormComponent.prototype.nameChange = function (newVal) {
        this.name = newVal;
        this.checkFormChange();
    };
    BayFormComponent.prototype.latitudeChange = function (newVal) {
        this.latitude = newVal;
        this.checkFormChange();
    };
    BayFormComponent.prototype.longitudeChange = function (newVal) {
        this.longitude = newVal;
        this.checkFormChange();
    };
    BayFormComponent.prototype.altitudeChange = function (newVal) {
        this.altitude = newVal;
        this.checkFormChange();
    };
    BayFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bay-form',
            template: __webpack_require__(/*! ./bay-form.component.html */ "./client/app/modules/components/bay-form/bay-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./bay-form.component.css */ "./client/app/modules/components/bay-form/bay-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_bay_form_service__WEBPACK_IMPORTED_MODULE_3__["BayFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_update_bay_service__WEBPACK_IMPORTED_MODULE_5__["UpdateBayService"],
            _core_services_expanding_device_service__WEBPACK_IMPORTED_MODULE_6__["ExpandingDeviceService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"],
            _core_services_read_icd_service__WEBPACK_IMPORTED_MODULE_9__["ReadIcdService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_8__["ConfirmationService"]])
    ], BayFormComponent);
    return BayFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/bay-table/bay-table.component.css":
/*!*************************************************************************!*\
  !*** ./client/app/modules/components/bay-table/bay-table.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bay-list {\r\n    width: 1200px;\r\n}\r\n.bay-list:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    right: -20px;\r\n    width: 20px;\r\n    height: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2JheS10YWJsZS9iYXktdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2JheS10YWJsZS9iYXktdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXktbGlzdCB7XHJcbiAgICB3aWR0aDogMTIwMHB4O1xyXG59XHJcbi5iYXktbGlzdDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/bay-table/bay-table.component.html":
/*!**************************************************************************!*\
  !*** ./client/app/modules/components/bay-table/bay-table.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bay-list card mg-app-component\" *ngIf=\"isEnabled\" id=\"{{tableId}}\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Bays</h4>\n            <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                            <tr>\n                                <th>Visible</th>\n                                <th>Column</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let baycol of bayCols\">\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"baycol.visibility && curSelColsCnt == 1\"\n                                                (onChange)=\"onChangeVisibility(baycol)\"\n                                                [(ngModel)]=\"baycol.visibility\">\n                                </p-checkbox></td>\n                                <td>{{baycol.header}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <button class=\"btn btn-danger delete-item\"\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewBay()\">+ Add New</button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"bays\"\n                 [paginator]=\"true\" [rows]=\"10\"\n                 [totalRecords]=\"bays.length\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 [resizableColumns]=\"true\"\n                 columnResizeMode=\"expand\"\n                 (onColResize) = \"onColResize($event)\"\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"mg-item-checkbox\">\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                    </th>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let baycol of bayCols\"\n                        [ngClass]=\"{'mg-hide': !baycol.visibility}\"\n                        [pSortableColumn]=\" (baycol.group != '')? baycol.group + '.' + baycol.field: baycol.field\" pResizableColumn>\n                        {{baycol.header}}\n                        <p-sortIcon [field]=\"baycol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th></th>\n                    <th *ngFor=\"let baycol of bayCols\"\n                        [ngClass]=\"{'mg-hide':!baycol.visibility}\"\n                        [ngSwitch]=\"baycol.field\" >\n                        <input *ngSwitchCase=\"baycol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, baycol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-bay>\n                <tr>\n                    <td>\n                        <p-tableCheckbox [value]=\"bay\"></p-tableCheckbox>\n                    </td>\n                    <td *ngFor=\"let baycol of bayCols\"  (click)=\"editBay(bay)\"\n                        [ngClass]=\"{'mg-hide':!baycol.visibility}\">\n                        {{ (baycol.group != '')? bay[baycol.group][baycol.field]: bay[baycol.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/bay-table/bay-table.component.ts":
/*!************************************************************************!*\
  !*** ./client/app/modules/components/bay-table/bay-table.component.ts ***!
  \************************************************************************/
/*! exports provided: BayTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayTableComponent", function() { return BayTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_bay_form_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/bay-form.service */ "./client/app/core/services/bay-form.service.ts");
/* harmony import */ var _core_services_update_bay_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-bay.service */ "./client/app/core/services/update-bay.service.ts");
/* harmony import */ var _core_services_expanding_bay_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/expanding-bay.service */ "./client/app/core/services/expanding-bay.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");











var BayTableComponent = /** @class */ (function () {
    function BayTableComponent(bayFormService, httpService, scrollService, updateBayService, expandBayService, settingService, navService, confirmationService) {
        this.bayFormService = bayFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.updateBayService = updateBayService;
        this.expandBayService = expandBayService;
        this.settingService = settingService;
        this.navService = navService;
        this.confirmationService = confirmationService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.isEnabled = false;
        this.substationId = '';
        this.bays = [];
        this.isHideFilter = false;
        this.selectedRows = [];
        this.apiURL = config.client_info.apiURL.serverURL + "/bays";
        this.tableId = 'bay-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.bayCols = [
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'name', header: 'Name', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'latitude', header: 'Location.Lat', group: 'location' },
            { field: 'longitude', header: 'Location.Lon', group: 'location' },
            { field: 'altitude', header: 'Location.Alt', group: 'location' },
        ];
    }
    BayTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.expandBayService.getBayStatusInfo().subscribe(function (bayStatus) {
            _this.isEnabled = bayStatus.mode;
            _this.substationId = bayStatus.substationId;
            _this.getBays();
        });
        this.updateBayService.getBayInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                console.log(updateInfo.newBay);
                _this.bays.push(updateInfo.newBay);
            }
            else {
                for (var i = 0; i < _this.bays.length; i++) {
                    if (_this.bays[i].mrid == updateInfo.mrid) {
                        _this.bays[i] = updateInfo.newBay;
                    }
                }
            }
        });
        this.initTableSetting();
    };
    BayTableComponent.prototype.getBays = function () {
        var _this = this;
        var bayIdList = [];
        var promiseList = [];
        var getBayURL = config.client_info.apiURL.serverURL + "/substations/" + this.substationId + "/bays";
        this.httpService.httpGetRequest(this.accessToken, getBayURL)
            .subscribe(function (res) {
            bayIdList = res;
            for (var i = 0; i < bayIdList.length; i++) {
                var bayDetailURL = _this.apiURL + '/' + bayIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, bayDetailURL));
            }
            if (bayIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.bays = results;
                    _this.contentLoaded = true;
                    console.log('Success in bay listing', res);
                }, function (err) {
                    console.error("Can't get Bay Details", err);
                    _this.bays = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.warn('Empty Bay List');
                _this.bays = [];
                _this.contentLoaded = true;
            }
        }, function (err) {
            _this.bays = [];
            _this.contentLoaded = true;
            console.error('Error in bays listing', err);
        });
    };
    BayTableComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    BayTableComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('sub-form', true, this.substationId);
        this.scrollService.setMovedScroll(true, '');
        this.bays = [];
    };
    BayTableComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    BayTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var bayIds = [];
        var promiseList = [];
        this.contentLoaded = false;
        for (var i = 0; i < this.selectedRows.length; i++) {
            bayIds.push(this.selectedRows[i].mrid);
            var deleteBayURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, deleteBayURL));
        }
        if (bayIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftBays = [];
                for (var i = 0; i < _this.bays.length; i++) {
                    if (bayIds.indexOf(_this.bays[i].mrid) < 0) {
                        leftBays.push(_this.bays[i]);
                    }
                }
                _this.bays = leftBays;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, function (err) {
                _this.bays = [];
                _this.contentLoaded = true;
                console.error("Can't delete bay list", err);
            });
        }
        else {
            console.warn('No Selected Bays');
        }
    };
    BayTableComponent.prototype.editBay = function (bay) {
        var self = this;
        this.navService.setNavInfo('bay-form', true, bay.mrid);
        setTimeout(function () {
            self.bayFormService.setBayFormInfo(false, self.substationId, bay);
            self.scrollService.setMovedScroll(true, 'bay-form');
        }, 100);
    };
    BayTableComponent.prototype.onAddNewBay = function () {
        var self = this;
        this.navService.setNavInfo('bay-form', true, '');
        setTimeout(function () {
            self.bayFormService.setBayFormInfo(true, self.substationId, null);
            self.scrollService.setMovedScroll(true, 'bay-form');
        }, 100);
    };
    BayTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    BayTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    BayTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    // ====================================================
    BayTableComponent.prototype.initTableSetting = function () {
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
                'MrId', 'Name', 'Description',
                'Location.Lat', 'Location.Lon', 'Location.Alt',
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.bayCols = this.checkColVisibility(this.bayCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    BayTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    BayTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    BayTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    BayTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    BayTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    BayTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bay-table',
            template: __webpack_require__(/*! ./bay-table.component.html */ "./client/app/modules/components/bay-table/bay-table.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./bay-table.component.css */ "./client/app/modules/components/bay-table/bay-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_bay_form_service__WEBPACK_IMPORTED_MODULE_4__["BayFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__["ScrollMovingService"],
            _core_services_update_bay_service__WEBPACK_IMPORTED_MODULE_5__["UpdateBayService"],
            _core_services_expanding_bay_service__WEBPACK_IMPORTED_MODULE_6__["ExpandingBayService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_10__["SettingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]])
    ], BayTableComponent);
    return BayTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-form/device-form.component.css":
/*!*****************************************************************************!*\
  !*** ./client/app/modules/components/device-form/device-form.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".op-btn-details {\r\n    margin-right: 10px;\r\n}\r\n.mg-op-form {\r\n    width: 760px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS1mb3JtL2RldmljZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvZGV2aWNlLWZvcm0vZGV2aWNlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vcC1idG4tZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLm1nLW9wLWZvcm0ge1xyXG4gICAgd2lkdGg6IDc2MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/device-form/device-form.component.html":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/device-form/device-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dev-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"dev-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Device Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"dev-form-btn btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                    </button>\n                </div>\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" *ngIf=\"!formMode\"\n                            class=\"op-btn-details btn btn-success\" (click)=\"onMeasurements()\">Measurements</button>\n                    <button type=\"button\" *ngIf=\"!formMode\"\n                            class=\"op-btn-details btn btn-success\" (click)=\"onMeterings()\">Meterings</button>\n                </div>\n                <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"mrid\">MrID</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(mrID.trim().length == 0)}\"\n                                   (ngModelChange)=\"mrIDChange($event)\"\n                                   [ngModel]=\"mrID\" id=\"mrid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"nameChange($event)\"\n                                   [ngClass]=\"{'mg-error':(name.trim().length == 0)}\"\n                                   [ngModel]=\"name\" id=\"name\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <input name=\"description\" class=\"form-control\" (ngModelChange)=\"descriptionChange($event)\"\n                                   [ngModel]=\"description\" id=\"description\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Location</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"latitude\">Latitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"latitudeChange($event)\"\n                                   [ngModel]=\"latitude\" id=\"latitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"longitude\">Longitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"longitudeChange($event)\"\n                                   [ngModel]=\"longitude\" id=\"longitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"altitude\">Altitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"altitudeChange($event)\"\n                                   [ngModel]=\"altitude\" id=\"altitude\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Device Type</h5>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <p>MrID : {{selectedDeviceTypeRow.mrid}}</p>\n                        <p>Vendor : {{selectedDeviceTypeRow.vendor}}</p>\n                        <p>SerNum : {{selectedDeviceTypeRow.serNum}}</p>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <p>HwRev : {{selectedDeviceTypeRow.hwRev}}</p>\n                        <p>SwRev : {{selectedDeviceTypeRow.swRev}}</p>\n                        <p>Model : {{selectedDeviceTypeRow.model}}</p>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <p>Owner : {{selectedDeviceTypeRow.owner}}</p>\n                        <p>PrimeOps : {{selectedDeviceTypeRow.primeOps}}</p>\n                        <p>SecondOps : {{selectedDeviceTypeRow.secondOps}}</p>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <button type=\"button\" class=\"btn btn-info mg-show-popup-tbl\" (click)=\"onShowDeviceTypesDialog()\">\n                            <i class=\"fa fa-ellipsis-h\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Iec61850</h5>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <p-table #dt sortMode=\"multiple\"\n                                 [value]=\"iecList\"\n                                 [paginator]=\"true\" [rows]=\"5\"\n                                 [totalRecords]=\"iecList.length\"\n                                 selectionMode=\"multiple\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th *ngFor=\"let ieccol of iecCols\" [pSortableColumn]=\"ieccol.field\">\n                                        {{ieccol.header}}\n                                        <p-sortIcon [field]=\"ieccol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width:4em\"></th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-iec>\n                                <tr>\n                                    <td pEditableColumn *ngFor=\"let ieccol of iecCols\">\n                                        <p-cellEditor>\n                                            <ng-template pTemplate=\"input\">\n                                                <input pInputText type=\"text\"\n                                                       [(ngModel)]=\"iec[ieccol.field]\"\n                                                       (blur)=\"onContactEditComplete(iec)\"\n                                                       (keydown.tab)=\"onContactEditComplete(iec)\"\n                                                       (keydown.enter)=\"onContactEditComplete(iec)\">\n                                            </ng-template>\n                                            <ng-template pTemplate=\"output\">\n                                                {{iec[ieccol.field]}}\n                                            </ng-template>\n                                        </p-cellEditor>\n                                    </td>\n                                    <td>\n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onDeleteIec61850(iec)\"></button>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"summary\" let-iec>\n                                <div style=\"text-align:left\">\n                                    <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"onShowAddDialog()\" label=\"Add\"></button>\n                                </div>\n                            </ng-template>\n                        </p-table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n    <p-dialog header=\"Contact Details\" [(visible)]=\"displayAddModal\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <div class=\"form-group\">\n                    <label for=\"newIec61850\">Iec61850</label>\n                    <input [ngModel]=\"newIec.iec61850\"\n                           [ngClass]=\"{'mg-error':(newIec.iec61850.trim().length == 0)}\"\n                           (ngModelChange)=\"newIec61850Change($event)\"\n                           type=\"text\" class=\"form-control\" id=\"newIec61850\">\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-12\">\n                <div class=\"form-group\">\n                    <label for=\"nIecvalue\">Value</label>\n                    <input [ngModel]=\"newIec.value\"\n                           [ngClass]=\"{'mg-error':(newIec.value.trim().length == 0)}\"\n                           (ngModelChange)=\"newIecValueChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nIecvalue\">\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscard()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddRow()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n    <p-dialog header=\"Device Types\" [width]=\"1400\"\n              [(visible)]=\"displayDeviceTypeModal\" [responsive]=\"true\" [modal]=\"true\">\n        <div class=\"ui-g\">\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isDeviceHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isDeviceHideFilter, 'btn-secondary':isDeviceHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n        </div>\n        <div class=\"ui-g\">\n            <p-table #dt sortMode=\"multiple\"\n                     [value]=\"deviceTypes\"\n                     [paginator]=\"true\" [rows]=\"5\"\n                     [totalRecords]=\"deviceTypes.length\"\n                     [(selection)]=\"selectedDeviceTypeRow\"\n                     selectionMode=\"single\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th *ngFor=\"let devicetypecol of deviceTypeCols\" [pSortableColumn]=\"devicetypecol.field\">\n                            {{devicetypecol.header}}\n                            <p-sortIcon [field]=\"devicetypecol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                        </th>\n                    </tr>\n                    <tr [ngClass]=\"{'mg-hide':isDeviceHideFilter}\">\n                        <th *ngFor=\"let devicetypecol of deviceTypeCols\" [ngSwitch]=\"devicetypecol.field\">\n                            <input *ngSwitchCase=\"devicetypecol.field\" pInputText type=\"text\"\n                                   (input)=\"dt.filter($event.target.value, devicetypecol.field, devicetypecol.filterMatchMode)\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-devicetype>\n                    <tr [pSelectableRow]=\"devicetype\">\n                        <td *ngFor=\"let devicetypecol of deviceTypeCols\">\n                            {{devicetype[devicetypecol.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscardDeviceType()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onSelectDeviceType()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-form/device-form.component.ts":
/*!****************************************************************************!*\
  !*** ./client/app/modules/components/device-form/device-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeviceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceFormComponent", function() { return DeviceFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_device_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/device-form.service */ "./client/app/core/services/device-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-device.service */ "./client/app/core/services/update-device.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _core_services_expanding_ms_mt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/expanding-ms-mt.service */ "./client/app/core/services/expanding-ms-mt.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var DeviceFormComponent = /** @class */ (function () {
    function DeviceFormComponent(httpService, deviceFormService, scrollService, navService, updateDeviceService, confirmationService, expandMsMtService) {
        this.httpService = httpService;
        this.deviceFormService = deviceFormService;
        this.scrollService = scrollService;
        this.navService = navService;
        this.updateDeviceService = updateDeviceService;
        this.confirmationService = confirmationService;
        this.expandMsMtService = expandMsMtService;
        this.isFormChanged = false;
        this.formMode = true;
        this.isEnabled = false;
        this.displayAddModal = false;
        this.displayDeviceTypeModal = false;
        this.isDeviceHideFilter = false;
        this.devicetypemrid = '';
        this.iecCols = [
            { field: 'iec61850', header: 'Iec61850' },
            { field: 'value', header: 'Value' },
        ];
        this.newIec = { iec61850: '', value: '' };
        this.selectedDeviceTypeRow = { mrid: '', vendor: '', hwRev: '', swRev: '', serNum: '', model: '', owner: '', primeOps: '', secondOps: '' };
        this.deviceTypeCols = [
            { field: 'mrid', header: 'MrID', group: '' },
            { field: 'vendor', header: 'Vendor', group: '' },
            { field: 'swRev', header: 'SwRev', group: '' },
            { field: 'hwRev', header: 'HwRev', group: '' },
            { field: 'serNum', header: 'SerNum', group: '' },
            { field: 'model', header: 'Model', group: '' },
            { field: 'owner', header: 'Owner', group: '' },
            { field: 'primeOps', header: 'PrimeOps', group: '' },
            { field: 'secondOps', header: 'SecondOps', group: '' },
        ];
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/devices";
    }
    DeviceFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceFormService.getDeviceFormInfo().subscribe(function (deviceFormInfo) {
            _this.isEnabled = true;
            _this.formData = deviceFormInfo.value;
            _this.bayMrID = deviceFormInfo.bayMrId;
            _this.formMode = deviceFormInfo.type;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.setDeviceDetails();
        });
    };
    DeviceFormComponent.prototype.setDeviceDetails = function () {
        this.bayMrID = this.formData.baymrid;
        this.mrID = this.formData.mrid;
        this.name = this.formData.name;
        this.description = this.formData.description;
        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;
        this.iecList = JSON.parse(JSON.stringify(this.formData.iec61850)); //Array copy
        this.devicetypemrid = this.formData.devicetypemrid;
        this.selectedDeviceTypeRow = { mrid: '', vendor: '', hwRev: '', swRev: '', serNum: '', model: '', owner: '', primeOps: '', secondOps: '' };
        this.deviceTypes = [];
        this.isFormChanged = false;
        this.getDeviceTypes();
    };
    DeviceFormComponent.prototype.initFormFields = function () {
        this.mrID = this.description = this.name = '';
        this.latitude = this.longitude = this.altitude = 0;
        this.devicetypemrid = '';
        this.iecList = [];
    };
    DeviceFormComponent.prototype.initFormData = function () {
        this.formData = {
            baymrid: this.bayMrID,
            mrid: '',
            name: '',
            location: { latitude: 0, longitude: 0, altitude: 0 },
            description: '',
            devicetypemrid: '',
            iec61850: []
        };
    };
    DeviceFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var postBody_1 = {
                baymrid: this.bayMrID,
                mrid: this.mrID,
                name: this.name,
                description: this.description,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                devicetypemrid: this.devicetypemrid,
                iec61850: this.iecList
            };
            if (this.formMode) { //Add mode
                var devAddURL = this.apiURL + '?bayId=' + this.bayMrID;
                this.httpService.httpPostRequest(this.accessToken, devAddURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.iecList = [];
                    _this.updateDeviceService.setDeviceInfo(true, null, postBody_1);
                    _this.initFormData();
                    _this.initFormFields();
                    _this.isFormChanged = false;
                    console.log('Success in add devices', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    _this.initFormFields();
                    _this.initFormData();
                    console.log('Error in add devices', err);
                });
            }
            else { //Edit mode
                var devEditURL = this.apiURL + '/' + this.formData.mrid;
                devEditURL += '?bayId=' + this.bayMrID;
                this.httpService.httpPutRequest(this.accessToken, devEditURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updateDeviceService.setDeviceInfo(false, _this.formData.mrid, postBody_1);
                    _this.formData = postBody_1;
                    _this.iecList = JSON.parse(JSON.stringify(_this.formData.iec61850));
                    _this.isFormChanged = false;
                    console.log('Success in update devices', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in update devices', err);
                });
            }
        }
    };
    DeviceFormComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('dev-list', true, this.formData.mrid);
        this.scrollService.setMovedScroll(true, '');
        this.initFormData();
        this.initFormFields();
    };
    DeviceFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isFormChanged) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    DeviceFormComponent.prototype.checkValidation = function () {
        if (this.mrID.trim() == "") {
            return false;
        }
        if (this.name.trim() == "") {
            return false;
        }
        return true;
    };
    DeviceFormComponent.prototype.compareContacts = function (x, y) {
        return (x.iec61850 == y.iec61850 &&
            x.value == y.value);
    };
    DeviceFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.name != this.formData.name ||
            this.devicetypemrid != this.formData.devicetypemrid ||
            this.iecList.length != this.formData.iec61850.length);
        var sameObjCnt = 0;
        var formIec61850 = this.formData.iec61850;
        for (var i = 0; i < this.iecList.length; i++) {
            for (var j = 0; j < formIec61850.length; j++) {
                if (this.compareContacts(this.iecList[i], formIec61850[j])) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.iecList.length);
    };
    DeviceFormComponent.prototype.onMeasurements = function () {
        var self = this;
        this.navService.setNavInfo('dev-ms-list', true, 'dev-ms-list');
        setTimeout(function () {
            self.expandMsMtService.setDeviceMsMtStatus(true, self.formData.mrid, 'measurement');
            self.scrollService.setMovedScroll(true, 'dev-ms-list');
        }, 100);
    };
    DeviceFormComponent.prototype.onMeterings = function () {
        var self = this;
        this.navService.setNavInfo('dev-mt-list', true, 'dev-mt-list');
        setTimeout(function () {
            self.expandMsMtService.setDeviceMsMtStatus(true, self.formData.mrid, 'metering');
            self.scrollService.setMovedScroll(true, 'dev-mt-list');
        }, 100);
    };
    DeviceFormComponent.prototype.mrIDChange = function (newVal) {
        this.mrID = newVal;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.descriptionChange = function (newVal) {
        this.description = newVal;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.nameChange = function (newVal) {
        this.name = newVal;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.latitudeChange = function (newVal) {
        this.latitude = newVal;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.longitudeChange = function (newVal) {
        this.longitude = newVal;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.altitudeChange = function (newVal) {
        this.altitude = newVal;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.newIec61850Change = function (newVal) {
        this.newIec.iec61850 = newVal;
    };
    DeviceFormComponent.prototype.newIecValueChange = function (newVal) {
        this.newIec.value = newVal;
    };
    DeviceFormComponent.prototype.onShowAddDialog = function () {
        this.displayAddModal = true;
        this.newIec = { iec61850: '', value: '' };
    };
    DeviceFormComponent.prototype.onDiscard = function () {
        this.displayAddModal = false;
    };
    DeviceFormComponent.prototype.onAddRow = function () {
        if (this.newIec.iec61850.trim() == "" || this.newIec.value.trim() == "")
            return;
        this.iecList.push(this.newIec);
        this.displayAddModal = false;
        this.newIec = { iec61850: '', value: '' };
        this.isFormChanged = true;
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.onContactEditComplete = function (newVal) {
        this.checkFormChange();
    };
    DeviceFormComponent.prototype.onDeleteIec61850 = function (iec61850) {
        var indexof = this.iecList.indexOf(iec61850);
        if (indexof > -1) {
            this.iecList.splice(indexof, 1);
        }
        this.checkFormChange();
    };
    /////////////////////////////////////////////////////////////////////////////////////
    DeviceFormComponent.prototype.onShowDeviceTypesDialog = function () {
        this.displayDeviceTypeModal = true;
    };
    DeviceFormComponent.prototype.onDiscardDeviceType = function () {
        this.displayDeviceTypeModal = false;
    };
    DeviceFormComponent.prototype.onSelectDeviceType = function () {
        if (this.selectedDeviceTypeRow && this.selectedDeviceTypeRow.mrid) {
            this.displayDeviceTypeModal = false;
            this.devicetypemrid = this.selectedDeviceTypeRow.mrid;
            this.isFormChanged = true;
            this.checkFormChange();
        }
    };
    DeviceFormComponent.prototype.getDeviceTypes = function () {
        var _this = this;
        var deviceTypeIdList = [];
        var promiseList = [];
        var deviceTypeBaseURL = config.client_info.apiURL.serverURL + "/devicetypes";
        this.httpService.httpGetRequest(this.accessToken, deviceTypeBaseURL).subscribe(function (res) {
            deviceTypeIdList = res;
            for (var i = 0; i < deviceTypeIdList.length; i++) {
                var deviceTypeDetailURL = deviceTypeBaseURL + '/' + deviceTypeIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, deviceTypeDetailURL));
            }
            if (deviceTypeIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.deviceTypes = results;
                    for (var j = 0; j < results.length; j++) {
                        if (results[j].mrid == _this.devicetypemrid) {
                            _this.selectedDeviceTypeRow = results[j];
                        }
                    }
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get device type list", err);
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Empty device type list");
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get device type list", error);
            _this.contentLoaded = true;
        });
    };
    DeviceFormComponent.prototype.onChangeFilter = function () {
        this.isDeviceHideFilter = !this.isDeviceHideFilter;
    };
    DeviceFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-form',
            template: __webpack_require__(/*! ./device-form.component.html */ "./client/app/modules/components/device-form/device-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./device-form.component.css */ "./client/app/modules/components/device-form/device-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_device_form_service__WEBPACK_IMPORTED_MODULE_3__["DeviceFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"],
            _core_services_update_device_service__WEBPACK_IMPORTED_MODULE_5__["UpdateDeviceService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_7__["ConfirmationService"],
            _core_services_expanding_ms_mt_service__WEBPACK_IMPORTED_MODULE_8__["ExpandingMsMtService"]])
    ], DeviceFormComponent);
    return DeviceFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-measurement-form/device-measurement-form.component.css":
/*!*****************************************************************************************************!*\
  !*** ./client/app/modules/components/device-measurement-form/device-measurement-form.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dev-ms-form {\r\n    width: 360px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS1tZWFzdXJlbWVudC1mb3JtL2RldmljZS1tZWFzdXJlbWVudC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS1tZWFzdXJlbWVudC1mb3JtL2RldmljZS1tZWFzdXJlbWVudC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2LW1zLWZvcm0ge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/device-measurement-form/device-measurement-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./client/app/modules/components/device-measurement-form/device-measurement-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dev-ms-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"dev-ms-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Measurement Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                    </button>\n                </div>\n            </div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Measurement</h5>\n                    </div>\n                    <div class=\"ui-g-9\">\n                        <p>Id : {{selectedMsTypeRow.id}}</p>\n                        <p>Name : {{selectedMsTypeRow.name}}</p>\n                        <p>Description : {{selectedMsTypeRow.description}}</p>\n                        <p>Unit : {{selectedMsTypeRow.unit}}</p>\n                        <p>Multiplier : {{selectedMsTypeRow.multiplier}}</p>\n                        <p>Format : {{selectedMsTypeRow.format}}</p>\n                        <p>Aggregation : {{selectedMsTypeRow.aggregation}}</p>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <button type=\"button\" class=\"form-control btn btn-info\" (click)=\"onShowMsTypesDialog()\">\n                            <i class=\"fa fa-ellipsis-h\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Iec61850Path</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"iec61850pathChange($event)\"\n                                   [ngClass]=\"{'mg-error':(iec61850path.trim().length == 0)}\"\n                                   [ngModel]=\"iec61850path\" id=\"name\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n    <p-dialog header=\"Measurements\" #dialog [width]=\"1000\"\n              [(visible)]=\"displayMsTypesModal\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n        <div class=\"ui-g\">\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n        </div>\n        <div class=\"ui-g\">\n            <p-table #dt sortMode=\"multiple\"\n                     [value]=\"measurements\"\n                     [paginator]=\"true\" [rows]=\"5\"\n                     [totalRecords]=\"measurements.length\"\n                     [(selection)]=\"selectedMsTypeRow\"\n                     selectionMode=\"single\"\n                     (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                     (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th *ngFor=\"let measurementcol of measurementCols\"\n                            [pSortableColumn]=\"measurementcol.field\">\n                            {{measurementcol.header}}\n                            <p-sortIcon [field]=\"measurementcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                        </th>\n                    </tr>\n                    <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                        <th *ngFor=\"let measurementcol of measurementCols\" [ngSwitch]=\"measurementcol.field\">\n                            <input *ngSwitchCase=\"measurementcol.field\" pInputText type=\"text\"\n                                   (input)=\"dt.filter($event.target.value, measurementcol.field, measurementcol.filterMatchMode)\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-measurement>\n                    <tr [pSelectableRow]=\"measurement\">\n                        <td *ngFor=\"let measurementcol of measurementCols\">\n                            {{ (measurement[measurementcol.field])?measurement[measurementcol.field]:'None'}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscardMsType()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddRowMsType()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-measurement-form/device-measurement-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./client/app/modules/components/device-measurement-form/device-measurement-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DeviceMeasurementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMeasurementFormComponent", function() { return DeviceMeasurementFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_device_ms_mt_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/device-ms-mt-form.service */ "./client/app/core/services/device-ms-mt-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_device_ms_mr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-device-ms-mr.service */ "./client/app/core/services/update-device-ms-mr.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");










var DeviceMeasurementFormComponent = /** @class */ (function () {
    function DeviceMeasurementFormComponent(devMsMtFormService, scrollService, updateDevMsMrService, navService, settingService, httpService, confirmationService) {
        this.devMsMtFormService = devMsMtFormService;
        this.scrollService = scrollService;
        this.updateDevMsMrService = updateDevMsMrService;
        this.navService = navService;
        this.settingService = settingService;
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.contentLoaded = false;
        this.displayMsTypesModal = false;
        this.formMode = true;
        this.isEnabled = false;
        this.isHideFilter = false;
        this.measurementCols = [
            { field: 'id', header: 'ID' },
            { field: 'name', header: 'Name' },
            { field: 'description', header: 'Description' },
            { field: 'unit', header: 'Unit' },
            { field: 'multiplier', header: 'Multiplier' },
            { field: 'format', header: 'Format' },
            { field: 'aggregation', header: 'Aggregation' },
        ];
        this.selectedMsTypeRow = { id: '', name: '', description: '', unit: '', multiplier: '', enumeration: null, format: '', aggregation: 'None' };
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.measurements = [];
        this.initFormFields();
    }
    DeviceMeasurementFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.devMsMtFormService.getDeviceMsMtFormInfo().subscribe(function (formInfo) {
            if (formInfo.name == 'measurement') {
                _this.isEnabled = true;
                _this.formData = formInfo.value;
                _this.formMode = formInfo.type;
                if (_this.formMode) { //Add Mode
                    _this.initFormData();
                }
                _this.setFormDetails();
            }
        });
    };
    DeviceMeasurementFormComponent.prototype.setFormDetails = function () {
        this.measurementId = this.formData.measurementId;
        this.iec61850path = this.formData.iec61850path;
        this.isFormChanged = false;
        this.selectedMsTypeRow = { id: '', name: '', description: '', unit: '', multiplier: '', enumeration: null, format: '', aggregation: 'None' };
        this.getMeasurements();
    };
    DeviceMeasurementFormComponent.prototype.initFormFields = function () {
        this.measurementId = this.iec61850path = '';
    };
    DeviceMeasurementFormComponent.prototype.initFormData = function () {
        this.formData = {
            measurementId: '',
            iec61850path: '',
        };
    };
    DeviceMeasurementFormComponent.prototype.onSaveFormData = function () {
        if (this.checkValidation()) {
            var postBody = {
                measurementId: this.measurementId,
                iec61850path: this.iec61850path,
            };
            if (this.formMode) { //Add mode
                this.updateDevMsMrService.setDeviceMsMrInfo(true, null, postBody, 'measurement');
                this.initFormData();
                this.initFormFields();
                this.selectedMsTypeRow = { id: '', name: '', description: '', unit: '', multiplier: '', enumeration: null, format: '', aggregation: 'None' };
            }
            else { //Edit mode
                this.updateDevMsMrService.setDeviceMsMrInfo(false, this.formData.measurementId, postBody, 'measurement');
            }
            this.formData = postBody;
            this.isFormChanged = false;
            console.log('Success in update substations', postBody);
        }
    };
    DeviceMeasurementFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    DeviceMeasurementFormComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('dev-ms-form', false, this.formData.measurementId);
        this.scrollService.setMovedScroll(true, '');
        this.initFormData();
        this.initFormFields();
    };
    DeviceMeasurementFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    DeviceMeasurementFormComponent.prototype.checkValidation = function () {
        return (this.iec61850path.trim() != "" && this.measurementId.trim() != "");
    };
    DeviceMeasurementFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.measurementId != this.formData.measurementId ||
            this.iec61850path != this.formData.iec61850path);
    };
    DeviceMeasurementFormComponent.prototype.measurementIDChange = function (newVal) {
        this.measurementId = newVal;
        this.checkFormChange();
    };
    DeviceMeasurementFormComponent.prototype.iec61850pathChange = function (newVal) {
        this.iec61850path = newVal;
        this.checkFormChange();
    };
    DeviceMeasurementFormComponent.prototype.onShowMsTypesDialog = function () {
        this.displayMsTypesModal = true;
    };
    DeviceMeasurementFormComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedMsTypeRow);
        if (!this.selectedMsTypeRow.aggregation) {
            this.selectedMsTypeRow.aggregation = 'None';
        }
    };
    DeviceMeasurementFormComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedMsTypeRow);
    };
    DeviceMeasurementFormComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedMsTypeRow);
        }
        else {
            // alert('all rows diselected');
        }
    };
    DeviceMeasurementFormComponent.prototype.getMeasurements = function () {
        var _this = this;
        var msTypeIdList = [];
        var promiseList = [];
        var apiURL = config.client_info.apiURL.serverURL + "/measurements";
        this.httpService.httpGetRequest(this.accessToken, apiURL).subscribe(function (res) {
            msTypeIdList = res;
            for (var i = 0; i < msTypeIdList.length; i++) {
                var subDetailURL = apiURL + '/' + msTypeIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, subDetailURL));
            }
            if (msTypeIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.measurements = results;
                    for (var j = 0; j < results.length; j++) {
                        if (results[j].id == _this.measurementId) {
                            _this.selectedMsTypeRow = results[j];
                        }
                    }
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get substation list", err);
                    _this.measurements = [];
                    _this.selectedMsTypeRow = { id: '', name: '', description: '', unit: '', multiplier: '', enumeration: null, format: '', aggregation: 'None' };
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get substation list");
                _this.measurements = [];
                _this.selectedMsTypeRow = { id: '', name: '', description: '', unit: '', multiplier: '', enumeration: null, format: '', aggregation: 'None' };
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get measurement list", error);
            _this.measurements = [];
            _this.selectedMsTypeRow = { id: '', name: '', description: '', unit: '', multiplier: '', enumeration: null, format: '', aggregation: 'None' };
            _this.contentLoaded = true;
        });
    };
    DeviceMeasurementFormComponent.prototype.onDiscardMsType = function () {
        this.displayMsTypesModal = false;
    };
    DeviceMeasurementFormComponent.prototype.onAddRowMsType = function () {
        if (this.selectedMsTypeRow && this.selectedMsTypeRow.id) {
            this.displayMsTypesModal = false;
            this.measurementId = this.selectedMsTypeRow.id;
            this.checkFormChange();
        }
    };
    DeviceMeasurementFormComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
    };
    DeviceMeasurementFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-measurement-form',
            template: __webpack_require__(/*! ./device-measurement-form.component.html */ "./client/app/modules/components/device-measurement-form/device-measurement-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./device-measurement-form.component.css */ "./client/app/modules/components/device-measurement-form/device-measurement-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_device_ms_mt_form_service__WEBPACK_IMPORTED_MODULE_3__["DeviceMsMtFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_update_device_ms_mr_service__WEBPACK_IMPORTED_MODULE_5__["UpdateDeviceMsMrService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_8__["HttpServiceHelper"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], DeviceMeasurementFormComponent);
    return DeviceMeasurementFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-measurement-table/device-measurement-table.component.css":
/*!*******************************************************************************************************!*\
  !*** ./client/app/modules/components/device-measurement-table/device-measurement-table.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dev-ms-list {\r\n    width: 480px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS1tZWFzdXJlbWVudC10YWJsZS9kZXZpY2UtbWVhc3VyZW1lbnQtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvZGV2aWNlLW1lYXN1cmVtZW50LXRhYmxlL2RldmljZS1tZWFzdXJlbWVudC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldi1tcy1saXN0IHtcclxuICAgIHdpZHRoOiA0ODBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/device-measurement-table/device-measurement-table.component.html":
/*!********************************************************************************************************!*\
  !*** ./client/app/modules/components/device-measurement-table/device-measurement-table.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dev-ms-list card mg-app-component\" *ngIf=\"isEnabled\" id=\"{{tableId}}\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Device Measurement</h4>\n            <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                            <tr>\n                                <th>Visible</th>\n                                <th>Column</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let devmscol of devMsCols\">\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"devmscol.visibility && curSelColsCnt == 1\"\n                                                (onChange)=\"onChangeVisibility(devmscol)\"\n                                                [(ngModel)]=\"devmscol.visibility\">\n                                </p-checkbox></td>\n                                <td>{{devmscol.header}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <button class=\"btn btn-danger delete-item\"\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewRow()\">+ Add New</button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"measurements\"\n                 [paginator]=\"true\" [rows]=\"10\"\n                 [totalRecords]=\"measurements.length\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 [resizableColumns]=\"true\"\n                 columnResizeMode=\"expand\"\n                 (onColResize) = \"onColResize($event)\"\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"mg-item-checkbox\">\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                    </th>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let devmscol of devMsCols\"\n                        [ngClass]=\"{'mg-hide': !devmscol.visibility}\"\n                        [pSortableColumn]=\"devmscol.field\">\n                        {{devmscol.header}}\n                        <p-sortIcon [field]=\"devmscol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th></th>\n                    <th *ngFor=\"let devmscol of devMsCols\"\n                        [ngClass]=\"{'mg-hide':!devmscol.visibility}\"\n                        [ngSwitch]=\"devmscol.field\" >\n                        <input *ngSwitchCase=\"devmscol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, devmscol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-devms>\n                <tr>\n                    <td>\n                        <p-tableCheckbox [value]=\"devms\"></p-tableCheckbox>\n                    </td>\n                    <td *ngFor=\"let devmscol of devMsCols\"  (click)=\"editRow(devms)\"\n                        [ngClass]=\"{'mg-hide':!devmscol.visibility}\">\n                        {{ (devmscol.group != '')? devms[devmscol.group][devmscol.field]: devms[devmscol.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-measurement-table/device-measurement-table.component.ts":
/*!******************************************************************************************************!*\
  !*** ./client/app/modules/components/device-measurement-table/device-measurement-table.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: DeviceMeasurementTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMeasurementTableComponent", function() { return DeviceMeasurementTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_device_ms_mr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/update-device-ms-mr.service */ "./client/app/core/services/update-device-ms-mr.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_device_ms_mt_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/device-ms-mt-form.service */ "./client/app/core/services/device-ms-mt-form.service.ts");
/* harmony import */ var _core_services_expanding_ms_mt_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/expanding-ms-mt.service */ "./client/app/core/services/expanding-ms-mt.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");










var DeviceMeasurementTableComponent = /** @class */ (function () {
    function DeviceMeasurementTableComponent(deviceMsMtFormService, httpService, scrollService, updateDevMsMrService, expandMsMtService, navService, settingService, confirmationService) {
        this.deviceMsMtFormService = deviceMsMtFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.updateDevMsMrService = updateDevMsMrService;
        this.expandMsMtService = expandMsMtService;
        this.navService = navService;
        this.settingService = settingService;
        this.confirmationService = confirmationService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.isEnabled = false;
        this.deviceId = '';
        this.measurements = [];
        this.isHideFilter = false;
        this.tableId = 'dev-ms-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.selectedRows = [];
        this.devMsCols = [
            { field: 'measurementId', header: 'MrId', group: '' },
            { field: 'iec61850path', header: 'Name', group: '' },
        ];
    }
    DeviceMeasurementTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.expandMsMtService.getDeviceMsMtStatusInfo().subscribe(function (serviceInfo) {
            if (serviceInfo.name == 'measurement') {
                _this.isEnabled = serviceInfo.mode;
                _this.deviceId = serviceInfo.id;
                _this.getTableContent();
            }
        });
        this.updateDevMsMrService.getDeviceMsMrInfo().subscribe(function (updateInfo) {
            if (updateInfo.name == 'measurement') {
                var tmpDevMsList = void 0;
                tmpDevMsList = JSON.parse(JSON.stringify(_this.measurements));
                if (updateInfo.mode) {
                    console.log(updateInfo.newItem);
                    tmpDevMsList.push(updateInfo.newItem);
                }
                else {
                    for (var i = 0; i < tmpDevMsList.length; i++) {
                        if (tmpDevMsList[i].measurementId == updateInfo.id) {
                            tmpDevMsList[i] = updateInfo.newItem;
                            break;
                        }
                    }
                }
                _this.updateTableContent(tmpDevMsList);
            }
        });
        this.apiURL = config.client_info.apiURL.serverURL + "/measurements";
    };
    DeviceMeasurementTableComponent.prototype.getTableContent = function () {
        var _this = this;
        var getDevMsURL = config.client_info.apiURL.serverURL + "/devices/" + this.deviceId + "/measurements";
        this.httpService.httpGetRequest(this.accessToken, getDevMsURL)
            .subscribe(function (res) {
            _this.measurements = res;
            _this.contentLoaded = true;
        }, function (err) {
            _this.measurements = [];
            _this.contentLoaded = true;
            console.error('Error in measurements updating', err);
        });
    };
    DeviceMeasurementTableComponent.prototype.updateTableContent = function (updateBody) {
        var _this = this;
        this.contentLoaded = false;
        var getDevMsURL = config.client_info.apiURL.serverURL + "/devices/" + this.deviceId + "/measurements";
        this.httpService.httpPutRequest(this.accessToken, getDevMsURL, updateBody)
            .subscribe(function (res) {
            _this.measurements = updateBody;
            _this.contentLoaded = true;
        }, function (err) {
            _this.measurements = [];
            _this.contentLoaded = true;
            console.error('Error in measurements listing', err);
        });
    };
    DeviceMeasurementTableComponent.prototype.onAddNewRow = function () {
        var self = this;
        this.navService.setNavInfo('dev-ms-form', true, '');
        setTimeout(function () {
            self.deviceMsMtFormService.setDeviceMsMtFormInfo(true, null, 'measurement');
            self.scrollService.setMovedScroll(true, 'dev-ms-form');
        }, 100);
    };
    DeviceMeasurementTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var unSelectedRows;
        unSelectedRows = [];
        for (var i = 0; i < this.measurements.length; i++) {
            var sameSt = false;
            for (var j = 0; j < this.selectedRows.length; j++) {
                if (this.measurements[i].measurementId == this.selectedRows[j].measurementId &&
                    this.measurements[i].iec61850path == this.selectedRows[j].iec61850path) {
                    sameSt = true;
                }
                if (!sameSt) {
                    unSelectedRows.push(this.measurements[i]);
                }
            }
        }
        var deviceMsTypeURL = config.client_info.apiURL.serverURL + "/devices/" + this.deviceId + "/measurements";
        this.httpService.httpPutRequest(this.accessToken, deviceMsTypeURL, unSelectedRows).subscribe(function (res) {
            _this.measurements = unSelectedRows;
            _this.selectedRows = [];
        }, function (err) {
            _this.measurements = [];
            _this.selectedRows = [];
        });
    };
    DeviceMeasurementTableComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    DeviceMeasurementTableComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('dev-ms-list', false, this.deviceId);
        this.scrollService.setMovedScroll(true, '');
        this.measurements = [];
    };
    DeviceMeasurementTableComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    DeviceMeasurementTableComponent.prototype.editRow = function (devms) {
        var self = this;
        this.navService.setNavInfo('dev-ms-form', true, devms.measurementId);
        setTimeout(function () {
            self.deviceMsMtFormService.setDeviceMsMtFormInfo(false, devms, 'measurement');
            self.scrollService.setMovedScroll(true, 'dev-ms-form');
        }, 100);
    };
    DeviceMeasurementTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    DeviceMeasurementTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    DeviceMeasurementTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    DeviceMeasurementTableComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = ['MrId', 'Name'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.devMsCols = this.checkColVisibility(this.devMsCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    DeviceMeasurementTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    DeviceMeasurementTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    DeviceMeasurementTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    DeviceMeasurementTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    DeviceMeasurementTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    DeviceMeasurementTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-measurement-table',
            template: __webpack_require__(/*! ./device-measurement-table.component.html */ "./client/app/modules/components/device-measurement-table/device-measurement-table.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./device-measurement-table.component.css */ "./client/app/modules/components/device-measurement-table/device-measurement-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_device_ms_mt_form_service__WEBPACK_IMPORTED_MODULE_7__["DeviceMsMtFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__["ScrollMovingService"],
            _core_services_update_device_ms_mr_service__WEBPACK_IMPORTED_MODULE_4__["UpdateDeviceMsMrService"],
            _core_services_expanding_ms_mt_service__WEBPACK_IMPORTED_MODULE_8__["ExpandingMsMtService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], DeviceMeasurementTableComponent);
    return DeviceMeasurementTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-metering-table/device-metering-table.component.css":
/*!*************************************************************************************************!*\
  !*** ./client/app/modules/components/device-metering-table/device-metering-table.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dev-mr-btn {\r\n    margin-right: 5px;\r\n}\r\n\r\n#dev-mr-list {\r\n    width: 1200px;\r\n}\r\n\r\n.mr-edit-item {\r\n    text-align: left;\r\n    font-weight: normal;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS1tZXRlcmluZy10YWJsZS9kZXZpY2UtbWV0ZXJpbmctdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS1tZXRlcmluZy10YWJsZS9kZXZpY2UtbWV0ZXJpbmctdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXYtbXItYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4jZGV2LW1yLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEyMDBweDtcclxufVxyXG5cclxuLm1yLWVkaXQtaXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/device-metering-table/device-metering-table.component.html":
/*!**************************************************************************************************!*\
  !*** ./client/app/modules/components/device-metering-table/device-metering-table.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dev-mr-list mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"{{tableId}}\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Device Meterings</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <div class=\"dropdown mg-dropdown-area\" >\n                        <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                        <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                                pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                                (click)=\"isShowSetting = !isShowSetting\">\n                            <i class=\"fa fa-cog\"></i>\n                        </button>\n                        <button type=\"button\" class=\"dev-mr-btn btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                                [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                        </button>\n                        <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                            <div style=\"text-align:left\">\n                                <table>\n                                    <thead>\n                                        <tr>\n                                            <th>Visible</th>\n                                            <th>Column</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let mrcol of meteringCols\">\n                                            <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"mrcol.visibility && curSelColsCnt == 1\"\n                                                            (onChange)=\"onChangeVisibility(mrcol)\"\n                                                            [(ngModel)]=\"mrcol.visibility\">\n                                            </p-checkbox></td>\n                                            <td>{{mrcol.header}}</td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                    <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                            pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                            [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                        <i class=\"fa fa-filter\"></i>\n                    </button>\n                </div>\n            </div>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12\">\n                    <p-table #dt sortMode=\"multiple\"\n                             [value]=\"meterings\"\n                             [paginator]=\"true\" [rows]=\"10\"\n                             [totalRecords]=\"meterings.length\"\n                             selectionMode=\"multiple\"\n                             [resizableColumns]=\"true\"\n                             columnResizeMode=\"expand\"\n                             (onColResize) = \"onColResize($event)\">\n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th class=\"th-id-wrap\"\n                                    *ngFor=\"let mrcol of meteringCols\"\n                                    [ngClass]=\"{'mg-hide': !mrcol.visibility}\"\n                                    [pSortableColumn]=\"mrcol.field\" pResizableColumn>\n                                    {{mrcol.header}}\n                                    <p-sortIcon [field]=\"mrcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                </th>\n                            </tr>\n                            <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                                <th *ngFor=\"let mrcol of meteringCols\"\n                                    [ngClass]=\"{'mg-hide':!mrcol.visibility}\"\n                                    [ngSwitch]=\"mrcol.field\" >\n                                    <input *ngSwitchCase=\"mrcol.field\" pInputText type=\"text\"\n                                           (input)=\"onTblFilter($event, mrcol, dt)\">\n                                </th>\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-metering>\n                            <tr>\n                                <ng-container *ngFor=\"let mrcol of meteringCols\">\n                                    <td *ngIf=\"mrcol.field != 'isPublic'\" [ngClass]=\"{'mg-hide':!mrcol.visibility}\">\n                                        {{ (mrcol.field != 'isPublic')? metering['metering'][mrcol.field]:'' }}\n                                    </td>\n                                    <td pEditableColumn *ngIf=\"mrcol.field == 'isPublic'\"\n                                        [ngClass]=\"{'mg-hide':!mrcol.visibility}\">\n                                        <p-cellEditor *ngIf=\"mrcol.field == 'isPublic'\">\n                                            <ng-template pTemplate=\"input\">\n                                                <p-dropdown [options]=\"isPublicCols\"\n                                                            [(ngModel)]=\"metering[mrcol.field]\"\n                                                            (onChange)=\"onContactEditComplete(metering)\"\n                                                            [style]=\"{'width':'100%'}\">\n                                                </p-dropdown>\n                                            </ng-template>\n                                            <ng-template pTemplate=\"output\">\n                                                {{ (mrcol.field == 'isPublic')? metering[mrcol.field]:metering['metering'][mrcol.field]}}\n                                            </ng-template>\n                                        </p-cellEditor>\n                                    </td>\n                                </ng-container>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-metering-table/device-metering-table.component.ts":
/*!************************************************************************************************!*\
  !*** ./client/app/modules/components/device-metering-table/device-metering-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DeviceMeteringTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMeteringTableComponent", function() { return DeviceMeteringTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_expanding_ms_mt_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/expanding-ms-mt.service */ "./client/app/core/services/expanding-ms-mt.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_metering_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/metering-form.service */ "./client/app/core/services/metering-form.service.ts");
/* harmony import */ var _core_services_update_metering_type_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/update-metering-type.service */ "./client/app/core/services/update-metering-type.service.ts");










var DeviceMeteringTableComponent = /** @class */ (function () {
    function DeviceMeteringTableComponent(httpService, scrollService, navService, settingService, expandMsMtService, meteringFormService, updateMeteringFormService, confirmationService) {
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.navService = navService;
        this.settingService = settingService;
        this.expandMsMtService = expandMsMtService;
        this.meteringFormService = meteringFormService;
        this.updateMeteringFormService = updateMeteringFormService;
        this.confirmationService = confirmationService;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.meterings = [];
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.apiURL = config.client_info.apiURL.serverURL + "/devices";
        this.tableId = 'dev-mr-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.meteringCols = [
            { field: 'id', header: 'ID', group: '' },
            { field: 'name', header: 'Name', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'unit', header: 'Unit', group: '' },
            { field: 'multiplier', header: 'Multiplier', group: '' },
            { field: 'format', header: 'Format', group: '' },
            { field: 'aggregation', header: 'Aggregation', group: '' },
            { field: 'isPublic', header: 'IsPublic', group: '' },
        ];
        this.isPublicCols = [
            { label: 'true', value: true },
            { label: 'false', value: false },
        ];
        this.initFormFields();
    }
    DeviceMeteringTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.expandMsMtService.getDeviceMsMtStatusInfo().subscribe(function (serviceInfo) {
            if (serviceInfo.name == 'metering') {
                _this.isEnabled = serviceInfo.mode;
                _this.deviceId = serviceInfo.id;
                _this.getTableContent();
            }
        });
        this.updateMeteringFormService.getMeteringTypeInfo().subscribe(function (mrInfo) {
            var _loop_1 = function (i) {
                if (_this.meterings[i].metering.id = mrInfo.id) {
                    _this.meterings[i] = JSON.parse(JSON.stringify(mrInfo.newMtType));
                    //Update metering data
                    var postBody_1 = _this.meterings;
                    var mrEditURL = _this.apiURL + '/' + _this.deviceId + '/meterings';
                    _this.httpService.httpPutRequest(_this.accessToken, mrEditURL, postBody_1)
                        .subscribe(function (res) {
                        _this.srcMeterings = JSON.parse(JSON.stringify(postBody_1));
                        console.log('Success in update meaterings', postBody_1);
                    }, function (err) {
                        _this.srcMeterings = [];
                        _this.meterings = [];
                        console.log('Error in update meaterings', err);
                    });
                }
            };
            //Checking prev metering Info
            for (var i = 0; i < _this.meterings.length; i++) {
                _loop_1(i);
            }
        });
    };
    DeviceMeteringTableComponent.prototype.getTableContent = function () {
        var _this = this;
        this.contentLoaded = false;
        var getDevMsURL = config.client_info.apiURL.serverURL + "/devices/" + this.deviceId + "/meterings";
        this.httpService.httpGetRequest(this.accessToken, getDevMsURL)
            .subscribe(function (res) {
            _this.meterings = JSON.parse(JSON.stringify(res));
            _this.srcMeterings = JSON.parse(JSON.stringify(res));
            _this.contentLoaded = true;
        }, function (err) {
            _this.meterings = [];
            _this.srcMeterings = [];
            _this.contentLoaded = true;
            console.error('Error in measurements updating', err);
        });
    };
    DeviceMeteringTableComponent.prototype.initFormFields = function () {
        this.meterings = [];
    };
    DeviceMeteringTableComponent.prototype.onSaveFormData = function () {
        var _this = this;
        var postBody = this.meterings;
        var mrEditURL = this.apiURL + '/' + this.deviceId + '/meterings';
        this.httpService.httpPutRequest(this.accessToken, mrEditURL, postBody)
            .subscribe(function (res) {
            _this.srcMeterings = JSON.parse(JSON.stringify(postBody));
            _this.isFormChanged = false;
            console.log('Success in update meaterings', postBody);
        }, function (err) {
            _this.srcMeterings = [];
            _this.meterings = [];
            _this.isFormChanged = false;
            console.log('Error in update meaterings', err);
        });
    };
    DeviceMeteringTableComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    DeviceMeteringTableComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('dev-mt-list', false, '');
        var htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[htmlElem.length - 1].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        this.initFormFields();
    };
    DeviceMeteringTableComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    DeviceMeteringTableComponent.prototype.initTableSetting = function () {
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
                'ID', 'Name', 'Description', 'Unit', 'Multiplier', 'Format', 'IsPublic'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.meteringCols = this.checkColVisibility(this.meteringCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    DeviceMeteringTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    DeviceMeteringTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    DeviceMeteringTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    DeviceMeteringTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    DeviceMeteringTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    DeviceMeteringTableComponent.prototype.onContactEditComplete = function (newVal) {
        this.checkFormChange();
    };
    DeviceMeteringTableComponent.prototype.compareContacts = function (x, y) {
        return (x.metering.id == y.metering.id &&
            x.metering.name == y.metering.name &&
            x.metering.description == y.metering.description &&
            x.metering.unit == y.metering.unit &&
            x.metering.multiplier == y.metering.multiplier &&
            x.metering.format == y.metering.format &&
            x.metering.aggregation == y.metering.aggregation &&
            x.isPublic == y.isPublic);
    };
    DeviceMeteringTableComponent.prototype.checkFormChange = function () {
        var sameObjCnt = 0;
        this.isFormChanged = this.meterings.length != this.srcMeterings.length;
        for (var i = 0; i < this.meterings.length; i++) {
            for (var j = 0; j < this.srcMeterings.length; j++) {
                if (this.compareContacts(this.meterings[i], this.srcMeterings[j])) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.meterings.length);
    };
    DeviceMeteringTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-metering-table',
            template: __webpack_require__(/*! ./device-metering-table.component.html */ "./client/app/modules/components/device-metering-table/device-metering-table.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./device-metering-table.component.css */ "./client/app/modules/components/device-metering-table/device-metering-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_5__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_7__["SettingService"],
            _core_services_expanding_ms_mt_service__WEBPACK_IMPORTED_MODULE_6__["ExpandingMsMtService"],
            _core_services_metering_form_service__WEBPACK_IMPORTED_MODULE_8__["MeteringFormService"],
            _core_services_update_metering_type_service__WEBPACK_IMPORTED_MODULE_9__["UpdateMeteringTypeService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], DeviceMeteringTableComponent);
    return DeviceMeteringTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-table/device-table.component.css":
/*!*******************************************************************************!*\
  !*** ./client/app/modules/components/device-table/device-table.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device-list {\r\n    width: 1350px;\r\n}\r\n.device-list:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    right: -20px;\r\n    width: 20px;\r\n    height: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS10YWJsZS9kZXZpY2UtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS10YWJsZS9kZXZpY2UtdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXZpY2UtbGlzdCB7XHJcbiAgICB3aWR0aDogMTM1MHB4O1xyXG59XHJcbi5kZXZpY2UtbGlzdDphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/device-table/device-table.component.html":
/*!********************************************************************************!*\
  !*** ./client/app/modules/components/device-table/device-table.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"device-list card mg-app-component\" *ngIf=\"isEnabled\" id=\"{{tableId}}\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Devices</h4>\n            <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                            <tr>\n                                <th>Visible</th>\n                                <th>Column</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let devcol of deviceCols\">\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"devcol.visibility && curSelColsCnt == 1\"\n                                                (onChange)=\"onChangeVisibility(devcol)\"\n                                                [(ngModel)]=\"devcol.visibility\">\n                                </p-checkbox></td>\n                                <td>{{devcol.header}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <button class=\"btn btn-danger delete-item\"\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewDevice()\">+ Add New</button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"devices\"\n                 [paginator]=\"true\" [rows]=\"10\"\n                 [totalRecords]=\"devices.length\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"mg-item-checkbox\">\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                    </th>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let devcol of deviceCols\"\n                        [ngClass]=\"{'mg-hide': !devcol.visibility}\"\n                        [pSortableColumn]=\" (devcol.group != '')? devcol.group + '.' + devcol.field: devcol.field\" pResizableColumn>\n                        {{devcol.header}}\n                        <p-sortIcon [field]=\"devcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th></th>\n                    <th *ngFor=\"let devcol of deviceCols\"\n                        [ngClass]=\"{'mg-hide':!devcol.visibility}\"\n                        [ngSwitch]=\"devcol.field\" >\n                        <input *ngSwitchCase=\"devcol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, devcol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-device>\n                <tr>\n                    <td>\n                        <p-tableCheckbox [value]=\"device\"></p-tableCheckbox>\n                    </td>\n                    <td *ngFor=\"let devcol of deviceCols\"  (click)=\"editDevice(device)\"\n                        [ngClass]=\"{'mg-hide':!devcol.visibility}\">\n                        {{ (devcol.group != '')? device[devcol.group][devcol.field]: device[devcol.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-table/device-table.component.ts":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/device-table/device-table.component.ts ***!
  \******************************************************************************/
/*! exports provided: DeviceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTableComponent", function() { return DeviceTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_device_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/device-form.service */ "./client/app/core/services/device-form.service.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_device_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-device.service */ "./client/app/core/services/update-device.service.ts");
/* harmony import */ var _core_services_expanding_device_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/expanding-device.service */ "./client/app/core/services/expanding-device.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_services_read_icd_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/read-icd.service */ "./client/app/core/services/read-icd.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");












var DeviceTableComponent = /** @class */ (function () {
    function DeviceTableComponent(deviceFormService, httpService, scrollService, updateDeviceService, expandDeviceService, navService, readIcdService, settingService, confirmationService) {
        this.deviceFormService = deviceFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.updateDeviceService = updateDeviceService;
        this.expandDeviceService = expandDeviceService;
        this.navService = navService;
        this.readIcdService = readIcdService;
        this.settingService = settingService;
        this.confirmationService = confirmationService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.isEnabled = false;
        this.bayId = '';
        this.isHideFilter = false;
        this.devices = [];
        this.selectedRows = [];
        this.apiURL = config.client_info.apiURL.serverURL + "/devices";
        this.tableId = 'device-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.deviceCols = [
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'name', header: 'Name', group: '' },
            { field: 'devicetypemrid', header: 'DeviceTypeMrID', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'latitude', header: 'Location.Lat', group: 'location' },
            { field: 'longitude', header: 'Location.Lon', group: 'location' },
            { field: 'altitude', header: 'Location.Alt', group: 'location' },
        ];
    }
    DeviceTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.expandDeviceService.getDeviceStatusInfo().subscribe(function (deviceStatus) {
            _this.isEnabled = deviceStatus.mode;
            _this.bayId = deviceStatus.bayId;
            _this.getDevices();
        });
        this.updateDeviceService.getDeviceInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                _this.devices.push(updateInfo.newDevice);
            }
            else {
                for (var i = 0; i < _this.devices.length; i++) {
                    if (_this.devices[i].mrid == updateInfo.mrid) {
                        _this.devices[i] = updateInfo.newDevice;
                    }
                }
            }
        });
        this.readIcdService.getBayInfo().subscribe(function (bayInfo) {
            _this.bayId = bayInfo.bayId;
            _this.getDevices();
        });
    };
    DeviceTableComponent.prototype.getDevices = function () {
        var _this = this;
        var getDeviceURL = config.client_info.apiURL.serverURL + "/bays/" + this.bayId + "/devices";
        var devIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, getDeviceURL)
            .subscribe(function (res) {
            devIdList = res;
            for (var i = 0; i < devIdList.length; i++) {
                var devDetailURL = _this.apiURL + '/' + devIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, devDetailURL));
            }
            if (devIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.devices = results;
                    _this.contentLoaded = true;
                    console.log('Success in device listing', results);
                }, function (err) {
                    _this.devices = [];
                    _this.contentLoaded = true;
                    console.error("Can't get device details", err);
                });
            }
            else {
                _this.devices = [];
                _this.contentLoaded = true;
                console.warn('Empty Device Id List');
            }
        }, function (err) {
            _this.devices = [];
            _this.contentLoaded = true;
            console.log('Error in devices listing', err);
        });
    };
    DeviceTableComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('dev-form-btn op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    DeviceTableComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('bay-form', true, this.bayId);
        this.scrollService.setMovedScroll(true, '');
        this.devices = [];
    };
    DeviceTableComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    DeviceTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var deviceIds = [];
        var promiseList = [];
        this.contentLoaded = false;
        for (var i = 0; i < this.selectedRows.length; i++) {
            var devDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            deviceIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, devDeleteURL));
        }
        if (deviceIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftDevices = [];
                for (var i = 0; i < _this.devices.length; i++) {
                    if (deviceIds.indexOf(_this.devices[i].mrid) < 0) {
                        leftDevices.push(_this.devices[i]);
                    }
                }
                _this.devices = leftDevices;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in device Deleting', results);
            }, function (err) {
                _this.devices = [];
                _this.contentLoaded = true;
                console.log("Can't delete device", err);
            });
        }
        else {
            this.devices = [];
            this.contentLoaded = true;
            console.warn('Empty Device Id List - Delete Device Function');
        }
    };
    DeviceTableComponent.prototype.editDevice = function (device) {
        var self = this;
        this.navService.setNavInfo('dev-form', true, device.mrid);
        setTimeout(function () {
            self.deviceFormService.setDeviceFormInfo(false, self.bayId, device);
            self.scrollService.setMovedScroll(true, 'device-form');
        }, 100);
    };
    DeviceTableComponent.prototype.onAddNewDevice = function () {
        var self = this;
        this.navService.setNavInfo('dev-form', true, '');
        setTimeout(function () {
            self.deviceFormService.setDeviceFormInfo(true, self.bayId, null);
            self.scrollService.setMovedScroll(true, 'device-form');
        }, 100);
    };
    DeviceTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    DeviceTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    DeviceTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    DeviceTableComponent.prototype.initTableSetting = function () {
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
                'MrId', 'Name', 'DeviceTypeMrID', 'Description',
                'Location.Lat', 'Location.Lon', 'Location.Alt',
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.deviceCols = this.checkColVisibility(this.deviceCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    DeviceTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    DeviceTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    DeviceTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    DeviceTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    DeviceTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    DeviceTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-table',
            template: __webpack_require__(/*! ./device-table.component.html */ "./client/app/modules/components/device-table/device-table.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./device-table.component.css */ "./client/app/modules/components/device-table/device-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_device_form_service__WEBPACK_IMPORTED_MODULE_2__["DeviceFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_update_device_service__WEBPACK_IMPORTED_MODULE_5__["UpdateDeviceService"],
            _core_services_expanding_device_service__WEBPACK_IMPORTED_MODULE_6__["ExpandingDeviceService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"],
            _core_services_read_icd_service__WEBPACK_IMPORTED_MODULE_10__["ReadIcdService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_11__["SettingService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_9__["ConfirmationService"]])
    ], DeviceTableComponent);
    return DeviceTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-type-form/device-type-form.component.css":
/*!***************************************************************************************!*\
  !*** ./client/app/modules/components/device-type-form/device-type-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9kZXZpY2UtdHlwZS1mb3JtL2RldmljZS10eXBlLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./client/app/modules/components/device-type-form/device-type-form.component.html":
/*!****************************************************************************************!*\
  !*** ./client/app/modules/components/device-type-form/device-type-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"device-type-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"device-type-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Device Type Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                    </button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"msid\">MrID</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(devType.mrid.trim().length == 0)}\"\n                                   (ngModelChange)=\"mridChange($event)\"\n                                   [ngModel]=\"devType.mrid\" id=\"msid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"vendor\">Vendor</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(devType.vendor.trim().length == 0)}\"\n                                   (ngModelChange)=\"vendorChange($event)\"\n                                   [ngModel]=\"devType.vendor\" id=\"vendor\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"hwRev\">HwRev</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(devType.hwRev.trim().length == 0)}\"\n                                   (ngModelChange)=\"hwRevChange($event)\"\n                                   [ngModel]=\"devType.hwRev\" id=\"hwRev\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"swRev\">SwRev</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(devType.swRev.trim().length == 0)}\"\n                                   (ngModelChange)=\"swRevChange($event)\"\n                                   [ngModel]=\"devType.swRev\" id=\"swRev\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"serNum\">SerNum</label>\n                            <input name=\"description\" class=\"form-control\"\n                                   (ngModelChange)=\"serNumChange($event)\"\n                                   [ngModel]=\"devType.serNum\" id=\"serNum\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"model\">Model</label>\n                            <input name=\"description\" class=\"form-control\"\n                                   (ngModelChange)=\"modelChange($event)\"\n                                   [ngModel]=\"devType.model\" id=\"model\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"owner\">Owner</label>\n                            <input name=\"description\" class=\"form-control\"\n                                   (ngModelChange)=\"ownerChange($event)\"\n                                   [ngModel]=\"devType.owner\" id=\"owner\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"primeOps\">PrimeOps</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   (ngModelChange)=\"primeOpsChange($event)\"\n                                   [ngModel]=\"devType.primeOps\" id=\"primeOps\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"secondOps\">SecondOps</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   (ngModelChange)=\"secondOpsChange($event)\"\n                                   [ngModel]=\"devType.secondOps\" id=\"secondOps\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-type-form/device-type-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./client/app/modules/components/device-type-form/device-type-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DeviceTypeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTypeFormComponent", function() { return DeviceTypeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_device_type_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/update-device-type.service */ "./client/app/core/services/update-device-type.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_device_type_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/device-type-form.service */ "./client/app/core/services/device-type-form.service.ts");








var DeviceTypeFormComponent = /** @class */ (function () {
    function DeviceTypeFormComponent(httpService, deviceTypeFormService, scrollService, updateDeviceTypeService, navService, confirmationService) {
        this.httpService = httpService;
        this.deviceTypeFormService = deviceTypeFormService;
        this.scrollService = scrollService;
        this.updateDeviceTypeService = updateDeviceTypeService;
        this.navService = navService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/devicetypes";
    }
    DeviceTypeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deviceTypeFormService.getDeviceTypeFormInfo().subscribe(function (formInfo) {
            _this.isEnabled = formInfo.showMode;
            _this.formData = formInfo.value;
            _this.formMode = formInfo.type;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.devType = JSON.parse(JSON.stringify(_this.formData));
            _this.isFormChanged = false;
        });
    };
    DeviceTypeFormComponent.prototype.initFormData = function () {
        this.formData = {
            mrid: '',
            vendor: '',
            hwRev: '',
            swRev: '',
            serNum: '',
            model: '',
            owner: '',
            primeOps: '',
            secondOps: ''
        };
    };
    DeviceTypeFormComponent.prototype.initFormFields = function () {
        this.devType = {
            mrid: '',
            vendor: '',
            hwRev: '',
            swRev: '',
            serNum: '',
            model: '',
            owner: '',
            primeOps: '',
            secondOps: ''
        };
    };
    DeviceTypeFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var postBody_1 = JSON.parse(JSON.stringify(this.devType));
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.updateDeviceTypeService.setDeviceTypeInfo(true, null, postBody_1);
                    _this.initFormFields();
                    _this.initFormData();
                    _this.isFormChanged = false;
                    console.log('Success in add device type', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in add device type', err);
                });
            }
            else { //Edit mode
                var deviceTypeEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, deviceTypeEditURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updateDeviceTypeService.setDeviceTypeInfo(false, _this.formData.mrid, postBody_1);
                    _this.formData = postBody_1;
                    _this.isFormChanged = false;
                    console.log('Success in update measurements', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in update measurements', err);
                });
            }
        }
    };
    DeviceTypeFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    DeviceTypeFormComponent.prototype.closeMe = function () {
        this.isEnabled = false;
        this.isFormChanged = false;
        this.initFormFields();
    };
    DeviceTypeFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    DeviceTypeFormComponent.prototype.checkValidation = function () {
        return (this.devType.mrid.trim() != "" &&
            this.devType.vendor.trim() != "" &&
            this.devType.hwRev.trim() != "" &&
            this.devType.swRev.trim() != "");
    };
    DeviceTypeFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.devType.mrid != this.formData.mrid ||
            this.devType.vendor != this.formData.vendor ||
            this.devType.hwRev != this.formData.hwRev ||
            this.devType.swRev != this.formData.swRev ||
            this.devType.serNum != this.formData.serNum ||
            this.devType.model != this.formData.model ||
            this.devType.owner != this.formData.owner ||
            this.devType.primeOps != this.formData.primeOps ||
            this.devType.secondOps != this.formData.secondOps);
    };
    DeviceTypeFormComponent.prototype.mridChange = function (newVal) {
        this.devType.mrid = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.vendorChange = function (newVal) {
        this.devType.vendor = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.serNumChange = function (newVal) {
        this.devType.serNum = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.hwRevChange = function (newVal) {
        this.devType.hwRev = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.swRevChange = function (newVal) {
        this.devType.swRev = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.modelChange = function (newVal) {
        this.devType.model = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.ownerChange = function (newVal) {
        this.devType.owner = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.primeOpsChange = function (newVal) {
        this.devType.primeOps = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent.prototype.secondOpsChange = function (newVal) {
        this.devType.secondOps = newVal;
        this.checkFormChange();
    };
    DeviceTypeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-type-form',
            template: __webpack_require__(/*! ./device-type-form.component.html */ "./client/app/modules/components/device-type-form/device-type-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./device-type-form.component.css */ "./client/app/modules/components/device-type-form/device-type-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_device_type_form_service__WEBPACK_IMPORTED_MODULE_7__["DeviceTypeFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__["ScrollMovingService"],
            _core_services_update_device_type_service__WEBPACK_IMPORTED_MODULE_4__["UpdateDeviceTypeService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], DeviceTypeFormComponent);
    return DeviceTypeFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/device-type-table/device-type-table.component.css":
/*!*****************************************************************************************!*\
  !*** ./client/app/modules/components/device-type-table/device-type-table.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device-type-list {\r\n    width: 1400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS10eXBlLXRhYmxlL2RldmljZS10eXBlLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2RldmljZS10eXBlLXRhYmxlL2RldmljZS10eXBlLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV2aWNlLXR5cGUtbGlzdCB7XHJcbiAgICB3aWR0aDogMTQwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/device-type-table/device-type-table.component.html":
/*!******************************************************************************************!*\
  !*** ./client/app/modules/components/device-type-table/device-type-table.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"device-type-list card mg-app-component\" id=\"{{tableId}}\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Device Types</h4>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                                <tr>\n                                    <th>Visible</th>\n                                    <th>Column</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let devtypecols of deviceTypeCols\">\n                                    <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"devtypecols.visibility && curSelColsCnt == 1\"\n                                                    (onChange)=\"onChangeVisibility(devtypecols)\"\n                                                    [(ngModel)]=\"devtypecols.visibility\">\n                                    </p-checkbox></td>\n                                    <td>{{devtypecols.header}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <button class=\"btn btn-danger delete-item\"\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewRow()\">+ Add New</button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"deviceTypes\"\n                 [paginator]=\"true\" [rows]=\"10\"\n                 [totalRecords]=\"deviceTypes.length\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 [resizableColumns]=\"true\"\n                 columnResizeMode=\"expand\"\n                 (onColResize) = \"onColResize($event)\"\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"mg-item-checkbox\">\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                    </th>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let devicetypecol of deviceTypeCols\"\n                        [ngClass]=\"{'mg-hide': !devicetypecol.visibility}\"\n                        [pSortableColumn]=\"devicetypecol.field\" pResizableColumn>\n                        {{devicetypecol.header}}\n                        <p-sortIcon [field]=\"devicetypecol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th></th>\n                    <th *ngFor=\"let devicetypecol of deviceTypeCols\"\n                        [ngClass]=\"{'mg-hide':!devicetypecol.visibility}\"\n                        [ngSwitch]=\"devicetypecol.field\" >\n                        <input *ngSwitchCase=\"devicetypecol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, devicetypecol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-devicetype>\n                <tr>\n                    <td>\n                        <p-tableCheckbox [value]=\"devicetype\"></p-tableCheckbox>\n                    </td>\n                    <td *ngFor=\"let devicetypecol of deviceTypeCols\"  (click)=\"editDevType(devicetype)\"\n                        [ngClass]=\"{'mg-hide':!devicetypecol.visibility}\">\n                        {{ devicetype[devicetypecol.field] }}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/device-type-table/device-type-table.component.ts":
/*!****************************************************************************************!*\
  !*** ./client/app/modules/components/device-type-table/device-type-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeviceTypeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTypeTableComponent", function() { return DeviceTypeTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_device_type_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/device-type-form.service */ "./client/app/core/services/device-type-form.service.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_device_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-device-type.service */ "./client/app/core/services/update-device-type.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");









var DeviceTypeTableComponent = /** @class */ (function () {
    function DeviceTypeTableComponent(deviceTypeFormService, httpService, scrollService, settingService, navService, updateDeviceTypeService) {
        this.deviceTypeFormService = deviceTypeFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.settingService = settingService;
        this.navService = navService;
        this.updateDeviceTypeService = updateDeviceTypeService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.deviceTypes = [];
        this.selectedRows = [];
        this.isHideFilter = false;
        this.apiURL = config.client_info.apiURL.serverURL + "/devicetypes";
        this.tableId = 'device-type-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.deviceTypeCols = [
            { field: 'mrid', header: 'MrID', group: '' },
            { field: 'vendor', header: 'Vendor', group: '' },
            { field: 'hwRev', header: 'HwRev', group: '' },
            { field: 'swRev', header: 'SwRev', group: '' },
            { field: 'model', header: 'Model', group: '' },
            { field: 'owner', header: 'Owner', group: '' },
            { field: 'primeOps', header: 'PrimeOps', group: '' },
            { field: 'secondOps', header: 'SecondOps', group: '' },
        ];
    }
    DeviceTypeTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getDeviceTypes();
        this.initTableSetting();
        this.updateDeviceTypeService.getDeviceTypeInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                console.log(updateInfo.newDeviceType);
                _this.deviceTypes.push(updateInfo.newDeviceType);
            }
            else {
                for (var i = 0; i < _this.deviceTypes.length; i++) {
                    if (_this.deviceTypes[i].mrid == updateInfo.mrid) {
                        _this.deviceTypes[i] = updateInfo.newDeviceType;
                    }
                }
            }
        });
    };
    DeviceTypeTableComponent.prototype.getDeviceTypes = function () {
        var _this = this;
        var deviceTypeIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe(function (res) {
            deviceTypeIdList = res;
            for (var i = 0; i < deviceTypeIdList.length; i++) {
                var deviceTypeDetailURL = _this.apiURL + '/' + deviceTypeIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, deviceTypeDetailURL));
            }
            if (deviceTypeIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.deviceTypes = results;
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get device type list", err);
                    _this.deviceTypes = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Empty device type list");
                _this.deviceTypes = [];
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get device type list", error);
            _this.deviceTypes = [];
            _this.contentLoaded = true;
        });
    };
    DeviceTypeTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var devTypeIds = [];
        var promiseList = [];
        for (var i = 0; i < this.selectedRows.length; i++) {
            var subDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            devTypeIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, subDeleteURL));
        }
        if (devTypeIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftDeviceTypes = [];
                for (var i = 0; i < _this.deviceTypes.length; i++) {
                    if (devTypeIds.indexOf(_this.deviceTypes[i].mrid) < 0) {
                        leftDeviceTypes.push(_this.deviceTypes[i]);
                    }
                }
                _this.deviceTypes = leftDeviceTypes;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, function (err) {
                _this.deviceTypes = [];
                _this.contentLoaded = true;
                console.error('Error in deviceTypes Deleting', err);
            });
        }
        else {
            this.deviceTypes = [];
            this.contentLoaded = true;
            console.log('Error in deviceTypes Deleting due to the Empty String');
        }
    };
    DeviceTypeTableComponent.prototype.editDevType = function (devicetype) {
        var self = this;
        this.navService.setNavInfo('device-type-form', true, '');
        setTimeout(function () {
            self.deviceTypeFormService.setDeviceTypeFormInfo(false, devicetype, true);
            self.scrollService.setMovedScroll(true, 'device-type-form');
        }, 100);
    };
    DeviceTypeTableComponent.prototype.onAddNewRow = function () {
        var self = this;
        this.navService.setNavInfo('device-type-form', true, '');
        setTimeout(function () {
            self.deviceTypeFormService.setDeviceTypeFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'device-type-form');
        }, 100);
    };
    DeviceTypeTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    DeviceTypeTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    DeviceTypeTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    // ====================================================
    DeviceTypeTableComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = ['MrID', 'Vendor', 'HwRev', 'SwRev', 'Model', 'Owner', 'PrimeOps', 'SecondOps'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.deviceTypeCols = this.checkColVisibility(this.deviceTypeCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    DeviceTypeTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    DeviceTypeTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    DeviceTypeTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    DeviceTypeTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    DeviceTypeTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    DeviceTypeTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-type-table',
            template: __webpack_require__(/*! ./device-type-table.component.html */ "./client/app/modules/components/device-type-table/device-type-table.component.html"),
            styles: [__webpack_require__(/*! ./device-type-table.component.css */ "./client/app/modules/components/device-type-table/device-type-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_device_type_form_service__WEBPACK_IMPORTED_MODULE_2__["DeviceTypeFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_7__["NavigationService"],
            _core_services_update_device_type_service__WEBPACK_IMPORTED_MODULE_5__["UpdateDeviceTypeService"]])
    ], DeviceTypeTableComponent);
    return DeviceTypeTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/global-setting/global-setting.component.css":
/*!***********************************************************************************!*\
  !*** ./client/app/modules/components/global-setting/global-setting.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#global-setting-form {\r\n    float: left;\r\n    margin-left: 20px;\r\n    min-width: 350px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL2dsb2JhbC1zZXR0aW5nL2dsb2JhbC1zZXR0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9nbG9iYWwtc2V0dGluZy9nbG9iYWwtc2V0dGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2dsb2JhbC1zZXR0aW5nLWZvcm0ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1pbi13aWR0aDogMzUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/global-setting/global-setting.component.html":
/*!************************************************************************************!*\
  !*** ./client/app/modules/components/global-setting/global-setting.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"global-setting-form\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n    <button type=\"button\" pButton\n            icon=\"fa {{isReadingSetting?'fa-spinner fa-spin':'fa-upload'}}\"\n            (click)=\"onReadSetting()\"\n            label=\"Read Config\">\n    </button>\n    <input type=\"file\" hidden\n           id=\"file\" accept='text/plain,.json'\n           (change)=\"handleFileInput($event.target.files)\">\n</div>\n\n"

/***/ }),

/***/ "./client/app/modules/components/global-setting/global-setting.component.ts":
/*!**********************************************************************************!*\
  !*** ./client/app/modules/components/global-setting/global-setting.component.ts ***!
  \**********************************************************************************/
/*! exports provided: GlobalSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalSettingComponent", function() { return GlobalSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);




var GlobalSettingComponent = /** @class */ (function () {
    function GlobalSettingComponent(httpService, messageService) {
        this.httpService = httpService;
        this.messageService = messageService;
        this.msgs = [];
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.apiURL = "" + config.client_info.apiURL.serverURL;
        this.isReadingSetting = false;
    }
    GlobalSettingComponent.prototype.ngOnInit = function () {
    };
    GlobalSettingComponent.prototype.onReadSetting = function () {
        document.getElementById('file').click();
    };
    GlobalSettingComponent.prototype.handleFileInput = function (files) {
        var self = this;
        var readICDURL = config.client_info.apiURL.serverURL + "/readconfig";
        var fileBody = files.item(0);
        var reader = new FileReader();
        this.isReadingSetting = true;
        reader.onload = function () {
            var fileContent = reader.result;
            self.httpService.httpFileUploadRequest(self.accessToken, readICDURL, fileContent).subscribe(function (resBody) {
                console.log('Read Global Setting Successfully');
                self.isReadingSetting = false;
                var fileTag;
                fileTag = document.getElementById('file');
                fileTag.value = '';
                self.showMsg('success', 'Success', 'Read Config file Successfully!');
            }, function (error) {
                self.showMsg('error', 'Error', 'Read Config file Failed!');
                self.isReadingSetting = false;
            });
        };
        reader.readAsText(fileBody);
    };
    GlobalSettingComponent.prototype.showMsg = function (msgType, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: msgType, summary: summary, detail: detail });
    };
    GlobalSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-global-setting',
            template: __webpack_require__(/*! ./global-setting.component.html */ "./client/app/modules/components/global-setting/global-setting.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]],
            styles: [__webpack_require__(/*! ./global-setting.component.css */ "./client/app/modules/components/global-setting/global-setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], GlobalSettingComponent);
    return GlobalSettingComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/measurement-form/measurement-form.component.css":
/*!***************************************************************************************!*\
  !*** ./client/app/modules/components/measurement-form/measurement-form.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9tZWFzdXJlbWVudC1mb3JtL21lYXN1cmVtZW50LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./client/app/modules/components/measurement-form/measurement-form.component.html":
/*!****************************************************************************************!*\
  !*** ./client/app/modules/components/measurement-form/measurement-form.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"measurement-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"measurement-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Measurement Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                    </button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"msid\">ID</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(id.trim().length == 0)}\"\n                                   (ngModelChange)=\"idChange($event)\"\n                                   [ngModel]=\"id\" id=\"msid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">Name</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(name.trim().length == 0)}\"\n                                   (ngModelChange)=\"nameChange($event)\"\n                                   [ngModel]=\"name\" id=\"name\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"unit\">Unit</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(unit.trim().length == 0)}\"\n                                   (ngModelChange)=\"unitChange($event)\"\n                                   [ngModel]=\"unit\" id=\"unit\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"multiplier\">Multiplier</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(multiplier.trim().length == 0)}\"\n                                   (ngModelChange)=\"multiplierChange($event)\"\n                                   [ngModel]=\"multiplier\" id=\"multiplier\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <input name=\"description\" class=\"form-control\"\n                                   (ngModelChange)=\"descriptionChange($event)\"\n                                   [ngModel]=\"description\" id=\"description\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"format\">Format</label>\n                            <input name=\"description\" class=\"form-control\"\n                            (ngModelChange)=\"formatChange($event)\"\n                            [ngModel]=\"format\" id=\"format\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"aggregation\">Aggregation</label>\n                            <select name=\"flags\" id=\"aggregation\" class=\"form-control\"\n                                    (ngModelChange)=\"aggregationChange($event)\"\n                                    [(ngModel)]=\"aggregation\">\n                                <option *ngFor=\"let agge of aggregationList\" value=\"{{ agge.value }}\">{{agge.value}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"flags\">Enumeration Flags</label>\n                            <select name=\"flags\" id=\"flags\" class=\"form-control\"\n                                    (ngModelChange)=\"onChangeEnumFlags($event)\"\n                                    [disabled]=\"!isEnabledEnum\"\n                                    [(ngModel)]=\"enumFlag\">\n                                <option value=\"true\" [selected]=\"enumFlag\">True</option>\n                                <option value=\"false\" [selected]=\"!enumFlag\">False</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <p-checkbox [(ngModel)]=\"isEnabledEnum\"\n                                        (ngModelChange)=\"onOffEnumValues($event)\"\n                                        binary=\"true\" label=\"Enumeration Mode\"></p-checkbox>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Enumeration</h5>\n                    </div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-12\">\n                            <p-table #dt sortMode=\"multiple\"\n                                     [value]=\"enumList\"\n                                     [paginator]=\"true\" [rows]=\"5\"\n                                     [totalRecords]=\"enumList.length\"\n                                     selectionMode=\"single\"\n                                     (onRowSelect)=\"onEnumRowSelect($event)\"\n                                     (onRowUnselect)=\"onEnumRowUnSelect($event)\"\n                                     [(selection)]=\"curSelEnum\">\n                                <ng-template pTemplate=\"header\">\n                                    <tr>\n                                        <th *ngFor=\"let enumcol of enumCols\" [pSortableColumn]=\"enumcol.field\">\n                                            {{enumcol.header}}\n                                            <p-sortIcon [field]=\"enumcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                        </th>\n                                        <th style=\"width:4em\"></th>\n                                    </tr>\n                                </ng-template>\n                                <ng-template pTemplate=\"body\" let-i=\"rowIndex\" let-enum>\n                                    <tr [pSelectableRow]=\"enum\">\n                                        <td>{{i + 1}}</td>\n                                        <td>{{enum}}</td>\n                                        <td>\n                                            <button pButton type=\"button\"\n                                                    [disabled]=\"!isEnabledEnum\"\n                                                    icon=\"pi pi-times\"\n                                                    class=\"ui-button-danger\"\n                                                    (click)=\"onDeleteEnum(enum)\"></button>\n                                        </td>\n                                    </tr>\n                                </ng-template>\n                                <ng-template pTemplate=\"summary\">\n                                    <div class=\"ui-g\">\n                                        <div class=\"ui-g-6\">\n                                            <input pInputText\n                                                   [disabled]=\"!isEnabledEnum\"\n                                                   placeholder=\"New Enum Data\"\n                                                   [(ngModel)]=\"enumValue\">\n                                        </div>\n                                        <div class=\"ui-g-6\">\n                                            <button pButton type=\"button\"\n                                                    [disabled]=\"enumValue.length == 0\"\n                                                    icon=\"pi pi-plus\"\n                                                    label=\"{{ (curSelEnum.length>0)?'Save':'Add' }}\"\n                                                    (click)=\"onAddNewEnum()\"></button>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </p-table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/measurement-form/measurement-form.component.ts":
/*!**************************************************************************************!*\
  !*** ./client/app/modules/components/measurement-form/measurement-form.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MeasurementFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementFormComponent", function() { return MeasurementFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_measurement_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/measurement-form.service */ "./client/app/core/services/measurement-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _core_services_update_measurement_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/update-measurement-type.service */ "./client/app/core/services/update-measurement-type.service.ts");
/* harmony import */ var _core_interfaces_ms_aggregation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/interfaces/ms-aggregation */ "./client/app/core/interfaces/ms-aggregation.ts");









var MeasurementFormComponent = /** @class */ (function () {
    function MeasurementFormComponent(httpService, msFormService, scrollService, updateMsService, navService, confirmationService) {
        this.httpService = httpService;
        this.msFormService = msFormService;
        this.scrollService = scrollService;
        this.updateMsService = updateMsService;
        this.navService = navService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/measurements";
        this.enumCols = [
            { field: 'no', header: 'No' },
            { field: 'value', header: 'Value' },
        ];
        this.enumList = [];
        this.curSelEnum = '';
        this.enumFlag = false;
        this.enumValue = '';
        this.isEnabledEnum = true;
        this.aggregation = 'None';
        this.aggregationList = [];
        for (var item in _core_interfaces_ms_aggregation__WEBPACK_IMPORTED_MODULE_8__["MsAggregation"]) {
            if (isNaN(Number(item))) {
                this.aggregationList.push({ label: _core_interfaces_ms_aggregation__WEBPACK_IMPORTED_MODULE_8__["MsAggregation"][item], value: _core_interfaces_ms_aggregation__WEBPACK_IMPORTED_MODULE_8__["MsAggregation"][item] });
            }
        }
    }
    MeasurementFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.msFormService.getMeasurementFormInfo().subscribe(function (formInfo) {
            _this.isEnabled = formInfo.showMode;
            _this.formData = formInfo.value;
            _this.formMode = formInfo.type;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.setMeasurementDetails();
        });
    };
    MeasurementFormComponent.prototype.setMeasurementDetails = function () {
        this.id = this.formData.id;
        this.name = this.formData.name;
        this.description = this.formData.description;
        this.format = this.formData.format;
        this.aggregation = (this.formData.aggregation) ? this.formData.aggregation : 'None';
        this.unit = this.formData.unit;
        this.multiplier = this.formData.multiplier;
        this.isFormChanged = false;
        this.enumList = (this.formData.enumeration) ? JSON.parse(JSON.stringify(this.formData.enumeration.values)) : [];
        this.enumFlag = (this.formData.enumeration) ? this.formData.enumeration.flags : false;
        if (this.formData.enumeration) {
            this.isEnabledEnum = true;
        }
        else {
            this.isEnabledEnum = false;
        }
    };
    MeasurementFormComponent.prototype.initFormFields = function () {
        this.id = this.name = this.description = this.format = this.unit = this.multiplier = '';
        this.aggregation = 'None';
        this.enumFlag = false;
        this.enumList = [];
    };
    MeasurementFormComponent.prototype.initFormData = function () {
        this.formData = {
            id: '',
            name: '',
            description: '',
            format: '',
            aggregation: 'None',
            unit: '',
            multiplier: '',
            enumeration: { flags: false, values: [] }
        };
    };
    MeasurementFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var enumval = (this.isEnabledEnum) ? {
                flags: this.enumFlag,
                values: this.enumList,
            } : null;
            var postBody_1 = {
                id: this.id,
                name: this.name,
                description: this.description,
                unit: this.unit,
                multiplier: this.multiplier,
                enumeration: enumval,
                format: this.format,
                aggregation: this.aggregation,
            };
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.updateMsService.setMeasurementInfo(true, null, postBody_1);
                    _this.initFormData();
                    _this.initFormFields();
                    _this.isFormChanged = false;
                    console.log('Success in add measurement', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in add measurement', err);
                });
            }
            else { //Edit mode
                var msEditURL = this.apiURL + '/' + this.formData.id;
                this.httpService.httpPutRequest(this.accessToken, msEditURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updateMsService.setMeasurementInfo(false, _this.formData.id, postBody_1);
                    _this.formData = postBody_1;
                    _this.isFormChanged = false;
                    console.log('Success in update measurements', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in update measurements', err);
                });
            }
            if (!this.isEnabledEnum) {
                this.enumList = [];
                this.curSelEnum = '';
            }
        }
    };
    MeasurementFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    MeasurementFormComponent.prototype.closeMe = function () {
        this.isEnabled = false;
        this.isFormChanged = false;
        this.initFormFields();
        this.initFormData();
    };
    MeasurementFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    MeasurementFormComponent.prototype.checkValidation = function () {
        return (this.id.trim() != "" && this.unit.trim() != "" && this.multiplier.trim() != "");
    };
    MeasurementFormComponent.prototype.checkFormChange = function () {
        var formEumSt = false;
        if (this.formData.enumeration) {
            formEumSt = true;
        }
        this.isFormChanged = (this.id != this.formData.id ||
            this.name != this.formData.name ||
            this.unit != this.formData.unit ||
            this.multiplier != this.formData.multiplier ||
            this.description != this.formData.description ||
            this.format != this.formData.format ||
            this.aggregation != this.formData.aggregation ||
            this.isEnabledEnum != formEumSt);
        if (this.isEnabledEnum && formEumSt) {
            this.isFormChanged = this.isFormChanged || (this.enumList.length != this.formData.enumeration.values.length);
            this.isFormChanged = this.isFormChanged || (this.enumFlag != this.formData.enumeration.flags);
            var samecnt = 0;
            var formEnumList = this.formData.enumeration.values;
            for (var i = 0; i < this.enumList.length; i++) {
                for (var j = 0; j < formEnumList.length; j++) {
                    if (this.enumList[i] == formEnumList[j]) {
                        samecnt++;
                    }
                }
            }
            this.isFormChanged = this.isFormChanged || (samecnt < this.enumList.length);
        }
    };
    MeasurementFormComponent.prototype.idChange = function (newVal) {
        this.id = newVal;
        this.id = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.descriptionChange = function (newVal) {
        this.description = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.formatChange = function (newVal) {
        this.format = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.aggregationChange = function (newVal) {
        this.aggregation = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.nameChange = function (newVal) {
        this.name = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.unitChange = function (newVal) {
        this.unit = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.multiplierChange = function (newVal) {
        this.multiplier = newVal;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.onChangeEnumFlags = function (newVal) {
        this.enumFlag = newVal == 'true';
        this.checkFormChange();
    };
    // =============================================
    MeasurementFormComponent.prototype.onOffEnumValues = function ($ev) {
        this.isEnabledEnum = $ev;
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.onEnumRowSelect = function ($ev) {
        if (this.isEnabledEnum) {
            this.curSelEnum = $ev.data;
            this.enumValue = $ev.data;
        }
    };
    MeasurementFormComponent.prototype.onEnumRowUnSelect = function ($ev) {
        if (this.isEnabledEnum) {
            this.curSelEnum = '';
            this.enumValue = '';
        }
    };
    MeasurementFormComponent.prototype.onDeleteEnum = function (enumVal) {
        var indexof = this.enumList.indexOf(enumVal);
        if (indexof > -1) {
            this.enumList.splice(indexof, 1);
        }
        this.checkFormChange();
    };
    MeasurementFormComponent.prototype.onAddNewEnum = function () {
        //Check duplication enumValues
        if (this.curSelEnum.length != 0) {
            var prevIndex = this.enumList.indexOf(this.curSelEnum);
            if (this.enumList.indexOf(this.enumValue) < 0) {
                this.enumList[prevIndex] = this.enumValue;
            }
            this.curSelEnum = '';
        }
        else {
            if (this.enumList.indexOf(this.enumValue) < 0) {
                this.enumList.push(this.enumValue);
            }
        }
        this.enumValue = '';
        this.checkFormChange();
    };
    MeasurementFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-measurement-form',
            template: __webpack_require__(/*! ./measurement-form.component.html */ "./client/app/modules/components/measurement-form/measurement-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./measurement-form.component.css */ "./client/app/modules/components/measurement-form/measurement-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_measurement_form_service__WEBPACK_IMPORTED_MODULE_3__["MeasurementFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_update_measurement_type_service__WEBPACK_IMPORTED_MODULE_7__["UpdateMeasurementTypeService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_6__["ConfirmationService"]])
    ], MeasurementFormComponent);
    return MeasurementFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/measurement-table/measurement-table.component.css":
/*!*****************************************************************************************!*\
  !*** ./client/app/modules/components/measurement-table/measurement-table.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".measurement-list {\r\n    width: 1040px;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL21lYXN1cmVtZW50LXRhYmxlL21lYXN1cmVtZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL21lYXN1cmVtZW50LXRhYmxlL21lYXN1cmVtZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVhc3VyZW1lbnQtbGlzdCB7XHJcbiAgICB3aWR0aDogMTA0MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/measurement-table/measurement-table.component.html":
/*!******************************************************************************************!*\
  !*** ./client/app/modules/components/measurement-table/measurement-table.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"measurement-list card mg-app-component\" id=\"{{tableId}}\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Measurements</h4>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                            <tr>\n                                <th>Visible</th>\n                                <th>Column</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let mscol of measurementCols\">\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"mscol.visibility && curSelColsCnt == 1\"\n                                                (onChange)=\"onChangeVisibility(mscol)\"\n                                                [(ngModel)]=\"mscol.visibility\">\n                                </p-checkbox></td>\n                                <td>{{mscol.header}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <button class=\"btn btn-danger delete-item\"\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewRow()\">+ Add New</button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"measurements\"\n                 [paginator]=\"true\" [rows]=\"10\"\n                 [totalRecords]=\"measurements.length\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 [resizableColumns]=\"true\"\n                 columnResizeMode=\"expand\"\n                 (onColResize) = \"onColResize($event)\"\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                 (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"mg-item-checkbox\">\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                    </th>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let mscol of measurementCols\"\n                        [ngClass]=\"{'mg-hide': !mscol.visibility}\"\n                        [pSortableColumn]=\"mscol.field\" pResizableColumn>\n                        {{mscol.header}}\n                        <p-sortIcon [field]=\"mscol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th></th>\n                    <th *ngFor=\"let mscol of measurementCols\"\n                        [ngClass]=\"{'mg-hide':!mscol.visibility}\"\n                        [ngSwitch]=\"mscol.field\" >\n                        <input *ngSwitchCase=\"mscol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, mscol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-measurement>\n                <tr>\n                    <td>\n                        <p-tableCheckbox [value]=\"measurement\"></p-tableCheckbox>\n                    </td>\n                    <td *ngFor=\"let mscol of measurementCols\"  (click)=\"editMs(measurement)\"\n                        [ngClass]=\"{'mg-hide':!mscol.visibility}\">\n                        {{ (measurement[mscol.field])?measurement[mscol.field]:'None' }}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/measurement-table/measurement-table.component.ts":
/*!****************************************************************************************!*\
  !*** ./client/app/modules/components/measurement-table/measurement-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MeasurementTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementTableComponent", function() { return MeasurementTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_measurement_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/measurement-form.service */ "./client/app/core/services/measurement-form.service.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_measurement_type_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-measurement-type.service */ "./client/app/core/services/update-measurement-type.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../config.json */ "./config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../config.json */ "./config.json", 1);
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");










var MeasurementTableComponent = /** @class */ (function () {
    function MeasurementTableComponent(msFormService, httpService, scrollService, navService, settingService, updateMsService) {
        this.msFormService = msFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.navService = navService;
        this.settingService = settingService;
        this.updateMsService = updateMsService;
        this.accessToken = localStorage.getItem(_config_json__WEBPACK_IMPORTED_MODULE_7__.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.measurements = [];
        this.selectedRows = [];
        this.isHideFilter = false;
        this.apiURL = _config_json__WEBPACK_IMPORTED_MODULE_7__.client_info.apiURL.serverURL + "/measurements";
        this.tableId = 'measurement-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.measurementCols = [
            { field: 'id', header: 'ID', group: '' },
            { field: 'name', header: 'Name', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'unit', header: 'Unit', group: '' },
            { field: 'multiplier', header: 'Multiplier', group: '' },
            { field: 'format', header: 'Format', group: '' },
            { field: 'aggregation', header: 'Aggregation', group: '' },
        ];
    }
    MeasurementTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getMeasurementTypes();
        this.initTableSetting();
        this.updateMsService.getMeasurementTypeInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                console.log(updateInfo.newMsType);
                _this.measurements.push(updateInfo.newMsType);
            }
            else {
                for (var i = 0; i < _this.measurements.length; i++) {
                    if (_this.measurements[i].id == updateInfo.id) {
                        _this.measurements[i] = updateInfo.newMsType;
                    }
                }
            }
        });
    };
    MeasurementTableComponent.prototype.getMeasurementTypes = function () {
        var _this = this;
        var msTypeIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe(function (res) {
            msTypeIdList = res;
            for (var i = 0; i < msTypeIdList.length; i++) {
                var subDetailURL = _this.apiURL + '/' + msTypeIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, subDetailURL));
            }
            if (msTypeIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.measurements = results;
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get substation list", err);
                    _this.measurements = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get substation list");
                _this.measurements = [];
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get measurement list", error);
            _this.measurements = [];
            _this.contentLoaded = true;
        });
    };
    MeasurementTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var msTypeIds = [];
        var promiseList = [];
        for (var i = 0; i < this.selectedRows.length; i++) {
            var msTypeDeleteURL = this.apiURL + '/' + this.selectedRows[i].id;
            msTypeIds.push(this.selectedRows[i].id);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, msTypeDeleteURL));
        }
        if (msTypeIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftMeasurementTypes = [];
                for (var i = 0; i < _this.measurements.length; i++) {
                    if (msTypeIds.indexOf(_this.measurements[i].id) < 0) {
                        leftMeasurementTypes.push(_this.measurements[i]);
                    }
                }
                _this.measurements = leftMeasurementTypes;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, function (err) {
                _this.measurements = [];
                _this.contentLoaded = true;
                console.error('Error in measurements Deleting', err);
            });
        }
        else {
            this.measurements = [];
            this.contentLoaded = true;
            console.log('Error in measurements Deleting due to the Empty String');
        }
    };
    MeasurementTableComponent.prototype.editMs = function (ms) {
        var self = this;
        this.navService.setNavInfo('measurement-form', true, '');
        setTimeout(function () {
            self.msFormService.setMeasurementFormInfo(false, ms, true);
            self.scrollService.setMovedScroll(true, 'measurement-form');
        }, 100);
    };
    MeasurementTableComponent.prototype.onAddNewRow = function () {
        var self = this;
        this.navService.setNavInfo('measurement-form', true, '');
        setTimeout(function () {
            self.msFormService.setMeasurementFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'measurement-form');
        }, 100);
    };
    MeasurementTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    MeasurementTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    MeasurementTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    // ====================================================
    MeasurementTableComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = ['ID', 'Name', 'Description', 'Unit', 'Multiplier', 'Format', 'Aggregation'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.measurementCols = this.checkColVisibility(this.measurementCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    MeasurementTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    MeasurementTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    MeasurementTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    MeasurementTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    MeasurementTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    MeasurementTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-measurement-table',
            template: __webpack_require__(/*! ./measurement-table.component.html */ "./client/app/modules/components/measurement-table/measurement-table.component.html"),
            styles: [__webpack_require__(/*! ./measurement-table.component.css */ "./client/app/modules/components/measurement-table/measurement-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_measurement_form_service__WEBPACK_IMPORTED_MODULE_2__["MeasurementFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_8__["NavigationService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
            _core_services_update_measurement_type_service__WEBPACK_IMPORTED_MODULE_5__["UpdateMeasurementTypeService"]])
    ], MeasurementTableComponent);
    return MeasurementTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/partner-address-table/partner-address-table.component.css":
/*!*************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-address-table/partner-address-table.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partner-address-list{\r\n    width: 960px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BhcnRuZXItYWRkcmVzcy10YWJsZS9wYXJ0bmVyLWFkZHJlc3MtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcGFydG5lci1hZGRyZXNzLXRhYmxlL3BhcnRuZXItYWRkcmVzcy10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXItYWRkcmVzcy1saXN0e1xyXG4gICAgd2lkdGg6IDk2MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/partner-address-table/partner-address-table.component.html":
/*!**************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-address-table/partner-address-table.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partner-address-list mg-app-component\" *ngIf=\"isEnabled\" id=\"{{tableId}}\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <div class=\"card-title\">\n        <h4>Addresses</h4>\n        <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"table-setting-bar\">\n        <div class=\"dropdown mg-dropdown-area\" >\n          <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n          <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                  pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                  (click)=\"isShowSetting = !isShowSetting\">\n            <i class=\"fa fa-cog\"></i>\n          </button>\n          <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n            <div style=\"text-align:left\">\n              <table>\n                <thead>\n                <tr>\n                  <th>Visible</th>\n                  <th>Column</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr *ngFor=\"let addresscol of addressCols\">\n                  <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"addresscol.visibility && curSelColsCnt == 1\"\n                                  (onChange)=\"onChangeVisibility(addresscol)\"\n                                  [(ngModel)]=\"addresscol.visibility\">\n                  </p-checkbox></td>\n                  <td>{{addresscol.header}}</td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n          <i class=\"fa fa-filter\"></i>\n        </button>\n        <div class=\"clearfix\"></div>\n      </div>\n      <p-table #dt sortMode=\"multiple\"\n               [value]=\"addresses\"\n               [paginator]=\"true\" [rows]=\"10\"\n               [totalRecords]=\"addresses.length\"\n               selectionMode=\"multiple\"\n               [resizableColumns]=\"true\"\n               columnResizeMode=\"expand\"\n               (onColResize) = \"onColResize($event)\">\n        <ng-template pTemplate=\"header\">\n          <tr>\n            <th class=\"th-id-wrap\"\n                *ngFor=\"let addresscol of addressCols\"\n                [ngClass]=\"{'mg-hide': !addresscol.visibility}\"\n                [pSortableColumn]=\"addresscol.field\" pResizableColumn>\n              {{addresscol.header}}\n              <p-sortIcon [field]=\"addresscol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n            </th>\n          </tr>\n          <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n            <th *ngFor=\"let addresscol of addressCols\"\n                [ngClass]=\"{'mg-hide':!addresscol.visibility}\"\n                [ngSwitch]=\"addresscol.field\" >\n              <input *ngSwitchCase=\"addresscol.field\" pInputText type=\"text\"\n                     (input)=\"onTblFilter($event, addresscol, dt)\">\n            </th>\n          </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-address>\n          <tr>\n            <td *ngFor=\"let addressrole of addressCols\"\n                [ngClass]=\"{'mg-hide':!addressrole.visibility}\">\n              {{address[addressrole.field]}}\n            </td>\n          </tr>\n        </ng-template>\n      </p-table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/partner-address-table/partner-address-table.component.ts":
/*!************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-address-table/partner-address-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PartnerAddressTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerAddressTableComponent", function() { return PartnerAddressTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/expanding-partner-children.service */ "./client/app/core/services/expanding-partner-children.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");






var PartnerAddressTableComponent = /** @class */ (function () {
    function PartnerAddressTableComponent(expandPartnerChildService, httpService, settingService, navService) {
        this.expandPartnerChildService = expandPartnerChildService;
        this.httpService = httpService;
        this.settingService = settingService;
        this.navService = navService;
        this.addresses = [];
        this.isHideFilter = false;
        this.partnerID = '';
        this.apiURL = config.client_info.apiURL.serverURL + "/partners/";
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.tableId = 'partner-address-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.addressCols = [
            { field: 'number', header: 'Number', group: '' },
            { field: 'street', header: 'Street', group: '' },
            { field: 'city', header: 'City', group: '' },
            { field: 'locality', header: 'Locality', group: '' },
            { field: 'zip', header: 'Zip', group: '' },
            { field: 'country', header: 'Country', group: '' },
            { field: 'region', header: 'Region', group: '' }
        ];
    }
    PartnerAddressTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.expandPartnerChildService.getPartnerChildrenInfo().subscribe(function (contactInfo) {
            if (contactInfo.name == 'address') {
                _this.isEnabled = contactInfo.mode;
                _this.partnerID = contactInfo.data;
                _this.getAddresses();
            }
        });
    };
    PartnerAddressTableComponent.prototype.onCloseComponent = function () {
        this.navService.setNavInfo('partner-form', true, '');
    };
    PartnerAddressTableComponent.prototype.getAddresses = function () {
        var _this = this;
        var apiURL = this.apiURL + this.partnerID + '/addresses';
        this.httpService.httpGetRequest(this.accessToken, apiURL).subscribe(function (res) {
            _this.addresses = res;
        }, function (err) {
            console.error("Can't get addresses list");
            console.error(err);
        });
    };
    PartnerAddressTableComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = ['Number', 'Street', 'City', 'Locality', 'Zip', 'Country', 'Region'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.addressCols = this.checkColVisibility(this.addressCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    PartnerAddressTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    PartnerAddressTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    PartnerAddressTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    PartnerAddressTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    PartnerAddressTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    PartnerAddressTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-address-table',
            template: __webpack_require__(/*! ./partner-address-table.component.html */ "./client/app/modules/components/partner-address-table/partner-address-table.component.html"),
            styles: [__webpack_require__(/*! ./partner-address-table.component.css */ "./client/app/modules/components/partner-address-table/partner-address-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_2__["ExpandingPartnerChildrenService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_4__["HttpServiceHelper"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
    ], PartnerAddressTableComponent);
    return PartnerAddressTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/partner-contact-table/partner-contact-table.component.css":
/*!*************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-contact-table/partner-contact-table.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partner-contact-list{\r\n    width: 960px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BhcnRuZXItY29udGFjdC10YWJsZS9wYXJ0bmVyLWNvbnRhY3QtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcGFydG5lci1jb250YWN0LXRhYmxlL3BhcnRuZXItY29udGFjdC10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXItY29udGFjdC1saXN0e1xyXG4gICAgd2lkdGg6IDk2MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/partner-contact-table/partner-contact-table.component.html":
/*!**************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-contact-table/partner-contact-table.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partner-contact-list mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"{{tableId}}\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Linked Contacts</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div>\n                <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                        pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                        [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                    <i class=\"fa fa-filter\"></i>\n                </button>\n                <div class=\"clearfix\"></div>\n            </div>\n            <p-table #dt sortMode=\"multiple\"\n                     [value]=\"contacts\"\n                     [paginator]=\"true\" [rows]=\"10\"\n                     [totalRecords]=\"contacts.length\"\n                     selectionMode=\"multiple\"\n                     [resizableColumns]=\"true\"\n                     columnResizeMode=\"expand\"\n                     (onColResize) = \"onColResize($event)\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th class=\"th-id-wrap\"\n                            *ngFor=\"let contactcol of contactCols\"\n                            [ngClass]=\"{'mg-hide': !contactcol.visibility}\"\n                            [pSortableColumn]=\"contactcol.field\" pResizableColumn>\n                            {{contactcol.header}}\n                            <p-sortIcon [field]=\"contactcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                        </th>\n                    </tr>\n                    <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                        <th *ngFor=\"let contactcol of contactCols\"\n                            [ngClass]=\"{'mg-hide':!contactcol.visibility}\"\n                            [ngSwitch]=\"contactcol.field\" >\n                            <input *ngSwitchCase=\"contactcol.field\" pInputText type=\"text\"\n                                   (input)=\"onTblFilter($event, contactcol, dt)\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-contact>\n                    <tr>\n                        <td *ngFor=\"let contactcol of contactCols\">\n                            {{contact[contactcol.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/partner-contact-table/partner-contact-table.component.ts":
/*!************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-contact-table/partner-contact-table.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PartnerContactTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerContactTableComponent", function() { return PartnerContactTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/expanding-partner-children.service */ "./client/app/core/services/expanding-partner-children.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_update_partner_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-partner.service */ "./client/app/core/services/update-partner.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");







var PartnerContactTableComponent = /** @class */ (function () {
    function PartnerContactTableComponent(expandPartnerContactService, navService, settingService, updatePartnerService) {
        this.expandPartnerContactService = expandPartnerContactService;
        this.navService = navService;
        this.settingService = settingService;
        this.updatePartnerService = updatePartnerService;
        this.contacts = [];
        this.isHideFilter = false;
        this.tableId = 'partner-contact-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.contactCols = [
            { field: 'firstname', header: 'First Name', group: '' },
            { field: 'lastname', header: 'Last Name', group: '' },
            { field: 'phone', header: 'Phone', group: '' },
            { field: 'email', header: 'Email', group: '' },
            { field: 'role', header: 'Role', group: '' },
            { field: 'userid', header: 'UserID', group: '' },
        ];
    }
    PartnerContactTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.expandPartnerContactService.getPartnerChildrenInfo().subscribe(function (contactInfo) {
            if (contactInfo.name == 'contact') {
                _this.isEnabled = contactInfo.mode;
                _this.contacts = contactInfo.data;
            }
        });
        this.updatePartnerService.getPartnerInfo().subscribe(function (updateInfo) {
            if (!updateInfo.mode && _this.isEnabled) { //Partner edit mode
                _this.contacts = updateInfo.newPartner.contacts;
            }
        });
    };
    PartnerContactTableComponent.prototype.onCloseComponent = function () {
        this.navService.setNavInfo('partner-form', true, '');
        this.isEnabled = false;
    };
    PartnerContactTableComponent.prototype.initTableSetting = function () {
        readTable(this.tableId);
        var tblSettingStr = localStorage.getItem(this.tableSettingName);
        var settingInfo;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        }
        else {
            //Write New Setting
            settingInfo = { filter: true };
            settingInfo.visible = ['First Name', 'Last Name', 'Phone', 'Email', 'Role', 'UserID'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.contactCols = this.checkColVisibility(this.contactCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    PartnerContactTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    PartnerContactTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    PartnerContactTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    PartnerContactTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    PartnerContactTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    PartnerContactTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-contact-table',
            template: __webpack_require__(/*! ./partner-contact-table.component.html */ "./client/app/modules/components/partner-contact-table/partner-contact-table.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./partner-contact-table.component.css */ "./client/app/modules/components/partner-contact-table/partner-contact-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_2__["ExpandingPartnerChildrenService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_6__["SettingService"],
            _core_services_update_partner_service__WEBPACK_IMPORTED_MODULE_5__["UpdatePartnerService"]])
    ], PartnerContactTableComponent);
    return PartnerContactTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/partner-form/partner-form.component.css":
/*!*******************************************************************************!*\
  !*** ./client/app/modules/components/partner-form/partner-form.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partner-form{\r\n    width: 1050px;\r\n}\r\n.open-tbl-btn button {\r\n    float: right;\r\n    margin-left: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BhcnRuZXItZm9ybS9wYXJ0bmVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcGFydG5lci1mb3JtL3BhcnRuZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXItZm9ybXtcclxuICAgIHdpZHRoOiAxMDUwcHg7XHJcbn1cclxuLm9wZW4tdGJsLWJ0biBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/components/partner-form/partner-form.component.html":
/*!********************************************************************************!*\
  !*** ./client/app/modules/components/partner-form/partner-form.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partner-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"partner-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Partner Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-3\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}\n                    </button>\n                </div>\n                <div class=\"ui-g-9 open-tbl-btn\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onOpenContacts()\"\n                            *ngIf=\"!formMode\">Linked Contacts\n                    </button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onOpenAddresses()\"\n                            *ngIf=\"!formMode\">Addresses\n                    </button>\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"onOpenSubstations()\"\n                            *ngIf=\"!formMode\">Substations\n                    </button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"mrid\">MrID</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(mrID.trim().length == 0)}\"\n                                   (ngModelChange)=\"mrIDChange($event)\"\n                                   [ngModel]=\"mrID\" id=\"mrid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"eiccode\">EicCode</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(eicCode.trim().length == 0)}\"\n                                   (ngModelChange)=\"eicCodeChange($event)\"\n                                   [ngModel]=\"eicCode\" id=\"eiccode\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"partnerrole\">Role</label>\n                            <select name=\"role\" class=\"form-control\" [ngModel]=\"partnerRole\"\n                                    (ngModelChange)=\"roleChange($event)\" id=\"partnerrole\">\n                                <option *ngFor=\"let partnerrole of partnerRoles\" [selected]=\"partnerrole == role\">{{partnerrole}}</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <input name=\"description\" class=\"form-control\" (ngModelChange)=\"descriptionChange($event)\"\n                                   [ngModel]=\"description\" id=\"description\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Address</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"address-number\">Number</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"numberChange($event)\"\n                                   [ngModel]=\"addressNumber\" id=\"address-number\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"street\">Street</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"streetChange($event)\"\n                                   [ngModel]=\"street\" id=\"street\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">City</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"cityChange($event)\"\n                                   [ngModel]=\"city\" id=\"city\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"locality\">Locality</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"localityChange($event)\"\n                                   [ngModel]=\"locality\" id=\"locality\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"zip\">Zip</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"zipChange($event)\"\n                                   [ngModel]=\"zip\" id=\"zip\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"country\">Country</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"countryChange($event)\"\n                                   [ngModel]=\"country\" id=\"country\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"region\">Region</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"regionChange($event)\"\n                                   [ngModel]=\"region\" id=\"region\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Contacts</h5>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <p-table #dt sortMode=\"multiple\"\n                                 [value]=\"contacts\"\n                                 [paginator]=\"true\" [rows]=\"5\"\n                                 [totalRecords]=\"contacts.length\"\n                                 selectionMode=\"multiple\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th *ngFor=\"let contactcol of contactCols\" [pSortableColumn]=\"contactcol.field\">\n                                        {{contactcol.header}}\n                                        <p-sortIcon [field]=\"contactcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width:4em\"></th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-contact>\n                                <tr>\n                                    <td pEditableColumn *ngFor=\"let contactcol of contactCols\">\n                                        <p-cellEditor>\n                                            <ng-template pTemplate=\"input\">\n                                                <input pInputText type=\"text\" *ngIf=\"contactcol.field != 'role'\"\n                                                       [(ngModel)]=\"contact[contactcol.field]\"\n                                                       (blur)=\"onContactEditComplete(contact)\"\n                                                       (keydown.tab)=\"onContactEditComplete(contact)\"\n                                                       (keydown.enter)=\"onContactEditComplete(contact)\">\n                                                <p-dropdown [options]=\"contactRoles\" *ngIf=\"contactcol.field == 'role'\"\n                                                            [(ngModel)]=\"contact[contactcol.field]\"\n                                                            (onChange) = \"onContactEditComplete(contact)\"\n                                                            [style]=\"{'width':'100%'}\">\n                                                </p-dropdown>\n                                            </ng-template>\n                                            <ng-template pTemplate=\"output\">\n                                                {{contact[contactcol.field]}}\n                                            </ng-template>\n                                        </p-cellEditor>\n                                    </td>\n                                    <td>\n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onDeleteContact(contact)\"></button>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"summary\" let-contact>\n                                <div style=\"text-align:left\">\n                                    <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"onShowAddDialog()\" label=\"Add\"></button>\n                                </div>\n                            </ng-template>\n                        </p-table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n    <p-dialog header=\"Contact Details\" [(visible)]=\"displayAddModal\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nFName\">First Name</label>\n                    <input [ngModel]=\"newContact.firstname\" (ngModelChange)=\"newFirstNameChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nFName\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nSName\">Last Name</label>\n                    <input [ngModel]=\"newContact.lastname\" (ngModelChange)=\"newLastNameChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nSName\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nPhone\">Phone</label>\n                    <input [ngModel]=\"newContact.phone\" (ngModelChange)=\"newPhoneChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nPhone\">\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nFName\">Email</label>\n                    <input [ngModel]=\"newContact.email\" (ngModelChange)=\"newEmailChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nEmail\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nCRole\">Role</label>\n                    <select class=\"form-control\" (ngModelChange)=\"newRoleChange($event)\"\n                            [ngModel]=\"newContact.role\">\n                        <option *ngFor=\"let contactrole of contactRoles\"  id=\"nCRole\">\n                            {{contactrole.value}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nUserID\">UserID</label>\n                    <input [ngModel]=\"newContact.userid\" [ngClass]=\"{'mg-error':(newContact.userid.trim().length == 0)}\"\n                           (ngModelChange)=\"newUserIDChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nUserID\">\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscard()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddRow()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/partner-form/partner-form.component.ts":
/*!******************************************************************************!*\
  !*** ./client/app/modules/components/partner-form/partner-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: PartnerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerFormComponent", function() { return PartnerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_update_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/update-partner.service */ "./client/app/core/services/update-partner.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_partner_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/partner-form.service */ "./client/app/core/services/partner-form.service.ts");
/* harmony import */ var _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/interfaces/user-role */ "./client/app/core/interfaces/user-role.ts");
/* harmony import */ var _core_interfaces_partner_role__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/interfaces/partner-role */ "./client/app/core/interfaces/partner-role.ts");
/* harmony import */ var _core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/services/expanding-partner-children.service */ "./client/app/core/services/expanding-partner-children.service.ts");











var PartnerFormComponent = /** @class */ (function () {
    function PartnerFormComponent(httpService, partnerFormService, scrollService, updatePartnerService, expandPartnerChildrenService, navService, confirmationService) {
        this.httpService = httpService;
        this.partnerFormService = partnerFormService;
        this.scrollService = scrollService;
        this.updatePartnerService = updatePartnerService;
        this.expandPartnerChildrenService = expandPartnerChildrenService;
        this.navService = navService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.displayAddModal = false;
        this.contactRoles = [];
        this.partnerRoles = [];
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__["UserRole"].manager, userid: '' };
        for (var item in _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__["UserRole"]) {
            if (isNaN(Number(item))) {
                this.contactRoles.push({ label: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__["UserRole"][item], value: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__["UserRole"][item] });
            }
        }
        for (var item in _core_interfaces_partner_role__WEBPACK_IMPORTED_MODULE_9__["PartnerRole"]) {
            if (isNaN(Number(item))) {
                this.partnerRoles.push(_core_interfaces_partner_role__WEBPACK_IMPORTED_MODULE_9__["PartnerRole"][item]);
            }
        }
        this.contactCols = [
            { field: 'firstname', header: 'First Name' },
            { field: 'lastname', header: 'Last Name' },
            { field: 'phone', header: 'Phone' },
            { field: 'email', header: 'Email' },
            { field: 'role', header: 'Role' },
            { field: 'userid', header: 'UserID' },
        ];
        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/partners";
    }
    PartnerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partnerFormService.getPartnerFormInfo().subscribe(function (subFormInfo) {
            _this.formMode = subFormInfo.type;
            _this.isEnabled = subFormInfo.showMode;
            _this.formData = subFormInfo.value;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.setPartnerDetails();
        });
    };
    PartnerFormComponent.prototype.setPartnerDetails = function () {
        this.mrID = this.formData.mrid;
        this.eicCode = this.formData.eicCode;
        this.partnerRole = this.formData.role.role;
        this.description = this.formData.description;
        this.contacts = JSON.parse(JSON.stringify(this.formData.contacts)); //Array copy
        this.addressNumber = this.formData.registeredseat.number;
        this.street = this.formData.registeredseat.street;
        this.city = this.formData.registeredseat.city;
        this.locality = this.formData.registeredseat.locality;
        this.zip = this.formData.registeredseat.zip;
        this.country = this.formData.registeredseat.country;
        this.region = this.formData.registeredseat.region;
        this.isFormChanged = false;
    };
    PartnerFormComponent.prototype.initFormFields = function () {
        this.eicCode = this.mrID = this.description = '';
        this.contacts = [];
        this.partnerRole = _core_interfaces_partner_role__WEBPACK_IMPORTED_MODULE_9__["PartnerRole"].owner;
        this.addressNumber = this.street = this.city = this.locality = this.zip = this.country = this.region = '';
    };
    PartnerFormComponent.prototype.initFormData = function () {
        this.formData = {
            eicCode: '',
            mrid: '',
            role: { role: _core_interfaces_partner_role__WEBPACK_IMPORTED_MODULE_9__["PartnerRole"].owner },
            contacts: [],
            location: { latitude: 0, longitude: 0, altitude: 0 },
            registeredseat: [{ number: '', street: '', city: '', locality: '', zip: '', country: '', region: '' }],
            description: '',
        };
    };
    PartnerFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var postBody_1 = {
                eicCode: this.eicCode,
                mrid: this.mrID,
                role: { role: this.partnerRole },
                contacts: this.contacts,
                registeredseat: {
                    number: this.addressNumber,
                    street: this.street,
                    city: this.city,
                    locality: this.locality,
                    zip: this.zip,
                    country: this.country,
                    region: this.region,
                },
                description: this.description,
            };
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.contacts = [];
                    _this.updatePartnerService.setPartnerInfo(true, null, postBody_1);
                    _this.initFormData();
                    _this.initFormFields();
                    _this.isFormChanged = false;
                    console.log('Success in add substation', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in add substation', err);
                });
            }
            else { //Edit mode
                var partnerEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, partnerEditURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updatePartnerService.setPartnerInfo(false, _this.formData.mrid, postBody_1);
                    _this.formData = postBody_1;
                    _this.contacts = JSON.parse(JSON.stringify(_this.formData.contacts));
                    _this.isFormChanged = false;
                    console.log('Success in update partners', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in update partners', err);
                });
            }
        }
    };
    PartnerFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    PartnerFormComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('partner-list', true, '');
        var htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        this.initFormFields();
        this.initFormData();
    };
    PartnerFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    PartnerFormComponent.prototype.checkValidation = function () {
        if (this.eicCode.trim() == "") {
            return false;
        }
        if (this.mrID.trim() == "") {
            return false;
        }
        return true;
    };
    PartnerFormComponent.prototype.onContactEditComplete = function (newVal) {
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.onDeleteContact = function (contactVal) {
        var indexof = this.contacts.indexOf(contactVal);
        if (indexof > -1) {
            this.contacts.splice(indexof, 1);
        }
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.compareContacts = function (x, y) {
        return (x.firstname == y.firstname &&
            x.lastname == y.lastname &&
            x.phone == y.phone &&
            x.email == y.email &&
            x.userid == y.userid &&
            x.role == y.role);
    };
    PartnerFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.mrID != this.formData.mrid ||
            this.eicCode != this.formData.eicCode ||
            this.partnerRole != this.formData.role.role ||
            this.contacts.length != this.formData.contacts.length ||
            this.addressNumber != this.formData.registeredseat.number ||
            this.street != this.formData.registeredseat.street ||
            this.city != this.formData.registeredseat.city ||
            this.locality != this.formData.registeredseat.locality ||
            this.zip != this.formData.registeredseat.zip ||
            this.country != this.formData.registeredseat.country ||
            this.region != this.formData.registeredseat.region ||
            this.description != this.formData.description);
        var sameObjCnt = 0;
        var formContacts = this.formData.contacts;
        for (var i = 0; i < this.contacts.length; i++) {
            for (var j = 0; j < formContacts.length; j++) {
                if (this.compareContacts(this.contacts[i], formContacts[j])) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.contacts.length);
    };
    PartnerFormComponent.prototype.onShowAddDialog = function () {
        this.displayAddModal = true;
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__["UserRole"].manager, userid: '' };
    };
    PartnerFormComponent.prototype.onDiscard = function () {
        this.displayAddModal = false;
    };
    PartnerFormComponent.prototype.onAddRow = function () {
        if (this.newContact.userid.trim() == "")
            return;
        this.contacts.push(this.newContact);
        this.displayAddModal = false;
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_8__["UserRole"].manager, userid: '' };
        this.isFormChanged = true;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.onOpenContacts = function () {
        var self = this;
        this.navService.setNavInfo('partner-contact', true, '');
        setTimeout(function () {
            self.expandPartnerChildrenService.setPartnerChildrenStatus(true, self.formData.contacts, 'contact');
            self.scrollService.setMovedScroll(true, 'partner-contact-list');
        }, 100);
    };
    PartnerFormComponent.prototype.onOpenAddresses = function () {
        var self = this;
        this.navService.setNavInfo('partner-address', true, '');
        setTimeout(function () {
            self.expandPartnerChildrenService.setPartnerChildrenStatus(true, self.formData.mrid, 'address');
            self.scrollService.setMovedScroll(true, 'partner-address-list');
        }, 100);
    };
    PartnerFormComponent.prototype.onOpenSubstations = function () {
        var self = this;
        this.navService.setNavInfo('partner-substation', true, '');
        setTimeout(function () {
            self.expandPartnerChildrenService.setPartnerChildrenStatus(true, self.formData.mrid, 'substation');
            self.scrollService.setMovedScroll(true, 'partner-substation-list');
        }, 100);
    };
    PartnerFormComponent.prototype.eicCodeChange = function (newVal) {
        this.eicCode = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.mrIDChange = function (newVal) {
        this.mrID = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.descriptionChange = function (newVal) {
        this.description = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.zipChange = function (newVal) {
        this.zip = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.streetChange = function (newVal) {
        this.street = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.numberChange = function (newVal) {
        this.addressNumber = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.cityChange = function (newVal) {
        this.city = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.localityChange = function (newVal) {
        this.locality = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.countryChange = function (newVal) {
        this.country = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.regionChange = function (newVal) {
        this.region = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.roleChange = function (newVal) {
        this.partnerRole = newVal;
        this.checkFormChange();
    };
    PartnerFormComponent.prototype.newFirstNameChange = function (newVal) {
        this.newContact.firstname = newVal;
    };
    PartnerFormComponent.prototype.newLastNameChange = function (newVal) {
        this.newContact.lastname = newVal;
    };
    PartnerFormComponent.prototype.newPhoneChange = function (newVal) {
        this.newContact.phone = newVal;
    };
    PartnerFormComponent.prototype.newEmailChange = function (newVal) {
        this.newContact.email = newVal;
    };
    PartnerFormComponent.prototype.newUserIDChange = function (newVal) {
        this.newContact.userid = newVal;
    };
    PartnerFormComponent.prototype.newRoleChange = function (newVal) {
        this.newContact.role = newVal;
    };
    PartnerFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-form',
            template: __webpack_require__(/*! ./partner-form.component.html */ "./client/app/modules/components/partner-form/partner-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./partner-form.component.css */ "./client/app/modules/components/partner-form/partner-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _core_services_partner_form_service__WEBPACK_IMPORTED_MODULE_7__["PartnerFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_6__["ScrollMovingService"],
            _core_services_update_partner_service__WEBPACK_IMPORTED_MODULE_4__["UpdatePartnerService"],
            _core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_10__["ExpandingPartnerChildrenService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], PartnerFormComponent);
    return PartnerFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/partner-substation-table/partner-substation-table.component.css":
/*!*******************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-substation-table/partner-substation-table.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partner-substation-list {\r\n    width: 2100px;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BhcnRuZXItc3Vic3RhdGlvbi10YWJsZS9wYXJ0bmVyLXN1YnN0YXRpb24tdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvcGFydG5lci1zdWJzdGF0aW9uLXRhYmxlL3BhcnRuZXItc3Vic3RhdGlvbi10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXItc3Vic3RhdGlvbi1saXN0IHtcclxuICAgIHdpZHRoOiAyMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/partner-substation-table/partner-substation-table.component.html":
/*!********************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-substation-table/partner-substation-table.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partner-substation-list card mg-app-component\"  id=\"{{tableId}}\" *ngIf=\"isEnabled\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Substations</h4>\n            <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                            <tr>\n                                <th>Visible</th>\n                                <th>Column</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let subcol of subCols\">\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"subcol.visibility && curSelColsCnt == 1\"\n                                                (onChange)=\"onChangeVisibility(subcol)\"\n                                                [(ngModel)]=\"subcol.visibility\">\n                                </p-checkbox></td>\n                                <td>{{subcol.header}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"substations\"\n                 [paginator]=\"true\" [rows]=\"10\"\n                 [totalRecords]=\"substations.length\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 [resizableColumns]=\"true\"\n                 columnResizeMode=\"expand\"\n                 (onColResize) = \"onColResize($event)\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let subcol of subCols\"\n                        [ngClass]=\"{'mg-hide': !subcol.visibility}\"\n                        [pSortableColumn]=\" (subcol.group != '')? subcol.group + '.' + subcol.field: subcol.field\" pResizableColumn>\n                        {{subcol.header}}\n                        <p-sortIcon [field]=\"subcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th *ngFor=\"let subcol of subCols\"\n                        [ngClass]=\"{'mg-hide':!subcol.visibility}\"\n                        [ngSwitch]=\"subcol.field\" >\n                        <input *ngSwitchCase=\"subcol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, subcol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-substation>\n                <tr>\n                    <td *ngFor=\"let subcol of subCols\"\n                        [ngClass]=\"{'mg-hide':!subcol.visibility}\">\n                        {{ (subcol.group != '')? substation[subcol.group][subcol.field]: substation[subcol.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/partner-substation-table/partner-substation-table.component.ts":
/*!******************************************************************************************************!*\
  !*** ./client/app/modules/components/partner-substation-table/partner-substation-table.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PartnerSubstationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerSubstationTableComponent", function() { return PartnerSubstationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/expanding-partner-children.service */ "./client/app/core/services/expanding-partner-children.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");






var PartnerSubstationTableComponent = /** @class */ (function () {
    function PartnerSubstationTableComponent(expandPartnerChildService, httpService, settingService, navService) {
        this.expandPartnerChildService = expandPartnerChildService;
        this.httpService = httpService;
        this.settingService = settingService;
        this.navService = navService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.partnerMrID = '';
        this.isEnabled = false;
        this.substations = [];
        this.selectedRows = [];
        this.isHideFilter = false;
        this.apiURL = config.client_info.apiURL.serverURL + "/partners/";
        this.tableId = 'partner-substation-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.subCols = [
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'latitude', header: 'Location.Lat', group: 'location' },
            { field: 'longitude', header: 'Location.Lon', group: 'location' },
            { field: 'altitude', header: 'Location.Alt', group: 'location' },
            { field: 'number', header: 'Address.Number', group: 'address' },
            { field: 'street', header: 'Address.Street', group: 'address' },
            { field: 'city', header: 'Address.City', group: 'address' },
            { field: 'locality', header: 'Address.Locality', group: 'address' },
            { field: 'zip', header: 'Address.Zip', group: 'address' },
            { field: 'country', header: 'Address.Country', group: 'address' },
            { field: 'region', header: 'Address.Region', group: 'address' },
        ];
    }
    PartnerSubstationTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTableSetting();
        this.expandPartnerChildService.getPartnerChildrenInfo().subscribe(function (substationInfo) {
            if (substationInfo.name == 'substation') {
                _this.isEnabled = substationInfo.mode;
                _this.partnerMrID = substationInfo.data;
                _this.getSubstations();
            }
        });
    };
    PartnerSubstationTableComponent.prototype.getSubstations = function () {
        var _this = this;
        this.contentLoaded = false;
        var apiURL = this.apiURL + this.partnerMrID + '/substations';
        this.httpService.httpGetRequest(this.accessToken, apiURL).subscribe(function (res) {
            _this.substations = res;
            _this.contentLoaded = true;
        }, function (error) {
            console.error("Can't get substation list", error);
            _this.substations = [];
            _this.contentLoaded = true;
        });
    };
    PartnerSubstationTableComponent.prototype.onCloseComponent = function () {
        this.navService.setNavInfo('partner-form', true, '');
    };
    PartnerSubstationTableComponent.prototype.initTableSetting = function () {
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
                'MrId', 'Description',
                'Location.Lat', 'Location.Lon', 'Location.Alt',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.subCols = this.checkColVisibility(this.subCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    PartnerSubstationTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    PartnerSubstationTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    PartnerSubstationTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    PartnerSubstationTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    PartnerSubstationTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    PartnerSubstationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-substation-table',
            template: __webpack_require__(/*! ./partner-substation-table.component.html */ "./client/app/modules/components/partner-substation-table/partner-substation-table.component.html"),
            styles: [__webpack_require__(/*! ./partner-substation-table.component.css */ "./client/app/modules/components/partner-substation-table/partner-substation-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_expanding_partner_children_service__WEBPACK_IMPORTED_MODULE_4__["ExpandingPartnerChildrenService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_5__["SettingService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]])
    ], PartnerSubstationTableComponent);
    return PartnerSubstationTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/partner-table/partner-table.component.css":
/*!*********************************************************************************!*\
  !*** ./client/app/modules/components/partner-table/partner-table.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partner-list {\r\n    width: 1944px;\r\n    display: inline-block;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BhcnRuZXItdGFibGUvcGFydG5lci10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9wYXJ0bmVyLXRhYmxlL3BhcnRuZXItdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJ0bmVyLWxpc3Qge1xyXG4gICAgd2lkdGg6IDE5NDRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/partner-table/partner-table.component.html":
/*!**********************************************************************************!*\
  !*** ./client/app/modules/components/partner-table/partner-table.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partner-list card mg-app-component\" id=\"{{tableId}}\">\r\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\r\n        <img src=\"../../../../assets/img/loading.svg\">\r\n    </div>\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <h4>Partners</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"table-setting-bar\">\r\n            <div class=\"dropdown mg-dropdown-area\" >\r\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\r\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\r\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\r\n                        (click)=\"isShowSetting = !isShowSetting\">\r\n                    <i class=\"fa fa-cog\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\r\n                    <div style=\"text-align:left\">\r\n                        <table>\r\n                            <thead>\r\n                            <tr>\r\n                                <th>Visible</th>\r\n                                <th>Column</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let partnercol of partnerCols\">\r\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"partnercol.visibility && curSelColsCnt == 1\"\r\n                                                (onChange)=\"onChangeVisibility(partnercol)\"\r\n                                                [(ngModel)]=\"partnercol.visibility\">\r\n                                </p-checkbox></td>\r\n                                <td>{{partnercol.header}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\r\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\r\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\r\n                <i class=\"fa fa-filter\"></i>\r\n            </button>\r\n            <button class=\"btn btn-danger delete-item\"\r\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\r\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\r\n                <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewRow()\">+ Add New</button>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <p-table #dt sortMode=\"multiple\"\r\n                 [value]=\"partners\"\r\n                 [paginator]=\"true\" [rows]=\"10\"\r\n                 [totalRecords]=\"partners.length\"\r\n                 [(selection)]=\"selectedRows\"\r\n                 selectionMode=\"multiple\"\r\n                 [resizableColumns]=\"true\"\r\n                 columnResizeMode=\"expand\"\r\n                 (onColResize) = \"onColResize($event)\"\r\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\r\n                 (onRowSelect)=\"onRowSelect($event)\"\r\n                 (onRowUnselect)=\"onRowUnselect($event)\">\r\n            <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                    <th class=\"mg-item-checkbox\">\r\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                    </th>\r\n                    <th class=\"th-id-wrap\"\r\n                        *ngFor=\"let partnercol of partnerCols\"\r\n                        [ngClass]=\"{'mg-hide': !partnercol.visibility}\"\r\n                        [pSortableColumn]=\" (partnercol.group != '')? partnercol.group + '.' + partnercol.field: partnercol.field\" pResizableColumn>\r\n                        {{partnercol.header}}\r\n                        <p-sortIcon [field]=\"partnercol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\r\n                    </th>\r\n                </tr>\r\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\r\n                    <th></th>\r\n                    <th *ngFor=\"let partnercol of partnerCols\"\r\n                        [ngClass]=\"{'mg-hide':!partnercol.visibility}\"\r\n                        [ngSwitch]=\"partnercol.field\" >\r\n                        <input *ngSwitchCase=\"partnercol.field\" pInputText type=\"text\"\r\n                               (input)=\"onTblFilter($event, partnercol, dt)\">\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-partner>\r\n                <tr>\r\n                    <td>\r\n                        <p-tableCheckbox [value]=\"partner\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td *ngFor=\"let partnercol of partnerCols\"  (click)=\"onEditRow(partner)\"\r\n                        [ngClass]=\"{'mg-hide':!partnercol.visibility}\">\r\n                        {{ (partnercol.group != '')? partner[partnercol.group][partnercol.field]: partner[partnercol.field]}}\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./client/app/modules/components/partner-table/partner-table.component.ts":
/*!********************************************************************************!*\
  !*** ./client/app/modules/components/partner-table/partner-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: PartnerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerTableComponent", function() { return PartnerTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_partner_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/partner-form.service */ "./client/app/core/services/partner-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_partner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/update-partner.service */ "./client/app/core/services/update-partner.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");









var PartnerTableComponent = /** @class */ (function () {
    function PartnerTableComponent(partnerFormService, httpService, scrollService, settingService, updatePartnerService, navService) {
        this.partnerFormService = partnerFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.settingService = settingService;
        this.updatePartnerService = updatePartnerService;
        this.navService = navService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.partners = [];
        this.apiURL = config.client_info.apiURL.serverURL + "/partners";
        this.selectedRows = [];
        this.tableId = 'partner-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.partnerCols = [
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'eicCode', header: 'EicCode', group: '' },
            { field: 'role', header: 'Role', group: 'role' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'number', header: 'Address.Number', group: 'registeredseat' },
            { field: 'street', header: 'Address.Street', group: 'registeredseat' },
            { field: 'city', header: 'Address.City', group: 'registeredseat' },
            { field: 'locality', header: 'Address.Locality', group: 'registeredseat' },
            { field: 'zip', header: 'Address.Zip', group: 'registeredseat' },
            { field: 'country', header: 'Address.Country', group: 'registeredseat' },
            { field: 'region', header: 'Address.Region', group: 'registeredseat' },
        ];
    }
    PartnerTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedRows = [];
        this.isHideFilter = false;
        this.contactCols = [
            { field: 'firstname', header: 'Firstname' },
            { field: 'lastname', header: 'Lastname' },
            { field: 'phone', header: 'Phone' },
            { field: 'email', header: 'Email' },
            { field: 'role', header: 'Role' },
            { field: 'userid', header: 'UserID' },
        ];
        this.getPartners();
        this.initTableSetting();
        this.updatePartnerService.getPartnerInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                console.log(updateInfo.newPartner);
                _this.partners.push(updateInfo.newPartner);
            }
            else {
                for (var i = 0; i < _this.partners.length; i++) {
                    if (_this.partners[i].mrid == updateInfo.mrid) {
                        _this.partners[i] = updateInfo.newPartner;
                    }
                }
            }
        });
    };
    PartnerTableComponent.prototype.getPartners = function () {
        var _this = this;
        var partnerIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe(function (res) {
            partnerIdList = res;
            for (var i = 0; i < partnerIdList.length; i++) {
                var partnerDetailURL = _this.apiURL + '/' + partnerIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, partnerDetailURL));
            }
            if (partnerIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.partners = results;
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get partners list", err);
                    _this.partners = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get partners list");
                _this.partners = [];
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get partners list", error);
            _this.partners = [];
            _this.contentLoaded = true;
        });
    };
    PartnerTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var subIds = [];
        var promiseList = [];
        for (var i = 0; i < this.selectedRows.length; i++) {
            var subDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            subIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, subDeleteURL));
        }
        if (subIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftPartners = [];
                for (var i = 0; i < _this.partners.length; i++) {
                    if (subIds.indexOf(_this.partners[i].mrid) < 0) {
                        leftPartners.push(_this.partners[i]);
                    }
                }
                _this.partners = leftPartners;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, function (err) {
                _this.partners = [];
                _this.contentLoaded = true;
                console.error('Error in partners Deleting', err);
            });
        }
        else {
            this.partners = [];
            this.contentLoaded = true;
            console.log('Error in partners Deleting due to the Empty String');
        }
    };
    PartnerTableComponent.prototype.onEditRow = function (partner) {
        var self = this;
        this.navService.setNavInfo('partner-form', true, partner.mrid);
        setTimeout(function () {
            self.partnerFormService.setPartnerFormInfo(false, partner, true);
            self.scrollService.setMovedScroll(true, 'partner-form');
        }, 100);
    };
    PartnerTableComponent.prototype.onAddNewRow = function () {
        var self = this;
        this.navService.setNavInfo('partner-form', true, '');
        setTimeout(function () {
            self.partnerFormService.setPartnerFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'partner-form');
        }, 100);
    };
    PartnerTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    PartnerTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    PartnerTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    // ====================================================
    PartnerTableComponent.prototype.initTableSetting = function () {
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
                'MrId', 'EicCode', 'Role', 'Description',
                'Location.Lat', 'Location.Lon', 'Location.Alt',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.partnerCols = this.checkColVisibility(this.partnerCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    PartnerTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    PartnerTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    PartnerTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    PartnerTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    PartnerTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    PartnerTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner-table',
            template: __webpack_require__(/*! ./partner-table.component.html */ "./client/app/modules/components/partner-table/partner-table.component.html"),
            styles: [__webpack_require__(/*! ./partner-table.component.css */ "./client/app/modules/components/partner-table/partner-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_partner_form_service__WEBPACK_IMPORTED_MODULE_2__["PartnerFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_6__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__["ScrollMovingService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_8__["SettingService"],
            _core_services_update_partner_service__WEBPACK_IMPORTED_MODULE_4__["UpdatePartnerService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]])
    ], PartnerTableComponent);
    return PartnerTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/physical-substation-form/physical-substation-form.component.css":
/*!*******************************************************************************************************!*\
  !*** ./client/app/modules/components/physical-substation-form/physical-substation-form.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".physical-substation-form .table-setting-bar label {\r\n    padding-top: 8px;margin-bottom: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3BoeXNpY2FsLXN1YnN0YXRpb24tZm9ybS9waHlzaWNhbC1zdWJzdGF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQixDQUFDLGdCQUFnQjtBQUNyQyIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9waHlzaWNhbC1zdWJzdGF0aW9uLWZvcm0vcGh5c2ljYWwtc3Vic3RhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGh5c2ljYWwtc3Vic3RhdGlvbi1mb3JtIC50YWJsZS1zZXR0aW5nLWJhciBsYWJlbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O21hcmdpbi1ib3R0b206IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/physical-substation-form/physical-substation-form.component.html":
/*!********************************************************************************************************!*\
  !*** ./client/app/modules/components/physical-substation-form/physical-substation-form.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"physical-substation-form\" id=\"{{tableId}}\">\n    <p-dialog header=\"Physical Substations\"\n              width=\"1068\"\n              [(visible)]=\"displayModal\"\n              (onShow)=\"onShowDialog()\"\n              (onHide)=\"onDiscard()\"\n              [modal]=\"true\">\n        <div class=\"table-setting-bar\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button class=\"btn filter-items\" (click)=\"isHideFilter = !isHideFilter\"\n                            pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\" tooltipPosition=\"top\"\n                            [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\">\n                        <i class=\"fa fa-filter\"></i>\n                    </button>\n                </div>\n                <div class=\"ui-g-3 text-right\">\n                    <label>Role</label>\n                </div>\n                <div class=\"ui-g-3\">\n                    <select class=\"form-control\" [(ngModel)]=\"selectedRole\">\n                        <option *ngFor=\"let vrole of vRoles\" [value]=\"vrole.value\"\n                                [selected]=\"(selectedRole && vrole.value == selectedRole)\">{{vrole.value}}</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"substations\"\n                 [totalRecords]=\"substations.length\"\n                 [paginator]=\"true\" [rows]=\"5\"\n                 [(selection)]=\"selectedRow\"\n                 selectionMode=\"single\">\n            <ng-template pTemplate=\"header\">\n                <tr>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let subcol of subCols\"\n                        [pSortableColumn]=\" (subcol.group != '')? subcol.group + '.' + subcol.field: subcol.field\">\n                        {{subcol.header}}\n                        <p-sortIcon [field]=\"subcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th *ngFor=\"let subcol of subCols\"\n                        [ngSwitch]=\"subcol.field\">\n                        <input *ngSwitchCase=\"subcol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, subcol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-partner>\n                <tr [pSelectableRow]=\"partner\">\n                    <td *ngFor=\"let subcol of subCols\">\n                        {{ (subcol.group != '') ? partner[subcol.group][subcol.field] : partner[subcol.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscard()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddRow()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/physical-substation-form/physical-substation-form.component.ts":
/*!******************************************************************************************************!*\
  !*** ./client/app/modules/components/physical-substation-form/physical-substation-form.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PhysicalSubstationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalSubstationFormComponent", function() { return PhysicalSubstationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_interfaces_virtual_substation_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/interfaces/virtual-substation-role */ "./client/app/core/interfaces/virtual-substation-role.ts");






var PhysicalSubstationFormComponent = /** @class */ (function () {
    function PhysicalSubstationFormComponent(authService, httpService) {
        this.authService = authService;
        this.httpService = httpService;
        this.closeForm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addNewItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.isHideFilter = false;
        this.substations = [];
        this.subCols = [
            { field: 'partnermrid', header: 'PMrId', group: '' },
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'latitude', header: 'Location.Lat', group: 'location' },
            { field: 'longitude', header: 'Location.Lon', group: 'location' },
            { field: 'altitude', header: 'Location.Alt', group: 'location' },
        ];
        this.tableId = "v-p-substation-list";
        this.apiURL = config.client_info.apiURL.serverURL + "/substations";
        this.selectedRow = { partnermrid: '', mrid: '', location: null, contacts: null, address: null, description: '' };
        this.selectedRole = '';
        this.vRoles = [];
        for (var item in _core_interfaces_virtual_substation_role__WEBPACK_IMPORTED_MODULE_5__["VirtualSubstationRole"]) {
            if (isNaN(Number(item))) {
                this.vRoles.push({ label: _core_interfaces_virtual_substation_role__WEBPACK_IMPORTED_MODULE_5__["VirtualSubstationRole"][item], value: _core_interfaces_virtual_substation_role__WEBPACK_IMPORTED_MODULE_5__["VirtualSubstationRole"][item] });
            }
        }
    }
    PhysicalSubstationFormComponent.prototype.ngOnInit = function () {
        this.contentLoaded = false;
    };
    PhysicalSubstationFormComponent.prototype.getSubstations = function () {
        var _this = this;
        if (this.substations.length > 0)
            return;
        var subIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe(function (res) {
            subIdList = res;
            for (var i = 0; i < subIdList.length; i++) {
                var subDetailURL = _this.apiURL + '/' + subIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, subDetailURL));
            }
            if (subIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.substations = results;
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get substation list", err);
                    _this.substations = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get substation list");
                alert('No substation data is accessible');
                // this.authService.setAuthInfo({login_st:false}); ////888888888888888888888888
                // this.substations = [];
                _this.contentLoaded = true;
            }
        }, function (error) {
            _this.httpErrorHandler(error);
            console.error("Can't get substation list", error);
            _this.substations = [];
            _this.contentLoaded = true;
        });
    };
    PhysicalSubstationFormComponent.prototype.httpErrorHandler = function (error) {
        var msgPrefix = "The remote server returned an error: ";
        var err401Msg = "(401) Unauthorized.";
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
    PhysicalSubstationFormComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    PhysicalSubstationFormComponent.prototype.onDiscard = function () {
        ///Send Hide Event to parent
        this.closeForm.emit('closed form');
    };
    PhysicalSubstationFormComponent.prototype.onAddRow = function () {
        this.addNewItem.emit({ substationmrid: this.selectedRow.mrid, role: this.selectedRole });
    };
    PhysicalSubstationFormComponent.prototype.onShowDialog = function () {
        this.getSubstations();
        if (this.selectedRole == '') {
            this.selectedRole = this.vRoles[0].value;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PhysicalSubstationFormComponent.prototype, "displayModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhysicalSubstationFormComponent.prototype, "closeForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhysicalSubstationFormComponent.prototype, "addNewItem", void 0);
    PhysicalSubstationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-physical-substation-form',
            template: __webpack_require__(/*! ./physical-substation-form.component.html */ "./client/app/modules/components/physical-substation-form/physical-substation-form.component.html"),
            styles: [__webpack_require__(/*! ./physical-substation-form.component.css */ "./client/app/modules/components/physical-substation-form/physical-substation-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"]])
    ], PhysicalSubstationFormComponent);
    return PhysicalSubstationFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/sidebar/sidebar.component.css":
/*!*********************************************************************!*\
  !*** ./client/app/modules/components/sidebar/sidebar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mg-sidebar {\r\n    padding-top: 20px;\r\n    width: 225px;\r\n    min-height: calc(100vh - 56px);\r\n    background-color: #323130;\r\n}\r\n\r\n.mg-sidebar .mg-sidebar-link {\r\n    display: block;\r\n    padding: 12px 30px;\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\n.mg-sidebar .mg-sidebar-link:hover {\r\n    text-decoration: none;\r\n    background-color: #131212e8;\r\n}\r\n\r\n.mg-sidebar-link i {\r\n    margin-right: 10px;\r\n}\r\n\r\n.mg-sidebar-link.active{\r\n    background-color: #131212e8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSwyQkFBMkI7QUFDL0IiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWctc2lkZWJhciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAyMjVweDtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjMxMzA7XHJcbn1cclxuXHJcbi5tZy1zaWRlYmFyIC5tZy1zaWRlYmFyLWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZy1zaWRlYmFyIC5tZy1zaWRlYmFyLWxpbms6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTIxMmU4O1xyXG59XHJcblxyXG4ubWctc2lkZWJhci1saW5rIGkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tZy1zaWRlYmFyLWxpbmsuYWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTIxMmU4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/sidebar/sidebar.component.html":
/*!**********************************************************************!*\
  !*** ./client/app/modules/components/sidebar/sidebar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mg-sidebar\">\n  <a class=\"mg-sidebar-link\" *ngFor=\"let menuitem of items\" [ngClass]=\"{'active':(menuitem.routerLink == router.url)}\" routerLink=\"{{menuitem.routerLink}}\">\n  <i class=\"{{menuitem.icon}}\"></i>  {{menuitem.label}}\n  </a>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/sidebar/sidebar.component.ts":
/*!********************************************************************!*\
  !*** ./client/app/modules/components/sidebar/sidebar.component.ts ***!
  \********************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Substation', icon: 'fa fa-sitemap', routerLink: '/app/substation' },
            { label: 'Virtual Substation', icon: 'fa fa-sitemap', routerLink: '/app/virtual-substation' },
            { label: 'Partner', icon: 'fa fa-users', routerLink: '/app/partner' },
            { label: 'Measurements', icon: 'fa fa-list-ul', routerLink: '/app/measurements' },
            { label: 'Device Types', icon: 'fa fa-list-ul', routerLink: '/app/device-types' },
            { label: 'Global settings', icon: 'fa fa-cog', routerLink: '/app/global-settings' }
        ];
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./client/app/modules/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./client/app/modules/components/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/substation-form/substation-form.component.css":
/*!*************************************************************************************!*\
  !*** ./client/app/modules/components/substation-form/substation-form.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".substation-form {\r\n    width: 960px;\r\n}\r\n.filter-items {\r\n    margin-left: 5px;\r\n}\r\n.partner-substation-list {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 1;\r\n    opacity: 1;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #bfbfbfa1;\r\n}\r\n.custom-partner-modal {\r\n    background-color: rgba(255, 255, 255, 0.96);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 2px;\r\n    max-width: 96%;\r\n    max-height: 96%;\r\n    /*overflow-y: auto;*/\r\n}\r\n.partner-substation-list .close-icon {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    cursor: pointer;\r\n}\r\n.custom-partner-modal h6 {\r\n    background-color: #e0e0e085;\r\n    padding-left: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 12px;\r\n}\r\n.custom-partner-modal .custom-modal-body {\r\n    padding: 0 20px 20px 20px;\r\n}\r\n.custom-modal-body .ui-dialog-buttonpane {\r\n    margin-top: 10px;\r\n    text-align: right\r\n}\r\n.custom-modal-body .ui-dialog-buttonpane  button.discard-btn {\r\n    margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3N1YnN0YXRpb24tZm9ybS9zdWJzdGF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtJQUNWLFVBQVU7SUFDVixPQUFPO0lBQ1AsTUFBTTtJQUNOLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9zdWJzdGF0aW9uLWZvcm0vc3Vic3RhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic3RhdGlvbi1mb3JtIHtcclxuICAgIHdpZHRoOiA5NjBweDtcclxufVxyXG4uZmlsdGVyLWl0ZW1zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi5wYXJ0bmVyLXN1YnN0YXRpb24tbGlzdCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYmZiZmExO1xyXG59XHJcblxyXG4uY3VzdG9tLXBhcnRuZXItbW9kYWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NiU7XHJcbiAgICBtYXgtaGVpZ2h0OiA5NiU7XHJcbiAgICAvKm92ZXJmbG93LXk6IGF1dG87Ki9cclxufVxyXG4ucGFydG5lci1zdWJzdGF0aW9uLWxpc3QgLmNsb3NlLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFydG5lci1tb2RhbCBoNiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwODU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uY3VzdG9tLXBhcnRuZXItbW9kYWwgLmN1c3RvbS1tb2RhbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbn1cclxuLmN1c3RvbS1tb2RhbC1ib2R5IC51aS1kaWFsb2ctYnV0dG9ucGFuZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLmN1c3RvbS1tb2RhbC1ib2R5IC51aS1kaWFsb2ctYnV0dG9ucGFuZSAgYnV0dG9uLmRpc2NhcmQtYnRuIHtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/components/substation-form/substation-form.component.html":
/*!**************************************************************************************!*\
  !*** ./client/app/modules/components/substation-form/substation-form.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substation-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"substation-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Substation Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode)?'Add':'Save' }}</button>\n                </div>\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"btn btn-success op-btn-details\" (click)=\"onBaysTable()\"\n                            *ngIf=\"!formMode\">Bays</button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Partner</h5>\n                    </div>\n                    <div class=\"ui-g-9\">\n                        <p>MrID : {{selectedPartnerRow.mrid}}</p>\n                        <p>EicCode : {{selectedPartnerRow.eicCode}}</p>\n                        <p>Description : {{selectedPartnerRow.description}}</p>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <button type=\"button\" class=\"btn btn-info mg-show-popup-tbl\" (click)=\"onShowPartnersDialog()\">\n                            <i class=\"fa fa-ellipsis-h\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"mrid\">MrID</label>\n                            <input type=\"text\"  class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(mrID.trim().length == 0)}\"\n                                   (ngModelChange)=\"mrIDChange($event)\"\n                                   [ngModel]=\"mrID\" id=\"mrid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <input name=\"description\" class=\"form-control\"\n                                   (ngModelChange)=\"descriptionChange($event)\"\n                                   [ngModel]=\"description\" id=\"description\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Location</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"latitude\">Latitude</label>\n                            <input type=\"number\"  class=\"form-control\" (ngModelChange)=\"latitudeChange($event)\"\n                                   [ngModel]=\"latitude\" id=\"latitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"longitude\">Longitude</label>\n                            <input type=\"number\"  class=\"form-control\" (ngModelChange)=\"longitudeChange($event)\"\n                                   [ngModel]=\"longitude\" id=\"longitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"altitude\">Altitude</label>\n                            <input type=\"number\"  class=\"form-control\" (ngModelChange)=\"altitudeChange($event)\"\n                                   [ngModel]=\"altitude\" id=\"altitude\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Contacts</h5>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <p-table #dt sortMode=\"multiple\"\n                                 [value]=\"contacts\"\n                                 [paginator]=\"true\" [rows]=\"5\"\n                                 [totalRecords]=\"contacts.length\"\n                                 selectionMode=\"multiple\"\n                                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                                 (onRowSelect)=\"onRowSelect($event)\"\n                                 (onRowUnselect)=\"onRowUnselect($event)\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th *ngFor=\"let contactcol of contactCols\" [pSortableColumn]=\"contactcol.field\">\n                                        {{contactcol.header}}\n                                        <p-sortIcon [field]=\"contactcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width:4em\"></th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-contact>\n                                <tr>\n                                    <td pEditableColumn *ngFor=\"let contactcol of contactCols\">\n                                        <p-cellEditor>\n                                            <ng-template pTemplate=\"input\">\n                                                <input pInputText type=\"text\" *ngIf=\"contactcol.field != 'role'\"\n                                                       [(ngModel)]=\"contact[contactcol.field]\"\n                                                       (blur)=\"onContactEditComplete(contact)\"\n                                                       (keydown.tab)=\"onContactEditComplete(contact)\"\n                                                       (keydown.enter)=\"onContactEditComplete(contact)\">\n                                                <p-dropdown [options]=\"contactRoles\" *ngIf=\"contactcol.field == 'role'\"\n                                                            [(ngModel)]=\"contact[contactcol.field]\"\n                                                            (onChange) = \"onContactEditComplete(contact)\"\n                                                            [style]=\"{'width':'100%'}\">\n                                                </p-dropdown>\n                                            </ng-template>\n                                            <ng-template pTemplate=\"output\">\n                                                {{contact[contactcol.field]}}\n                                            </ng-template>\n                                        </p-cellEditor>\n                                    </td>\n                                    <td>\n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\" (click)=\"onDeleteContact(contact)\"></button>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"summary\" let-contact>\n                                <div style=\"text-align:left\">\n                                    <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"onShowAddDialog()\" label=\"Add\"></button>\n                                </div>\n                            </ng-template>\n                        </p-table>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Address</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"address-number\">Number</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"numberChange($event)\"\n                                   [ngModel]=\"addressNumber\" id=\"address-number\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"street\">Street</label>\n                            <input type=\"text\"  class=\"form-control\" (ngModelChange)=\"streetChange($event)\"\n                                   [ngModel]=\"street\" id=\"street\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">City</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"cityChange($event)\"\n                                   [ngModel]=\"city\" id=\"city\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"locality\">Locality</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"localityChange($event)\"\n                                   [ngModel]=\"locality\" id=\"locality\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"zip\">Zip</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"zipChange($event)\"\n                                   [ngModel]=\"zip\" id=\"zip\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"country\">Country</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"countryChange($event)\"\n                                   [ngModel]=\"country\" id=\"country\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"region\">Region</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"regionChange($event)\"\n                                   [ngModel]=\"region\" id=\"region\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n    <p-dialog header=\"Contact Details\" [(visible)]=\"displayAddModal\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nFName\">First Name</label>\n                    <input [ngModel]=\"newContact.firstname\" (ngModelChange)=\"newFirstNameChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nFName\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nSName\">Last Name</label>\n                    <input [ngModel]=\"newContact.lastname\" (ngModelChange)=\"newLastNameChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nSName\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nPhone\">Phone</label>\n                    <input [ngModel]=\"newContact.phone\" (ngModelChange)=\"newPhoneChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nPhone\">\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nFName\">Email</label>\n                    <input [ngModel]=\"newContact.email\" (ngModelChange)=\"newEmailChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nEmail\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nCRole\">Role</label>\n                    <select class=\"form-control\" (ngModelChange)=\"newRoleChange($event)\"\n                            [ngModel]=\"newContact.role\">\n                        <option *ngFor=\"let contactrole of contactRoles\"  id=\"nCRole\">\n                            {{contactrole.value}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nUserID\">UserID</label>\n                    <input [ngModel]=\"newContact.userid\" [ngClass]=\"{'mg-error':(newContact.userid.trim().length == 0)}\"\n                           (ngModelChange)=\"newUserIDChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nUserID\">\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscard()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddRow()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"partner-substation-list\" [ngClass]=\"{'mg-hide':!displayPartnerModal}\" id=\"substation-partner-tbl\">\n    <div class=\"custom-partner-modal\">\n        <h6>Partner</h6>\n        <span class=\"pi pi-times close-icon\" (click)=\"onDiscardPartner()\" ></span>\n        <div class=\"custom-modal-body\">\n            <div class=\"table-setting-bar\">\n                <div class=\"dropdown mg-dropdown-area\" >\n                    <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                            pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                            (click)=\"isShowSetting = !isShowSetting\">\n                        <i class=\"fa fa-cog\"></i>\n                    </button>\n                    <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                        <div style=\"text-align:left\">\n                            <table>\n                                <thead>\n                                <tr>\n                                    <th>Visible</th>\n                                    <th>Column</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let partnercol of partnerCols\">\n                                    <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"partnercol.visibility && curSelColsCnt == 1\"\n                                                    (onChange)=\"onChangeVisibility(partnercol)\"\n                                                    [(ngModel)]=\"partnercol.visibility\">\n                                    </p-checkbox></td>\n                                    <td>{{partnercol.header}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                        pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                        [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                    <i class=\"fa fa-filter\"></i>\n                </button>\n                <div class=\"clearfix\"></div>\n            </div>\n            <p-table #dt sortMode=\"multiple\"\n                     [value]=\"partners\"\n                     [totalRecords]=\"partners.length\"\n                     [paginator]=\"true\" [rows]=\"5\"\n                     [(selection)]=\"selectedPartnerRow\"\n                     selectionMode=\"single\"\n                     [resizableColumns]=\"true\"\n                     columnResizeMode=\"expand\"\n                     (onColResize) = \"onColResize($event)\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th class=\"th-id-wrap\"\n                            *ngFor=\"let partnercol of partnerCols\"\n                            [ngClass]=\"{'mg-hide': !partnercol.visibility}\"\n                            [pSortableColumn]=\" (partnercol.group != '')? partnercol.group + '.' + partnercol.field: partnercol.field\" pResizableColumn>\n                            {{partnercol.header}}\n                            <p-sortIcon [field]=\"partnercol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                        </th>\n                    </tr>\n                    <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                        <th *ngFor=\"let partnercol of partnerCols\"\n                            [ngClass]=\"{'mg-hide':!partnercol.visibility}\"\n                            [ngSwitch]=\"partnercol.field\" >\n                            <input *ngSwitchCase=\"partnercol.field\" pInputText type=\"text\"\n                                   (input)=\"onTblFilter($event, partnercol, dt)\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-partner>\n                    <tr [pSelectableRow]=\"partner\">\n                        <td *ngFor=\"let partnercol of partnerCols\"\n                            [ngClass]=\"{'mg-hide':!partnercol.visibility}\">\n                            {{ (partnercol.group != '')? partner[partnercol.group][partnercol.field]: partner[partnercol.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" class=\"discard-btn\" pButton icon=\"fa fa-close\" (click)=\"onDiscardPartner()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onSelectPartner()\" label=\"Save\"></button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./client/app/modules/components/substation-form/substation-form.component.ts":
/*!************************************************************************************!*\
  !*** ./client/app/modules/components/substation-form/substation-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubstationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstationFormComponent", function() { return SubstationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/sub-form.service */ "./client/app/core/services/sub-form.service.ts");
/* harmony import */ var _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/interfaces/user-role */ "./client/app/core/interfaces/user-role.ts");
/* harmony import */ var _core_interfaces_address_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/interfaces/address-role */ "./client/app/core/interfaces/address-role.ts");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/update-substation.service */ "./client/app/core/services/update-substation.service.ts");
/* harmony import */ var _core_services_expanding_bay_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/expanding-bay.service */ "./client/app/core/services/expanding-bay.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");













var SubstationFormComponent = /** @class */ (function () {
    function SubstationFormComponent(httpService, settingService, subFormService, scrollService, updateSubstationService, expandBayService, navService, confirmationService) {
        this.httpService = httpService;
        this.settingService = settingService;
        this.subFormService = subFormService;
        this.scrollService = scrollService;
        this.updateSubstationService = updateSubstationService;
        this.expandBayService = expandBayService;
        this.navService = navService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.partners = [];
        this.contactRoles = [];
        this.addressRole = [];
        this.displayAddModal = false;
        this.displayPartnerModal = false;
        this.contactCols = [
            { field: 'firstname', header: 'First Name' },
            { field: 'lastname', header: 'Last Name' },
            { field: 'phone', header: 'Phone' },
            { field: 'email', header: 'Email' },
            { field: 'role', header: 'Role' },
            { field: 'userid', header: 'UserID' },
        ];
        this.tableId = 'substation-partner-tbl';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.partnerCols = [
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'eicCode', header: 'EicCode', group: '' },
            { field: 'role', header: 'Role', group: 'role' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'number', header: 'Address.Number', group: 'registeredseat' },
            { field: 'street', header: 'Address.Street', group: 'registeredseat' },
            { field: 'city', header: 'Address.City', group: 'registeredseat' },
            { field: 'locality', header: 'Address.Locality', group: 'registeredseat' },
            { field: 'zip', header: 'Address.Zip', group: 'registeredseat' },
            { field: 'country', header: 'Address.Country', group: 'registeredseat' },
            { field: 'region', header: 'Address.Region', group: 'registeredseat' },
        ];
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__["UserRole"].manager, userid: '' };
        this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
        for (var item in _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__["UserRole"]) {
            if (isNaN(Number(item))) {
                this.contactRoles.push({ label: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__["UserRole"][item], value: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__["UserRole"][item] });
            }
        }
        for (var item in _core_interfaces_address_role__WEBPACK_IMPORTED_MODULE_4__["AddressRole"]) {
            if (isNaN(Number(item))) {
                this.addressRole.push(_core_interfaces_address_role__WEBPACK_IMPORTED_MODULE_4__["AddressRole"][item]);
            }
        }
        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/substations";
    }
    SubstationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subFormService.getSubFormInfo().subscribe(function (subFormInfo) {
            _this.isEnabled = subFormInfo.showMode;
            _this.formData = subFormInfo.value;
            _this.formMode = subFormInfo.type;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.setSubDetails();
        });
    };
    SubstationFormComponent.prototype.setSubDetails = function () {
        this.partnerMrID = this.formData.partnermrid;
        this.mrID = this.formData.mrid;
        this.description = this.formData.description;
        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;
        this.contacts = JSON.parse(JSON.stringify(this.formData.contacts)); //Array copy
        this.addressNumber = this.formData.address.number;
        this.street = this.formData.address.street;
        this.city = this.formData.address.city;
        this.locality = this.formData.address.locality;
        this.zip = this.formData.address.zip;
        this.country = this.formData.address.country;
        this.region = this.formData.address.region;
        this.isFormChanged = false;
        this.getPartners();
    };
    SubstationFormComponent.prototype.initFormFields = function () {
        this.partnerMrID = this.mrID = this.description = '';
        this.latitude = this.longitude = this.altitude = 0;
        this.contacts = [];
        this.addressNumber = this.street = this.city = this.locality = this.zip = this.country = this.region = '';
    };
    SubstationFormComponent.prototype.initFormData = function () {
        this.formData = {
            partnermrid: '',
            mrid: '',
            location: { latitude: 0, longitude: 0, altitude: 0 },
            contacts: [],
            address: {
                number: '',
                street: '',
                city: '',
                locality: '',
                zip: '',
                country: '',
                region: '',
            },
            description: '',
        };
    };
    SubstationFormComponent.prototype.onBaysTable = function () {
        var self = this;
        this.navService.setNavInfo('bay-list', true, this.formData.mrid);
        setTimeout(function () {
            self.expandBayService.setBayStatus(true, self.formData.mrid);
            self.scrollService.setMovedScroll(true, 'bay-list');
        }, 100);
    };
    SubstationFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var postBody_1 = {
                partnermrid: this.partnerMrID,
                mrid: this.mrID,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                contacts: this.contacts,
                address: {
                    number: this.addressNumber,
                    street: this.street,
                    city: this.city,
                    locality: this.locality,
                    zip: this.zip,
                    country: this.country,
                    region: this.region,
                },
                description: this.description,
            };
            if (this.formMode) { //Add mode
                this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.contacts = [];
                    _this.updateSubstationService.setSubstationInfo(true, null, postBody_1);
                    _this.initFormData();
                    _this.initFormFields();
                    _this.isFormChanged = false;
                    console.log('Success in add substation', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    _this.contacts = [];
                    console.log('Error in add substation', err);
                });
            }
            else { //Edit mode
                var subEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, subEditURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updateSubstationService.setSubstationInfo(false, _this.formData.mrid, postBody_1);
                    _this.formData = postBody_1;
                    _this.contacts = JSON.parse(JSON.stringify(_this.formData.contacts));
                    _this.isFormChanged = false;
                    console.log('Success in update substations', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    _this.isFormChanged = false;
                    console.log('Error in update substations', err);
                });
            }
        }
    };
    SubstationFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    SubstationFormComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('sub-list', true, '');
        var htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        this.initFormFields();
        this.initFormData();
    };
    SubstationFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    SubstationFormComponent.prototype.checkValidation = function () {
        if (this.partnerMrID.trim() == "") {
            return false;
        }
        if (this.mrID.trim() == "") {
            return false;
        }
        return true;
    };
    SubstationFormComponent.prototype.compareContacts = function (x, y) {
        return (x.firstname == y.firstname &&
            x.lastname == y.lastname &&
            x.phone == y.phone &&
            x.email == y.email &&
            x.userid == y.userid &&
            x.role == y.role);
    };
    SubstationFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.partnerMrID != this.formData.partnermrid ||
            this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.contacts.length != this.formData.contacts.length ||
            this.addressNumber != this.formData.address.number ||
            this.street != this.formData.address.street ||
            this.city != this.formData.address.city ||
            this.locality != this.formData.address.locality ||
            this.zip != this.formData.address.zip ||
            this.country != this.formData.address.country ||
            this.region != this.formData.address.region ||
            // this.role != this.formData.address.role ||
            this.description != this.formData.description);
        var sameObjCnt = 0;
        var formContacts = this.formData.contacts;
        for (var i = 0; i < this.contacts.length; i++) {
            for (var j = 0; j < formContacts.length; j++) {
                if (this.compareContacts(this.contacts[i], formContacts[j])) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.contacts.length);
    };
    SubstationFormComponent.prototype.partnerMrIDChange = function (newVal) {
        this.partnerMrID = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.mrIDChange = function (newVal) {
        this.mrID = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.descriptionChange = function (newVal) {
        this.description = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.zipChange = function (newVal) {
        this.zip = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.streetChange = function (newVal) {
        this.street = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.numberChange = function (newVal) {
        this.addressNumber = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.cityChange = function (newVal) {
        this.city = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.latitudeChange = function (newVal) {
        this.latitude = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.longitudeChange = function (newVal) {
        this.longitude = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.altitudeChange = function (newVal) {
        this.altitude = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.localityChange = function (newVal) {
        this.locality = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.countryChange = function (newVal) {
        this.country = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.regionChange = function (newVal) {
        this.region = newVal;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.newFirstNameChange = function (newVal) {
        this.newContact.firstname = newVal;
    };
    SubstationFormComponent.prototype.newLastNameChange = function (newVal) {
        this.newContact.lastname = newVal;
    };
    SubstationFormComponent.prototype.newPhoneChange = function (newVal) {
        this.newContact.phone = newVal;
    };
    SubstationFormComponent.prototype.newEmailChange = function (newVal) {
        this.newContact.email = newVal;
    };
    SubstationFormComponent.prototype.newUserIDChange = function (newVal) {
        this.newContact.userid = newVal;
    };
    SubstationFormComponent.prototype.newRoleChange = function (newVal) {
        this.newContact.role = newVal;
    };
    SubstationFormComponent.prototype.onShowAddDialog = function () {
        this.displayAddModal = true;
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__["UserRole"].manager, userid: '' };
    };
    SubstationFormComponent.prototype.onDiscard = function () {
        this.displayAddModal = false;
    };
    SubstationFormComponent.prototype.onAddRow = function () {
        if (this.newContact.userid.trim() == "")
            return;
        this.contacts.push(this.newContact);
        this.displayAddModal = false;
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_3__["UserRole"].manager, userid: '' };
        this.isFormChanged = true;
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.onContactEditComplete = function (newVal) {
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.onDeleteContact = function (contactVal) {
        var indexof = this.contacts.indexOf(contactVal);
        if (indexof > -1) {
            this.contacts.splice(indexof, 1);
        }
        this.checkFormChange();
    };
    SubstationFormComponent.prototype.onShowPartnersDialog = function () {
        this.initTableSetting();
        this.displayPartnerModal = true;
    };
    SubstationFormComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedPartnerRow);
    };
    SubstationFormComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedPartnerRow);
    };
    SubstationFormComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedPartnerRow);
        }
        else {
            // alert('all rows diselected');
        }
    };
    SubstationFormComponent.prototype.getPartners = function () {
        var _this = this;
        var partnerIdList = [];
        var promiseList = [];
        var partnerListURL = config.client_info.apiURL.serverURL + "/partners";
        this.httpService.httpGetRequest(this.accessToken, partnerListURL).subscribe(function (res) {
            partnerIdList = res;
            for (var i = 0; i < partnerIdList.length; i++) {
                var partnerDetailURL = partnerListURL + '/' + partnerIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, partnerDetailURL));
            }
            if (partnerIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.partners = results;
                    for (var j = 0; j < results.length; j++) {
                        if (results[j].mrid == _this.partnerMrID) {
                            _this.selectedPartnerRow = results[j];
                        }
                    }
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get partners list", err);
                    _this.partners = [];
                    _this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get partners list");
                _this.partners = [];
                _this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get partners list", error);
            _this.partners = [];
            _this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
            _this.contentLoaded = true;
        });
    };
    SubstationFormComponent.prototype.onDiscardPartner = function () {
        this.displayPartnerModal = false;
    };
    SubstationFormComponent.prototype.onSelectPartner = function () {
        if (this.selectedPartnerRow && this.selectedPartnerRow.mrid) {
            this.displayPartnerModal = false;
            this.partnerMrID = this.selectedPartnerRow.mrid;
            this.isFormChanged = true;
            this.checkFormChange();
        }
    };
    SubstationFormComponent.prototype.initTableSetting = function () {
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
                'MrId', 'EicCode', 'Role', 'Description',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.partnerCols = this.checkColVisibility(this.partnerCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    SubstationFormComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    SubstationFormComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    SubstationFormComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    SubstationFormComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    SubstationFormComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    SubstationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-substation-form',
            template: __webpack_require__(/*! ./substation-form.component.html */ "./client/app/modules/components/substation-form/substation-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./substation-form.component.css */ "./client/app/modules/components/substation-form/substation-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_5__["HttpServiceHelper"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_12__["SettingService"],
            _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_2__["SubFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_8__["ScrollMovingService"],
            _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_6__["UpdateSubstationService"],
            _core_services_expanding_bay_service__WEBPACK_IMPORTED_MODULE_7__["ExpandingBayService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_10__["ConfirmationService"]])
    ], SubstationFormComponent);
    return SubstationFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/substation-table/substation-table.component.css":
/*!***************************************************************************************!*\
  !*** ./client/app/modules/components/substation-table/substation-table.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".substation-list {\r\n    width: 2270px;\r\n    display: inline-block;\r\n}\r\n.th-location-wrap {\r\n    width: 240px;\r\n}\r\n.th-id-wrap:nth-child(3) {\r\n    width: 135px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3N1YnN0YXRpb24tdGFibGUvc3Vic3RhdGlvbi10YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvY29tcG9uZW50cy9zdWJzdGF0aW9uLXRhYmxlL3N1YnN0YXRpb24tdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzdGF0aW9uLWxpc3Qge1xyXG4gICAgd2lkdGg6IDIyNzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4udGgtbG9jYXRpb24td3JhcCB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbn1cclxuLnRoLWlkLXdyYXA6bnRoLWNoaWxkKDMpIHtcclxuICAgIHdpZHRoOiAxMzVweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/components/substation-table/substation-table.component.html":
/*!****************************************************************************************!*\
  !*** ./client/app/modules/components/substation-table/substation-table.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substation-list card mg-app-component\" id=\"{{tableId}}\">\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\n        <img src=\"../../../../assets/img/loading.svg\">\n    </div>\n    <div class=\"card-header\">\n        <div class=\"card-title\">\n            <h4>Substations</h4>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"table-setting-bar\">\n            <div class=\"dropdown mg-dropdown-area\" >\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\n                        (click)=\"isShowSetting = !isShowSetting\">\n                    <i class=\"fa fa-cog\"></i>\n                </button>\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                    <div style=\"text-align:left\">\n                        <table>\n                            <thead>\n                            <tr>\n                                <th>Visible</th>\n                                <th>Column</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let subcol of subCols\">\n                                    <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"subcol.visibility && curSelColsCnt == 1\"\n                                                    (onChange)=\"onChangeVisibility(subcol)\"\n                                                    [(ngModel)]=\"subcol.visibility\">\n                                    </p-checkbox></td>\n                                    <td>{{subcol.header}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\n                <i class=\"fa fa-filter\"></i>\n            </button>\n            <button class=\"btn btn-danger delete-item\"\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\n                <i class=\"fa fa-trash\"></i>\n            </button>\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewSubstation()\">+ Add New</button>\n            <div class=\"clearfix\"></div>\n        </div>\n        <p-table #dt sortMode=\"multiple\"\n                 [value]=\"substations\"\n                 [totalRecords]=\"substations.length\"\n                 [paginator]=\"true\"\n                 [rows]=\"10\"\n                 [(selection)]=\"selectedRows\"\n                 selectionMode=\"multiple\"\n                 [resizableColumns]=\"true\"\n                 columnResizeMode=\"expand\"\n                 (onColResize) = \"onColResize($event)\"\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                 (onRowSelect)=\"onRowSelect($event)\"\n                 (onRowUnselect)=\"onRowUnselect($event)\">\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th class=\"mg-item-checkbox\">\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                    </th>\n                    <th class=\"th-id-wrap\"\n                        *ngFor=\"let subcol of subCols\"\n                        [ngClass]=\"{'mg-hide': !subcol.visibility}\"\n                        [pSortableColumn]=\" (subcol.group != '')? subcol.group + '.' + subcol.field: subcol.field\" pResizableColumn>\n                        {{subcol.header}}\n                        <p-sortIcon [field]=\"subcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                    <th></th>\n                    <th *ngFor=\"let subcol of subCols\"\n                        [ngClass]=\"{'mg-hide':!subcol.visibility}\"\n                        [ngSwitch]=\"subcol.field\" >\n                        <input *ngSwitchCase=\"subcol.field\" pInputText type=\"text\"\n                               (input)=\"onTblFilter($event, subcol, dt)\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-substation>\n                <tr>\n                    <td>\n                        <p-tableCheckbox [value]=\"substation\"></p-tableCheckbox>\n                    </td>\n                    <td *ngFor=\"let subcol of subCols\"  (click)=\"editSubstation(substation)\"\n                        [ngClass]=\"{'mg-hide':!subcol.visibility}\">\n                        {{ (subcol.group != '')? substation[subcol.group][subcol.field]: substation[subcol.field]}}\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/substation-table/substation-table.component.ts":
/*!**************************************************************************************!*\
  !*** ./client/app/modules/components/substation-table/substation-table.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SubstationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstationTableComponent", function() { return SubstationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/sub-form.service */ "./client/app/core/services/sub-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/update-substation.service */ "./client/app/core/services/update-substation.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");










var SubstationTableComponent = /** @class */ (function () {
    function SubstationTableComponent(authService, subFormService, httpService, scrollService, settingService, updateSubstationService, naveService) {
        this.authService = authService;
        this.subFormService = subFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.settingService = settingService;
        this.updateSubstationService = updateSubstationService;
        this.naveService = naveService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.substations = [];
        this.apiURL = config.client_info.apiURL.serverURL + "/substations";
        this.selectedRows = [];
        this.tableId = 'substation-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.subCols = [
            { field: 'partnermrid', header: 'PMrId', group: '' },
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'latitude', header: 'Location.Lat', group: 'location' },
            { field: 'longitude', header: 'Location.Lon', group: 'location' },
            { field: 'altitude', header: 'Location.Alt', group: 'location' },
            { field: 'number', header: 'Address.Number', group: 'address' },
            { field: 'street', header: 'Address.Street', group: 'address' },
            { field: 'city', header: 'Address.City', group: 'address' },
            { field: 'locality', header: 'Address.Locality', group: 'address' },
            { field: 'zip', header: 'Address.Zip', group: 'address' },
            { field: 'country', header: 'Address.Country', group: 'address' },
            { field: 'region', header: 'Address.Region', group: 'address' },
        ];
    }
    SubstationTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSubstations();
        this.initTableSetting();
        //Getting table setting from localstorage.
        this.updateSubstationService.getSubstationInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                console.log(updateInfo.newSub);
                _this.substations.push(updateInfo.newSub);
            }
            else {
                for (var i = 0; i < _this.substations.length; i++) {
                    if (_this.substations[i].mrid == updateInfo.mrid) {
                        _this.substations[i] = updateInfo.newSub;
                    }
                }
            }
        });
    };
    SubstationTableComponent.prototype.getSubstations = function () {
        var _this = this;
        var subIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe(function (res) {
            subIdList = res;
            for (var i = 0; i < subIdList.length; i++) {
                var subDetailURL = _this.apiURL + '/' + subIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, subDetailURL));
            }
            if (subIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.substations = results;
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get substation list", err);
                    _this.substations = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get substation list");
                alert('No substation data is accessible');
                _this.authService.setAuthInfo({ login_st: false }); ////888888888888888888888888
                _this.substations = [];
                _this.contentLoaded = true;
            }
        }, function (error) {
            _this.httpErrorHandler(error);
            console.error("Can't get substation list", error);
            _this.substations = [];
            _this.contentLoaded = true;
        });
    };
    SubstationTableComponent.prototype.httpErrorHandler = function (error) {
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
    SubstationTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var subIds = [];
        var promiseList = [];
        for (var i = 0; i < this.selectedRows.length; i++) {
            var subDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            subIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, subDeleteURL));
        }
        if (subIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftSubstations = [];
                for (var i = 0; i < _this.substations.length; i++) {
                    if (subIds.indexOf(_this.substations[i].mrid) < 0) {
                        leftSubstations.push(_this.substations[i]);
                    }
                }
                _this.substations = leftSubstations;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, function (err) {
                _this.substations = [];
                _this.contentLoaded = true;
                console.error('Error in substations Deleting', err);
            });
        }
        else {
            this.substations = [];
            this.contentLoaded = true;
            console.log('Error in substations Deleting due to the Empty String');
        }
    };
    SubstationTableComponent.prototype.editSubstation = function (sub) {
        var self = this;
        this.naveService.setNavInfo('sub-form', true, sub.mrid);
        setTimeout(function () {
            self.subFormService.setSubFormInfo(false, sub, true);
            self.scrollService.setMovedScroll(true, 'substation-form');
        }, 100);
    };
    SubstationTableComponent.prototype.onAddNewSubstation = function () {
        var self = this;
        this.naveService.setNavInfo('sub-form', true, '');
        setTimeout(function () {
            self.subFormService.setSubFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'substation-form');
        }, 100);
    };
    SubstationTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    SubstationTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    SubstationTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    // ====================================================
    SubstationTableComponent.prototype.initTableSetting = function () {
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
                'PMrId', 'MrId', 'Description',
                'Location.Lat', 'Location.Lon', 'Location.Alt',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.subCols = this.checkColVisibility(this.subCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    SubstationTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    SubstationTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    SubstationTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    SubstationTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    SubstationTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    SubstationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-substation-table',
            template: __webpack_require__(/*! ./substation-table.component.html */ "./client/app/modules/components/substation-table/substation-table.component.html"),
            styles: [__webpack_require__(/*! ./substation-table.component.css */ "./client/app/modules/components/substation-table/substation-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_3__["SubFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_4__["ScrollMovingService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_9__["SettingService"],
            _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_5__["UpdateSubstationService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]])
    ], SubstationTableComponent);
    return SubstationTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.css":
/*!*****************************************************************************************************!*\
  !*** ./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".substation-form {\r\n    width: 960px;\r\n}\r\n.filter-items {\r\n    margin-left: 5px;\r\n}\r\n.partner-substation-list {\r\n    position: fixed;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    z-index: 1;\r\n    opacity: 1;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: #bfbfbfa1;\r\n}\r\n.custom-partner-modal {\r\n    background-color: rgba(255, 255, 255, 0.96);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 2px;\r\n    max-width: 96%;\r\n    max-height: 96%;\r\n    /*overflow-y: auto;*/\r\n}\r\n.partner-substation-list .close-icon {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    cursor: pointer;\r\n}\r\n.custom-partner-modal h6 {\r\n    background-color: #e0e0e085;\r\n    padding-left: 20px;\r\n    padding-top: 10px;\r\n    padding-bottom: 12px;\r\n}\r\n.custom-partner-modal .custom-modal-body {\r\n    padding: 0 20px 20px 20px;\r\n}\r\n.custom-modal-body .ui-dialog-buttonpane {\r\n    margin-top: 10px;\r\n    text-align: right\r\n}\r\n.custom-modal-body .ui-dialog-buttonpane  button.discard-btn {\r\n    margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3ZpcnR1YWwtc3Vic3RhdGlvbi1mb3JtL3ZpcnR1YWwtc3Vic3RhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixVQUFVO0lBQ1YsT0FBTztJQUNQLE1BQU07SUFDTiwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQjtBQUNKO0FBRUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvdmlydHVhbC1zdWJzdGF0aW9uLWZvcm0vdmlydHVhbC1zdWJzdGF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzdGF0aW9uLWZvcm0ge1xyXG4gICAgd2lkdGg6IDk2MHB4O1xyXG59XHJcbi5maWx0ZXItaXRlbXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnBhcnRuZXItc3Vic3RhdGlvbi1saXN0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZiZmJmYTE7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFydG5lci1tb2RhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTYpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2JTtcclxuICAgIG1heC1oZWlnaHQ6IDk2JTtcclxuICAgIC8qb3ZlcmZsb3cteTogYXV0bzsqL1xyXG59XHJcbi5wYXJ0bmVyLXN1YnN0YXRpb24tbGlzdCAuY2xvc2UtaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmN1c3RvbS1wYXJ0bmVyLW1vZGFsIGg2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA4NTtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5jdXN0b20tcGFydG5lci1tb2RhbCAuY3VzdG9tLW1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcclxufVxyXG4uY3VzdG9tLW1vZGFsLWJvZHkgLnVpLWRpYWxvZy1idXR0b25wYW5lIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodFxyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWJvZHkgLnVpLWRpYWxvZy1idXR0b25wYW5lICBidXR0b24uZGlzY2FyZC1idG4ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.html":
/*!******************************************************************************************************!*\
  !*** ./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substation-form mg-op-form mg-app-component\" *ngIf=\"isEnabled\" id=\"substation-form\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            <div class=\"card-title\">\n                <h4>Virtual Substation Details</h4>\n                <span (click)=\"onCloseComponent()\"><i class=\"fa fa-2x fa-close\"></i></span>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" class=\"btn btn-primary op-btn-save\" (click)=\"onSaveFormData()\"\n                            [disabled]=\"!isFormChanged\">{{ (formMode) ? 'Add' : 'Save' }}</button>\n                </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"form-content-wrap\">\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Partner</h5>\n                    </div>\n                    <div class=\"ui-g-9\">\n                        <p>MrID : {{selectedPartnerRow.mrid}}</p>\n                        <p>EicCode : {{selectedPartnerRow.eicCode}}</p>\n                        <p>Description : {{selectedPartnerRow.description}}</p>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <button type=\"button\" class=\"btn btn-info mg-show-popup-tbl\" (click)=\"onShowPartnersDialog()\">\n                            <i class=\"fa fa-ellipsis-h\"></i>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"mrid\">MrID</label>\n                            <input type=\"text\" class=\"form-control\"\n                                   [ngClass]=\"{'mg-error':(mrID.trim().length == 0)}\"\n                                   (ngModelChange)=\"mrIDChange($event)\"\n                                   [ngModel]=\"mrID\" id=\"mrid\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-6\">\n                        <div class=\"form-group\">\n                            <label for=\"description\">Description</label>\n                            <input name=\"description\" class=\"form-control\"\n                                   (ngModelChange)=\"descriptionChange($event)\"\n                                   [ngModel]=\"description\" id=\"description\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Substations</h5>\n                    </div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-12\">\n                            <p-table #dt sortMode=\"multiple\"\n                                     [value]=\"realSubList\"\n                                     [paginator]=\"true\" [rows]=\"5\"\n                                     [totalRecords]=\"realSubList.length\"\n                                     selectionMode=\"single\"\n                                     [(selection)]=\"curSelRealSub\">\n                                <ng-template pTemplate=\"header\">\n                                    <tr>\n                                        <th *ngFor=\"let subcol of subCols\" [pSortableColumn]=\"subcol.field\">\n                                            {{subcol.header}}\n                                            <p-sortIcon [field]=\"subcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                        </th>\n                                        <th style=\"width:4em\"></th>\n                                    </tr>\n                                </ng-template>\n                                <ng-template pTemplate=\"body\" let-substation>\n                                    <tr [pSelectableRow]=\"substation\">\n                                        <td>{{substation['substationmrid']}}</td>\n                                        <td>{{substation['role']}}</td>\n                                        <td>\n                                            <button pButton type=\"button\"\n                                                    icon=\"pi pi-times\"\n                                                    class=\"ui-button-danger\"\n                                                    (click)=\"onDeleteSub(substation)\"></button>\n                                        </td>\n                                    </tr>\n                                </ng-template>\n                                <ng-template pTemplate=\"summary\">\n                                    <div class=\"ui-g\">\n                                        <div class=\"ui-g-6 text-left\">\n                                            <button pButton type=\"button\"\n                                                    icon=\"pi pi-plus\"\n                                                    label=\"Add\"\n                                                    (click)=\"onShowRealSubForm()\"></button>\n                                        </div>\n                                    </div>\n                                </ng-template>\n                            </p-table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Location</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"latitude\">Latitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"latitudeChange($event)\"\n                                   [ngModel]=\"latitude\" id=\"latitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"longitude\">Longitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"longitudeChange($event)\"\n                                   [ngModel]=\"longitude\" id=\"longitude\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"altitude\">Altitude</label>\n                            <input type=\"number\" class=\"form-control\" (ngModelChange)=\"altitudeChange($event)\"\n                                   [ngModel]=\"altitude\" id=\"altitude\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Contacts</h5>\n                    </div>\n                    <div class=\"ui-g-12\">\n                        <p-table #dt sortMode=\"multiple\"\n                                 [value]=\"contacts\"\n                                 [paginator]=\"true\" [rows]=\"5\"\n                                 [totalRecords]=\"contacts.length\"\n                                 selectionMode=\"multiple\"\n                                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\n                                 (onRowSelect)=\"onRowSelect($event)\"\n                                 (onRowUnselect)=\"onRowUnselect($event)\">\n                            <ng-template pTemplate=\"header\">\n                                <tr>\n                                    <th *ngFor=\"let contactcol of contactCols\" [pSortableColumn]=\"contactcol.field\">\n                                        {{contactcol.header}}\n                                        <p-sortIcon [field]=\"contactcol.field\"\n                                                    ariaLabel=\"Activate to sort\"></p-sortIcon>\n                                    </th>\n                                    <th style=\"width:4em\"></th>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"body\" let-contact>\n                                <tr>\n                                    <td pEditableColumn *ngFor=\"let contactcol of contactCols\">\n                                        <p-cellEditor>\n                                            <ng-template pTemplate=\"input\">\n                                                <input pInputText type=\"text\" *ngIf=\"contactcol.field != 'role'\"\n                                                       [(ngModel)]=\"contact[contactcol.field]\"\n                                                       (blur)=\"onContactEditComplete(contact)\"\n                                                       (keydown.tab)=\"onContactEditComplete(contact)\"\n                                                       (keydown.enter)=\"onContactEditComplete(contact)\">\n                                                <p-dropdown [options]=\"contactRoles\" *ngIf=\"contactcol.field == 'role'\"\n                                                            [(ngModel)]=\"contact[contactcol.field]\"\n                                                            (onChange)=\"onContactEditComplete(contact)\"\n                                                            [style]=\"{'width':'100%'}\">\n                                                </p-dropdown>\n                                            </ng-template>\n                                            <ng-template pTemplate=\"output\">\n                                                {{contact[contactcol.field]}}\n                                            </ng-template>\n                                        </p-cellEditor>\n                                    </td>\n                                    <td>\n                                        <button pButton type=\"button\" icon=\"pi pi-times\" class=\"ui-button-danger\"\n                                                (click)=\"onDeleteContact(contact)\"></button>\n                                    </td>\n                                </tr>\n                            </ng-template>\n                            <ng-template pTemplate=\"summary\" let-contact>\n                                <div style=\"text-align:left\">\n                                    <button type=\"button\" pButton icon=\"fa fa-plus\" (click)=\"onShowAddDialog()\"\n                                            label=\"Add\"></button>\n                                </div>\n                            </ng-template>\n                        </p-table>\n                    </div>\n                </div>\n                <div class=\"ui-g mg-group-box\">\n                    <div class=\"mg-group-box-title\">\n                        <h5 class=\"\">Address</h5>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"address-number\">Number</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"numberChange($event)\"\n                                   [ngModel]=\"addressNumber\" id=\"address-number\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"street\">Street</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"streetChange($event)\"\n                                   [ngModel]=\"street\" id=\"street\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-4\">\n                        <div class=\"form-group\">\n                            <label for=\"city\">City</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"cityChange($event)\"\n                                   [ngModel]=\"city\" id=\"city\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"locality\">Locality</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"localityChange($event)\"\n                                   [ngModel]=\"locality\" id=\"locality\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"zip\">Zip</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"zipChange($event)\"\n                                   [ngModel]=\"zip\" id=\"zip\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"country\">Country</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"countryChange($event)\"\n                                   [ngModel]=\"country\" id=\"country\">\n                        </div>\n                    </div>\n                    <div class=\"ui-g-3\">\n                        <div class=\"form-group\">\n                            <label for=\"region\">Region</label>\n                            <input type=\"text\" class=\"form-control\" (ngModelChange)=\"regionChange($event)\"\n                                   [ngModel]=\"region\" id=\"region\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <p-confirmDialog header=\"Warning!\" icon=\"pi pi-exclamation-triangle\"></p-confirmDialog>\n    <p-dialog header=\"Contact Details\" [(visible)]=\"displayAddModal\" [responsive]=\"true\" showEffect=\"fade\"\n              [modal]=\"true\">\n        <div class=\"ui-g\">\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nFName\">First Name</label>\n                    <input [ngModel]=\"newContact.firstname\" (ngModelChange)=\"newFirstNameChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nFName\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nSName\">Last Name</label>\n                    <input [ngModel]=\"newContact.lastname\" (ngModelChange)=\"newLastNameChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nSName\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nPhone\">Phone</label>\n                    <input [ngModel]=\"newContact.phone\" (ngModelChange)=\"newPhoneChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nPhone\">\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g\">\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nFName\">Email</label>\n                    <input [ngModel]=\"newContact.email\" (ngModelChange)=\"newEmailChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nEmail\">\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nCRole\">Role</label>\n                    <select class=\"form-control\" (ngModelChange)=\"newRoleChange($event)\"\n                            [ngModel]=\"newContact.role\">\n                        <option *ngFor=\"let contactrole of contactRoles\" id=\"nCRole\">\n                            {{contactrole.value}}\n                        </option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"ui-g-4\">\n                <div class=\"form-group\">\n                    <label for=\"nUserID\">UserID</label>\n                    <input [ngModel]=\"newContact.userid\" [ngClass]=\"{'mg-error':(newContact.userid.trim().length == 0)}\"\n                           (ngModelChange)=\"newUserIDChange($event)\"\n                           type=\"text\" class=\"form-control\" id=\"nUserID\">\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa fa-close\" (click)=\"onDiscard()\" label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onAddRow()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n    <app-physical-substation-form\n            (addNewItem)=\"onAddRealSub($event)\"\n            (closeForm)=\"onDiscardRealSub()\"\n            [displayModal]=\"displayRealSubAddModal\">\n    </app-physical-substation-form>\n</div>\n\n<div class=\"partner-substation-list\" [ngClass]=\"{'mg-hide':!displayPartnerModal}\" id=\"substation-partner-tbl\">\n    <div class=\"custom-partner-modal\">\n        <h6>Partner</h6>\n        <span class=\"pi pi-times close-icon\" (click)=\"onDiscardPartner()\"></span>\n        <div class=\"custom-modal-body\">\n            <div class=\"table-setting-bar\">\n                <div class=\"dropdown mg-dropdown-area\">\n                    <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\n                            pTooltip=\"Column Setting\" tooltipPosition=\"top\"\n                            (click)=\"isShowSetting = !isShowSetting\">\n                        <i class=\"fa fa-cog\"></i>\n                    </button>\n                    <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\n                        <div style=\"text-align:left\">\n                            <table>\n                                <thead>\n                                <tr>\n                                    <th>Visible</th>\n                                    <th>Column</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr *ngFor=\"let partnercol of partnerCols\">\n                                    <td>\n                                        <p-checkbox binary=\"true\" value=\"true\"\n                                                    [disabled]=\"partnercol.visibility && curSelColsCnt == 1\"\n                                                    (onChange)=\"onChangeVisibility(partnercol)\"\n                                                    [(ngModel)]=\"partnercol.visibility\">\n                                        </p-checkbox>\n                                    </td>\n                                    <td>{{partnercol.header}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\n                        pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\" tooltipPosition=\"top\"\n                        [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\">\n                    <i class=\"fa fa-filter\"></i>\n                </button>\n                <div class=\"clearfix\"></div>\n            </div>\n            <p-table #dt sortMode=\"multiple\"\n                     [value]=\"partners\"\n                     [totalRecords]=\"partners.length\"\n                     [paginator]=\"true\" [rows]=\"5\"\n                     [(selection)]=\"selectedPartnerRow\"\n                     selectionMode=\"single\"\n                     [resizableColumns]=\"true\"\n                     columnResizeMode=\"expand\"\n                     (onColResize)=\"onColResize($event)\">\n                <ng-template pTemplate=\"header\">\n                    <tr>\n                        <th class=\"th-id-wrap\"\n                            *ngFor=\"let partnercol of partnerCols\"\n                            [ngClass]=\"{'mg-hide': !partnercol.visibility}\"\n                            [pSortableColumn]=\" (partnercol.group != '')? partnercol.group + '.' + partnercol.field: partnercol.field\"\n                            pResizableColumn>\n                            {{partnercol.header}}\n                            <p-sortIcon [field]=\"partnercol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\n                        </th>\n                    </tr>\n                    <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\n                        <th *ngFor=\"let partnercol of partnerCols\"\n                            [ngClass]=\"{'mg-hide':!partnercol.visibility}\"\n                            [ngSwitch]=\"partnercol.field\">\n                            <input *ngSwitchCase=\"partnercol.field\" pInputText type=\"text\"\n                                   (input)=\"onTblFilter($event, partnercol, dt)\">\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-partner>\n                    <tr [pSelectableRow]=\"partner\">\n                        <td *ngFor=\"let partnercol of partnerCols\"\n                            [ngClass]=\"{'mg-hide':!partnercol.visibility}\">\n                            {{ (partnercol.group != '') ? partner[partnercol.group][partnercol.field] : partner[partnercol.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" class=\"discard-btn\" pButton icon=\"fa fa-close\" (click)=\"onDiscardPartner()\"\n                        label=\"Discard\"></button>\n                <button type=\"button\" pButton icon=\"fa fa-check\" (click)=\"onSelectPartner()\" label=\"Save\"></button>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: VirtualSubstationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualSubstationFormComponent", function() { return VirtualSubstationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/sub-form.service */ "./client/app/core/services/sub-form.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/update-substation.service */ "./client/app/core/services/update-substation.service.ts");
/* harmony import */ var _core_services_expanding_bay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/expanding-bay.service */ "./client/app/core/services/expanding-bay.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/interfaces/user-role */ "./client/app/core/interfaces/user-role.ts");
/* harmony import */ var _core_interfaces_address_role__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/interfaces/address-role */ "./client/app/core/interfaces/address-role.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");













var VirtualSubstationFormComponent = /** @class */ (function () {
    function VirtualSubstationFormComponent(httpService, settingService, subFormService, scrollService, updateSubstationService, expandBayService, navService, confirmationService) {
        this.httpService = httpService;
        this.settingService = settingService;
        this.subFormService = subFormService;
        this.scrollService = scrollService;
        this.updateSubstationService = updateSubstationService;
        this.expandBayService = expandBayService;
        this.navService = navService;
        this.confirmationService = confirmationService;
        this.isFormChanged = false;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.partners = [];
        this.contactRoles = [];
        this.addressRole = [];
        this.displayAddModal = false;
        this.displayPartnerModal = false;
        this.displayRealSubAddModal = false;
        this.contactCols = [
            { field: 'firstname', header: 'First Name' },
            { field: 'lastname', header: 'Last Name' },
            { field: 'phone', header: 'Phone' },
            { field: 'email', header: 'Email' },
            { field: 'role', header: 'Role' },
            { field: 'userid', header: 'UserID' },
        ];
        this.tableId = 'substation-partner-tbl';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.partnerCols = [
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'eicCode', header: 'EicCode', group: '' },
            { field: 'role', header: 'Role', group: 'role' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'number', header: 'Address.Number', group: 'registeredseat' },
            { field: 'street', header: 'Address.Street', group: 'registeredseat' },
            { field: 'city', header: 'Address.City', group: 'registeredseat' },
            { field: 'locality', header: 'Address.Locality', group: 'registeredseat' },
            { field: 'zip', header: 'Address.Zip', group: 'registeredseat' },
            { field: 'country', header: 'Address.Country', group: 'registeredseat' },
            { field: 'region', header: 'Address.Region', group: 'registeredseat' },
        ];
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__["UserRole"].manager, userid: '' };
        this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
        for (var item in _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__["UserRole"]) {
            if (isNaN(Number(item))) {
                this.contactRoles.push({ label: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__["UserRole"][item], value: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__["UserRole"][item] });
            }
        }
        for (var item in _core_interfaces_address_role__WEBPACK_IMPORTED_MODULE_11__["AddressRole"]) {
            if (isNaN(Number(item))) {
                this.addressRole.push(_core_interfaces_address_role__WEBPACK_IMPORTED_MODULE_11__["AddressRole"][item]);
            }
        }
        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = config.client_info.apiURL.serverURL + "/virtual_substations";
        this.realSubList = [];
        this.curSelRealSub = '';
        this.subCols = [
            { field: 'substationmrid', header: 'MrID' },
            { field: 'role', header: 'Role' },
        ];
    }
    VirtualSubstationFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subFormService.getSubFormInfo().subscribe(function (subFormInfo) {
            _this.isEnabled = subFormInfo.showMode;
            _this.formData = subFormInfo.value;
            _this.formMode = subFormInfo.type;
            if (_this.formMode) { //Add Mode
                _this.initFormData();
            }
            _this.setSubDetails();
        });
    };
    VirtualSubstationFormComponent.prototype.setSubDetails = function () {
        this.partnerMrID = this.formData.partnermrid;
        this.mrID = this.formData.mrid;
        this.description = this.formData.description;
        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;
        this.contacts = JSON.parse(JSON.stringify(this.formData.contacts)); //Array copy
        this.addressNumber = this.formData.address.number;
        this.street = this.formData.address.street;
        this.city = this.formData.address.city;
        this.locality = this.formData.address.locality;
        this.zip = this.formData.address.zip;
        this.country = this.formData.address.country;
        this.region = this.formData.address.region;
        this.realSubList = JSON.parse(JSON.stringify(this.formData.substations));
        this.isFormChanged = false;
        this.getPartners();
    };
    VirtualSubstationFormComponent.prototype.initFormFields = function () {
        this.partnerMrID = this.mrID = this.description = '';
        this.latitude = this.longitude = this.altitude = 0;
        this.contacts = [];
        this.addressNumber = this.street = this.city = this.locality = this.zip = this.country = this.region = '';
        this.selectedPartnerRow = {
            mrid: '',
            eicCode: '',
            contacts: [],
            addresses: [],
            users: [],
            description: ''
        };
        this.realSubList = [];
    };
    VirtualSubstationFormComponent.prototype.initFormData = function () {
        this.formData = {
            partnermrid: '',
            mrid: '',
            location: { latitude: 0, longitude: 0, altitude: 0 },
            contacts: [],
            address: {
                number: '',
                street: '',
                city: '',
                locality: '',
                zip: '',
                country: '',
                region: '',
            },
            substations: [],
            description: '',
        };
    };
    VirtualSubstationFormComponent.prototype.onBaysTable = function () {
        var self = this;
        this.navService.setNavInfo('bay-list', true, this.formData.mrid);
        setTimeout(function () {
            self.expandBayService.setBayStatus(true, self.formData.mrid);
            self.scrollService.setMovedScroll(true, 'bay-list');
        }, 100);
    };
    VirtualSubstationFormComponent.prototype.onSaveFormData = function () {
        var _this = this;
        if (this.checkValidation()) {
            var postBody_1 = {
                partnermrid: this.partnerMrID,
                mrid: this.mrID,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                contacts: this.contacts,
                address: {
                    number: this.addressNumber,
                    street: this.street,
                    city: this.city,
                    locality: this.locality,
                    zip: this.zip,
                    country: this.country,
                    region: this.region,
                },
                description: this.description,
                substations: this.realSubList
            };
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody_1)
                    .subscribe(function (res) {
                    _this.formData = postBody_1;
                    _this.updateSubstationService.setSubstationInfo(true, null, postBody_1);
                    _this.initFormData();
                    _this.initFormFields();
                    _this.isFormChanged = false;
                    console.log('Success in add substation', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    console.log('Error in add substation', err);
                });
            }
            else { //Edit mode
                var subEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, subEditURL, postBody_1)
                    .subscribe(function (res) {
                    _this.updateSubstationService.setSubstationInfo(false, _this.formData.mrid, postBody_1);
                    _this.formData = postBody_1;
                    _this.isFormChanged = false;
                    console.log('Success in update substations', postBody_1);
                }, function (err) {
                    _this.formData = {};
                    _this.isFormChanged = false;
                    console.log('Error in update substations', err);
                });
            }
        }
    };
    VirtualSubstationFormComponent.prototype.isChanged = function () {
        var opSaveBtn;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            var disabledBtnCnt = 0;
            for (var i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        }
        else {
            return false;
        }
    };
    VirtualSubstationFormComponent.prototype.closeMe = function () {
        this.navService.setNavInfo('sub-list', true, '');
        var htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[0].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
        this.initFormFields();
        this.initFormData();
    };
    VirtualSubstationFormComponent.prototype.onCloseComponent = function () {
        var self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: function () {
                    self.closeMe();
                },
                reject: function () {
                }
            });
        }
        else {
            this.closeMe();
        }
    };
    VirtualSubstationFormComponent.prototype.checkValidation = function () {
        if (this.partnerMrID.trim() == "") {
            return false;
        }
        if (this.mrID.trim() == "") {
            return false;
        }
        return true;
    };
    VirtualSubstationFormComponent.prototype.compareContacts = function (x, y) {
        return (x.firstname == y.firstname &&
            x.lastname == y.lastname &&
            x.phone == y.phone &&
            x.email == y.email &&
            x.userid == y.userid &&
            x.role == y.role);
    };
    VirtualSubstationFormComponent.prototype.checkFormChange = function () {
        this.isFormChanged = (this.partnerMrID != this.formData.partnermrid ||
            this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.contacts.length != this.formData.contacts.length ||
            this.addressNumber != this.formData.address.number ||
            this.street != this.formData.address.street ||
            this.city != this.formData.address.city ||
            this.locality != this.formData.address.locality ||
            this.zip != this.formData.address.zip ||
            this.country != this.formData.address.country ||
            this.region != this.formData.address.region ||
            this.description != this.formData.description ||
            this.contacts.length != this.formData.contacts.length ||
            this.realSubList.length != this.formData.substations.length);
        var sameObjCnt = 0;
        var formContacts = this.formData.contacts;
        for (var i = 0; i < this.contacts.length; i++) {
            for (var j = 0; j < formContacts.length; j++) {
                if (this.compareContacts(this.contacts[i], formContacts[j])) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.contacts.length);
        sameObjCnt = 0;
        var formSubList = this.formData.substations;
        for (var i = 0; i < this.realSubList.length; i++) {
            for (var j = 0; j < formSubList.length; j++) {
                if (this.realSubList[i].substationmrid == formSubList[j].substationmrid &&
                    this.realSubList[i].role == formSubList[j].role) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.realSubList.length);
    };
    VirtualSubstationFormComponent.prototype.partnerMrIDChange = function (newVal) {
        this.partnerMrID = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.mrIDChange = function (newVal) {
        this.mrID = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.descriptionChange = function (newVal) {
        this.description = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.zipChange = function (newVal) {
        this.zip = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.streetChange = function (newVal) {
        this.street = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.numberChange = function (newVal) {
        this.addressNumber = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.cityChange = function (newVal) {
        this.city = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.latitudeChange = function (newVal) {
        this.latitude = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.longitudeChange = function (newVal) {
        this.longitude = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.altitudeChange = function (newVal) {
        this.altitude = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.localityChange = function (newVal) {
        this.locality = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.countryChange = function (newVal) {
        this.country = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.regionChange = function (newVal) {
        this.region = newVal;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.newFirstNameChange = function (newVal) {
        this.newContact.firstname = newVal;
    };
    VirtualSubstationFormComponent.prototype.newLastNameChange = function (newVal) {
        this.newContact.lastname = newVal;
    };
    VirtualSubstationFormComponent.prototype.newPhoneChange = function (newVal) {
        this.newContact.phone = newVal;
    };
    VirtualSubstationFormComponent.prototype.newEmailChange = function (newVal) {
        this.newContact.email = newVal;
    };
    VirtualSubstationFormComponent.prototype.newUserIDChange = function (newVal) {
        this.newContact.userid = newVal;
    };
    VirtualSubstationFormComponent.prototype.newRoleChange = function (newVal) {
        this.newContact.role = newVal;
    };
    VirtualSubstationFormComponent.prototype.onShowAddDialog = function () {
        this.displayAddModal = true;
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__["UserRole"].manager, userid: '' };
    };
    VirtualSubstationFormComponent.prototype.onDeleteSub = function (item) {
        for (var i = 0; i < this.realSubList.length; i++) {
            if (this.realSubList[i].substationmrid == item.substationmrid && this.realSubList[i].role == item.role) {
                this.realSubList.splice(i, 1);
                break;
            }
        }
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.onShowRealSubForm = function () {
        this.displayRealSubAddModal = true;
    };
    VirtualSubstationFormComponent.prototype.onAddRealSub = function (item) {
        this.displayRealSubAddModal = false;
        // check duplication
        var isexist = false;
        for (var i = 0; i < this.realSubList.length; i++) {
            if (this.realSubList[i].substationmrid == item.substationmrid && this.realSubList[i].role == item.role) {
                isexist = true;
                break;
            }
        }
        if (!isexist) {
            this.realSubList.push(item);
            this.checkFormChange();
        }
    };
    VirtualSubstationFormComponent.prototype.onDiscardRealSub = function () {
        this.displayRealSubAddModal = false;
    };
    VirtualSubstationFormComponent.prototype.onDiscard = function () {
        this.displayAddModal = false;
    };
    VirtualSubstationFormComponent.prototype.onAddRow = function () {
        if (this.newContact.userid.trim() == "")
            return;
        this.contacts.push(this.newContact);
        this.displayAddModal = false;
        this.newContact = { firstname: '', lastname: '', phone: '', email: '', role: _core_interfaces_user_role__WEBPACK_IMPORTED_MODULE_10__["UserRole"].manager, userid: '' };
        this.isFormChanged = true;
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.onContactEditComplete = function (newVal) {
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.onDeleteContact = function (contactVal) {
        var indexof = this.contacts.indexOf(contactVal);
        if (indexof > -1) {
            this.contacts.splice(indexof, 1);
        }
        this.checkFormChange();
    };
    VirtualSubstationFormComponent.prototype.onShowPartnersDialog = function () {
        this.initTableSetting();
        this.displayPartnerModal = true;
    };
    VirtualSubstationFormComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedPartnerRow);
    };
    VirtualSubstationFormComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedPartnerRow);
    };
    VirtualSubstationFormComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedPartnerRow);
        }
        else {
            // alert('all rows diselected');
        }
    };
    VirtualSubstationFormComponent.prototype.getPartners = function () {
        var _this = this;
        var partnerIdList = [];
        var promiseList = [];
        var partnerListURL = config.client_info.apiURL.serverURL + "/partners";
        this.httpService.httpGetRequest(this.accessToken, partnerListURL).subscribe(function (res) {
            partnerIdList = res;
            for (var i = 0; i < partnerIdList.length; i++) {
                var partnerDetailURL = partnerListURL + '/' + partnerIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, partnerDetailURL));
            }
            if (partnerIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.partners = results;
                    for (var j = 0; j < results.length; j++) {
                        if (results[j].mrid == _this.partnerMrID) {
                            _this.selectedPartnerRow = results[j];
                        }
                    }
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get partners list", err);
                    _this.partners = [];
                    _this.selectedPartnerRow = {
                        mrid: '',
                        eicCode: '',
                        contacts: [],
                        addresses: [],
                        users: [],
                        description: ''
                    };
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get partners list");
                _this.partners = [];
                _this.selectedPartnerRow = {
                    mrid: '',
                    eicCode: '',
                    contacts: [],
                    addresses: [],
                    users: [],
                    description: ''
                };
                _this.contentLoaded = true;
            }
        }, function (error) {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            }
            else {
                alert("Backend returned code " + error.status + ", body was: " + JSON.stringify(error.error));
            }
            console.error("Can't get partners list", error);
            _this.partners = [];
            _this.selectedPartnerRow = { mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: '' };
            _this.contentLoaded = true;
        });
    };
    VirtualSubstationFormComponent.prototype.onDiscardPartner = function () {
        this.displayPartnerModal = false;
    };
    VirtualSubstationFormComponent.prototype.onSelectPartner = function () {
        if (this.selectedPartnerRow && this.selectedPartnerRow.mrid) {
            this.displayPartnerModal = false;
            this.partnerMrID = this.selectedPartnerRow.mrid;
            this.isFormChanged = true;
            this.checkFormChange();
        }
    };
    VirtualSubstationFormComponent.prototype.initTableSetting = function () {
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
                'MrId', 'EicCode', 'Role', 'Description',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.partnerCols = this.checkColVisibility(this.partnerCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    VirtualSubstationFormComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    VirtualSubstationFormComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    VirtualSubstationFormComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    VirtualSubstationFormComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    VirtualSubstationFormComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    VirtualSubstationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-virtual-substation-form',
            template: __webpack_require__(/*! ./virtual-substation-form.component.html */ "./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]],
            styles: [__webpack_require__(/*! ./virtual-substation-form.component.css */ "./client/app/modules/components/virtual-substation-form/virtual-substation-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_3__["HttpServiceHelper"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_5__["SubFormService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_6__["ScrollMovingService"],
            _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_7__["UpdateSubstationService"],
            _core_services_expanding_bay_service__WEBPACK_IMPORTED_MODULE_8__["ExpandingBayService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_9__["NavigationService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"]])
    ], VirtualSubstationFormComponent);
    return VirtualSubstationFormComponent;
}());



/***/ }),

/***/ "./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.css":
/*!*******************************************************************************************************!*\
  !*** ./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".virtual-substation-list {\r\n    width: 2270px;\r\n    display: inline-block;\r\n}\r\n.th-location-wrap {\r\n    width: 240px;\r\n}\r\n.th-id-wrap:nth-child(3) {\r\n    width: 135px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9jb21wb25lbnRzL3ZpcnR1YWwtc3Vic3RhdGlvbi10YWJsZS92aXJ0dWFsLXN1YnN0YXRpb24tdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL2NvbXBvbmVudHMvdmlydHVhbC1zdWJzdGF0aW9uLXRhYmxlL3ZpcnR1YWwtc3Vic3RhdGlvbi10YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpcnR1YWwtc3Vic3RhdGlvbi1saXN0IHtcclxuICAgIHdpZHRoOiAyMjcwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLnRoLWxvY2F0aW9uLXdyYXAge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG59XHJcbi50aC1pZC13cmFwOm50aC1jaGlsZCgzKSB7XHJcbiAgICB3aWR0aDogMTM1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.html":
/*!********************************************************************************************************!*\
  !*** ./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"virtual-substation-list card mg-app-component\" id=\"{{tableId}}\">\r\n    <div class=\"content-loading\" *ngIf=\"!contentLoaded\">\r\n        <img src=\"../../../../assets/img/loading.svg\">\r\n    </div>\r\n    <div class=\"card-header\">\r\n        <div class=\"card-title\">\r\n            <h4>Virtual Substations</h4>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n        <div class=\"table-setting-bar\">\r\n            <div class=\"dropdown mg-dropdown-area\" >\r\n                <div class=\"drop-down-backdrop\" (click)=\"isShowSetting=false\" *ngIf=\"isShowSetting\"></div>\r\n                <button type=\"button\" class=\"btn btn-primary dropdown-toggle mg-toggle-btn\"\r\n                        pTooltip=\"Column Setting\"  tooltipPosition=\"top\"\r\n                        (click)=\"isShowSetting = !isShowSetting\">\r\n                    <i class=\"fa fa-cog\"></i>\r\n                </button>\r\n                <div class=\"dropdown-menu mg-dropdown-menu\" *ngIf=\"isShowSetting\">\r\n                    <div style=\"text-align:left\">\r\n                        <table>\r\n                            <thead>\r\n                            <tr>\r\n                                <th>Visible</th>\r\n                                <th>Column</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let subcol of subCols\">\r\n                                <td><p-checkbox binary=\"true\" value=\"true\" [disabled]=\"subcol.visibility && curSelColsCnt == 1\"\r\n                                                (onChange)=\"onChangeVisibility(subcol)\"\r\n                                                [(ngModel)]=\"subcol.visibility\">\r\n                                </p-checkbox></td>\r\n                                <td>{{subcol.header}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button class=\"btn filter-items\" (click)=\"onChangeFilter()\"\r\n                    pTooltip=\"{{ (isHideFilter)?'On Filter':'Off Filter' }}\"  tooltipPosition=\"top\"\r\n                    [ngClass]=\"{'btn-primary':!isHideFilter, 'btn-secondary':isHideFilter}\" >\r\n                <i class=\"fa fa-filter\"></i>\r\n            </button>\r\n            <button class=\"btn btn-danger delete-item\"\r\n                    pTooltip=\"Delete Rows\"  tooltipPosition=\"top\"\r\n                    (click)=\"onDeleteRows()\" [disabled]=\"selectedRows.length == 0\">\r\n                <i class=\"fa fa-trash\"></i>\r\n            </button>\r\n            <button class=\"btn btn-primary add-item\" (click)=\"onAddNewSubstation()\">+ Add New</button>\r\n            <div class=\"clearfix\"></div>\r\n        </div>\r\n        <p-table #dt sortMode=\"multiple\"\r\n                 [value]=\"substations\"\r\n                 [totalRecords]=\"substations.length\"\r\n                 [paginator]=\"true\"\r\n                 [rows]=\"10\"\r\n                 [(selection)]=\"selectedRows\"\r\n                 selectionMode=\"multiple\"\r\n                 [resizableColumns]=\"true\"\r\n                 columnResizeMode=\"expand\"\r\n                 (onColResize) = \"onColResize($event)\"\r\n                 (onHeaderCheckboxToggle)=\"selectAllRows($event)\"\r\n                 (onRowSelect)=\"onRowSelect($event)\"\r\n                 (onRowUnselect)=\"onRowUnselect($event)\">\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th class=\"mg-item-checkbox\">\r\n                        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                    </th>\r\n                    <th class=\"th-id-wrap\"\r\n                        *ngFor=\"let subcol of subCols\"\r\n                        [ngClass]=\"{'mg-hide': !subcol.visibility}\"\r\n                        [pSortableColumn]=\" (subcol.group != '')? subcol.group + '.' + subcol.field: subcol.field\" pResizableColumn>\r\n                        {{subcol.header}}\r\n                        <p-sortIcon [field]=\"subcol.field\" ariaLabel=\"Activate to sort\"></p-sortIcon>\r\n                    </th>\r\n                </tr>\r\n                <tr [ngClass]=\"{'mg-hide':isHideFilter}\">\r\n                    <th></th>\r\n                    <th *ngFor=\"let subcol of subCols\"\r\n                        [ngClass]=\"{'mg-hide':!subcol.visibility}\"\r\n                        [ngSwitch]=\"subcol.field\" >\r\n                        <input *ngSwitchCase=\"subcol.field\" pInputText type=\"text\"\r\n                               (input)=\"onTblFilter($event, subcol, dt)\">\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-substation>\r\n                <tr>\r\n                    <td>\r\n                        <p-tableCheckbox [value]=\"substation\"></p-tableCheckbox>\r\n                    </td>\r\n                    <td *ngFor=\"let subcol of subCols\"  (click)=\"editSubstation(substation)\"\r\n                        [ngClass]=\"{'mg-hide':!subcol.visibility}\">\r\n                        {{ (subcol.group != '')? substation[subcol.group][subcol.field]: substation[subcol.field]}}\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.ts":
/*!******************************************************************************************************!*\
  !*** ./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: VirtualSubstationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualSubstationTableComponent", function() { return VirtualSubstationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");
/* harmony import */ var _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/setting.service */ "./client/app/core/services/setting.service.ts");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./client/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/services/sub-form.service */ "./client/app/core/services/sub-form.service.ts");
/* harmony import */ var _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/services/update-substation.service */ "./client/app/core/services/update-substation.service.ts");










var VirtualSubstationTableComponent = /** @class */ (function () {
    function VirtualSubstationTableComponent(authService, subFormService, httpService, scrollService, settingService, updateSubstationService, naveService) {
        this.authService = authService;
        this.subFormService = subFormService;
        this.httpService = httpService;
        this.scrollService = scrollService;
        this.settingService = settingService;
        this.updateSubstationService = updateSubstationService;
        this.naveService = naveService;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.substations = [];
        this.apiURL = config.client_info.apiURL.serverURL + "/virtual_substations";
        this.selectedRows = [];
        this.tableId = 'virtual-substation-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.subCols = [
            { field: 'partnermrid', header: 'PMrId', group: '' },
            { field: 'mrid', header: 'MrId', group: '' },
            { field: 'description', header: 'Description', group: '' },
            { field: 'latitude', header: 'Location.Lat', group: 'location' },
            { field: 'longitude', header: 'Location.Lon', group: 'location' },
            { field: 'altitude', header: 'Location.Alt', group: 'location' },
            { field: 'number', header: 'Address.Number', group: 'address' },
            { field: 'street', header: 'Address.Street', group: 'address' },
            { field: 'city', header: 'Address.City', group: 'address' },
            { field: 'locality', header: 'Address.Locality', group: 'address' },
            { field: 'zip', header: 'Address.Zip', group: 'address' },
            { field: 'country', header: 'Address.Country', group: 'address' },
            { field: 'region', header: 'Address.Region', group: 'address' },
        ];
    }
    VirtualSubstationTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getVirtualSubstations();
        this.initTableSetting();
        //Getting table setting from localstorage.
        this.updateSubstationService.getSubstationInfo().subscribe(function (updateInfo) {
            if (updateInfo.mode) {
                console.log(updateInfo.newSub);
                _this.substations.push(updateInfo.newSub);
            }
            else {
                for (var i = 0; i < _this.substations.length; i++) {
                    if (_this.substations[i].mrid == updateInfo.mrid) {
                        _this.substations[i] = updateInfo.newSub;
                    }
                }
            }
        });
    };
    VirtualSubstationTableComponent.prototype.getVirtualSubstations = function () {
        var _this = this;
        var subIdList = [];
        var promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe(function (res) {
            subIdList = res;
            for (var i = 0; i < subIdList.length; i++) {
                var subDetailURL = _this.apiURL + '/' + subIdList[i];
                promiseList.push(_this.httpService.httpGetRequest(_this.accessToken, subDetailURL));
            }
            if (subIdList.length > 0) {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promiseList).subscribe(function (results) {
                    _this.substations = results;
                    _this.contentLoaded = true;
                }, function (err) {
                    console.log("Can't get virtual substation list", err);
                    _this.substations = [];
                    _this.contentLoaded = true;
                });
            }
            else {
                console.log("Can't get virtual substation list");
                alert('No virtual substation data is accessible');
                _this.authService.setAuthInfo({ login_st: false }); ////888888888888888888888888
                // this.substations = [];
                _this.contentLoaded = true;
            }
        }, function (error) {
            _this.httpErrorHandler(error);
            console.error("Can't get virtual substation list", error);
            _this.substations = [];
            _this.contentLoaded = true;
        });
    };
    VirtualSubstationTableComponent.prototype.httpErrorHandler = function (error) {
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
    VirtualSubstationTableComponent.prototype.onDeleteRows = function () {
        var _this = this;
        var subIds = [];
        var promiseList = [];
        for (var i = 0; i < this.selectedRows.length; i++) {
            var subDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            subIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, subDeleteURL));
        }
        if (subIds.length > 0) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(promiseList).subscribe(function (results) {
                var leftSubstations = [];
                for (var i = 0; i < _this.substations.length; i++) {
                    if (subIds.indexOf(_this.substations[i].mrid) < 0) {
                        leftSubstations.push(_this.substations[i]);
                    }
                }
                _this.substations = leftSubstations;
                _this.selectedRows = [];
                _this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, function (err) {
                _this.substations = [];
                _this.contentLoaded = true;
                console.error('Error in substations Deleting', err);
            });
        }
        else {
            this.substations = [];
            this.contentLoaded = true;
            console.log('Error in substations Deleting due to the Empty String');
        }
    };
    VirtualSubstationTableComponent.prototype.editSubstation = function (sub) {
        var self = this;
        this.naveService.setNavInfo('virtual-substation-form', true, sub.mrid);
        setTimeout(function () {
            self.subFormService.setSubFormInfo(false, sub, true);
            self.scrollService.setMovedScroll(true, 'substation-form');
        }, 100);
    };
    VirtualSubstationTableComponent.prototype.onAddNewSubstation = function () {
        var self = this;
        this.naveService.setNavInfo('virtual-substation-form', true, '');
        setTimeout(function () {
            self.subFormService.setSubFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'substation-form');
        }, 100);
    };
    VirtualSubstationTableComponent.prototype.onRowSelect = function (event) {
        console.log(this.selectedRows);
    };
    VirtualSubstationTableComponent.prototype.onRowUnselect = function (event) {
        console.log(this.selectedRows);
    };
    VirtualSubstationTableComponent.prototype.selectAllRows = function (event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        }
        else {
            // alert('all rows diselected');
        }
    };
    // ====================================================
    VirtualSubstationTableComponent.prototype.initTableSetting = function () {
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
                'PMrId', 'MrId', 'Description',
                'Location.Lat', 'Location.Lon', 'Location.Alt',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }
        this.isHideFilter = !settingInfo.filter;
        this.subCols = this.checkColVisibility(this.subCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    };
    VirtualSubstationTableComponent.prototype.checkColVisibility = function (colList, visibleColList) {
        for (var i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    };
    VirtualSubstationTableComponent.prototype.onChangeVisibility = function (item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        }
        else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', { col: item.header, st: item.visibility });
    };
    VirtualSubstationTableComponent.prototype.onTblFilter = function (ev, item, dt) {
        var field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    };
    VirtualSubstationTableComponent.prototype.onChangeFilter = function () {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    };
    VirtualSubstationTableComponent.prototype.onColResize = function ($ev) {
        updateTableWidth(this.tableId, $ev);
    };
    VirtualSubstationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-virtual-substation-table',
            template: __webpack_require__(/*! ./virtual-substation-table.component.html */ "./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.html"),
            styles: [__webpack_require__(/*! ./virtual-substation-table.component.css */ "./client/app/modules/components/virtual-substation-table/virtual-substation-table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _core_services_sub_form_service__WEBPACK_IMPORTED_MODULE_8__["SubFormService"],
            _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_2__["HttpServiceHelper"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__["ScrollMovingService"],
            _core_services_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
            _core_services_update_substation_service__WEBPACK_IMPORTED_MODULE_9__["UpdateSubstationService"],
            _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]])
    ], VirtualSubstationTableComponent);
    return VirtualSubstationTableComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/device-type/device-type.component.css":
/*!************************************************************************!*\
  !*** ./client/app/modules/pages/device-type/device-type.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".device-type-container {\r\n    display: flex;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9kZXZpY2UtdHlwZS9kZXZpY2UtdHlwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvcGFnZXMvZGV2aWNlLXR5cGUvZGV2aWNlLXR5cGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXZpY2UtdHlwZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/device-type/device-type.component.html":
/*!*************************************************************************!*\
  !*** ./client/app/modules/pages/device-type/device-type.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"device-type-container\">\n  <div class=\"mg-app-component\">\n    <div class=\"mg-width-virtual\"></div>\n  </div>\n  <app-device-type-table></app-device-type-table>\n  <app-device-type-form *ngIf=\"deviceTypeFormSt\"></app-device-type-form>\n  <div class=\"mg-sb-target\"></div>\n  <div>\n    <div class=\"mg-width-virtual\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/pages/device-type/device-type.component.ts":
/*!***********************************************************************!*\
  !*** ./client/app/modules/pages/device-type/device-type.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeviceTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceTypeComponent", function() { return DeviceTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");



var DeviceTypeComponent = /** @class */ (function () {
    function DeviceTypeComponent(navService) {
        this.navService = navService;
        this.deviceTypeFormSt = false;
    }
    DeviceTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.getNavInfo().subscribe(function (naveInfo) {
            var elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'device-type-list':
                    _this.deviceTypeFormSt = false;
                    break;
                case 'device-type-form':
                    _this.deviceTypeFormSt = elemSt;
                    break;
            }
        });
    };
    DeviceTypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-type',
            template: __webpack_require__(/*! ./device-type.component.html */ "./client/app/modules/pages/device-type/device-type.component.html"),
            styles: [__webpack_require__(/*! ./device-type.component.css */ "./client/app/modules/pages/device-type/device-type.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], DeviceTypeComponent);
    return DeviceTypeComponent;
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

/***/ "./client/app/modules/pages/measurements/measurements.component.css":
/*!**************************************************************************!*\
  !*** ./client/app/modules/pages/measurements/measurements.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".measurements-container {\r\n    display: flex;\r\n}\r\n.mg-breadcrumb {\r\n    position: fixed;\r\n    top: 66px;\r\n    left: 246px;\r\n    width: calc(100vw - 246px);\r\n    padding: 5px 10px;\r\n    background-color: #e6e6e6c9;\r\n    border: 1px solid #c3c3c3;\r\n    border-radius: 3px;\r\n}\r\n.mg-bd-item {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    font-weight: 500;\r\n    color: #037bfc;\r\n    cursor: pointer;\r\n}\r\n.mg-bd-item:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9tZWFzdXJlbWVudHMvbWVhc3VyZW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9tZWFzdXJlbWVudHMvbWVhc3VyZW1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVhc3VyZW1lbnRzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tZy1icmVhZGNydW1iIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjZweDtcclxuICAgIGxlZnQ6IDI0NnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNDZweCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTZjOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm1nLWJkLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDM3YmZjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZy1iZC1pdGVtOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/measurements/measurements.component.html":
/*!***************************************************************************!*\
  !*** ./client/app/modules/pages/measurements/measurements.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"measurements-container\">\n    <div class=\"mg-app-component\">\n        <div class=\"mg-width-virtual\"></div>\n    </div>\n    <app-measurement-table></app-measurement-table>\n    <app-measurement-form></app-measurement-form>\n    <div class=\"mg-sb-target\"></div>\n    <div>\n        <div class=\"mg-width-virtual\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/pages/measurements/measurements.component.ts":
/*!*************************************************************************!*\
  !*** ./client/app/modules/pages/measurements/measurements.component.ts ***!
  \*************************************************************************/
/*! exports provided: MeasurementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeasurementsComponent", function() { return MeasurementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MeasurementsComponent = /** @class */ (function () {
    function MeasurementsComponent() {
    }
    MeasurementsComponent.prototype.ngOnInit = function () {
    };
    MeasurementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-measurements',
            template: __webpack_require__(/*! ./measurements.component.html */ "./client/app/modules/pages/measurements/measurements.component.html"),
            styles: [__webpack_require__(/*! ./measurements.component.css */ "./client/app/modules/pages/measurements/measurements.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MeasurementsComponent);
    return MeasurementsComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/partner/partner.component.css":
/*!****************************************************************!*\
  !*** ./client/app/modules/pages/partner/partner.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".partners-container {\r\n    display: flex;\r\n}\r\n.mg-breadcrumb {\r\n    position: fixed;\r\n    top: 66px;\r\n    left: 246px;\r\n    width: calc(100vw - 246px);\r\n    padding: 5px 10px;\r\n    background-color: #e6e6e6c9;\r\n    border: 1px solid #c3c3c3;\r\n    border-radius: 3px;\r\n}\r\n.mg-bd-item {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    font-weight: 500;\r\n    color: #037bfc;\r\n    cursor: pointer;\r\n}\r\n.mg-bd-item:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9wYXJ0bmVyL3BhcnRuZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL3BhcnRuZXIvcGFydG5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcnRuZXJzLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tZy1icmVhZGNydW1iIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjZweDtcclxuICAgIGxlZnQ6IDI0NnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNDZweCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTZjOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm1nLWJkLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDM3YmZjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZy1iZC1pdGVtOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/partner/partner.component.html":
/*!*****************************************************************!*\
  !*** ./client/app/modules/pages/partner/partner.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"partners-container\">\n    <div class=\"mg-app-component\">\n        <div class=\"mg-width-virtual\"></div>\n    </div>\n    <app-partner-table></app-partner-table>\n    <app-partner-form *ngIf=\"partnerFormSt\"></app-partner-form>\n    <app-partner-contact-table *ngIf=\"partnerContactSt\"></app-partner-contact-table>\n    <app-partner-address-table *ngIf=\"partnerAddressSt\"></app-partner-address-table>\n    <app-partner-substation-table *ngIf=\"partnerSubstationSt\"></app-partner-substation-table>\n    <div class=\"mg-sb-target\"></div>\n    <div>\n        <div class=\"mg-width-virtual\"></div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./client/app/modules/pages/partner/partner.component.ts":
/*!***************************************************************!*\
  !*** ./client/app/modules/pages/partner/partner.component.ts ***!
  \***************************************************************/
/*! exports provided: PartnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnerComponent", function() { return PartnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");



var PartnerComponent = /** @class */ (function () {
    function PartnerComponent(navService) {
        this.navService = navService;
        this.partnerFormSt = false;
        this.partnerContactSt = false;
        this.partnerAddressSt = false;
        this.partnerSubstationSt = false;
    }
    PartnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.getNavInfo().subscribe(function (naveInfo) {
            var elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'partner-list':
                    _this.partnerFormSt = false;
                    _this.partnerContactSt = _this.partnerAddressSt = _this.partnerSubstationSt = false;
                    break;
                case 'partner-form':
                    _this.partnerFormSt = elemSt;
                    _this.partnerContactSt = _this.partnerAddressSt = _this.partnerSubstationSt = false;
                    break;
                case 'partner-contact':
                    _this.partnerContactSt = elemSt;
                    break;
                case 'partner-address':
                    _this.partnerAddressSt = elemSt;
                    break;
                case 'partner-substation':
                    _this.partnerSubstationSt = elemSt;
                    break;
            }
        });
    };
    PartnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-partner',
            template: __webpack_require__(/*! ./partner.component.html */ "./client/app/modules/pages/partner/partner.component.html"),
            styles: [__webpack_require__(/*! ./partner.component.css */ "./client/app/modules/pages/partner/partner.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], PartnerComponent);
    return PartnerComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/substation/substation.component.css":
/*!**********************************************************************!*\
  !*** ./client/app/modules/pages/substation/substation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".substations-container {\r\n    display: flex;\r\n}\r\n.mg-breadcrumb {\r\n    position: fixed;\r\n    top: 66px;\r\n    left: 246px;\r\n    width: calc(100vw - 266px);\r\n    padding: 5px 10px;\r\n    background-color: #e6e6e6c9;\r\n    border: 1px solid #c3c3c3;\r\n    border-radius: 3px;\r\n}\r\n.mg-bd-item {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    font-weight: 500;\r\n    color: #037bfc;\r\n    cursor: pointer;\r\n}\r\n.mg-bd-item:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9zdWJzdGF0aW9uL3N1YnN0YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL3N1YnN0YXRpb24vc3Vic3RhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnN0YXRpb25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5tZy1icmVhZGNydW1iIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNjZweDtcclxuICAgIGxlZnQ6IDI0NnB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyNjZweCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTZjOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbn1cclxuLm1nLWJkLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMDM3YmZjO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tZy1iZC1pdGVtOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/substation/substation.component.html":
/*!***********************************************************************!*\
  !*** ./client/app/modules/pages/substation/substation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substations-container\" >\n    <div class=\"mg-app-component\"><div class=\"mg-width-virtual\"></div></div>\n    <app-substation-table></app-substation-table>\n    <app-substation-form *ngIf=\"subFormSt\"></app-substation-form>\n    <app-bay-table *ngIf=\"bayListSt\"></app-bay-table>\n    <app-bay-form *ngIf=\"bayFormSt\"></app-bay-form>\n    <app-device-table *ngIf=\"devListSt\"></app-device-table>\n    <app-device-form *ngIf=\"devFormSt\"></app-device-form>\n    <app-device-measurement-table *ngIf=\"devMsListSt\"></app-device-measurement-table>\n    <app-device-measurement-form *ngIf=\"devMsFormSt\"></app-device-measurement-form>\n    <app-device-metering-table *ngIf=\"devMtListSt\"></app-device-metering-table>\n    <div><div class=\"mg-width-virtual\"></div></div>\n    <div class=\"mg-breadcrumb\" *ngIf=\"subFormSt && (subName != '')\">\n        <div class=\"mg-bd-item\" *ngIf=\"subFormSt && (subName != '')\" (click)=\"showSubstationDetails()\"> > Substation [{{subName}}]</div>\n        <div class=\"mg-bd-item\" *ngIf=\"bayFormSt && (bayName != '')\" (click)=\"showBayDetails()\"> > Bay [{{bayName}}]</div>\n        <div class=\"mg-bd-item\" *ngIf=\"devFormSt && (devName != '')\" (click)=\"showDeviceDetails()\"> > Device [{{devName}}]</div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./client/app/modules/pages/substation/substation.component.ts":
/*!*********************************************************************!*\
  !*** ./client/app/modules/pages/substation/substation.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubstationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubstationComponent", function() { return SubstationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");
/* harmony import */ var _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/scroll-moving.service */ "./client/app/core/services/scroll-moving.service.ts");




var SubstationComponent = /** @class */ (function () {
    function SubstationComponent(navService, scrollMovingService) {
        this.navService = navService;
        this.scrollMovingService = scrollMovingService;
        this.subFormSt = this.bayListSt = this.bayFormSt = this.devListSt = this.devFormSt = false;
        this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
    }
    SubstationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subName = this.bayName = this.devName = "";
        this.navService.getNavInfo().subscribe(function (naveInfo) {
            var elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'sub-list':
                    _this.subListSt = elemSt;
                    _this.subFormSt = _this.bayListSt = _this.bayFormSt = _this.devListSt = _this.devFormSt = false;
                    _this.devMsListSt = _this.devMsFormSt = _this.devMtListSt = _this.devMtFormSt = false;
                    _this.subName = _this.devName = _this.bayName = "";
                    break;
                case 'sub-form':
                    _this.subFormSt = elemSt;
                    _this.bayListSt = _this.bayFormSt = _this.devListSt = _this.devFormSt = false;
                    _this.devMsListSt = _this.devMsFormSt = _this.devMtListSt = _this.devMtFormSt = false;
                    _this.subName = naveInfo.name;
                    _this.devName = _this.bayName = "";
                    break;
                case 'bay-list':
                    _this.bayListSt = elemSt;
                    _this.bayFormSt = _this.devListSt = _this.devFormSt = false;
                    _this.devMsListSt = _this.devMsFormSt = _this.devMtListSt = _this.devMtFormSt = false;
                    _this.subName = naveInfo.name;
                    _this.devName = _this.bayName = "";
                    break;
                case 'bay-form':
                    _this.bayFormSt = elemSt;
                    _this.devListSt = _this.devFormSt = false;
                    _this.devMsListSt = _this.devMsFormSt = _this.devMtListSt = _this.devMtFormSt = false;
                    _this.bayName = naveInfo.name;
                    _this.devName = "";
                    break;
                case 'dev-list':
                    _this.devListSt = elemSt;
                    _this.devFormSt = false;
                    _this.devMsListSt = _this.devMsFormSt = _this.devMtListSt = _this.devMtFormSt = false;
                    _this.bayName = naveInfo.name;
                    _this.devName = "";
                    break;
                case 'dev-form':
                    _this.devFormSt = elemSt;
                    _this.devMsListSt = _this.devMsFormSt = _this.devMtListSt = _this.devMtFormSt = false;
                    _this.devName = naveInfo.name;
                    break;
                case 'dev-ms-list':
                    _this.devMsListSt = elemSt;
                    _this.devMsFormSt = false;
                    break;
                case 'dev-ms-form':
                    _this.devMsFormSt = elemSt;
                    break;
                case 'dev-mt-list':
                    _this.devMtListSt = elemSt;
                    break;
            }
        });
    };
    SubstationComponent.prototype.showSubstationDetails = function () {
        this.navService.setNavInfo('sub-form', true, this.subName);
        this.scrollMovingService.setMovedScroll(true, '');
    };
    SubstationComponent.prototype.showBayDetails = function () {
        this.navService.setNavInfo('bay-form', true, this.bayName);
        this.scrollMovingService.setMovedScroll(true, '');
    };
    SubstationComponent.prototype.showDeviceDetails = function () {
        this.navService.setNavInfo('dev-form', true, this.devName);
        this.scrollMovingService.setMovedScroll(true, '');
    };
    SubstationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-substation',
            template: __webpack_require__(/*! ./substation.component.html */ "./client/app/modules/pages/substation/substation.component.html"),
            styles: [__webpack_require__(/*! ./substation.component.css */ "./client/app/modules/pages/substation/substation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
            _core_services_scroll_moving_service__WEBPACK_IMPORTED_MODULE_3__["ScrollMovingService"]])
    ], SubstationComponent);
    return SubstationComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/virtual-substation/virtual-substation.component.css":
/*!**************************************************************************************!*\
  !*** ./client/app/modules/pages/virtual-substation/virtual-substation.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".substations-container {\r\n    display: flex;\r\n}\r\n.mg-breadcrumb {\r\n    position: fixed;\r\n    top: 66px;\r\n    left: 246px;\r\n    width: calc(100vw - 266px);\r\n    padding: 5px 10px;\r\n    background-color: #e6e6e6c9;\r\n    border: 1px solid #c3c3c3;\r\n    border-radius: 3px;\r\n}\r\n.mg-bd-item {\r\n    display: inline-block;\r\n    margin-right: 15px;\r\n    font-weight: 500;\r\n    color: #037bfc;\r\n    cursor: pointer;\r\n}\r\n.mg-bd-item:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy92aXJ0dWFsLXN1YnN0YXRpb24vdmlydHVhbC1zdWJzdGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy92aXJ0dWFsLXN1YnN0YXRpb24vdmlydHVhbC1zdWJzdGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Vic3RhdGlvbnMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLm1nLWJyZWFkY3J1bWIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA2NnB4O1xyXG4gICAgbGVmdDogMjQ2cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDI2NnB4KTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNmM5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG4ubWctYmQtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICMwMzdiZmM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1nLWJkLWl0ZW06aG92ZXJ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/virtual-substation/virtual-substation.component.html":
/*!***************************************************************************************!*\
  !*** ./client/app/modules/pages/virtual-substation/virtual-substation.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"substations-container\" >\n    <div class=\"mg-app-component\"><div class=\"mg-width-virtual\"></div></div>\n    <app-virtual-substation-table></app-virtual-substation-table>\n    <app-virtual-substation-form *ngIf=\"substationFormSt\"></app-virtual-substation-form>\n    <div><div class=\"mg-width-virtual\"></div></div>\n</div>"

/***/ }),

/***/ "./client/app/modules/pages/virtual-substation/virtual-substation.component.ts":
/*!*************************************************************************************!*\
  !*** ./client/app/modules/pages/virtual-substation/virtual-substation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VirtualSubstationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualSubstationComponent", function() { return VirtualSubstationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/navigation.service */ "./client/app/core/services/navigation.service.ts");



var VirtualSubstationComponent = /** @class */ (function () {
    function VirtualSubstationComponent(navService) {
        this.navService = navService;
        this.substationFormSt = false;
    }
    VirtualSubstationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.getNavInfo().subscribe(function (naveInfo) {
            var elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'virtual-substation-list':
                    _this.substationFormSt = false;
                    break;
                case 'virtual-substation-form':
                    _this.substationFormSt = elemSt;
                    break;
            }
        });
    };
    VirtualSubstationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-virtual-substation',
            template: __webpack_require__(/*! ./virtual-substation.component.html */ "./client/app/modules/pages/virtual-substation/virtual-substation.component.html"),
            styles: [__webpack_require__(/*! ./virtual-substation.component.css */ "./client/app/modules/pages/virtual-substation/virtual-substation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], VirtualSubstationComponent);
    return VirtualSubstationComponent;
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: client_info, server_info, default */
/***/ (function(module) {

module.exports = {"client_info":{"msal_info":{"clientID":"b6a3a0e8-c3e3-4efd-84e7-966700553c21","authority":"https://login.microsoftonline.com/smartegrity.onmicrosoft.com/","redirectUri":"https://localhost:8082/","postLogoutRedirectUri":"https://localhost:8082/logout","consentScopes":"api://a88bb933-319c-41b5-9f04-eff36d985612/access_as_user","reqScopes":"api://b6a3a0e8-c3e3-4efd-84e7-966700553c21/default"},"storeInfo":{"tokenKey":"management_app_token","username":"management_app_username","exptime":"management_app_expire_time","settingKey":"management_app_setting"},"apiURL":{"graphAPI":"https://graph.microsoft.com/v1.0/me","serverURL":"https://localhost:8082/api"}},"server_info":{"port":8082,"apiURL":"https://192.168.117.128:8078/management/v1","online_mode":true,"pfx":"localhost.pfx","pfx_passphrase":"1234"}};

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

module.exports = __webpack_require__(/*! F:\Work\02-Web\16-JavaScript\14-API Gateway-2\work\managementApp\client\main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map