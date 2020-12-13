(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+9W8":
/*!******************************************!*\
  !*** ./src/services/signal-r.service.ts ***!
  \******************************************/
/*! exports provided: signalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalRService", function() { return signalRService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "Gpoy");



class signalRService {
    constructor() {
        this.startConnection = () => {
            this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
                .withUrl('http://localhost:58269/chathub') //poort van de realtimeservice
                .build();
            this.hubConnection
                .start()
                .then(() => console.log('Connection started'))
                .catch((err) => console.log('Error while starting connection: ' + err));
        };
        //send message to realtime
        this.sendBroadcast = () => {
            console.log('send broadcast');
            console.log(this.message);
            this.message = 'flight status of flight to Brussels changed to delayed';
            this.hubConnection
                .invoke('ClientMessage', { message: this.message })
                .catch((err) => console.error(err));
        };
        this.showAdminMessage = () => {
            this.hubConnection.on('admin', (data) => {
                console.log({ adminMessage: data.message });
            });
        };
        //listen to message from realtimeservice
        this.showBroadcast = () => {
            this.hubConnection.on('ServerMessage', (data) => {
                // this.data = data;
                console.log({ broadcastmessage: data.message });
            });
        };
    }
}
signalRService.ɵfac = function signalRService_Factory(t) { return new (t || signalRService)(); };
signalRService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: signalRService, factory: signalRService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](signalRService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\3MCT\Fullstack\Aircraft-FullStackProject\app-aircraft-frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_signal_r_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/signal-r.service */ "+9W8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(signalRService) {
        this.signalRService = signalRService;
        this.title = 'app-aircraft-frontend';
        this.clicked = (event) => {
            //send to realtime service
            this.signalRService.sendBroadcast();
            //listen to realtime service
            this.signalRService.showBroadcast();
        };
    }
    ngOnInit() {
        this.signalRService.startConnection();
        this.signalRService.showAdminMessage();
        //this.startHttpRequest();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_signal_r_service__WEBPACK_IMPORTED_MODULE_1__["signalRService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "bg-maintheme-lightblue", "font-sans-Roboto", "h-full"], [1, "bg-pink-700", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener($event) { return ctx.clicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-form__input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  height: var(--global-whitespace-xxxl);\n  width: 100%;\n  padding: var(--global-whitespace-sm);\n}\n\n.sm-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.sm-text__upper[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #9da5ab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmMtZm9ybSB7XG4gICZfX2lucHV0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXh4eGwpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXNtKTtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLnNtLXRleHQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gICZfX3VwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjOWRhNWFiO1xuICB9XG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: src_services_signal_r_service__WEBPACK_IMPORTED_MODULE_1__["signalRService"] }]; }, null); })();


/***/ }),

/***/ "YC0P":
/*!****************************************************!*\
  !*** ./src/presentations/flight/flight.service.ts ***!
  \****************************************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





var baseURL = 'https://localhost:44347/api/';
class FlightService {
    constructor(http) {
        this.http = http;
    }
    //DISCOVER COMPONENT
    getFlightsToday() {
        return this.http
            .get(`${baseURL}flightstoday`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getFlightsToday', [])));
    }
    getDestinations() {
        return this.http
            .get(`${baseURL}flights/destinations`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getDestinations', [])));
    }
    getDepartures() {
        return this.http
            .get(`${baseURL}flights/departures`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getDepartures', [])));
    }
    //VAN DISCOVER NAAR AVAILABLE FLIGHTS COMPONENT
    getFlightsByDatesDepartureAndDestination(query) {
        return this.http
            .get(`${baseURL}flightsearch?${query}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getFlightsByDatesDeparturesAndDestination', [])));
    }
    //AVAILABLE FLIGHTS COMPONENT
    getFlights() {
        return this.http
            .get(`${baseURL}flights`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getFlights', [])));
    }
    //ERROR HANDLING
    handleError(operation = 'operation', result) {
        return (error) => {
            //send error to remote logging infrastructure
            console.log(`${operation} failed: ${error.message}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    }
}
FlightService.ɵfac = function FlightService_Factory(t) { return new (t || FlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
FlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FlightService, factory: FlightService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _presentations_identity_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../presentations/identity/register.component */ "ujPg");
/* harmony import */ var _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../presentations/flight/discover/discover.component */ "jJNn");
/* harmony import */ var _presentations_flight_availableflights_availableflights_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../presentations/flight/availableflights/availableflights.component */ "oq2u");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([{ path: 'discover', component: _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverComponent"] }]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _presentations_identity_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
        _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverComponent"],
        _presentations_flight_availableflights_availableflights_component__WEBPACK_IMPORTED_MODULE_8__["AvailableflightsComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _presentations_identity_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                    _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverComponent"],
                    _presentations_flight_availableflights_availableflights_component__WEBPACK_IMPORTED_MODULE_8__["AvailableflightsComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production,
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([{ path: 'discover', component: _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_7__["DiscoverComponent"] }]),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "jJNn":
/*!*****************************************************************!*\
  !*** ./src/presentations/flight/discover/discover.component.ts ***!
  \*****************************************************************/
/*! exports provided: DiscoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscoverComponent", function() { return DiscoverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flight.service */ "YC0P");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DiscoverComponent_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const departure_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", departure_r3.locationDTO.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", departure_r3.locationDTO.city, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](departure_r3.locationDTO.country);
} }
function DiscoverComponent_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const destination_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", destination_r4.locationDTO.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", destination_r4.locationDTO.city, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](destination_r4.locationDTO.country);
} }
function DiscoverComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "defs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "clipPath", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "rect", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "circle", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "circle", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "circle", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "circle", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "g", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "line", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "g", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "line", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "g", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "line", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "g", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "line", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "line", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "g", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "line", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "g", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "line", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "g", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "line", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "line", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "g", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "line", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "g", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "line", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "g", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "line", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "line", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "g", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "line", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "g", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "line", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "g", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "line", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "g", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "line", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "line", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "g", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "line", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "g", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "line", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "line", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "line", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "g", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "line", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "g", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "line", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "g", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "line", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "g", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "line", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "g", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "line", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "g", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "line", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "line", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "g", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "line", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "g", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "line", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "g", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "line", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "g", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "line", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "line", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "g", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "line", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "g", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "line", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "g", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "line", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "g", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "line", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "g", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "line", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "g", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "line", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "g", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "line", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "g", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "line", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "g", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "line", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "g", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "g", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r5.departureDTO.locationDTO.airport, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r5.timeOfDeparture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r5.destinationDTO.locationDTO.airport, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r5.timeOfArrival);
} }
const _c0 = function (a0) { return { data: a0 }; };
class DiscoverComponent {
    constructor(flightService, formBuilder, router) {
        this.flightService = flightService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.searchForm = this.formBuilder.group({
            departure: '',
            destination: '',
            dateOfDeparture: '',
            dateOfArrival: ''
        });
    }
    ngOnInit() {
        this.flightService.getFlightsToday().subscribe(data => {
            this.flightstoday = data;
        }, error => { console.error({ error }); });
        this.flightService.getDepartures().subscribe(data => {
            console.log(data);
            this.departures = data;
        }, error => { console.error({ error }); });
        this.flightService.getDestinations().subscribe(data => {
            console.log(data);
            this.destinations = data;
        }, error => { console.error({ error }); });
    }
}
DiscoverComponent.ɵfac = function DiscoverComponent_Factory(t) { return new (t || DiscoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DiscoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiscoverComponent, selectors: [["app-discover"]], decls: 92, vars: 7, consts: [[1, "min-h-full"], [1, "grid", "grid-template", "justify-items-center", "py-8"], ["width", "166", "height", "115.88", "viewBox", "0 0 1176.60617 873.97852", 1, "col-start-2", "col-end-3"], ["d", "M1095.6635,225.46254C962.121,39.6324,680.01881-35.74836,402.58037,45.43851,255.907,88.35958,114.48682,174.35831,44.40241,340.87958-80.881,638.55435,182.16734,733.62442,354.17234,763.9244c83.17231,14.65143,161.50651,39.26261,233.089,72.77077C716.04472,896.97936,944.00013,950.39754,1115.8936,699.2859,1240.4822,517.27986,1184.616,349.24377,1095.6635,225.46254Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#f6edea"], ["d", "M321.42889,262.2282a34.38541,34.38541,0,0,0-2.24759-8.60455,3.89486,3.89486,0,0,0-1.9801-2.43877,4.08011,4.08011,0,0,0-1.96474-.022l-10.08728,1.5435a3.86686,3.86686,0,0,0-2.30153.89427c-1.31382,1.38169-.0201,3.60656-.06032,5.51275-.04523,2.14349-1.94974,3.88337-4.015,4.459a15.17731,15.17731,0,0,1-6.37968-.0791l-14.105-2.19194a23.25611,23.25611,0,0,0,10.67057-7.12071c1.85618-2.1989,2.84369-6.30419.1611-7.34549a6.58539,6.58539,0,0,0-2.4499-.19671c-6.39055.04969-11.41938-5.286-17.402-7.53322a19.24089,19.24089,0,0,0-21.65464,6.45538l7.5139.36227a3.33516,3.33516,0,0,1,2.00147.53379c1.6467,1.35295-.40057,3.95167-.16859,6.07024.3014,2.75248,3.95606,3.34017,6.711,3.6185s6.2499,2.51667,4.92472,4.94791c-13.84664,4.7694-27.9371-9.32314-42.479-7.58839-3.68047.43906-7.15584,1.88493-10.74918,2.79409-21.95074,5.55382-44.64391-9.26441-67.06781-6.12617a85.16281,85.16281,0,0,0-14.64041,3.86122c-3.05193,1.00208-6.23529,2.085-8.4528,4.409s-3.06148,6.29847-.96073,8.72854a49.12567,49.12567,0,0,1-17.21577-1.63646,9.645,9.645,0,0,1,4.95868,8.50029A102.14535,102.14535,0,0,0,85.821,282.01419a44.07342,44.07342,0,0,0,5.416,7.21479l-11.44534,7.353c3.86678.97425,5.866,6.24693,3.61733,9.54,4.00941-1.78367,6.49425-6.39789,10.78165-7.33339,2.80882-.61288,5.66686.53616,8.33145,1.61556s5.59324,2.12606,8.35166,1.31595,4.793-4.38683,3.04022-6.66564a142.71908,142.71908,0,0,1,36.25271-5.66392,4.54655,4.54655,0,0,1,2.7456.52105c1.59825,1.10883,1.17774,3.50381,1.09165,5.44712s1.42851,4.49732,3.16535,3.62139c-2.0434,1.77191-.29656,5.10765,1.66387,6.97094s4.32331,4.43434,3.12309,6.85811c-.31325.63259-.84455,1.13873-1.14595,1.77705-.88965,1.88416.52289,4.08076,2.189,5.332s3.70692,2.12572,4.86428,3.85837.63178,4.76548-1.43777,5.00743l-5.88236-7.46869a15.31355,15.31355,0,0,0-3.97364,7.53022c6.23775,5.09923,7.176,15.47823,1.9538,21.61341-2.66868,3.13523-6.46374,5.04033-9.776,7.48581s-6.37716,5.92783-6.36883,10.045c.01439,7.1131-.56681,13.72146,2.09864,20.31629a312.966,312.966,0,0,0,16.99045,35.44742c1.68084,3.00616,3.85316,6.30106,7.2582,6.81867q-6.45495-15.71421-11.62147-31.91738c2.24339.00878,4.83588.1869,6.151,2.0044,1.089,1.505.85507,3.55121,1.19345,5.37785a16.65908,16.65908,0,0,0,2.12446,4.99431L187.123,447.63613c1.70352,3.03448,3.65756,6.29169,6.91332,7.52057,2.08158.78568,4.48987.63767,6.4058,1.76882,1.50176.88663,2.51323,2.46048,4.04419,3.29566,4.32885,2.36148,10.34856-2.16748,14.394.652,1.15671.80618,1.89258,2.08691,2.9584,3.00991,3.7363,3.23562,9.8654,1.07107,14.17856,3.48476,2.77976,1.55559,4.22039,4.66667,5.70306,7.486,3.71393,7.0621,9.72327,13.98083,17.68257,14.54317,2.50017.17664,5.054-.2974,7.4979.25869s4.84966,2.68894,4.45736,5.16446c-.67255,4.244,1.42431,8.89112.86116,13.151-1.02579,7.7595-12.03211,11.16939-12.97751,18.93909-.207,1.70118.117,3.45712-.28806,5.12229-.49646,2.04085-2.02916,3.70248-2.57379,5.731-1.03211,3.84421,1.72207,7.67,4.74769,10.25626s6.63464,4.8164,8.28878,8.43676c1.74839,3.82665.88959,8.2885,1.4582,12.457,1.24134,9.10039,9.10157,15.84677,17.19082,20.19673,2.46463,1.32534,5.11094,2.60844,6.70615,4.90762,2.08209,3.00091,1.87467,6.957,2.56992,10.54272,1.70271,8.78155,9.09527,16.01718,9.30517,24.95982.14919,6.35613-3.384,12.12238-5.49458,18.11972a42.25685,42.25685,0,0,0,3.45065,35.0456c1.57886,2.666,3.46722,5.17956,4.58411,8.06975,1.9931,5.15754,1.34639,11.02046,3.18408,16.2354,2.42959,6.8946,9.10562,12.58934,8.46666,19.87152,3.0309,6.29406,9.72369,9.38665,16.45363,11.26l12.06158,3.3575c2.30949.64288,4.72281,1.29086,7.07448.82537s4.596-2.41823,4.53529-4.81476c-5.91483-1.33393-12.01936-2.75242-16.89516-6.35673s-8.21581-10.02271-6.36585-15.797c.85781-2.67751,2.68278-5.76942.94774-7.98179-.99343-1.26672-2.81-1.59767-3.93051-2.75344-1.74775-1.80265-1.14729-4.831.10918-7.0048s3.07257-4.11641,3.57937-6.57554a6.8609,6.8609,0,0,0-3.21584-7.13792,17.05434,17.05434,0,0,0,5.97-3.83059c1.57-1.79291,2.29521-4.557,1.06019-6.59515,3.66753.46513,7.99742.69293,10.40495-2.1126,1.92251-2.24033,1.79046-5.5897,1.03082-8.44244s-2.04361-5.62357-2.08361-8.57544a156.26659,156.26659,0,0,0,25.353-.85968,16.43929,16.43929,0,0,0-7.70814-9.65354c3.81059-.64475,7.28211-5.20677,8.486-8.87922s.89686-7.67268.15275-11.46513a6.1519,6.1519,0,0,1-.114-3.0037c.42911-1.36751,1.77248-2.202,3.01534-2.91574l18.91439-10.86271a11.01742,11.01742,0,0,0,3.02461-2.2329c1.98167-2.3277,1.68812-5.84149.67344-8.72517s-2.64-5.59533-3.03084-8.62723c-1.169-9.06757,8.53762-15.57351,11.81344-24.10911,1.28556-3.34968,1.54756-6.99072,1.79634-10.57.2672-3.84428.28706-8.30958-2.66466-10.78692-2.82948-2.37472-7.25051-1.845-10.21125-4.05388-2.71448-2.02517-3.651-5.95833-6.61642-7.59409-2.69305-1.4855-6.06961-.54073-9.06479-1.23939-5.27364-1.23013-8.59236-7.30815-13.97824-7.87093-3.03881-.31753-6.47807,1.16807-8.96869-.60169-2.19461-1.55942-2.28256-4.69377-2.70031-7.35339a20.53588,20.53588,0,0,0-16.57469-16.62806c-3.13319-.50246-6.54363-.31164-9.20909-2.03347-2.699-1.74352-3.93652-5.00776-6.0566-7.42227-3.41691-3.89143-8.79842-5.274-13.83964-6.45913l-20.50551-4.82056c-3.64012-.85575-8.33221-1.30951-10.2856,1.87908a14.73808,14.73808,0,0,0-1.2167,3.82666,11.85046,11.85046,0,0,1-11.14436,8.38821,13.17908,13.17908,0,0,0-7.77154-6.01327c-2.07929-.57947-4.30492-.64392-6.288-1.49645a8.83267,8.83267,0,0,1-3.83257-12.25263,10.99469,10.99469,0,0,0-1.87879-13.22509c-3.48719-3.13068-8.53151-3.88711-13.20736-3.57386-1.22464-2.67214.823-5.687,3.02956-7.62888s4.886-3.851,5.36649-6.75084c.75588-4.56146-5.06429-8.026-9.48338-6.66591s-7.23961,5.65241-9.10407,9.88349c-1.06976,2.42763-1.97922,4.984-3.66664,7.031s-4.40481,3.51266-6.97507,2.85573c-3.63876-.93-5.0441-5.25313-5.84943-8.9215-1.0805-4.92177-2.16729-9.91182-1.94089-14.94571s1.92341-10.20254,5.63535-13.6103c6.04878-5.55311,15.328-5.00874,23.49132-4.12292-1.92865-2.173-1.452-5.83518.61156-7.88051a8.95973,8.95973,0,0,1,8.12084-1.99506,11.19111,11.19111,0,0,1,6.29121,3.76152c2.31979,2.82828,2.97946,6.647,4.73289,9.85732s5.69616,5.94849,8.92328,4.22617c2.78738-1.48763,3.22979-5.35275,2.53606-8.43517s-2.16714-6.07975-1.91585-9.22926c.4795-6.00963,6.70912-9.627,12.20639-12.102S291.737,382.61548,292.60792,376.65a10.72992,10.72992,0,0,1,.65234-3.42029,6.70927,6.70927,0,0,1,2.46136-2.31466c16.04394-10.60287,32.35471-21.33517,50.69218-27.12878.954-.30143,1.066.03357,2.03827-.20258,1.36074-.78645.45911-2.96205-.84552-3.83847s-3.04843-1.54853-3.37942-3.08495c-.24331-1.12941.42213-2.23839.595-3.38071.42476-2.807-2.93323-5.39866-5.541-4.27645-1.473-1.95077,1.44164-4.21747,3.79839-4.86633a103.15015,103.15015,0,0,1,21.67038-3.54,3.90329,3.90329,0,0,1,2.46588.41943c1.23093.85266,1.07366,2.80835.20129,4.0254s-2.22935,1.98119-3.31646,3.011a9.05261,9.05261,0,0,0-2.34812,9.105c3.826,1.94617,7.98552,3.94962,12.223,3.264s7.99857-5.44675,6.00679-9.24924c-1.8548-3.541-7.42626-4.33966-8.38436-8.22052-1.12177-4.5438,5.31041-8.585,3.86151-13.03528-.63466-1.94937-2.57739-3.09662-4.06811-4.504a12.22124,12.22124,0,0,1-2.67445-13.55158,15.41851,15.41851,0,0,1-13.52264-4.2317c-3.23448-3.26425-5.8149-8.41353-10.40792-8.26747-4.21485.134-7.84523,5.0513-11.78634,3.55111-.96958-.36907-1.99186-1.12025-2.93131-.68012a2.42225,2.42225,0,0,0-1.09342,1.815c-1.00154,4.78839.72138,10.24417-1.88839,14.38191-2.83993,4.50267-9.4088,5.12692-12.85167,9.18721-1.86891,2.20407-2.593,5.17405-4.31085,7.49776s-5.36393,3.80111-7.42549,1.77609a10.23468,10.23468,0,0,0-2.78041-12.44508,27.30929,27.30929,0,0,0-6.14119-2.98712,36.42167,36.42167,0,0,1-6.86076-3.82371,6.75781,6.75781,0,0,1-2.51864-2.69494,6.14136,6.14136,0,0,1,.17224-4.26168,17.42557,17.42557,0,0,1,13.86714-11.49368c2.74488-.37343,5.93955-.24185,7.75607-2.33327.96116-1.10661,1.46548-2.77969,2.86062-3.22913a4.21943,4.21943,0,0,1,2.64107.32524l10.24533,3.60618a7.19076,7.19076,0,0,0,3.64975.60364,2.47448,2.47448,0,0,0,2.13965-2.60046c-.32735-1.70141-2.94535-2.51787-2.70713-4.234a2.82667,2.82667,0,0,1,.85747-1.44135,36.6289,36.6289,0,0,1,29.0513-11.47224c1.29313,2.1238-.752,4.63875-2.45369,6.45178s-3.06918,5.05247-1.01125,6.44805a5.64254,5.64254,0,0,0,2.72791.61435,23.81858,23.81858,0,0,1,7.2608,2.20231q5.31051,2.31106,10.41719,5.05725c-.30072-2.24471-.58773-4.60949.26309-6.70836s3.26893-3.74515,5.38105-2.92776c2.03552.78775,3.07945,3.483,5.24807,3.72993,2.89281.32939,4.03409-3.94424,2.82574-6.59315s-3.60044-4.86693-3.80011-7.77157c-.13471-1.95958.611-4.38989-.95429-5.57648a4.26049,4.26049,0,0,0-1.84682-.64758l-39.08387-7.19215c-2.32088-.42709-5.67415-.09975-5.77707,2.25786-.05746,1.316,1.11807,2.61792.59742,3.82788-.55569,1.2914-2.3812,1.17333-3.71082,1.63009-2.06306.70871-3.0983,3.15844-2.90016,5.33082a14.83392,14.83392,0,0,0,2.448,6.00751C327.82036,263.48679,323.97107,263.29136,321.42889,262.2282Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M290.24382,229.0508a12.65625,12.65625,0,0,0-13.90248,4.16352c-.64354.84733-1.184,2.0154-.64526,2.93291.77242,1.31538,2.74054.79583,4.19156.3253a10.54923,10.54923,0,0,1,6.62071-.15794c1.36251.4678,2.58147,1.29457,3.94993,1.74469a3.97776,3.97776,0,0,0,4.0557-.59267c.93918-.95786.99811-2.447.99977-3.7885a3.04683,3.04683,0,0,0-.7764-2.50416,3.98083,3.98083,0,0,0-1.79553-.53108,6.18453,6.18453,0,0,1-3.61949-2.11485", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M304.33664,225.127a3.21956,3.21956,0,0,0-3.11178,4.53438,13.04966,13.04966,0,0,0,5.203.33925,4.44715,4.44715,0,0,0,3.63666-3.33425,8.37214,8.37214,0,0,1-5.92789-1.13214", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M351.61977,218.5739a59.85328,59.85328,0,0,0-13.342,4.5323,10.02439,10.02439,0,0,1,6.40246,10.06844,5.24308,5.24308,0,0,0,.06075,2.48936c.49,1.18793,1.90992,1.63367,3.15823,1.93858a20.82257,20.82257,0,0,0,6.927.88415,7.05639,7.05639,0,0,0,5.73376-3.50382,24.97233,24.97233,0,0,1,1.19237-2.81861c2.99219-4.55705,11.8812.9531,15.09379-3.45134,1.13168-1.55153,1.02817-3.887,2.50344-5.11644a5.62408,5.62408,0,0,1,2.57353-.98213,180.73105,180.73105,0,0,1,19.54841-2.78411c3.10923-.27057,7.16188-1.387,7.18775-4.50784a54.14874,54.14874,0,0,0-34.54122,4.64674c-3.85042,1.92855-8.943,5.98531-12.65192,3.42852-1.3887-.95731-1.31994-3.5351-3.23126-4.61157C356.28076,217.68557,353.69409,218.13319,351.61977,218.5739Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M389.91886,225.73594l5.49742,1.05632a7.12377,7.12377,0,0,0-7.41336,7.7201c5.14811,1.7198,10.76072.04624,16.18368.27485s11.73261,4.10232,10.80688,9.45057c-.27991,1.61713-1.2141,3.23318-.72831,4.8008.34049,1.09875,1.3095,1.87838,1.85645,2.89032,1.13975,2.10869.22882,4.77587-1.21034,6.69274s-3.37358,3.44632-4.63683,5.48342c-3.14187,5.06657-1.35681,11.61664.51479,17.27691a15.23135,15.23135,0,0,0,2.92877,5.84883c2.77285,2.94822,7.29158,3.20463,11.33846,3.26369,2.94546.043,6.31961-.10253,8.18228-2.38464,2.4318-2.97941.73135-7.62792,2.3324-11.12466,1.45407-3.17575,5.15873-4.53818,8.51521-5.50446,6.14911-1.77024,12.41566-3.27523,18.229-5.94915,7.2187-3.32032,13.96506-8.49468,21.89925-8.92208,2.22592-.1199,4.507.1428,6.65112-.46707s4.18088-2.46362,4.01856-4.68685c-.1387-1.89959-1.74585-3.29449-3.00165-4.72649s-2.242-3.634-1.08784-5.14908l20.79655-3.88442c-1.47415-4.01745-2.62255-9.30851.76489-11.92352,1.22221-.94351,2.85865-1.32062,3.89928-2.46127,1.77363-1.9441.88175-5.293-1.16563-6.94635s-4.81568-2.03716-7.43825-2.255c-9.11882-.75732-18.29-.25689-27.42647.24392q-26.78979,1.46846-53.57959,2.93691c-3.59534.19707-7.74639-.104-11.04389,1.12259-2.79157,1.03843-4.77642,2.94458-7.96917,3.61429C401.73856,223.26352,395.25234,222.42689,389.91886,225.73594Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M488.4034,269.1892a2.21206,2.21206,0,0,0-1.60017.36291,2.02023,2.02023,0,0,0-.5209,1.23389,8.1485,8.1485,0,0,0,1.1836,5.83234,5.71115,5.71115,0,0,0,5.228,2.50649c2.47536-.31565,4.29959-2.42746,6.5753-3.45795,3.50743-1.58681,18.40286-4.06052,8.099-9.62727-3.55093-1.91843-5.84544-.22491-8.64415,1.03851A19.66887,19.66887,0,0,1,488.4034,269.1892Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M578.65322,222.59334a5.88312,5.88312,0,0,0-2.86244,2.49162,2.514,2.514,0,0,0,.94284,3.335,3.75215,3.75215,0,0,0,1.40355.22264l4.89215.14615c2.07829.06209,4.67431.50471,5.23278,2.50751.41469,1.48714-.51346,3.39813.60642,4.46087a3.1547,3.1547,0,0,0,1.66421.64909,11.34113,11.34113,0,0,0,4.92928.15908c3.55953-.95476,1.68918-3.12726,2.81027-5.06171,1.71533-2.95984,1.41838-1.16811,4.44085-2.86446,2.23211-1.25277,5.11647-3.52532,3.25342-6.71829C602.72674,216.36834,583.434,220.208,578.65322,222.59334Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M675.2121,219.80181l-2.84073.37908c-6.40592.85484-12.84814,1.71755-19.01791,3.64123a31.65235,31.65235,0,0,0,8.32883,2.04373,25.58457,25.58457,0,0,1,4.66545.66319c2.7251.81124,5.471,2.90612,8.10377,1.833,1.63239-.66538,2.16508-2.36506,3.5173-3.26585.93372-.622,4.47516-1.62874,4.87106-2.25654C686.04046,217.76429,677.67232,219.47351,675.2121,219.80181Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M687.68607,232.71281A53.27668,53.27668,0,0,0,677.20288,240.39c-1.33471,1.25468-2.698,2.81516-2.57694,4.643.16086,2.42938,2.74871,3.83854,4.99074,4.78778l9.08123,3.84485c1.10167-1.55276.09336-3.69619-1.04522-5.2221s-2.4916-3.29135-1.98856-5.12757c.57406-2.09545,3.129-2.80951,5.27146-3.1705,3.49077-.58817,12.90738-.541,11.77592-6.16669C701.37832,227.35,691.19017,230.75418,687.68607,232.71281Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M685.85992,607.84c-.86453,2.50287-.94655,5.45128.54891,7.63652,1.67807,2.45208,5.0364,3.36612,7.9419,2.74429a14.307,14.307,0,0,0,7.37358-4.74082,25.39213,25.39213,0,0,0,4.24116-6.50393,50.76722,50.76722,0,0,0,3.14358-11.50232l2.8196-14.804c.63007-3.3086.60568-13.45221-5.47541-10.14731-1.66126.90284-5.50764,8.03123-7.2486,10.05264-3.13778,3.64323-3.55293,7.17824-5.20477,11.59189C691.93085,597.69533,687.77256,602.3028,685.85992,607.84Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M1007.042,683.59732a44.3323,44.3323,0,0,1-5.77846-2.75084,48.70737,48.70737,0,0,0-2.9293,15.96489l13.61588-7.70478c2.04826-1.159,4.36977-2.76948,4.32573-5.12252a1.62057,1.62057,0,0,0-.75277-1.47353,1.83562,1.83562,0,0,0-.95451-.112c-2.019.16826-3.85988,1.16172-5.76449,1.85256s-4.13169,1.056-5.87919.03077", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M1078.86859,688.17155a29.472,29.472,0,0,0-4.36645,1.567c-3.12461,1.58981-5.25021,4.60947-8.062,6.70342-2.69071,2.00378-5.92975,3.10394-9.1095,4.17362-.93537.82681-.50556,2.492.50978,3.21833a6.31536,6.31536,0,0,0,3.59613.80831c3.30343.07292,6.78371.10473,9.6772-1.49081a30.51837,30.51837,0,0,0,4.55609-3.61614c3.38307-2.82274,7.44579-4.68517,11.46743-6.485a13.162,13.162,0,0,0,3.99692-2.38972c2.52713-2.48973,2.70483-6.33069-.93912-7.17807C1087.25079,682.79774,1081.67207,687.2646,1078.86859,688.17155Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M1110.60476,667.44113a11.35853,11.35853,0,0,0-3.47525-9.30664c-.03724,3.42765-.14133,7.07923-2.06913,9.91362-1.37358,2.01952-3.52722,3.38376-5.0321,5.30744s-2.17288,4.97289-.40769,6.66088a6.61488,6.61488,0,0,0,3.92025,1.35022c3.51377.41362,7.58086.64415,10.04531-1.89439,1.34513-1.38557,1.99943-3.43772,3.64-4.4564a4.42852,4.42852,0,0,0,1.597-1.14283c.6774-1.07684-.39893-2.496-1.6105-2.884s-2.5467-.2056-3.76434-.5741-2.33475-1.73769-1.71-2.84589", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M1054.19984,541.77a15.79465,15.79465,0,0,1-5.63593.3323c-3.12814-.5751-5.5628-2.93262-8.08828-4.866A35.677,35.677,0,0,0,1019.63,529.953c-6.86252-.12959-13.78915,1.73-20.52914.43257.44035,2.44927,2.53621,4.28628,4.77242,5.37816s4.70424,1.64135,6.95118,2.711a16.59674,16.59674,0,0,1,8.03921,8.36349c.72369,1.68923,1.179,3.52752,2.27524,5.0025,2.2406,3.01482,6.48759,3.67683,10.23573,3.43028,4.88672-.32145,9.9906-1.7269,14.53687.09374,3.47789,1.39278,5.96707,4.43682,8.871,6.80376s6.99409,4.12365,10.32859,2.41582a17.07456,17.07456,0,0,1-11.81436-16.42993c3.27045.30074,12.6902.18435,12.18281-5.37265C1065.04963,538.07226,1057.00806,541.26169,1054.19984,541.77Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M1011.4166,580.08712c.58068-3.18486,3.75678-5.99733,2.76744-9.07981-.6842-2.13171-3.15585-3.18416-5.39406-3.23672s-4.437.61415-6.67494.67693a32.52991,32.52991,0,0,0-4.3708.06208c-4.44246.73025-7.18069,5.3866-11.36728,7.04224-2.54567,1.00671-5.40551.81426-8.05306,1.51021-6.00991,1.57979-9.81258,7.25885-14.01373,11.83761a50.01052,50.01052,0,0,1-25.38405,14.80352c-3.4171.79123-7.09045,1.29744-9.80657,3.51674-3.59681,2.93889-4.48219,7.97714-5.28242,12.55248a207.33279,207.33279,0,0,1-10.093,37.05085l14.27043,1.822c2.71314.34641,5.52446.68539,8.1389-.11824a23.62759,23.62759,0,0,0,5.35325-2.85151,53.44248,53.44248,0,0,1,20.87945-7.53674c3.737-.51305,7.655-.60706,11.16192.782s6.51552,4.53912,6.80943,8.29966a8.76685,8.76685,0,0,1,8.76213,2.131,15.23057,15.23057,0,0,1,4.18328,8.35106c.3759,1.95234.752,4.29163,2.56365,5.11066,1.478.6682,3.17346-.05148,4.79031-.18086,5.48649-.439,10.03922,5.95835,15.43188,4.85672,5.78353-1.18148,7.20343-9.84311,12.84567-11.57814,3.24055-.99649,7.786.21524,9.33774-2.79908,1.36774-2.65685-1.36107-5.72282-1.07966-8.69778.3465-3.66316,4.66743-5.218,7.99847-6.781,11.484-5.38855,16.93355-20.845,11.36868-32.24457-3.29717-6.75422-9.78474-12.071-10.98287-19.49093-.92182-5.70876,1.32859-12.36578-2.31117-16.85931-1.85157-2.28588-4.98653-3.54764-6.08831-6.2752-.69353-1.7169-.41478-3.66488-.788-5.47855s-1.95554-3.7108-3.74653-3.2407c-5.19889,1.3646-6.85784,17.42481-9.6413,21.327C1018.77034,591.30233,1010.08416,587.39516,1011.4166,580.08712Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M915.32233,547.8381c-1.77663-.49816-3.71661-.9889-5.4189-.277s-2.69642,3.21122-1.33017,4.45137c10.68847-.41637,21.44238-.82984,32.04.62169,12.21017,1.67239,24.29409,5.815,36.55784,4.59626a186.05361,186.05361,0,0,0-21.32606-4.94866l-12.0059-2.29346a92.83038,92.83038,0,0,0-9.74919-1.50643C927.24065,547.9162,922.0566,549.72637,915.32233,547.8381Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M926.02269,510.61218c-.88733-.07409-1.9863-.13792-2.44535.625-.43858.72893.06343,1.692-.17241,2.5094-.3222,1.11667-1.78464,1.40194-2.93688,1.24991s-2.3984-.51613-3.41924.03944a2.89808,2.89808,0,0,0-1.1205,3.29188,8.47457,8.47457,0,0,0,1.97628,3.15037,32.1849,32.1849,0,0,0,5.12776,5.14334c3.67354,2.71163,8.65038,4.01837,10.96411,7.95468a5.278,5.278,0,0,0,1.46433,1.97083c1.11073.70357,2.55931.16832,3.75519-.37811l4.192-1.91541a4.76165,4.76165,0,0,0,1.95967-1.33278c.95772-1.29948.36947-3.1471-.43438-4.547s-1.83282-2.84867-1.66031-4.45369c.30757-2.86171,3.98705-3.95634,5.5-6.40481,1.525-2.468.53222-5.64793.708-8.544.20569-3.38674,2.33378-7.7921-1.09013-10.32252-2.90989-2.15054-5.69117-.16345-7.78036,2.21079C936.20479,505.86627,934.12159,511.2885,926.02269,510.61218Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M951.46826,460.00923c1.43117,2.74025,4.41473,4.37553,5.97536,7.04417,1.69159,2.89256,1.49886,6.62987,3.334,9.43356,1.88279,2.87652,5.67178,4.4037,6.72769,7.67544,1.15278,3.57193-1.46278,7.91337.62215,11.03437a4.63194,4.63194,0,0,0,6.79449.62426,4.98391,4.98391,0,0,0-.20571-6.95361c-1.23444-1.12551-3.007-1.61188-4.03768-2.92653a6.141,6.141,0,0,1-1.04577-2.54625,16.66947,16.66947,0,0,1,.26223-7.98917,3.55525,3.55525,0,0,0,.20093-2.08971c-.464-1.34873-2.29026-1.44442-3.572-2.07011-2.91117-1.42106-2.84052-5.52953-2.3319-8.7289-.33863,2.13-7.92588-1.49274-8.72038-2.69926-1.57831-2.39681-.71931-7.02026-1.03176-9.66886C951.03249,451.79057,949.71844,456.65879,951.46826,460.00923Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M875.03144,502.17106c-1.40039-1.56769-3.50969-3.20771-5.38715-2.26225-1.43239.72131-1.82641,2.70317-1.265,4.20545a9.25683,9.25683,0,0,0,3.05492,3.642c3.91255,3.22681,8.12569,6.13914,11.539,9.89012,6.10833,6.71269,9.34415,15.77036,15.98724,21.95431a8.9669,8.9669,0,0,0,5.034,2.7244c1.93541.18005,4.10878-1.05881,4.33125-2.9898.18325-1.59064-.92563-3.01436-2.00929-4.19309-2.58052-2.80691-5.40559-5.39057-7.84193-8.32349a6.99405,6.99405,0,0,1-2.00446-4.18629c-.01236-1.5792,1.42772-3.23208,2.95776-2.841-1.86083-.47563-3.24087-3.57576-5.972-4.15852-2.28244-.487-2.8346.926-5.55093-.239C882.72412,513.17191,878.6595,506.23257,875.03144,502.17106Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M996.76353,349.52453a42.89929,42.89929,0,0,1-4.3768-1.56347c-3.84661-1.15464-8.93608,1.67272-8.42335,5.656.34067,2.64657,2.80376,4.4309,4.164,6.72656,2.01724,3.40439,1.47946,7.72236.41941,11.5349a9.01737,9.01737,0,0,1-1.45541,3.28195A11.11578,11.11578,0,0,1,983.6445,377.64a46.10307,46.10307,0,0,0-13.4899,11.4604,3.3029,3.3029,0,0,0-.81466,1.53568c-.18345,1.34489,1.16841,2.32458,1.93271,3.44628,1.69777,2.49171.47065,5.8446.63849,8.85506a2.5036,2.5036,0,0,0,1.05491,2.19658c1.02329.5198,2.23586-.36314,2.7905-1.368,1.84062-3.33468.45407-8.6874,3.907-10.29523.65316-.30414,1.445-.43236,1.88074-1.00613.69131-.91021.02434-2.25793.37468-3.34588.526-1.63348,2.76013-1.70681,4.47468-1.63436a25.39755,25.39755,0,0,0,8.72416-1.16146,5.80725,5.80725,0,0,0,2.888-1.67236c1.0322-1.2882.94072-3.11986.73447-4.75764a64.49225,64.49225,0,0,0-7.61951-23.24965c3.03314.38746,6.33307.723,8.95044-.85772,1.46562-.88515,3.22315-3.53215,2.49625-5.33381C1001.41793,347.60265,999.34132,350.00081,996.76353,349.52453Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M607.91457,394.43107c.363,1.94681.71982,3.99671.08181,5.87148s-2.64505,3.44124-4.54026,2.8668c-1.47084-.44581-2.32046-1.92472-3.36488-3.05224-5.80814-6.27028-18.91221-2.64-22.50023-10.39738-1.46435-3.166-.46919-6.959-1.468-10.30111a9.16886,9.16886,0,0,0-9.28527-6.30783,19.07985,19.07985,0,0,0-5.34323,1.595,134.72654,134.72654,0,0,1-35.4012,8.8543,29.08667,29.08667,0,0,0-6.80218,1.23767c-4.9878,1.80826-8.39581,6.4324-10.82115,11.15106s-4.21585,9.82711-7.4675,14.01934c-3.41736,4.4059-8.20609,7.49115-12.67306,10.82829a12.93011,12.93011,0,0,0-4.18069,4.38171c-.96841,1.98814-.91378,4.30065-.83861,6.51083l.91295,26.84369c.11743,3.45276.26488,7.02894,1.81022,10.11882,1.92972,3.85843,5.74182,6.38553,8.38641,9.794a19.18331,19.18331,0,0,1,3.9797,12.25056c-.05629,1.77706-.23287,3.87893,1.15113,4.995a5.06175,5.06175,0,0,0,2.83036.814l36.31165,2.97192c6.38748.52278,13.46629,1.38234,17.63656,6.24877,1.96817,2.29673,3.54923,5.59956,6.56387,5.846,1.29309.10569,2.5513-.42512,3.84465-.52755,3.26305-.25843,6.1296,2.21818,7.93868,4.94608a21.94345,21.94345,0,0,1,3.52451,14.08047c-.29663,3.11179-1.26143,6.137-1.46943,9.256-.79146,11.86777,9.26915,22.17857,9.46416,34.07111.11471,6.99531-3.20608,13.5313-6.44367,19.73336,5.22532,7.91591.94656,18.4569,3.02688,27.711,1.97365,8.77961,9.294,15.65282,11.11811,24.46471.83506,4.03407.88337,8.99841,4.44062,11.07616a10.12238,10.12238,0,0,0,5.02475,1.00609,66.24189,66.24189,0,0,0,30.16507-6.86742c4.39862-2.18276,8.95721-5.44128,9.7254-10.29125.6195-3.91119-1.36394-8.28605.6546-11.6929,2.379-4.01531,8.47348-3.697,11.9738-6.78414,5.67861-5.00824,1.25052-14.55968,3.55132-21.77323,2.06814-6.4841,9.18735-9.92886,12.71629-15.74842a27.98563,27.98563,0,0,0,2.955-8.00882,114.2435,114.2435,0,0,0,3.00656-20.42635,122.43639,122.43639,0,0,1,.92415-12.51145c3.80475-23.63775,27.17324-39.466,34.76027-62.174.72457-2.16863,1.06484-5.05722-.86443-6.28433a5.52524,5.52524,0,0,0-3.6742-.38455l-16.73885,2.11033c-2.0791.26212-4.28291.50711-6.19226-.35645s-3.27777-3.279-2.265-5.11353c2.843-5.14971-3.00514-11.65727-5.60325-16.93475a249.89411,249.89411,0,0,0-24.88458-40.35668,4.10206,4.10206,0,0,1-1.091-2.36876l4.75068.15818c-1.60365-5.75439-4.25013-12.05139-9.84064-14.15637-3.15023-1.18615-6.63887-.776-10-.59234C627.764,397.35788,617.44293,395.90436,607.91457,394.43107Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M637.399,264.75532c2.5192,2.67527,5.34218,5.51171,8.98717,5.978,6.438.82367,11.06688-5.83384,14.014-11.6166a5.67618,5.67618,0,0,0,5.9231,5.25121,11.69277,11.69277,0,0,0,4.455-1.74172,87.76547,87.76547,0,0,1,41.57892-10.74849,4.49028,4.49028,0,0,1,3.429-4.93638c2.95542-.58592,5.61763,1.96926,7.04331,4.62354s2.31465,5.73081,4.57974,7.71757,6.65047,1.90021,7.54516-.97683c.85894-2.76209-2.01855-5.11757-4.40918-6.746s-4.91044-4.64241-3.30054-7.04556c12.21331-2.70351,24.50238-5.41726,36.99979-5.95462a15.49384,15.49384,0,0,0,6.22815-1.0729c1.90589-.93527,3.42074-3.0583,2.90823-5.11851a14.10379,14.10379,0,0,1-14.71819-5.55156c17.341-1.431,35.785-2.65073,51.15311,5.50893,1.84418,3.959-7.555,7.25286-5.0402,10.82367.80205,1.13886,2.40921,1.27242,3.8019,1.29827,10.67948.19828,21.4206.39271,31.97953-1.21963,3.85868-.58921,7.75618-1.421,11.63024-.94319,6.45273.79581,11.97173,5.10126,18.32,6.505,2.58381.57135,5.48094.5907,7.659-.91213s3.11429-4.92479,1.32943-6.87844c5.97714-5.85812,15.89735-4.40622,23.78266-1.60164s15.35549,7.32743,23.70133,7.95258c5.98472.44829,12.0526-1.16151,17.96623-.1383,3.71614.643,7.17469,2.29621,10.80669,3.3119,6.86932,1.921,14.1359,1.51549,21.26816,1.60794a149.0218,149.0218,0,0,1,53.10605,10.55252,15.78927,15.78927,0,0,1,5.90367,3.488c1.57334,1.68485,2.37574,4.303,1.31829,6.35142l-17.47272-2.553c1.64627,3.24081,5.90527,3.79308,9.364,4.91109s7.0449,4.93759,4.9663,7.9196c-3.74756-1.19324-7.14361,2.55357-9.03668,6.00094s-4.2,7.576-8.12732,7.786c-3.51681.18806-7.77007-2.80646-10.06239-.13277a68.62854,68.62854,0,0,1,8.0855,12.92662c2.26471,4.71812,3.87775,10.66311.81676,14.90809a3.864,3.864,0,0,1-2.06585,1.602c-2.4999.63286-4.12418-2.42539-5.917-4.279-2.25912-2.33583-5.6756-2.99743-8.73495-4.0929s-6.28211-3.25045-6.52148-6.49119c-.14893-2.01631.91563-3.89065,1.69976-5.75419a22.16956,22.16956,0,0,0,1.68445-9.94358c-.17165-2.73525-.93862-5.58051-2.903-7.49163s-5.35589-2.51739-7.46472-.767c-.984.81673-1.77259,2.12315-3.05043,2.172-2.25783.08638-3.99138-3.85-5.80789-2.50629a6.17209,6.17209,0,0,1-.8387,4.12789c-5.42063,4.71438-13.748,2.71993-20.73623,4.3853a38.92136,38.92136,0,0,0-9.46064,4.13158,6.08717,6.08717,0,0,0-2.70418,2.26983c-.87231,1.69516.08944,3.86621,1.627,4.99333a12.91668,12.91668,0,0,0,5.36459,1.83107c8.5195,1.61352,17.16327,4.11131,23.88942,9.58345s11.137,14.5179,9.00854,22.92356l-16.80085-16.05362q.95718,10.11085,1.08638,20.2774a9.11644,9.11644,0,0,1-.53256,3.9003c-1.19773,2.64545-4.44394,3.53567-7.28856,4.11966a5.70921,5.70921,0,0,0-4.38278,7.31476c1.01068,3.29431,3.53069,5.86271,5.83813,8.42193s4.57815,5.46788,4.88022,8.90047-2.28766,7.30166-5.72523,7.063c-2.60594-.18094-4.5393-2.51378-5.65082-4.87771s-1.7729-4.99729-3.443-7.00589c-5.05494-6.07956-16.409-3.47482-20.93744-9.95611a10.24126,10.24126,0,0,0-2.11779,9.746c2.10671-1.31884,4.99076-.09347,6.57359,1.82283s2.32954,4.37313,3.57257,6.52544c1.67734,2.9043,4.34677,5.479,4.5809,8.82472a28.84532,28.84532,0,0,0,.06384,3.7953c.41589,2.0272,2.12934,3.4828,3.31734,5.17725,2.76431,3.94272,2.62772,9.35907.846,13.83256s-4.98271,8.21152-8.15324,11.83563c-5.53774,6.33-11.18851,12.62289-17.75369,17.87962-1.87333,1.5-3.8726,2.97492-5.03934,5.072s-1.22657,5.04064.56634,6.63586c-1.28287.06425-3.58355.69522-4.86642.75947a113.14129,113.14129,0,0,1-.29339-15.47719c-5.06262-2.43088-10.51361,4.07913-9.86032,9.657s4.68766,10.054,7.56,14.87984c2.10049,3.529,3.66153,7.64391,2.96027,11.69042s-4.31335,7.77945-8.40464,7.42256c-6.50767-.56766-9.22974-9.91006-15.674-10.97926a2.63321,2.63321,0,0,0-1.696.16838c-.95661.525-1.12289,1.805-1.1766,2.89487-.26365,5.34915-.49192,10.91093,1.5962,15.84273,3.05478,7.21493,10.94644,13.27462,9.291,20.93272-8.91784-4.14536-13.55448-14.14614-15.65967-23.7524s-2.45605-19.691-6.22975-28.77234c-2.8655,3.67278-8.88847.6366-11.50661-3.21642-2.48213-3.65287-4.01035-7.87845-6.41852-11.5805s-6.09728-7.017-10.509-7.22056c-4.62546-.21346-8.637,2.96071-12.16483,5.95986-2.90093,2.4662-5.87931,5.02945-7.575,8.43857-2.46757,4.96088-1.82209,10.80922-1.941,16.34863-.12858,5.98861-1.39774,12.30709-5.47933,16.69121s-11.61531,5.91115-16.1173,1.95995c-2.35035-2.06281-3.48835-5.14477-4.502-8.1031A396.68427,396.68427,0,0,1,785.59592,435.269c-.75647,3.36049-3.70732,7.69183-6.52629,5.71231a5.8442,5.8442,0,0,1-1.50354-1.93722c-5.25831-8.91217-14.99614-14.2578-24.835-17.463s-20.19059-4.70029-29.92034-8.22288a75.78674,75.78674,0,0,1-15.52117-7.7314,12.20707,12.20707,0,0,0-.746,12.48676c2.15828,3.82156,7.04226,6.03267,11.223,4.69689,2.16045-.69029,3.98494-2.19009,6.12862-2.93084s5.02093-.377,5.95831,1.68832c.89725,1.97685-.45894,4.36829.21381,6.43236,1.02464,3.14369,5.766,3.38589,7.42395,6.24663,1.23358,2.12847.21858,4.95491-1.54274,6.67243s-4.1113,2.65952-6.26134,3.85511c-6.97621,3.87928-11.93713,10.50151-18.03392,15.65374s-14.69866,8.91387-21.96463,5.609c1.732-8.77015-8.715-15.20895-10.63689-23.93945-.63259-2.87357-.30466-5.92608-1.20778-8.72642-1.30756-4.05445-4.90466-6.84213-7.85557-9.91467a38.91161,38.91161,0,0,1-10.67287-28.3102c.15946-3.60819.82236-7.27515.00035-10.79208s-3.7338-6.92093-7.342-6.76154c-8.24107.364-18.62305.977-22.94678-6.04816-1.54315-2.50731-2.21469-6.17955.01642-8.10051,1.57391-1.35511,3.89718-1.22746,5.9641-1.02413l18.56832,1.8266c4.34286.42722,9.03739.77979,12.76409-1.4906s5.34151-8.297,1.89073-10.96811c-2.52136-1.95171-7.03872-1.84588-7.77165-4.949-.61041-2.58441,2.25017-5.51674.70519-7.67656-1.10779-1.54864-3.59834-1.119-5.10753.04194s-2.60418,2.85872-4.29321,3.73772c-2.96291,1.542-6.50316.07446-9.6909-.92292s-7.46125-1.08208-9.00743,1.87863c-1.7292,3.31119,1.53379,7.65-.18233,10.96795-2.2689,4.38675-9.95258,1.88949-13.13906,5.66279-3.65645,4.32983,2.48811,10.78622,1.255,16.31763a10.1577,10.1577,0,0,1-10.00739-.56224,9.72033,9.72033,0,0,1-4.20064-9.05054c.30523-2.4883,1.60251-5.02832.73329-7.37976-.70278-1.90118-2.61164-3.033-4.38571-4.01338l-18.04423-9.97108c-1.67528,3.10774.44265,6.9605,3.09144,9.29471s5.96651,4.09225,7.70655,7.1642a9.40377,9.40377,0,0,1-3.53854,12.39776,2.1708,2.1708,0,0,1-1.78861.312,2.4953,2.4953,0,0,1-1.16-1.55988c-3.18374-8.14738-7.96377-16.18036-15.60589-20.43642s-18.62306-3.381-23.63443,3.78855c-1.19031,1.70291-1.98919,3.644-3.02611,5.44441-5.509,9.56533-17.31937,14.09487-28.3537,13.799a5.63043,5.63043,0,0,1-3.09314-.72684c-1.78331-1.23165-1.703-3.84517-1.43-5.99521l1.15826-9.12428c.23259-1.83222.56962-3.85742,2.01978-5.00116,2.04417-1.61224,4.993-.5948,7.59623-.63229a9.62676,9.62676,0,0,0,8.738-6.74362,10.84933,10.84933,0,0,0-3.02046-10.78926c-1.19315-1.12066-2.79462-2.52837-2.16442-4.03911a3.33909,3.33909,0,0,1,2.3416-1.57681c4.67608-1.35792,9.617-1.71384,14.21512-3.31608s9.0573-4.88037,10.14623-9.6263c.33371-1.45441.48564-3.21624,1.79205-3.93732a5.37372,5.37372,0,0,1,2.071-.42313,10.07754,10.07754,0,0,0,8.64425-10.50577c2.20364-1.53979,5.291-.40712,7.42286,1.23062s4.014,3.80148,6.608,4.50746c4.83414,1.3157,9.5058-2.96444,14.51574-2.98428,2.10683-.00834,4.28782.73659,6.26989.02231,2.00933-.72411,3.20926-2.7243,4.75141-4.202s4.24806-2.379,5.67206-.78714l-1.21261-8.982a17.65786,17.65786,0,0,0,14.37055-2.5981l-15.672-5.29531a3.40736,3.40736,0,0,1-1.46551-.78358c-1.13939-1.2269-.00768-3.1388.91883-4.53347,2.21645-3.33642,2.58852-8.83231-1.05637-10.49336-2.48789-1.13378-5.34358.22716-7.73152,1.55863L589.75211,276.674c-.3635,2.17427,2.29537,3.40652,3.943,4.87108a6.61107,6.61107,0,0,1-4.3112,11.55174,8.23769,8.23769,0,0,1,1.47117,6.984l-7.69617.55351a3.33426,3.33426,0,0,1-2.49618-.4872c-.82313-.73105-.7115-2.01211-.90228-3.09635-.46046-2.61692-3.0229-4.45106-5.63806-4.92135s-5.29053.13252-7.88012.72774a4.703,4.703,0,0,1-3.38729-.07817,3.3824,3.3824,0,0,1-1.34008-1.69143c-1.13531-2.75275-.07412-5.98837,1.74928-8.34246s4.31952-4.075,6.5613-6.03479a38.24257,38.24257,0,0,0,11.37146-17.63761c4.23676-1.77513,8.623-4.187,12.85971-5.96217a39.35045,39.35045,0,0,1,21.15126-4.09809l14.34808.27406c4.248.08114,8.61091.18511,12.53894,1.8046s7.37949,5.12222,7.65068,9.36234a2.87395,2.87395,0,0,1-.92,2.62744,3.38952,3.38952,0,0,1-1.814.40888C643.04984,263.629,641.36068,264.61614,637.399,264.75532Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M523.03553,309.72274a4.19848,4.19848,0,0,0,1.14487-4.22261,7.85348,7.85348,0,0,0-8.13191,1.53554,13.70974,13.70974,0,0,0-2.17858,2.8801c-1.88539,3.076-3.553,6.75021-2.46035,10.18862a2.89439,2.89439,0,0,0,1.32464,1.81177,3.48245,3.48245,0,0,0,1.544.24185,51.7614,51.7614,0,0,0,6.21361-.38244c1.26609-.1548,2.73663-.51234,3.22593-1.69027.64319-1.5484-.91358-3.30074-.45975-4.91483a5.36939,5.36939,0,0,1,1.32582-1.89868,2.51014,2.51014,0,0,0,.7819-2.10731c-.18315-.75735-1.34281-1.187-1.76026-.529", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M533.80571,295.7594a17.38476,17.38476,0,0,0-5.63067-.35359,2.45549,2.45549,0,0,0-1.19979.27266,2.00179,2.00179,0,0,0-.73936,1.07069,5.31932,5.31932,0,0,0,3.0969,6.51863,6.65526,6.65526,0,0,1,1.92043.77174c1.59252,1.23559.5773,3.76114.87877,5.7541.33852,2.23792,2.50476,4.11641,2.1076,6.34467-.31289,1.75549-2.18785,3.14554-1.886,4.903.31617,1.84067,2.65189,2.39377,4.51369,2.54117a5.67657,5.67657,0,0,0,3.19791-.36651,4.95168,4.95168,0,0,0,2.01759-2.92189,18.72866,18.72866,0,0,0,.94353-7.052,6.687,6.687,0,0,0-.7952-3.11257,17.37836,17.37836,0,0,0-1.85827-2.12786C536.8058,303.85243,540.56167,297.66337,533.80571,295.7594Z", "transform", "translate(-11.69692 -13.01074)", "fill", "#3f3d56"], ["d", "M1002.86748,620.79489S729.66608,463.97233,612.04916,493.68608c0,0-249.26532,26.82491-278.15369,85.83971,0,0-79.23666-247.61456-108.125-255.86838", "transform", "translate(-11.69692 -13.01074)", "fill", "none", "stroke", "#ffc4a1", "stroke-miterlimit", "10", "stroke-width", "2", "opacity", "0.8"], ["d", "M333.89547,579.52579C379.70417,457.36928,792.3951,322.00665,792.3951,322.00665,733.793,336.86352,612.04916,493.68608,612.04916,493.68608S354.53,306.32439,225.77045,323.65741c0,0,567.03734,18.57109,777.097,297.13748", "transform", "translate(-11.69692 -13.01074)", "fill", "none", "stroke", "#ffc4a1", "stroke-miterlimit", "10", "stroke-width", "2", "opacity", "0.8"], ["cx", "214.07353", "cy", "310.64667", "r", "11.96804", "fill", "#ffc4a1"], ["cx", "322.19856", "cy", "566.51505", "r", "11.96804", "fill", "#ffc4a1"], ["cx", "780.69818", "cy", "308.99591", "r", "11.96804", "fill", "#ffc4a1"], ["cx", "991.17056", "cy", "607.78414", "r", "11.96804", "fill", "#ffc4a1"], ["cx", "600.35225", "cy", "480.67534", "r", "11.96804", "fill", "#ffc4a1"], [1, "col-start-3", "col-end-4"], ["height", "50", "width", "50"], ["cx", "25", "cy", "25", "r", "25", "fill", "gray"], [1, "sm-text", "text-center"], [1, "h-screen", "md:flex", "md:justify-around", "mx-8", "md:mx-16"], [1, "flex", "flex-row"], [1, "pt-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "80", "viewBox", "0 0 12 80"], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(-55 -235)"], ["id", "Line_16", "data-name", "Line 16", "y2", "64", "transform", "translate(60.5 245.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "0.2"], ["id", "Group_16", "data-name", "Group 16", "transform", "translate(1 68)"], ["id", "Ellipse_10", "data-name", "Ellipse 10", "cx", "6", "cy", "6", "r", "6", "transform", "translate(54 235)", "fill", "#4469c3", "opacity", "0.1"], ["id", "Ellipse_2", "data-name", "Ellipse 2", "cx", "5", "cy", "5", "r", "5", "transform", "translate(55 236)", "fill", "#4469c3"], ["id", "Group_6", "data-name", "Group 6", "transform", "translate(1)"], ["id", "Ellipse_10-2", "data-name", "Ellipse 10", "cx", "6", "cy", "6", "r", "6", "transform", "translate(54 235)", "fill", "#ffc4a1", "opacity", "0.1"], ["id", "Ellipse_2-2", "data-name", "Ellipse 2", "transform", "translate(55 236)", "fill", "#ffc4a1", "stroke", "#ffc4a1", "stroke-width", "1"], ["cx", "5", "cy", "5", "r", "5", "stroke", "none"], ["cx", "5", "cy", "5", "r", "4.5", "fill", "none"], [1, "w-full"], [1, "c-form", 3, "formGroup"], [1, "ml-4"], [1, "flex", "flex-col"], ["for", "from", 1, "sm-text__upper"], ["name", "departure", "id", "", "formControlName", "departure"], ["value", "", 1, "color-maintheme-grey"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "to", 1, "sm-text__upper"], ["name", "departure", "id", "", "formControlName", "destination"], [1, "md:flex", "py-8", "md:py-16"], [1, "sm-text__upper"], ["type", "date", "formControlName", "dateOfDeparture", 1, "c-form__input"], [1, "flex", "flex-col", "md:pl-4"], ["type", "date", "formControlName", "dateOfArrival", 1, "c-form__input"], [1, "flex", "justify-center", "mb-16"], ["routerLink", "../availableflights", 1, "btn", "bg-maintheme-darkblue", "text-maintheme-lightblue", "rounded-md", 2, "width", "208px", 3, "state"], [1, "flightstoday"], [4, "ngFor", "ngForOf"], [3, "value"], [1, "font-bold"], [1, "sm-text", "flex", "flex-row", "justify-between"], [1, "text-center"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "239", "height", "16", "viewBox", "0 0 239 16", 1, "flex", "items-center", "mx-auto", "my-2"], ["id", "clip-path"], ["width", "216", "height", "2", "fill", "none"], ["id", "Group_7", "data-name", "Group 7", "transform", "translate(-54 -234.023)", "opacity", "0.8"], ["id", "Ellipse_10", "data-name", "Ellipse 10", "cx", "6", "cy", "6", "r", "6", "transform", "translate(54 235)", "fill", "#ffc4a1", "opacity", "0.1"], ["id", "Ellipse_2", "data-name", "Ellipse 2", "cx", "5", "cy", "5", "r", "5", "transform", "translate(55 236)", "fill", "#ffc4a1"], ["id", "Group_9", "data-name", "Group 9", "transform", "translate(173 -279.023)"], ["id", "Ellipse_3", "data-name", "Ellipse 3", "cx", "5", "cy", "5", "r", "5", "transform", "translate(55 281)", "fill", "#4469c3"], ["id", "Ellipse_11", "data-name", "Ellipse 11", "cx", "6", "cy", "6", "r", "6", "transform", "translate(54 280)", "fill", "#4469c3", "opacity", "0.1"], ["id", "Repeat_Grid_1", "data-name", "Repeat Grid 1", "transform", "translate(11.5 6.977)", "clip-path", "url(#clip-path)"], ["transform", "translate(-116.5 -551)"], ["id", "Line_12", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-111.5 -551)"], ["id", "Line_12-2", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-106.5 -551)"], ["id", "Line_12-3", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-101.5 -551)"], ["id", "Line_12-4", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-96.5 -551)"], ["id", "Line_12-5", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-91.5 -551)"], ["id", "Line_12-6", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-86.5 -551)"], ["id", "Line_12-7", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-81.5 -551)"], ["id", "Line_12-8", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-76.5 -551)"], ["id", "Line_12-9", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-71.5 -551)"], ["id", "Line_12-10", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-66.5 -551)"], ["id", "Line_12-11", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-61.5 -551)"], ["id", "Line_12-12", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-56.5 -551)"], ["id", "Line_12-13", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-51.5 -551)"], ["id", "Line_12-14", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-46.5 -551)"], ["id", "Line_12-15", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-41.5 -551)"], ["id", "Line_12-16", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-36.5 -551)"], ["id", "Line_12-17", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-31.5 -551)"], ["id", "Line_12-18", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-26.5 -551)"], ["id", "Line_12-19", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-21.5 -551)"], ["id", "Line_12-20", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-16.5 -551)"], ["id", "Line_12-21", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-11.5 -551)"], ["id", "Line_12-22", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-6.5 -551)"], ["id", "Line_12-23", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(-1.5 -551)"], ["id", "Line_12-24", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(3.5 -551)"], ["id", "Line_12-25", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(8.5 -551)"], ["id", "Line_12-26", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(13.5 -551)"], ["id", "Line_12-27", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(18.5 -551)"], ["id", "Line_12-28", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(23.5 -551)"], ["id", "Line_12-29", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(28.5 -551)"], ["id", "Line_12-30", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(33.5 -551)"], ["id", "Line_12-31", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(38.5 -551)"], ["id", "Line_12-32", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(43.5 -551)"], ["id", "Line_12-33", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(48.5 -551)"], ["id", "Line_12-34", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(53.5 -551)"], ["id", "Line_12-35", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(58.5 -551)"], ["id", "Line_12-36", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(63.5 -551)"], ["id", "Line_12-37", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(68.5 -551)"], ["id", "Line_12-38", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(73.5 -551)"], ["id", "Line_12-39", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(78.5 -551)"], ["id", "Line_12-40", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(83.5 -551)"], ["id", "Line_12-41", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(88.5 -551)"], ["id", "Line_12-42", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(93.5 -551)"], ["id", "Line_12-43", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["transform", "translate(98.5 -551)"], ["id", "Line_12-44", "data-name", "Line 12", "x2", "3", "transform", "translate(116.5 551.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "1"], ["id", "aeroplane", "transform", "translate(126.021 -0.021) rotate(90)"], ["id", "Group_10", "data-name", "Group 10", "transform", "translate(0.021)"], ["id", "Path_29", "data-name", "Path 29", "d", "M15.535,11.043,9.354,4.863V2.122A3.025,3.025,0,0,0,9.069.847L8.928.58A1,1,0,0,0,7.121.565l-.155.3a3.012,3.012,0,0,0-.278,1.261V4.863L.509,11.041a1.654,1.654,0,0,0-.488,1.178V13a.333.333,0,0,0,.513.28L6.817,9.255c.062,1.009.146,1.851.249,2.875l.106,1.05L4.838,14.722a.334.334,0,0,0-.15.279v.667a.334.334,0,0,0,.405.326l2.928-.651,2.928.651a.332.332,0,0,0,.281-.065.337.337,0,0,0,.125-.261V15a.332.332,0,0,0-.15-.278L8.87,13.183l.106-1.053c.1-1.023.187-1.865.249-2.873l6.283,4.025a.334.334,0,0,0,.513-.28v-.781A1.652,1.652,0,0,0,15.535,11.043Z", "transform", "translate(-0.021)", "fill", "#ffc4a1"]], template: function DiscoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "circle", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "circle", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "circle", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "circle", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "circle", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "main", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Book your flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "svg", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "line", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "g", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "circle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "circle", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "g", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "circle", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "g", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "circle", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "form", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " From ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, DiscoverComponent_option_67_Template, 4, 3, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "select", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, DiscoverComponent_option_74_Template, 4, 3, "option", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Departure ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Find my flight");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Today's flights");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, DiscoverComponent_div_91_Template, 114, 4, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.departures);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.destinations);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.searchForm.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.flightstoday);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: [".grid-template[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 2.5fr 1fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcmVzZW50YXRpb25zL2ZsaWdodC9kaXNjb3Zlci9kaXNjb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoic3JjL3ByZXNlbnRhdGlvbnMvZmxpZ2h0L2Rpc2NvdmVyL2Rpc2NvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyaWQtdGVtcGxhdGUge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XG59XHJcbiJdfQ== */", "html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-form__input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  height: var(--global-whitespace-xxxl);\n  width: 100%;\n  padding: var(--global-whitespace-sm);\n}\n\n.sm-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.sm-text__upper[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #9da5ab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmMtZm9ybSB7XG4gICZfX2lucHV0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXh4eGwpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXNtKTtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLnNtLXRleHQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gICZfX3VwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjOWRhNWFiO1xuICB9XG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-discover',
                templateUrl: './discover.component.html',
                styleUrls: ['./discover.component.scss', '../../../app/app.component.scss']
            }]
    }], function () { return [{ type: _flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "l2C1":
/*!****************************************************!*\
  !*** ./src/presentations/identity/user.service.ts ***!
  \****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class UserService {
    constructor(http) {
        this.http = http;
    }
    registerUser(user) {
        console.log("register in backend");
        console.log(JSON.stringify(user));
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post("http://localhost:32808/api/auth/register", JSON.stringify(user), { headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(data => console.log('registerUser: ' + JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.log("handleError");
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log("elsie");
            // console.log(err)
            // console.log({status: err.status})
            // console.log({error: err.error})
            errorMessage = `${err.error}`;
            console.log({ errorMessage });
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "oq2u":
/*!*********************************************************************************!*\
  !*** ./src/presentations/flight/availableflights/availableflights.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AvailableflightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableflightsComponent", function() { return AvailableflightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../flight.service */ "YC0P");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AvailableflightsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No flights found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Try changing your departure and/or arrival date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { data: a0 }; };
function AvailableflightsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "line", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "circle", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "circle", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "circle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Flight number:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Buy now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Economy class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u20AC503");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Seats available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "34");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "g", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const flight_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r2.departureDTO.locationDTO.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r2.timeOfDeparture);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r2.destinationDTO.locationDTO.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](flight_r2.timeOfArrival);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", flight_r2.airplaneDTO.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, flight_r2.id));
} }
class AvailableflightsComponent {
    constructor(flightService) {
        this.flightService = flightService;
        this.query = '';
    }
    ngOnInit() {
        this.searchForm = history.state.data;
        console.log(this.searchForm);
        if (this.searchForm) {
            this.departure = this.searchForm.departure;
            this.destination = this.searchForm.destination;
            this.dateOfDeparture = this.searchForm.dateOfDeparture;
            this.dateOfArrival = this.searchForm.dateOfArrival;
            if (this.departure == '' &&
                this.destination == '' &&
                this.dateOfDeparture == '' &&
                this.dateOfArrival == '') {
                this.flightService.getFlights().subscribe((data) => {
                    this.searchedflights = data;
                });
            }
            if (this.departure != '') {
                this.query = `departureSearch=${this.departure}`;
            }
            if (this.destination != '') {
                if (this.query == '') {
                    this.query = `destinationSearch=${this.destination}`;
                }
                else {
                    this.query += `&destinationSearch=${this.destination}`;
                }
            }
            if (this.dateOfDeparture != '') {
                if (this.query == '') {
                    this.query = `departureTimeSearch=${this.dateOfDeparture}`;
                }
                else {
                    this.query += `&departureTimeSearch=${this.dateOfDeparture}`;
                }
            }
            if (this.dateOfArrival != '') {
                if (this.query == '') {
                    this.query = `arrivalTimeSearch=${this.dateOfArrival}`;
                }
                else {
                    this.query += `&arrivalTimeSearch=${this.dateOfArrival}`;
                }
            }
            this.flightService
                .getFlightsByDatesDepartureAndDestination(this.query)
                .subscribe((data) => {
                console.log(this.query);
                this.searchedflights = data;
                console.log(this.searchedflights);
            });
        }
    }
}
AvailableflightsComponent.ɵfac = function AvailableflightsComponent_Factory(t) { return new (t || AvailableflightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"])); };
AvailableflightsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvailableflightsComponent, selectors: [["app-availableflights"]], decls: 11, vars: 2, consts: [[1, "min-h-full"], [1, "grid", "custom-grid", "items-center", "bg-maintheme-darkblue", "custom-header", "md:custom-header", "relative", "pt-6", "px-4", "md:pt-12"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "20.583", "viewBox", "0 0 24 20.583", "routerLink", "/flight/discover"], ["id", "arrows", "transform", "translate(2 -47.842)"], ["id", "Group_28", "data-name", "Group 28", "transform", "translate(-2 47.842)"], ["id", "Path_30", "data-name", "Path 30", "d", "M22.557,40.448a1.716,1.716,0,0,0-.3-.022H5.329l.369-.172a3.434,3.434,0,0,0,.97-.687l4.748-4.748a1.777,1.777,0,0,0,.249-2.275,1.717,1.717,0,0,0-2.576-.223L.5,40.907a1.717,1.717,0,0,0,0,2.428h0l8.586,8.586a1.717,1.717,0,0,0,2.576-.172,1.777,1.777,0,0,0-.249-2.275L6.677,44.719a3.434,3.434,0,0,0-.859-.627L5.3,43.861H22.166a1.777,1.777,0,0,0,1.812-1.442A1.717,1.717,0,0,0,22.557,40.448Z", "transform", "translate(0 -31.842)", "fill", "#fff"], [1, "text-white", "text-xl", "sm:text-2xl", "justify-self-center"], [1, "px-5", "pb-5", "relative", "custom-body", "sm:mx-12", "md:mx-24", "lg:mx-40"], ["class", "bg-white shadow-xs rounded-2xl my-4 py-4 p-2 sm-text flex flex-col justify-items-center items-center", 4, "ngIf"], ["class", "bg-white shadow-xs rounded-2xl my-5 p-2 sm-text relative", 4, "ngFor", "ngForOf"], [1, "bg-white", "shadow-xs", "rounded-2xl", "my-4", "py-4", "p-2", "sm-text", "flex", "flex-col", "justify-items-center", "items-center"], [1, "text-bold"], [1, "text-maintheme-grey", "mb-12"], ["xmlns", "http://www.w3.org/2000/svg", "width", "123.848", "height", "158.909", "viewBox", "0 0 123.848 158.909"], ["id", "Group_31", "data-name", "Group 31", "transform", "translate(-127.463 -364.239)"], ["id", "Path_35", "data-name", "Path 35", "d", "M2651.43,68.821s6.436-24.533,42.279-21.274c34.3,3.119,31.056,14.537,38.39,25.94h0c3.686,5,1.354,23.245-10.674,44.541-6.033,10.681-19.888,27.005-26.113,34.89-9.759,12.362-8.552,21.214-8.552,21.214", "transform", "translate(-2523 318)", "fill", "none", "stroke", "#ffc4a1", "stroke-width", "2", "stroke-dasharray", "2 2"], ["id", "Group_15", "data-name", "Group 15", "transform", "translate(43.216 385)"], ["id", "Group_14", "data-name", "Group 14", "transform", "translate(175.427 114.405) rotate(-141)"], ["id", "Path_32", "data-name", "Path 32", "d", "M18.73.088C-.291-.307.018,4.714.018,4.714S63.16,9.44,45.234,2.21,26.422,7.8,26.422,7.8s-.754,16.344-5.133,15.968-3.623-16.99-3.623-16.99", "transform", "translate(0 25.915)", "fill", "none", "stroke", "#4469c3", "stroke-width", "2"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.428,26.134l2.146-17S.279,4.53.006.98,8.154,4.669,8.154,4.669,12.7-.575,15.347.98c.49.288.1.615,0,1.216-.4,2.422-4.836,6.938-4.836,6.938l1.121,17", "transform", "translate(14.102 0)", "fill", "none", "stroke", "#4469c3", "stroke-width", "2"], ["id", "Path_36", "data-name", "Path 36", "d", "M2686.545,186.169s-3.874,6.45,2.4,6.728,4.577,7.661,4.577,7.661-5.544,6.97-10.484,1.375-1.458-7.414-1.458-7.414l28.921-22.172", "transform", "translate(-2523 318)", "fill", "none", "stroke", "#ffc4a1", "stroke-width", "2", "stroke-dasharray", "2 2"], [1, "bg-white", "shadow-xs", "rounded-2xl", "my-5", "p-2", "sm-text", "relative"], [1, "grid", "justify-items-center", "items-center", "custom-card-grid", "border-maintheme-grey", "custom-border__dashed"], ["xmlns", "http://www.w3.org/2000/svg", "width", "12", "height", "56", "viewBox", "0 0 12 56", 1, ""], ["id", "Group_21", "data-name", "Group 21", "transform", "translate(-55 -235)"], ["id", "Line_16", "data-name", "Line 16", "y2", "34", "transform", "translate(60.5 245.5)", "fill", "none", "stroke", "#9da5ab", "stroke-width", "0.2"], ["id", "Group_16", "data-name", "Group 16", "transform", "translate(1 44)"], ["id", "Ellipse_10", "data-name", "Ellipse 10", "cx", "6", "cy", "6", "r", "6", "transform", "translate(54 235)", "fill", "#4469c3", "opacity", "0.1"], ["id", "Ellipse_2", "data-name", "Ellipse 2", "cx", "5", "cy", "5", "r", "5", "transform", "translate(55 236)", "fill", "#4469c3"], ["id", "Group_6", "data-name", "Group 6", "transform", "translate(1)"], ["id", "Ellipse_10-2", "data-name", "Ellipse 10", "cx", "6", "cy", "6", "r", "6", "transform", "translate(54 235)", "fill", "#ffc4a1", "opacity", "0.1"], ["id", "Ellipse_2-2", "data-name", "Ellipse 2", "transform", "translate(55 236)", "fill", "#ffc4a1", "stroke", "#ffc4a1", "stroke-width", "1"], ["cx", "5", "cy", "5", "r", "5", "stroke", "none"], ["cx", "5", "cy", "5", "r", "4.5", "fill", "none"], [1, "border-maintheme-grey", "custom-border", "mb-2"], [1, "text-base", "text-capitalize"], [1, "pr-2"], [1, "text-base", "text-capitalize", "pt-2"], [1, "flex"], [1, "pl-1"], [1, "font-bold", "text-uppercase"], [1, "p-2"], [1, "flex", "justify-between"], [1, "pl-2", "font-bold"], [1, "text-white", "btn", "bg-maintheme-blue", "rounded-2xl", "absolute", "custom-button", "flex", 3, "state"], ["xmlns", "http://www.w3.org/2000/svg", "width", "22.542", "height", "22.542", "viewBox", "0 0 22.542 22.542"], ["id", "aeroplane", "transform", "translate(10.269 -0.013) rotate(40)"], ["id", "Group_10", "data-name", "Group 10", "transform", "translate(0.021)"], ["id", "Path_29", "data-name", "Path 29", "d", "M15.535,11.043,9.354,4.863V2.122A3.025,3.025,0,0,0,9.069.847L8.928.58A1,1,0,0,0,7.121.565l-.155.3a3.012,3.012,0,0,0-.278,1.261V4.863L.509,11.041a1.654,1.654,0,0,0-.488,1.178V13a.333.333,0,0,0,.513.28L6.817,9.255c.062,1.009.146,1.851.249,2.875l.106,1.05L4.838,14.722a.334.334,0,0,0-.15.279v.667a.334.334,0,0,0,.405.326l2.928-.651,2.928.651a.332.332,0,0,0,.281-.065.337.337,0,0,0,.125-.261V15a.332.332,0,0,0-.15-.278L8.87,13.183l.106-1.053c.1-1.023.187-1.865.249-2.873l6.283,4.025a.334.334,0,0,0,.513-.28v-.781A1.652,1.652,0,0,0,15.535,11.043Z", "transform", "translate(-0.021)", "fill", "#fff"]], template: function AvailableflightsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Available flights ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AvailableflightsComponent_div_9_Template, 13, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AvailableflightsComponent_div_10_Template, 50, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchedflights == undefined || ctx.searchedflights.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchedflights);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".custom-header[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.custom-header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-color: #4469c3;\n  height: 400px;\n  border-radius: 0 0 44px 44px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: -5rem;\n  z-index: -1;\n}\n.custom-header-md[_ngcontent-%COMP%]::after {\n  bottom: -7rem;\n}\n.custom-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 3fr 1fr;\n}\n.custom-card-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 2fr 3fr;\n  z-index: 2;\n}\n.custom-body[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n.custom-border[_ngcontent-%COMP%] {\n  border-right-style: solid;\n  border-right-width: 0.2px;\n}\n.custom-border__dashed[_ngcontent-%COMP%] {\n  border-bottom-style: dashed;\n  border-bottom-width: 0.2px;\n}\n.custom-button[_ngcontent-%COMP%] {\n  right: -1.5rem;\n  bottom: -1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcmVzZW50YXRpb25zL2ZsaWdodC9hdmFpbGFibGVmbGlnaHRzL2F2YWlsYWJsZWZsaWdodHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBR0U7RUFDRSxhQUFBO0FBQUo7QUFJQTtFQUNFLGtDQUFBO0FBREY7QUFJQTtFQUNFLGtDQUFBO0VBQ0EsVUFBQTtBQURGO0FBSUE7RUFDRSxVQUFBO0FBREY7QUFJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUFERjtBQUVFO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtBQUFKO0FBSUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFERiIsImZpbGUiOiJzcmMvcHJlc2VudGF0aW9ucy9mbGlnaHQvYXZhaWxhYmxlZmxpZ2h0cy9hdmFpbGFibGVmbGlnaHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1oZWFkZXIge1xuICB6LWluZGV4OiAxO1xuICAmOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ2OWMzO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDQ0cHggNDRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IC01cmVtO1xuICAgIHotaW5kZXg6IC0xO1xuICB9XG59XG5cbi5jdXN0b20taGVhZGVyLW1kIHtcbiAgJjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogLTdyZW07XG4gIH1cbn1cblxuLmN1c3RvbS1ncmlkIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcbn1cblxuLmN1c3RvbS1jYXJkLWdyaWQge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgM2ZyO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY3VzdG9tLWJvZHkge1xuICB6LWluZGV4OiAyO1xufVxuXG4uY3VzdG9tLWJvcmRlciB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMC4ycHg7XG4gICZfX2Rhc2hlZCB7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZGFzaGVkO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDAuMnB4O1xuICB9XG59XG5cbi5jdXN0b20tYnV0dG9uIHtcbiAgcmlnaHQ6IC0xLjVyZW07XG4gIGJvdHRvbTogLTEuMjVyZW07XG59XHJcbiJdfQ== */", "html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.c-form__input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  height: var(--global-whitespace-xxxl);\n  width: 100%;\n  padding: var(--global-whitespace-sm);\n}\n\n.sm-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.sm-text__upper[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #9da5ab;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBR0U7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFBSjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmMtZm9ybSB7XG4gICZfX2lucHV0IHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXh4eGwpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXNtKTtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxuLnNtLXRleHQge1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gICZfX3VwcGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjOWRhNWFiO1xuICB9XG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvailableflightsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-availableflights',
                templateUrl: './availableflights.component.html',
                styleUrls: [
                    './availableflights.component.scss',
                    '../../../app/app.component.scss',
                ],
            }]
    }], function () { return [{ type: _flight_service__WEBPACK_IMPORTED_MODULE_1__["FlightService"] }]; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PageNotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    bringBackToRoute() {
        this.router.navigate(['/flight/discover']);
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 13, vars: 0, consts: [[1, "min-h-screen", "h-full", "my-auto", "flex", "flex-col", "items-center", "justify-content-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "123.848", "height", "158.909", "viewBox", "0 0 123.848 158.909"], ["id", "Group_31", "data-name", "Group 31", "transform", "translate(-127.463 -364.239)"], ["id", "Path_35", "data-name", "Path 35", "d", "M2651.43,68.821s6.436-24.533,42.279-21.274c34.3,3.119,31.056,14.537,38.39,25.94h0c3.686,5,1.354,23.245-10.674,44.541-6.033,10.681-19.888,27.005-26.113,34.89-9.759,12.362-8.552,21.214-8.552,21.214", "transform", "translate(-2523 318)", "fill", "none", "stroke", "#ffc4a1", "stroke-width", "2", "stroke-dasharray", "2 2"], ["id", "Group_15", "data-name", "Group 15", "transform", "translate(43.216 385)"], ["id", "Group_14", "data-name", "Group 14", "transform", "translate(175.427 114.405) rotate(-141)"], ["id", "Path_32", "data-name", "Path 32", "d", "M18.73.088C-.291-.307.018,4.714.018,4.714S63.16,9.44,45.234,2.21,26.422,7.8,26.422,7.8s-.754,16.344-5.133,15.968-3.623-16.99-3.623-16.99", "transform", "translate(0 25.915)", "fill", "none", "stroke", "#4469c3", "stroke-width", "2"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.428,26.134l2.146-17S.279,4.53.006.98,8.154,4.669,8.154,4.669,12.7-.575,15.347.98c.49.288.1.615,0,1.216-.4,2.422-4.836,6.938-4.836,6.938l1.121,17", "transform", "translate(14.102 0)", "fill", "none", "stroke", "#4469c3", "stroke-width", "2"], ["id", "Path_36", "data-name", "Path 36", "d", "M2686.545,186.169s-3.874,6.45,2.4,6.728,4.577,7.661,4.577,7.661-5.544,6.97-10.484,1.375-1.458-7.414-1.458-7.414l28.921-22.172", "transform", "translate(-2523 318)", "fill", "none", "stroke", "#ffc4a1", "stroke-width", "2", "stroke-dasharray", "2 2"], [1, "md:text-xl", "text-maintheme-darkblue", "pt-4", "mx-4"], [1, "btn", "bg-maintheme-darkblue", "text-maintheme-lightblue", "rounded-md", "mt-4", 2, "width", "208px", 3, "click"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Wondering how you landed here? Don't worry, fasten your seatbelts and we will get you back to the discover all our flights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageNotFoundComponent_Template_button_click_11_listener() { return ctx.bringBackToRoute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Take me back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ujPg":
/*!**********************************************************!*\
  !*** ./src/presentations/identity/register.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "l2C1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your first name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The first name must be longer than 3 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter your last name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The last name must be less than 50 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The confirmation does not match the email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please confirm your password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The confirmation does not match the password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
//custom validator om meerdere inputvelden ten opzichte van elkaar te validaten
function inputMatcher(formgroup) {
    return (c) => {
        const control = c.get(formgroup);
        console.log({ control });
        const confirmControl = c.get(`confirm${formgroup.charAt(0).toUpperCase() + formgroup.slice(1)}`);
        //indien emailinput of confirmemailinput nog niet 'aangeraakt' zijn, return null --> geen error
        if (control.pristine || confirmControl.pristine) {
            return null;
        }
        //indien email en confirmemail gelijk zijn aan elkaar (en beide voldoen aan 'email' requirement omdat email daaraan moet voldoen) --> return null = geen error
        if (control.value === confirmControl.value) {
            return null;
        }
        //anders: return object met true --> error
        return { 'match': true };
    };
}
class RegisterComponent {
    constructor(fb, router, route, userService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.validationMessage = {
            emailMessage: "",
            passwordMessage: ''
        };
        this.validationMessages = {
            email: {
                required: 'Please enter your email address',
                email: 'Please enter a valid email address',
            },
            password: {
                minlength: 'Please enter a valid password. It has to be at least 8 characters.'
            }
        };
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)]],
            emailGroup: this.fb.group({
                email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }, { validator: inputMatcher('email') }),
            passwordGroup: this.fb.group({
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
                confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            }, { validator: inputMatcher('password') }
            // {validator: emailMatcher}
            ),
        });
        const emailControl = this.registerForm.get('emailGroup.email');
        // emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));
        //errormessage voor emailvalidation pas displayen nadat user 1 seconde niet getypt heeft
        emailControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => this.setMessage("email", emailControl));
        const passwordControl = this.registerForm.get('passwordGroup.password');
        // emailControl.valueChanges.subscribe(value => this.setMessage(emailControl));
        //errormessage voor emailvalidation pas displayen nadat user 1 seconde niet getypt heeft
        passwordControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(value => this.setMessage("password", passwordControl));
        //this.initializeUser();
    }
    populateTestData() {
        //.setValue om alle inputs in te vullen, .patchValue om een deel van de inputs in te vullen
        this.registerForm.patchValue({
            firstName: "Alex",
            lastName: "Christiaens",
            emailGroup: {
                email: "alexandra.christiaens@student.howest.be",
                confirmEmail: "alexandra.christiaens@student.howest.be",
            },
            passwordGroup: {
                password: 'Azerty*2020',
                confirmPassword: 'Azerty*2020'
            }
        });
    }
    register() {
        console.log(this.registerForm);
        console.log('Saved: ' + JSON.stringify(this.registerForm.value));
        if (this.registerForm.valid) {
            console.log({ "registerformdirty": this.registerForm.dirty });
            if (this.registerForm.dirty) {
                //const u= {...this.user};
                this.user = this.initializeUser();
                console.log({ user: this.user });
                this.user.firstName = this.registerForm.get('firstName').value;
                this.user.lastName = this.registerForm.get('lastName').value;
                this.user.email = this.registerForm.get('emailGroup.email').value;
                this.user.password = this.registerForm.get('passwordGroup.password').value;
                console.log({ user: this.user });
                var result = this.userService.registerUser(this.user).subscribe({
                    next: () => this.onSaveComplete(),
                    error: err => { this.errorMessage = err; this.validationMessage['emailMessage'] = err; }
                });
                ;
                console.log({ result });
                console.log({ error: this.errorMessage });
            }
            else {
                this.registerForm.reset();
                // this.router.navigate('/login')
                console.log("dashboard laden");
            }
        }
    }
    setMessage(formgroup, c) {
        this.validationMessage.emailMessage = '';
        this.validationMessage.passwordMessage = '';
        console.log({ formgroup });
        console.log({ "control": c });
        if (c.touched || c.dirty && c.errors) {
            console.log({ "errors": c.errors });
            this.validationMessage[`${formgroup}Message`] = Object.keys(c.errors).map(key => this.validationMessages[formgroup][key]).join('');
            console.log({ "emailMessage": this.validationMessage[`${formgroup}Message`] });
        }
    }
    initializeUser() {
        return { firstName: '',
            lastName: '',
            email: '',
            password: '' };
    }
    onSaveComplete() {
        // Reset the form to clear the flags
        this.registerForm.reset();
        console.log('geregistreerd');
        //this.router.navigate(['/products']);
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 102, vars: 31, consts: [[1, "flex", "justify-around", "px-20", "align-items-center", "h-screen"], [1, "flex", "align-items-center", "justify-center", "col-md-5"], ["xmlns", "http://www.w3.org/2000/svg", "width", "210.169", "height", "125.822", "viewBox", "0 0 210.169 125.822", 1, "my-auto"], ["id", "Group_55", "data-name", "Group 55", "transform", "translate(-82.036 -78.896)"], ["id", "Group_15", "data-name", "Group 15", "transform", "translate(-52.783 35)"], ["id", "Group_14", "data-name", "Group 14", "transform", "translate(175.427 114.405) rotate(-141)"], ["id", "Path_32", "data-name", "Path 32", "d", "M18.73.088C-.291-.307.018,4.714.018,4.714S63.16,9.44,45.234,2.21,26.422,7.8,26.422,7.8s-.754,16.344-5.133,15.968-3.623-16.99-3.623-16.99", "transform", "translate(0 25.915)", "fill", "none", "stroke", "#4469c3", "stroke-width", "2"], ["id", "Path_33", "data-name", "Path 33", "d", "M3.428,26.134l2.146-17S.279,4.53.006.98,8.154,4.669,8.154,4.669,12.7-.575,15.347.98c.49.288.1.615,0,1.216-.4,2.422-4.836,6.938-4.836,6.938l1.121,17", "transform", "translate(14.102 0)", "fill", "none", "stroke", "#4469c3", "stroke-width", "2"], ["id", "Path_34", "data-name", "Path 34", "d", "M585,160.188s-60.7,102.794,71.045,48.9,77.075-82.076,77.075-82.076-50.289-30.525-57.975,48.835,104.681,33.241,104.681,33.241", "transform", "translate(-488 -21)", "fill", "none", "stroke", "#ffc4a1", "stroke-width", "2", "stroke-dasharray", "2"], [1, "my-auto", "col-md-4"], [1, "text-center", "my-3", "text-3xl", "font-medium"], ["novalidate", "", 1, "c-form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row", "mb-4", "border-b-0.5", "hover:border-b-2", "border-maintheme-grey"], [1, "m-2", "flex", "align-items-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "18", "viewBox", "0 0 18 18", 1, ""], ["id", "XMLID_440_", "d", "M9,0a9,9,0,1,0,3.637,17.235.615.615,0,1,0-.5-1.126,7.759,7.759,0,1,1,4.26-4.732c-.529,1.648-1.4,2.157-1.821,2.091-.406-.064-.437-.67-.437-.855V5.3a.615.615,0,0,0-1.231,0v.362a5.14,5.14,0,1,0,0,6.668v.279a1.9,1.9,0,0,0,1.478,2.071c1.062.166,2.46-.675,3.184-2.931A9.006,9.006,0,0,0,9,0ZM9,12.909A3.909,3.909,0,1,1,12.91,9,3.914,3.914,0,0,1,9,12.909Z", "transform", "translate(-0.001)", "fill", "#ffc4a1"], [1, "col-md", "border-l-0.5", "border-maintheme-grey"], ["for", "firstNameId", 1, "col-form-label", "text-maintheme-grey", "uppercase", "hover:font-bold"], [1, ""], ["id", "firstNameId", "type", "text", "placeholder", "First Name (required)", "formControlName", "firstName", 1, "c-form__input", "bg-maintheme-lightblue", "hover:border-maintheme-darkblue", "border-2", "border-transparent", 3, "ngClass"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "lastNameId", 1, "col-form-label", "text-maintheme-grey", "uppercase"], ["id", "lastNameId", "type", "text", "placeholder", "Last Name (required)", "formControlName", "lastName", 1, "c-form__input", "bg-maintheme-lightblue", 3, "ngClass"], ["formGroupName", "emailGroup"], [1, "form-group", "row", "mb-4", "border-b-0.5", "border-maintheme-grey"], ["for", "emailId", 1, "col-form-label", "text-maintheme-grey", "uppercase"], ["id", "emailId", "type", "email", "placeholder", "Email (required)", "required", "", "email", "", "formControlName", "email", 1, "c-form__input", "bg-maintheme-lightblue", 3, "ngClass"], ["for", "confirmEmailId", 1, "col-form-label", "text-maintheme-grey", "uppercase"], ["id", "confirmEmailId", "type", "email", "placeholder", "Confirm Email (required)", "formControlName", "confirmEmail", 1, "c-form__input", "bg-maintheme-lightblue", 3, "ngClass"], ["formGroupName", "passwordGroup"], ["xmlns", "http://www.w3.org/2000/svg", "width", "18", "height", "24", "viewBox", "0 0 18 24"], ["id", "closed", "transform", "translate(-64)"], ["id", "Group_13", "data-name", "Group 13", "transform", "translate(64)"], ["id", "Group_12", "data-name", "Group 12"], ["id", "Path_30", "data-name", "Path 30", "d", "M214.151,280.941l-.315,2.836a.5.5,0,0,0,.5.555h2a.5.5,0,0,0,.5-.555l-.315-2.836a1.978,1.978,0,0,0,.818-1.608,2,2,0,0,0-4,0A1.978,1.978,0,0,0,214.151,280.941Zm1.182-2.608a1,1,0,0,1,.432,1.9.5.5,0,0,0-.279.505l.289,2.6h-.883l.289-2.6a.5.5,0,0,0-.279-.505,1,1,0,0,1,.432-1.9Z", "transform", "translate(-206.333 -264.333)", "fill", "#ffc4a1"], ["id", "Path_31", "data-name", "Path 31", "d", "M81.5,9H80V7A7,7,0,0,0,66,7V9H64.5a.5.5,0,0,0-.5.5V22a2,2,0,0,0,2,2H80a2,2,0,0,0,2-2V9.5A.5.5,0,0,0,81.5,9ZM67,7A6,6,0,0,1,79,7V9H78V7A5,5,0,0,0,68,7V9H67ZM77,7V9H69V7a4,4,0,0,1,8,0Zm4,15a1,1,0,0,1-1,1H66a1,1,0,0,1-1-1V10H81Z", "transform", "translate(-64)", "fill", "#ffc4a1"], ["for", "passwordId", 1, "col-form-label", "text-maintheme-grey", "uppercase"], ["id", "passwordId", "type", "password", "placeholder", "Password (required)", "required", "", "password", "", "formControlName", "password", 1, "c-form__input", "bg-maintheme-lightblue", 3, "ngClass"], [1, "form-group", "row", "mb-1", "border-b-0.5", "border-maintheme-grey"], ["for", "confirmPasswordId", 1, "col-form-label", "text-maintheme-grey", "uppercase"], ["id", "confirmPasswordId", "type", "password", "placeholder", "Confirm Password (required)", "formControlName", "confirmPassword", 1, "c-form__input", "bg-maintheme-lightblue", 3, "ngClass"], [1, "form-group", "row", "text-maintheme-darkblue", "underline", "flex", "justify-end"], ["href", ""], [1, "form-group", "row", "m-4"], [1, "offset-md-2", "col-md-4", "flex", "flex-row", "justify-center"], ["type", "submit", 1, "btn", "bg-maintheme-darkblue", "text-maintheme-lightblue", "rounded-md", 2, "width", "80px", 3, "title", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sign Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_12_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_span_23_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_span_24_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_span_35_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_span_36_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Confirm Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, RegisterComponent_span_59_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, RegisterComponent_span_60_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "g", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "g", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, RegisterComponent_span_91_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, RegisterComponent_span_92_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "I already have an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_100_listener() { return ctx.populateTestData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Test Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, (ctx.registerForm.get("firstName").touched || ctx.registerForm.get("firstName").dirty) && !ctx.registerForm.get("firstName").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("firstName").errors == null ? null : ctx.registerForm.get("firstName").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("firstName").errors == null ? null : ctx.registerForm.get("firstName").errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, (ctx.registerForm.get("lastName").touched || ctx.registerForm.get("lastName").dirty) && !ctx.registerForm.get("lastName").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("lastName").errors == null ? null : ctx.registerForm.get("lastName").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("lastName").errors == null ? null : ctx.registerForm.get("lastName").errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.validationMessage.emailMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.emailMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.registerForm.get("emailGroup").errors || (ctx.registerForm.get("emailGroup.confirmEmail").touched || ctx.registerForm.get("emailGroup.confirmEmail").dirty) && !ctx.registerForm.get("emailGroup.confirmEmail").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("emailGroup.confirmEmail").errors == null ? null : ctx.registerForm.get("emailGroup.confirmEmail").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("emailGroup").errors == null ? null : ctx.registerForm.get("emailGroup").errors.match);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.validationMessage.passwordMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.validationMessage.passwordMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.registerForm.get("passwordGroup").errors || (ctx.registerForm.get("passwordGroup.confirmPassword").touched || ctx.registerForm.get("passwordGroup.confirmPassword").dirty) && !ctx.registerForm.get("passwordGroup.confirmPassword").valid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwordGroup.confirmPassword").errors == null ? null : ctx.registerForm.get("passwordGroup.confirmPassword").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("passwordGroup").errors == null ? null : ctx.registerForm.get("passwordGroup").errors.match);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.registerForm.valid ? "Save your entered data" : "Disabled until the form data is valid")("disabled", !ctx.registerForm.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]], styles: [".c-form__input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  height: var(--global-whitespace-xxxl);\n  width: 100%;\n  padding: var(--global-whitespace-sm);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcmVzZW50YXRpb25zL2lkZW50aXR5L3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FBQUoiLCJmaWxlIjoic3JjL3ByZXNlbnRhdGlvbnMvaWRlbnRpdHkvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYy1mb3Jte1xuICAmX19pbnB1dHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBoZWlnaHQ6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXh4eGwpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IHZhcigtLWdsb2JhbC13aGl0ZXNwYWNlLXNtKTtcbiAgICAvLyBib3JkZXI6IG5vbmU7XG4gIH1cbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../presentations/flight/discover/discover.component */ "jJNn");
/* harmony import */ var _presentations_identity_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../presentations/identity/register.component */ "ujPg");
/* harmony import */ var src_presentations_flight_availableflights_availableflights_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/presentations/flight/availableflights/availableflights.component */ "oq2u");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");








const routes = [
    { path: '', component: _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_2__["DiscoverComponent"], pathMatch: 'full' },
    {
        path: 'identity',
        children: [
            {
                path: 'register',
                component: _presentations_identity_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
            },
        ],
    },
    {
        path: 'flight',
        children: [
            {
                path: 'discover',
                component: _presentations_flight_discover_discover_component__WEBPACK_IMPORTED_MODULE_2__["DiscoverComponent"],
            },
            {
                path: 'availableflights',
                component: src_presentations_flight_availableflights_availableflights_component__WEBPACK_IMPORTED_MODULE_4__["AvailableflightsComponent"],
            },
        ],
    },
    //path with children path:'', component: Comp, children: [{},{}]
    // { path: 'second-component', component: SecondComponent },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map