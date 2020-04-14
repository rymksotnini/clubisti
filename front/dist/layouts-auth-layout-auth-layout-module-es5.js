function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"], {
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


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-5 col-md-7\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\n          <div class=\"btn-wrapper text-center\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/github.svg\"></span>\n              <span class=\"btn-inner--text\">Github</span>\n            </a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign in with credentials</small>\n          </div>\n          <form role=\"form\" (ngSubmit)=\"login(formLogin)\"  #formLogin=\"ngForm\">\n            <div class=\"form-group mb-3\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Email\" name=\"email\" type=\"email\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" placeholder=\"Password\" name=\"password\" type=\"password\" ngModel>\n              </div>\n            </div>\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                <span class=\"text-muted\">Remember me</span>\n              </label>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" [disabled]=\"!formLogin.form.valid\" value=\"login\"class=\"btn btn-primary my-4\">Sign in</button>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"row mt-3\">\n        <div class=\"col-6\">\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>\n        </div>\n        <div class=\"col-6 text-right\">\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Create new account</small></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger py-7 py-lg-8\">\n  <div class=\"container\">\n    <div class=\"header-body text-center mb-7\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-5 col-md-6\">\n          <h1 class=\"text-white\">Welcome!</h1>\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container mt--8 pb-5\">\n  <!-- Table -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-6 col-md-8\">\n      <div class=\"card bg-secondary shadow border-0\">\n        <div class=\"card-header bg-transparent pb-5\">\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\n          <div class=\"text-center\">\n            <a href=\"http://localhost:8000/api/redirect\" class=\"btn btn-neutral btn-icon mr-4\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/facebook.svg\" (click)=\"registerFacebook()\"></span>\n\n              <span class=\"btn-inner--text\">Facebook</span>\n            </a>\n<!--            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">-->\n<!--              <span class=\"btn-inner&#45;&#45;icon\"><img src=\"assets/img/icons/common/facebook.svg\" (click)=\"registerFacebook()\"></span>-->\n\n<!--              <span class=\"btn-inner&#45;&#45;text\">Facebook</span>-->\n<!--            </a>-->\n\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\n              <span class=\"btn-inner--text\">Google</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"card-body px-lg-5 py-lg-5\">\n          <div class=\"text-center text-muted mb-4\">\n            <small>Or sign up with credentials</small>\n          </div>\n          <form role=\"form\" (ngSubmit)=\"register(formLogin)\"  #formLogin=\"ngForm\">\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-single-02\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"username\" placeholder=\"Username\" type=\"text\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"firstName\" placeholder=\"First Name\" type=\"text\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\" type=\"text\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"email\" placeholder=\"Email\" type=\"email\" required ngModel>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-alternative\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\n                </div>\n                <input class=\"form-control\" name=\"password\" placeholder=\"Password\" type=\"password\" required ngModel>\n              </div>\n            </div>\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\n            <div class=\"row my-4\">\n              <div class=\"col-12\">\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"text-center\">\n              <button type=\"submit\" class=\"btn btn-primary mt-4\">Create account</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
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

    var AuthLayoutModule = function AuthLayoutModule() {
      _classCallCheck(this, AuthLayoutModule);
    };

    AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"] // NgbModule
      ],
      declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]]
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

    var AuthLayoutRoutes = [{
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }, {
      path: 'register',
      component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    }];
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

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(authenticationService, router) {
        _classCallCheck(this, LoginComponent);

        this.authenticationService = authenticationService;
        this.router = router;
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
          var _this = this;

          // @ts-ignore
          console.log('login button clicked');

          if (!this.authenticationService.isLogged()) {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
            this.user.setEmail(form.controls.email.value);
            this.user.setPassword(form.controls.password.value);
            console.log(this.user);
            this.authenticationService.login(this.user).subscribe(function (result) {
              console.log('currently logging in...');
              console.log('body', result.body);
              var currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
              Object.assign(currentUser, result.body.user);
              console.log('user: ' + currentUser);
              console.log('token: ' + result.body.token);

              _this.authenticationService.setCurrentUser(currentUser); // @ts-ignore


              localStorage.setItem('token', result.body.token);

              _this.router.navigate(['/history']);
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

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(authenticationService, router) {
        _classCallCheck(this, RegisterComponent);

        this.authenticationService = authenticationService;
        this.router = router;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "registerFacebook",
        value: function registerFacebook() {
          console.log("helloo");
          this.authenticationService.facebookLogin().subscribe(function (response) {
            console.log(response);
            console.log("hellossso");
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this2 = this;

          console.log('register button clicked');

          if (!this.authenticationService.isLogged()) {
            this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
            this.user.setEmail(form.controls.email.value);
            this.user.setPassword(form.controls.password.value);
            this.user.setUserName(form.controls.username.value);
            this.user.setFirstName(form.controls.firstName.value);
            this.user.setLastName(form.controls.lastName.value);
            console.log(this.user);
            this.authenticationService.signup(this.user).subscribe(function (result) {
              console.log('currently signing up...');
              console.log('body', result.body);
              var currentUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
              Object.assign(currentUser, result.body.user);
              console.log('user: ' + currentUser);
              console.log('token: ' + result.body.token);

              _this2.authenticationService.setCurrentUser(currentUser);

              localStorage.setItem('token', result.body.token);

              _this2.router.navigate(['/history']);
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