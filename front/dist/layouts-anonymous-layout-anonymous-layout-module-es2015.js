(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-anonymous-layout-anonymous-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\n      <div class=\"card bg-gradient-default shadow\">\n        <div class=\"card-header bg-transparent\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h6 class=\"text-uppercase text-light ls-1 mb-1\">Overview</h6>\n              <h2 class=\"text-white mb-0\">Sales value</h2>\n            </div>\n            <div class=\"col\">\n              <ul class=\"nav nav-pills justify-content-end\">\n                <li class=\"nav-item mr-2 mr-md-0\" data-toggle=\"chart\" data-target=\"#chart-sales\"  (click)=\"data=datasets[0];updateOptions()\">\n                  <a href=\"javascript:void(0)\" class=\"nav-link py-2 px-3\" [ngClass]=\"{'active':clicked===true}\" data-toggle=\"tab\" (click)=\"clicked=true;clicked1=false\">\n                    <span class=\"d-none d-md-block\">Month</span>\n                    <span class=\"d-md-none\">M</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\" data-toggle=\"chart\" data-target=\"#chart-sales\"  (click)=\"data=datasets[1];updateOptions()\">\n                  <a href=\"javascript:void(0)\" class=\"nav-link py-2 px-3\" [ngClass]=\"{'active':clicked1===true}\" data-toggle=\"tab\" (click)=\"clicked=false;clicked1=true\">\n                    <span class=\"d-none d-md-block\">Week</span>\n                    <span class=\"d-md-none\">W</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- Chart -->\n          <div class=\"chart\">\n            <!-- Chart wrapper -->\n            <canvas id=\"chart-sales\" class=\"chart-canvas\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4\">\n      <div class=\"card shadow\">\n        <div class=\"card-header bg-transparent\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h6 class=\"text-uppercase text-muted ls-1 mb-1\">Performance</h6>\n              <h2 class=\"mb-0\">Total orders</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- Chart -->\n          <div class=\"chart\">\n            <canvas id=\"chart-orders\" class=\"chart-canvas\"></canvas>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-5\">\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h3 class=\"mb-0\">Page visits</h3>\n            </div>\n            <div class=\"col text-right\">\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\">See all</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <!-- Projects table -->\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Page name</th>\n              <th scope=\"col\">Visitors</th>\n              <th scope=\"col\">Unique users</th>\n              <th scope=\"col\">Bounce rate</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th scope=\"row\">\n                /argon/\n              </th>\n              <td>\n                4,569\n              </td>\n              <td>\n                340\n              </td>\n              <td>\n                <i class=\"fas fa-arrow-up text-success mr-3\"></i> 46,53%\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                /argon/index.html\n              </th>\n              <td>\n                3,985\n              </td>\n              <td>\n                319\n              </td>\n              <td>\n                <i class=\"fas fa-arrow-down text-warning mr-3\"></i> 46,53%\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                /argon/charts.html\n              </th>\n              <td>\n                3,513\n              </td>\n              <td>\n                294\n              </td>\n              <td>\n                <i class=\"fas fa-arrow-down text-warning mr-3\"></i> 36,49%\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                /argon/tables.html\n              </th>\n              <td>\n                2,050\n              </td>\n              <td>\n                147\n              </td>\n              <td>\n                <i class=\"fas fa-arrow-up text-success mr-3\"></i> 50,87%\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                /argon/profile.html\n              </th>\n              <td>\n                1,795\n              </td>\n              <td>\n                190\n              </td>\n              <td>\n                <i class=\"fas fa-arrow-down text-danger mr-3\"></i> 46,53%\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col\">\n              <h3 class=\"mb-0\">Social traffic</h3>\n            </div>\n            <div class=\"col text-right\">\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\">See all</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive\">\n          <!-- Projects table -->\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Referral</th>\n              <th scope=\"col\">Visitors</th>\n              <th scope=\"col\"></th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n              <th scope=\"row\">\n                Facebook\n              </th>\n              <td>\n                1,480\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">60%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                Facebook\n              </th>\n              <td>\n                5,480\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">70%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-gradient-success\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                Google\n              </th>\n              <td>\n                4,807\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">80%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-gradient-primary\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                Instagram\n              </th>\n              <td>\n                3,678\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">75%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-gradient-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <th scope=\"row\">\n                twitter\n              </th>\n              <td>\n                2,645\n              </td>\n              <td>\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"mr-2\">30%</span>\n                  <div>\n                    <div class=\"progress\">\n                      <div class=\"progress-bar bg-gradient-warning\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\"></div>\n                    </div>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/anonymous-layout/anonymous-layout.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layouts/anonymous-layout/anonymous-layout.module.ts ***!
  \*********************************************************************/
/*! exports provided: AnonymousLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousLayoutModule", function() { return AnonymousLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _anonymous_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anonymous-layout.routing */ "./src/app/layouts/anonymous-layout/anonymous-layout.routing.ts");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/history/history.component */ "./src/app/pages/history/history.component.ts");






let AnonymousLayoutModule = class AnonymousLayoutModule {
};
AnonymousLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_anonymous_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AnonymousLayoutRoutes"]),
        ]
    })
], AnonymousLayoutModule);



/***/ }),

/***/ "./src/app/layouts/anonymous-layout/anonymous-layout.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layouts/anonymous-layout/anonymous-layout.routing.ts ***!
  \**********************************************************************/
/*! exports provided: AnonymousLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousLayoutRoutes", function() { return AnonymousLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/history/history.component */ "./src/app/pages/history/history.component.ts");


const AnonymousLayoutRoutes = [
    { path: 'history', component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_1__["HistoryComponent"] },
];


/***/ }),

/***/ "./src/app/pages/history/history.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/history/history.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/history/history.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/history/history.component.ts ***!
  \****************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HistoryComponent = class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./history.component.css */ "./src/app/pages/history/history.component.css")).default]
    })
], HistoryComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-anonymous-layout-anonymous-layout-module-es2015.js.map