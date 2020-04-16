function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-template-layout-template-layout-module"], {
  /***/
  "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js ***!
    \***************************************************************************/

  /*! exports provided: ClipboardDirective, ClipboardIfSupportedDirective, ClipboardModule, ClipboardService */

  /***/
  function node_modulesNgxClipboard__ivy_ngcc__Fesm2015NgxClipboardJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function () {
      return ClipboardDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function () {
      return ClipboardIfSupportedDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardModule", function () {
      return ClipboardModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
      return ClipboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-window-token */
    "./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
     */


    var ClipboardService =
    /*#__PURE__*/
    function () {
      function ClipboardService(document, window) {
        _classCallCheck(this, ClipboardService);

        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
      }

      _createClass(ClipboardService, [{
        key: "configure",
        value: function configure(config) {
          this.config = config;
        }
      }, {
        key: "copy",
        value: function copy(content) {
          if (!this.isSupported || !content) {
            return this.pushCopyResponse({
              isSuccess: false,
              content: content
            });
          }

          var copyResult = this.copyFromContent(content);

          if (copyResult) {
            return this.pushCopyResponse({
              content: content,
              isSuccess: copyResult
            });
          }

          return this.pushCopyResponse({
            isSuccess: false,
            content: content
          });
        }
      }, {
        key: "isTargetValid",
        value: function isTargetValid(element) {
          if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
              throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }

            return true;
          }

          throw new Error('Target should be input or textarea');
        }
        /**
         * Attempts to copy from an input `targetElm`
         */

      }, {
        key: "copyFromInputElement",
        value: function copyFromInputElement(targetElm) {
          var isFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          try {
            this.selectTarget(targetElm);
            var re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
          } catch (error) {
            return false;
          }
        }
        /**
         * This is a hack for IE11 to return `true` even if copy fails.
         */

      }, {
        key: "isCopySuccessInIE11",
        value: function isCopySuccessInIE11() {
          var clipboardData = this.window['clipboardData'];

          if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
              return false;
            }
          }

          return true;
        }
        /**
         * Creates a fake textarea element, sets its value from `text` property,
         * and makes a selection on it.
         */

      }, {
        key: "copyFromContent",
        value: function copyFromContent(content) {
          var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.document.body;

          // check if the temp textarea still belongs to the current container.
          // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
          if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
          }

          if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);

            try {
              container.appendChild(this.tempTextArea);
            } catch (error) {
              throw new Error('Container should be a Dom element');
            }
          }

          this.tempTextArea.value = content;
          var toReturn = this.copyFromInputElement(this.tempTextArea, false);

          if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
          }

          return toReturn;
        }
        /**
         * Remove temporary textarea if any exists.
         */

      }, {
        key: "destroy",
        value: function destroy() {
          var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.document.body;

          if (this.tempTextArea) {
            container.removeChild(this.tempTextArea); // removeChild doesn't remove the reference from memory

            this.tempTextArea = undefined;
          }
        }
        /**
         * Select the target html input element.
         */

      }, {
        key: "selectTarget",
        value: function selectTarget(inputElement) {
          inputElement.select();
          inputElement.setSelectionRange(0, inputElement.value.length);
          return inputElement.value.length;
        }
      }, {
        key: "copyText",
        value: function copyText() {
          return this.document.execCommand('copy');
        }
        /**
         * Moves focus away from `target` and back to the trigger, removes current selection.
         */

      }, {
        key: "clearSelection",
        value: function clearSelection(inputElement, window) {
          inputElement && inputElement.focus();
          window.getSelection().removeAllRanges();
        }
        /**
         * Creates a fake textarea for copy command.
         */

      }, {
        key: "createTempTextArea",
        value: function createTempTextArea(doc, window) {
          var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
          var ta;
          ta = doc.createElement('textarea'); // Prevent zooming on iOS

          ta.style.fontSize = '12pt'; // Reset box model

          ta.style.border = '0';
          ta.style.padding = '0';
          ta.style.margin = '0'; // Move element out of screen horizontally

          ta.style.position = 'absolute';
          ta.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

          var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
          ta.style.top = yPosition + 'px';
          ta.setAttribute('readonly', '');
          return ta;
        }
        /**
         * Pushes copy operation response to copySubject, to provide global access
         * to the response.
         */

      }, {
        key: "pushCopyResponse",
        value: function pushCopyResponse(response) {
          this.copySubject.next(response);
        }
        /**
         * @deprecated use pushCopyResponse instead.
         */

      }, {
        key: "pushCopyReponse",
        value: function pushCopyReponse(response) {
          this.pushCopyResponse(response);
        }
      }, {
        key: "isSupported",
        get: function get() {
          return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        }
      }]);

      return ClipboardService;
    }();

    ClipboardService.ɵfac = function ClipboardService_Factory(t) {
      return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8));
    };

    ClipboardService.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
        }]
      }];
    };

    ClipboardService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({
      factory: function ClipboardService_Factory() {
        return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8));
      },
      token: ClipboardService,
      providedIn: "root"
    });
    ClipboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]))], ClipboardService);

    var ClipboardDirective =
    /*#__PURE__*/
    function () {
      function ClipboardDirective(clipboardSrv) {
        _classCallCheck(this, ClipboardDirective);

        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
      } // tslint:disable-next-line:no-empty


      _createClass(ClipboardDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clipboardSrv.destroy(this.container);
        }
      }, {
        key: "onClick",
        value: function onClick(event) {
          if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
          } else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
          } else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
          }
        }
        /**
         * Fires an event based on the copy operation result.
         * @param succeeded
         */

      }, {
        key: "handleResult",
        value: function handleResult(succeeded, copiedContent, event) {
          var response = {
            isSuccess: succeeded,
            event: event
          };

          if (succeeded) {
            response = Object.assign(response, {
              content: copiedContent,
              successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
          } else {
            this.cbOnError.emit(response);
          }

          this.clipboardSrv.pushCopyResponse(response);
        }
      }]);

      return ClipboardDirective;
    }();

    ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) {
      return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService));
    };

    ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: ClipboardDirective,
      selectors: [["", "ngxClipboard", ""]],
      hostBindings: function ClipboardDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClipboardDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event.target);
          });
        }
      },
      inputs: {
        targetElm: ["ngxClipboard", "targetElm"],
        container: "container",
        cbContent: "cbContent",
        cbSuccessMsg: "cbSuccessMsg"
      },
      outputs: {
        cbOnSuccess: "cbOnSuccess",
        cbOnError: "cbOnError"
      }
    });

    ClipboardDirective.ctorParameters = function () {
      return [{
        type: ClipboardService
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ngxClipboard')], ClipboardDirective.prototype, "targetElm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ClipboardDirective.prototype, "container", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ClipboardDirective.prototype, "cbContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ClipboardDirective.prototype, "cbSuccessMsg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ClipboardDirective.prototype, "cbOnSuccess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], ClipboardDirective.prototype, "cbOnError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event.target'])], ClipboardDirective.prototype, "onClick", null);

    var ClipboardIfSupportedDirective =
    /*#__PURE__*/
    function () {
      function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        _classCallCheck(this, ClipboardIfSupportedDirective);

        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
      }

      _createClass(ClipboardIfSupportedDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
          }
        }
      }]);

      return ClipboardIfSupportedDirective;
    }();

    ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) {
      return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]));
    };

    ClipboardIfSupportedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: ClipboardIfSupportedDirective,
      selectors: [["", "ngxClipboardIfSupported", ""]]
    });

    ClipboardIfSupportedDirective.ctorParameters = function () {
      return [{
        type: ClipboardService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
      }];
    };

    var ClipboardModule = function ClipboardModule() {
      _classCallCheck(this, ClipboardModule);
    };

    ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ClipboardModule
    });
    ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ClipboardModule_Factory(t) {
        return new (t || ClipboardModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
            args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[ngxClipboard]'
        }]
      }], function () {
        return [{
          type: ClipboardService
        }];
      }, {
        cbOnSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        cbOnError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
          args: ['click', ['$event.target']]
        }],
        targetElm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['ngxClipboard']
        }],
        container: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        cbContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        cbSuccessMsg: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardIfSupportedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[ngxClipboardIfSupported]'
        }]
      }], function () {
        return [{
          type: ClipboardService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]
        }];
      }, null);
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClipboardModule, {
        declarations: function declarations() {
          return [ClipboardDirective, ClipboardIfSupportedDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        },
        exports: function exports() {
          return [ClipboardDirective, ClipboardIfSupportedDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
          exports: [ClipboardDirective, ClipboardIfSupportedDirective]
        }]
      }], null, null);
    })();
    /*
     * Public API Surface of ngx-clipboard
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-clipboard.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js":
  /*!*********************************************************************************!*\
    !*** ./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js ***!
    \*********************************************************************************/

  /*! exports provided: WINDOW */

  /***/
  function node_modulesNgxWindowToken__ivy_ngcc__Fesm2015NgxWindowTokenJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WINDOW", function () {
      return WINDOW;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? {
      providedIn: 'root',
      factory: function factory() {
        return window;
      }
    } : undefined);
    /*
     * Public API Surface of ngx-window-token
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-window-token.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesIconsIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-pie\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last week</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-users\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\n                <span class=\"text-nowrap\">Since yesterday</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                    <i class=\"fas fa-percent\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header bg-transparent\">\n          <h3 class=\"mb-0\">Icons</h3>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row icon-examples\">\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'active-40' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'active-40'\" (cbOnSuccess) = \"copy = 'active-40'\">\n                <div>\n                  <i class=\"ni ni-active-40\"></i>\n                  <span>active-40</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'air-baloon' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'air-baloon'\" (cbOnSuccess) = \"copy = 'air-baloon'\">\n                <div>\n                  <i class=\"ni ni-air-baloon\"></i>\n                  <span>air-baloon</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'album-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'album-2'\" (cbOnSuccess) = \"copy = 'album-2'\">\n                <div>\n                  <i class=\"ni ni-album-2\"></i>\n                  <span>album-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'align-center' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'align-center'\" (cbOnSuccess) = \"copy = 'align-center'\">\n                <div>\n                  <i class=\"ni ni-align-center\"></i>\n                  <span>align-center</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'align-left-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'align-left-2'\" (cbOnSuccess) = \"copy = 'align-left-2'\">\n                <div>\n                  <i class=\"ni ni-align-left-2\"></i>\n                  <span>align-left-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ambulance' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ambulance'\" (cbOnSuccess) = \"copy = 'ambulance'\">\n                <div>\n                  <i class=\"ni ni-ambulance\"></i>\n                  <span>ambulance</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'app' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'app'\" (cbOnSuccess) = \"copy = 'app'\">\n                <div>\n                  <i class=\"ni ni-app\"></i>\n                  <span>app</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'archive-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'archive-2'\" (cbOnSuccess) = \"copy = 'archive-2'\">\n                <div>\n                  <i class=\"ni ni-archive-2\"></i>\n                  <span>archive-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'atom' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'atom'\" (cbOnSuccess) = \"copy = 'atom'\">\n                <div>\n                  <i class=\"ni ni-atom\"></i>\n                  <span>atom</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'badge' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'badge'\" (cbOnSuccess) = \"copy = 'badge'\">\n                <div>\n                  <i class=\"ni ni-badge\"></i>\n                  <span>badge</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bag-17' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bag-17'\" (cbOnSuccess) = \"copy = 'bag-17'\">\n                <div>\n                  <i class=\"ni ni-bag-17\"></i>\n                  <span>bag-17</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'basket' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'basket'\" (cbOnSuccess) = \"copy = 'basket'\">\n                <div>\n                  <i class=\"ni ni-basket\"></i>\n                  <span>basket</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bell-55' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bell-55'\" (cbOnSuccess) = \"copy = 'bell-55'\">\n                <div>\n                  <i class=\"ni ni-bell-55\"></i>\n                  <span>bell-55</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-down' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-down'\" (cbOnSuccess) = \"copy = 'bold-down'\">\n                <div>\n                  <i class=\"ni ni-bold-down\"></i>\n                  <span>bold-down</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-left' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-left'\" (cbOnSuccess) = \"copy = 'bold-left'\">\n                <div>\n                  <i class=\"ni ni-bold-left\"></i>\n                  <span>bold-left</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-right' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-right'\" (cbOnSuccess) = \"copy = 'bold-right'\">\n                <div>\n                  <i class=\"ni ni-bold-right\"></i>\n                  <span>bold-right</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-up' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-up'\" (cbOnSuccess) = \"copy = 'bold-up'\">\n                <div>\n                  <i class=\"ni ni-bold-up\"></i>\n                  <span>bold-up</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold'\" (cbOnSuccess) = \"copy = 'bold'\">\n                <div>\n                  <i class=\"ni ni-bold\"></i>\n                  <span>bold</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'book-bookmark' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'book-bookmark'\" (cbOnSuccess) = \"copy = 'book-bookmark'\">\n                <div>\n                  <i class=\"ni ni-book-bookmark\"></i>\n                  <span>book-bookmark</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'books' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'books'\" (cbOnSuccess) = \"copy = 'books'\">\n                <div>\n                  <i class=\"ni ni-books\"></i>\n                  <span>books</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'box-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'box-2'\" (cbOnSuccess) = \"copy = 'box-2'\">\n                <div>\n                  <i class=\"ni ni-box-2\"></i>\n                  <span>box-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'briefcase-24' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'briefcase-24'\" (cbOnSuccess) = \"copy = 'briefcase-24'\">\n                <div>\n                  <i class=\"ni ni-briefcase-24\"></i>\n                  <span>briefcase-24</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'building' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'building'\" (cbOnSuccess) = \"copy = 'building'\">\n                <div>\n                  <i class=\"ni ni-building\"></i>\n                  <span>building</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bulb-61' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bulb-61'\" (cbOnSuccess) = \"copy = 'bulb-61'\">\n                <div>\n                  <i class=\"ni ni-bulb-61\"></i>\n                  <span>bulb-61</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bullet-list-67' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bullet-list-67'\" (cbOnSuccess) = \"copy = 'bullet-list-67'\">\n                <div>\n                  <i class=\"ni ni-bullet-list-67\"></i>\n                  <span>bullet-list-67</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bus-front-12' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bus-front-12'\" (cbOnSuccess) = \"copy = 'bus-front-12'\">\n                <div>\n                  <i class=\"ni ni-bus-front-12\"></i>\n                  <span>bus-front-12</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-pause' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-pause'\" (cbOnSuccess) = \"copy = 'button-pause'\">\n                <div>\n                  <i class=\"ni ni-button-pause\"></i>\n                  <span>button-pause</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-play' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-play'\" (cbOnSuccess) = \"copy = 'button-play'\">\n                <div>\n                  <i class=\"ni ni-button-play\"></i>\n                  <span>button-play</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-power' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-power'\" (cbOnSuccess) = \"copy = 'button-power'\">\n                <div>\n                  <i class=\"ni ni-button-power\"></i>\n                  <span>button-power</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'calendar-grid-58' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'calendar-grid-58'\" (cbOnSuccess) = \"copy = 'calendar-grid-58'\">\n                <div>\n                  <i class=\"ni ni-calendar-grid-58\"></i>\n                  <span>calendar-grid-58</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'camera-compact' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'camera-compact'\" (cbOnSuccess) = \"copy = 'camera-compact'\">\n                <div>\n                  <i class=\"ni ni-camera-compact\"></i>\n                  <span>camera-compact</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'caps-small' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'caps-small'\" (cbOnSuccess) = \"copy = 'caps-small'\">\n                <div>\n                  <i class=\"ni ni-caps-small\"></i>\n                  <span>caps-small</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cart' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cart'\" (cbOnSuccess) = \"copy = 'cart'\">\n                <div>\n                  <i class=\"ni ni-cart\"></i>\n                  <span>cart</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chart-bar-32' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chart-bar-32'\" (cbOnSuccess) = \"copy = 'chart-bar-32'\">\n                <div>\n                  <i class=\"ni ni-chart-bar-32\"></i>\n                  <span>chart-bar-32</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chart-pie-35' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chart-pie-35'\" (cbOnSuccess) = \"copy = 'chart-pie-35'\">\n                <div>\n                  <i class=\"ni ni-chart-pie-35\"></i>\n                  <span>chart-pie-35</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chat-round' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chat-round'\" (cbOnSuccess) = \"copy = 'chat-round'\">\n                <div>\n                  <i class=\"ni ni-chat-round\"></i>\n                  <span>chat-round</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'check-bold' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'check-bold'\" (cbOnSuccess) = \"copy = 'check-bold'\">\n                <div>\n                  <i class=\"ni ni-check-bold\"></i>\n                  <span>check-bold</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'circle-08' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'circle-08'\" (cbOnSuccess) = \"copy = 'circle-08'\">\n                <div>\n                  <i class=\"ni ni-circle-08\"></i>\n                  <span>circle-08</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cloud-download-95' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cloud-download-95'\" (cbOnSuccess) = \"copy = 'cloud-download-95'\">\n                <div>\n                  <i class=\"ni ni-cloud-download-95\"></i>\n                  <span>cloud-download-95</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cloud-upload-96' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cloud-upload-96'\" (cbOnSuccess) = \"copy = 'cloud-upload-96'\">\n                <div>\n                  <i class=\"ni ni-cloud-upload-96\"></i>\n                  <span>cloud-upload-96</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'compass-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'compass-04'\" (cbOnSuccess) = \"copy = 'compass-04'\">\n                <div>\n                  <i class=\"ni ni-compass-04\"></i>\n                  <span>compass-04</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'controller' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'controller'\" (cbOnSuccess) = \"copy = 'controller'\">\n                <div>\n                  <i class=\"ni ni-controller\"></i>\n                  <span>controller</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'credit-card' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'credit-card'\" (cbOnSuccess) = \"copy = 'credit-card'\">\n                <div>\n                  <i class=\"ni ni-credit-card\"></i>\n                  <span>credit-card</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'curved-next' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'curved-next'\" (cbOnSuccess) = \"copy = 'curved-next'\">\n                <div>\n                  <i class=\"ni ni-curved-next\"></i>\n                  <span>curved-next</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'delivery-fast' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'delivery-fast'\" (cbOnSuccess) = \"copy = 'delivery-fast'\">\n                <div>\n                  <i class=\"ni ni-delivery-fast\"></i>\n                  <span>delivery-fast</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'diamond' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'diamond'\" (cbOnSuccess) = \"copy = 'diamond'\">\n                <div>\n                  <i class=\"ni ni-diamond\"></i>\n                  <span>diamond</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'email-83' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'email-83'\" (cbOnSuccess) = \"copy = 'email-83'\">\n                <div>\n                  <i class=\"ni ni-email-83\"></i>\n                  <span>email-83</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-add' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-add'\" (cbOnSuccess) = \"copy = 'fat-add'\">\n                <div>\n                  <i class=\"ni ni-fat-add\"></i>\n                  <span>fat-add</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-delete' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-delete'\" (cbOnSuccess) = \"copy = 'fat-delete'\">\n                <div>\n                  <i class=\"ni ni-fat-delete\"></i>\n                  <span>fat-delete</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-remove' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-remove'\" (cbOnSuccess) = \"copy = 'fat-remove'\">\n                <div>\n                  <i class=\"ni ni-fat-remove\"></i>\n                  <span>fat-remove</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'favourite-28' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'favourite-28'\" (cbOnSuccess) = \"copy = 'favourite-28'\">\n                <div>\n                  <i class=\"ni ni-favourite-28\"></i>\n                  <span>favourite-28</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'folder-17' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'folder-17'\" (cbOnSuccess) = \"copy = 'folder-17'\">\n                <div>\n                  <i class=\"ni ni-folder-17\"></i>\n                  <span>folder-17</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'glasses-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'glasses-2'\" (cbOnSuccess) = \"copy = 'glasses-2'\">\n                <div>\n                  <i class=\"ni ni-glasses-2\"></i>\n                  <span>glasses-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'hat-3' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'hat-3'\" (cbOnSuccess) = \"copy = 'hat-3'\">\n                <div>\n                  <i class=\"ni ni-hat-3\"></i>\n                  <span>hat-3</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'headphones' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'headphones'\" (cbOnSuccess) = \"copy = 'headphones'\">\n                <div>\n                  <i class=\"ni ni-headphones\"></i>\n                  <span>headphones</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'html5' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'html5'\" (cbOnSuccess) = \"copy = 'html5'\">\n                <div>\n                  <i class=\"ni ni-html5\"></i>\n                  <span>html5</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'istanbul' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'istanbul'\" (cbOnSuccess) = \"copy = 'istanbul'\">\n                <div>\n                  <i class=\"ni ni-istanbul\"></i>\n                  <span>istanbul</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'circle-08' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'circle-08'\" (cbOnSuccess) = \"copy = 'circle-08'\">\n                <div>\n                  <i class=\"ni ni-circle-08\"></i>\n                  <span>circle-08</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'key-25' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'key-25'\" (cbOnSuccess) = \"copy = 'key-25'\">\n                <div>\n                  <i class=\"ni ni-key-25\"></i>\n                  <span>key-25</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'laptop' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'laptop'\" (cbOnSuccess) = \"copy = 'laptop'\">\n                <div>\n                  <i class=\"ni ni-laptop\"></i>\n                  <span>laptop</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'like-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'like-2'\" (cbOnSuccess) = \"copy = 'like-2'\">\n                <div>\n                  <i class=\"ni ni-like-2\"></i>\n                  <span>like-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'lock-circle-open' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'lock-circle-open'\" (cbOnSuccess) = \"copy = 'lock-circle-open'\">\n                <div>\n                  <i class=\"ni ni-lock-circle-open\"></i>\n                  <span>lock-circle-open</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'map-big' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'map-big'\" (cbOnSuccess) = \"copy = 'map-big'\">\n                <div>\n                  <i class=\"ni ni-map-big\"></i>\n                  <span>map-big</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'mobile-button' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'mobile-button'\" (cbOnSuccess) = \"copy = 'mobile-button'\">\n                <div>\n                  <i class=\"ni ni-mobile-button\"></i>\n                  <span>mobile-button</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'money-coins' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'money-coins'\" (cbOnSuccess) = \"copy = 'money-coins'\">\n                <div>\n                  <i class=\"ni ni-money-coins\"></i>\n                  <span>money-coins</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'note-03' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'note-03'\" (cbOnSuccess) = \"copy = 'note-03'\">\n                <div>\n                  <i class=\"ni ni-note-03\"></i>\n                  <span>note-03</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'notification-70' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'notification-70'\" (cbOnSuccess) = \"copy = 'notification-70'\">\n                <div>\n                  <i class=\"ni ni-notification-70\"></i>\n                  <span>notification-70</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'palette' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'palette'\" (cbOnSuccess) = \"copy = 'palette'\">\n                <div>\n                  <i class=\"ni ni-palette\"></i>\n                  <span>palette</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'paper-diploma' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'paper-diploma'\" (cbOnSuccess) = \"copy = 'paper-diploma'\">\n                <div>\n                  <i class=\"ni ni-paper-diploma\"></i>\n                  <span>paper-diploma</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'pin-3' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'pin-3'\" (cbOnSuccess) = \"copy = 'pin-3'\">\n                <div>\n                  <i class=\"ni ni-pin-3\"></i>\n                  <span>pin-3</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'planet' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'planet'\" (cbOnSuccess) = \"copy = 'planet'\">\n                <div>\n                  <i class=\"ni ni-planet\"></i>\n                  <span>planet</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ruler-pencil' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ruler-pencil'\" (cbOnSuccess) = \"copy = 'ruler-pencil'\">\n                <div>\n                  <i class=\"ni ni-ruler-pencil\"></i>\n                  <span>ruler-pencil</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'satisfied' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'satisfied'\" (cbOnSuccess) = \"copy = 'satisfied'\">\n                <div>\n                  <i class=\"ni ni-satisfied\"></i>\n                  <span>satisfied</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'scissors' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'scissors'\" (cbOnSuccess) = \"copy = 'scissors'\">\n                <div>\n                  <i class=\"ni ni-scissors\"></i>\n                  <span>scissors</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'send' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'send'\" (cbOnSuccess) = \"copy = 'send'\">\n                <div>\n                  <i class=\"ni ni-send\"></i>\n                  <span>send</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'settings-gear-65' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'settings-gear-65'\" (cbOnSuccess) = \"copy = 'settings-gear-65'\">\n                <div>\n                  <i class=\"ni ni-settings-gear-65\"></i>\n                  <span>settings-gear-65</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'settings' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'settings'\" (cbOnSuccess) = \"copy = 'settings'\">\n                <div>\n                  <i class=\"ni ni-settings\"></i>\n                  <span>settings</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'single-02' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'single-02'\" (cbOnSuccess) = \"copy = 'single-02'\">\n                <div>\n                  <i class=\"ni ni-single-02\"></i>\n                  <span>single-02</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'single-copy-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'single-copy-04'\" (cbOnSuccess) = \"copy = 'single-copy-04'\">\n                <div>\n                  <i class=\"ni ni-single-copy-04\"></i>\n                  <span>single-copy-04</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'sound-wave' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'sound-wave'\" (cbOnSuccess) = \"copy = 'sound-wave'\">\n                <div>\n                  <i class=\"ni ni-sound-wave\"></i>\n                  <span>sound-wave</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'spaceship' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'spaceship'\" (cbOnSuccess) = \"copy = 'spaceship'\">\n                <div>\n                  <i class=\"ni ni-spaceship\"></i>\n                  <span>spaceship</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'square-pin' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'square-pin'\" (cbOnSuccess) = \"copy = 'square-pin'\">\n                <div>\n                  <i class=\"ni ni-square-pin\"></i>\n                  <span>square-pin</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'support-16' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'support-16'\" (cbOnSuccess) = \"copy = 'support-16'\">\n                <div>\n                  <i class=\"ni ni-support-16\"></i>\n                  <span>support-16</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tablet-button' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tablet-button'\" (cbOnSuccess) = \"copy = 'tablet-button'\">\n                <div>\n                  <i class=\"ni ni-tablet-button\"></i>\n                  <span>tablet-button</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tag' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tag'\" (cbOnSuccess) = \"copy = 'tag'\">\n                <div>\n                  <i class=\"ni ni-tag\"></i>\n                  <span>tag</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tie-bow' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tie-bow'\" (cbOnSuccess) = \"copy = 'tie-bow'\">\n                <div>\n                  <i class=\"ni ni-tie-bow\"></i>\n                  <span>tie-bow</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'time-alarm' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'time-alarm'\" (cbOnSuccess) = \"copy = 'time-alarm'\">\n                <div>\n                  <i class=\"ni ni-time-alarm\"></i>\n                  <span>time-alarm</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'trophy' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'trophy'\" (cbOnSuccess) = \"copy = 'trophy'\">\n                <div>\n                  <i class=\"ni ni-trophy\"></i>\n                  <span>trophy</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tv-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tv-2'\" (cbOnSuccess) = \"copy = 'tv-2'\">\n                <div>\n                  <i class=\"ni ni-tv-2\"></i>\n                  <span>tv-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'umbrella-13' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'umbrella-13'\" (cbOnSuccess) = \"copy = 'umbrella-13'\">\n                <div>\n                  <i class=\"ni ni-umbrella-13\"></i>\n                  <span>umbrella-13</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'user-run' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'user-run'\" (cbOnSuccess) = \"copy = 'user-run'\">\n                <div>\n                  <i class=\"ni ni-user-run\"></i>\n                  <span>user-run</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'vector' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'vector'\" (cbOnSuccess) = \"copy = 'vector'\">\n                <div>\n                  <i class=\"ni ni-vector\"></i>\n                  <span>vector</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'watch-time' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'watch-time'\" (cbOnSuccess) = \"copy = 'watch-time'\">\n                <div>\n                  <i class=\"ni ni-watch-time\"></i>\n                  <span>watch-time</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'world' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'world'\" (cbOnSuccess) = \"copy = 'world'\">\n                <div>\n                  <i class=\"ni ni-world\"></i>\n                  <span>world</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'zoom-split-in' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'zoom-split-in'\" (cbOnSuccess) = \"copy = 'zoom-split-in'\">\n                <div>\n                  <i class=\"ni ni-zoom-split-in\"></i>\n                  <span>zoom-split-in</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'collection' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'collection'\" (cbOnSuccess) = \"copy = 'collection'\">\n                <div>\n                  <i class=\"ni ni-collection\"></i>\n                  <span>collection</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'image' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'image'\" (cbOnSuccess) = \"copy = 'image'\">\n                <div>\n                  <i class=\"ni ni-image\"></i>\n                  <span>image</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'shop' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'shop'\" (cbOnSuccess) = \"copy = 'shop'\">\n                <div>\n                  <i class=\"ni ni-shop\"></i>\n                  <span>shop</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ungroup' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ungroup'\" (cbOnSuccess) = \"copy = 'ungroup'\">\n                <div>\n                  <i class=\"ni ni-ungroup\"></i>\n                  <span>ungroup</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'world-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'world-2'\" (cbOnSuccess) = \"copy = 'world-2'\">\n                <div>\n                  <i class=\"ni ni-world-2\"></i>\n                  <span>world-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ui-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ui-04'\" (cbOnSuccess) = \"copy = 'ui-04'\">\n                <div>\n                  <i class=\"ni ni-ui-04\"></i>\n                  <span>ui-04</span>\n                </div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapsMapsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-pie\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last week</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-users\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\n                <span class=\"text-nowrap\">Since yesterday</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                    <i class=\"fas fa-percent\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow border-0\">\n        <div id=\"map-canvas\" class=\"map-canvas\" data-lat=\"40.748817\" data-lng=\"-73.985428\" style=\"height: 600px;\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTablesTablesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      <div class=\"row\">\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-bar\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\n                    <i class=\"fas fa-chart-pie\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\n                <span class=\"text-nowrap\">Since last week</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n                    <i class=\"fas fa-users\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\n                <span class=\"text-nowrap\">Since yesterday</span>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6\">\n          <div class=\"card card-stats mb-4 mb-xl-0\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\n                </div>\n                <div class=\"col-auto\">\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\n                    <i class=\"fas fa-percent\"></i>\n                  </div>\n                </div>\n              </div>\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\n                <span class=\"text-nowrap\">Since last month</span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">Applications Users</h3>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">Id</th>\n              <th scope=\"col\">Username</th>\n              <th scope=\"col\">First Name</th>\n              <th scope=\"col\">Last Name</th>\n              <th scope=\"col\">Email</th>\n              <th scope=\"col\">Status</th>\n              <th scope=\"col\"></th>\n            </tr>\n            </thead>\n            <tbody >\n            <tr >\n              <td>\n                ffd\n              </td>\n              <td>\n                qdsd\n              </td>\n              <td>\n                qsdqsd\n              </td>\n              <td>\n                qsdqsd\n              </td>\n              <td>\n                qsdsd\n              </td>\n              <td>\n                <span  class=\"badge badge-dot\">\n                  <i class=\"bg-success\"></i> active\n                </span>\n\n              </td>\n              <td class=\"text-right\">\n                <div ngbDropdown placement=\"bottom-right\">\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                    <i class=\"fas fa-ellipsis-v\"></i>\n                  </a>\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                  </div>\n                </div>\n              </td>\n            </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer py-4\">\n          <nav aria-label=\"...\">\n            <ul class=\"pagination justify-content-end mb-0\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\n                  <i class=\"fas fa-angle-left\"></i>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"javascript:void(0)\">\n                  <i class=\"fas fa-angle-right\"></i>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 class=\"mb-0\">Card tables</h3>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-flush\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">Project</th>\n                <th scope=\"col\">Budget</th>\n                <th scope=\"col\">Status</th>\n                <th scope=\"col\">Users</th>\n                <th scope=\"col\">Completion</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n<!--              <tr>-->\n<!--                <th scope=\"row\">-->\n<!--                  <div class=\"media align-items-center\">-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">-->\n<!--                    </a>-->\n<!--                    <div class=\"media-body\">-->\n<!--                      <span class=\"mb-0 text-sm\">Argon Design System</span>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </th>-->\n<!--                <td>-->\n<!--                  $2,500 USD-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <span class=\"badge badge-dot mr-4\">-->\n<!--                    <i class=\"bg-warning\"></i> pending-->\n<!--                  </span>-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <div class=\"avatar-group\">-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <div class=\"d-flex align-items-center\">-->\n<!--                    <span class=\"mr-2\">60%</span>-->\n<!--                    <div>-->\n<!--                      <div class=\"progress\">-->\n<!--                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>-->\n<!--                      </div>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--                <td class=\"text-right\">-->\n<!--                  <div ngbDropdown placement=\"bottom-right\">-->\n<!--                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>-->\n<!--                      <i class=\"fas fa-ellipsis-v\"></i>-->\n<!--                    </a>-->\n<!--                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--              </tr>-->\n<!--              <tr>-->\n<!--                <th scope=\"row\">-->\n<!--                  <div class=\"media align-items-center\">-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/angular.jpg\">-->\n<!--                    </a>-->\n<!--                    <div class=\"media-body\">-->\n<!--                      <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </th>-->\n<!--                <td>-->\n<!--                  $1,800 USD-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <span class=\"badge badge-dot\">-->\n<!--                    <i class=\"bg-success\"></i> completed-->\n<!--                  </span>-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <div class=\"avatar-group\">-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <div class=\"d-flex align-items-center\">-->\n<!--                    <span class=\"mr-2\">100%</span>-->\n<!--                    <div>-->\n<!--                      <div class=\"progress\">-->\n<!--                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>-->\n<!--                      </div>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--                <td class=\"text-right\">-->\n<!--                  <div ngbDropdown  placement=\"bottom-right\">-->\n<!--                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>-->\n<!--                      <i class=\"fas fa-ellipsis-v\"></i>-->\n<!--                    </a>-->\n<!--                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--              </tr>-->\n<!--              <tr>-->\n<!--                <th scope=\"row\">-->\n<!--                  <div class=\"media align-items-center\">-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/sketch.jpg\">-->\n<!--                    </a>-->\n<!--                    <div class=\"media-body\">-->\n<!--                      <span class=\"mb-0 text-sm\">Black Dashboard</span>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </th>-->\n<!--                <td>-->\n<!--                  $3,150 USD-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <span class=\"badge badge-dot mr-4\">-->\n<!--                    <i class=\"bg-danger\"></i> delayed-->\n<!--                  </span>-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <div class=\"avatar-group\">-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">-->\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">-->\n<!--                    </a>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--                <td>-->\n<!--                  <div class=\"d-flex align-items-center\">-->\n<!--                    <span class=\"mr-2\">72%</span>-->\n<!--                    <div>-->\n<!--                      <div class=\"progress\">-->\n<!--                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>-->\n<!--                      </div>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--                <td class=\"text-right\">-->\n<!--                  <div ngbDropdown  placement=\"top-right\">-->\n<!--                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>-->\n<!--                      <i class=\"fas fa-ellipsis-v\"></i>-->\n<!--                    </a>-->\n<!--                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>-->\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>-->\n<!--                    </div>-->\n<!--                  </div>-->\n<!--                </td>-->\n<!--              </tr>-->\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/react.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">React Material Dashboard</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $4,400 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot\">\n                    <i class=\"bg-info\"></i> on schedule\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">90%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown   placement=\"top-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/vue.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $2,200 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot mr-4\">\n                    <i class=\"bg-success\"></i> completed\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">100%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown   placement=\"top-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"card-footer py-4\">\n          <nav aria-label=\"...\">\n            <ul class=\"pagination justify-content-end mb-0\">\n              <li class=\"page-item disabled\">\n                <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\n                  <i class=\"fas fa-angle-left\"></i>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\n              </li>\n              <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"javascript:void(0)\">\n                  <i class=\"fas fa-angle-right\"></i>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Dark table -->\n  <div class=\"row mt-5\">\n    <div class=\"col\">\n      <div class=\"card bg-default shadow\">\n        <div class=\"card-header bg-transparent border-0\">\n          <h3 class=\"text-white mb-0\">Card tables</h3>\n        </div>\n        <div class=\"table-responsive\">\n          <table class=\"table align-items-center table-dark table-flush\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th scope=\"col\">Project</th>\n                <th scope=\"col\">Budget</th>\n                <th scope=\"col\">Status</th>\n                <th scope=\"col\">Users</th>\n                <th scope=\"col\">Completion</th>\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">Argon Design System</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $2,500 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot mr-4\">\n                    <i class=\"bg-warning\"></i> pending\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">60%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown placement=\"bottom-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/angular.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $1,800 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot\">\n                    <i class=\"bg-success\"></i> completed\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">100%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown placement=\"bottom-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/sketch.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">Black Dashboard</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $3,150 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot mr-4\">\n                    <i class=\"bg-danger\"></i> delayed\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">72%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown placement=\"top-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/react.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">React Material Dashboard</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $4,400 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot\">\n                    <i class=\"bg-info\"></i> on schedule\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">90%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown placement=\"top-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <th scope=\"row\">\n                  <div class=\"media align-items-center\">\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/vue.jpg\">\n                    </a>\n                    <div class=\"media-body\">\n                      <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\n                    </div>\n                  </div>\n                </th>\n                <td>\n                  $2,200 USD\n                </td>\n                <td>\n                  <span class=\"badge badge-dot mr-4\">\n                    <i class=\"bg-success\"></i> completed\n                  </span>\n                </td>\n                <td>\n                  <div class=\"avatar-group\">\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n                    </a>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"d-flex align-items-center\">\n                    <span class=\"mr-2\">100%</span>\n                    <div>\n                      <div class=\"progress\">\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n                <td class=\"text-right\">\n                  <div ngbDropdown placement=\"top-right\">\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\n                      <i class=\"fas fa-ellipsis-v\"></i>\n                    </a>\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUserProfileUserProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-image: url(assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;\">\n  <!-- Mask -->\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\n  <!-- Header container -->\n  <div class=\"container-fluid d-flex align-items-center\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-10\">\n        <h1 class=\"display-2 text-white\">Hello Jesse</h1>\n        <p class=\"text-white mt-0 mb-5\">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>\n        <a href=\"#!\" class=\"btn btn-info\">Edit profile</a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid mt--7\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 order-xl-2 mb-5 mb-xl-0\">\n      <div class=\"card card-profile shadow\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-3 order-lg-2\">\n            <div class=\"card-profile-image\">\n              <a href=\"javascript:void(0)\">\n                <img src=\"assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\n              </a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\n          <div class=\"d-flex justify-content-between\">\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\n          </div>\n        </div>\n        <div class=\"card-body pt-0 pt-md-4\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\n                <div>\n                  <span class=\"heading\">22</span>\n                  <span class=\"description\">Friends</span>\n                </div>\n                <div>\n                  <span class=\"heading\">10</span>\n                  <span class=\"description\">Photos</span>\n                </div>\n                <div>\n                  <span class=\"heading\">89</span>\n                  <span class=\"description\">Comments</span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"text-center\">\n            <h3>\n              Jessica Jones<span class=\"font-weight-light\">, 27</span>\n            </h3>\n            <div class=\"h5 font-weight-300\">\n              <i class=\"ni location_pin mr-2\"></i>Bucharest, Romania\n            </div>\n            <div class=\"h5 mt-4\">\n              <i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer\n            </div>\n            <div>\n              <i class=\"ni education_hat mr-2\"></i>University of Computer Science\n            </div>\n            <hr class=\"my-4\" />\n            <p>Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music.</p>\n            <a href=\"javascript:void(0)\">Show more</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-8 order-xl-1\">\n      <div class=\"card bg-secondary shadow\">\n        <div class=\"card-header bg-white border-0\">\n          <div class=\"row align-items-center\">\n            <div class=\"col-8\">\n              <h3 class=\"mb-0\">My account</h3>\n            </div>\n            <div class=\"col-4 text-right\">\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\">Settings</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <form>\n            <h6 class=\"heading-small text-muted mb-4\">User information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-username\">Username</label>\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" placeholder=\"Username\" value=\"lucky.jesse\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-email\">Email address</label>\n                    <input type=\"email\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"jesse@example.com\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-first-name\">First name</label>\n                    <input type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"First name\" value=\"Lucky\">\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-last-name\">Last name</label>\n                    <input type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"Last name\" value=\"Jesse\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Address -->\n            <h6 class=\"heading-small text-muted mb-4\">Contact information</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-address\">Address</label>\n                    <input id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"Home Address\" value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\" type=\"text\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-city\">City</label>\n                    <input type=\"text\" id=\"input-city\" class=\"form-control form-control-alternative\" placeholder=\"City\" value=\"New York\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Country</label>\n                    <input type=\"text\" id=\"input-country\" class=\"form-control form-control-alternative\" placeholder=\"Country\" value=\"United States\">\n                  </div>\n                </div>\n                <div class=\"col-lg-4\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\" for=\"input-country\">Postal code</label>\n                    <input type=\"number\" id=\"input-postal-code\" class=\"form-control form-control-alternative\" placeholder=\"Postal code\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <hr class=\"my-4\" />\n            <!-- Description -->\n            <h6 class=\"heading-small text-muted mb-4\">About me</h6>\n            <div class=\"pl-lg-4\">\n              <div class=\"form-group\">\n                <label>About Me</label>\n                <textarea rows=\"4\" class=\"form-control form-control-alternative\" placeholder=\"A few words about you ...\">A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</textarea>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/layouts/template-layout/template-layout.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layouts/template-layout/template-layout.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TemplateLayoutModule */

  /***/
  function srcAppLayoutsTemplateLayoutTemplateLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateLayoutModule", function () {
      return TemplateLayoutModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _template_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./template-layout.routing */
    "./src/app/layouts/template-layout/template-layout.routing.ts");
    /* harmony import */


    var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../pages/user-profile/user-profile.component */
    "./src/app/pages/user-profile/user-profile.component.ts");
    /* harmony import */


    var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pages/tables/tables.component */
    "./src/app/pages/tables/tables.component.ts");
    /* harmony import */


    var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pages/icons/icons.component */
    "./src/app/pages/icons/icons.component.ts");
    /* harmony import */


    var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pages/maps/maps.component */
    "./src/app/pages/maps/maps.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");

    var TemplateLayoutModule = function TemplateLayoutModule() {
      _classCallCheck(this, TemplateLayoutModule);
    };

    TemplateLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"], _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"], _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"], _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_template_layout_routing__WEBPACK_IMPORTED_MODULE_4__["TemplateLayoutRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]]
    })], TemplateLayoutModule);
    /***/
  },

  /***/
  "./src/app/layouts/template-layout/template-layout.routing.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layouts/template-layout/template-layout.routing.ts ***!
    \********************************************************************/

  /*! exports provided: TemplateLayoutRoutes */

  /***/
  function srcAppLayoutsTemplateLayoutTemplateLayoutRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateLayoutRoutes", function () {
      return TemplateLayoutRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../pages/user-profile/user-profile.component */
    "./src/app/pages/user-profile/user-profile.component.ts");
    /* harmony import */


    var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pages/tables/tables.component */
    "./src/app/pages/tables/tables.component.ts");
    /* harmony import */


    var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pages/icons/icons.component */
    "./src/app/pages/icons/icons.component.ts");
    /* harmony import */


    var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pages/maps/maps.component */
    "./src/app/pages/maps/maps.component.ts");

    var TemplateLayoutRoutes = [{
      path: 'user-profile',
      component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"]
    }, {
      path: 'tables',
      component: _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"]
    }, {
      path: 'icons',
      component: _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]
    }, {
      path: 'maps',
      component: _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/pages/icons/icons.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/pages/icons/icons.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesIconsIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/icons/icons.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/icons/icons.component.ts ***!
    \************************************************/

  /*! exports provided: IconsComponent */

  /***/
  function srcAppPagesIconsIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsComponent", function () {
      return IconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IconsComponent =
    /*#__PURE__*/
    function () {
      function IconsComponent() {
        _classCallCheck(this, IconsComponent);
      }

      _createClass(IconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconsComponent;
    }();

    IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icons',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./icons.component.scss */
      "./src/app/pages/icons/icons.component.scss")).default]
    })], IconsComponent);
    /***/
  },

  /***/
  "./src/app/pages/maps/maps.component.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/maps/maps.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapsMapsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvbWFwcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/maps/maps.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/maps/maps.component.ts ***!
    \**********************************************/

  /*! exports provided: MapsComponent */

  /***/
  function srcAppPagesMapsMapsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsComponent", function () {
      return MapsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MapsComponent =
    /*#__PURE__*/
    function () {
      function MapsComponent() {
        _classCallCheck(this, MapsComponent);
      }

      _createClass(MapsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var map = document.getElementById('map-canvas');
          var lat = map.getAttribute('data-lat');
          var lng = map.getAttribute('data-lng');
          var myLatlng = new google.maps.LatLng(lat, lng);
          var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{
              "featureType": "administrative",
              "elementType": "labels.text.fill",
              "stylers": [{
                "color": "#444444"
              }]
            }, {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [{
                "color": "#f2f2f2"
              }]
            }, {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "road",
              "elementType": "all",
              "stylers": [{
                "saturation": -100
              }, {
                "lightness": 45
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [{
                "visibility": "simplified"
              }]
            }, {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "water",
              "elementType": "all",
              "stylers": [{
                "color": '#5e72e4'
              }, {
                "visibility": "on"
              }]
            }]
          };
          map = new google.maps.Map(map, mapOptions);
          var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
          });
          var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' + '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });
          google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
          });
        }
      }]);

      return MapsComponent;
    }();

    MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-maps',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./maps.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./maps.component.scss */
      "./src/app/pages/maps/maps.component.scss")).default]
    })], MapsComponent);
    /***/
  },

  /***/
  "./src/app/pages/tables/tables.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/pages/tables/tables.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTablesTablesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/tables/tables.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/tables/tables.component.ts ***!
    \**************************************************/

  /*! exports provided: TablesComponent */

  /***/
  function srcAppPagesTablesTablesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesComponent", function () {
      return TablesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TablesComponent =
    /*#__PURE__*/
    function () {
      function TablesComponent() {
        _classCallCheck(this, TablesComponent);
      }

      _createClass(TablesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TablesComponent;
    }();

    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tables',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tables.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tables.component.scss */
      "./src/app/pages/tables/tables.component.scss")).default]
    })], TablesComponent);
    /***/
  },

  /***/
  "./src/app/pages/user-profile/user-profile.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/user-profile/user-profile.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUserProfileUserProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/user-profile/user-profile.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserProfileComponent */

  /***/
  function srcAppPagesUserProfileUserProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
      return UserProfileComponent;
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

    var UserProfileComponent =
    /*#__PURE__*/
    function () {
      function UserProfileComponent(authenticationService) {
        _classCallCheck(this, UserProfileComponent);

        this.authenticationService = authenticationService;
      }

      _createClass(UserProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("hello");
          this.authenticationService.getUser().subscribe(function (result) {
            console.log("in");
            console.log(result);
          });
        }
      }]);

      return UserProfileComponent;
    }();

    UserProfileComponent.ctorParameters = function () {
      return [{
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-profile.component.scss */
      "./src/app/pages/user-profile/user-profile.component.scss")).default]
    })], UserProfileComponent);
    /***/
  }
}]);
//# sourceMappingURL=layouts-template-layout-template-layout-module-es5.js.map