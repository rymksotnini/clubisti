function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-admin-layout-admin-layout-module~layouts-template-layout-template-layout-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/cdk.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/cdk.js ***!
    \***************************************************************/

  /*! exports provided: VERSION */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Esm2015CdkJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of the Angular Component Development Kit.
     * @type {?}
     */


    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=cdk.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js ***!
    \***********************************************************************/

  /*! exports provided: MatButtonModule, MatButton, MatAnchor */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Esm2015ButtonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonModule", function () {
      return MatButtonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButton", function () {
      return MatButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatAnchor", function () {
      return MatAnchor;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default color palette for round buttons (mat-fab and mat-mini-fab)
     * @type {?}
     */


    var _c0 = ["mat-button", ""];
    var _c1 = ["*"];
    var DEFAULT_ROUND_BUTTON_COLOR = 'accent';
    /**
     * List of classes to add to MatButton instances based on host attributes to
     * style as different variants.
     * @type {?}
     */

    var BUTTON_HOST_ATTRIBUTES = ['mat-button', 'mat-flat-button', 'mat-icon-button', 'mat-raised-button', 'mat-stroked-button', 'mat-mini-fab', 'mat-fab']; // Boilerplate for applying mixins to MatButton.

    /**
     * \@docs-private
     */

    var MatButtonBase =
    /**
     * @param {?} _elementRef
     */
    function MatButtonBase(_elementRef) {
      _classCallCheck(this, MatButtonBase);

      this._elementRef = _elementRef;
    };
    /** @type {?} */


    var _MatButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisableRipple"])(MatButtonBase)));
    /**
     * Material design button.
     */


    var MatButton =
    /*#__PURE__*/
    function (_MatButtonMixinBase2) {
      _inherits(MatButton, _MatButtonMixinBase2);

      /**
       * @param {?} elementRef
       * @param {?} _focusMonitor
       * @param {?} _animationMode
       */
      function MatButton(elementRef, _focusMonitor, _animationMode) {
        var _this;

        _classCallCheck(this, MatButton);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MatButton).call(this, elementRef));
        _this._focusMonitor = _focusMonitor;
        _this._animationMode = _animationMode;
        /**
         * Whether the button is round.
         */

        _this.isRoundButton = _this._hasHostAttributes('mat-fab', 'mat-mini-fab');
        /**
         * Whether the button is icon button.
         */

        _this.isIconButton = _this._hasHostAttributes('mat-icon-button'); // For each of the variant selectors that is present in the button's host
        // attributes, add the correct corresponding class.

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = BUTTON_HOST_ATTRIBUTES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var attr = _step.value;

            if (_this._hasHostAttributes(attr)) {
              /** @type {?} */
              _this._getHostElement().classList.add(attr);
            }
          } // Add a class that applies to all buttons. This makes it easier to target if somebody
          // wants to target all Material buttons. We do it here rather than `host` to ensure that
          // the class is applied to derived classes.

        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        elementRef.nativeElement.classList.add('mat-button-base');

        _this._focusMonitor.monitor(_this._elementRef, true);

        if (_this.isRoundButton) {
          _this.color = DEFAULT_ROUND_BUTTON_COLOR;
        }

        return _this;
      }
      /**
       * @return {?}
       */


      _createClass(MatButton, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._focusMonitor.stopMonitoring(this._elementRef);
        }
        /**
         * Focuses the button.
         * @param {?=} origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var origin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'program';
          var options = arguments.length > 1 ? arguments[1] : undefined;

          this._focusMonitor.focusVia(this._getHostElement(), origin, options);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._elementRef.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_isRippleDisabled",
        value: function _isRippleDisabled() {
          return this.disableRipple || this.disabled;
        }
        /**
         * Gets whether the button has one of the given attributes.
         * @param {...?} attributes
         * @return {?}
         */

      }, {
        key: "_hasHostAttributes",
        value: function _hasHostAttributes() {
          var _this2 = this;

          for (var _len = arguments.length, attributes = new Array(_len), _key = 0; _key < _len; _key++) {
            attributes[_key] = arguments[_key];
          }

          return attributes.some(
          /**
          * @param {?} attribute
          * @return {?}
          */
          function (attribute) {
            return _this2._getHostElement().hasAttribute(attribute);
          });
        }
      }]);

      return MatButton;
    }(_MatButtonMixinBase);

    MatButton.ɵfac = function MatButton_Factory(t) {
      return new (t || MatButton)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatButton.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatButton,
      selectors: [["button", "mat-button", ""], ["button", "mat-raised-button", ""], ["button", "mat-icon-button", ""], ["button", "mat-fab", ""], ["button", "mat-mini-fab", ""], ["button", "mat-stroked-button", ""], ["button", "mat-flat-button", ""]],
      viewQuery: function MatButton_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
        }
      },
      hostVars: 3,
      hostBindings: function MatButton_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color"
      },
      exportAs: ["matButton"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatButton_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatButton.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatButton.propDecorators = {
      ripple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], {
          static: false
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],\n             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],\n             button[mat-flat-button]",
          exportAs: 'matButton',
          host: {
            '[attr.disabled]': 'disabled || null',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
          inputs: ['disabled', 'disableRipple', 'color'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        ripple: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], {
            static: false
          }]
        }]
      });
    })();
    /**
     * Material design anchor button.
     */


    var MatAnchor =
    /*#__PURE__*/
    function (_MatButton) {
      _inherits(MatAnchor, _MatButton);

      /**
       * @param {?} focusMonitor
       * @param {?} elementRef
       * @param {?} animationMode
       */
      function MatAnchor(focusMonitor, elementRef, animationMode) {
        _classCallCheck(this, MatAnchor);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatAnchor).call(this, elementRef, focusMonitor, animationMode));
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(MatAnchor, [{
        key: "_haltDisabledEvents",
        value: function _haltDisabledEvents(event) {
          // A disabled button shouldn't apply any actions
          if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
          }
        }
      }]);

      return MatAnchor;
    }(MatButton);

    MatAnchor.ɵfac = function MatAnchor_Factory(t) {
      return new (t || MatAnchor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatAnchor.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatAnchor,
      selectors: [["a", "mat-button", ""], ["a", "mat-raised-button", ""], ["a", "mat-icon-button", ""], ["a", "mat-fab", ""], ["a", "mat-mini-fab", ""], ["a", "mat-stroked-button", ""], ["a", "mat-flat-button", ""]],
      hostVars: 5,
      hostBindings: function MatAnchor_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MatAnchor_click_HostBindingHandler($event) {
            return ctx._haltDisabledEvents($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("tabindex", ctx.disabled ? 0 - 1 : ctx.tabIndex || 0)("disabled", ctx.disabled || null)("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        disabled: "disabled",
        disableRipple: "disableRipple",
        color: "color",
        tabIndex: "tabIndex"
      },
      exportAs: ["matButton", "matAnchor"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 4,
      vars: 5,
      consts: [[1, "mat-button-wrapper"], ["matRipple", "", 1, "mat-button-ripple", 3, "matRippleDisabled", "matRippleCentered", "matRippleTrigger"], [1, "mat-button-focus-overlay"]],
      template: function MatAnchor_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-button-ripple-round", ctx.isRoundButton || ctx.isIconButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRippleDisabled", ctx._isRippleDisabled())("matRippleCentered", ctx.isIconButton)("matRippleTrigger", ctx._getHostElement());
        }
      },
      directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"]],
      styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatAnchor.ctorParameters = function () {
      return [{
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatAnchor.propDecorators = {
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatAnchor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],\n             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]",
          exportAs: 'matButton, matAnchor',
          host: {
            // Note that we ignore the user-specified tabindex when it's disabled for
            // consistency with the `mat-button` applied on native buttons where even
            // though they have an index, they're not tabbable.
            '[attr.tabindex]': 'disabled ? -1 : (tabIndex || 0)',
            '[attr.disabled]': 'disabled || null',
            '[attr.aria-disabled]': 'disabled.toString()',
            '(click)': '_haltDisabledEvents($event)',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          },
          inputs: ['disabled', 'disableRipple', 'color'],
          template: "<span class=\"mat-button-wrapper\"><ng-content></ng-content></span><div matRipple class=\"mat-button-ripple\" [class.mat-button-ripple-round]=\"isRoundButton || isIconButton\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"isIconButton\" [matRippleTrigger]=\"_getHostElement()\"></div><div class=\"mat-button-focus-overlay\"></div>",
          styles: [".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:.04}@media (hover:none){.mat-button:hover .mat-button-focus-overlay,.mat-stroked-button:hover .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-flat-button,.mat-icon-button,.mat-stroked-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-button[disabled],.mat-flat-button[disabled],.mat-icon-button[disabled],.mat-stroked-button[disabled]{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button[disabled]{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-focus-overlay,.mat-stroked-button .mat-button-ripple.mat-ripple{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab[disabled]{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0,0,0);transition:background .4s cubic-bezier(.25,.8,.25,1),box-shadow 280ms cubic-bezier(.4,0,.2,1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab[disabled]{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button .mat-icon,.mat-icon-button i{line-height:24px}.mat-button-focus-overlay,.mat-button-ripple.mat-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity .2s cubic-bezier(.35,0,.25,1),background-color .2s cubic-bezier(.35,0,.25,1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}@media (-ms-high-contrast:active){.mat-button-focus-overlay{background-color:#fff}}@media (-ms-high-contrast:black-on-white){.mat-button-focus-overlay{background-color:#000}}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:block;font-size:inherit;width:2.5em;height:2.5em}@media (-ms-high-contrast:active){.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button{outline:solid 1px}}"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatButtonModule = function MatButtonModule() {
      _classCallCheck(this, MatButtonModule);
    };

    MatButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatButtonModule
    });
    MatButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatButtonModule_Factory(t) {
        return new (t || MatButtonModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatButtonModule, {
        declarations: function declarations() {
          return [MatButton, MatAnchor];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          exports: [MatButton, MatAnchor, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
          declarations: [MatButton, MatAnchor]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=button.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js ***!
    \*********************************************************************/

  /*! exports provided: VERSION, AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, setLines, MatLine, MatLineSetter, MatLineModule, MatOptionModule, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Esm2015CoreJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationCurves", function () {
      return AnimationCurves;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimationDurations", function () {
      return AnimationDurations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCommonModule", function () {
      return MatCommonModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function () {
      return MATERIAL_SANITY_CHECKS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisabled", function () {
      return mixinDisabled;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinColor", function () {
      return mixinColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function () {
      return mixinDisableRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function () {
      return mixinTabIndex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinErrorState", function () {
      return mixinErrorState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mixinInitialized", function () {
      return mixinInitialized;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateModule", function () {
      return NativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function () {
      return MatNativeDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function () {
      return MAT_DATE_LOCALE_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function () {
      return MAT_DATE_LOCALE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function () {
      return MAT_DATE_LOCALE_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateAdapter", function () {
      return DateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function () {
      return MAT_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function () {
      return NativeDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function () {
      return MAT_NATIVE_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function () {
      return ShowOnDirtyErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function () {
      return ErrorStateMatcher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function () {
      return MAT_HAMMER_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestureConfig", function () {
      return GestureConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setLines", function () {
      return setLines;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLine", function () {
      return MatLine;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineSetter", function () {
      return MatLineSetter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLineModule", function () {
      return MatLineModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionModule", function () {
      return MatOptionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function () {
      return _countGroupLabelsBeforeOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function () {
      return _getOptionScrollPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function () {
      return MatOptionSelectionChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function () {
      return MAT_OPTION_PARENT_COMPONENT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOption", function () {
      return MatOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatOptgroup", function () {
      return MatOptgroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function () {
      return MAT_LABEL_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRippleModule", function () {
      return MatRippleModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function () {
      return MAT_RIPPLE_GLOBAL_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatRipple", function () {
      return MatRipple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleState", function () {
      return RippleState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRef", function () {
      return RippleRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function () {
      return defaultRippleAnimationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RippleRenderer", function () {
      return RippleRenderer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function () {
      return MatPseudoCheckboxModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function () {
      return MatPseudoCheckbox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAN", function () {
      return JAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FEB", function () {
      return FEB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAR", function () {
      return MAR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APR", function () {
      return APR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAY", function () {
      return MAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUN", function () {
      return JUN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JUL", function () {
      return JUL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AUG", function () {
      return AUG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SEP", function () {
      return SEP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OCT", function () {
      return OCT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NOV", function () {
      return NOV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEC", function () {
      return DEC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa1", function () {
      return MATERIAL_SANITY_CHECKS_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/bidi.js");
    /* harmony import */


    var _angular_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/cdk.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/platform.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/keycodes.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Current version of Angular Material.
     * @type {?}
     */


    var _c0 = ["*", [["mat-option"], ["ng-container"]]];
    var _c1 = ["*", "mat-option, ng-container"];

    function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 3);
      }

      if (rf & 2) {
        var ctx_r1577 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r1577.selected ? "checked" : "")("disabled", ctx_r1577.disabled);
      }
    }

    var _c2 = ["*"];
    var VERSION$1 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     */

    var AnimationCurves = function AnimationCurves() {
      _classCallCheck(this, AnimationCurves);
    };

    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    /**
     * \@docs-private
     */

    var AnimationDurations = function AnimationDurations() {
      _classCallCheck(this, AnimationDurations);
    };

    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Private version constant to circumvent test/build issues,
    // i.e. avoid core to depend on the @angular/material primary entry-point
    // Can be removed once the Material primary entry-point no longer
    // re-exports all secondary entry-points

    /** @type {?} */

    var VERSION$2 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('8.2.3');
    /**
     * \@docs-private
     * @return {?}
     */

    function MATERIAL_SANITY_CHECKS_FACTORY() {
      return true;
    }
    /**
     * Injection token that configures whether the Material sanity checks are enabled.
     * @type {?}
     */


    var MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
      providedIn: 'root',
      factory: MATERIAL_SANITY_CHECKS_FACTORY
    });
    /**
     * Module that captures anything that should be loaded and/or run for *all* Angular Material
     * components. This includes Bidi, etc.
     *
     * This module should be imported to each top-level component module (e.g., MatTabsModule).
     */

    var MatCommonModule =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _sanityChecksEnabled
       * @param {?=} _hammerLoader
       */
      function MatCommonModule(_sanityChecksEnabled, _hammerLoader) {
        _classCallCheck(this, MatCommonModule);

        this._sanityChecksEnabled = _sanityChecksEnabled;
        this._hammerLoader = _hammerLoader;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */

        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */

        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */

        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */

        this._window = typeof window === 'object' && window ? window : null;

        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
          this._checkDoctypeIsDefined();

          this._checkThemeIsPresent();

          this._checkCdkVersionMatch();

          this._hasDoneGlobalChecks = true;
        }
      }
      /**
       * Whether any sanity checks are enabled
       * @private
       * @return {?}
       */


      _createClass(MatCommonModule, [{
        key: "_areChecksEnabled",
        value: function _areChecksEnabled() {
          return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
        }
        /**
         * Whether the code is running in tests.
         * @private
         * @return {?}
         */

      }, {
        key: "_isTestEnv",
        value: function _isTestEnv() {
          /** @type {?} */
          var window =
          /** @type {?} */
          this._window;
          return window && (window.__karma__ || window.jasmine);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkDoctypeIsDefined",
        value: function _checkDoctypeIsDefined() {
          if (this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_checkThemeIsPresent",
        value: function _checkThemeIsPresent() {
          // We need to assert that the `body` is defined, because these checks run very early
          // and the `body` won't be defined if the consumer put their scripts in the `head`.
          if (!this._document || !this._document.body || typeof getComputedStyle !== 'function') {
            return;
          }
          /** @type {?} */


          var testElement = this._document.createElement('div');

          testElement.classList.add('mat-theme-loaded-marker');

          this._document.body.appendChild(testElement);
          /** @type {?} */


          var computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
          // Firefox, the computed style is null if an application is running inside of a hidden iframe.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

          if (computedStyle && computedStyle.display !== 'none') {
            console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
          }

          this._document.body.removeChild(testElement);
        }
        /**
         * Checks whether the material version matches the cdk version
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCdkVersionMatch",
        value: function _checkCdkVersionMatch() {
          if (VERSION$2.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full) {
            console.warn('The Angular Material version (' + VERSION$2.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_3__["VERSION"].full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
          }
        }
        /**
         * Checks whether HammerJS is available.
         * @return {?}
         */

      }, {
        key: "_checkHammerIsAvailable",
        value: function _checkHammerIsAvailable() {
          if (this._hasCheckedHammer || !this._window) {
            return;
          }

          if (this._areChecksEnabled() && !
          /** @type {?} */
          this._window['Hammer'] && !this._hammerLoader) {
            console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
          }

          this._hasCheckedHammer = true;
        }
      }]);

      return MatCommonModule;
    }();

    MatCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatCommonModule
    });
    MatCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatCommonModule_Factory(t) {
        return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"], 8));
      },
      imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
    });
    /** @nocollapse */

    MatCommonModule.ctorParameters = function () {
      return [{
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MATERIAL_SANITY_CHECKS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]
        }]
      }];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatCommonModule, {
        imports: function imports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]],
          exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["BidiModule"]]
        }]
      }], function () {
        return [{
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MATERIAL_SANITY_CHECKS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_LOADER"]]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `disabled` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisabled(base) {
      return (
        /*#__PURE__*/
        function (_base) {
          _inherits(_class, _base);

          /**
           * @param {...?} args
           */
          function _class() {
            var _getPrototypeOf2;

            var _this3;

            _classCallCheck(this, _class);

            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            _this3 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));
            _this3._disabled = false;
            return _this3;
          }
          /**
           * @return {?}
           */


          _createClass(_class, [{
            key: "disabled",
            get: function get() {
              return this._disabled;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `color` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultColor
     * @return {?}
     */


    function mixinColor(base, defaultColor) {
      return (
        /*#__PURE__*/
        function (_base2) {
          _inherits(_class2, _base2);

          _createClass(_class2, [{
            key: "color",

            /**
             * @return {?}
             */
            get: function get() {
              return this._color;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              /** @type {?} */
              var colorPalette = value || defaultColor;

              if (colorPalette !== this._color) {
                if (this._color) {
                  this._elementRef.nativeElement.classList.remove("mat-".concat(this._color));
                }

                if (colorPalette) {
                  this._elementRef.nativeElement.classList.add("mat-".concat(colorPalette));
                }

                this._color = colorPalette;
              }
            }
            /**
             * @param {...?} args
             */

          }]);

          function _class2() {
            var _getPrototypeOf3;

            var _this4;

            _classCallCheck(this, _class2);

            for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              args[_key3] = arguments[_key3];
            }

            _this4 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(_class2)).call.apply(_getPrototypeOf3, [this].concat(args))); // Set the default color that can be specified from the mixin.

            _this4.color = defaultColor;
            return _this4;
          }

          return _class2;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `disableRipple` property.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinDisableRipple(base) {
      return (
        /*#__PURE__*/
        function (_base3) {
          _inherits(_class3, _base3);

          /**
           * @param {...?} args
           */
          function _class3() {
            var _getPrototypeOf4;

            var _this5;

            _classCallCheck(this, _class3);

            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            _this5 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(_class3)).call.apply(_getPrototypeOf4, [this].concat(args)));
            _this5._disableRipple = false;
            return _this5;
          }
          /**
           * Whether the ripple effect is disabled or not.
           * @return {?}
           */


          _createClass(_class3, [{
            key: "disableRipple",
            get: function get() {
              return this._disableRipple;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
            }
          }]);

          return _class3;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with a `tabIndex` property.
     * @template T
     * @param {?} base
     * @param {?=} defaultTabIndex
     * @return {?}
     */


    function mixinTabIndex(base) {
      var defaultTabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return (
        /*#__PURE__*/
        function (_base4) {
          _inherits(_class4, _base4);

          /**
           * @param {...?} args
           */
          function _class4() {
            var _getPrototypeOf5;

            var _this6;

            _classCallCheck(this, _class4);

            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }

            _this6 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(_class4)).call.apply(_getPrototypeOf5, [this].concat(args)));
            _this6._tabIndex = defaultTabIndex;
            return _this6;
          }
          /**
           * @return {?}
           */


          _createClass(_class4, [{
            key: "tabIndex",
            get: function get() {
              return this.disabled ? -1 : this._tabIndex;
            }
            /**
             * @param {?} value
             * @return {?}
             */
            ,
            set: function set(value) {
              // If the specified tabIndex value is null or undefined, fall back to the default value.
              this._tabIndex = value != null ? value : defaultTabIndex;
            }
          }]);

          return _class4;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with updateErrorState method.
     * For component with `errorState` and need to update `errorState`.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinErrorState(base) {
      return (
        /*#__PURE__*/
        function (_base5) {
          _inherits(_class5, _base5);

          /**
           * @param {...?} args
           */
          function _class5() {
            var _getPrototypeOf6;

            var _this7;

            _classCallCheck(this, _class5);

            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }

            _this7 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(_class5)).call.apply(_getPrototypeOf6, [this].concat(args)));
            /**
             * Whether the component is in an error state.
             */

            _this7.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */

            _this7.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            return _this7;
          }
          /**
           * @return {?}
           */


          _createClass(_class5, [{
            key: "updateErrorState",
            value: function updateErrorState() {
              /** @type {?} */
              var oldState = this.errorState;
              /** @type {?} */

              var parent = this._parentFormGroup || this._parentForm;
              /** @type {?} */

              var matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
              /** @type {?} */

              var control = this.ngControl ?
              /** @type {?} */
              this.ngControl.control : null;
              /** @type {?} */

              var newState = matcher.isErrorState(control, parent);

              if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
              }
            }
          }]);

          return _class5;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
     * @template T
     * @param {?} base
     * @return {?}
     */


    function mixinInitialized(base) {
      return (
        /*#__PURE__*/
        function (_base6) {
          _inherits(_class6, _base6);

          /**
           * @param {...?} args
           */
          function _class6() {
            var _getPrototypeOf7;

            var _this8;

            _classCallCheck(this, _class6);

            for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              args[_key7] = arguments[_key7];
            }

            _this8 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(_class6)).call.apply(_getPrototypeOf7, [this].concat(args)));
            /**
             * Whether this directive has been marked as initialized.
             */

            _this8._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */

            _this8._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */

            _this8.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](
            /**
            * @param {?} subscriber
            * @return {?}
            */
            function (subscriber) {
              // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
              // when _markInitialized is called.
              if (_this8._isInitialized) {
                _this8._notifySubscriber(subscriber);
              } else {
                /** @type {?} */
                _this8._pendingSubscribers.push(subscriber);
              }
            });
            return _this8;
          }
          /**
           * Marks the state as initialized and notifies pending subscribers. Should be called at the end
           * of ngOnInit.
           * \@docs-private
           * @return {?}
           */


          _createClass(_class6, [{
            key: "_markInitialized",
            value: function _markInitialized() {
              if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
              }

              this._isInitialized = true;

              /** @type {?} */
              this._pendingSubscribers.forEach(this._notifySubscriber);

              this._pendingSubscribers = null;
            }
            /**
             * Emits and completes the subscriber stream (should only emit once).
             * @param {?} subscriber
             * @return {?}
             */

          }, {
            key: "_notifySubscriber",
            value: function _notifySubscriber(subscriber) {
              subscriber.next();
              subscriber.complete();
            }
          }]);

          return _class6;
        }(base)
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken for datepicker that can be used to override default locale code.
     * @type {?}
     */


    var MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
      providedIn: 'root',
      factory: MAT_DATE_LOCALE_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_DATE_LOCALE_FACTORY() {
      return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
    }
    /**
     * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
     * If you are importing and providing this in your code you can simply remove it.
     * @deprecated
     * \@breaking-change 8.0.0
     * @type {?}
     */


    var MAT_DATE_LOCALE_PROVIDER = {
      provide: MAT_DATE_LOCALE,
      useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]
    };
    /**
     * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
     * @abstract
     * @template D
     */

    var DateAdapter =
    /*#__PURE__*/
    function () {
      function DateAdapter() {
        _classCallCheck(this, DateAdapter);

        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      /**
       * A stream that emits when the locale changes.
       * @return {?}
       */


      _createClass(DateAdapter, [{
        key: "deserialize",

        /**
         * Attempts to deserialize a value to a valid date object. This is different from parsing in that
         * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
         * string). The default implementation does not allow any deserialization, it simply checks that
         * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
         * method on all of its `\@Input()` properties that accept dates. It is therefore possible to
         * support passing values from your backend directly to these properties by overriding this method
         * to also deserialize the format used by your backend.
         * @param {?} value The value to be deserialized into a date object.
         * @return {?} The deserialized date object, either a valid date, null if the value can be
         *     deserialized into a null date (e.g. the empty string), or an invalid date.
         */
        value: function deserialize(value) {
          if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
          }

          return this.invalid();
        }
        /**
         * Sets the locale used for all dates.
         * @param {?} locale The new locale.
         * @return {?}
         */

      }, {
        key: "setLocale",
        value: function setLocale(locale) {
          this.locale = locale;

          this._localeChanges.next();
        }
        /**
         * Compares two dates.
         * @param {?} first The first date to compare.
         * @param {?} second The second date to compare.
         * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
         *     a number greater than 0 if the first date is later.
         */

      }, {
        key: "compareDate",
        value: function compareDate(first, second) {
          return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
        }
        /**
         * Checks if two dates are equal.
         * @param {?} first The first date to check.
         * @param {?} second The second date to check.
         * @return {?} Whether the two dates are equal.
         *     Null dates are considered equal to other null dates.
         */

      }, {
        key: "sameDate",
        value: function sameDate(first, second) {
          if (first && second) {
            /** @type {?} */
            var firstValid = this.isValid(first);
            /** @type {?} */

            var secondValid = this.isValid(second);

            if (firstValid && secondValid) {
              return !this.compareDate(first, second);
            }

            return firstValid == secondValid;
          }

          return first == second;
        }
        /**
         * Clamp the given date between min and max dates.
         * @param {?} date The date to clamp.
         * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
         * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
         * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
         *     otherwise `date`.
         */

      }, {
        key: "clampDate",
        value: function clampDate(date, min, max) {
          if (min && this.compareDate(date, min) < 0) {
            return min;
          }

          if (max && this.compareDate(date, max) > 0) {
            return max;
          }

          return date;
        }
      }, {
        key: "localeChanges",
        get: function get() {
          return this._localeChanges;
        }
      }]);

      return DateAdapter;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(mmalerba): Remove when we no longer support safari 9.

    /**
     * Whether the browser supports the Intl API.
     * @type {?}
     */

    var SUPPORTS_INTL_API; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
    // cause IE to throw. These cases are tied to particular versions of Windows and can happen if
    // the consumer is providing a polyfilled `Map`. See:
    // https://github.com/Microsoft/ChakraCore/issues/3189
    // https://github.com/angular/components/issues/15687

    try {
      SUPPORTS_INTL_API = typeof Intl != 'undefined';
    } catch (_a) {
      SUPPORTS_INTL_API = false;
    }
    /**
     * The default month names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_MONTH_NAMES = {
      'long': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
    };

    var ɵ0 =
    /**
    * @param {?} i
    * @return {?}
    */
    function ɵ0(i) {
      return String(i + 1);
    };
    /**
     * The default date names to use if Intl API is not available.
     * @type {?}
     */


    var DEFAULT_DATE_NAMES = range(31, ɵ0);
    /**
     * The default day of the week names to use if Intl API is not available.
     * @type {?}
     */

    var DEFAULT_DAY_OF_WEEK_NAMES = {
      'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    };
    /**
     * Matches strings that have the form of a valid RFC 3339 string
     * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
     * because the regex will match strings an with out of bounds month, date, etc.
     * @type {?}
     */

    var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */

    function range(length, valueFunction) {
      /** @type {?} */
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * Adapts the native JS Date for use with cdk-based components that work with dates.
     */


    var NativeDateAdapter =
    /*#__PURE__*/
    function (_DateAdapter) {
      _inherits(NativeDateAdapter, _DateAdapter);

      /**
       * @param {?} matDateLocale
       * @param {?} platform
       */
      function NativeDateAdapter(matDateLocale, platform) {
        var _this9;

        _classCallCheck(this, NativeDateAdapter);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(NativeDateAdapter).call(this));
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from its utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */

        _this9.useUtcForDisplay = true;

        _get(_getPrototypeOf(NativeDateAdapter.prototype), "setLocale", _assertThisInitialized(_this9)).call(_assertThisInitialized(_this9), matDateLocale); // IE does its own time zone correction, so we disable this on IE.


        _this9.useUtcForDisplay = !platform.TRIDENT;
        _this9._clampDate = platform.TRIDENT || platform.EDGE;
        return _this9;
      }
      /**
       * @param {?} date
       * @return {?}
       */


      _createClass(NativeDateAdapter, [{
        key: "getYear",
        value: function getYear(date) {
          return date.getFullYear();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth(date) {
          return date.getMonth();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate(date) {
          return date.getDate();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayOfWeek",
        value: function getDayOfWeek(date) {
          return date.getDay();
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getMonthNames",
        value: function getMonthNames(style) {
          var _this10 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              month: style,
              timeZone: 'utc'
            });
            return range(12,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this10._stripDirectionalityCharacters(_this10._format(dtf, new Date(2017, i, 1)));
            });
          }

          return DEFAULT_MONTH_NAMES[style];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDateNames",
        value: function getDateNames() {
          var _this11 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              day: 'numeric',
              timeZone: 'utc'
            });
            return range(31,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this11._stripDirectionalityCharacters(_this11._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DATE_NAMES;
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getDayOfWeekNames",
        value: function getDayOfWeekNames(style) {
          var _this12 = this;

          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              weekday: style,
              timeZone: 'utc'
            });
            return range(7,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this12._stripDirectionalityCharacters(_this12._format(dtf, new Date(2017, 0, i + 1)));
            });
          }

          return DEFAULT_DAY_OF_WEEK_NAMES[style];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYearName",
        value: function getYearName(date) {
          if (SUPPORTS_INTL_API) {
            /** @type {?} */
            var dtf = new Intl.DateTimeFormat(this.locale, {
              year: 'numeric',
              timeZone: 'utc'
            });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return String(this.getYear(date));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
          return 0;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getNumDaysInMonth",
        value: function getNumDaysInMonth(date) {
          return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(date) {
          return new Date(date.getTime());
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "createDate",
        value: function createDate(year, month, date) {
          // Check for invalid month and date (except upper bound on date which we have to check after
          // creating the Date).
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


          if (result.getMonth() != month) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "today",
        value: function today() {
          return new Date();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "parse",
        value: function parse(value) {
          // We have no way using the native JS Date to set the parse format or locale, so we ignore these
          // parameters.
          if (typeof value == 'number') {
            return new Date(value);
          }

          return value ? new Date(Date.parse(value)) : null;
        }
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date, displayFormat) {
          if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
          }

          if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
              date = this.clone(date);
              date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }

            displayFormat = Object.assign({}, displayFormat, {
              timeZone: 'utc'
            });
            /** @type {?} */

            var dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
          }

          return this._stripDirectionalityCharacters(date.toDateString());
        }
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */

      }, {
        key: "addCalendarYears",
        value: function addCalendarYears(date, years) {
          return this.addCalendarMonths(date, years * 12);
        }
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */

      }, {
        key: "addCalendarMonths",
        value: function addCalendarMonths(date, months) {
          /** @type {?} */
          var newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
          // month. In this case we want to go to the last day of the desired month.
          // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
          // guarantee this.


          if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
          }

          return newDate;
        }
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "addCalendarDays",
        value: function addCalendarDays(date, days) {
          return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toIso8601",
        value: function toIso8601(date) {
          return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
        }
        /**
         * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
         * invalid date for all other values.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          if (typeof value === 'string') {
            if (!value) {
              return null;
            } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.


            if (ISO_8601_REGEX.test(value)) {
              /** @type {?} */
              var date = new Date(value);

              if (this.isValid(date)) {
                return date;
              }
            }
          }

          return _get(_getPrototypeOf(NativeDateAdapter.prototype), "deserialize", this).call(this, value);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "isDateInstance",
        value: function isDateInstance(obj) {
          return obj instanceof Date;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return !isNaN(date.getTime());
        }
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        value: function invalid() {
          return new Date(NaN);
        }
        /**
         * Creates a date but allows the month and date to overflow.
         * @private
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_createDateWithOverflow",
        value: function _createDateWithOverflow(year, month, date) {
          /** @type {?} */
          var result = new Date(year, month, date); // We need to correct for the fact that JS native Date treats years in range [0, 99] as
          // abbreviations for 19xx.

          if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
          }

          return result;
        }
        /**
         * Pads a number to make it two digits.
         * @private
         * @param {?} n The number to pad.
         * @return {?} The padded number.
         */

      }, {
        key: "_2digit",
        value: function _2digit(n) {
          return ('00' + n).slice(-2);
        }
        /**
         * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
         * other browsers do not. We remove them to make output consistent and because they interfere with
         * date parsing.
         * @private
         * @param {?} str The string to strip direction characters from.
         * @return {?} The stripped string.
         */

      }, {
        key: "_stripDirectionalityCharacters",
        value: function _stripDirectionalityCharacters(str) {
          return str.replace(/[\u200e\u200f]/g, '');
        }
        /**
         * When converting Date object to string, javascript built-in functions may return wrong
         * results because it applies its internal DST rules. The DST rules around the world change
         * very frequently, and the current valid rule is not always valid in previous years though.
         * We work around this problem building a new Date object which has its internal UTC
         * representation with the local date and time.
         * @private
         * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
         *    timeZone set to 'utc' to work fine.
         * @param {?} date Date from which we want to get the string representation according to dtf
         * @return {?} A Date object with its UTC representation based on the passed in date info
         */

      }, {
        key: "_format",
        value: function _format(dtf, date) {
          /** @type {?} */
          var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
          return dtf.format(d);
        }
      }]);

      return NativeDateAdapter;
    }(DateAdapter);

    NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
      return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]));
    };

    NativeDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NativeDateAdapter,
      factory: NativeDateAdapter.ɵfac
    });
    /** @nocollapse */

    NativeDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_DATE_LOCALE]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_DATE_LOCALE]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var MAT_NATIVE_DATE_FORMATS = {
      parse: {
        dateInput: null
      },
      display: {
        dateInput: {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        },
        monthYearLabel: {
          year: 'numeric',
          month: 'short'
        },
        dateA11yLabel: {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        monthYearA11yLabel: {
          year: 'numeric',
          month: 'long'
        }
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NativeDateModule = function NativeDateModule() {
      _classCallCheck(this, NativeDateModule);
    };

    NativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NativeDateModule
    });
    NativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NativeDateModule_Factory(t) {
        return new (t || NativeDateModule)();
      },
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }],
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NativeDateModule, {
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
          providers: [{
            provide: DateAdapter,
            useClass: NativeDateAdapter
          }]
        }]
      }], null, null);
    })();

    var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;

    var MatNativeDateModule = function MatNativeDateModule() {
      _classCallCheck(this, MatNativeDateModule);
    };

    MatNativeDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatNativeDateModule
    });
    MatNativeDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatNativeDateModule_Factory(t) {
        return new (t || MatNativeDateModule)();
      },
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: ɵ0$1
      }],
      imports: [[NativeDateModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatNativeDateModule, {
        imports: [NativeDateModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [NativeDateModule],
          providers: [{
            provide: MAT_DATE_FORMATS,
            useValue: ɵ0$1
          }]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Error state matcher that matches when a control is invalid and dirty.
     */


    var ShowOnDirtyErrorStateMatcher =
    /*#__PURE__*/
    function () {
      function ShowOnDirtyErrorStateMatcher() {
        _classCallCheck(this, ShowOnDirtyErrorStateMatcher);
      }

      _createClass(ShowOnDirtyErrorStateMatcher, [{
        key: "isErrorState",

        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        value: function isErrorState(control, form) {
          return !!(control && control.invalid && (control.dirty || form && form.submitted));
        }
      }]);

      return ShowOnDirtyErrorStateMatcher;
    }();

    ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
      return new (t || ShowOnDirtyErrorStateMatcher)();
    };

    ShowOnDirtyErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ShowOnDirtyErrorStateMatcher,
      factory: ShowOnDirtyErrorStateMatcher.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /**
     * Provider that defines how form controls behave with regards to displaying error messages.
     */


    var ErrorStateMatcher =
    /*#__PURE__*/
    function () {
      function ErrorStateMatcher() {
        _classCallCheck(this, ErrorStateMatcher);
      }

      _createClass(ErrorStateMatcher, [{
        key: "isErrorState",

        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        value: function isErrorState(control, form) {
          return !!(control && control.invalid && (control.touched || form && form.submitted));
        }
      }]);

      return ErrorStateMatcher;
    }();

    ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
      return new (t || ErrorStateMatcher)();
    };

    ErrorStateMatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ErrorStateMatcher,
      factory: ErrorStateMatcher.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ErrorStateMatcher_Factory() {
        return new ErrorStateMatcher();
      },
      token: ErrorStateMatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to provide options to the Hammerjs instance.
     * More info at http://hammerjs.github.io/api/.
     * @type {?}
     */


    var MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
    /** @type {?} */

    var ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES = ['longpress', 'slide', 'slidestart', 'slideend', 'slideright', 'slideleft'];

    var ɵ0$2 =
    /**
    * @return {?}
    */
    function ɵ0$2() {},
        ɵ1 =
    /**
    * @return {?}
    */
    function ɵ1() {};
    /**
     * Fake HammerInstance that is used when a Hammer instance is requested when HammerJS has not
     * been loaded on the page.
     * @type {?}
     */


    var noopHammerInstance = {
      on: ɵ0$2,
      off: ɵ1
    };
    /**
     * Adjusts configuration of our gesture library, Hammer.
     */

    var GestureConfig =
    /*#__PURE__*/
    function (_angular_platform_bro) {
      _inherits(GestureConfig, _angular_platform_bro);

      /**
       * @param {?=} _hammerOptions
       * @param {?=} commonModule
       */
      function GestureConfig(_hammerOptions, commonModule) {
        var _this13;

        _classCallCheck(this, GestureConfig);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(GestureConfig).call(this));
        _this13._hammerOptions = _hammerOptions;
        /**
         * List of new event names to add to the gesture support list
         */

        _this13.events = ANGULAR_MATERIAL_SUPPORTED_HAMMER_GESTURES;

        if (commonModule) {
          commonModule._checkHammerIsAvailable();
        }

        return _this13;
      }
      /**
       * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
       *
       * Our gesture names come from the Material Design gestures spec:
       * https://material.io/design/#gestures-touch-mechanics
       *
       * More information on default recognizers can be found in Hammer docs:
       * http://hammerjs.github.io/recognizer-pan/
       * http://hammerjs.github.io/recognizer-press/
       *
       * @param {?} element Element to which to assign the new HammerJS gestures.
       * @return {?} Newly-created HammerJS instance.
       */


      _createClass(GestureConfig, [{
        key: "buildHammer",
        value: function buildHammer(element) {
          /** @type {?} */
          var hammer = typeof window !== 'undefined' ?
          /** @type {?} */
          window.Hammer : null;

          if (!hammer) {
            // If HammerJS is not loaded here, return the noop HammerInstance. This is necessary to
            // ensure that omitting HammerJS completely will not cause any errors while *also* supporting
            // the lazy-loading of HammerJS via the HAMMER_LOADER token introduced in Angular 6.1.
            // Because we can't depend on HAMMER_LOADER's existance until 7.0, we have to always set
            // `this.events` to the set we support, instead of conditionally setting it to `[]` if
            // `HAMMER_LOADER` is present (and then throwing an Error here if `window.Hammer` is
            // undefined).
            // @breaking-change 8.0.0
            return noopHammerInstance;
          }
          /** @type {?} */


          var mc = new hammer(element, this._hammerOptions || undefined); // Default Hammer Recognizers.

          /** @type {?} */

          var pan = new hammer.Pan();
          /** @type {?} */

          var swipe = new hammer.Swipe();
          /** @type {?} */

          var press = new hammer.Press(); // Notice that a HammerJS recognizer can only depend on one other recognizer once.
          // Otherwise the previous `recognizeWith` will be dropped.
          // TODO: Confirm threshold numbers with Material Design UX Team

          /** @type {?} */

          var slide = this._createRecognizer(pan, {
            event: 'slide',
            threshold: 0
          }, swipe);
          /** @type {?} */


          var longpress = this._createRecognizer(press, {
            event: 'longpress',
            time: 500
          }); // Overwrite the default `pan` event to use the swipe event.


          pan.recognizeWith(swipe); // Since the slide event threshold is set to zero, the slide recognizer can fire and
          // accidentally reset the longpress recognizer. In order to make sure that the two
          // recognizers can run simultaneously but don't affect each other, we allow the slide
          // recognizer to recognize while a longpress is being processed.
          // See: https://github.com/hammerjs/hammer.js/blob/master/src/manager.js#L123-L124

          longpress.recognizeWith(slide); // Add customized gestures to Hammer manager

          mc.add([swipe, press, pan, slide, longpress]);
          return (
            /** @type {?} */
            mc
          );
        }
        /**
         * Creates a new recognizer, without affecting the default recognizers of HammerJS
         * @private
         * @param {?} base
         * @param {?} options
         * @param {...?} inheritances
         * @return {?}
         */

      }, {
        key: "_createRecognizer",
        value: function _createRecognizer(base, options) {
          /** @type {?} */
          var recognizer = new
          /** @type {?} */
          base.constructor(options);

          for (var _len8 = arguments.length, inheritances = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
            inheritances[_key8 - 2] = arguments[_key8];
          }

          inheritances.push(base);
          inheritances.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return recognizer.recognizeWith(item);
          });
          return recognizer;
        }
      }]);

      return GestureConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]);

    GestureConfig.ɵfac = function GestureConfig_Factory(t) {
      return new (t || GestureConfig)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_HAMMER_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MatCommonModule, 8));
    };

    GestureConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GestureConfig,
      factory: GestureConfig.ɵfac
    });
    /** @nocollapse */

    GestureConfig.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_HAMMER_OPTIONS]
        }]
      }, {
        type: MatCommonModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestureConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_HAMMER_OPTIONS]
          }]
        }, {
          type: MatCommonModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Shared directive to count lines inside a text area, such as a list item.
     * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
     * counted by checking the query list's length.
     */


    var MatLine = function MatLine() {
      _classCallCheck(this, MatLine);
    };

    MatLine.ɵfac = function MatLine_Factory(t) {
      return new (t || MatLine)();
    };

    MatLine.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatLine,
      selectors: [["", "mat-line", ""], ["", "matLine", ""]],
      hostAttrs: [1, "mat-line"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-line], [matLine]',
          host: {
            'class': 'mat-line'
          }
        }]
      }], null, null);
    })();
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @param {?} lines
     * @param {?} element
     * @return {?}
     */


    function setLines(lines, element) {
      // Note: doesn't need to unsubscribe, because `changes`
      // gets completed by Angular when the view is destroyed.
      lines.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(lines)).subscribe(
      /**
      * @param {?} __0
      * @return {?}
      */
      function (_ref) {
        var length = _ref.length;
        setClass(element, 'mat-2-line', false);
        setClass(element, 'mat-3-line', false);
        setClass(element, 'mat-multi-line', false);

        if (length === 2 || length === 3) {
          setClass(element, "mat-".concat(length, "-line"), true);
        } else if (length > 3) {
          setClass(element, "mat-multi-line", true);
        }
      });
    }
    /**
     * Adds or removes a class from an element.
     * @param {?} element
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */


    function setClass(element, className, isAdd) {
      /** @type {?} */
      var classList = element.nativeElement.classList;
      isAdd ? classList.add(className) : classList.remove(className);
    }
    /**
     * Helper that takes a query list of lines and sets the correct class on the host.
     * \@docs-private
     * @deprecated Use `setLines` instead.
     * \@breaking-change 8.0.0
     */


    var MatLineSetter =
    /**
     * @param {?} lines
     * @param {?} element
     */
    function MatLineSetter(lines, element) {
      _classCallCheck(this, MatLineSetter);

      setLines(lines, element);
    };

    var MatLineModule = function MatLineModule() {
      _classCallCheck(this, MatLineModule);
    };

    MatLineModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatLineModule
    });
    MatLineModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatLineModule_Factory(t) {
        return new (t || MatLineModule)();
      },
      imports: [[MatCommonModule], MatCommonModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatLineModule, {
        declarations: [MatLine],
        imports: [MatCommonModule],
        exports: [MatLine, MatCommonModule]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatCommonModule],
          exports: [MatLine, MatCommonModule],
          declarations: [MatLine]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var RippleState = {
      FADING_IN: 0,
      VISIBLE: 1,
      FADING_OUT: 2,
      HIDDEN: 3
    };
    RippleState[RippleState.FADING_IN] = 'FADING_IN';
    RippleState[RippleState.VISIBLE] = 'VISIBLE';
    RippleState[RippleState.FADING_OUT] = 'FADING_OUT';
    RippleState[RippleState.HIDDEN] = 'HIDDEN';
    /**
     * Reference to a previously launched ripple element.
     */

    var RippleRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _renderer
       * @param {?} element
       * @param {?} config
       */
      function RippleRef(_renderer, element, config) {
        _classCallCheck(this, RippleRef);

        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple.
         */

        this.state = RippleState.HIDDEN;
      }
      /**
       * Fades out the ripple element.
       * @return {?}
       */


      _createClass(RippleRef, [{
        key: "fadeOut",
        value: function fadeOut() {
          this._renderer.fadeOutRipple(this);
        }
      }]);

      return RippleRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default ripple animation configuration for ripples without an explicit
     * animation config specified.
     * @type {?}
     */


    var defaultRippleAnimationConfig = {
      enterDuration: 450,
      exitDuration: 400
    };
    /**
     * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
     * events to avoid synthetic mouse events.
     * @type {?}
     */

    var ignoreMouseEventsTimeout = 800;
    /**
     * Options that apply to all the event listeners that are bound by the ripple renderer.
     * @type {?}
     */

    var passiveEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Helper service that performs DOM manipulations. Not intended to be used outside this module.
     * The constructor takes a reference to the ripple directive's host element and a map of DOM
     * event handlers to be installed on the element that triggers ripple animations.
     * This will eventually become a custom renderer once Angular support exists.
     * \@docs-private
     */

    var RippleRenderer =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _target
       * @param {?} _ngZone
       * @param {?} elementOrElementRef
       * @param {?} platform
       */
      function RippleRenderer(_target, _ngZone, elementOrElementRef, platform) {
        var _this14 = this;

        _classCallCheck(this, RippleRenderer);

        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */

        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */

        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */

        this._activeRipples = new Set();
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */

        this._onMousedown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          // Screen readers will fire fake mouse events for space/enter. Skip launching a
          // ripple in this case for consistency with the non-screen-reader experience.

          /** @type {?} */
          var isFakeMousedown = Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["isFakeMousedownFromScreenReader"])(event);
          /** @type {?} */

          var isSyntheticEvent = _this14._lastTouchStartEvent && Date.now() < _this14._lastTouchStartEvent + ignoreMouseEventsTimeout;

          if (!_this14._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
            _this14._isPointerDown = true;

            _this14.fadeInRipple(event.clientX, event.clientY, _this14._target.rippleConfig);
          }
        };
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */


        this._onTouchStart =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (!_this14._target.rippleDisabled) {
            // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
            // events will launch a second ripple if we don't ignore mouse events for a specific
            // time after a touchstart event.
            _this14._lastTouchStartEvent = Date.now();
            _this14._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
            // their finger down, but used another finger to tap the element again.

            /** @type {?} */

            var touches = event.changedTouches;

            for (var i = 0; i < touches.length; i++) {
              _this14.fadeInRipple(touches[i].clientX, touches[i].clientY, _this14._target.rippleConfig);
            }
          }
        };
        /**
         * Function being called whenever the trigger is being released.
         */


        this._onPointerUp =
        /**
        * @return {?}
        */
        function () {
          if (!_this14._isPointerDown) {
            return;
          }

          _this14._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

          _this14._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            // By default, only ripples that are completely visible will fade out on pointer release.
            // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.

            /** @type {?} */
            var isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;

            if (!ripple.config.persistent && isVisible) {
              ripple.fadeOut();
            }
          });
        }; // Only do anything if we're on the browser.


        if (platform.isBrowser) {
          this._containerElement = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef); // Specify events which need to be registered on the trigger.

          this._triggerEvents.set('mousedown', this._onMousedown).set('mouseup', this._onPointerUp).set('mouseleave', this._onPointerUp).set('touchstart', this._onTouchStart).set('touchend', this._onPointerUp).set('touchcancel', this._onPointerUp);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
       * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param {?=} config Extra ripple options.
       * @return {?}
       */


      _createClass(RippleRenderer, [{
        key: "fadeInRipple",
        value: function fadeInRipple(x, y) {
          var _this15 = this;

          var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

          /** @type {?} */
          var containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
          /** @type {?} */


          var animationConfig = Object.assign({}, defaultRippleAnimationConfig, config.animation);

          if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
          }
          /** @type {?} */


          var radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
          /** @type {?} */

          var offsetX = x - containerRect.left;
          /** @type {?} */

          var offsetY = y - containerRect.top;
          /** @type {?} */

          var duration = animationConfig.enterDuration;
          /** @type {?} */

          var ripple = document.createElement('div');
          ripple.classList.add('mat-ripple-element');
          ripple.style.left = "".concat(offsetX - radius, "px");
          ripple.style.top = "".concat(offsetY - radius, "px");
          ripple.style.height = "".concat(radius * 2, "px");
          ripple.style.width = "".concat(radius * 2, "px"); // If the color is not set, the default CSS color will be used.

          ripple.style.backgroundColor = config.color || null;
          ripple.style.transitionDuration = "".concat(duration, "ms");

          this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
          // ripple elements. This is critical because then the `scale` would not animate properly.


          enforceStyleRecalculation(ripple);
          ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

          /** @type {?} */

          var rippleRef = new RippleRef(this, ripple, config);
          rippleRef.state = RippleState.FADING_IN; // Add the ripple reference to the list of all active ripples.

          this._activeRipples.add(rippleRef);

          if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
          } // Wait for the ripple element to be completely faded in.
          // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var isMostRecentTransientRipple = rippleRef === _this15._mostRecentTransientRipple;
            rippleRef.state = RippleState.VISIBLE; // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.

            if (!config.persistent && (!isMostRecentTransientRipple || !_this15._isPointerDown)) {
              rippleRef.fadeOut();
            }
          }, duration);

          return rippleRef;
        }
        /**
         * Fades out a ripple reference.
         * @param {?} rippleRef
         * @return {?}
         */

      }, {
        key: "fadeOutRipple",
        value: function fadeOutRipple(rippleRef) {
          /** @type {?} */
          var wasActive = this._activeRipples.delete(rippleRef);

          if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
          } // Clear out the cached bounding rect if we have no more ripples.


          if (!this._activeRipples.size) {
            this._containerRect = null;
          } // For ripples that are not active anymore, don't re-run the fade-out animation.


          if (!wasActive) {
            return;
          }
          /** @type {?} */


          var rippleEl = rippleRef.element;
          /** @type {?} */

          var animationConfig = Object.assign({}, defaultRippleAnimationConfig, rippleRef.config.animation);
          rippleEl.style.transitionDuration = "".concat(animationConfig.exitDuration, "ms");
          rippleEl.style.opacity = '0';
          rippleRef.state = RippleState.FADING_OUT; // Once the ripple faded out, the ripple can be safely removed from the DOM.

          this._runTimeoutOutsideZone(
          /**
          * @return {?}
          */
          function () {
            rippleRef.state = RippleState.HIDDEN;

            /** @type {?} */
            rippleEl.parentNode.removeChild(rippleEl);
          }, animationConfig.exitDuration);
        }
        /**
         * Fades out all currently active ripples.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._activeRipples.forEach(
          /**
          * @param {?} ripple
          * @return {?}
          */
          function (ripple) {
            return ripple.fadeOut();
          });
        }
        /**
         * Sets up the trigger event listeners
         * @param {?} elementOrElementRef
         * @return {?}
         */

      }, {
        key: "setupTriggerEvents",
        value: function setupTriggerEvents(elementOrElementRef) {
          var _this16 = this;

          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrElementRef);

          if (!element || element === this._triggerElement) {
            return;
          } // Remove all previously registered event listeners from the trigger element.


          this._removeTriggerEvents();

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this16._triggerEvents.forEach(
            /**
            * @param {?} fn
            * @param {?} type
            * @return {?}
            */
            function (fn, type) {
              element.addEventListener(type, fn, passiveEventOptions);
            });
          });

          this._triggerElement = element;
        }
        /**
         * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
         * @private
         * @param {?} fn
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "_runTimeoutOutsideZone",
        value: function _runTimeoutOutsideZone(fn) {
          var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            return setTimeout(fn, delay);
          });
        }
        /**
         * Removes previously registered event listeners from the trigger element.
         * @return {?}
         */

      }, {
        key: "_removeTriggerEvents",
        value: function _removeTriggerEvents() {
          var _this17 = this;

          if (this._triggerElement) {
            this._triggerEvents.forEach(
            /**
            * @param {?} fn
            * @param {?} type
            * @return {?}
            */
            function (fn, type) {
              /** @type {?} */
              _this17._triggerElement.removeEventListener(type, fn, passiveEventOptions);
            });
          }
        }
      }]);

      return RippleRenderer;
    }();
    /**
     * Enforces a style recalculation of a DOM element by computing its styles.
     * @param {?} element
     * @return {?}
     */


    function enforceStyleRecalculation(element) {
      // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
      // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
      // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      window.getComputedStyle(element).getPropertyValue('opacity');
    }
    /**
     * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
     * @param {?} x
     * @param {?} y
     * @param {?} rect
     * @return {?}
     */


    function distanceToFurthestCorner(x, y, rect) {
      /** @type {?} */
      var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
      /** @type {?} */

      var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
      return Math.sqrt(distX * distX + distY * distY);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify the global ripple options.
     * @type {?}
     */


    var MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');

    var MatRipple =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} ngZone
       * @param {?} platform
       * @param {?=} globalOptions
       * @param {?=} animationMode
       */
      function MatRipple(_elementRef, ngZone, platform, globalOptions, animationMode) {
        _classCallCheck(this, MatRipple);

        this._elementRef = _elementRef;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */

        this.radius = 0;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */

        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);

        if (animationMode === 'NoopAnimations') {
          this._globalOptions.animation = {
            enterDuration: 0,
            exitDuration: 0
          };
        }
      }
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       * @return {?}
       */


      _createClass(MatRipple, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isInitialized = true;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rippleRenderer._removeTriggerEvents();
        }
        /**
         * Fades out all currently showing ripple elements.
         * @return {?}
         */

      }, {
        key: "fadeOutAll",
        value: function fadeOutAll() {
          this._rippleRenderer.fadeOutAll();
        }
        /**
         * Ripple configuration from the directive's input values.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "_setupTriggerEventsIfEnabled",

        /**
         * Sets up the trigger event listeners if ripples are enabled.
         * @private
         * @return {?}
         */
        value: function _setupTriggerEventsIfEnabled() {
          if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
          }
        }
        /**
         * Launches a manual ripple at the specified coordinated or just by the ripple config.
         * @param {?} configOrX
         * @param {?=} y
         * @param {?=} config
         * @return {?}
         */

      }, {
        key: "launch",
        value: function launch(configOrX) {
          var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var config = arguments.length > 2 ? arguments[2] : undefined;

          if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign({}, this.rippleConfig, config));
          } else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object.assign({}, this.rippleConfig, configOrX));
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = value;

          this._setupTriggerEventsIfEnabled();
        }
        /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         * @return {?}
         */

      }, {
        key: "trigger",
        get: function get() {
          return this._trigger || this._elementRef.nativeElement;
        }
        /**
         * @param {?} trigger
         * @return {?}
         */
        ,
        set: function set(trigger) {
          this._trigger = trigger;

          this._setupTriggerEventsIfEnabled();
        }
      }, {
        key: "rippleConfig",
        get: function get() {
          return {
            centered: this.centered,
            radius: this.radius,
            color: this.color,
            animation: Object.assign({}, this._globalOptions.animation, this.animation),
            terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
          };
        }
        /**
         * Whether ripples on pointer-down are disabled or not.
         * \@docs-private Implemented as part of RippleTarget
         * @return {?}
         */

      }, {
        key: "rippleDisabled",
        get: function get() {
          return this.disabled || !!this._globalOptions.disabled;
        }
      }]);

      return MatRipple;
    }();

    MatRipple.ɵfac = function MatRipple_Factory(t) {
      return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatRipple.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatRipple,
      selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
      hostAttrs: [1, "mat-ripple"],
      hostVars: 2,
      hostBindings: function MatRipple_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
        }
      },
      inputs: {
        radius: ["matRippleRadius", "radius"],
        disabled: ["matRippleDisabled", "disabled"],
        trigger: ["matRippleTrigger", "trigger"],
        color: ["matRippleColor", "color"],
        unbounded: ["matRippleUnbounded", "unbounded"],
        centered: ["matRippleCentered", "centered"],
        animation: ["matRippleAnimation", "animation"]
      },
      exportAs: ["matRipple"]
    });
    /** @nocollapse */

    MatRipple.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_RIPPLE_GLOBAL_OPTIONS]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatRipple.propDecorators = {
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleColor']
      }],
      unbounded: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleUnbounded']
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleCentered']
      }],
      radius: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleRadius']
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleAnimation']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleDisabled']
      }],
      trigger: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['matRippleTrigger']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-ripple], [matRipple]',
          exportAs: 'matRipple',
          host: {
            'class': 'mat-ripple',
            '[class.mat-ripple-unbounded]': 'unbounded'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_RIPPLE_GLOBAL_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleRadius']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleDisabled']
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleTrigger']
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleColor']
        }],
        unbounded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleUnbounded']
        }],
        centered: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleCentered']
        }],
        animation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['matRippleAnimation']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatRippleModule = function MatRippleModule() {
      _classCallCheck(this, MatRippleModule);
    };

    MatRippleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatRippleModule
    });
    MatRippleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatRippleModule_Factory(t) {
        return new (t || MatRippleModule)();
      },
      imports: [[MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]], MatCommonModule]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatRippleModule, {
        declarations: function declarations() {
          return [MatRipple];
        },
        imports: function imports() {
          return [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]];
        },
        exports: function exports() {
          return [MatRipple, MatCommonModule];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
          exports: [MatRipple, MatCommonModule],
          declarations: [MatRipple]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Component that shows a simplified checkbox without including any kind of "real" checkbox.
     * Meant to be used when the checkbox is purely decorative and a large number of them will be
     * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
     * Note that theming is meant to be handled by the parent element, e.g.
     * `mat-primary .mat-pseudo-checkbox`.
     *
     * Note that this component will be completely invisible to screen-reader users. This is *not*
     * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
     * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
     * of more complex components that appropriately handle selected / checked state.
     * \@docs-private
     */


    var MatPseudoCheckbox =
    /**
     * @param {?=} _animationMode
     */
    function MatPseudoCheckbox(_animationMode) {
      _classCallCheck(this, MatPseudoCheckbox);

      this._animationMode = _animationMode;
      /**
       * Display state of the checkbox.
       */

      this.state = 'unchecked';
      /**
       * Whether the checkbox is disabled.
       */

      this.disabled = false;
    };

    MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
      return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"], 8));
    };

    MatPseudoCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatPseudoCheckbox,
      selectors: [["mat-pseudo-checkbox"]],
      hostAttrs: [1, "mat-pseudo-checkbox"],
      hostVars: 8,
      hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        }
      },
      inputs: {
        state: "state",
        disabled: "disabled"
      },
      decls: 0,
      vars: 0,
      template: function MatPseudoCheckbox_Template(rf, ctx) {},
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatPseudoCheckbox.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatPseudoCheckbox.propDecorators = {
      state: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          selector: 'mat-pseudo-checkbox',
          styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}"],
          template: '',
          host: {
            'class': 'mat-pseudo-checkbox',
            '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
            '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
            '[class.mat-pseudo-checkbox-disabled]': 'disabled',
            '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
          }
        }]
      }], function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]
          }]
        }];
      }, {
        state: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatPseudoCheckboxModule = function MatPseudoCheckboxModule() {
      _classCallCheck(this, MatPseudoCheckboxModule);
    };

    MatPseudoCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatPseudoCheckboxModule
    });
    MatPseudoCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatPseudoCheckboxModule_Factory(t) {
        return new (t || MatPseudoCheckboxModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatPseudoCheckboxModule, {
        declarations: [MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [MatPseudoCheckbox],
          declarations: [MatPseudoCheckbox]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Boilerplate for applying mixins to MatOptgroup.

    /**
     * \@docs-private
     */


    var MatOptgroupBase = function MatOptgroupBase() {
      _classCallCheck(this, MatOptgroupBase);
    };
    /** @type {?} */


    var _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase); // Counter for unique group ids.

    /** @type {?} */


    var _uniqueOptgroupIdCounter = 0;
    /**
     * Component that is used to group instances of `mat-option`.
     */

    var MatOptgroup =
    /*#__PURE__*/
    function (_MatOptgroupMixinBase2) {
      _inherits(MatOptgroup, _MatOptgroupMixinBase2);

      function MatOptgroup() {
        var _this18;

        _classCallCheck(this, MatOptgroup);

        _this18 = _possibleConstructorReturn(this, _getPrototypeOf(MatOptgroup).apply(this, arguments));
        /**
         * Unique id for the underlying label.
         */

        _this18._labelId = "mat-optgroup-label-".concat(_uniqueOptgroupIdCounter++);
        return _this18;
      }

      return MatOptgroup;
    }(_MatOptgroupMixinBase);

    MatOptgroup.ɵfac = function MatOptgroup_Factory(t) {
      return ɵMatOptgroup_BaseFactory(t || MatOptgroup);
    };

    MatOptgroup.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatOptgroup,
      selectors: [["mat-optgroup"]],
      hostAttrs: ["role", "group", 1, "mat-optgroup"],
      hostVars: 4,
      hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled.toString())("aria-labelledby", ctx._labelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
        }
      },
      inputs: {
        disabled: "disabled",
        label: "label"
      },
      exportAs: ["matOptgroup"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c1,
      decls: 4,
      vars: 2,
      consts: [[1, "mat-optgroup-label", 3, "id"]],
      template: function MatOptgroup_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        }
      },
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
    MatOptgroup.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var ɵMatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-optgroup',
          exportAs: 'matOptgroup',
          template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}<ng-content></ng-content></label><ng-content select=\"mat-option, ng-container\"></ng-content>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          inputs: ['disabled'],
          styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
          host: {
            'class': 'mat-optgroup',
            'role': 'group',
            '[class.mat-optgroup-disabled]': 'disabled',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-labelledby]': '_labelId'
          }
        }]
      }], null, {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Option IDs need to be unique across components, so this counter exists outside of
     * the component definition.
     * @type {?}
     */


    var _uniqueIdCounter = 0;
    /**
     * Event object emitted by MatOption when selected or deselected.
     */

    var MatOptionSelectionChange =
    /**
     * @param {?} source
     * @param {?=} isUserInput
     */
    function MatOptionSelectionChange(source) {
      var isUserInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      _classCallCheck(this, MatOptionSelectionChange);

      this.source = source;
      this.isUserInput = isUserInput;
    };
    /**
     * Injection token used to provide the parent component to options.
     * @type {?}
     */


    var MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
    /**
     * Single option inside of a `<mat-select>` element.
     */

    var MatOption =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _element
       * @param {?} _changeDetectorRef
       * @param {?} _parent
       * @param {?} group
       */
      function MatOption(_element, _changeDetectorRef, _parent, group) {
        _classCallCheck(this, MatOption);

        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._mostRecentViewValue = '';
        /**
         * The unique ID of the option.
         */

        this.id = "mat-option-".concat(_uniqueIdCounter++);
        /**
         * Event emitted when the option is selected or deselected.
         */
        // tslint:disable-next-line:no-output-on-prefix

        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */

        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      }
      /**
       * Whether the wrapping component is in multiple selection mode.
       * @return {?}
       */


      _createClass(MatOption, [{
        key: "select",

        /**
         * Selects the option.
         * @return {?}
         */
        value: function select() {
          if (!this._selected) {
            this._selected = true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Deselects the option.
         * @return {?}
         */

      }, {
        key: "deselect",
        value: function deselect() {
          if (this._selected) {
            this._selected = false;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent();
          }
        }
        /**
         * Sets focus onto this option.
         * @param {?=} _origin
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(_origin, options) {
          // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
          // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.

          /** @type {?} */
          var element = this._getHostElement();

          if (typeof element.focus === 'function') {
            element.focus(options);
          }
        }
        /**
         * This method sets display styles on the option to make it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setActiveStyles",
        value: function setActiveStyles() {
          if (!this._active) {
            this._active = true;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * This method removes display styles on the option that made it appear
         * active. This is used by the ActiveDescendantKeyManager so key
         * events will display the proper options as active on arrow key events.
         * @return {?}
         */

      }, {
        key: "setInactiveStyles",
        value: function setInactiveStyles() {
          if (this._active) {
            this._active = false;

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Gets the label to be used when determining whether the option should be focused.
         * @return {?}
         */

      }, {
        key: "getLabel",
        value: function getLabel() {
          return this.viewValue;
        }
        /**
         * Ensures the option is selected when activated from the keyboard.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleKeydown",
        value: function _handleKeydown(event) {
          if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


            event.preventDefault();
          }
        }
        /**
         * `Selects the option while indicating the selection came from the user. Used to
         * determine if the select's view -> model callback should be invoked.`
         * @return {?}
         */

      }, {
        key: "_selectViaInteraction",
        value: function _selectViaInteraction() {
          if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;

            this._changeDetectorRef.markForCheck();

            this._emitSelectionChangeEvent(true);
          }
        }
        /**
         * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
         * attribute from single-selection, unselected options. Including the `aria-selected="false"`
         * attributes adds a significant amount of noise to screen-reader users without providing useful
         * information.
         * @return {?}
         */

      }, {
        key: "_getAriaSelected",
        value: function _getAriaSelected() {
          return this.selected || (this.multiple ? false : null);
        }
        /**
         * Returns the correct tabindex for the option depending on disabled state.
         * @return {?}
         */

      }, {
        key: "_getTabIndex",
        value: function _getTabIndex() {
          return this.disabled ? '-1' : '0';
        }
        /**
         * Gets the host DOM element.
         * @return {?}
         */

      }, {
        key: "_getHostElement",
        value: function _getHostElement() {
          return this._element.nativeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          // Since parent components could be using the option's label to display the selected values
          // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
          // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
          // relatively cheap, however we still limit them only to selected options in order to avoid
          // hitting the DOM too often.
          if (this._selected) {
            /** @type {?} */
            var viewValue = this.viewValue;

            if (viewValue !== this._mostRecentViewValue) {
              this._mostRecentViewValue = viewValue;

              this._stateChanges.next();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.complete();
        }
        /**
         * Emits the selection change event.
         * @private
         * @param {?=} isUserInput
         * @return {?}
         */

      }, {
        key: "_emitSelectionChangeEvent",
        value: function _emitSelectionChangeEvent() {
          var isUserInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
        }
      }, {
        key: "multiple",
        get: function get() {
          return this._parent && this._parent.multiple;
        }
        /**
         * Whether or not the option is currently selected.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * Whether the option is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.group && this.group.disabled || this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether ripples for the option are disabled.
         * @return {?}
         */

      }, {
        key: "disableRipple",
        get: function get() {
          return this._parent && this._parent.disableRipple;
        }
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         * @return {?}
         */

      }, {
        key: "active",
        get: function get() {
          return this._active;
        }
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         * @return {?}
         */

      }, {
        key: "viewValue",
        get: function get() {
          // TODO(kara): Add input property alternative for node envs.
          return (this._getHostElement().textContent || '').trim();
        }
      }]);

      return MatOption;
    }();

    MatOption.ɵfac = function MatOption_Factory(t) {
      return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatOptgroup, 8));
    };

    MatOption.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatOption,
      selectors: [["mat-option"]],
      hostAttrs: ["role", "option", 1, "mat-option"],
      hostVars: 12,
      hostBindings: function MatOption_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
            return ctx._selectViaInteraction();
          })("keydown", function MatOption_keydown_HostBindingHandler($event) {
            return ctx._handleKeydown($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
        }
      },
      inputs: {
        id: "id",
        disabled: "disabled",
        value: "value"
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      exportAs: ["matOption"],
      ngContentSelectors: _c2,
      decls: 4,
      vars: 3,
      consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"]],
      template: function MatOption_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], MatRipple, MatPseudoCheckbox],
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_OPTION_PARENT_COMPONENT]
        }]
      }, {
        type: MatOptgroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatOption.propDecorators = {
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      onSelectionChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-option',
          exportAs: 'matOption',
          host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.mat-selected]': 'selected',
            '[class.mat-option-multiple]': 'multiple',
            '[class.mat-active]': 'active',
            '[id]': 'id',
            '[attr.aria-selected]': '_getAriaSelected()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.mat-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)',
            'class': 'mat-option'
          },
          styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media (-ms-high-contrast:active){.mat-option .mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
          template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_OPTION_PARENT_COMPONENT]
          }]
        }, {
          type: MatOptgroup,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * Counts the amount of option group labels that precede the specified option.
     * \@docs-private
     * @param {?} optionIndex Index of the option at which to start counting.
     * @param {?} options Flat list of all of the options.
     * @param {?} optionGroups Flat list of all of the option groups.
     * @return {?}
     */


    function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
      if (optionGroups.length) {
        /** @type {?} */
        var optionsArray = options.toArray();
        /** @type {?} */

        var groups = optionGroups.toArray();
        /** @type {?} */

        var groupCounter = 0;

        for (var i = 0; i < optionIndex + 1; i++) {
          if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
            groupCounter++;
          }
        }

        return groupCounter;
      }

      return 0;
    }
    /**
     * Determines the position to which to scroll a panel in order for an option to be into view.
     * \@docs-private
     * @param {?} optionIndex Index of the option to be scrolled into the view.
     * @param {?} optionHeight Height of the options.
     * @param {?} currentScrollPosition Current scroll position of the panel.
     * @param {?} panelHeight Height of the panel.
     * @return {?}
     */


    function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
      /** @type {?} */
      var optionOffset = optionIndex * optionHeight;

      if (optionOffset < currentScrollPosition) {
        return optionOffset;
      }

      if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
      }

      return currentScrollPosition;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatOptionModule = function MatOptionModule() {
      _classCallCheck(this, MatOptionModule);
    };

    MatOptionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatOptionModule
    });
    MatOptionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatOptionModule_Factory(t) {
        return new (t || MatOptionModule)();
      },
      imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatOptionModule, {
        declarations: function declarations() {
          return [MatOption, MatOptgroup];
        },
        imports: function imports() {
          return [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule];
        },
        exports: function exports() {
          return [MatOption, MatOptgroup];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], MatPseudoCheckboxModule],
          exports: [MatOption, MatOptgroup],
          declarations: [MatOption, MatOptgroup]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * InjectionToken that can be used to specify the global label options.
     * @type {?}
     */


    var MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * When constructing a Date, the month is zero-based. This can be confusing, since people are
     * used to seeing them one-based. So we create these aliases to make writing the tests easier.
     * \@docs-private
     * \@breaking-change 8.0.0 Remove this with V8 since it was only targeted for testing.
     * @type {?}
     */

    var JAN = 0;
    /** @type {?} */

    var FEB = 1;
    /** @type {?} */

    var MAR = 2;
    /** @type {?} */

    var APR = 3;
    /** @type {?} */

    var MAY = 4;
    /** @type {?} */

    var JUN = 5;
    /** @type {?} */

    var JUL = 6;
    /** @type {?} */

    var AUG = 7;
    /** @type {?} */

    var SEP = 8;
    /** @type {?} */

    var OCT = 9;
    /** @type {?} */

    var NOV = 10;
    /** @type {?} */

    var DEC = 11;
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=core.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js ***!
    \**************************************************************************/

  /*! exports provided: MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarContainer, MAT_SNACK_BAR_DATA, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Esm2015SnackBarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function () {
      return MatSnackBarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function () {
      return MAT_SNACK_BAR_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBar", function () {
      return MatSnackBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function () {
      return MatSnackBarContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function () {
      return MAT_SNACK_BAR_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function () {
      return MatSnackBarConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function () {
      return MatSnackBarRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function () {
      return SimpleSnackBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function () {
      return matSnackBarAnimations;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/portal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/layout.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Reference to a snack bar dispatched from the snack bar service.
     * @template T
     */


    function SimpleSnackBar_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1691 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1691);

          var ctx_r1690 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1690.action();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1689 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1689.data.action);
      }
    }

    function MatSnackBarContainer_ng_template_0_Template(rf, ctx) {}

    var MatSnackBarRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} containerInstance
       * @param {?} _overlayRef
       */
      function MatSnackBarRef(containerInstance, _overlayRef) {
        var _this19 = this;

        _classCallCheck(this, MatSnackBarRef);

        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */

        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Subject for notifying the user that the snack bar has opened and appeared.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Subject for notifying the user that the snack bar action was called.
         */

        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Whether the snack bar was dismissed using the action button.
         */

        this._dismissedByAction = false;
        this.containerInstance = containerInstance; // Dismiss snackbar on action.

        this.onAction().subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this19.dismiss();
        });

        containerInstance._onExit.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this19._finishDismiss();
        });
      }
      /**
       * Dismisses the snack bar.
       * @return {?}
       */


      _createClass(MatSnackBarRef, [{
        key: "dismiss",
        value: function dismiss() {
          if (!this._afterDismissed.closed) {
            this.containerInstance.exit();
          }

          clearTimeout(this._durationTimeoutId);
        }
        /**
         * Marks the snackbar action clicked.
         * @return {?}
         */

      }, {
        key: "dismissWithAction",
        value: function dismissWithAction() {
          if (!this._onAction.closed) {
            this._dismissedByAction = true;

            this._onAction.next();

            this._onAction.complete();
          }
        }
        /**
         * Marks the snackbar action clicked.
         * @deprecated Use `dismissWithAction` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "closeWithAction",
        value: function closeWithAction() {
          this.dismissWithAction();
        }
        /**
         * Dismisses the snack bar after some duration
         * @param {?} duration
         * @return {?}
         */

      }, {
        key: "_dismissAfter",
        value: function _dismissAfter(duration) {
          var _this20 = this;

          this._durationTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this20.dismiss();
          }, duration);
        }
        /**
         * Marks the snackbar as opened
         * @return {?}
         */

      }, {
        key: "_open",
        value: function _open() {
          if (!this._afterOpened.closed) {
            this._afterOpened.next();

            this._afterOpened.complete();
          }
        }
        /**
         * Cleans up the DOM after closing.
         * @private
         * @return {?}
         */

      }, {
        key: "_finishDismiss",
        value: function _finishDismiss() {
          this._overlayRef.dispose();

          if (!this._onAction.closed) {
            this._onAction.complete();
          }

          this._afterDismissed.next({
            dismissedByAction: this._dismissedByAction
          });

          this._afterDismissed.complete();

          this._dismissedByAction = false;
        }
        /**
         * Gets an observable that is notified when the snack bar is finished closing.
         * @return {?}
         */

      }, {
        key: "afterDismissed",
        value: function afterDismissed() {
          return this._afterDismissed.asObservable();
        }
        /**
         * Gets an observable that is notified when the snack bar has opened and appeared.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this.containerInstance._onEnter;
        }
        /**
         * Gets an observable that is notified when the snack bar action is called.
         * @return {?}
         */

      }, {
        key: "onAction",
        value: function onAction() {
          return this._onAction.asObservable();
        }
      }]);

      return MatSnackBarRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to access the data that was passed in to a snack bar.
     * @type {?}
     */


    var MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MatSnackBarData');
    /**
     * Configuration used when opening a snack-bar.
     * @template D
     */

    var MatSnackBarConfig = function MatSnackBarConfig() {
      _classCallCheck(this, MatSnackBarConfig);

      /**
       * The politeness level for the MatAriaLiveAnnouncer announcement.
       */
      this.politeness = 'assertive';
      /**
       * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
       * component or template, the announcement message will default to the specified message.
       */

      this.announcementMessage = '';
      /**
       * The length of time in milliseconds to wait before automatically dismissing the snack bar.
       */

      this.duration = 0;
      /**
       * Data being injected into the child component.
       */

      this.data = null;
      /**
       * The horizontal position to place the snack bar.
       */

      this.horizontalPosition = 'center';
      /**
       * The vertical position to place the snack bar.
       */

      this.verticalPosition = 'bottom';
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A component used to open as the default snack bar, matching material spec.
     * This should only be used internally by the snack bar service.
     */


    var SimpleSnackBar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} snackBarRef
       * @param {?} data
       */
      function SimpleSnackBar(snackBarRef, data) {
        _classCallCheck(this, SimpleSnackBar);

        this.snackBarRef = snackBarRef;
        this.data = data;
      }
      /**
       * Performs the action on the snack bar.
       * @return {?}
       */


      _createClass(SimpleSnackBar, [{
        key: "action",
        value: function action() {
          this.snackBarRef.dismissWithAction();
        }
        /**
         * If the action button should be shown.
         * @return {?}
         */

      }, {
        key: "hasAction",
        get: function get() {
          return !!this.data.action;
        }
      }]);

      return SimpleSnackBar;
    }();

    SimpleSnackBar.ɵfac = function SimpleSnackBar_Factory(t) {
      return new (t || SimpleSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatSnackBarRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_SNACK_BAR_DATA));
    };

    SimpleSnackBar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SimpleSnackBar,
      selectors: [["simple-snack-bar"]],
      hostAttrs: [1, "mat-simple-snackbar"],
      decls: 3,
      vars: 2,
      consts: [["class", "mat-simple-snackbar-action", 4, "ngIf"], [1, "mat-simple-snackbar-action"], ["mat-button", "", 3, "click"]],
      template: function SimpleSnackBar_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SimpleSnackBar_div_2_Template, 3, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasAction);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    SimpleSnackBar.ctorParameters = function () {
      return [{
        type: MatSnackBarRef
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_SNACK_BAR_DATA]
        }]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SimpleSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'simple-snack-bar',
          template: "<span>{{data.message}}</span><div class=\"mat-simple-snackbar-action\" *ngIf=\"hasAction\"><button mat-button (click)=\"action()\">{{data.action}}</button></div>",
          styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}"],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
          host: {
            'class': 'mat-simple-snackbar'
          }
        }]
      }], function () {
        return [{
          type: MatSnackBarRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SNACK_BAR_DATA]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material snack bar.
     * \@docs-private
     * @type {?}
     */


    var matSnackBarAnimations = {
      /**
       * Animation that shows and hides a snack bar.
       */
      snackBarState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'scale(0.8)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'scale(1)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void, * => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('75ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Internal component that wraps user-provided snack bar content.
     * \@docs-private
     */

    var MatSnackBarContainer =
    /*#__PURE__*/
    function (_angular_cdk_portal__) {
      _inherits(MatSnackBarContainer, _angular_cdk_portal__);

      /**
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} snackBarConfig
       */
      function MatSnackBarContainer(_ngZone, _elementRef, _changeDetectorRef, snackBarConfig) {
        var _this21;

        _classCallCheck(this, MatSnackBarContainer);

        _this21 = _possibleConstructorReturn(this, _getPrototypeOf(MatSnackBarContainer).call(this));
        _this21._ngZone = _ngZone;
        _this21._elementRef = _elementRef;
        _this21._changeDetectorRef = _changeDetectorRef;
        _this21.snackBarConfig = snackBarConfig;
        /**
         * Whether the component has been destroyed.
         */

        _this21._destroyed = false;
        /**
         * Subject for notifying that the snack bar has exited from view.
         */

        _this21._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Subject for notifying that the snack bar has finished entering the view.
         */

        _this21._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * The state of the snack bar animations.
         */

        _this21._animationState = 'void'; // Based on the ARIA spec, `alert` and `status` roles have an
        // implicit `assertive` and `polite` politeness respectively.

        if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
          _this21._role = 'alert';
        } else if (snackBarConfig.politeness === 'off') {
          _this21._role = null;
        } else {
          _this21._role = 'status';
        }

        return _this21;
      }
      /**
       * Attach a component portal as content to this snack bar container.
       * @template T
       * @param {?} portal
       * @return {?}
       */


      _createClass(MatSnackBarContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          this._assertNotAttached();

          this._applySnackBarClasses();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a template portal as content to this snack bar container.
         * @template C
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          this._assertNotAttached();

          this._applySnackBarClasses();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Handle end of animations, updating the state of the snackbar.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          var fromState = event.fromState,
              toState = event.toState;

          if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
            this._completeExit();
          }

          if (toState === 'visible') {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.

            /** @type {?} */
            var onEnter = this._onEnter;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              onEnter.next();
              onEnter.complete();
            });
          }
        }
        /**
         * Begin animation of snack bar entrance into view.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter() {
          if (!this._destroyed) {
            this._animationState = 'visible';

            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Begin animation of the snack bar exiting from view.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit() {
          // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
          // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
          // `MatSnackBar.open`).
          this._animationState = 'hidden';
          return this._onExit;
        }
        /**
         * Makes sure the exit callbacks have been invoked when the element is destroyed.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed = true;

          this._completeExit();
        }
        /**
         * Waits for the zone to settle before removing the element. Helps prevent
         * errors where we end up removing an element which is in the middle of an animation.
         * @private
         * @return {?}
         */

      }, {
        key: "_completeExit",
        value: function _completeExit() {
          var _this22 = this;

          this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this22._onExit.next();

            _this22._onExit.complete();
          });
        }
        /**
         * Applies the various positioning and user-configured CSS classes to the snack bar.
         * @private
         * @return {?}
         */

      }, {
        key: "_applySnackBarClasses",
        value: function _applySnackBarClasses() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var panelClasses = this.snackBarConfig.panelClass;

          if (panelClasses) {
            if (Array.isArray(panelClasses)) {
              // Note that we can't use a spread here, because IE doesn't support multiple arguments.
              panelClasses.forEach(
              /**
              * @param {?} cssClass
              * @return {?}
              */
              function (cssClass) {
                return element.classList.add(cssClass);
              });
            } else {
              element.classList.add(panelClasses);
            }
          }

          if (this.snackBarConfig.horizontalPosition === 'center') {
            element.classList.add('mat-snack-bar-center');
          }

          if (this.snackBarConfig.verticalPosition === 'top') {
            element.classList.add('mat-snack-bar-top');
          }
        }
        /**
         * Asserts that no content is already attached to the container.
         * @private
         * @return {?}
         */

      }, {
        key: "_assertNotAttached",
        value: function _assertNotAttached() {
          if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach snack bar content after content is already attached');
          }
        }
      }]);

      return MatSnackBarContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["BasePortalOutlet"]);

    MatSnackBarContainer.ɵfac = function MatSnackBarContainer_Factory(t) {
      return new (t || MatSnackBarContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MatSnackBarConfig));
    };

    MatSnackBarContainer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MatSnackBarContainer,
      selectors: [["snack-bar-container"]],
      viewQuery: function MatSnackBarContainer_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: [1, "mat-snack-bar-container"],
      hostVars: 2,
      hostBindings: function MatSnackBarContainer_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcomponentHostSyntheticListener"]("@state.done", function MatSnackBarContainer_animation_state_done_HostBindingHandler($event) {
            return ctx.onAnimationEnd($event);
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("role", ctx._role);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵupdateSyntheticHostBinding"]("@state", ctx._animationState);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function MatSnackBarContainer_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MatSnackBarContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"]],
      styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}@media (-ms-high-contrast:active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],
      encapsulation: 2,
      data: {
        animation: [matSnackBarAnimations.snackBarState]
      }
    });
    /** @nocollapse */

    MatSnackBarContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: MatSnackBarConfig
      }];
    };

    MatSnackBarContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], {
          static: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSnackBarContainer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'snack-bar-container',
          template: "<ng-template cdkPortalOutlet></ng-template>",
          styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}@media (-ms-high-contrast:active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],
          // In Ivy embedded views will be change detected from their declaration place, rather than
          // where they were stamped out. This means that we can't have the snack bar container be OnPush,
          // because it might cause snack bars that were opened from a template not to be out of date.
          // tslint:disable-next-line:validate-decorators
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].Default,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
          animations: [matSnackBarAnimations.snackBarState],
          host: {
            '[attr.role]': '_role',
            'class': 'mat-snack-bar-container',
            '[@state]': '_animationState',
            '(@state.done)': 'onAnimationEnd($event)'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: MatSnackBarConfig
        }];
      }, {
        _portalOutlet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["CdkPortalOutlet"], {
            static: true
          }]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSnackBarModule = function MatSnackBarModule() {
      _classCallCheck(this, MatSnackBarModule);
    };

    MatSnackBarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatSnackBarModule
    });
    MatSnackBarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatSnackBarModule_Factory(t) {
        return new (t || MatSnackBarModule)();
      },
      imports: [[_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSnackBarModule, {
        declarations: function declarations() {
          return [MatSnackBarContainer, SimpleSnackBar];
        },
        imports: function imports() {
          return [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSnackBarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
          exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
          declarations: [MatSnackBarContainer, SimpleSnackBar],
          entryComponents: [MatSnackBarContainer, SimpleSnackBar]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify default snack bar.
     * @type {?}
     */


    var MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('mat-snack-bar-default-options', {
      providedIn: 'root',
      factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
      return new MatSnackBarConfig();
    }
    /**
     * Service to dispatch Material Design snack bar messages.
     */


    var MatSnackBar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _live
       * @param {?} _injector
       * @param {?} _breakpointObserver
       * @param {?} _parentSnackBar
       * @param {?} _defaultConfig
       */
      function MatSnackBar(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
        _classCallCheck(this, MatSnackBar);

        this._overlay = _overlay;
        this._live = _live;
        this._injector = _injector;
        this._breakpointObserver = _breakpointObserver;
        this._parentSnackBar = _parentSnackBar;
        this._defaultConfig = _defaultConfig;
        /**
         * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
         * If there is a parent snack-bar service, all operations should delegate to that parent
         * via `_openedSnackBarRef`.
         */

        this._snackBarRefAtThisLevel = null;
      }
      /**
       * Reference to the currently opened snackbar at *any* level.
       * @return {?}
       */


      _createClass(MatSnackBar, [{
        key: "openFromComponent",

        /**
         * Creates and dispatches a snack bar with a custom component for the content, removing any
         * currently opened snack bars.
         *
         * @template T
         * @param {?} component Component to be instantiated.
         * @param {?=} config Extra configuration for the snack bar.
         * @return {?}
         */
        value: function openFromComponent(component, config) {
          return (
            /** @type {?} */
            this._attach(component, config)
          );
        }
        /**
         * Creates and dispatches a snack bar with a custom template for the content, removing any
         * currently opened snack bars.
         *
         * @param {?} template Template to be instantiated.
         * @param {?=} config Extra configuration for the snack bar.
         * @return {?}
         */

      }, {
        key: "openFromTemplate",
        value: function openFromTemplate(template, config) {
          return this._attach(template, config);
        }
        /**
         * Opens a snackbar with a message and an optional action.
         * @param {?} message The message to show in the snackbar.
         * @param {?=} action The label for the snackbar action.
         * @param {?=} config Additional configuration options for the snackbar.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var config = arguments.length > 2 ? arguments[2] : undefined;

          /** @type {?} */
          var _config = Object.assign({}, this._defaultConfig, config); // Since the user doesn't have access to the component, we can
          // override the data to pass in our own message and action.


          _config.data = {
            message: message,
            action: action
          };

          if (!_config.announcementMessage) {
            _config.announcementMessage = message;
          }

          return this.openFromComponent(SimpleSnackBar, _config);
        }
        /**
         * Dismisses the currently-visible snack bar.
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss() {
          if (this._openedSnackBarRef) {
            this._openedSnackBarRef.dismiss();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Only dismiss the snack bar at the current level on destroy.
          if (this._snackBarRefAtThisLevel) {
            this._snackBarRefAtThisLevel.dismiss();
          }
        }
        /**
         * Attaches the snack bar container component to the overlay.
         * @private
         * @param {?} overlayRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_attachSnackBarContainer",
        value: function _attachSnackBarContainer(overlayRef, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatSnackBarConfig, config]]));
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](MatSnackBarContainer, config.viewContainerRef, injector);
          /** @type {?} */

          var containerRef = overlayRef.attach(containerPortal);
          containerRef.instance.snackBarConfig = config;
          return containerRef.instance;
        }
        /**
         * Places a new component or a template as the content of the snack bar container.
         * @private
         * @template T
         * @param {?} content
         * @param {?=} userConfig
         * @return {?}
         */

      }, {
        key: "_attach",
        value: function _attach(content, userConfig) {
          /** @type {?} */
          var config = Object.assign({}, new MatSnackBarConfig(), this._defaultConfig, userConfig);
          /** @type {?} */

          var overlayRef = this._createOverlay(config);
          /** @type {?} */


          var container = this._attachSnackBarContainer(overlayRef, config);
          /** @type {?} */


          var snackBarRef = new MatSnackBarRef(container, overlayRef);

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]) {
            /** @type {?} */
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](content,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.data,
              snackBarRef: snackBarRef
            });
            snackBarRef.instance = container.attachTemplatePortal(portal);
          } else {
            /** @type {?} */
            var injector = this._createInjector(config, snackBarRef);
            /** @type {?} */


            var _portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["ComponentPortal"](content, undefined, injector);
            /** @type {?} */


            var contentRef = container.attachComponentPortal(_portal); // We can't pass this via the injector, because the injector is created earlier.

            snackBarRef.instance = contentRef.instance;
          } // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
          // appropriate. This class is applied to the overlay element because the overlay must expand to
          // fill the width of the screen for full width snackbars.


          this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetPortrait).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(overlayRef.detachments())).subscribe(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state$$1) {
            /** @type {?} */
            var classList = overlayRef.overlayElement.classList;
            /** @type {?} */

            var className = 'mat-snack-bar-handset';
            state$$1.matches ? classList.add(className) : classList.remove(className);
          });

          this._animateSnackBar(snackBarRef, config);

          this._openedSnackBarRef = snackBarRef;
          return this._openedSnackBarRef;
        }
        /**
         * Animates the old snack bar out and the new one in.
         * @private
         * @param {?} snackBarRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_animateSnackBar",
        value: function _animateSnackBar(snackBarRef, config) {
          var _this23 = this;

          // When the snackbar is dismissed, clear the reference to it.
          snackBarRef.afterDismissed().subscribe(
          /**
          * @return {?}
          */
          function () {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (_this23._openedSnackBarRef == snackBarRef) {
              _this23._openedSnackBarRef = null;
            }

            if (config.announcementMessage) {
              _this23._live.clear();
            }
          });

          if (this._openedSnackBarRef) {
            // If a snack bar is already in view, dismiss it and enter the
            // new snack bar after exit animation is complete.
            this._openedSnackBarRef.afterDismissed().subscribe(
            /**
            * @return {?}
            */
            function () {
              snackBarRef.containerInstance.enter();
            });

            this._openedSnackBarRef.dismiss();
          } else {
            // If no snack bar is in view, enter the new snack bar.
            snackBarRef.containerInstance.enter();
          } // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.


          if (config.duration && config.duration > 0) {
            snackBarRef.afterOpened().subscribe(
            /**
            * @return {?}
            */
            function () {
              return snackBarRef._dismissAfter(
              /** @type {?} */
              config.duration);
            });
          }

          if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
          }
        }
        /**
         * Creates a new overlay and places it in the correct location.
         * @private
         * @param {?} config The user-specified snack bar config.
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayConfig"]();
          overlayConfig.direction = config.direction;
          /** @type {?} */

          var positionStrategy = this._overlay.position().global(); // Set horizontal position.

          /** @type {?} */


          var isRtl = config.direction === 'rtl';
          /** @type {?} */

          var isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
          /** @type {?} */

          var isRight = !isLeft && config.horizontalPosition !== 'center';

          if (isLeft) {
            positionStrategy.left('0');
          } else if (isRight) {
            positionStrategy.right('0');
          } else {
            positionStrategy.centerHorizontally();
          } // Set horizontal position.


          if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
          } else {
            positionStrategy.bottom('0');
          }

          overlayConfig.positionStrategy = positionStrategy;
          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an injector to be used inside of a snack bar component.
         * @private
         * @template T
         * @param {?} config Config that was used to create the snack bar.
         * @param {?} snackBarRef Reference to the snack bar.
         * @return {?}
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, snackBarRef) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatSnackBarRef, snackBarRef], [MAT_SNACK_BAR_DATA, config.data]]));
        }
      }, {
        key: "_openedSnackBarRef",
        get: function get() {
          /** @type {?} */
          var parent = this._parentSnackBar;
          return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._parentSnackBar) {
            this._parentSnackBar._openedSnackBarRef = value;
          } else {
            this._snackBarRefAtThisLevel = value;
          }
        }
      }]);

      return MatSnackBar;
    }();

    MatSnackBar.ɵfac = function MatSnackBar_Factory(t) {
      return new (t || MatSnackBar)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MatSnackBar, 12), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MAT_SNACK_BAR_DEFAULT_OPTIONS));
    };

    MatSnackBar.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: MatSnackBar,
      factory: MatSnackBar.ɵfac,
      providedIn: MatSnackBarModule
    });
    /** @nocollapse */

    MatSnackBar.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]
      }, {
        type: MatSnackBar,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }]
      }, {
        type: MatSnackBarConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    MatSnackBar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function MatSnackBar_Factory() {
        return new MatSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MatSnackBar, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MAT_SNACK_BAR_DEFAULT_OPTIONS));
      },
      token: MatSnackBar,
      providedIn: MatSnackBarModule
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSnackBar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: MatSnackBarModule
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]
        }, {
          type: MatSnackBar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }]
        }, {
          type: MatSnackBarConfig,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
          }]
        }];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=snack-bar.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~layouts-admin-layout-admin-layout-module~layouts-template-layout-template-layout-module-es5.js.map