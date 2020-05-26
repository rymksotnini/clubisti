function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layouts-admin-layout-admin-layout-module~layouts-template-layout-template-layout-module"], {
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
        var _r1921 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SimpleSnackBar_div_2_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1921);

          var ctx_r1920 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r1920.action();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1919 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1919.data.action);
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
        var _this = this;

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
          return _this.dismiss();
        });

        containerInstance._onExit.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this._finishDismiss();
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
          var _this2 = this;

          this._durationTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this2.dismiss();
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

      var _super = _createSuper(MatSnackBarContainer);

      /**
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} snackBarConfig
       */
      function MatSnackBarContainer(_ngZone, _elementRef, _changeDetectorRef, snackBarConfig) {
        var _this3;

        _classCallCheck(this, MatSnackBarContainer);

        _this3 = _super.call(this);
        _this3._ngZone = _ngZone;
        _this3._elementRef = _elementRef;
        _this3._changeDetectorRef = _changeDetectorRef;
        _this3.snackBarConfig = snackBarConfig;
        /**
         * Whether the component has been destroyed.
         */

        _this3._destroyed = false;
        /**
         * Subject for notifying that the snack bar has exited from view.
         */

        _this3._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * Subject for notifying that the snack bar has finished entering the view.
         */

        _this3._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /**
         * The state of the snack bar animations.
         */

        _this3._animationState = 'void'; // Based on the ARIA spec, `alert` and `status` roles have an
        // implicit `assertive` and `polite` politeness respectively.

        if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
          _this3._role = 'alert';
        } else if (snackBarConfig.politeness === 'off') {
          _this3._role = null;
        } else {
          _this3._role = 'status';
        }

        return _this3;
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
          var _this4 = this;

          this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this4._onExit.next();

            _this4._onExit.complete();
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
          var _this5 = this;

          // When the snackbar is dismissed, clear the reference to it.
          snackBarRef.afterDismissed().subscribe(
          /**
          * @return {?}
          */
          function () {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (_this5._openedSnackBarRef == snackBarRef) {
              _this5._openedSnackBarRef = null;
            }

            if (config.announcementMessage) {
              _this5._live.clear();
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