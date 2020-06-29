(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/login/login.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/login/login.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\n          <div class=\"btn-wrapper text-center\">\n            <a href=\"{{redirectURL}}\" class=\"btn btn-neutral btn-icon mr-4\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/facebook.svg\" ></span>\n              <span class=\"btn-inner--text\">Facebook</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign in with credentials</small>\n          </div>\n          <form role=\"form\" (ngSubmit)=\"login(formLogin)\"  #formLogin=\"ngForm\">\n            <div class=\"form-group mb-3\">\n              <div *ngIf=\"error\" role=\"alert\" class=\"alert alert-danger alert-dismissible\">\n                  <span class=\" alert-icon\">\n                      <i class=\"fa fa-exclamation-triangle\"></i>\n                    </span>\n                <span class=\" alert-text\">{{this.textError}}</span>\n              </div>\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Email\" name=\"email\" type=\"email\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" ngModel>\n              </div>\n            </div>\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                <span class=\"text-muted\">Remember me</span>\n              </label>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" [disabled]=\"!formLogin.form.valid\" value=\"login\" class=\"btn btn-primary my-4\">Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n\n        <div class=\"col-6 text-right\">\n          <a [routerLink]=\"'/auth/register'\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n\n        <div class=\"col-6 text-left\">\n          <a [routerLink]=\"'/auth/recover/email'\" class=\"text-light\"><small>Forgot password?</small></a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/register/register.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/register/register.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\n          <div class=\"text-center\">\n            <a href=\"{{redirectURL}}\" class=\"btn btn-neutral btn-icon mr-4\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/facebook.svg\" ></span>\n\n              <span class=\"btn-inner--text\">Facebook</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form role=\"form\" (ngSubmit)=\"register(formLogin)\"  #formLogin=\"ngForm\">\n            <div class=\"form-group\">\n              <div *ngIf=\"error\" role=\"alert\" class=\"alert alert-danger alert-dismissible\">\n                  <span class=\" alert-icon\">\n                      <i class=\"fa fa-exclamation-triangle\"></i>\n                    </span>\n                <span class=\" alert-text\">{{this.errorText}}</span>\n              </div>\n              <alert *ngIf=\"success\" class=\"alert-dismissible\">\n                <div  class=\"alert alert-success alert-dismissible\" role=\"alert\">\n                  <button aria-label=\"Close\" (click)=\"closeSuccess()\" class=\"close\" type=\"button\">\n                    <span aria-hidden=\"true\">×</span>\n                    <span class=\"sr-only\">Close</span>\n                  </button><span class=\" success-icon\">\n                      <i class=\"ni ni-like-2\"></i>\n                    </span>\n                  <span class=\" alert-text\">{{msg}}</span>\n                </div>\n              </alert>\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"username\" placeholder=\"Username\" type=\"text\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" type=\"text\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\" type=\"text\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"email\" placeholder=\"Email\" type=\"email\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"password\" placeholder=\"Password\" type=\"password\" required ngModel>\n              </div>\n            </div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\" name=\"accepted\" [(ngModel)]=\"accepted\" >\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=\"!accepted\" [ngClass]=\"{'disabled': !accepted}\" >Create account</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6\">\n          <!--          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>-->\n        </div>\n        <div class=\"col-6 text-right\">\n          <a [routerLink]=\"'/auth/login'\" class=\"text-light\"><small>Already a member ?</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Enter the security code</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-2\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-1\"><small>Please verify that you have received an email with your code. This is made up of 6 digits.</small></div>\n\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n\n          <form role=\"form\" [formGroup]=\"createReset\">\n            <div class=\"form-group mb-3\">\n              <div *ngIf=\"error\" role=\"alert\" class=\"alert alert-danger alert-dismissible\">\n                  <span class=\" alert-icon\">\n                      <i class=\"fa fa-exclamation-triangle\"></i>\n                    </span>\n                <span class=\" alert-text\">{{this.msg}}</span>\n                <a  class=\"col-4 text-underline\" style=\"padding-top: 5px\" [routerLink]=\"['/auth/login']\">\n                  login\n                </a>\n              </div>\n              <alert *ngIf=\"success\" class=\"alert-dismissible\">\n                <div  class=\"alert alert-success alert-dismissible\" role=\"alert\">\n                  <button aria-label=\"Close\" (click)=\"closeSuccess()\" class=\"close\" type=\"button\">\n                    <span aria-hidden=\"true\">×</span>\n                    <span class=\"sr-only\">Close</span>\n                  </button><span class=\" success-icon\">\n                      <i class=\"ni ni-like-2\"></i>\n                    </span>\n                  <span class=\" alert-text\">{{msgSucess}}</span>\n                </div>\n              </alert>\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-folder-17\"></i></span>\n\n                </div>\n                <input class=\"form-control\" formControlName= \"token\" placeholder=\"Code\" name=\"code\"  required >\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input formControlName= \"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" type=\"email\" required>\n              </div>\n            </div>\n              <div class=\"form-group\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                  </div>\n                  <input class=\"form-control\" formControlName= \"password\" placeholder=\"Password\" name=\"password\" type=\"password\" >\n                </div>\n              </div>\n\n\n            <div class=\"text-center\">\n              <button type=\"submit\" (click)=\"reset()\" value=\"login\" class=\"btn btn-primary my-4\">Continue</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n\n        <div class=\"col-6 text-right\">\n          <a [routerLink]=\"'/auth/register'\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n\n          <p class=\"text-lead text-light\">Please enter your email address to find your account.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n\n\n\n        <div class=\"card-body px-lg-5 py-lg-5\">\n\n          <form role=\"form\" [formGroup]=\"createReset\">\n            <div class=\"form-group mb-3\">\n              <div *ngIf=\"error\" role=\"alert\" class=\"alert alert-danger alert-dismissible\">\n                  <span class=\" alert-icon\">\n                      <i class=\"fa fa-exclamation-triangle\"></i>\n                    </span>\n                <span class=\" alert-text\">{{this.textError}}</span>\n              </div>\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input formControlName= \"email\" class=\"form-control\" placeholder=\"Email\" name=\"email\" type=\"email\" required >\n              </div>\n            </div>\n\n            <div class=\"text-center\">\n              <button type=\"submit\"  (click)=\"reset()\" value=\"login\" class=\"btn btn-primary my-4\">Search</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n\n        <div class=\"col-6 text-right\">\n          <a [routerLink]=\"'/auth/register'\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _pages_fb_auth_fb_auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/fb-auth/fb-auth.component */ "./src/app/layouts/auth-layout/pages/fb-auth/fb-auth.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/layouts/auth-layout/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/layouts/auth-layout/pages/register/register.component.ts");
/* harmony import */ var _pages_reset_passwd_reset_passwd_email_reset_passwd_email_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/reset-passwd/reset-passwd-email/reset-passwd-email.component */ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.ts");
/* harmony import */ var _pages_reset_passwd_reset_passwd_code_reset_passwd_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/reset-passwd/reset-passwd-code/reset-passwd-code.component */ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.ts");











var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _pages_fb_auth_fb_auth_component__WEBPACK_IMPORTED_MODULE_6__["FbAuthComponent"],
                _pages_reset_passwd_reset_passwd_email_reset_passwd_email_component__WEBPACK_IMPORTED_MODULE_9__["ResetPasswdEmailComponent"],
                _pages_reset_passwd_reset_passwd_code_reset_passwd_code_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswdCodeComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/layouts/auth-layout/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/layouts/auth-layout/pages/register/register.component.ts");
/* harmony import */ var _pages_reset_passwd_reset_passwd_email_reset_passwd_email_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/reset-passwd/reset-passwd-email/reset-passwd-email.component */ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.ts");
/* harmony import */ var _pages_reset_passwd_reset_passwd_code_reset_passwd_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reset-passwd/reset-passwd-code/reset-passwd-code.component */ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.ts");





var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'recover/email', component: _pages_reset_passwd_reset_passwd_email_reset_passwd_email_component__WEBPACK_IMPORTED_MODULE_3__["ResetPasswdEmailComponent"] },
    { path: 'recover/code', component: _pages_reset_passwd_reset_passwd_code_reset_passwd_code_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswdCodeComponent"] }
];


/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/login/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/login/login.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _globals_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_globals/global-variables */ "./src/app/_globals/global-variables.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router, route) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.route = route;
        this.error = false;
        this.textError = '';
        this.redirectURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _globals_global_variables__WEBPACK_IMPORTED_MODULE_4__["REDIRECT"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        // @ts-ignore
        console.log('login button clicked');
        if (!this.authenticationService.isLogged()) {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
            this.user.email = form.controls.email.value;
            this.user.password = form.controls.password.value;
            console.log(this.user);
            this.authenticationService.login(this.user).subscribe(function (result) {
                _this.error = false;
                _this.authenticationService.savingToken(result);
                _this.authenticationService.savingUser(result);
                //this.router.navigate(['/dashboard']);
                _this.router.navigateByUrl(_this.returnUrl);
            }, function (error) {
                _this.error = true;
                if (error.status === 406) {
                    _this.textError = 'Invalid email or password';
                }
                else if (error.status === 401) {
                    _this.textError = 'Incorrect password or email';
                }
                else {
                    _this.textError = 'Error';
                }
            });
        }
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/layouts/auth-layout/pages/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/register/register.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/register/register.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/register/register.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/register/register.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _globals_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_globals/global-variables */ "./src/app/_globals/global-variables.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.redirectURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _globals_global_variables__WEBPACK_IMPORTED_MODULE_4__["REDIRECT"];
        this.errorText = '';
        this.error = false;
        this.accepted = false;
        this.success = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerFacebook = function () {
        console.log('helloo');
    };
    RegisterComponent.prototype.register = function (form) {
        var _this = this;
        console.log('register button clicked');
        if (!this.authenticationService.isLogged()) {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
            this.user.email = form.controls.email.value;
            this.user.password = form.controls.password.value;
            this.user.username = form.controls.username.value;
            this.user.first_name = form.controls.firstName.value;
            this.user.last_name = form.controls.lastName.value;
            console.log(this.user);
            this.authenticationService.signup(this.user).subscribe(function (result) {
                _this.error = false;
                _this.success = true;
                _this.msg = result.body.message;
                console.log(result);
                //this.authenticationService.savingToken(result);
                //this.authenticationService.savingUser(result);
                //this.router.navigate(['/dashboard']);
            }, function (error) {
                if (error.status === 406) {
                    _this.error = true;
                    _this.errorText = error.error;
                }
            });
        }
    };
    RegisterComponent.prototype.closeSuccess = function () {
        this.success = false;
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/register/register.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/layouts/auth-layout/pages/register/register.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvcmVzZXQtcGFzc3dkL3Jlc2V0LXBhc3N3ZC1jb2RlL3Jlc2V0LXBhc3N3ZC1jb2RlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ResetPasswdCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswdCodeComponent", function() { return ResetPasswdCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_services/crud.service */ "./src/app/_services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../_globals/global-variables */ "./src/app/_globals/global-variables.ts");






var ResetPasswdCodeComponent = /** @class */ (function () {
    function ResetPasswdCodeComponent(formBuilder, crudService, router) {
        this.formBuilder = formBuilder;
        this.crudService = crudService;
        this.router = router;
        this.error = false;
        this.success = false;
    }
    ResetPasswdCodeComponent.prototype.ngOnInit = function () {
        this.createReset = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            token: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ResetPasswdCodeComponent.prototype.reset = function () {
        var _this = this;
        if (this.createReset.invalid) {
            this.error = true;
            this.msg = 'Fields are required';
            return;
        }
        this.crudService.post(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["RESETCODE"], this.createReset.value).subscribe(function (response) {
            console.log(response);
            _this.success = true;
            _this.msgSucess = 'Password Reset successfully Please login';
            //this.router.navigate(['auth/login']);
        }, (function (error) {
            console.log(error);
            _this.error = true;
            _this.msg = error.error.error;
        }));
    };
    ResetPasswdCodeComponent.prototype.closeSuccess = function () {
        this.success = false;
    };
    ResetPasswdCodeComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ResetPasswdCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-passwd-code',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reset-passwd-code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reset-passwd-code.component.scss */ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-code/reset-passwd-code.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ResetPasswdCodeComponent);
    return ResetPasswdCodeComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvcGFnZXMvcmVzZXQtcGFzc3dkL3Jlc2V0LXBhc3N3ZC1lbWFpbC9yZXNldC1wYXNzd2QtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ResetPasswdEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswdEmailComponent", function() { return ResetPasswdEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../_services/crud.service */ "./src/app/_services/crud.service.ts");
/* harmony import */ var _globals_global_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_globals/global-variables */ "./src/app/_globals/global-variables.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var ResetPasswdEmailComponent = /** @class */ (function () {
    function ResetPasswdEmailComponent(formBuilder, crudService, router) {
        this.formBuilder = formBuilder;
        this.crudService = crudService;
        this.router = router;
        this.error = false;
    }
    ResetPasswdEmailComponent.prototype.ngOnInit = function () {
        this.createReset = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ResetPasswdEmailComponent.prototype.reset = function () {
        var _this = this;
        if (this.createReset.invalid) {
            this.error = true;
            this.textError = 'Fields are required';
            return;
        }
        this.crudService.post(_globals_global_variables__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_4__["RESET"], this.createReset.value).subscribe(function (response) {
            _this.router.navigate(['auth/recover/code']);
        }, (function (error) { return console.log(error); }));
    };
    ResetPasswdEmailComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ResetPasswdEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reset-passwd-email',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./reset-passwd-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./reset-passwd-email.component.scss */ "./src/app/layouts/auth-layout/pages/reset-passwd/reset-passwd-email/reset-passwd-email.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ResetPasswdEmailComponent);
    return ResetPasswdEmailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map