function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-login/admin-login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-login/admin-login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminLoginAdminLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger py-7 \">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome Admin!</h1>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small>Enter your Credentials</small>\r\n          </div>\r\n          <form role=\"form\" (ngSubmit)=\"login(formLogin)\"  #formLogin=\"ngForm\">\r\n            <div class=\"form-group mb-3\">\r\n              <alert *ngIf=\"error\" class=\"alert-dismissible\">\r\n                <div role=\"alert\" class=\"alert alert-danger alert-dismissible\">\r\n                  <button aria-label=\"Close\" class=\"close\" type=\"button\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                  </button><span class=\" alert-icon\">\r\n                      <i class=\"fa fa-exclamation-triangle\"></i>\r\n                    </span>\r\n                  <span class=\" alert-text\">{{this.textError}}</span>\r\n                </div>\r\n              </alert>\r\n\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Admin Email\" name=\"email\" type=\"email\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Admin Password\" name=\"password\" type=\"password\" ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                <span class=\"text-muted\">Remember me</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" [disabled]=\"!formLogin.form.valid\" value=\"login\"class=\"btn btn-primary my-4\">Sign in</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\r\n          <div class=\"btn-wrapper text-center\">\r\n            <a href=\"{{redirectURL}}\" class=\"btn btn-neutral btn-icon mr-4\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/facebook.svg\" ></span>\r\n              <span class=\"btn-inner--text\">Facebook</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small>Or sign in with credentials</small>\r\n          </div>\r\n          <form role=\"form\" (ngSubmit)=\"login(formLogin)\"  #formLogin=\"ngForm\">\r\n            <div class=\"form-group mb-3\">\r\n              <alert *ngIf=\"error\" class=\"alert-dismissible\">\r\n                <div role=\"alert\" class=\"alert alert-danger alert-dismissible\">\r\n                  <button aria-label=\"Close\" class=\"close\" type=\"button\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                  </button><span class=\" alert-icon\">\r\n                      <i class=\"fa fa-exclamation-triangle\"></i>\r\n                    </span>\r\n                  <span class=\" alert-text\">{{this.textError}}</span>\r\n                </div>\r\n              </alert>\r\n\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Email\" name=\"email\" type=\"email\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                <span class=\"text-muted\">Remember me</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" [disabled]=\"!formLogin.form.valid\" value=\"login\"class=\"btn btn-primary my-4\">Sign in</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n<!--          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>-->\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          <a [routerLink]=\"'/auth/register'\" class=\"text-light\"><small>Create new account</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <!-- Table -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6 col-md-8\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\r\n          <div class=\"text-center\">\r\n            <a href=\"{{redirectURL}}\" class=\"btn btn-neutral btn-icon mr-4\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/facebook.svg\" ></span>\r\n\r\n              <span class=\"btn-inner--text\">Facebook</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small>Or sign up with credentials</small>\r\n          </div>\r\n          <form role=\"form\" (ngSubmit)=\"register(formLogin)\"  #formLogin=\"ngForm\">\r\n            <div class=\"form-group\">\r\n              <alert *ngIf=\"error\" class=\"alert-dismissible\">\r\n                <div role=\"alert\" class=\"alert alert-danger alert-dismissible\">\r\n                  <button aria-label=\"Close\" class=\"close\" type=\"button\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                    <span class=\"sr-only\">Close</span>\r\n                  </button><span class=\" alert-icon\">\r\n                      <i class=\"fa fa-exclamation-triangle\"></i>\r\n                    </span>\r\n                  <span class=\" alert-text\">Existent email or invalid password</span>\r\n                </div>\r\n              </alert>\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" name=\"username\" placeholder=\"Username\" type=\"text\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" type=\"text\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\" type=\"text\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" name=\"email\" placeholder=\"Email\" type=\"email\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" name=\"password\" placeholder=\"Password\" type=\"password\" required ngModel>\r\n              </div>\r\n            </div>\r\n            <div class=\"row my-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\" name=\"accepted\" [(ngModel)]=\"accepted\" >\r\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=\"!accepted\" [ngClass]=\"{'disabled': !accepted}\" >Create account</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n          <!--          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>-->\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          <a [routerLink]=\"'/auth/login'\" class=\"text-light\"><small>Already a member ?</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layouts/auth-layout/auth-layout.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
    \***********************************************************/

  /*! exports provided: AuthLayoutModule */

  /***/
  function srcAppLayoutsAuthLayoutAuthLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function () {
      return AuthLayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth-layout.routing */
    "./src/app/layouts/auth-layout/auth-layout.routing.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pages/register/register.component */
    "./src/app/pages/register/register.component.ts");
    /* harmony import */


    var _pages_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pages/admin-login/admin-login.component */
    "./src/app/pages/admin-login/admin-login.component.ts");

    var AuthLayoutModule = function AuthLayoutModule() {
      _classCallCheck(this, AuthLayoutModule);
    };

    AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"] // NgbModule
      ],
      declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _pages_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_8__["AdminLoginComponent"]]
    })], AuthLayoutModule);
    /***/
  },

  /***/
  "./src/app/layouts/auth-layout/auth-layout.routing.ts":
  /*!************************************************************!*\
    !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
    \************************************************************/

  /*! exports provided: AuthLayoutRoutes */

  /***/
  function srcAppLayoutsAuthLayoutAuthLayoutRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function () {
      return AuthLayoutRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pages/register/register.component */
    "./src/app/pages/register/register.component.ts");
    /* harmony import */


    var _pages_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/admin-login/admin-login.component */
    "./src/app/pages/admin-login/admin-login.component.ts");

    var AuthLayoutRoutes = [{
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: 'register',
      component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }, {
      path: 'admin',
      component: _pages_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_3__["AdminLoginComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/pages/admin-login/admin-login.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/admin-login/admin-login.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminLoginAdminLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluLWxvZ2luL2FkbWluLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin-login/admin-login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/admin-login/admin-login.component.ts ***!
    \************************************************************/

  /*! exports provided: AdminLoginComponent */

  /***/
  function srcAppPagesAdminLoginAdminLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function () {
      return AdminLoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _models_enum_Role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_models/enum/Role */
    "./src/app/_models/enum/Role.ts");

    var AdminLoginComponent =
    /*#__PURE__*/
    function () {
      function AdminLoginComponent(authenticationService, router) {
        _classCallCheck(this, AdminLoginComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.error = false;
        this.textError = '';
      }

      _createClass(AdminLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "login",
        value: function login(form) {
          var _this = this;

          // @ts-ignore
          console.log('login button clicked');
          this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
          this.user.email = form.controls.email.value;
          this.user.password = form.controls.password.value;
          console.log(this.user);
          this.authenticationService.login(this.user).subscribe(function (result) {
            var _a, _b;

            if (((_b = JSON.parse((_a = result.body) === null || _a === void 0 ? void 0 : _a.user)) === null || _b === void 0 ? void 0 : _b.role) !== _models_enum_Role__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin) {
              _this.error = true;
              _this.textError = 'User is not admin';
            } else {
              _this.authenticationService.savingToken(result);

              _this.authenticationService.savingUser(result);

              _this.router.navigate(['/admin']);
            }
          }, function (error) {
            _this.error = true;

            if (error.status === 406) {
              _this.textError = 'Invalid email or password';
            } else if (error.status === 401) {
              _this.textError = 'Incorrect password or email';
            } else {
              _this.textError = 'Error';
            }
          });
        }
      }]);

      return AdminLoginComponent;
    }();

    AdminLoginComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AdminLoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin-login/admin-login.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-login.component.css */
      "./src/app/pages/admin-login/admin-login.component.css")).default]
    })], AdminLoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authenticationService, router) {
        _classCallCheck(this, LoginComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.error = false;
        this.textError = '';
        this.redirectURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + _globals_global_variables__WEBPACK_IMPORTED_MODULE_6__["REDIRECT"];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "login",
        value: function login(form) {
          var _this2 = this;

          // @ts-ignore
          console.log('login button clicked');

          if (!this.authenticationService.isLogged()) {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
            this.user.email = form.controls.email.value;
            this.user.password = form.controls.password.value;
            console.log(this.user);
            this.authenticationService.login(this.user).subscribe(function (result) {
              _this2.authenticationService.savingToken(result);

              _this2.authenticationService.savingUser(result);

              _this2.router.navigate(['/dashboard']);
            }, function (error) {
              _this2.error = true;

              if (error.status === 406) {
                _this2.textError = 'Invalid email or password';
              } else if (error.status === 401) {
                _this2.textError = 'Incorrect password or email';
              } else {
                _this2.textError = 'Error';
              }
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/pages/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/pages/register/register.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppPagesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony import */


    var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/_models/user */
    "./src/app/_models/user.ts");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authenticationService, router) {
        _classCallCheck(this, RegisterComponent);

        this.authenticationService = authenticationService;
        this.router = router;
        this.redirectURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["REDIRECT"];
        this.error = false;
        this.accepted = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerFacebook",
        value: function registerFacebook() {
          console.log("helloo");
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this3 = this;

          console.log('register button clicked');

          if (!this.authenticationService.isLogged()) {
            this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
            this.user.email = form.controls.email.value;
            this.user.password = form.controls.password.value;
            this.user.username = form.controls.username.value;
            this.user.first_name = form.controls.firstName.value;
            this.user.last_name = form.controls.lastName.value;
            console.log(this.user);
            this.authenticationService.signup(this.user).subscribe(function (result) {
              console.log('currently signing up...');

              _this3.authenticationService.savingToken(result);

              _this3.authenticationService.savingUser(result);

              _this3.router.navigate(['/dashboard']);
            }, function (error) {
              if (error.status === 406) {
                _this3.error = true;
              }
            });
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/pages/register/register.component.scss")).default]
    })], RegisterComponent);
    /***/
  }
}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module-es5.js.map