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
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/finish/finish.component.ts");









var routes = [
    { path: '', component: _principal_principal_component__WEBPACK_IMPORTED_MODULE_6__["PrincipalComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"] },
    { path: 'geocode', component: _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_7__["GeocodeComponent"] },
    { path: 'ruta', component: _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_5__["RutaComponent"] },
    { path: 'finish', component: _finish_finish_component__WEBPACK_IMPORTED_MODULE_8__["FinishComponent"] }
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

module.exports = "<ngx-spinner bdColor=\"#f0f0f0\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n  <p style=\"font-size: 20px; color: white\">\n    <img src=\"../assets/spinner.gif\" alt=\"\" srcset=\"\" />\n    <img class=\"logo-initial\" src=\"../assets/logoubidos.png\" alt=\"\" srcset=\"\" />\n  </p>\n</ngx-spinner>\n\n<!-- <div style=\"padding: 10px 0\">\n  <div>\n      <label style=\"display: inline-block; width: 60px; color: #FFF\">Start</label>\n      <input type=\"text\" [(ngModel)]=\"start\" />\n  </div>\n  <div>\n      <label style=\"display: inline-block; width: 60px; color: #FFF\">Finish</label>\n      <input type=\"text\" [(ngModel)]=\"finish\" />\n  </div>\n</div>-->\n<router-outlet></router-outlet>\n"

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
        this.start = "-33.5600906,-70.6332687";
        this.finish = "-33.6299234,-70.5918625";
    }
    /* public getAddress() {
      if (this.query !== '') {
        this.here.getAddress(this.query).then(
          result => {
            this.locations = result as Array<any>;
          },
          error => {
            console.error(error);
          }
        );
      }
    }
  
    public getAddressFromLatLng() {
      if (this.position !== '') {
        this.here.getAddressFromLatLng(this.position).then(
          result => {
            this.locations = result as Array<any>;
          },
          error => {
            console.error(error);
          }
        );
      }
    }
   */
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _principal_principal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./principal/principal.component */ "./src/app/principal/principal.component.ts");
/* harmony import */ var _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ruta/ruta.component */ "./src/app/ruta/ruta.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geocode/geocode.component */ "./src/app/geocode/geocode.component.ts");
/* harmony import */ var _finish_finish_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./finish/finish.component */ "./src/app/finish/finish.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _principal_principal_component__WEBPACK_IMPORTED_MODULE_8__["PrincipalComponent"], _ruta_ruta_component__WEBPACK_IMPORTED_MODULE_9__["RutaComponent"], _geocode_geocode_component__WEBPACK_IMPORTED_MODULE_11__["GeocodeComponent"], _finish_finish_component__WEBPACK_IMPORTED_MODULE_12__["FinishComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/finish/finish.component.css":
/*!*********************************************!*\
  !*** ./src/app/finish/finish.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-search{\n  position: absolute;\n  top: 100px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  width: 80%;\n}\n.btn-send{\n    color: #fff;\n    background-color:rgba(28,149,165,1);\n    border-color: rgba(28,149,165,1);\n}\n.father-finish{\n  width: 100%;\n  height: 150px;\n}\n.division-3-finish{\n  margin-top: 20px;\n  width: 33.25%;\n  border-right: 1px solid rgb(131, 146, 153, .5);\n  float:left;\n  height: auto\n}\n.icono-finish, .icono-auto{\n  margin: 10px auto;\n  display: block;\n}\n.icono-auto{\n  width: 43px;\n}\n.title{\n  text-align: center;\n  color: #51626A;\n}\n.tarifa{\n  color: #1C94A5;\n  text-align:center;\n}\n.colectivos{\n  width: 100%;\n  height:30px;\n  background-color: #EDF1F2;\n}\n.colectivos p{\n  font-weight: 700;\n  text-align: center;\n  padding: 5px 0;\n  color: #51626A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluaXNoL2ZpbmlzaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0FBQ1o7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0FBQ3BDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxVQUFVO0VBQ1Y7QUFDRjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZmluaXNoL2ZpbmlzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LXNlYXJjaHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiA4MCU7XG59XG4uYnRuLXNlbmR7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI4LDE0OSwxNjUsMSk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI4LDE0OSwxNjUsMSk7XG59XG4uZmF0aGVyLWZpbmlzaHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTUwcHg7XG59XG4uZGl2aXNpb24tMy1maW5pc2h7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAzMy4yNSU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigxMzEsIDE0NiwgMTUzLCAuNSk7XG4gIGZsb2F0OmxlZnQ7XG4gIGhlaWdodDogYXV0b1xufVxuLmljb25vLWZpbmlzaCwgLmljb25vLWF1dG97XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5pY29uby1hdXRve1xuICB3aWR0aDogNDNweDtcbn1cbi50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzUxNjI2QTtcbn1cbi50YXJpZmF7XG4gIGNvbG9yOiAjMUM5NEE1O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5jb2xlY3Rpdm9ze1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OjMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFREYxRjI7XG59XG4uY29sZWN0aXZvcyBwe1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBjb2xvcjogIzUxNjI2QTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/finish/finish.component.html":
/*!**********************************************!*\
  !*** ./src/app/finish/finish.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<app-ruta\n appId=\"No26eoM5X66aUvOPUKP9\" \n appCode=\"l6ZL7z1hD54_UlSMBNU6XQ\" \n start=\"-33.5600906,-70.6332687\" \n finish=\"-33.6299234,-70.5918625\" \n width=\"100%\" \n height=\"530px\"\n >\n</app-ruta> \n<section class=\"input-search\">\n  <div class=\"input-group mb-3\">\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Ingrese una dirección\"\n      aria-label=\"ingrese una dirección\"\n      aria-describedby=\"button-addon2\"\n    />\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-send\" type=\"button\" id=\"button-addon2\">\n        <i class=\"fas fa-arrow-right\"></i>\n      </button>\n    </div>\n  </div>\n</section>\n<section class=\"father-finish\">\n  <div class=\"division-3-finish\">\n    <img class=\"icono-auto\" src=\"../../assets/linea.png\" alt=\"\" srcset=\"\" />\n    <h6 class=\"title\">Línea 3033</h6>\n  </div>\n  <div class=\"division-3-finish\">\n    <img class=\"icono-finish\" src=\"../../assets/disponibilidad.png\" alt=\"\" srcset=\"\" />\n    <h6 class=\"title\">Disponibilidad</h6>\n    <p>2</p>\n  </div>\n  <div class=\"division-3-finish\">\n    <h2 class=\"tarifa\">$ 650</h2>\n    <h6 class=\"title\">Tarifa</h6>\n  </div>\n</section>\n<section class=\"colectivos\">\n  <p>Colectivos cerca de tí.</p>\n</section>"

/***/ }),

/***/ "./src/app/finish/finish.component.ts":
/*!********************************************!*\
  !*** ./src/app/finish/finish.component.ts ***!
  \********************************************/
/*! exports provided: FinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return FinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FinishComponent = /** @class */ (function () {
    function FinishComponent() {
    }
    FinishComponent.prototype.ngOnInit = function () {
    };
    FinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-finish',
            template: __webpack_require__(/*! ./finish.component.html */ "./src/app/finish/finish.component.html"),
            styles: [__webpack_require__(/*! ./finish.component.css */ "./src/app/finish/finish.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FinishComponent);
    return FinishComponent;
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

module.exports = "<div #map [style.width]=\"width\" [style.height]=\"height\"></div>\n\n\n"

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
            useHTTPS: true
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

module.exports = ".colectivos{\n  width: 100%;\n  height:30px;\n  background-color: #EDF1F2;\n}\n.colectivos p{\n  font-weight: 700;\n  text-align: center;\n  padding: 5px 0;\n  color: #51626A;\n}\n.father{\n  width: 100%;\n  height: auto;\n}\n.division-3{\n  margin-top: 20px;\n  width: 33.25%;\n  border-right: 1px solid rgb(131, 146, 153);\n  float:left;\n  height: auto;\n}\n.title-type h5{\n  width:100%;\n  text-align: center;\n  padding: 8px 0;\n}\n.title-type img{\n  margin:20px auto;\n  display:block;\n}\n.result p{\n  color: #51626A;\n  text-align: center;\n  font-size: 13px;\n}\n.input-search{\n  position: absolute;\n  top: 100px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  width: 80%;\n}\n.btn-send{\n    color: #fff;\n    background-color:rgba(28,149,165,1);\n    border-color: rgba(28,149,165,1);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsY0FBYztFQUNkLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtBQUNaO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUNBQW1DO0lBQ25DLGdDQUFnQztBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbGVjdGl2b3N7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6MzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VERjFGMjtcbn1cbi5jb2xlY3Rpdm9zIHB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGNvbG9yOiAjNTE2MjZBO1xufVxuLmZhdGhlcntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5kaXZpc2lvbi0ze1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMzMuMjUlO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoMTMxLCAxNDYsIDE1Myk7XG4gIGZsb2F0OmxlZnQ7XG4gIGhlaWdodDogYXV0bztcbn1cbi50aXRsZS10eXBlIGg1e1xuICB3aWR0aDoxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuLnRpdGxlLXR5cGUgaW1ne1xuICBtYXJnaW46MjBweCBhdXRvO1xuICBkaXNwbGF5OmJsb2NrO1xufVxuLnJlc3VsdCBwe1xuICBjb2xvcjogIzUxNjI2QTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaW5wdXQtc2VhcmNoe1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDgwJTtcbn1cbi5idG4tc2VuZHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjgsMTQ5LDE2NSwxKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjgsMTQ5LDE2NSwxKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<app-geocode\n  appId=\"azExf71DZ9K5PLG7rxqB\"\n  appCode=\"T4nPUtBSokLxDp1YQDFz5Q\"\n  lat=\"-33.4372\"\n  lng=\"-70.6506\"\n  width=\"100%\"\n  height=\"350px\"\n>\n</app-geocode>\n<section class=\"input-search\">\n  <div class=\"input-group mb-3\">\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Ingrese una dirección\"\n      aria-label=\"ingrese una dirección\"\n      aria-describedby=\"button-addon2\"\n    />\n    <div class=\"input-group-append\">\n      <button class=\"btn btn-send\" type=\"button\" id=\"button-addon2\">\n        <i class=\"fas fa-arrow-right\"></i>\n      </button>\n    </div>\n  </div>\n</section>\n<section class=\"colectivos\">\n  <p>Colectivos cerca de tí.</p>\n</section>\n<section class=\"father\">\n  <div class=\"division-3\">\n    <div class=\"title-type\">\n      <h5>Lìnea</h5>\n      <img src=\"../../assets/Vector.png\" alt=\"\" srcset=\"\" />\n    </div>\n    <div class=\"result\">\n      <p>3033</p>\n      <p>3028</p>\n      <p>3030</p>\n      <p>1230</p>\n    </div>\n  </div>\n  <div class=\"division-3\">\n    <div class=\"title-type\">\n      <h5>Tiempo</h5>\n      <img src=\"../../assets/icon.png\" alt=\"\" srcset=\"\" />\n    </div>\n    <div class=\"result\">\n      <p>Menos de 5 min</p>\n      <p>Entre 5 y 10 min</p>\n      <p>Entre 5 y 10 min</p>\n      <p>Entre 10 y 20 min</p>\n    </div>\n  </div>\n  <div class=\"division-3\">\n    <div class=\"title-type\">\n      <h5>Distancia</h5>\n      <img src=\"../../assets/distance.png\" alt=\"\" srcset=\"\" />\n    </div>\n    <div class=\"result\">\n      <p>1 km</p>\n      <p>3.5 km</p>\n      <p>3.8 km</p>\n      <p>4.0 km</p>\n    </div>\n  </div>\n</section>\n"

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

module.exports = ".navbar-initial{\n  width: 100%;\n  height: 70px;\n  background: rgba(28,149,165,1);\n  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(28,149,165,1)), color-stop(49%, rgba(73,155,234,1)), color-stop(100%, rgba(39,206,195,1)));\n  background: linear-gradient(to right, rgba(28,149,165,1) 0%, rgba(73,155,234,1) 49%, rgba(39,206,195,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1c95a5', endColorstr='#27cec3', GradientType=1 );\n}\n.icon-menus{\n  width: 100%;\n  max-width: 30px;\n  margin-right: 10px;\n}\n.logoubi{\n  margin: 0 auto;\n  padding-top:18px;\n  display:block;\n  width:100%;\n  max-width:80px;\n}\n.btn-dark{\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.btn-sm{\n  font-size: 25px !important;\n  color: #fff !important;\n}\n@-webkit-keyframes swing {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  10% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  30% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  50% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  70% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@keyframes swing {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  10% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n  }\n  30% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  40% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n  }\n  50% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  60% {\n    -webkit-transform: rotate(5deg);\n            transform: rotate(5deg);\n  }\n  70% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  80% {\n    -webkit-transform: rotate(-5deg);\n            transform: rotate(-5deg);\n  }\n  100% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes sonar {\n  0% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n  }\n}\n@keyframes sonar {\n  0% {\n    -webkit-transform: scale(0.9);\n            transform: scale(0.9);\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n  }\n}\nbody {\n  font-size: 0.9rem;\n}\n.page-wrapper .sidebar-wrapper,\n.sidebar-wrapper .sidebar-brand > a,\n.sidebar-wrapper .sidebar-dropdown > a:after,\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,\n.sidebar-wrapper ul li a i,\n.page-wrapper .page-content,\n.sidebar-wrapper .sidebar-search input.search-menu,\n.sidebar-wrapper .sidebar-search .input-group-text,\n.sidebar-wrapper .sidebar-menu ul li a,\n#show-sidebar,\n#close-sidebar {\n  transition: all 0.3s ease;\n}\n/*----------------page-wrapper----------------*/\n.page-wrapper {\n  height: 100vh;\n}\n.page-wrapper .theme {\n  width: 40px;\n  height: 40px;\n  display: inline-block;\n  border-radius: 4px;\n  margin: 2px;\n}\n.page-wrapper .theme.chiller-theme {\n  background: #fff;\n}\n/*----------------toggeled sidebar----------------*/\n.page-wrapper.toggled .sidebar-wrapper {\n  left: 0px;\n}\n@media screen and (min-width: 768px) {\n  .page-wrapper.toggled .page-content {\n    padding-left: 300px;\n  }\n}\n/*----------------show sidebar button----------------*/\n#show-sidebar {\n  position: fixed;\n  left: 10px;\n  top: 10px;\n  border-radius: 0 4px 4px 0px;\n  width: 35px;\n  transition-delay: 0.3s;\n}\n.page-wrapper.toggled #show-sidebar {\n  left: -40px;\n}\n/*----------------sidebar-wrapper----------------*/\n.sidebar-wrapper {\n  width: 260px;\n  height: 100%;\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  left: -300px;\n  z-index: 999;\n}\n.sidebar-wrapper ul {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.sidebar-wrapper a {\n  text-decoration: none;\n}\n/*----------------sidebar-content----------------*/\n.sidebar-content {\n  max-height: calc(100% - 30px);\n  height: calc(100% - 30px);\n  overflow-y: auto;\n  position: relative;\n}\n.sidebar-content.desktop {\n  overflow-y: hidden;\n}\n/*--------------------sidebar-brand----------------------*/\n.sidebar-wrapper .sidebar-brand {\n  padding: 10px 20px;\n  display: flex;\n  float: right;\n  align-items: center;\n}\n.sidebar-wrapper .sidebar-brand > a {\n  text-transform: uppercase;\n  font-weight: bold;\n  flex-grow: 1;\n}\n.close-sidebar i{\n  font-size: 15px;\n  color: #16c7ff;\n}\n.sidebar-wrapper .sidebar-brand #close-sidebar {\n  cursor: pointer;\n  font-size: 20px;\n}\n/*--------------------sidebar-header----------------------*/\n.sidebar-wrapper .sidebar-header {\n  padding: 20px;\n  overflow: hidden;\n}\n.sidebar-wrapper .sidebar-header .user-pic {\n  float: left;\n  width: 60px;\n  padding: 2px;\n  border-radius: 12px;\n  margin-right: 15px;\n  overflow: hidden;\n}\n.logo{\n  width:100%;\n  max-width:70px;\n}\n.sidebar-wrapper .sidebar-header .user-pic img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  height: 100%;\n  width: 100%;\n  max-width: 80px;\n}\n.sidebar-wrapper .sidebar-header .user-info {\n  float: left;\n}\n.sidebar-wrapper .sidebar-header .user-info > span {\n  display: block;\n}\n.sidebar-wrapper .sidebar-header .user-info .user-role {\n  font-size: 12px;\n}\n.sidebar-wrapper .sidebar-header .user-info .user-status {\n  font-size: 11px;\n  margin-top: 4px;\n}\n.sidebar-wrapper .sidebar-header .user-info .user-status i {\n  font-size: 8px;\n  margin-right: 4px;\n  color: #5cb85c;\n}\n/*-----------------------sidebar-search------------------------*/\n.sidebar-wrapper .sidebar-search > div {\n  padding: 10px 20px;\n}\n/*----------------------sidebar-menu-------------------------*/\n.sidebar-wrapper .sidebar-menu {\n  padding-bottom: 10px;\n}\n.sidebar-wrapper .sidebar-menu .header-menu span {\n  font-weight: bold;\n  font-size: 14px;\n  padding: 15px 20px 5px 20px;\n  display: inline-block;\n}\n.sidebar-wrapper .sidebar-menu ul li a {\n  display: inline-block;\n  width: 100%;\n  text-decoration: none;\n  position: relative;\n  padding: 8px 30px 8px 20px;\n}\n.sidebar-wrapper .sidebar-menu ul li a i {\n  margin-right: 10px;\n  font-size: 12px;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 4px;\n}\n.sidebar-wrapper .sidebar-menu ul li a:hover > i::before {\n  display: inline-block;\n  -webkit-animation: swing ease-in-out 0.5s 1 alternate;\n          animation: swing ease-in-out 0.5s 1 alternate;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 900;\n  content: \"\\f105\";\n  font-style: normal;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  background: 0 0;\n  position: absolute;\n  right: 15px;\n  top: 14px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {\n  padding: 5px 0;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {\n  padding-left: 25px;\n  font-size: 13px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {\n  content: \"\\f111\";\n  font-family: \"Font Awesome 5 Free\";\n  font-weight: 400;\n  font-style: normal;\n  display: inline-block;\n  text-align: center;\n  text-decoration: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  margin-right: 10px;\n  font-size: 8px;\n}\n.sidebar-wrapper .sidebar-menu ul li a span.label,\n.sidebar-wrapper .sidebar-menu ul li a span.badge {\n  float: right;\n  margin-top: 8px;\n  margin-left: 5px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {\n  float: right;\n  margin-top: 0px;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-submenu {\n  display: none;\n}\n.sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  right: 17px;\n}\n/*--------------------------side-footer------------------------------*/\n.sidebar-footer {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n  display: flex;\n}\n.sidebar-footer > a {\n  flex-grow: 1;\n  text-align: center;\n  height: 30px;\n  line-height: 30px;\n  position: relative;\n}\n.sidebar-footer > a .notification {\n  position: absolute;\n  top: 0;\n}\n.badge-sonar {\n  display: inline-block;\n  background: #980303;\n  border-radius: 50%;\n  height: 8px;\n  width: 8px;\n  position: absolute;\n  top: 0;\n}\n.badge-sonar:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  border: 2px solid #980303;\n  opacity: 0;\n  border-radius: 50%;\n  width: 100%;\n  height: 100%;\n  -webkit-animation: sonar 1.5s infinite;\n          animation: sonar 1.5s infinite;\n}\n/*--------------------------page-content-----------------------------*/\n.page-wrapper .page-content {\n  display: inline-block;\n  width: 100%;\n  padding-left: 0px;\n  padding-top: 20px;\n}\n.page-wrapper .page-content > div {\n  padding: 20px 40px;\n}\n.page-wrapper .page-content {\n  overflow-x: hidden;\n}\n/*------scroll bar---------------------*/\n::-webkit-scrollbar {\n  width: 5px;\n  height: 7px;\n}\n::-webkit-scrollbar-button {\n  width: 0px;\n  height: 0px;\n}\n::-webkit-scrollbar-thumb {\n  background: #525965;\n  border: 0px none #ffffff;\n  border-radius: 0px;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: #525965;\n}\n::-webkit-scrollbar-thumb:active {\n  background: #525965;\n}\n::-webkit-scrollbar-track {\n  background: transparent;\n  border: 0px none #ffffff;\n  border-radius: 50px;\n}\n::-webkit-scrollbar-track:hover {\n  background: transparent;\n}\n::-webkit-scrollbar-track:active {\n  background: transparent;\n}\n::-webkit-scrollbar-corner {\n  background: transparent;\n}\n/*-----------------------------chiller-theme-------------------------------------------------*/\n.chiller-theme .sidebar-wrapper {\n    background:#fff;\n}\n.chiller-theme .sidebar-wrapper .sidebar-header,\n.chiller-theme .sidebar-wrapper .sidebar-search,\n.chiller-theme .sidebar-wrapper .sidebar-menu {\n    border-top: 1px solid #3a3f48;\n}\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\n    border-color: transparent;\n    box-shadow: none;\n}\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,\n.chiller-theme .sidebar-wrapper .sidebar-brand>a,\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a,\n.chiller-theme .sidebar-footer>a {\n    color: #818896;\n}\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,\n.chiller-theme .sidebar-wrapper .sidebar-header .user-info,\n.chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,\n.chiller-theme .sidebar-footer>a:hover i {\n    color: #b8bfce;\n}\n.page-wrapper.chiller-theme.toggled #close-sidebar {\n    color: #16c7ff;\n}\n.page-wrapper.chiller-theme.toggled #close-sidebar:hover {\n    color: #ffffff;\n}\n.chiller-theme .sidebar-wrapper ul li:hover a i,\n.chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {\n    color: #16c7ff;\n    text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);\n}\n.chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,\n.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,\n.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,\n.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {\n    background: #3a3f48;\n}\n.chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {\n    color: #6c7b88;\n}\n.chiller-theme .sidebar-footer {\n    background: #3a3f48;\n    box-shadow: 0px -1px 5px #282c33;\n    border-top: 1px solid #464a52;\n}\n.chiller-theme .sidebar-footer>a:first-child {\n    border-left: none;\n}\n.chiller-theme .sidebar-footer>a:last-child {\n    border-right: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUU5QixnS0FBZ0s7RUFJaEssNkdBQTZHO0VBQzdHLG9IQUFvSDtBQUN0SDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7QUFDRjtBQTVCQTtFQUNFO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsZ0NBQXdCO1lBQXhCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtBQUNGO0FBRUE7RUFDRTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGO0FBVEE7RUFDRTtJQUNFLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTs7Ozs7Ozs7Ozs7RUFlRSx5QkFBeUI7QUFDM0I7QUFFQSwrQ0FBK0M7QUFFL0M7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBLG1EQUFtRDtBQUVuRDtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBLHNEQUFzRDtBQUN0RDtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsU0FBUztFQUNULDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQSxrREFBa0Q7QUFFbEQ7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQSxrREFBa0Q7QUFFbEQ7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLDBEQUEwRDtBQUUxRDtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtBQUNBLDJEQUEyRDtBQUUzRDtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztBQUNoQjtBQUVBO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBLGdFQUFnRTtBQUVoRTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLDhEQUE4RDtBQUU5RDtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DO0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCO0FBRUE7O0VBRUUsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjtBQUVBLHNFQUFzRTtBQUV0RTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07QUFDUjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtBQUNSO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDO0FBRUEsc0VBQXNFO0FBRXRFO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBLHdDQUF3QztBQUV4QztFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFHQSw4RkFBOEY7QUFFOUY7SUFDSSxlQUFlO0FBQ25CO0FBRUE7OztJQUdJLDZCQUE2QjtBQUNqQztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFFQTs7Ozs7OztJQU9JLGNBQWM7QUFDbEI7QUFFQTs7Ozs7SUFLSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7Ozs7SUFJSSxjQUFjO0lBQ2QsZ0RBQWdEO0FBQ3BEO0FBRUE7Ozs7SUFJSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1pbml0aWFse1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI4LDE0OSwxNjUsMSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjgsMTQ5LDE2NSwxKSksIGNvbG9yLXN0b3AoNDklLCByZ2JhKDczLDE1NSwyMzQsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMzksMjA2LDE5NSwxKSkpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDI4LDE0OSwxNjUsMSkgMCUsIHJnYmEoNzMsMTU1LDIzNCwxKSA0OSUsIHJnYmEoMzksMjA2LDE5NSwxKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjgsMTQ5LDE2NSwxKSAwJSwgcmdiYSg3MywxNTUsMjM0LDEpIDQ5JSwgcmdiYSgzOSwyMDYsMTk1LDEpIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzFjOTVhNScsIGVuZENvbG9yc3RyPScjMjdjZWMzJywgR3JhZGllbnRUeXBlPTEgKTtcbn1cbi5pY29uLW1lbnVze1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ubG9nb3ViaXtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctdG9wOjE4cHg7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOjEwMCU7XG4gIG1heC13aWR0aDo4MHB4O1xufVxuLmJ0bi1kYXJre1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uYnRuLXNte1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbkBrZXlmcmFtZXMgc3dpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XG4gIH1cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xuICB9XG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzb25hciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbmJvZHkge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbi5wYWdlLXdyYXBwZXIgLnNpZGViYXItd3JhcHBlcixcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQgPiBhLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1kcm9wZG93biA+IGE6YWZ0ZXIsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmJlZm9yZSxcbi5zaWRlYmFyLXdyYXBwZXIgdWwgbGkgYSBpLFxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50LFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCxcbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhLFxuI3Nob3ctc2lkZWJhcixcbiNjbG9zZS1zaWRlYmFyIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS1wYWdlLXdyYXBwZXItLS0tLS0tLS0tLS0tLS0tKi9cblxuLnBhZ2Utd3JhcHBlciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5wYWdlLXdyYXBwZXIgLnRoZW1lIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ucGFnZS13cmFwcGVyIC50aGVtZS5jaGlsbGVyLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tdG9nZ2VsZWQgc2lkZWJhci0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucGFnZS13cmFwcGVyLnRvZ2dsZWQgLnNpZGViYXItd3JhcHBlciB7XG4gIGxlZnQ6IDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnBhZ2Utd3JhcHBlci50b2dnbGVkIC5wYWdlLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XG4gIH1cbn1cbi8qLS0tLS0tLS0tLS0tLS0tLXNob3cgc2lkZWJhciBidXR0b24tLS0tLS0tLS0tLS0tLS0tKi9cbiNzaG93LXNpZGViYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDBweDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG4ucGFnZS13cmFwcGVyLnRvZ2dsZWQgI3Nob3ctc2lkZWJhciB7XG4gIGxlZnQ6IC00MHB4O1xufVxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci13cmFwcGVyLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLXdyYXBwZXIge1xuICB3aWR0aDogMjYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0zMDBweDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tc2lkZWJhci1jb250ZW50LS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLWNvbnRlbnQge1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZWJhci1jb250ZW50LmRlc2t0b3Age1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlYmFyLWJyYW5kLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItYnJhbmQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCA+IGEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmNsb3NlLXNpZGViYXIgaXtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzE2YzdmZjtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZCAjY2xvc2Utc2lkZWJhciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItaGVhZGVyLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5sb2dve1xuICB3aWR0aDoxMDAlO1xuICBtYXgtd2lkdGg6NzBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItcGljIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItaGVhZGVyIC51c2VyLWluZm8ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkZXIgLnVzZXItaW5mbyAudXNlci1yb2xlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyBpIHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBjb2xvcjogIzVjYjg1Yztcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItc2VhcmNoLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggPiBkaXYge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXNpZGViYXItbWVudS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5oZWFkZXItbWVudSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTVweCAyMHB4IDVweCAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDhweCAzMHB4IDhweCAyMHB4O1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIgPiBpOjpiZWZvcmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogc3dpbmcgZWFzZS1pbi1vdXQgMC41cyAxIGFsdGVybmF0ZTtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duID4gYTphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29udGVudDogXCJcXGYxMDVcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTRweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgdWwge1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjExMVwiO1xuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSB1bCBsaSBhIHNwYW4ubGFiZWwsXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBzcGFuLmJhZGdlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuc2lkZWJhci1kcm9wZG93biAuc2lkZWJhci1zdWJtZW51IGxpIGEgLmJhZGdlLFxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIC5zaWRlYmFyLXN1Ym1lbnUgbGkgYSAubGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLXN1Ym1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlID4gYTphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgcmlnaHQ6IDE3cHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaWRlLWZvb3Rlci0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zaWRlYmFyLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNpZGViYXItZm9vdGVyID4gYSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaWRlYmFyLWZvb3RlciA+IGEgLm5vdGlmaWNhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYmFkZ2Utc29uYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICM5ODAzMDM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuXG4uYmFkZ2Utc29uYXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzk4MDMwMztcbiAgb3BhY2l0eTogMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBhbmltYXRpb246IHNvbmFyIDEuNXMgaW5maW5pdGU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1wYWdlLWNvbnRlbnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5wYWdlLXdyYXBwZXIgLnBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnBhZ2Utd3JhcHBlciAucGFnZS1jb250ZW50ID4gZGl2IHtcbiAgcGFkZGluZzogMjBweCA0MHB4O1xufVxuXG4ucGFnZS13cmFwcGVyIC5wYWdlLWNvbnRlbnQge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi8qLS0tLS0tc2Nyb2xsIGJhci0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDdweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzUyNTk2NTtcbiAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzUyNTk2NTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzUyNTk2NTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHggbm9uZSAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjazphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItY29ybmVyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNoaWxsZXItdGhlbWUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDojZmZmO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlcixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzNhM2Y0ODtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuc2VhcmNoLW1lbnUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLXNlYXJjaCAuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXJvbGUsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvIC51c2VyLXN0YXR1cyxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWJyYW5kPmEsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3Rlcj5hIHtcbiAgICBjb2xvcjogIzgxODg5Njtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IHVsIGxpOmhvdmVyPmEsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlPmEsXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLWhlYWRlciAudXNlci1pbmZvLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1icmFuZD5hOmhvdmVyLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyPmE6aG92ZXIgaSB7XG4gICAgY29sb3I6ICNiOGJmY2U7XG59XG5cbi5wYWdlLXdyYXBwZXIuY2hpbGxlci10aGVtZS50b2dnbGVkICNjbG9zZS1zaWRlYmFyIHtcbiAgICBjb2xvcjogIzE2YzdmZjtcbn1cblxuLnBhZ2Utd3JhcHBlci5jaGlsbGVyLXRoZW1lLnRvZ2dsZWQgI2Nsb3NlLXNpZGViYXI6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIHVsIGxpOmhvdmVyIGEgaSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItZHJvcGRvd24gLnNpZGViYXItc3VibWVudSBsaSBhOmhvdmVyOmJlZm9yZSxcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51OmZvY3VzK3NwYW4sXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgLnNpZGViYXItZHJvcGRvd24uYWN0aXZlIGEgaSB7XG4gICAgY29sb3I6ICMxNmM3ZmY7XG4gICAgdGV4dC1zaGFkb3c6MHB4IDBweCAxMHB4IHJnYmEoMjIsIDE5OSwgMjU1LCAwLjUpO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci13cmFwcGVyIC5zaWRlYmFyLW1lbnUgdWwgbGkgYSBpLFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1tZW51IC5zaWRlYmFyLWRyb3Bkb3duIGRpdixcbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItc2VhcmNoIGlucHV0LnNlYXJjaC1tZW51LFxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItd3JhcHBlciAuc2lkZWJhci1zZWFyY2ggLmlucHV0LWdyb3VwLXRleHQge1xuICAgIGJhY2tncm91bmQ6ICMzYTNmNDg7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLXdyYXBwZXIgLnNpZGViYXItbWVudSAuaGVhZGVyLW1lbnUgc3BhbiB7XG4gICAgY29sb3I6ICM2YzdiODg7XG59XG5cbi5jaGlsbGVyLXRoZW1lIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgYmFja2dyb3VuZDogIzNhM2Y0ODtcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA1cHggIzI4MmMzMztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzQ2NGE1Mjtcbn1cblxuLmNoaWxsZXItdGhlbWUgLnNpZGViYXItZm9vdGVyPmE6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uY2hpbGxlci10aGVtZSAuc2lkZWJhci1mb290ZXI+YTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"navbar-initial\">\n <a href=\"index.html\"><img class=\"logoubi\" src=\"../../assets/ubi3.png\" alt=\"\" srcset=\"\" /></a>\n  <div class=\"header-pri\">\n    <div class=\"page-wrapper chiller-theme toggled\">\n      <a id=\"show-sidebar\" class=\"btn btn-sm btn-dark\">\n        <i class=\"fas fa-bars\"></i>\n      </a>\n      <nav id=\"sidebar\" class=\"sidebar-wrapper\">\n        <div class=\"sidebar-content\">\n          <div class=\"sidebar-brand\">\n            <div id=\"close-sidebar\">\n              <i class=\"fas fa-arrow-left\"></i>\n            </div>\n          </div>\n          <div class=\"sidebar-menu\">\n            <ul>\n              <li class=\"sidebar-dropdown\">\n                <a>\n                  <img class=\"icon-menus\" src=\"../../assets/settings.svg\" alt=\"\" srcset=\"\" />\n                  <span>Configuración</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a>\n                  <img class=\"icon-menus\" src=\"../../assets/perfil.png\" alt=\"\" srcset=\"\" />\n                  <span>Perfil</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a>\n                  <img class=\"icon-menus\" src=\"../../assets/history.svg\" alt=\"\" srcset=\"\" />\n                  <span>Historial</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a routerLink=\"opportunities\">\n                  <img class=\"icon-menus\" src=\"../../assets/location.png\" alt=\"\" srcset=\"\" />\n                  <span>Viajes Favoritos</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a href=\"#\">\n                  <img class=\"icon-menus\" src=\"../../assets/route.svg\" alt=\"\" srcset=\"\" />\n                  <span>Rutas</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a href=\"#\">\n                  <img class=\"icon-menus\" src=\"../../assets/money.svg\" alt=\"\" srcset=\"\" />\n                  <span>Monedero</span>\n                </a>\n              </li>\n              <li class=\"sidebar-dropdown\">\n                <a href=\"#\">\n                  <img class=\"icon-menus\" src=\"../../assets/information.svg\" alt=\"\" srcset=\"\" />\n                  <span>Informartivo</span>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </nav>\n      <div class=\"logo\">\n        <img src=\"\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n</section>\n"

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
            $('.page-wrapper').removeClass('toggled');
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

module.exports = "<div #map [style.width]=\"width\" [style.height]=\"height\" style=\"float: left\"></div>\n<!-- <ol style=\"float: left; background-color: #FFF; width: 35%; min-height: 100%; margin-left: 20px; margin-top: 0\">\n    <li *ngFor=\"let direction of directions\">\n        <p [innerHTML]=\"direction.instruction\"></p> \n    </li>\n</ol> -->\n"

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
        this.platform = new H.service.Platform({
            "useCIT": true,
            "app_id": this.appId,
            "app_code": this.appCode,
            "useHTTPS": true
        });
        this.directions = [];
        this.router = this.platform.getRoutingService();
    };
    RutaComponent.prototype.ngAfterViewInit = function () {
        var defaultLayers = this.platform.createDefaultLayers();
        this.map = new H.Map(this.mapElement.nativeElement, defaultLayers.normal.map, {
            zoom: 4,
            center: { lat: "37.0902", lng: "-95.7129" }
        });
        this.route(this.start, this.finish);
    };
    RutaComponent.prototype.ngOnChanges = function (changes) {
        if ((changes["start"] && !changes["start"].isFirstChange()) || (changes["finish"] && !changes["finish"].isFirstChange())) {
            this.route(this.start, this.finish);
        }
    };
    RutaComponent.prototype.route = function (start, finish) {
        var _this = this;
        var params = {
            "mode": "fastest;car",
            "waypoint0": "geo!" + this.start,
            "waypoint1": "geo!" + this.finish,
            "language": 'es-es',
            "representation": "display"
        };
        this.map.removeObjects(this.map.getObjects());
        this.router.calculateRoute(params, function (data) {
            if (data.response) {
                _this.directions = data.response.route[0].leg[0].maneuver;
                data = data.response.route[0];
                var lineString_1 = new H.geo.LineString();
                data.shape.forEach(function (point) {
                    var parts = point.split(",");
                    lineString_1.pushLatLngAlt(parts[0], parts[1]);
                });
                var routeLine = new H.map.Polyline(lineString_1, {
                    style: { strokeColor: "blue", lineWidth: 5 }
                });
                var startMarker = new H.map.Marker({
                    lat: _this.start.split(",")[0],
                    lng: _this.start.split(",")[1]
                });
                var finishMarker = new H.map.Marker({
                    lat: _this.finish.split(",")[0],
                    lng: _this.finish.split(",")[1]
                });
                _this.map.addObjects([routeLine, startMarker, finishMarker]);
                _this.map.setViewBounds(routeLine.getBounds());
            }
        }, function (error) {
            console.error(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("map"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RutaComponent.prototype, "mapElement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RutaComponent.prototype, "appId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RutaComponent.prototype, "appCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RutaComponent.prototype, "start", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RutaComponent.prototype, "finish", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RutaComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RutaComponent.prototype, "height", void 0);
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
    }
    HereService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
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