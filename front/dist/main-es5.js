function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-sidebar/admin-sidebar.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-sidebar/admin-sidebar.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminSidebarAdminSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n            aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n      <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n          <i class=\"ni ni-bell-55\"></i>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a  routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n        <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n            <i class=\"ni {{menuItem.icon}}\"></i>\n            {{menuItem.title}}\n          </a>\n        </li>\n      </ul>\n      <!-- Divider -->\n      <hr class=\"my-3\">\n      <!-- Heading -->\n      <h6 class=\"navbar-heading text-muted\">Documentation</h6>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav mb-md-3\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/auth/login']\" class=\"nav-link\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            Login\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/auth/register']\" class=\"nav-link\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            Register\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial\">\n            <i class=\"ni ni-spaceship\"></i> Getting started\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors\">\n            <i class=\"ni ni-palette\"></i> Foundation\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts\">\n            <i class=\"ni ni-ui-04\"></i> Components\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n  <div class=\"row align-items-center justify-content-xl-between\">\n    <div class=\"col-xl-6\">\n      <div class=\"copyright text-center text-xl-left text-muted\">\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n      </div>\n    </div>\n    <div class=\"col-xl-6\">\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"http://blog.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-top navbar-expand-md navbar-dark navbar-horizontal\" id=\"navbar-main\">\n  <div class=\"container\">\n    <!-- Brand -->\n    <!--<a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>-->\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n            <i class=\"ni ni-planet\"></i>\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/auth/register']\">\n            <i class=\"ni ni-circle-08\"></i>\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a *ngIf=\"connected\" class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" (click)=\"logout()\">\n            <i class=\"ni ni-user-run\"></i>\n            <span class=\"nav-link-inner--text\">Logout</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a *ngIf=\"connected==false\" class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/auth/login']\">\n            <i class=\"ni ni-key-25\"></i>\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a *ngIf=\"connected==false\" class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\n            <i class=\"ni ni-single-02\"></i>\n            <span class=\"nav-link-inner--text\">Profile</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <!-- Form -->\n    <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\n        <div class=\"input-group input-group-alternative\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\n          </div>\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\n          (blur)=\"focus = false\">\n        </div>\n      </div>\n    </form>\n    <!-- User -->\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"assets/img/theme/team-4-800x800.jpg\">\n            </span>\n            <div class=\"media-body ml-2 d-none d-lg-block\">\n              <span class=\"mb-0 text-sm  font-weight-bold\">Jessica Jones</span>\n            </div>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/landing']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>Admin</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/history']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>Anonymous</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>Template</span>\n          </a>\n          <a *ngIf=\"connected\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\n  <div class=\"container-fluid\">\n    <!-- Toggler -->\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n       aria-controls=\"sidenav-collapse-main\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <!-- Brand -->\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n      <img src=\"./assets/img/brand/red.png\" class=\"navbar-brand-img\" alt=\"...\">\n    </a>\n    <!-- User -->\n    <ul class=\"nav align-items-center d-md-none\">\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\n          <i class=\"ni ni-bell-55\"></i>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\n          <div class=\"media align-items-center\">\n            <span class=\"avatar avatar-sm rounded-circle\">\n              <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\n            </span>\n          </div>\n        </a>\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\n          <div class=\" dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\n          </div>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-single-02\"></i>\n            <span>My profile</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-settings-gear-65\"></i>\n            <span>Settings</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-calendar-grid-58\"></i>\n            <span>Activity</span>\n          </a>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\n            <i class=\"ni ni-support-16\"></i>\n            <span>Support</span>\n          </a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"#!\" class=\"dropdown-item\">\n            <i class=\"ni ni-user-run\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n    <!-- Collapse -->\n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n      <!-- Collapse header -->\n      <div class=\"navbar-collapse-header d-md-none\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a  routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <img src=\"./assets/img/brand/blue.png\">\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\n              <span></span>\n              <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <!-- Form -->\n      <form class=\"mt-4 mb-3 d-md-none\">\n        <div class=\"input-group input-group-rounded input-group-merge\">\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\n          <div class=\"input-group-prepend\">\n            <div class=\"input-group-text\">\n              <span class=\"fa fa-search\"></span>\n            </div>\n          </div>\n        </div>\n      </form>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav\">\n          <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n              <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\n                  <i class=\"ni {{menuItem.icon}}\"></i>\n                  {{menuItem.title}}\n              </a>\n          </li>\n      </ul>\n      <!-- Divider -->\n      <hr class=\"my-3\">\n      <!-- Heading -->\n      <h6 class=\"navbar-heading text-muted\">Documentation</h6>\n      <!-- Navigation -->\n      <ul class=\"navbar-nav mb-md-3\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial\">\n            <i class=\"ni ni-spaceship\"></i> Getting started\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors\">\n            <i class=\"ni ni-palette\"></i> Foundation\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts\">\n            <i class=\"ni ni-ui-04\"></i> Components\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminLayoutAdminLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin-sidebar></app-admin-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <div class=\"header bg-gradient-danger py-7 py-lg-8\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-7\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5 col-md-6\">\n            <h1 class=\"text-white\">Welcome!</h1>\n            <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/anonymous-layout/anonymous-layout.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/anonymous-layout/anonymous-layout.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAnonymousLayoutAnonymousLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-sidebar></app-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <div class=\"header bg-gradient-danger py-7 py-lg-8\">\n    <div class=\"container\">\n      <div class=\"header-body text-center mb-7\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-5 col-md-6\">\n            <h1 class=\"text-white\">Welcome!</h1>\n            <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAuthLayoutAuthLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-content\">\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\n    <div class=\"container px-4\">\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n        <img src=\"assets/img/brand/argon-white.png\" />\n      </a>\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\n         aria-controls=\"sidenav-collapse-main\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <div class=\"navbar-collapse-header d-md-none\">\n          <div class=\"row\">\n            <div class=\"col-6 collapse-brand\">\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n                <img src=\"assets/img/brand/blue.png\">\n              </a>\n            </div>\n            <div class=\"col-6 collapse-close\">\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" >\n                <span></span>\n                <span></span>\n              </button>\n            </div>\n          </div>\n        </div>\n        <!-- Navbar items -->\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\n              <i class=\"ni ni-planet\"></i>\n              <span class=\"nav-link-inner--text\">Dashboard</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\n              <i class=\"ni ni-circle-08\"></i>\n              <span class=\"nav-link-inner--text\">Register</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\n              <i class=\"ni ni-key-25\"></i>\n              <span class=\"nav-link-inner--text\">Login</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link nav-link-icon\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\n              <i class=\"ni ni-single-02\"></i>\n              <span class=\"nav-link-inner--text\">Profile</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"http://blog.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\n          </li>\n          <li class=\"nav-item\">\n            <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/template-layout/template-layout.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/template-layout/template-layout.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsTemplateLayoutTemplateLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Sidenav -->\n<app-sidebar></app-sidebar>\n<div class=\"main-content\">\n  <!-- Top navbar -->\n  <app-navbar></app-navbar>\n  <!-- Pages -->\n  <router-outlet></router-outlet>\n  <div class=\"container-fluid\">\n    <app-footer></app-footer>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category/create-category/create-category.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category/create-category/create-category.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminCategoryCreateCategoryCreateCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form id=create-book-form [formGroup]=\"createCategory\" >\n  <div >\n    <div class=\"form-group\">\n      <label class=\"form-control-label\" for=\"input-Name\">Name</label>\n      <input  formControlName= \"name\" type=\"text\" id=\"input-Name\" class=\"form-control form-control-alternative\" placeholder=\"Name\" >\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"form-control-label\" for=\"input-type\">Categories</label>\n    <!-- Category -->\n    <div class=\"sidebar-widget\">\n      <select formControlName= \"type\" class=\"selectpicker default input-type\" id=\"input-type\" name=\"input-type\" data-selected-text-format=\"count\" title=\"All Categories\" >\n        <option *ngFor=\"let item of categories | enumToArray\">{{item.name}}</option>\n      </select>\n    </div>\n  </div>\n</form>\n<div >\n  <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info\" form=\"create-book-form\">\n    <i class=\"icon-feather-plus\"></i>add category</button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category/list-category/list-category.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category/list-category/list-category.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminCategoryListCategoryListCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->  <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <a [routerLink]=\"['/admin/add-charity']\" class=\"btn btn-info\">Add new project</a>\n        </div>\n      </div>\n    </div>\n\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col-xl-4 order-xl-2 mb-5 mb-xl-0\">\n      <div class=\"card card-profile shadow\">\n        <div class=\"\">\n          <div class=\"\">\n            <h3>Create category</h3>\n          </div>\n        </div>\n\n        <div class=\"card-body pt-0 pt-md-4\">\n\n          <div class=\"text-center\">\n            <app-create-category></app-create-category>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-8 order-xl-1\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">Categories</h3>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Type</th>\n              <th scope=\"col\">delete category</th>\n            </tr>\n            </thead>\n            <tbody *ngIf=\"categories\">\n            <tr *ngFor=\"let story of categories.content\">\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">{{story.name}}</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n                {{story.type}}\n              </td>\n              <td>\n                <a   class=\"btn btn-info\">delete</a>\n              </td>\n\n\n            </tr>\n\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer py-4\" *ngIf=\"categories\">\n          <nz-pagination [nzPageIndex]=currentPage  [nzTotal]=categories.totalElements  [nzPageSize]=sizePage (nzPageIndexChange)=\"paginate($event)\"></nz-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/charity/charities-list/charities-list.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/charity/charities-list/charities-list.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminCharityCharitiesListCharitiesListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->  <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <a [routerLink]=\"['/admin/add-charity']\" class=\"btn btn-info\">Add new project</a>\n        </div>\n      </div>\n    </div>\n\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">Projects</h3>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Name</th>\n              <th scope=\"col\">Created At</th>\n              <th scope=\"col\">Updated At</th>\n              <th scope=\"col\">amount</th>\n              <th scope=\"col\">MIN DA</th>\n              <th scope=\"col\">MAX DA</th>\n              <th scope=\"col\">last updated sum</th>\n              <th scope=\"col\"> status</th>\n              <th scope=\"col\"> change status</th>\n            </tr>\n            </thead>\n            <tbody *ngIf=\"projects\">\n            <tr *ngFor=\"let project of projects.content\">\n              <th scope=\"row\">\n                <div class=\"media align-items-center\">\n\n                  <div class=\"media-body\">\n                    <span class=\"mb-0 text-sm\">{{project.name}}</span>\n                  </div>\n                </div>\n              </th>\n              <td>\n\n                {{project.createdAt | date}}\n\n              </td>\n\n              <td>\n\n                {{project.updatedAt | date}}\n\n              </td>\n              <td>\n                {{project.amount}}\n              </td>\n              <td>\n                {{project.minDonationAmount}}\n              </td>\n              <td>\n                {{project.maxDonationAmount}}\n              </td>\n              <td>\n                {{project.lastUpdatedSum}}\n              </td>\n              <td>\n                {{project.status}}\n              </td>\n              <td>\n                <a (click)=\"pauseProject(project)\"  class=\"btn ant-btn-primary\" *ngIf=\"(project.status !='PAUSED') && project.status!='TERMINATED'\" >Pause</a>\n                <a (click)=\"activateProject(project)\"  class=\"btn btn-info\" *ngIf=\"project.status!='ACTIVE' && project.status!='TERMINATED'\">Activate</a>\n                <a  nzType=\"dashed\" (click)=\"showDeleteConfirm(project)\" class=\"btn btn-warning\" *ngIf=\"project.status!='TERMINATED'\">Terminate</a>\n\n              </td>\n\n\n            </tr>\n\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer py-4\" *ngIf=\"projects\">\n          <nz-pagination [nzPageIndex]=currentPage  [nzTotal]=projects.totalElements  [nzPageSize]=sizePage (nzPageIndexChange)=\"paginate($event)\"></nz-pagination>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/charity/charity-create/charity-create.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/charity/charity-create/charity-create.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAdminCharityCharityCreateCharityCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->  <div class=\"container-fluid d-flex align-items-center\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 col-md-10\">\n          <a [routerLink]=\"['/add-category']\" class=\"btn btn-info\">Add new category</a>\n\n        </div>\n      </div>\n    </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"container-fluid mt--7\">\n  <div class=\"container-fluid d-flex align-items-center\">\n\n    <div class=\"col-lg-12 col-lg-12\">\n\n      <div class=\"col-xl-8 order-xl-1\">\n        <div class=\"card bg-secondary shadow\">\n          <div class=\"card-header bg-white border-0\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-8\">\n                <h3 class=\"mb-0\">Charity</h3>\n              </div>\n\n            </div>\n          </div>\n          <div class=\"card-body\">\n            <form id=create-book-form [formGroup]=\"createCharity\" >\n              <h6 class=\"heading-small text-muted mb-4\">Information</h6>\n              <div class=\"pl-lg-4\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-Name\">Name</label>\n                      <input  formControlName= \"name\" type=\"text\" id=\"input-Name\" class=\"form-control form-control-alternative\" placeholder=\"Name\" >\n                    </div>\n                  </div>\n                  <div class=\"col-lg-6\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-genre\">Categories</label>\n                      <!-- Category -->\n                      <div class=\"sidebar-widget\">\n                        <select formControlName= \"categoriesIds\" class=\"selectpicker default input-genre\" id=\"input-genre\" name=\"input-genre\" data-selected-text-format=\"count\" title=\"All Categories\" >\n                          <option *ngFor=\"let item of categories \" [value]=\"item.id\">{{item.name}}</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-8\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-amount\">Amount</label>\n                      <input  formControlName= \"amount\" type=\"text\" id=\"input-amount\" class=\"form-control form-control-alternative\" placeholder=\"Amount\" >\n                    </div>\n                  </div>\n\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-min\">Min donation amount</label>\n                      <input  formControlName= \"minDonationAmount\" type=\"text\" id=\"input-min\" class=\"form-control form-control-alternative\" placeholder=\"Amount\" >\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\" for=\"input-max\">Max donation amount</label>\n                      <input  formControlName= \"maxDonationAmount\" type=\"text\" id=\"input-max\" class=\"form-control form-control-alternative\" placeholder=\"Amount\" >\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n\n              <hr class=\"my-4\" />\n              <!-- Description -->\n              <h6 class=\"heading-small text-muted mb-4\">Description</h6>\n              <div class=\"pl-lg-4\">\n                <div class=\"form-group\">\n                  <label>Description</label>\n                  <textarea formControlName=\"shortDescription\" rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words about your project ...\"></textarea>\n                </div>\n              </div>\n\n            </form>\n            <div class=\"col-xl-12\">\n              <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-info\" form=\"create-book-form\">\n                <i class=\"icon-feather-plus\"></i>post project</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<br />\n<br />\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./layouts/admin-layout/admin-layout.module": ["./src/app/layouts/admin-layout/admin-layout.module.ts", "layouts-admin-layout-admin-layout-module"],
      "./layouts/anonymous-layout/anonymous-layout.module": ["./src/app/layouts/anonymous-layout/anonymous-layout.module.ts", "layouts-anonymous-layout-anonymous-layout-module"],
      "./layouts/auth-layout/auth-layout.module": ["./src/app/layouts/auth-layout/auth-layout.module.ts", "layouts-auth-layout-auth-layout-module"],
      "./layouts/template-layout/template-layout.module": ["./src/app/layouts/template-layout/template-layout.module.ts", "layouts-template-layout-template-layout-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/_globals/global-variables.ts":
  /*!**********************************************!*\
    !*** ./src/app/_globals/global-variables.ts ***!
    \**********************************************/

  /*! exports provided: API_URL, CHARITY, CATEGORY, PAUSE, ACTIVATE, TERNINATE, REDIRECT, CALLBACK */

  /***/
  function srcApp_globalsGlobalVariablesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_URL", function () {
      return API_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHARITY", function () {
      return CHARITY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CATEGORY", function () {
      return CATEGORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAUSE", function () {
      return PAUSE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACTIVATE", function () {
      return ACTIVATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TERNINATE", function () {
      return TERNINATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "REDIRECT", function () {
      return REDIRECT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CALLBACK", function () {
      return CALLBACK;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var API_URL = 'http://localhost:8000/api';
    var CHARITY = '/projects';
    var CATEGORY = '/categories';
    var PAUSE = '/pause';
    var ACTIVATE = '/activate';
    var TERNINATE = '/end';
    var REDIRECT = '/redirect';
    var CALLBACK = '/callback';
    /***/
  },

  /***/
  "./src/app/_interceptors/authentication.interceptor.ts":
  /*!*************************************************************!*\
    !*** ./src/app/_interceptors/authentication.interceptor.ts ***!
    \*************************************************************/

  /*! exports provided: AuthenticationInterceptor, AuthenticationInterceptorProvider */

  /***/
  function srcApp_interceptorsAuthenticationInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptor", function () {
      return AuthenticationInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptorProvider", function () {
      return AuthenticationInterceptorProvider;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var AuthenticationInterceptor =
    /*#__PURE__*/
    function () {
      function AuthenticationInterceptor(authenticationService) {
        _classCallCheck(this, AuthenticationInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(AuthenticationInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          console.log('in interceptor', this.authenticationService.isLogged());

          if (this.authenticationService.isLogged()) {
            var newRequest = request.clone({
              headers: request.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            console.log('request', newRequest);
            return next.handle(newRequest);
          } else {
            return next.handle(request);
          }
        }
      }]);

      return AuthenticationInterceptor;
    }();

    AuthenticationInterceptor.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthenticationInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthenticationInterceptor);
    var AuthenticationInterceptorProvider = {
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: AuthenticationInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/_models/enum/ProjectStatus.ts":
  /*!***********************************************!*\
    !*** ./src/app/_models/enum/ProjectStatus.ts ***!
    \***********************************************/

  /*! exports provided: ProjectStatus */

  /***/
  function srcApp_modelsEnumProjectStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectStatus", function () {
      return ProjectStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ProjectStatus;

    (function (ProjectStatus) {
      ProjectStatus[ProjectStatus["DELETED"] = 0] = "DELETED";
      ProjectStatus[ProjectStatus["TERMINATED"] = 1] = "TERMINATED";
      ProjectStatus[ProjectStatus["ACTIVE"] = 2] = "ACTIVE";
      ProjectStatus[ProjectStatus["PAUSED"] = 3] = "PAUSED";
    })(ProjectStatus || (ProjectStatus = {}));
    /***/

  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/user */
    "./src/app/models/user.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http, router) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.router = router;
        this.resourceUrl = 'http://localhost:8000/api/';
        this.redirectUri = 'http://localhost:4200/';
        this.currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
      }

      _createClass(AuthenticationService, [{
        key: "signup",
        value: function signup(user) {
          // tslint:disable-next-line:max-line-length
          var creds = {
            username: user.getUserName(),
            first_name: user.getFirstName(),
            last_name: user.getLastName(),
            email: user.getEmail(),
            password: user.getPassword()
          };
          return this.http.post(this.resourceUrl + 'register', JSON.parse(JSON.stringify(creds)), {
            observe: 'response'
          });
        }
      }, {
        key: "login",
        value: function login(user) {
          var headers = {
            'Content-Type': 'application/json'
          };
          var creds = {
            email: user.getEmail(),
            password: user.getPassword()
          };
          return this.http.post(this.resourceUrl + 'login', JSON.stringify(creds), {
            headers: headers,
            observe: 'response'
          });
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          return this.http.get(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["REDIRECT"]);
        } // method get for current user from the backend

      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.resourceUrl + 'users' + this.getCurrentUser().getId());
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http.post(this.resourceUrl + 'logout', {
            observe: 'response'
          });
        }
      }, {
        key: "isLogged",
        value: function isLogged() {
          return localStorage.getItem('token') != null;
        }
      }, {
        key: "getRedirectUri",
        value: function getRedirectUri() {
          return this.redirectUri;
        }
      }, {
        key: "setCurrentUser",
        value: function setCurrentUser(currentUser) {
          this.currentUser = currentUser;
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.currentUser;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/crud.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/crud.service.ts ***!
    \*******************************************/

  /*! exports provided: CrudService */

  /***/
  function srcApp_servicesCrudServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrudService", function () {
      return CrudService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CrudService =
    /*#__PURE__*/
    function () {
      function CrudService(http) {
        _classCallCheck(this, CrudService);

        this.http = http;
      }

      _createClass(CrudService, [{
        key: "getAll",
        value: function getAll(url) {
          console.log(url);
          return this.http.get(url);
        }
      }, {
        key: "getAllWithParams",
        value: function getAllWithParams(url, params) {
          console.log(url);
          return this.http.get(url, {
            params: params
          });
        }
      }, {
        key: "getOne",
        value: function getOne(url, id) {
          console.log(url);
          return this.http.get(url + '/' + id);
        }
      }, {
        key: "post",
        value: function post(url, body) {
          console.log(url);
          return this.http.post(url, body);
        }
      }, {
        key: "postOpt",
        value: function postOpt(url, body, option) {
          console.log(url);
          return this.http.post(url, body, option);
        }
      }, {
        key: "update",
        value: function update(url, id, body) {
          console.log(url);
          return this.http.put(url + '/' + id, body);
        }
      }, {
        key: "delete",
        value: function _delete(url, id) {
          console.log(url);
          return this.http.delete(url + '/' + id);
        }
      }, {
        key: "put",
        value: function put(url, body) {
          console.log(url);
          return this.http.put(url, body);
        }
      }]);

      return CrudService;
    }();

    CrudService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CrudService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CrudService);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'argon-dashboard-angular';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layouts/auth-layout/auth-layout.component */
    "./src/app/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _layouts_anonymous_layout_anonymous_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./layouts/anonymous-layout/anonymous-layout.component */
    "./src/app/layouts/anonymous-layout/anonymous-layout.component.ts");
    /* harmony import */


    var _layouts_template_layout_template_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layouts/template-layout/template-layout.component */
    "./src/app/layouts/template-layout/template-layout.component.ts");
    /* harmony import */


    var _pages_admin_charity_charities_list_charities_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/admin/charity/charities-list/charities-list.component */
    "./src/app/pages/admin/charity/charities-list/charities-list.component.ts");
    /* harmony import */


    var _pages_admin_charity_charity_create_charity_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/admin/charity/charity-create/charity-create.component */
    "./src/app/pages/admin/charity/charity-create/charity-create.component.ts");
    /* harmony import */


    var _pages_admin_category_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/admin/category/create-category/create-category.component */
    "./src/app/pages/admin/category/create-category/create-category.component.ts");
    /* harmony import */


    var _pages_admin_category_list_category_list_category_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/admin/category/list-category/list-category.component */
    "./src/app/pages/admin/category/list-category/list-category.component.ts");
    /* harmony import */


    var _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pipes/enum-to-array.pipe */
    "./src/app/pipes/enum-to-array.pipe.ts");
    /* harmony import */


    var _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./_interceptors/authentication.interceptor */
    "./src/app/_interceptors/authentication.interceptor.ts"); // @ts-ignore


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_13__["ComponentsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"], _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_10__["AuthLayoutComponent"], _layouts_anonymous_layout_anonymous_layout_component__WEBPACK_IMPORTED_MODULE_14__["AnonymousLayoutComponent"], _layouts_template_layout_template_layout_component__WEBPACK_IMPORTED_MODULE_15__["TemplateLayoutComponent"], _pages_admin_charity_charities_list_charities_list_component__WEBPACK_IMPORTED_MODULE_16__["CharitiesListComponent"], _pages_admin_charity_charity_create_charity_create_component__WEBPACK_IMPORTED_MODULE_17__["CharityCreateComponent"], _pages_admin_category_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_18__["CreateCategoryComponent"], _pages_admin_category_list_category_list_category_component__WEBPACK_IMPORTED_MODULE_19__["ListCategoryComponent"], _pipes_enum_to_array_pipe__WEBPACK_IMPORTED_MODULE_20__["EnumToArrayPipe"]],
      providers: [_interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthenticationInterceptorProvider"], {
        provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"],
        useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["en_US"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/auth-layout/auth-layout.component */
    "./src/app/layouts/auth-layout/auth-layout.component.ts");
    /* harmony import */


    var _layouts_anonymous_layout_anonymous_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/anonymous-layout/anonymous-layout.component */
    "./src/app/layouts/anonymous-layout/anonymous-layout.component.ts");
    /* harmony import */


    var _layouts_template_layout_template_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/template-layout/template-layout.component */
    "./src/app/layouts/template-layout/template-layout.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    }, {
      path: 'admin',
      component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
    }, {
      path: '',
      component: _layouts_anonymous_layout_anonymous_layout_component__WEBPACK_IMPORTED_MODULE_7__["AnonymousLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/anonymous-layout/anonymous-layout.module#AnonymousLayoutModule'
      }]
    }, {
      path: 'auth',
      component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }]
    }, {
      path: 'template',
      component: _layouts_template_layout_template_layout_component__WEBPACK_IMPORTED_MODULE_8__["TemplateLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/template-layout/template-layout.module#TemplateLayoutModule'
      }]
    }, {
      path: '**',
      redirectTo: 'landing'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/admin-sidebar/admin-sidebar.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/components/admin-sidebar/admin-sidebar.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminSidebarAdminSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9hZG1pbi1zaWRlYmFyL2FkbWluLXNpZGViYXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin-sidebar/admin-sidebar.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/admin-sidebar/admin-sidebar.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ROUTES, AdminSidebarComponent */

  /***/
  function srcAppComponentsAdminSidebarAdminSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function () {
      return AdminSidebarComponent;
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

    var ROUTES = [{
      path: '/admin/landing',
      title: 'Landing',
      icon: 'ni-tv-2 text-primary',
      class: ''
    }, {
      path: '/admin/products',
      title: 'Products',
      icon: 'ni-planet text-blue',
      class: ''
    }, {
      path: '/admin/charity',
      title: 'Charity',
      icon: 'ni-pin-3 text-orange',
      class: ''
    }, {
      path: '/admin/variable',
      title: 'Variable',
      icon: 'ni-pin-3 text-pink',
      class: ''
    }];

    var AdminSidebarComponent =
    /*#__PURE__*/
    function () {
      function AdminSidebarComponent(router) {
        _classCallCheck(this, AdminSidebarComponent);

        this.router = router;
        this.isCollapsed = true;
      }

      _createClass(AdminSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
          this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
          });
        }
      }]);

      return AdminSidebarComponent;
    }();

    AdminSidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-sidebar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-sidebar/admin-sidebar.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-sidebar.component.css */
      "./src/app/components/admin-sidebar/admin-sidebar.component.css")).default]
    })], AdminSidebarComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-sidebar/admin-sidebar.component */
    "./src/app/components/admin-sidebar/admin-sidebar.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
      declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["AdminSidebarComponent"]],
      exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["AdminSidebarComponent"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.test = new Date();
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_services/authentication.service */
    "./src/app/_services/authentication.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(location, element, router, authenticationService) {
        _classCallCheck(this, NavbarComponent);

        this.element = element;
        this.router = router;
        this.authenticationService = authenticationService;
        this.connected = false;
        this.location = location;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) {
            return listTitle;
          });
          console.log(this.authenticationService.isLogged());
          this.connected = this.authenticationService.isLogged();
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
          }

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          this.connected = this.authenticationService.isLogged();
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this2 = this;

          this.authenticationService.logout().subscribe(function (res) {
            console.log('logging out');
            localStorage.removeItem('token');

            _this2.router.navigate(['/history']);
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/components/navbar/navbar.component.scss")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/sidebar/sidebar.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/sidebar/sidebar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/sidebar/sidebar.component.ts ***!
    \*********************************************************/

  /*! exports provided: ROUTES, SidebarComponent */

  /***/
  function srcAppComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
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

    var ROUTES = [{
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'ni-tv-2 text-primary',
      class: ''
    }, {
      path: '/icons',
      title: 'Icons',
      icon: 'ni-planet text-blue',
      class: ''
    }, {
      path: '/maps',
      title: 'Maps',
      icon: 'ni-pin-3 text-orange',
      class: ''
    }, {
      path: '/user-profile',
      title: 'User profile',
      icon: 'ni-single-02 text-yellow',
      class: ''
    }, {
      path: '/tables',
      title: 'Tables',
      icon: 'ni-bullet-list-67 text-red',
      class: ''
    }];

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(router) {
        _classCallCheck(this, SidebarComponent);

        this.router = router;
        this.isCollapsed = true;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
          this.router.events.subscribe(function (event) {
            _this3.isCollapsed = true;
          });
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/components/sidebar/sidebar.component.scss")).default]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent() {
        _classCallCheck(this, AdminLayoutComponent);
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-layout.component.scss */
      "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
    })], AdminLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/anonymous-layout/anonymous-layout.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/layouts/anonymous-layout/anonymous-layout.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAnonymousLayoutAnonymousLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0cy9hbm9ueW1vdXMtbGF5b3V0L2Fub255bW91cy1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layouts/anonymous-layout/anonymous-layout.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layouts/anonymous-layout/anonymous-layout.component.ts ***!
    \************************************************************************/

  /*! exports provided: AnonymousLayoutComponent */

  /***/
  function srcAppLayoutsAnonymousLayoutAnonymousLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnonymousLayoutComponent", function () {
      return AnonymousLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnonymousLayoutComponent =
    /*#__PURE__*/
    function () {
      function AnonymousLayoutComponent() {
        _classCallCheck(this, AnonymousLayoutComponent);
      }

      _createClass(AnonymousLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnonymousLayoutComponent;
    }();

    AnonymousLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-anonymous-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./anonymous-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/anonymous-layout/anonymous-layout.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./anonymous-layout.component.css */
      "./src/app/layouts/anonymous-layout/anonymous-layout.component.css")).default]
    })], AnonymousLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/auth-layout/auth-layout.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAuthLayoutAuthLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0cy9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layouts/auth-layout/auth-layout.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
    \**************************************************************/

  /*! exports provided: AuthLayoutComponent */

  /***/
  function srcAppLayoutsAuthLayoutAuthLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
      return AuthLayoutComponent;
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

    var AuthLayoutComponent =
    /*#__PURE__*/
    function () {
      function AuthLayoutComponent(router) {
        _classCallCheck(this, AuthLayoutComponent);

        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
      }

      _createClass(AuthLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var html = document.getElementsByTagName("html")[0];
          html.classList.add("auth-layout");
          var body = document.getElementsByTagName("body")[0];
          body.classList.add("bg-default");
          this.router.events.subscribe(function (event) {
            _this4.isCollapsed = true;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var html = document.getElementsByTagName("html")[0];
          html.classList.remove("auth-layout");
          var body = document.getElementsByTagName("body")[0];
          body.classList.remove("bg-default");
        }
      }]);

      return AuthLayoutComponent;
    }();

    AuthLayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./auth-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./auth-layout.component.scss */
      "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
    })], AuthLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/template-layout/template-layout.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/layouts/template-layout/template-layout.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsTemplateLayoutTemplateLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbGF5b3V0cy90ZW1wbGF0ZS1sYXlvdXQvdGVtcGxhdGUtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/template-layout/template-layout.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/layouts/template-layout/template-layout.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TemplateLayoutComponent */

  /***/
  function srcAppLayoutsTemplateLayoutTemplateLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateLayoutComponent", function () {
      return TemplateLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TemplateLayoutComponent =
    /*#__PURE__*/
    function () {
      function TemplateLayoutComponent() {
        _classCallCheck(this, TemplateLayoutComponent);
      }

      _createClass(TemplateLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TemplateLayoutComponent;
    }();

    TemplateLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-template-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./template-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/template-layout/template-layout.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./template-layout.component.css */
      "./src/app/layouts/template-layout/template-layout.component.css")).default]
    })], TemplateLayoutComponent);
    /***/
  },

  /***/
  "./src/app/models/user.ts":
  /*!********************************!*\
    !*** ./src/app/models/user.ts ***!
    \********************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var User =
    /*#__PURE__*/
    function () {
      function User() {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var firstName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var lastName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var userName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        _classCallCheck(this, User);

        this.badge = null;
        this.isDeleted = false;
        this.profile = null;
        this.roles = null;
        this.address = null;
        this.id = id;
        this.username = userName;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
      }

      _createClass(User, [{
        key: "getId",
        value: function getId() {
          return this.id;
        }
      }, {
        key: "setId",
        value: function setId(value) {
          this.id = value;
        }
      }, {
        key: "getFirstName",
        value: function getFirstName() {
          return this.firstName;
        }
      }, {
        key: "setFirstName",
        value: function setFirstName(value) {
          this.firstName = value;
        }
      }, {
        key: "getLastName",
        value: function getLastName() {
          return this.lastName;
        }
      }, {
        key: "setLastName",
        value: function setLastName(value) {
          this.lastName = value;
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          return this.username;
        }
      }, {
        key: "setUserName",
        value: function setUserName(value) {
          this.username = value;
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.email;
        }
      }, {
        key: "setEmail",
        value: function setEmail(value) {
          this.email = value;
        }
      }, {
        key: "getPassword",
        value: function getPassword() {
          return this.password;
        }
      }, {
        key: "setPassword",
        value: function setPassword(value) {
          this.password = value;
        }
      }]);

      return User;
    }();
    /***/

  },

  /***/
  "./src/app/pages/admin/category/create-category/create-category.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/admin/category/create-category/create-category.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminCategoryCreateCategoryCreateCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcnkvY3JlYXRlLWNhdGVnb3J5L2NyZWF0ZS1jYXRlZ29yeS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/admin/category/create-category/create-category.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/admin/category/create-category/create-category.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: CreateCategoryComponent */

  /***/
  function srcAppPagesAdminCategoryCreateCategoryCreateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function () {
      return CreateCategoryComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../_services/crud.service */
    "./src/app/_services/crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");

    var CreateCategoryComponent =
    /*#__PURE__*/
    function () {
      function CreateCategoryComponent(formBuilder, crudService, router) {
        _classCallCheck(this, CreateCategoryComponent);

        this.formBuilder = formBuilder;
        this.crudService = crudService;
        this.router = router;
        this.keys = Object.keys;
      }

      _createClass(CreateCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createCategory = this.formBuilder.group({
            name: '',
            type: 'PROJECT'
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.createCategory.value);
          this.crudService.post(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CATEGORY"], this.createCategory.value).subscribe(function (response) {
            console.log(response); // this.router.navigate(['/list-story']);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return CreateCategoryComponent;
    }();

    CreateCategoryComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CreateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-category',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category/create-category/create-category.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-category.component.css */
      "./src/app/pages/admin/category/create-category/create-category.component.css")).default]
    })], CreateCategoryComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin/category/list-category/list-category.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/admin/category/list-category/list-category.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminCategoryListCategoryListCategoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcnkvbGlzdC1jYXRlZ29yeS9saXN0LWNhdGVnb3J5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/admin/category/list-category/list-category.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/admin/category/list-category/list-category.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ListCategoryComponent */

  /***/
  function srcAppPagesAdminCategoryListCategoryListCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListCategoryComponent", function () {
      return ListCategoryComponent;
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


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../_services/crud.service */
    "./src/app/_services/crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");

    var ListCategoryComponent =
    /*#__PURE__*/
    function () {
      function ListCategoryComponent(crudService, router, route) {
        _classCallCheck(this, ListCategoryComponent);

        this.crudService = crudService;
        this.router = router;
        this.route = route;
        this.isVisible = false;
        this.sort = 'createdAt,desc';
      }

      _createClass(ListCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentPage = 1;
          this.sizePage = 6;
          this.getCategories();
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this5 = this;

          var params;
          var selectedPage = this.currentPage - 1;
          params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('page', selectedPage.toString()).set('size', this.sizePage.toString()).set('sort', this.sort.toString());
          this.crudService.getAllWithParams(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CATEGORY"], params).subscribe(function (response) {
            _this5.categories = response;
            console.log(_this5.categories);
            _this5.currentPage = _this5.categories.pageable.pageNumber + 1;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "paginate",
        value: function paginate(page) {
          this.currentPage = page;
          this.getCategories();
        }
      }]);

      return ListCategoryComponent;
    }();

    ListCategoryComponent.ctorParameters = function () {
      return [{
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    ListCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-category',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/category/list-category/list-category.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-category.component.css */
      "./src/app/pages/admin/category/list-category/list-category.component.css")).default]
    })], ListCategoryComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin/charity/charities-list/charities-list.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/admin/charity/charities-list/charities-list.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminCharityCharitiesListCharitiesListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvYWRtaW4vY2hhcml0eS9jaGFyaXRpZXMtbGlzdC9jaGFyaXRpZXMtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/admin/charity/charities-list/charities-list.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/admin/charity/charities-list/charities-list.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CharitiesListComponent */

  /***/
  function srcAppPagesAdminCharityCharitiesListCharitiesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharitiesListComponent", function () {
      return CharitiesListComponent;
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


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../_services/crud.service */
    "./src/app/_services/crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");
    /* harmony import */


    var _models_enum_ProjectStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../_models/enum/ProjectStatus */
    "./src/app/_models/enum/ProjectStatus.ts");
    /* harmony import */


    var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/modal */
    "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-modal.js");

    var CharitiesListComponent =
    /*#__PURE__*/
    function () {
      function CharitiesListComponent(crudService, router, route, modalService) {
        _classCallCheck(this, CharitiesListComponent);

        this.crudService = crudService;
        this.router = router;
        this.route = route;
        this.modalService = modalService;
        this.isVisible = false;
        this.projectStatus = _models_enum_ProjectStatus__WEBPACK_IMPORTED_MODULE_6__["ProjectStatus"];
        this.sort = 'createdAt,desc';
      }

      _createClass(CharitiesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uri = this.route.snapshot.routeConfig.path;
          this.currentPage = 1;
          this.sizePage = 2;
          this.getProjects();
        }
      }, {
        key: "getProjects",
        value: function getProjects() {
          var _this6 = this;

          var params;
          var selectedPage = this.currentPage - 1;
          params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]().set('page', selectedPage.toString()).set('size', this.sizePage.toString()).set('sort', this.sort.toString());
          this.crudService.getAllWithParams(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CHARITY"], params).subscribe(function (response) {
            _this6.projects = response;
            console.log(_this6.projects);
            _this6.currentPage = _this6.projects.pageable.pageNumber + 1;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "paginate",
        value: function paginate(page) {
          this.currentPage = page;
          this.getProjects();
        }
      }, {
        key: "pauseProject",
        value: function pauseProject(project) {
          var _this7 = this;

          this.crudService.update(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CHARITY"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["PAUSE"], project.id, {}).subscribe(function (response) {
            _this7.getProjects();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "activateProject",
        value: function activateProject(project) {
          var _this8 = this;

          this.crudService.update(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CHARITY"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["ACTIVATE"], project.id, {}).subscribe(function (response) {
            _this8.getProjects();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "endProject",
        value: function endProject(project) {
          var _this9 = this;

          this.crudService.update(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CHARITY"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["TERNINATE"], project.id, {}).subscribe(function (response) {
            _this9.getProjects();
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showDeleteConfirm",
        value: function showDeleteConfirm(project) {
          var _this10 = this;

          this.modalService.confirm({
            nzTitle: 'Are you sure you want to end this project?',
            nzContent: '<b style="color: red;">The project supposed end date is</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: function nzOnOk() {
              return _this10.endProject(project);
            },
            nzCancelText: 'No',
            nzOnCancel: function nzOnCancel() {
              return console.log('Cancel');
            }
          });
        }
      }]);

      return CharitiesListComponent;
    }();

    CharitiesListComponent.ctorParameters = function () {
      return [{
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__["NzModalService"]
      }];
    };

    CharitiesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charities-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./charities-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/charity/charities-list/charities-list.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./charities-list.component.css */
      "./src/app/pages/admin/charity/charities-list/charities-list.component.css")).default]
    })], CharitiesListComponent);
    /***/
  },

  /***/
  "./src/app/pages/admin/charity/charity-create/charity-create.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/admin/charity/charity-create/charity-create.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAdminCharityCharityCreateCharityCreateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvYWRtaW4vY2hhcml0eS9jaGFyaXR5LWNyZWF0ZS9jaGFyaXR5LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/admin/charity/charity-create/charity-create.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/admin/charity/charity-create/charity-create.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CharityCreateComponent */

  /***/
  function srcAppPagesAdminCharityCharityCreateCharityCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharityCreateComponent", function () {
      return CharityCreateComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../_services/crud.service */
    "./src/app/_services/crud.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../_globals/global-variables */
    "./src/app/_globals/global-variables.ts");

    var CharityCreateComponent =
    /*#__PURE__*/
    function () {
      function CharityCreateComponent(formBuilder, crudService, router) {
        _classCallCheck(this, CharityCreateComponent);

        this.formBuilder = formBuilder;
        this.crudService = crudService;
        this.router = router;
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.date = null;
        this.dateFormat = 'yyyy/MM/dd';
        this.keys = Object.keys;
      }

      _createClass(CharityCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
          this.createCharity = this.formBuilder.group({
            name: '',
            shortDescription: '',
            amount: 0,
            minDonationAmount: 0,
            maxDonationAmount: 0,
            categoriesIds: 0
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this11 = this;

          this.crudService.getAll(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CATEGORY"]).subscribe(function (response) {
            _this11.categories = response.content;
            console.log(_this11.categories);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this12 = this;

          this.createCharity.value.categoriesIds = [this.createCharity.value.categoriesIds];
          console.log(this.createCharity.value);
          this.crudService.post(_globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_5__["CHARITY"], this.createCharity.value).subscribe(function (response) {
            console.log(response);

            _this12.router.navigate(['/admin/charity']);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return CharityCreateComponent;
    }();

    CharityCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    CharityCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charity-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./charity-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/admin/charity/charity-create/charity-create.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./charity-create.component.css */
      "./src/app/pages/admin/charity/charity-create/charity-create.component.css")).default]
    })], CharityCreateComponent);
    /***/
  },

  /***/
  "./src/app/pipes/enum-to-array.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/enum-to-array.pipe.ts ***!
    \*********************************************/

  /*! exports provided: EnumToArrayPipe */

  /***/
  function srcAppPipesEnumToArrayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function () {
      return EnumToArrayPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EnumToArrayPipe =
    /*#__PURE__*/
    function () {
      function EnumToArrayPipe() {
        _classCallCheck(this, EnumToArrayPipe);
      }

      _createClass(EnumToArrayPipe, [{
        key: "transform",
        value: function transform(value) {
          return Object.keys(value).filter(function (e) {
            return !isNaN(+e);
          }).map(function (o) {
            return {
              index: +o,
              name: value[o]
            };
          });
        }
      }]);

      return EnumToArrayPipe;
    }();

    EnumToArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'enumToArray'
    })], EnumToArrayPipe);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /*!
    
    =========================================================
    * Argon Dashboard Angular - v1.1.0
    =========================================================
    
    * Product Page: https://www.creative-tim.com/product/argon-dashboard-angular
    * Copyright 2019 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md)
    
    * Coded by Creative Tim
    
    =========================================================
    
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sami/WEB/clubisti/front/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map