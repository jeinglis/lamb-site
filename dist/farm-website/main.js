(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".webpage-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  position: relative;\r\n}\r\n\r\n.app-navigation {\r\n  width: 100%;\r\n  height: 5%;\r\n  margin: auto;\r\n}\r\n\r\n.app-banner {\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n#arrow-container {\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  left: 50%;\r\n  position: absolute;\r\n  margin-bottom:100px;\r\n}\r\n\r\n#arrow {\r\n  margin:auto;\r\n  width:170px;\r\n  height:80px;\r\n}\r\n\r\n.footer {\r\n  width:100%;\r\n  height: 60px;\r\n  background-color:grey;\r\n  margin-top: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"webpage-container\">\r\n  <app-navigation></app-navigation>\r\n  <router-outlet id=\"outlet\">\r\n    <app-banner id=\"banner\"></app-banner>\r\n    <a id=\"arrow-container\" routerLink=\"/info-card\" [fragment]=\"'products'\" routerLinkActive=\"active\">\r\n      <img id=\"arrow\" src=\"../assets/arrow-down-black.gif\">\r\n    </a>\r\n  </router-outlet>\r\n  <div class=\"footer\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(document) {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]({
            // Global settings:
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            // offset: 120, // offset (in px) from the original trigger point
            delay: 0,
            duration: 2000,
            easing: 'ease',
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
    };
    AppComponent.prototype.onWindowScroll = function (e) {
        if (window.pageYOffset > 0) {
            var element = document.getElementById('navbar');
            element.classList.add('sticky');
        }
        else {
            var element = document.getElementById('navbar');
            element.classList.remove('sticky');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
/* harmony import */ var _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-card/info-card.component */ "./src/app/info-card/info-card.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: '', component: _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_5__["InfoCardComponent"]
    },
    {
        path: 'info-card', component: _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_5__["InfoCardComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
                _info_card_info_card_component__WEBPACK_IMPORTED_MODULE_5__["InfoCardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, {
                    enableTracing: true,
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    scrollOffset: [0, 10],
                    onSameUrlNavigation: 'reload'
                }),
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_8__["SlideshowModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-container {\r\n  width: 100%;\r\n  height:800px;/*use this to adjust video banner height*/\r\n  border-left: none;\r\n  border-right: none;\r\n  position: relative;\r\n}\r\n\r\n.video-container {\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  top: 0%;\r\n  right: 0%;\r\n  overflow: hidden;\r\n}\r\n\r\nvideo {\r\n  position: absolute;\r\n  z-index: -1;\r\n  opacity: 1;\r\n  width: 100%;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {opacity:0;}\r\n  to {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {opacity:0;}\r\n  to {opacity: 1;}\r\n}\r\n\r\n#logo{\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n  -webkit-animation-duration: 7s;\r\n          animation-duration: 7s;\r\n  max-height: 100%;  \r\n  max-width: 100%; \r\n  width: auto;\r\n  height: auto;\r\n  position: absolute;  \r\n  top: 0;  \r\n  bottom: 0;  \r\n  left: 0;  \r\n  right: 0;  \r\n  margin: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\r\n  <div class=\"video-container\">\r\n    <video id=\"video\" poster=\"../../assets/vid-postert.jpg\" muted preload autoplay loop >\r\n      <source src=\"../../assets/vid-test.mp4\" type=\"video/mp4\">\r\n      Your browser does not support the video tag.\r\n    </video>\r\n    <img id=\"logo\" src=\"../../assets/farm-icon-white.png\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BannerComponent = /** @class */ (function () {
    function BannerComponent() {
    }
    BannerComponent.prototype.ngOnInit = function () {
        var element = document.getElementById('video');
        element.muted = true;
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('onLoad', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hideLogo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '200px',
                        opacity: 1,
                        backgroundColor: 'yellow'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('showLogo', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '100px',
                        opacity: 0.5,
                        backgroundColor: 'green'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hideLogo => showLogo', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('showLogo => hideLogo', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s')
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/info-card/info-card.component.css":
/*!***************************************************!*\
  !*** ./src/app/info-card/info-card.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#content{\r\n  display:flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  color: white;\r\n  font-size:1.7em;\r\n  padding-top: 100px;\r\n}\r\n\r\n.card{\r\n  padding-top: 120px;\r\n}\r\n\r\n.top{\r\n  padding-top:160px;\r\n}\r\n\r\nimg{\r\n  width:100%;\r\n  height:100%;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\np{\r\n  margin-left:10px;\r\n}\r\n\r\n.title{\r\n  text-align: center;\r\n  font-size:2.5em;\r\n  margin-left:10px;\r\n}\r\n\r\n.left-media{\r\n  background-color:rgba(0, 128, 0, 0.473);\r\n  float:left;\r\n  width:60%;\r\n  height:800px;\r\n  margin-left:20px;\r\n}\r\n\r\n.left-info{\r\n  position:absolute;\r\n  background-color:#135977a1;\r\n  right:55%;\r\n  margin-top:100px;\r\n  width: 700px;\r\n  height: 500px;\r\n  z-index: 2;\r\n}\r\n\r\n.right-info{\r\n  position:absolute;\r\n  background-color:#771b13a2;\r\n  left:55%;\r\n  margin-top:100px;\r\n  width: 700px;\r\n  height: 500px;\r\n  z-index: 2;\r\n}\r\n\r\n.red-info{\r\n  position:absolute;\r\n  background-color:#137731a2;\r\n  right:55%;\r\n  margin-top:100px;\r\n  width: 700px;\r\n  height: 500px;\r\n  z-index: 2;\r\n}\r\n\r\n.product-info{\r\n  position:absolute;\r\n  background-color:#137731a2;\r\n  left:55%;\r\n  margin-top:100px;\r\n  width: 700px;\r\n  height: 300px;\r\n  z-index: 2;\r\n}\r\n\r\n.product-media{\r\n  background-color:white;\r\n  float:left;\r\n  width:75%;\r\n  height:750px;\r\n  margin-left:20px;\r\n}\r\n\r\n.right-media{\r\n  background-color:rgba(0, 128, 0, 0.473);\r\n  float:right;\r\n  margin-right:100px;\r\n  width:60%;\r\n  height:800px;\r\n  margin-left:20px;\r\n}\r\n\r\n#buy_alberta{\r\n  float:left;\r\n  width:30%;\r\n  margin-left:20px;\r\n}\r\n\r\n.contact-info{\r\n  position:absolute;\r\n  background-color:#135977a1;\r\n  left:30%;\r\n  z-index: 2;\r\n}\r\n\r\n.mapouter{\r\n  position:absolute;\r\n  float:right;\r\n  margin-top:80px;\r\n  left:60%;\r\n\r\n  z-index: 2;\r\n}\r\n\r\n/* #137731 green\r\n#135977 blue\r\n#773413 brown\r\n#771336 purple \r\n#771b13 redish*/\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/info-card/info-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/info-card/info-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n    <div id=\"products\" class=\"card top\" >\r\n      <div class=\"product-media\">\r\n        <slideshow   [autoPlay]=\"true\" [showArrows]=\"false\" [imageUrls]=\"imageUrlArray\"\r\n          [lazyLoad]=\"imageUrlArray?.length> 1\" [autoPlayWaitForLazyLoad]=\"true\" [showDots]=\"true\" [autoPlayInterval]=6666>\r\n        </slideshow>\r\n      </div>\r\n      <div class=\"product-info\">\r\n        <span class=\"title\">Products</span>\r\n          <ul>\r\n            <li>Lamb Bits: $6/Lb</li>\r\n            <li>Lamb Lips: $5/Lb</li>\r\n            <li>Lamb Arseholes: $10/Lb</li>\r\n          </ul>\r\n      </div>\r\n    </div>\r\n    <div id=\"raised_organic\" class=\"card\">\r\n      <div class=\"right-media\">\r\n        <img src=\"../../assets/faar-cropped.jpg\">\r\n      </div>\r\n      <div class=\"left-info\">\r\n        <span class=\"title\">Raised Organic</span>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus neque diam,\r\n          id eleifend libero maximus in. Donec tincidunt mauris enim, a ultricies massa tristique a. Donec sit\r\n          amet erat diam. Suspendisse lorem mi, aliquet in pulvinar quis, tempor sit amet magna. Nunc lorem ante,\r\n          feugiat ac eros vitae, condimentum imperdiet ligula. Donec aliquet consectetur venenatis. Nunc sagittis\r\n          pulvinar accumsan.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div id=\"ethically_treated\" class=\"card\" >\r\n      <div class=\"left-media\">\r\n        <img src=\"../../assets/dreng-med-ged.jpg\">\r\n      </div>\r\n      <div class=\"right-info\">\r\n        <span class=\"title\">Ethically Treated</span>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus neque diam,\r\n          id eleifend libero maximus in. Donec tincidunt mauris enim, a ultricies massa tristique a. Donec sit\r\n          amet erat diam. Suspendisse lorem mi, aliquet in pulvinar quis, tempor sit amet magna. Nunc lorem ante,\r\n          feugiat ac eros vitae, condimentum imperdiet ligula. Donec aliquet consectetur venenatis. Nunc sagittis\r\n          pulvinar accumsan.\r\n        </p>\r\n      </div>\r\n    </div>\r\n    <div id=\"buy_local\" class=\"card\" >\r\n      <div class=\"right-media\">\r\n        <img src=\"../../assets/piger-i-groentsagsmark.jpg\">\r\n      </div>\r\n      <div class=\"red-info\">\r\n        <span class=\"title\">Buy Local</span>\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempus neque diam,\r\n          id eleifend libero maximus in. Donec tincidunt mauris enim, a ultricies massa tristique a. Donec sit\r\n          amet erat diam. Suspendisse lorem mi, aliquet in pulvinar quis, tempor sit amet magna. Nunc lorem ante,\r\n          feugiat ac eros vitae, condimentum imperdiet ligula. Donec aliquet consectetur venenatis. Nunc sagittis\r\n          pulvinar accumsan.\r\n        </p>\r\n      </div>\r\n  \r\n    </div>\r\n    <div id=\"contact_us\" class=\"card\">\r\n      <div class=\"left-media\">\r\n        <img src=\"../../assets/lones-familie.jpg\">\r\n      </div>\r\n      <div class=\"contact-info\">\r\n        <span class=\"title\">Contact Us</span>\r\n        <p>\r\n          <span>Phone: 1-403-564-8524</span>\r\n          <br>\r\n          <span>Email: RockyViewSpringLamb@gmail.com</span>\r\n          <br>\r\n          <span>Address: 453 HorseCreek Road Alberta</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"mapouter\">\r\n        <div class=\"gmap_canvas\"><iframe width=\"700\" height=\"600\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=horsecreek%20road&t=&z=13&ie=UTF8&iwloc=&output=embed\"\r\n            frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://www.pureblack.de/google-maps/\">pureblack.de</a></div>\r\n        <style>\r\n          .mapouter {\r\n            text-align: right;\r\n            height: 600px;\r\n            width: 700px;\r\n          }\r\n  \r\n          .gmap_canvas {\r\n            overflow: hidden;\r\n            background: none !important;\r\n            height: 600px;\r\n            width: 700px;\r\n          }\r\n  \r\n        </style>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/info-card/info-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/info-card/info-card.component.ts ***!
  \**************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfoCardComponent = /** @class */ (function () {
    function InfoCardComponent() {
        this.imageUrlArray = [
            { url: '../../assets/lamb-chops.jpg', caption: 'Lamb Bits' },
            { url: '../../assets/lamb-leg.jpg', caption: 'Lamb Lips' },
            { url: '../../assets/roast-lamb.jpg', caption: 'Lamb Arseholes', href: '' },
        ];
    }
    InfoCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-card',
            template: __webpack_require__(/*! ./info-card.component.html */ "./src/app/info-card/info-card.component.html"),
            styles: [__webpack_require__(/*! ./info-card.component.css */ "./src/app/info-card/info-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoCardComponent);
    return InfoCardComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navbar {\r\n  display: flex;\r\n  flex: 1;\r\n  justify-content: flex-start;\r\n  flex-direction: row;\r\n  height: 80px;\r\n  line-height: 80px;\r\n}\r\n\r\nspan {\r\n  font-size: 1.4em;\r\n  font-weight: 500;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  color: black;\r\n  border-style: none;\r\n  background-color: white;\r\n}\r\n\r\nspan:hover {\r\n  color: rgb(19, 119, 49);\r\n}\r\n\r\n.link{\r\n  margin:auto;\r\n  cursor:pointer;\r\n}\r\n\r\n#logo {\r\n width:100px;\r\n padding:15px;\r\n cursor:pointer;\r\n text-decoration:none;\r\n}\r\n\r\n.sticky {\r\n  background: #fff;\r\n  box-shadow: 0 3px 12px 0 rgba(0,0,0,.08);\r\n  position: fixed;\r\n  top: 0;\r\n  height: 120px;\r\n  width: 100%;\r\n  z-index: 20;\r\n}\r\n\r\n.link{\r\n  text-decoration:none;\r\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navbar\">\r\n  <a routerLink=\"/info-card\" routerLinkActive=\"active\">\r\n    <img id=\"logo\" src=\"../../assets/farm-icon-black.png\">\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/info-card\" [fragment]=\"'products'\" routerLinkActive=\"active\">\r\n    <span>Products</span>\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/info-card\" [fragment]=\"'raised_organic'\" routerLinkActive=\"active\">\r\n    <span>Raised Organic</span>\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/info-card\" [fragment]=\"'ethically_treated'\" routerLinkActive=\"active\">\r\n    <span>Ethically Treated</span>\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/info-card\" [fragment]=\"'buy_local'\" routerLinkActive=\"active\">\r\n    <span>Buy Local</span>\r\n  </a>\r\n  <a class=\"link\" routerLink=\"/info-card\" [fragment]=\"'contact_us'\" routerLinkActive=\"active\">\r\n    <span>Contact Us</span>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\Side Projects\farm-website\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map