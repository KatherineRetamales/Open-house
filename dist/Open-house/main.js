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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ruta/ruta.component */ "./src/app/ruta/ruta.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geocode/geocode.component */ "./src/app/geocode/geocode.component.ts");








var routes = [
    { path: '', component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    { path: 'geocode', component: _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_7__["GeocodeComponent"] },
    { path: 'ruta', component: _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_5__["RutaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-initial{\n  display: block;\n  margin: 0px auto;\n  top: 42%;\n  left: 35%;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1pbml0aWFse1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwcHggYXV0bztcbiAgdG9wOiA0MiU7XG4gIGxlZnQ6IDM1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"#f0f0f0\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n  <p style=\"font-size: 20px; color: white\">\n    <img src=\"../assets/spinner.gif\" alt=\"\" srcset=\"\" />\n    <img class=\"logo-initial\" src=\"../assets/logoubidos.png\" alt=\"\" srcset=\"\" />\n  </p>\n</ngx-spinner>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_here_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/here.service */ "./src/here.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(here, spinner) {
        this.here = here;
        this.spinner = spinner;
    }
    AppComponent.prototype.getAddress = function () {
        var _this = this;
        if (this.query !== '') {
            this.here.getAddress(this.query).then(function (result) {
                _this.locations = result;
            }, function (error) {
                console.error(error);
            });
        }
    };
    AppComponent.prototype.getAddressFromLatLng = function () {
        var _this = this;
        if (this.position !== '') {
            this.here.getAddressFromLatLng(this.position).then(function (result) {
                _this.locations = result;
            }, function (error) {
                console.error(error);
            });
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 5000);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_here_service__WEBPACK_IMPORTED_MODULE_2__["HereService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ruta/ruta.component */ "./src/app/ruta/ruta.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geocode/geocode.component */ "./src/app/geocode/geocode.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_7__["PrincipalComponent"], _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_8__["RutaComponent"], _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_10__["GeocodeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/geocode/geocode.component.css":
/*!***********************************************!*\
  !*** ./src/app/geocode/geocode.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlb2NvZGUvZ2VvY29kZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/geocode/geocode.component.html":
/*!************************************************!*\
  !*** ./src/app/geocode/geocode.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #map [style.width]=\"width\" [style.height]=\"height\"></div>\n"

/***/ }),

/***/ "./src/app/geocode/geocode.component.ts":
/*!**********************************************!*\
  !*** ./src/app/geocode/geocode.component.ts ***!
  \**********************************************/
/*! exports provided: GeocodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodeComponent", function() { return GeocodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeocodeComponent = /** @class */ (function () {
    function GeocodeComponent() {
    }
    GeocodeComponent.prototype.ngOnInit = function () { };
    GeocodeComponent.prototype.ngAfterViewInit = function () {
        var platform = new H.service.Platform({
            app_id: this.appId,
            app_code: this.appCode,
        });
        var defaultLayers = platform.createDefaultLayers();
        var map = new H.Map(this.mapElement.nativeElement, defaultLayers.normal.map, {
            zoom: 10,
            center: { lat: this.lat, lng: this.lng },
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GeocodeComponent.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeocodeComponent.prototype, "appId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeocodeComponent.prototype, "appCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeocodeComponent.prototype, "lat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeocodeComponent.prototype, "lng", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeocodeComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GeocodeComponent.prototype, "height", void 0);
    GeocodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geocode',
            template: __webpack_require__(/*! ./geocode.component.html */ "./src/app/geocode/geocode.component.html"),
            styles: [__webpack_require__(/*! ./geocode.component.css */ "./src/app/geocode/geocode.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeocodeComponent);
    return GeocodeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-geocode\n  appId=\"azExf71DZ9K5PLG7rxqB\"\n  appCode=\"T4nPUtBSokLxDp1YQDFz5Q\"\n  lat=\"-38.7396500\"\n  lng=\"-72.5984200\"\n  width=\"100%\"\n  height=\"835px\"\n>\n</app-geocode>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-initial{\n  width: 100%;\n  height: 70px;\n  background: rgba(28,149,165,1);\n  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(28,149,165,1)), color-stop(49%, rgba(73,155,234,1)), color-stop(100%, rgba(39,206,195,1)));\n  background: linear-gradient(to right, rgba(28,149,165,1) 0%, rgba(73,155,234,1) 49%, rgba(39,206,195,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c95a5', endColorstr='#27cec3', GradientType=1 );\n}\n.icon-menus{\n  width: 100%;\n  max-width: 40px;\n}\n.logoubi{\n  margin: 0 auto;\n  padding-top:18px;\n  display:block;\n  width:100%;\n  max-width:80px;\n}\n.btn-dark{\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.btn-sm{\n  font-size: 25px !important;\n  color: #fff !important;\n}\n@-webkit-keyframes swing {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  10% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  30% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  50% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  70% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes swing {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  10% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  30% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  50% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  70% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes sonar {\n  0% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes sonar {\n  0% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n  }\n}\nbody {\n  font-size: 0.9rem;\n}\n.page-wrapper .sidebar-wrapper,\n.sidebar-wrapper .sidebar-brand > a,\n.sidebar-wrapper .sidebar-dropdown > a:after,\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,\n.sidebar-wrapper ul li a i,\n.page-wrapper .page-content,\n.sidebar-wrapper .sidebar-search input.search-menu,\n.sidebar-wrapper .sidebar-search .input-group-text,\n.sidebar-wrapper .sidebar-menu ul li a,\n#show-sidebar,\n#close-sidebar {\n  transition: all 0.3s ease;\n}\n/*----------------page-wrapper----------------*/\n.page-wrapper {\n  height: 100vh;\n}\n.page-wrapper .theme {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  border-radius: 4px;\n  margin: 2px;\n}\n.page-wrapper .theme.chiller-theme {\n  background: #fff;\n}\n/*----------------toggeled sidebar----------------*/\n.page-wrapper.toggled .sidebar-wrapper {\n  left: 0px;\n}\n@media screen and (min-width: 768px) {\n  .page-wrapper.toggled .page-content {\n    padding-left: 300px;\n  }\n}\n/*----------------show sidebar button----------------*/\n#show-sidebar {\n  position: fixed;\n  left: 10px;\n  top: 10px;\n  border-radius: 0 4px 4px 0px;\n  width: 35px;\n  transition-delay: 0.3s;\n}\n.page-wrapper.toggled #show-sidebar {\n  left: -40px;\n}\n/*----------------sidebar-wrapper----------------*/\n.sidebar-wrapper {\n  width: 260px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: -300px;\n  z-index: 999;\n}\n.sidebar-wrapper ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-wrapper a {\n  text-decoration: none;\n}\n/*----------------sidebar-content----------------*/\n.sidebar-content {\n  max-height: calc(100% - 30px);\n  height: calc(100% - 30px);\n  overflow-y: auto;\n  position: relative;\n}\n.sidebar-content.desktop {\n  overflow-y: hidden;\n}\n/*--------------------sidebar-brand----------------------*/\n.sidebar-wrapper .sidebar-brand {\n  padding: 10px 20px;\n  display: flex;\n  float: right;\n  align-items: center;\n}\n.sidebar-wrapper .sidebar-brand > a {\n  text-transform: uppercase;\n  font-weight: bold;\n  flex-grow: 1;\n}\n.close-sidebar i{\n  font-size: 15px;\n  color: #16c7ff;\n}\n.sidebar-wrapper .sidebar-brand #close-sidebar {\n  cursor: pointer;\n  font-size: 20px;\n}\n/*--------------------sidebar-header----------------------*/\n.sidebar-wrapper .sidebar-header {\n  padding: 20px;\n  overflow: hidden;\n}\n.sidebar-wrapper .sidebar-header .user-pic {\n  float: left;\n  width: 60px;\n  padding: 2px;\n  border-radius: 12px;\n  margin-right: 15px;\n  overflow: hidden;\n}\n.logo{\n  width:100%;\n  max-width:70px;\n}\n.sidebar-wrapper .sidebar-header .user-pic img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  max-width: 80px;\n}\n.sidebar-wrapper .sidebar-header .user-info {\n  float: left;\n}\n.sidebar-wrapper .sidebar-header .user-info > span {\n  display: block;\n}\n.sidebar-wrapper .sidebar-header .user-info .user-role {\n  font-size: 12px;\n}\n.sidebar-wrapper .sidebar-header .user-info .user-status {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.sidebar-wrapper .sidebar-header .user-info .user-status i {\n  font-size: 8px;\n  margin-right: 4px;\n  color: #5cb85c;\n}\n/*-----------------------sidebar-search------------------------*/\n.sidebar-wrapper .sidebar-search > div {\n  padding: 10px 20px;\n}\n/*----------------------sidebar-menu-------------------------*/\n.sidebar-wrapper .sidebar-menu {\n  padding-bottom: 10px;\n}\n.sidebar-wrapper .sidebar-menu .header-menu span {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 15px 20px 5px 20px;\n  display: inline-block;\n}\n.sidebar-wrapper .sidebar-menu ul li a {\n  display: inline-block;\n  width: 100%;\n  text-decoration: none;\n  position: relative;\n  padding: 8px 30px 8px 20px;\n}\n.sidebar-wrapper .sidebar-menu ul li a i {\n  margin-right: 10px;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 4px;\n}\n.sidebar-wrapper .sidebar-menu ul li a:hover > i::before {\n  display: inline-block;\n  -webkit-animation: swing ease-in-out 0.5s 1 alternate;\n          animation: swing ease-in-out 0.5s 1 alternate;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\\f105\";\n  font-style: normal;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  background: 0 0;\n  position: absolute;\n  right: 15px;\n  top: 14px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {\n  padding: 5px 0;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {\n  padding-left: 25px;\n  font-size: 13px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {\n  content: \"\\f111\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  font-style: normal;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-right: 10px;\n  font-size: 8px;\n}\n.sidebar-wrapper .sidebar-menu ul li a span.label,\n.sidebar-wrapper .sidebar-menu ul li a span.badge {\n  float: right;\n  margin-top: 8px;\n  margin-left: 5px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {\n  float: right;\n  margin-top: 0px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-submenu {\n  display: none;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  right: 17px;\n}\n/*--------------------------side-footer------------------------------*/\n.sidebar-footer {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  display: flex;\n}\n.sidebar-footer > a {\n  flex-grow: 1;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  position: relative;\n}\n.sidebar-footer > a .notification {\n  position: absolute;\n  top: 0;\n}\n.badge-sonar {\n  display: inline-block;\n  background: #980303;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n  position: absolute;\n  top: 0;\n}\n.badge-sonar:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 2px solid #980303;\n  opacity: 0;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: sonar 1.5s infinite;\n          animation: sonar 1.5s infinite;\n}\n/*--------------------------page-content-----------------------------*/\n.page-wrapper .page-content {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n}\n.page-wrapper .page-content > div {\n  padding: 20px 40px;\n}\n.page-wrapper .page-content {\n  overflow-x: hidden;\n}\n/*------scroll bar---------------------*/\n::-webkit-scrollbar {\n  width: 5px;\n  height: 7px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #525965;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #525965;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #525965;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track:hover {\n  background: transparent;\n}\n::-webkit-scrollbar-track:active {\n  background: transparent;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n/*-----------------------------chiller-theme-------------------------------------------------*/\n.chiller-theme .sidebar-wrapper {\n    background:#fff;\n}\n.chiller-theme .sidebar-wrapper .sidebar-header,\n.chiller-theme .sidebar-wrapper .sidebar-search,\n.chiller-theme .sidebar-wrapper .sidebar-menu {\n    border-top: 1px solid #3a3f48;\n}\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\n    border-color: transparent;\n    box-shadow: none;\n}\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,\n.chiller-theme .sidebar-wrapper .sidebar-brand>a,\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a,\n.chiller-theme .sidebar-footer>a {\n    color: #818896;\n}\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info,\n.chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,\n.chiller-theme .sidebar-footer>a:hover i {\n    color: #b8bfce;\n}\n.page-wrapper.chiller-theme.toggled #close-sidebar {\n    color: #16c7ff;\n}\n.page-wrapper.chiller-theme.toggled #close-sidebar:hover {\n    color: #ffffff;\n}\n.chiller-theme .sidebar-wrapper ul li:hover a i,\n.chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {\n    color: #16c7ff;\n    text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\n    background: #3a3f48;\n}\n.chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {\n    color: #6c7b88;\n}\n.chiller-theme .sidebar-footer {\n    background: #3a3f48;\n    box-shadow: 0px -1px 5px #282c33;\n    border-top: 1px solid #464a52;\n}\n.chiller-theme .sidebar-footer>a:first-child {\n    border-left: none;\n}\n.chiller-theme .sidebar-footer>a:last-child {\n    border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUU5QixnS0FBZ0s7RUFJaEssNkdBQTZHO0VBQzdHLG9IQUFvSDtBQUN0SDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDRjtBQTVCQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsK0JB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LFlBQVk7RUFDWixzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDO0FBRUEsc0VBQXNFO0FBRXRFO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLHdDQUF3QztBQUV4QztFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFHQSw4RkFBOEY7QUFFOUY7SUFDSSxlQUFlO0FBQ25CO0FBRUE7OztJQUdJLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFFQTs7Ozs7OztJQU9JLGNBQWM7QUFDbEI7QUFFQTs7Ozs7SUFLSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7Ozs7SUFJSSxjQUFjO0lBQ2QsZ0RBQWdEO0FBQ3BEO0FBRUE7Ozs7SUFJSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1pbml0aWFse1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LDE0OSwxNjUsMSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjgsMTQ5LDE2NSwxKSksIGNvbG9yLXN0b3AoNDklLCByZ2JhKDczLDE1NSwyMzQsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMzksMjA2LDE5NSwxKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI4LDE0OSwxNjUsMSkgMCUsIHJnYmEoNzMsMTU1LDIzNCwxKSA0OSUsIHJnYmEoMzksMjA2LDE5NSwxKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFjOTVhNScsIGVuZENvbG9yc3RyPScjMjdjZWMzJywgR3JhZGllbnRUeXBlPTEgKTtcbn1cbi5pY29uLW1lbnVze1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA0MHB4O1xufVxuLmxvZ291Yml7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLXRvcDoxOHB4O1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6ODBweDtcbn1cbi5idG4tZGFya3tcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmJ0bi1zbXtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5Aa2V5ZnJhbWVzIHN3aW5nIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc29uYXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5ib2R5IHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4ucGFnZS13cmFwcGVyIC5zaWRlYmFyLXdyYXBwZXIsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kID4gYSxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gPiBhOmFmdGVyLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUsXG4uc2lkZWJhci13cmFwcGVyIHVsIGxpIGEgaSxcbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcbiNzaG93LXNpZGViYXIsXG4jY2xvc2Utc2lkZWJhciB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tcGFnZS13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5wYWdlLXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ucGFnZS13cmFwcGVyIC50aGVtZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW46IDJweDtcbn1cblxuLnBhZ2Utd3JhcHBlciAudGhlbWUuY2hpbGxlci10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLXRvZ2dlbGVkIHNpZGViYXItLS0tLS0tLS0tLS0tLS0tKi9cblxuLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5zaWRlYmFyLXdyYXBwZXIge1xuICBsZWZ0OiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5wYWdlLXdyYXBwZXIudG9nZ2xlZCAucGFnZS1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwMHB4O1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS1zaG93IHNpZGViYXIgYnV0dG9uLS0tLS0tLS0tLS0tLS0tLSovXG4jc2hvdy1zaWRlYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwcHg7XG4gIHdpZHRoOiAzNXB4O1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuLnBhZ2Utd3JhcHBlci50b2dnbGVkICNzaG93LXNpZGViYXIge1xuICBsZWZ0OiAtNDBweDtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItd3JhcHBlci0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIHtcbiAgd2lkdGg6IDI2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMzAwcHg7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnNpZGViYXItd3JhcHBlciB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItY29udGVudC0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpZGViYXItY29udGVudC5kZXNrdG9wIHtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1icmFuZC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbG9hdDogcmlnaHQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jbG9zZS1zaWRlYmFyIGl7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICMxNmM3ZmY7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgI2Nsb3NlLXNpZGViYXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWhlYWRlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLXBpYyB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubG9nb3tcbiAgd2lkdGg6MTAwJTtcbiAgbWF4LXdpZHRoOjcwcHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLXBpYyBpbWcge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8gLnVzZXItcm9sZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMge1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMgaSB7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgY29sb3I6ICM1Y2I4NWM7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLXNlYXJjaC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoID4gZGl2IHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLW1lbnUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuaGVhZGVyLW1lbnUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweCA1cHggMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4cHggMzBweCA4cHggMjBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhOmhvdmVyID4gaTo6YmVmb3JlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbmltYXRpb246IHN3aW5nIGVhc2UtaW4tb3V0IDAuNXMgMSBhbHRlcm5hdGU7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIge1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogMCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDE0cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IHVsIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMTFcIjtcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogOHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmxhYmVsLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgc3Bhbi5iYWRnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhIC5iYWRnZSxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmxhYmVsIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1zdWJtZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSA+IGE6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHJpZ2h0OiAxN3B4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2lkZS1mb290ZXItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zaWRlYmFyLWZvb3RlciA+IGEge1xuICBmbGV4LWdyb3c6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZWJhci1mb290ZXIgPiBhIC5ub3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmJhZGdlLXNvbmFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjOTgwMzAzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbn1cblxuLmJhZGdlLXNvbmFyOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM5ODAzMDM7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYW5pbWF0aW9uOiBzb25hciAxLjVzIGluZmluaXRlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tcGFnZS1jb250ZW50LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCA+IGRpdiB7XG4gIHBhZGRpbmc6IDIwcHggNDBweDtcbn1cblxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4vKi0tLS0tLXNjcm9sbCBiYXItLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA3cHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM1MjU5NjU7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IG5vbmUgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGlsbGVyLXRoZW1lLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6I2ZmZjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzYTNmNDg7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1yb2xlLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1zdGF0dXMsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZD5hLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXI+YSB7XG4gICAgY29sb3I6ICM4MTg4OTY7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaTpob3Zlcj5hLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZT5hLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQ+YTpob3Zlcixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmhvdmVyIGkge1xuICAgIGNvbG9yOiAjYjhiZmNlO1xufVxuXG4ucGFnZS13cmFwcGVyLmNoaWxsZXItdGhlbWUudG9nZ2xlZCAjY2xvc2Utc2lkZWJhciB7XG4gICAgY29sb3I6ICMxNmM3ZmY7XG59XG5cbi5wYWdlLXdyYXBwZXIuY2hpbGxlci10aGVtZS50b2dnbGVkICNjbG9zZS1zaWRlYmFyOmhvdmVyIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB1bCBsaTpob3ZlciBhIGksXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpob3ZlcjpiZWZvcmUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudTpmb2N1cytzcGFuLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duLmFjdGl2ZSBhIGkge1xuICAgIGNvbG9yOiAjMTZjN2ZmO1xuICAgIHRleHQtc2hhZG93OjBweCAwcHggMTBweCByZ2JhKDIyLCAxOTksIDI1NSwgMC41KTtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGEgaSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biBkaXYsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCBpbnB1dC5zZWFyY2gtbWVudSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjM2EzZjQ4O1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLmhlYWRlci1tZW51IHNwYW4ge1xuICAgIGNvbG9yOiAjNmM3Yjg4O1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzYTNmNDg7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggNXB4ICMyODJjMzM7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0NjRhNTI7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyPmE6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"navbar-initial\">\n  <img class=\"logoubi\" src=\"../../assets/ubi3.png\" alt=\"\" srcset=\"\" />\n  <div class=\"header-pri\">\n    <div class=\"page-wrapper chiller-theme toggled\">\n      <a id=\"show-sidebar\" class=\"btn btn-sm btn-dark\">\n        <i class=\"fas fa-bars\"></i>\n      </a>\n      <nav id=\"sidebar\" class=\"sidebar-wrapper\">\n        <div class=\"sidebar-content\">\n          <div class=\"sidebar-brand\">\n            <div id=\"close-sidebar\">\n              <i class=\"fas fa-arrow-left\"></i>\n            </div>\n          </div>\n          <div class=\"sidebar-menu\">\n            <ul>\n              <li class=\"sidebar-dropdown\">\n                <a>\n                  <img class=\"icon-menus\" src=\"../../assets/settings.svg\" alt=\"\" srcset=\"\" />\n                  <span>MENU 1</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a>\n                  <i class=\"fas fa-user-tag\"></i>\n                  <span>MENU 2</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a>\n                  <i class=\"far fa-gem\"></i>\n                  <span>MENU 3</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a routerLink=\"opportunities\">\n                  <i class=\"fa fa-globe\"></i>\n                  <span>MENU 4</span>\n                  <span class=\"badge badge-pill badge-danger\">3</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a href=\"#\">\n                  <i class=\"fas fa-fire\"></i>\n                  <span>MENU 5</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a href=\"#\">\n                  <i class=\"fas fa-fire\"></i>\n                  <span>MENU 6</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <div class=\"logo\">\n        <img src=\"\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(function ($) {
            $('.sidebar-dropdown > a').click(function () {
                $('.sidebar-submenu').slideUp(200);
                if ($(this)
                    .parent()
                    .hasClass('active')) {
                    $('.sidebar-dropdown').removeClass('active');
                    $(this)
                        .parent()
                        .removeClass('active');
                }
                else {
                    $('.sidebar-dropdown').removeClass('active');
                    $(this)
                        .next('.sidebar-submenu')
                        .slideDown(200);
                    $(this)
                        .parent()
                        .addClass('active');
                }
            });
            $('#close-sidebar').click(function () {
                $('.page-wrapper').removeClass('toggled');
            });
            $('#show-sidebar').click(function () {
                $('.page-wrapper').addClass('toggled');
            });
        });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/principal/principal.component.css":
/*!***************************************************!*\
  !*** ./src/app/principal/principal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-initial{\n  background-image: url('top.png');\n  width:100%;\n  height: 100px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  top: 0;\n  position: absolute;\n}\n.icono-initial{\n  max-width: 150px;\n  margin: 0 auto; \n  display: block;\n  width: 100%;\n  padding-top: 13px;\n}\n.description-initial{\n  color: #979797;\n  text-align: center;\n  font-size: 18px;\n  padding: 0 20px;\n  margin-top: 10px;\n}\n.title-initial{\n  text-align: center;\n  font-weight: 700;\n  color: #51626A;\n  letter-spacing:1px;\n  margin-top: 15px;\n}\n.bottom-end{\n  background-image: url('bottom.png');\n  width: 100%;\n  height: 100px;\n  background-size: contain;\n  background-repeat: repeat;\n  bottom: 0;\n  position: absolute;\n}\n.slide-principal{\n  top: 50%;\n  margin: 140px auto 0 auto;\n  width: 100%;\n  max-width:600px;\n}\n.carousel-item{\n  background-color: #fff;\n}\n.carousel-indicators li {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background-color:#15B4F1; \n  -webkit-border-radius: 50%;\n  -moz-border-radius:50%;\n}\n.buttons button{\n  display:block;\n  margin: 10px auto;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #15b4f1 !important;\n  border-color: #15B4F1 !important;\n  padding: 5px 40px;\n  border-radius: 20px;\n  -webkit-border-radius: 20px;\n  -moz-border-radius: 20px;\n}\n@media (max-width:780px){\n  .top-initial{\n    background-image: url('topwave2x.png');\n    background-size: auto;\n    height: 130px;\n    width: 100%;\n  }\n  .bottom-end{\n    background-image: url('bgwaves.png');\n    background-size: cover;\n  }\n  \n}\n@media(max-width: 360px){\n  .slide-principal{\n    margin: 50px auto 0 auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQTJDO0VBQzNDLFVBQVU7RUFDVixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsTUFBTTtFQUNOLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUNBQThDO0VBQzlDLFdBQVc7RUFDWCxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix3QkFBd0I7QUFDMUI7QUFFQTtFQUNFO0lBQ0Usc0NBQWlEO0lBQ2pELHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsV0FBVztFQUNiO0VBQ0E7SUFDRSxvQ0FBK0M7SUFDL0Msc0JBQXNCO0VBQ3hCOztBQUVGO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1pbml0aWFse1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL3RvcC5wbmcpO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcbiAgdG9wOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uaWNvbm8taW5pdGlhbHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87IFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xufVxuLmRlc2NyaXB0aW9uLWluaXRpYWx7XG4gIGNvbG9yOiAjOTc5Nzk3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRpdGxlLWluaXRpYWx7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICM1MTYyNkE7XG4gIGxldHRlci1zcGFjaW5nOjFweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5ib3R0b20tZW5ke1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2JvdHRvbS5wbmcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5zbGlkZS1wcmluY2lwYWx7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IDE0MHB4IGF1dG8gMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOjYwMHB4O1xufVxuLmNhcm91c2VsLWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjojMTVCNEYxOyBcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czo1MCU7XG59XG4uYnV0dG9ucyBidXR0b257XG4gIGRpc3BsYXk6YmxvY2s7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNWI0ZjEgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMTVCNEYxICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NzgwcHgpe1xuICAudG9wLWluaXRpYWx7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy90b3B3YXZlMngucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYm90dG9tLWVuZHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2Jnd2F2ZXMucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG4gIFxufVxuQG1lZGlhKG1heC13aWR0aDogMzYwcHgpe1xuICAuc2xpZGUtcHJpbmNpcGFse1xuICAgIG1hcmdpbjogNTBweCBhdXRvIDAgYXV0bztcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/principal/principal.component.html":
/*!****************************************************!*\
  !*** ./src/app/principal/principal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"top-initial\"></section>\n<section class=\"slide-principal\">\n  <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n      <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"../../assets/taxi.svg\" class=\"icono-initial\" alt=\"...\" />\n        <h2 class=\"title-initial\">Bienvenido</h2>\n        <p class=\"description-initial\">Podrás ver tu colectivo en tiempo real.</p>\n        <br /><br /><br />\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../assets/map.svg\" class=\"icono-initial\" alt=\"...\" />\n        <h2 class=\"title-initial\">Planifica tu Viaje</h2>\n        <p class=\"description-initial\">\n          Te sugerimos tus destinos habituales y colectivos disponibles.\n        </p>\n        <br /><br /><br />\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"../../assets/money.svg\" class=\"icono-initial\" alt=\"...\" />\n        <h2 class=\"title-initial\">Verifica Tarifas</h2>\n        <p class=\"description-initial\">Revisa las tarifas antes de iniciar tu viaje</p>\n        <br /><br /><br />\n      </div>\n    </div>\n    <a\n      class=\"carousel-control-prev\"\n      href=\"#carouselExampleIndicators\"\n      role=\"button\"\n      data-slide=\"prev\"\n    >\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Previous</span>\n    </a>\n    <a\n      class=\"carousel-control-next\"\n      href=\"#carouselExampleIndicators\"\n      role=\"button\"\n      data-slide=\"next\"\n    >\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n    </a>\n  </div>\n</section>\n<section class=\"buttons\">\n  <button type=\"button\" routerLink=\"home\" class=\"btn btn-primary\">IR A LA APP</button>\n</section>\n<section class=\"bottom-end\"></section>\n"

/***/ }),

/***/ "./src/app/principal/principal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/principal/principal.component.ts ***!
  \**************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");



var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(spinner) {
        this.spinner = spinner;
    }
    PrincipalComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this.spinner.hide();
        }, 5000);
    };
    PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: __webpack_require__(/*! ./principal.component.html */ "./src/app/principal/principal.component.html"),
            styles: [__webpack_require__(/*! ./principal.component.css */ "./src/app/principal/principal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], PrincipalComponent);
    return PrincipalComponent;
}());



/***/ }),

/***/ "./src/app/ruta/ruta.component.css":
/*!*****************************************!*\
  !*** ./src/app/ruta/ruta.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3J1dGEvcnV0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ruta/ruta.component.html":
/*!******************************************!*\
  !*** ./src/app/ruta/ruta.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\" style=\"position:absolute; width:49%; height:100%; background:grey\" ></div>\n"

/***/ }),

/***/ "./src/app/ruta/ruta.component.ts":
/*!****************************************!*\
  !*** ./src/app/ruta/ruta.component.ts ***!
  \****************************************/
/*! exports provided: RutaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaComponent", function() { return RutaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RutaComponent = /** @class */ (function () {
    function RutaComponent() {
    }
    RutaComponent.prototype.ngOnInit = function () {
    };
    RutaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ruta',
            template: __webpack_require__(/*! ./ruta.component.html */ "./src/app/ruta/ruta.component.html"),
            styles: [__webpack_require__(/*! ./ruta.component.css */ "./src/app/ruta/ruta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RutaComponent);
    return RutaComponent;
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

/***/ "./src/here.service.ts":
/*!*****************************!*\
  !*** ./src/here.service.ts ***!
  \*****************************/
/*! exports provided: HereService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereService", function() { return HereService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HereService = /** @class */ (function () {
    function HereService() {
        this.platform = new H.service.Platform({
            app_id: 'APP-ID-HERE',
            app_code: 'APP-CODE-HERE',
        });
        this.geocoder = this.platform.getGeocodingService();
    }
    HereService.prototype.getAddress = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geocoder.geocode({ searchText: query }, function (result) {
                if (result.Response.View.length > 0) {
                    if (result.Response.View[0].Result.length > 0) {
                        resolve(result.Response.View[0].Result);
                    }
                    else {
                        reject({ message: 'no results found' });
                    }
                }
                else {
                    reject({ message: 'no results found' });
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    HereService.prototype.getAddressFromLatLng = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geocoder.reverseGeocode({ prox: query, mode: 'retrieveAddress' }, function (result) {
                if (result.Response.View.length > 0) {
                    if (result.Response.View[0].Result.length > 0) {
                        resolve(result.Response.View[0].Result);
                    }
                    else {
                        reject({ message: 'no results found' });
                    }
                }
                else {
                    reject({ message: 'no results found' });
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    HereService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HereService);
    return HereService;
}());



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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/laboratoriad154/laboratoria/Open-house/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map