function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charity-projects/charity-projects.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charity-projects/charity-projects.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharityProjectsCharityProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>charity-projects works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLandingLandingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>landing works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>products works!</p>\n";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
    \*************************************************************/

  /*! exports provided: AdminLayoutModule */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function () {
      return AdminLayoutModule;
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


    var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-layout.routing */
    "./src/app/layouts/admin-layout/admin-layout.routing.ts");
    /* harmony import */


    var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pages/landing/landing.component */
    "./src/app/pages/landing/landing.component.ts");
    /* harmony import */


    var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pages/products/products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var _pages_charity_projects_charity_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pages/charity-projects/charity-projects.component */
    "./src/app/pages/charity-projects/charity-projects.component.ts");

    var AdminLayoutModule = function AdminLayoutModule() {
      _classCallCheck(this, AdminLayoutModule);
    };

    AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"])],
      declarations: [_pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"], _pages_charity_projects_charity_projects_component__WEBPACK_IMPORTED_MODULE_7__["CharityProjectsComponent"]]
    })], AdminLayoutModule);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.routing.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
    \**************************************************************/

  /*! exports provided: AdminLayoutRoutes */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function () {
      return AdminLayoutRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../pages/landing/landing.component */
    "./src/app/pages/landing/landing.component.ts");
    /* harmony import */


    var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pages/products/products.component */
    "./src/app/pages/products/products.component.ts");
    /* harmony import */


    var _pages_admin_charity_charities_list_charities_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/admin/charity/charities-list/charities-list.component */
    "./src/app/pages/admin/charity/charities-list/charities-list.component.ts");
    /* harmony import */


    var _pages_admin_charity_charity_create_charity_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pages/admin/charity/charity-create/charity-create.component */
    "./src/app/pages/admin/charity/charity-create/charity-create.component.ts");
    /* harmony import */


    var _pages_admin_category_list_category_list_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pages/admin/category/list-category/list-category.component */
    "./src/app/pages/admin/category/list-category/list-category.component.ts");

    var AdminLayoutRoutes = [{
      path: 'landing',
      component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"]
    }, {
      path: 'variable',
      component: _pages_admin_category_list_category_list_category_component__WEBPACK_IMPORTED_MODULE_5__["ListCategoryComponent"]
    }, {
      path: 'charity',
      component: _pages_admin_charity_charities_list_charities_list_component__WEBPACK_IMPORTED_MODULE_3__["CharitiesListComponent"]
    }, {
      path: 'products',
      component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"]
    }, {
      path: 'add-charity',
      component: _pages_admin_charity_charity_create_charity_create_component__WEBPACK_IMPORTED_MODULE_4__["CharityCreateComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/pages/charity-projects/charity-projects.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/charity-projects/charity-projects.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharityProjectsCharityProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvY2hhcml0eS1wcm9qZWN0cy9jaGFyaXR5LXByb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/charity-projects/charity-projects.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/charity-projects/charity-projects.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CharityProjectsComponent */

  /***/
  function srcAppPagesCharityProjectsCharityProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharityProjectsComponent", function () {
      return CharityProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CharityProjectsComponent =
    /*#__PURE__*/
    function () {
      function CharityProjectsComponent() {
        _classCallCheck(this, CharityProjectsComponent);
      }

      _createClass(CharityProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CharityProjectsComponent;
    }();

    CharityProjectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-charity-projects',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./charity-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/charity-projects/charity-projects.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./charity-projects.component.css */
      "./src/app/pages/charity-projects/charity-projects.component.css")).default]
    })], CharityProjectsComponent);
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/pages/landing/landing.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLandingLandingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/landing/landing.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/landing/landing.component.ts ***!
    \****************************************************/

  /*! exports provided: LandingComponent */

  /***/
  function srcAppPagesLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
      return LandingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LandingComponent =
    /*#__PURE__*/
    function () {
      function LandingComponent() {
        _classCallCheck(this, LandingComponent);
      }

      _createClass(LandingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingComponent;
    }();

    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./landing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./landing.component.css */
      "./src/app/pages/landing/landing.component.css")).default]
    })], LandingComponent);
    /***/
  },

  /***/
  "./src/app/pages/products/products.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/products/products.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/products/products.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/products/products.component.ts ***!
    \******************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppPagesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductsComponent =
    /*#__PURE__*/
    function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/products/products.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products.component.css */
      "./src/app/pages/products/products.component.css")).default]
    })], ProductsComponent);
    /***/
  }
}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module-es5.js.map