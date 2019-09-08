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
/* harmony import */ var _modules_pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/pages/impressum/impressum.component */ "./client/app/modules/pages/impressum/impressum.component.ts");
/* harmony import */ var _modules_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pages/terms/terms.component */ "./client/app/modules/pages/terms/terms.component.ts");
/* harmony import */ var _modules_pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/pages/disclaimer/disclaimer.component */ "./client/app/modules/pages/disclaimer/disclaimer.component.ts");
/* harmony import */ var _modules_pages_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/pages/customer-service/customer-service.component */ "./client/app/modules/pages/customer-service/customer-service.component.ts");
/* harmony import */ var _modules_pages_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pages/question-answer/question-answer.component */ "./client/app/modules/pages/question-answer/question-answer.component.ts");
/* harmony import */ var _modules_pages_policy_policy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/pages/policy/policy.component */ "./client/app/modules/pages/policy/policy.component.ts");
/* harmony import */ var _modules_pages_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/pages/more-info/more-info.component */ "./client/app/modules/pages/more-info/more-info.component.ts");











var routes = [
    { path: 'app/more-info', component: _modules_pages_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_10__["MoreInfoComponent"] },
    { path: 'app/privacy-policy', component: _modules_pages_policy_policy_component__WEBPACK_IMPORTED_MODULE_9__["PolicyComponent"] },
    { path: 'app/impressum', component: _modules_pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_4__["ImpressumComponent"] },
    { path: 'app/terms-of-use', component: _modules_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_5__["TermsComponent"] },
    { path: 'app/disclaimer', component: _modules_pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_6__["DisclaimerComponent"] },
    { path: 'app/customer-service', component: _modules_pages_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_7__["CustomerServiceComponent"] },
    { path: 'app/question-answers', component: _modules_pages_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_8__["QuestionAnswerComponent"] },
    { path: 'app/home', component: _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/app/home', pathMatch: 'full' },
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

module.exports = ".sw-menu > nav {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    background-color: #606060;\r\n    padding: 0 1rem;\r\n    z-index: 1000;\r\n}\r\n\r\n#navbarNav {\r\n    justify-content: center;\r\n}\r\n\r\n.sw-banner {\r\n    margin-top: 40px;\r\n}\r\n\r\n#navbarNav .nav-link {\r\n    color: #ffffff;\r\n    font-family: Roboto;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n}\r\n\r\n#banner-bg {\r\n    width: 100%;\r\n}\r\n\r\n.sw-banner-slider {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.slider-item {\r\n    width: 100%;\r\n}\r\n\r\n#banner-bottom {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    bottom: -10%;\r\n    z-index: 1;\r\n}\r\n\r\n#serviceMoreInfo {\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 1.2rem;\r\n    display: inline-block;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 24%;\r\n    color: #ffffff;\r\n    z-index: 1;\r\n    width: 180px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border: 2px solid #ffffffa1;\r\n    background-color: #34085985;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    text-decoration: none !important;\r\n}\r\n\r\n.serviceSubTitle {\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 22%;\r\n    color: white;\r\n    z-index: 1;\r\n    text-align: center;\r\n}\r\n\r\n.login-failed-msg {\r\n    position: fixed;\r\n    right: 10px;\r\n    top: 44px;\r\n    padding: 9px;\r\n    color: #ffffff;\r\n    background-color: #f90837;\r\n    border-radius: 10px;\r\n    z-index: 2;\r\n}\r\n\r\n.sw-footer {\r\n    background-color: #858686;\r\n    /*height: 80px;*/\r\n}\r\n\r\n.sw-footer > div {\r\n    text-align: center;\r\n    padding: 50px 0 30px 0;\r\n}\r\n\r\n.sw-footer > div a {\r\n    padding: 5px 10px;\r\n    color: white;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n    font-family: Roboto;\r\n    font-size: 20px;\r\n    display: inline-block;\r\n}\r\n\r\n.sw-footer > div span {\r\n    color: white;\r\n}\r\n\r\n/*\r\n=======================\r\n*/\r\n\r\n.carBtn {\r\n    position: absolute;\r\n    margin: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n    box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.3);\r\n    border-radius: 999px;\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    .sw-service {\r\n        margin-top: 3.2%;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        width: 150px;\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUdBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBOztDQUVDOztBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0RBQWdEO0lBQ2hELG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87SUFDWDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBOzs7UUFHSSxlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjs7QUFFSiIsImZpbGUiOiJjbGllbnQvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3LW1lbnUgPiBuYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuI25hdmJhck5hdiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN3LWJhbm5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4jbmF2YmFyTmF2IC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbiNiYW5uZXItYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdy1iYW5uZXItc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zbGlkZXItaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2Jhbm5lci1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcblxyXG4jc2VydmljZU1vcmVJbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZmExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0MDg1OTg1O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VydmljZVN1YlRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG4gICAgbGVmdDogMjIlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1mYWlsZWQtbXNnIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiA0NHB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkwODM3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcblxyXG4uc3ctZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg2ODY7XHJcbiAgICAvKmhlaWdodDogODBweDsqL1xyXG59XHJcblxyXG4uc3ctZm9vdGVyID4gZGl2IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDUwcHggMCAzMHB4IDA7XHJcbn1cclxuXHJcbi5zdy1mb290ZXIgPiBkaXYgYSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3ctZm9vdGVyID4gZGl2IHNwYW4ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKlxyXG49PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG4uY2FyQnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAxMHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAjYWJvdXRVc0Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtaW5mby1vdXRlciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxOTRweDtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNnb29nbGVNYXAge1xyXG4gICAgICAgIGZsZXg6IDM7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdC1pbmZvW19uZ2NvbnRlbnQtYzBdIHtcclxuICAgICAgICBmbGV4OiAyO1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dC11cyB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzYwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0VXNJbWcge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjYWJvdXRVc0Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWl0ZW0tb3V0ZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwLW1lbnUtc3BsaXR0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtaW5mby1vdXRlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtaW5mby1vdXRlciAuaW1nLW91dGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdC1pbmZvIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlLWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN3LWFib3V0LWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlU3ViVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAjc2VydmljZU1vcmVJbmZvIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvdHRvbTogMTUlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ctc2VydmljZSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMy4yJTtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc1RpdGxlLFxyXG4gICAgI2NvbnRhY3RVc1RpdGxlLFxyXG4gICAgLnNlcnZpY2VUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdFVzVGl0bGUge1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./client/app/app.component.html":
/*!***************************************!*\
  !*** ./client/app/app.component.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">-->\r\n<!--  <a class=\"navbar-brand\" href=\"#\">{{title}} {{appVersion}} </a>-->\r\n<!--  <ul class=\"navbar-nav mr-auto\">-->\r\n<!--    <li class=\"nav-item active\"><a class=\"nav-link\" [routerLink]=\"['/app/explorer']\" *ngIf=\"loggedIn\">{{ 'Explorer.title' | translate }}</a></li>-->\r\n<!--  </ul>-->\r\n<!--  <ul class=\"navbar-nav ml-auto\">-->\r\n<!--      <li class=\"nav-item dropdown\">-->\r\n<!--          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"lang-dropdown\"-->\r\n<!--             data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">-->\r\n<!--              <i class=\"fa fa-globe\"></i> {{curLang}}-->\r\n<!--          </a>-->\r\n<!--          <div class=\"dropdown-menu\" aria-labelledby=\"lang-dropdown\">-->\r\n<!--              <a class=\"dropdown-item\" *ngFor=\"let lang of languages\" (click)=\"switchLanguage(lang.id, lang.name)\">{{lang.name}}</a>-->\r\n<!--          </div>-->\r\n<!--      </li>-->\r\n<!--    <li class=\"nav-item\">-->\r\n<!--        <a class=\"nav-link\" *ngIf=\"!loggedIn\" (click)=\"login()\">-->\r\n<!--        <i class=\"fa fa-sign-in\"></i>{{ 'Home.login' | translate }}-->\r\n<!--        </a>-->\r\n<!--    </li>-->\r\n<!--    <li class=\"nav-item\">-->\r\n<!--        <a class=\"nav-link\" *ngIf=\"loggedIn\" (click)=\"logout()\">-->\r\n<!--            <i class=\"fa fa-sign-out\"></i>{{ 'Explorer.logout' | translate }}-->\r\n<!--        </a>-->\r\n<!--    </li>-->\r\n<!--  </ul>-->\r\n<!--</nav>-->\r\n\r\n<!--<div class=\"login-failed-msg\" [innerHTML]=\"loginFailedMsg\" *ngIf=\"!!(loginFailedMsg)\"></div>-->\r\n\r\n<!--<div class=\"container-fluid sb-app-container\">-->\r\n<!--  <router-outlet *ngIf=\"!isIframe\"></router-outlet>-->\r\n<!--</div>-->\r\n\r\n<!--<div class=\"sb-page-loading\" *ngIf=\"!pageLoaded\">-->\r\n<!--  <div class=\"loader\"></div>-->\r\n<!--</div>-->\r\n\r\n<div class=\"login-failed-msg\" [innerHTML]=\"loginFailedMsg\" *ngIf=\"!!(loginFailedMsg)\"></div>\r\n\r\n<section class=\"sw-menu\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\"\r\n                aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/app/home']\"\r\n                       [ngx-scroll-to-offset]=\"-80\"\r\n                       [ngx-scroll-to]=\"'#service'\">\r\n                        {{ 'services' | translate }}<span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item sp-menu-splitter\">\r\n                    <a class=\"nav-link\">|</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/app/home']\"\r\n                       [ngx-scroll-to-offset]=\"-80\"\r\n                       [ngx-scroll-to]=\"'#about-us'\">{{ 'about us' | translate }}</a>\r\n                </li>\r\n                <li class=\"nav-item sp-menu-splitter\">\r\n                    <a class=\"nav-link\">|</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/app/home']\"\r\n                       [ngx-scroll-to]=\"'#contact'\">{{ 'contact' | translate }}</a>\r\n                </li>\r\n                <li class=\"nav-item sp-menu-splitter\">\r\n                    <a class=\"nav-link\">|</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!loggedIn\">\r\n                    <a class=\"nav-link\" (click)=\"login()\">{{ 'login' | translate }}</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"loggedIn\">\r\n                    <a class=\"nav-link\" href=\"{{ sbLogoutLink }}\">{{ 'logout' | translate }}</a>\r\n                </li>\r\n                <li class=\"nav-item sp-menu-splitter\">\r\n                    <a class=\"nav-link\">|</a>\r\n                </li>\r\n\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"lang-dropdown\"\r\n                       data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <i class=\"fa fa-globe\"></i> {{curLang}}\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"lang-dropdown\">\r\n                        <a class=\"dropdown-item\" *ngFor=\"let lang of languages\"\r\n                           (click)=\"switchLanguage(lang.id, lang.name)\">{{lang.name}}</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</section>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<section class=\"sw-footer\">\r\n    <div>\r\n        <a [routerLink]=\"['/app/privacy-policy']\">{{ 'privacy policy' | translate }}</a>\r\n        <span>|</span>\r\n        <a [routerLink]=\"['/app/impressum']\">{{ 'impressum' | translate }}</a>\r\n        <span>|</span>\r\n        <a [routerLink]=\"['/app/terms-of-use']\">{{ 'terms of use' | translate }}</a>\r\n        <span>|</span>\r\n        <a [routerLink]=\"['/app/disclaimer']\">{{ 'disclaimer' | translate }}</a>\r\n        <span>|</span>\r\n        <a [routerLink]=\"['/app/customer-service']\">{{ 'customer service' | translate }}</a>\r\n        <span>|</span>\r\n        <a [routerLink]=\"['/app/question-answers']\">{{ 'Q&A' | translate }}</a>\r\n    </div>\r\n</section>\r\n\r\n"

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
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm5/ngx-cookieconsent.es5.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");










var AppComponent = /** @class */ (function () {
    function AppComponent(translate, ccService, _scrollToService, cdr, broadcastService, authService, router, evAuthService, httpService) {
        this.translate = translate;
        this.ccService = ccService;
        this._scrollToService = _scrollToService;
        this.cdr = cdr;
        this.broadcastService = broadcastService;
        this.authService = authService;
        this.router = router;
        this.evAuthService = evAuthService;
        this.httpService = httpService;
        this.title = 'Smart Service';
        this.tokenTransferKey = 'ss_global_st';
        this.loginFailedMsg = '';
        this.appVersion = _version_json__WEBPACK_IMPORTED_MODULE_5__.version;
        this.pageLoaded = false;
        this.isIframe = window !== window.parent && !window.opener;
        this.languages = config.client_info.languages;
        this.curLang = this.languages[0].name;
        translate.setDefaultLang(this.languages[0].id);
        // const browserLang = this.translate.getBrowserLang();
        // this.translate.use(browserLang.match(/en|hg/) ? browserLang : 'en');
        translate.use(this.languages[0].id);
        this.sbLogoutLink = config.client_info.substationAppInfo.url + '?sbs=logout';
        if (location.href.indexOf('?sbp=logout') > -1) {
            this.logout();
            this.router.navigateByUrl('/app/home');
        }
        else {
            //If access_token exist, it means request from login redirection
            if (location.href.indexOf('access_token') < 0) {
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
        var redirectURL = config.client_info.substationAppInfo.url;
        var expireTime = localStorage.getItem(config.client_info.storeInfo.exptime);
        this.httpService.httpGetRequest(curToken, config.client_info.apiEndPoints.serverBaseURL + '/authorize')
            .subscribe(function (resp) {
            localStorage.setItem(config.client_info.storeInfo.username, _this.authService.getUser().name);
            _this.pageLoaded = true;
            _this.loggedIn = true;
            var tkSt = localStorage.getItem(_this.tokenTransferKey);
            if (!tkSt) {
                redirectURL += "?t=" + curToken + "&u=" + _this.authService.getUser().name + "&e=" + expireTime;
                window.location.href = redirectURL;
                localStorage.setItem(_this.tokenTransferKey, '1');
            }
        }, function (error) {
            _this.httpErrorHandler(error);
        });
    };
    AppComponent.prototype.httpErrorHandler = function (error) {
        console.error('HTTP Error', error);
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
    AppComponent.prototype.ngAfterViewInit = function () {
        this.cdr.detectChanges();
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
        this.translate //
            .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
            .subscribe(function (data) {
            _this.ccService.getConfig().content = _this.ccService.getConfig().content || {};
            // Override default messages with the translated ones
            _this.ccService.getConfig().content.header = data['cookie.header'];
            _this.ccService.getConfig().content.message = data['cookie.message'];
            _this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
            _this.ccService.getConfig().content.allow = data['cookie.allow'];
            _this.ccService.getConfig().content.deny = data['cookie.deny'];
            _this.ccService.getConfig().content.link = data['cookie.link'];
            _this.ccService.getConfig().content.policy = data['cookie.policy'];
            _this.ccService.destroy(); //remove previous cookie bar (with default messages)
            _this.ccService.init(_this.ccService.getConfig()); // update config with translated messages
        });
        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.initializeSubscription = this.ccService.initialize$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
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
        var _this = this;
        this.translate.use(language);
        this.curLang = langName;
        this.translate //
            .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
            .subscribe(function (data) {
            _this.ccService.getConfig().content = _this.ccService.getConfig().content || {};
            // Override default messages with the translated ones
            _this.ccService.getConfig().content.header = data['cookie.header'];
            _this.ccService.getConfig().content.message = data['cookie.message'];
            _this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
            _this.ccService.getConfig().content.allow = data['cookie.allow'];
            _this.ccService.getConfig().content.deny = data['cookie.deny'];
            _this.ccService.getConfig().content.link = data['cookie.link'];
            _this.ccService.getConfig().content.policy = data['cookie.policy'];
            _this.ccService.destroy(); //remove previous cookie bar (with default messages)
            _this.ccService.init(_this.ccService.getConfig()); // update config with translated messages
        });
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
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./client/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_8__["NgcCookieConsentService"],
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm5/ngx-cookieconsent.es5.js");
/* harmony import */ var _core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/http/HttpServiceHelper */ "./client/app/core/http/HttpServiceHelper.ts");
/* harmony import */ var _modules_pages_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/pages/home/home.component */ "./client/app/modules/pages/home/home.component.ts");
/* harmony import */ var _modules_pages_policy_policy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/pages/policy/policy.component */ "./client/app/modules/pages/policy/policy.component.ts");
/* harmony import */ var _modules_pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/pages/impressum/impressum.component */ "./client/app/modules/pages/impressum/impressum.component.ts");
/* harmony import */ var _modules_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/pages/terms/terms.component */ "./client/app/modules/pages/terms/terms.component.ts");
/* harmony import */ var _modules_pages_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/pages/customer-service/customer-service.component */ "./client/app/modules/pages/customer-service/customer-service.component.ts");
/* harmony import */ var _modules_pages_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/pages/question-answer/question-answer.component */ "./client/app/modules/pages/question-answer/question-answer.component.ts");
/* harmony import */ var _modules_pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/pages/disclaimer/disclaimer.component */ "./client/app/modules/pages/disclaimer/disclaimer.component.ts");
/* harmony import */ var _modules_pages_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/pages/more-info/more-info.component */ "./client/app/modules/pages/more-info/more-info.component.ts");


























function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}
var protectedResourceMap = [[config.client_info.apiEndPoints.graphProfileAPI, ['user.read']]];
var cookieConfig = {
    cookie: {
        domain: config.client_info.cookie.domain // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
    },
    position: 'bottom-right',
    palette: {
        popup: {
            background: '#000'
        },
        button: {
            background: '#f1d600'
        }
    },
    theme: 'classic',
    type: 'info',
    content: {
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it!',
        deny: 'Refuse cookies',
        link: 'Learn more',
        href: config.client_info.cookie.link,
        policy: 'Cookie Policy'
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
                _modules_pages_policy_policy_component__WEBPACK_IMPORTED_MODULE_18__["PolicyComponent"],
                _modules_pages_impressum_impressum_component__WEBPACK_IMPORTED_MODULE_19__["ImpressumComponent"],
                _modules_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_20__["TermsComponent"],
                _modules_pages_customer_service_customer_service_component__WEBPACK_IMPORTED_MODULE_21__["CustomerServiceComponent"],
                _modules_pages_question_answer_question_answer_component__WEBPACK_IMPORTED_MODULE_22__["QuestionAnswerComponent"],
                _modules_pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_23__["DisclaimerComponent"],
                _modules_pages_more_info_more_info_component__WEBPACK_IMPORTED_MODULE_24__["MoreInfoComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_14__["ScrollToModule"].forRoot(),
                ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_15__["NgcCookieConsentModule"].forRoot(cookieConfig),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
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
            ],
            providers: [_core_http_HttpServiceHelper__WEBPACK_IMPORTED_MODULE_16__["HttpServiceHelper"],],
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
    HttpServiceHelper = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServiceHelper);
    return HttpServiceHelper;
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

/***/ "./client/app/modules/pages/customer-service/customer-service.component.css":
/*!**********************************************************************************!*\
  !*** ./client/app/modules/pages/customer-service/customer-service.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-outer {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    background-color: #dedede;\r\n}\r\n.service-item-outer {\r\n    min-height: calc(100vh - 300px);\r\n}\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.sw-service {\r\n    /*margin-top: 4.6%;*/\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9jdXN0b21lci1zZXJ2aWNlL2N1c3RvbWVyLXNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksT0FBTztJQUNYOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTs7O1FBR0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvcGFnZXMvY3VzdG9tZXItc2VydmljZS9jdXN0b21lci1zZXJ2aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZS1vdXRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufVxyXG4uc2VydmljZS1pdGVtLW91dGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbn1cclxuXHJcbi5zZXJ2aWNlVGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4jY29udGFjdHVzLXNwbGl0LWltZyxcclxuI3NlcnZpY2Utc3BsaXQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdy1zZXJ2aWNlIHtcclxuICAgIC8qbWFyZ2luLXRvcDogNC42JTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2RjYztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICNlNDAzMjc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlcnZpY2UtaXRlbS1vdXRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2dvb2dsZU1hcCB7XHJcbiAgICAgICAgZmxleDogMztcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm9bX25nY29udGVudC1jMF0ge1xyXG4gICAgICAgIGZsZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3AtbWVudS1zcGxpdHRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIC5pbWctb3V0ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ctYWJvdXQtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VTdWJUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZXJ2aWNlTW9yZUluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzVGl0bGUsXHJcbiAgICAjY29udGFjdFVzVGl0bGUsXHJcbiAgICAuc2VydmljZVRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTUwcHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdFVzVGl0bGUge1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlVGl0bGV7XHJcbiAgICAgICAgdG9wOiAtMjJweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/customer-service/customer-service.component.html":
/*!***********************************************************************************!*\
  !*** ./client/app/modules/pages/customer-service/customer-service.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title-outer\">\n  <div class=\"container\">\n    <p class=\"serviceTitle\">{{ 'customer service' | translate }}</p>\n  </div>\n</section>\n<section class=\"sw-service\" id=\"customer-service\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'customer_service_item_title' | translate }}</h4>\n          <p>{{ 'customer_service_item_description' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./client/app/modules/pages/customer-service/customer-service.component.ts":
/*!*********************************************************************************!*\
  !*** ./client/app/modules/pages/customer-service/customer-service.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CustomerServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServiceComponent", function() { return CustomerServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerServiceComponent = /** @class */ (function () {
    function CustomerServiceComponent() {
    }
    CustomerServiceComponent.prototype.ngOnInit = function () {
    };
    CustomerServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-service',
            template: __webpack_require__(/*! ./customer-service.component.html */ "./client/app/modules/pages/customer-service/customer-service.component.html"),
            styles: [__webpack_require__(/*! ./customer-service.component.css */ "./client/app/modules/pages/customer-service/customer-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomerServiceComponent);
    return CustomerServiceComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/disclaimer/disclaimer.component.css":
/*!**********************************************************************!*\
  !*** ./client/app/modules/pages/disclaimer/disclaimer.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-outer {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    background-color: #dedede;\r\n}\r\n.service-item-outer {\r\n    min-height: calc(100vh - 300px);\r\n}\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.sw-service {\r\n    /*margin-top: 4.6%;*/\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9kaXNjbGFpbWVyL2Rpc2NsYWltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksT0FBTztJQUNYOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSwyQkFBMkI7UUFDM0IsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtJQUN2Qjs7SUFFQTs7O1FBR0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSiIsImZpbGUiOiJjbGllbnQvYXBwL21vZHVsZXMvcGFnZXMvZGlzY2xhaW1lci9kaXNjbGFpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZS1vdXRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufVxyXG4uc2VydmljZS1pdGVtLW91dGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbn1cclxuXHJcbi5zZXJ2aWNlVGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4jY29udGFjdHVzLXNwbGl0LWltZyxcclxuI3NlcnZpY2Utc3BsaXQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdy1zZXJ2aWNlIHtcclxuICAgIC8qbWFyZ2luLXRvcDogNC42JTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2RjYztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICNlNDAzMjc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlcnZpY2UtaXRlbS1vdXRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2dvb2dsZU1hcCB7XHJcbiAgICAgICAgZmxleDogMztcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm9bX25nY29udGVudC1jMF0ge1xyXG4gICAgICAgIGZsZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3AtbWVudS1zcGxpdHRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIC5pbWctb3V0ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ctYWJvdXQtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VTdWJUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZXJ2aWNlTW9yZUluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzVGl0bGUsXHJcbiAgICAjY29udGFjdFVzVGl0bGUsXHJcbiAgICAuc2VydmljZVRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTUwcHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdFVzVGl0bGUge1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlVGl0bGV7XHJcbiAgICAgICAgdG9wOiAtMjJweDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./client/app/modules/pages/disclaimer/disclaimer.component.html":
/*!***********************************************************************!*\
  !*** ./client/app/modules/pages/disclaimer/disclaimer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title-outer\">\n  <div class=\"container\">\n    <p class=\"serviceTitle\">{{ 'disclaimer' | translate }}</p>\n  </div>\n</section>\n<section class=\"sw-service\" id=\"disclaimer\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'disclaimer_item_title' | translate }}</h4>\n          <p>{{ 'disclaimer_item_description' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./client/app/modules/pages/disclaimer/disclaimer.component.ts":
/*!*********************************************************************!*\
  !*** ./client/app/modules/pages/disclaimer/disclaimer.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisclaimerComponent = /** @class */ (function () {
    function DisclaimerComponent() {
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
    };
    DisclaimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-disclaimer',
            template: __webpack_require__(/*! ./disclaimer.component.html */ "./client/app/modules/pages/disclaimer/disclaimer.component.html"),
            styles: [__webpack_require__(/*! ./disclaimer.component.css */ "./client/app/modules/pages/disclaimer/disclaimer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisclaimerComponent);
    return DisclaimerComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/home/home.component.css":
/*!**********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sw-banner-outer {\r\n    position: relative;\r\n}\r\n\r\n#banner-bg {\r\n    width: 100%;\r\n}\r\n\r\n.sw-banner-slider {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.slider-item {\r\n    width: 100%;\r\n}\r\n\r\n#banner-bottom {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    bottom: -10%;\r\n    z-index: 1;\r\n}\r\n\r\n#serviceMoreInfo {\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 1.2rem;\r\n    display: inline-block;\r\n    position: absolute;\r\n    bottom: 10%;\r\n    left: 24%;\r\n    color: #ffffff;\r\n    z-index: 1;\r\n    width: 180px;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    border: 2px solid #ffffffa1;\r\n    background-color: #34085985;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    text-decoration: none !important;\r\n}\r\n\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: -35px;\r\n    left: 24%;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n}\r\n\r\n.sw-service {\r\n    margin-top: 4.6%;\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n\r\n.page-loading {\r\n    position: absolute;\r\n    z-index: 300;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #e2e2e6fc;\r\n    border: 1px solid black;\r\n}\r\n\r\n.sw-about-us {\r\n    position: relative;\r\n}\r\n\r\n#aboutUsImg {\r\n    width: 100%;\r\n    position: absolute;\r\n}\r\n\r\n#aboutUsDescription {\r\n    padding-top: 70px;\r\n    color: #b2afaf;\r\n    overflow: hidden;\r\n    font-size: 20px;\r\n}\r\n\r\n#aboutUsTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    /*padding: 3px 20px;*/\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    /* bottom: -10%; */\r\n    left: 24%;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    width: 180px;\r\n    text-align: center;\r\n    top: 0;\r\n}\r\n\r\n.sw-contact-us {\r\n    position: relative;\r\n}\r\n\r\n#contactUsTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 24%;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    width: 180px;\r\n    text-align: center;\r\n    top: -36px;\r\n}\r\n\r\n.sw-about-item {\r\n    margin-top: 10%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.about-item-outer {\r\n    display: grid;\r\n    grid-template-columns: auto auto auto;\r\n    padding: 30px 0;\r\n}\r\n\r\n.about-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n    /*padding: 0 10px 10px 10px;*/\r\n}\r\n\r\n.about-item > div {\r\n    padding: 0 20px;\r\n}\r\n\r\n.about-item img {\r\n    width: 100%;\r\n}\r\n\r\n.about-item p {\r\n    /*padding: 0 10px 10px 10px;*/\r\n}\r\n\r\n.about-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.sw-contact-us {\r\n    background-color: #606060;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.contact-info-outer {\r\n    display: flex;\r\n}\r\n\r\n.contact-info-outer img {\r\n    width: 240px;\r\n    height: 218px;\r\n}\r\n\r\n#googleMap {\r\n    flex: 7;\r\n    height: 218px;\r\n}\r\n\r\n#contact-info {\r\n    flex: 3;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    color: white;\r\n    font-weight: 400;\r\n    font-family: Roboto;\r\n}\r\n\r\n.mapouter {\r\n    position: relative;\r\n    text-align: right;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.gmap_canvas {\r\n    overflow: hidden;\r\n    background: none !important;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.gmap_canvas iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    .sw-service {\r\n        margin-top: 3.2%;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFHQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07QUFDVjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUdBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksT0FBTztJQUNYOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7OztRQUdJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3LWJhbm5lci1vdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNiYW5uZXItYmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdy1iYW5uZXItc2xpZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zbGlkZXItaXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2Jhbm5lci1ib3R0b20ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAtMTAlO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuI3NlcnZpY2VNb3JlSW5mbyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQ7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTAlO1xyXG4gICAgbGVmdDogMjQlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmZhMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDA4NTk4NTtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlcnZpY2VUaXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0zNXB4O1xyXG4gICAgbGVmdDogMjQlO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuXHJcbiNjb250YWN0dXMtc3BsaXQtaW1nLFxyXG4jc2VydmljZS1zcGxpdC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdy1zZXJ2aWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDQuNiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjZGNjO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogI2U0MDMyNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5cclxuLnBhZ2UtbG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAzMDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmU2ZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLnN3LWFib3V0LXVzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2Fib3V0VXNJbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbiNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbiAgICBjb2xvcjogI2IyYWZhZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNhYm91dFVzVGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qcGFkZGluZzogM3B4IDIwcHg7Ki9cclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogYm90dG9tOiAtMTAlOyAqL1xyXG4gICAgbGVmdDogMjQlO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uc3ctY29udGFjdC11cyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNjb250YWN0VXNUaXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IC0zNnB4O1xyXG59XHJcblxyXG4uc3ctYWJvdXQtaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmFib3V0LWl0ZW0tb3V0ZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbn1cclxuXHJcbi5hYm91dC1pdGVtLW91dGVyIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICNlNDAzMjc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIC8qcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDsqL1xyXG59XHJcblxyXG4uYWJvdXQtaXRlbSA+IGRpdiB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1pdGVtIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFib3V0LWl0ZW0gcCB7XHJcbiAgICAvKnBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7Ki9cclxufVxyXG5cclxuLmFib3V0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zdy1jb250YWN0LXVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mby1vdXRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvLW91dGVyIGltZyB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDIxOHB4O1xyXG59XHJcblxyXG4jZ29vZ2xlTWFwIHtcclxuICAgIGZsZXg6IDc7XHJcbiAgICBoZWlnaHQ6IDIxOHB4O1xyXG59XHJcblxyXG4jY29udGFjdC1pbmZvIHtcclxuICAgIGZsZXg6IDM7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbn1cclxuXHJcbi5tYXBvdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ21hcF9jYW52YXMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ21hcF9jYW52YXMgaWZyYW1lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2dvb2dsZU1hcCB7XHJcbiAgICAgICAgZmxleDogMztcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm9bX25nY29udGVudC1jMF0ge1xyXG4gICAgICAgIGZsZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3AtbWVudS1zcGxpdHRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIC5pbWctb3V0ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ctYWJvdXQtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VTdWJUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZXJ2aWNlTW9yZUluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1zZXJ2aWNlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzLjIlO1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzVGl0bGUsXHJcbiAgICAjY29udGFjdFVzVGl0bGUsXHJcbiAgICAuc2VydmljZVRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTUwcHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdFVzVGl0bGUge1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlVGl0bGV7XHJcbiAgICAgICAgdG9wOiAtMjJweDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./client/app/modules/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./client/app/modules/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sw-banner\">\n  <div class=\"sw-banner-outer\">\n    <img src=\"../../../../assets/img/banner_bg.png\" id=\"banner-bg\">\n    <div class=\"sw-banner-slider\">\n      <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide >\n          <img src=\"../../../../assets/img/slider_1.png\" class=\"slider-item\">\n          <div class=\"serviceSubTitle\" [innerHTML]=\"'banner_title_1' | translate\"></div>\n        </ng-template>\n        <ng-template carouselSlide>\n          <img src=\"../../../../assets/img/slider_2.png\" class=\"slider-item\">\n          <div class=\"serviceSubTitle\" [innerHTML]=\"'banner_title_2' | translate\"></div>\n        </ng-template>\n        <ng-template carouselSlide>\n          <img src=\"../../../../assets/img/slider_3.png\" class=\"slider-item\">\n          <div class=\"serviceSubTitle\" [innerHTML]=\"'banner_title_3' | translate\"></div>\n        </ng-template>\n      </owl-carousel-o>\n    </div>\n    <img src=\"../../../../assets/img/header_bottom.png\" id=\"banner-bottom\">\n    <a id=\"serviceMoreInfo\" [routerLink]=\"['/app/more-info']\">{{ 'more info' | translate }}</a>\n  </div>\n</section>\n<section class=\"sw-service\" id=\"service\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <p class=\"serviceTitle\">{{ 'services' | translate }}</p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'service_item_title1' | translate }}</h4>\n          <p>{{ 'service_item_description1' | translate }}</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/thumb_icon.png\">\n          <h4>{{ 'service_item_title2' | translate }}</h4>\n          <p>{{ 'service_item_description2' | translate }}</p>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/doc_ico.png\">\n          <h4>{{ 'service_item_title3' | translate }}</h4>\n          <p>{{ 'service_item_description3' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"sw-about-us\" id=\"about-us\">\n  <img src=\"../../../../assets/img/center_back1.png\" id=\"aboutUsImg\">\n  <p id=\"aboutUsTitle\">{{ 'about us' | translate }}</p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <p id=\"aboutUsDescription\">{{ 'about_us_description' | translate }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"sw-about-item\">\n  <div class=\"container\">\n    <div class=\"about-item-outer\">\n      <div class=\"about-item\">\n        <img src=\"../../../../assets/img/street1.png\">\n      </div>\n      <div class=\"about-item\">\n        <div>\n          <h4>{{ 'about_us_item_title1' | translate }}</h4>\n          <p>{{ 'about_us_item_description1' | translate }}</p>\n        </div>\n      </div>\n      <div class=\"about-item\">\n        <img src=\"../../../../assets/img/lamp1.png\">\n      </div>\n      <div class=\"about-item\">\n        <div>\n          <h4>{{ 'about_us_item_title2' | translate }}</h4>\n          <p>{{ 'about_us_item_description2' | translate }}</p>\n        </div>\n      </div>\n      <div class=\"about-item\">\n        <img src=\"../../../../assets/img/world1.png\">\n      </div>\n      <div class=\"about-item\">\n        <div>\n          <h4>{{ 'about_us_item_title3' | translate }}</h4>\n          <p>{{ 'about_us_item_description3' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"sw-contact-us\" id=\"contact\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"contactus-split-img\">\n  <p id=\"contactUsTitle\">{{ 'contact' | translate }}</p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"offset-lg-1 col-lg-10 offset-sm-0\">\n        <div class=\"contact-info-outer\">\n          <div class=\"img-outer\">\n            <img src=\"../../../../assets/img/bottom_street1.png\">\n          </div>\n          <div id=\"googleMap\">\n            <div class=\"mapouter\">\n              <div class=\"gmap_canvas\">\n                <iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=1143%20Budapest%20llka%20utca%2031&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n                <a href=\"https://www.embedgooglemap.net/blog/best-wordpress-themes/\">embedgooglemap.net</a>\n              </div>\n            </div>\n          </div>\n          <div id=\"contact-info\">\n            {{ 'service_address' | translate }}<br>\n            {{ 'service_factory' | translate }}<br>\n            {{ 'service_tel' | translate }}<br>\n            {{ 'service_email' | translate }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

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
        this.customOptions = {
            loop: true,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: true,
            navSpeed: 700,
            navText: ['Prev', 'Next'],
            items: 1,
            nav: true,
            smartSpeed: 1000,
            autoWidth: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        };
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

/***/ "./client/app/modules/pages/impressum/impressum.component.css":
/*!********************************************************************!*\
  !*** ./client/app/modules/pages/impressum/impressum.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-outer {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    background-color: #dedede;\r\n}\r\n.service-item-outer {\r\n    min-height: calc(100vh - 300px);\r\n}\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.sw-service {\r\n    /*margin-top: 4.6%;*/\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9pbXByZXNzdW0vaW1wcmVzc3VtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87SUFDWDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7OztRQUdJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL2ltcHJlc3N1bS9pbXByZXNzdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlLW91dGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcclxufVxyXG5cclxuLnNlcnZpY2VUaXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiNjb250YWN0dXMtc3BsaXQtaW1nLFxyXG4jc2VydmljZS1zcGxpdC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3LXNlcnZpY2Uge1xyXG4gICAgLyptYXJnaW4tdG9wOiA0LjYlOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjZGNjO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogI2U0MDMyNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZ29vZ2xlTWFwIHtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mb1tfbmdjb250ZW50LWMwXSB7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcC1tZW51LXNwbGl0dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgLmltZy1vdXRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1hYm91dC1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZVN1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlcnZpY2VNb3JlSW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0VXNUaXRsZSxcclxuICAgICNjb250YWN0VXNUaXRsZSxcclxuICAgIC5zZXJ2aWNlVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAvKndpZHRoOiAxNTBweDsqL1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0VXNUaXRsZSB7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VUaXRsZXtcclxuICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/impressum/impressum.component.html":
/*!*********************************************************************!*\
  !*** ./client/app/modules/pages/impressum/impressum.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title-outer\">\n  <div class=\"container\">\n    <p class=\"serviceTitle\">{{ 'impressum' | translate }}</p>\n  </div>\n</section>\n<section class=\"sw-service\" id=\"impressum\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'impressum_item_title' | translate }}</h4>\n          <p>{{ 'impressum_item_description' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./client/app/modules/pages/impressum/impressum.component.ts":
/*!*******************************************************************!*\
  !*** ./client/app/modules/pages/impressum/impressum.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImpressumComponent = /** @class */ (function () {
    function ImpressumComponent() {
    }
    ImpressumComponent.prototype.ngOnInit = function () {
    };
    ImpressumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-impressum',
            template: __webpack_require__(/*! ./impressum.component.html */ "./client/app/modules/pages/impressum/impressum.component.html"),
            styles: [__webpack_require__(/*! ./impressum.component.css */ "./client/app/modules/pages/impressum/impressum.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpressumComponent);
    return ImpressumComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/more-info/more-info.component.css":
/*!********************************************************************!*\
  !*** ./client/app/modules/pages/more-info/more-info.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    position: absolute;\r\n    top: -35px;\r\n    left: 24%;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n}\r\n.sw-service {\r\n    margin-top: 4.6%;\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    .sw-service {\r\n        margin-top: 3.2%;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9tb3JlLWluZm8vbW9yZS1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztBQUNmO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksT0FBTztRQUNQLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO0lBQ1g7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBOzs7UUFHSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztBQUVKIiwiZmlsZSI6ImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9tb3JlLWluZm8vbW9yZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZVRpdGxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTM1cHg7XHJcbiAgICBsZWZ0OiAyNCU7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiNjb250YWN0dXMtc3BsaXQtaW1nLFxyXG4jc2VydmljZS1zcGxpdC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zdy1zZXJ2aWNlIHtcclxuICAgIG1hcmdpbi10b3A6IDQuNiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjZGNjO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogI2U0MDMyNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZ29vZ2xlTWFwIHtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mb1tfbmdjb250ZW50LWMwXSB7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcC1tZW51LXNwbGl0dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgLmltZy1vdXRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1hYm91dC1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZVN1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlcnZpY2VNb3JlSW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN3LXNlcnZpY2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMuMiU7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0VXNUaXRsZSxcclxuICAgICNjb250YWN0VXNUaXRsZSxcclxuICAgIC5zZXJ2aWNlVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAvKndpZHRoOiAxNTBweDsqL1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0VXNUaXRsZSB7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VUaXRsZXtcclxuICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/more-info/more-info.component.html":
/*!*********************************************************************!*\
  !*** ./client/app/modules/pages/more-info/more-info.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"sw-service\" id=\"impressum\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <p class=\"serviceTitle\">{{ 'more info' | translate }}</p>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'service_item_title1' | translate }}</h4>\n          <p>{{ 'service_item_description1' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./client/app/modules/pages/more-info/more-info.component.ts":
/*!*******************************************************************!*\
  !*** ./client/app/modules/pages/more-info/more-info.component.ts ***!
  \*******************************************************************/
/*! exports provided: MoreInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreInfoComponent", function() { return MoreInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MoreInfoComponent = /** @class */ (function () {
    function MoreInfoComponent() {
    }
    MoreInfoComponent.prototype.ngOnInit = function () {
    };
    MoreInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-info',
            template: __webpack_require__(/*! ./more-info.component.html */ "./client/app/modules/pages/more-info/more-info.component.html"),
            styles: [__webpack_require__(/*! ./more-info.component.css */ "./client/app/modules/pages/more-info/more-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MoreInfoComponent);
    return MoreInfoComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/policy/policy.component.css":
/*!**************************************************************!*\
  !*** ./client/app/modules/pages/policy/policy.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-outer {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    background-color: #dedede;\r\n}\r\n.service-item-outer {\r\n    min-height: calc(100vh - 300px);\r\n}\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.sw-service {\r\n    /*margin-top: 4.6%;*/\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9wb2xpY3kvcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87SUFDWDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7OztRQUdJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL3BvbGljeS9wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlLW91dGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcclxufVxyXG5cclxuLnNlcnZpY2VUaXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiNjb250YWN0dXMtc3BsaXQtaW1nLFxyXG4jc2VydmljZS1zcGxpdC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3LXNlcnZpY2Uge1xyXG4gICAgLyptYXJnaW4tdG9wOiA0LjYlOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjZGNjO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogI2U0MDMyNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZ29vZ2xlTWFwIHtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mb1tfbmdjb250ZW50LWMwXSB7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcC1tZW51LXNwbGl0dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgLmltZy1vdXRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1hYm91dC1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZVN1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlcnZpY2VNb3JlSW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0VXNUaXRsZSxcclxuICAgICNjb250YWN0VXNUaXRsZSxcclxuICAgIC5zZXJ2aWNlVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAvKndpZHRoOiAxNTBweDsqL1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0VXNUaXRsZSB7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VUaXRsZXtcclxuICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/policy/policy.component.html":
/*!***************************************************************!*\
  !*** ./client/app/modules/pages/policy/policy.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title-outer\">\n    <div class=\"container\">\n        <p class=\"serviceTitle\">{{ 'privacy policy' | translate }}</p>\n    </div>\n</section>\n<section class=\"sw-service\" id=\"policy\">\n    <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"service-item-outer\">\n                    <img src=\"../../../../assets/img/setting_ico.png\">\n                    <h4>{{ 'policy_item_title' | translate }}</h4>\n                    <p>{{ 'policy_item_description' | translate }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n"

/***/ }),

/***/ "./client/app/modules/pages/policy/policy.component.ts":
/*!*************************************************************!*\
  !*** ./client/app/modules/pages/policy/policy.component.ts ***!
  \*************************************************************/
/*! exports provided: PolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyComponent", function() { return PolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PolicyComponent = /** @class */ (function () {
    function PolicyComponent() {
    }
    PolicyComponent.prototype.ngOnInit = function () {
    };
    PolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-policy',
            template: __webpack_require__(/*! ./policy.component.html */ "./client/app/modules/pages/policy/policy.component.html"),
            styles: [__webpack_require__(/*! ./policy.component.css */ "./client/app/modules/pages/policy/policy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PolicyComponent);
    return PolicyComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/question-answer/question-answer.component.css":
/*!********************************************************************************!*\
  !*** ./client/app/modules/pages/question-answer/question-answer.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-outer {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    background-color: #dedede;\r\n}\r\n.service-item-outer {\r\n    min-height: calc(100vh - 300px);\r\n}\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.sw-service {\r\n    /*margin-top: 4.6%;*/\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy9xdWVzdGlvbi1hbnN3ZXIvcXVlc3Rpb24tYW5zd2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7O0lBRUksV0FBVztJQUNYLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO1FBQ1AsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLE9BQU87SUFDWDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osb0JBQWlCO1dBQWpCLGlCQUFpQjtJQUNyQjtBQUNKO0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksMkJBQTJCO1FBQzNCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osV0FBVztRQUNYLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7O0lBRUE7OztRQUdJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0FBRUoiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL3F1ZXN0aW9uLWFuc3dlci9xdWVzdGlvbi1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlLW91dGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcclxufVxyXG5cclxuLnNlcnZpY2VUaXRsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90byBDb25kZW5zZWQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbiNjb250YWN0dXMtc3BsaXQtaW1nLFxyXG4jc2VydmljZS1zcGxpdC1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN3LXNlcnZpY2Uge1xyXG4gICAgLyptYXJnaW4tdG9wOiA0LjYlOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjZGNjO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWl0ZW0tb3V0ZXIgaDQge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBjb2xvcjogI2U0MDMyNztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzU1NTU1NTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0NDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZ29vZ2xlTWFwIHtcclxuICAgICAgICBmbGV4OiAzO1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mb1tfbmdjb250ZW50LWMwXSB7XHJcbiAgICAgICAgZmxleDogMjtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgI2Fib3V0VXNEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcC1tZW51LXNwbGl0dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWluZm8tb3V0ZXIgLmltZy1vdXRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hYm91dC1pdGVtLW91dGVyIGg0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdy1hYm91dC1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZVN1YlRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NlcnZpY2VNb3JlSW5mbyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBib3R0b206IDE1JTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0VXNUaXRsZSxcclxuICAgICNjb250YWN0VXNUaXRsZSxcclxuICAgIC5zZXJ2aWNlVGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAvKndpZHRoOiAxNTBweDsqL1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0VXNUaXRsZSB7XHJcbiAgICAgICAgdG9wOiAtMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXQtdXMge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzSW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VUaXRsZXtcclxuICAgICAgICB0b3A6IC0yMnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/question-answer/question-answer.component.html":
/*!*********************************************************************************!*\
  !*** ./client/app/modules/pages/question-answer/question-answer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title-outer\">\n  <div class=\"container\">\n    <p class=\"serviceTitle\">{{ 'Q&A' | translate }}</p>\n  </div>\n</section>\n<section class=\"sw-service\" id=\"question-answer\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'qa_item_title' | translate }}</h4>\n          <p>{{ 'qa_item_description' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./client/app/modules/pages/question-answer/question-answer.component.ts":
/*!*******************************************************************************!*\
  !*** ./client/app/modules/pages/question-answer/question-answer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: QuestionAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswerComponent", function() { return QuestionAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionAnswerComponent = /** @class */ (function () {
    function QuestionAnswerComponent() {
    }
    QuestionAnswerComponent.prototype.ngOnInit = function () {
    };
    QuestionAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question-answer',
            template: __webpack_require__(/*! ./question-answer.component.html */ "./client/app/modules/pages/question-answer/question-answer.component.html"),
            styles: [__webpack_require__(/*! ./question-answer.component.css */ "./client/app/modules/pages/question-answer/question-answer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionAnswerComponent);
    return QuestionAnswerComponent;
}());



/***/ }),

/***/ "./client/app/modules/pages/terms/terms.component.css":
/*!************************************************************!*\
  !*** ./client/app/modules/pages/terms/terms.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-outer {\r\n    margin-top: 40px;\r\n    position: relative;\r\n    background-color: #dedede;\r\n}\r\n.service-item-outer {\r\n    min-height: calc(100vh - 300px);\r\n}\r\n.serviceTitle {\r\n    background-color: red;\r\n    margin-bottom: 0;\r\n    font-family: Roboto Condensed;\r\n    font-size: 24px;\r\n    display: inline-block;\r\n    color: #fbfbfb;\r\n    z-index: 1;\r\n    min-width: 180px;\r\n    text-align: center;\r\n    padding: 0 10px;\r\n}\r\n#contactus-split-img,\r\n#service-split-img {\r\n    width: 100%;\r\n    display: block;\r\n}\r\n.sw-service {\r\n    /*margin-top: 4.6%;*/\r\n    background-color: #cccdcc;\r\n    padding-bottom: 20px;\r\n    position: relative;\r\n}\r\n.service-item-outer h4 {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n    color: #e40327;\r\n    font-weight: bold;\r\n}\r\n.service-item-outer p {\r\n    font-size: 18px;\r\n    font-family: Roboto;\r\n    font-weight: 500;\r\n    color: #555555;\r\n}\r\n@media (min-width: 1920px) {\r\n    .container {\r\n        max-width: 1440px;\r\n    }\r\n}\r\n@media (max-width: 1200px) {\r\n    #aboutUsDescription {\r\n        padding-top: 40px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .contact-info-outer img {\r\n        width: 194px;\r\n        height: 180px;\r\n    }\r\n\r\n    #googleMap {\r\n        flex: 3;\r\n        height: 180px;\r\n    }\r\n\r\n    #contact-info[_ngcontent-c0] {\r\n        flex: 2;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    #aboutUsDescription {\r\n        padding-top: 35px;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .about-item-outer {\r\n        grid-template-columns: auto;\r\n        padding: 0 0;\r\n    }\r\n\r\n    .sp-menu-splitter {\r\n        display: none;\r\n    }\r\n\r\n    .contact-info-outer {\r\n        display: block;\r\n    }\r\n\r\n    .contact-info-outer .img-outer {\r\n        text-align: center;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    #contact-info {\r\n        margin-top: 10px;\r\n    }\r\n\r\n    .service-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .about-item-outer h4 {\r\n        margin-top: 16px;\r\n        margin-bottom: 16px;\r\n        font-size: 20px;\r\n    }\r\n\r\n    .sw-about-item {\r\n        margin-top: 5%;\r\n        margin-bottom: 5%;\r\n    }\r\n\r\n    .serviceSubTitle {\r\n        font-size: 20px;\r\n    }\r\n\r\n    #serviceMoreInfo {\r\n        font-size: 1rem;\r\n        width: 150px;\r\n        bottom: 15%;\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n    }\r\n\r\n    #aboutUsTitle,\r\n    #contactUsTitle,\r\n    .serviceTitle {\r\n        font-size: 20px;\r\n        /*width: 150px;*/\r\n    }\r\n\r\n    #contactUsTitle {\r\n        top: -30px;\r\n    }\r\n\r\n    #about-us {\r\n        min-height: 360px;\r\n        padding-bottom: 25px;\r\n    }\r\n\r\n    #aboutUsImg {\r\n        height: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n    .serviceTitle{\r\n        top: -22px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9hcHAvbW9kdWxlcy9wYWdlcy90ZXJtcy90ZXJtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBOztJQUVJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksT0FBTztRQUNQLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxPQUFPO0lBQ1g7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG9CQUFpQjtXQUFqQixpQkFBaUI7SUFDckI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBOzs7UUFHSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixvQkFBaUI7V0FBakIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoiY2xpZW50L2FwcC9tb2R1bGVzL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZS1vdXRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxufVxyXG4uc2VydmljZS1pdGVtLW91dGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XHJcbn1cclxuXHJcbi5zZXJ2aWNlVGl0bGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG4jY29udGFjdHVzLXNwbGl0LWltZyxcclxuI3NlcnZpY2Utc3BsaXQtaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zdy1zZXJ2aWNlIHtcclxuICAgIC8qbWFyZ2luLXRvcDogNC42JTsqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjY2RjYztcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VydmljZS1pdGVtLW91dGVyIGg0IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICNlNDAzMjc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnNlcnZpY2UtaXRlbS1vdXRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM1NTU1NTU7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2dvb2dsZU1hcCB7XHJcbiAgICAgICAgZmxleDogMztcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm9bX25nY29udGVudC1jMF0ge1xyXG4gICAgICAgIGZsZXg6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICNhYm91dFVzRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3AtbWVudS1zcGxpdHRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1pbmZvLW91dGVyIC5pbWctb3V0ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb250YWN0LWluZm8ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2UtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWJvdXQtaXRlbS1vdXRlciBoNCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3ctYWJvdXQtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlcnZpY2VTdWJUaXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzZXJ2aWNlTW9yZUluZm8ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgYm90dG9tOiAxNSU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhYm91dFVzVGl0bGUsXHJcbiAgICAjY29udGFjdFVzVGl0bGUsXHJcbiAgICAuc2VydmljZVRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgLyp3aWR0aDogMTUwcHg7Ki9cclxuICAgIH1cclxuXHJcbiAgICAjY29udGFjdFVzVGl0bGUge1xyXG4gICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Fib3V0LXVzIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWJvdXRVc0ltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlVGl0bGV7XHJcbiAgICAgICAgdG9wOiAtMjJweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./client/app/modules/pages/terms/terms.component.html":
/*!*************************************************************!*\
  !*** ./client/app/modules/pages/terms/terms.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"page-title-outer\">\n  <div class=\"container\">\n    <p class=\"serviceTitle\" id=\"terms\">{{ 'terms of use' | translate }}</p>\n  </div>\n</section>\n<section class=\"sw-service\">\n  <img src=\"../../../../assets/img/center_back2.png\" id=\"service-split-img\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"service-item-outer\">\n          <img src=\"../../../../assets/img/setting_ico.png\">\n          <h4>{{ 'terms_item_title' | translate }}</h4>\n          <p>{{ 'terms_item_description' | translate }}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./client/app/modules/pages/terms/terms.component.ts":
/*!***********************************************************!*\
  !*** ./client/app/modules/pages/terms/terms.component.ts ***!
  \***********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./client/app/modules/pages/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./client/app/modules/pages/terms/terms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
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

module.exports = __webpack_require__(/*! F:\Work\02-Web\16-JavaScript\14-API Gateway-4\work\substationWebsite\client\main.ts */"./client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map