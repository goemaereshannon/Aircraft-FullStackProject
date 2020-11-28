(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/shannon/3MCT/Sem1/Full Stack /Aircraft-FullStackProject/app-aircraft-frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "vn9S");
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"]], styles: [".c-form__input[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  outline: none;\n  height: var(--global-whitespace-xxxl);\n  width: 100%;\n  padding: var(--global-whitespace-sm);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmMtZm9ybXtcbiAgJl9faW5wdXR7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgaGVpZ2h0OiB2YXIoLS1nbG9iYWwtd2hpdGVzcGFjZS14eHhsKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiB2YXIoLS1nbG9iYWwtd2hpdGVzcGFjZS1zbSk7XG4gICAgLy8gYm9yZGVyOiBub25lO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }]; }, null); })();


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
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ "1W4x");



class AppComponent {
    constructor() {
        this.title = 'app-aircraft-frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "bg-maintheme-lightblue", "font-sans-Roboto"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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




const routes = [
// { path: 'first-component', component: FirstComponent },
// { path: 'second-component', component: SecondComponent },
// { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
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
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vn9S":
/*!******************************************!*\
  !*** ./src/app/register/user.service.ts ***!
  \******************************************/
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