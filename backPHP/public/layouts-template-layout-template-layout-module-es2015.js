(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-template-layout-template-layout-module"],{

/***/ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js ***!
  \***************************************************************************/
/*! exports provided: ClipboardDirective, ClipboardIfSupportedDirective, ClipboardModule, ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */

let ClipboardService = class ClipboardService {
    constructor(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    configure(config) {
        this.config = config;
    }
    copy(content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content });
        }
        const copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content });
    }
    get isSupported() {
        return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
    }
    isTargetValid(element) {
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
    copyFromInputElement(targetElm, isFocus = true) {
        try {
            this.selectTarget(targetElm);
            const re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    }
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    isCopySuccessInIE11() {
        const clipboardData = this.window['clipboardData'];
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
    copyFromContent(content, container = this.document.body) {
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        const toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
        }
        return toReturn;
    }
    /**
     * Remove temporary textarea if any exists.
     */
    destroy(container = this.document.body) {
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    }
    /**
     * Select the target html input element.
     */
    selectTarget(inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    }
    copyText() {
        return this.document.execCommand('copy');
    }
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    clearSelection(inputElement, window) {
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    }
    /**
     * Creates a fake textarea for copy command.
     */
    createTempTextArea(doc, window) {
        const isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        let ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        const yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    }
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    pushCopyResponse(response) {
        this.copySubject.next(response);
    }
    /**
     * @deprecated use pushCopyResponse instead.
     */
    pushCopyReponse(response) {
        this.pushCopyResponse(response);
    }
};
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); };
ClipboardService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] }
];
ClipboardService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
ClipboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]))
], ClipboardService);

let ClipboardDirective = class ClipboardDirective {
    constructor(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    ngOnInit() { }
    ngOnDestroy() {
        this.clipboardSrv.destroy(this.container);
    }
    onClick(event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    }
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    handleResult(succeeded, copiedContent, event) {
        let response = {
            isSuccess: succeeded,
            event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyResponse(response);
    }
};
ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) { return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService)); };
ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardDirective, selectors: [["", "ngxClipboard", ""]], hostBindings: function ClipboardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClipboardDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { targetElm: ["ngxClipboard", "targetElm"], container: "container", cbContent: "cbContent", cbSuccessMsg: "cbSuccessMsg" }, outputs: { cbOnSuccess: "cbOnSuccess", cbOnError: "cbOnError" } });
ClipboardDirective.ctorParameters = () => [
    { type: ClipboardService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ngxClipboard')
], ClipboardDirective.prototype, "targetElm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ClipboardDirective.prototype, "container", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ClipboardDirective.prototype, "cbContent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ClipboardDirective.prototype, "cbSuccessMsg", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ClipboardDirective.prototype, "cbOnSuccess", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ClipboardDirective.prototype, "cbOnError", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event.target'])
], ClipboardDirective.prototype, "onClick", null);

let ClipboardIfSupportedDirective = class ClipboardIfSupportedDirective {
    constructor(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    ngOnInit() {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    }
};
ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) { return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
ClipboardIfSupportedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardIfSupportedDirective, selectors: [["", "ngxClipboardIfSupported", ""]] });
ClipboardIfSupportedDirective.ctorParameters = () => [
    { type: ClipboardService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
];

let ClipboardModule = class ClipboardModule {
};
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboard]'
            }]
    }], function () { return [{ type: ClipboardService }]; }, { cbOnSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cbOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click', ['$event.target']]
        }], targetElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngxClipboard']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbSuccessMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardIfSupportedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboardIfSupported]'
            }]
    }], function () { return [{ type: ClipboardService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: function () { return [ClipboardDirective,
        ClipboardIfSupportedDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ClipboardDirective,
        ClipboardIfSupportedDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                exports: [ClipboardDirective, ClipboardIfSupportedDirective]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js ***!
  \*********************************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: () => window } : undefined);

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header bg-transparent\">\r\n          <h3 class=\"mb-0\">Icons</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row icon-examples\">\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'active-40' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'active-40'\" (cbOnSuccess) = \"copy = 'active-40'\">\r\n                <div>\r\n                  <i class=\"ni ni-active-40\"></i>\r\n                  <span>active-40</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'air-baloon' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'air-baloon'\" (cbOnSuccess) = \"copy = 'air-baloon'\">\r\n                <div>\r\n                  <i class=\"ni ni-air-baloon\"></i>\r\n                  <span>air-baloon</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'album-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'album-2'\" (cbOnSuccess) = \"copy = 'album-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-album-2\"></i>\r\n                  <span>album-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'align-center' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'align-center'\" (cbOnSuccess) = \"copy = 'align-center'\">\r\n                <div>\r\n                  <i class=\"ni ni-align-center\"></i>\r\n                  <span>align-center</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'align-left-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'align-left-2'\" (cbOnSuccess) = \"copy = 'align-left-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-align-left-2\"></i>\r\n                  <span>align-left-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ambulance' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ambulance'\" (cbOnSuccess) = \"copy = 'ambulance'\">\r\n                <div>\r\n                  <i class=\"ni ni-ambulance\"></i>\r\n                  <span>ambulance</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'app' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'app'\" (cbOnSuccess) = \"copy = 'app'\">\r\n                <div>\r\n                  <i class=\"ni ni-app\"></i>\r\n                  <span>app</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'archive-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'archive-2'\" (cbOnSuccess) = \"copy = 'archive-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-archive-2\"></i>\r\n                  <span>archive-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'atom' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'atom'\" (cbOnSuccess) = \"copy = 'atom'\">\r\n                <div>\r\n                  <i class=\"ni ni-atom\"></i>\r\n                  <span>atom</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'badge' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'badge'\" (cbOnSuccess) = \"copy = 'badge'\">\r\n                <div>\r\n                  <i class=\"ni ni-badge\"></i>\r\n                  <span>badge</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bag-17' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bag-17'\" (cbOnSuccess) = \"copy = 'bag-17'\">\r\n                <div>\r\n                  <i class=\"ni ni-bag-17\"></i>\r\n                  <span>bag-17</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'basket' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'basket'\" (cbOnSuccess) = \"copy = 'basket'\">\r\n                <div>\r\n                  <i class=\"ni ni-basket\"></i>\r\n                  <span>basket</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bell-55' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bell-55'\" (cbOnSuccess) = \"copy = 'bell-55'\">\r\n                <div>\r\n                  <i class=\"ni ni-bell-55\"></i>\r\n                  <span>bell-55</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-down' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-down'\" (cbOnSuccess) = \"copy = 'bold-down'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-down\"></i>\r\n                  <span>bold-down</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-left' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-left'\" (cbOnSuccess) = \"copy = 'bold-left'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-left\"></i>\r\n                  <span>bold-left</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-right' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-right'\" (cbOnSuccess) = \"copy = 'bold-right'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-right\"></i>\r\n                  <span>bold-right</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-up' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-up'\" (cbOnSuccess) = \"copy = 'bold-up'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-up\"></i>\r\n                  <span>bold-up</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold'\" (cbOnSuccess) = \"copy = 'bold'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold\"></i>\r\n                  <span>bold</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'book-bookmark' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'book-bookmark'\" (cbOnSuccess) = \"copy = 'book-bookmark'\">\r\n                <div>\r\n                  <i class=\"ni ni-book-bookmark\"></i>\r\n                  <span>book-bookmark</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'books' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'books'\" (cbOnSuccess) = \"copy = 'books'\">\r\n                <div>\r\n                  <i class=\"ni ni-books\"></i>\r\n                  <span>books</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'box-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'box-2'\" (cbOnSuccess) = \"copy = 'box-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-box-2\"></i>\r\n                  <span>box-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'briefcase-24' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'briefcase-24'\" (cbOnSuccess) = \"copy = 'briefcase-24'\">\r\n                <div>\r\n                  <i class=\"ni ni-briefcase-24\"></i>\r\n                  <span>briefcase-24</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'building' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'building'\" (cbOnSuccess) = \"copy = 'building'\">\r\n                <div>\r\n                  <i class=\"ni ni-building\"></i>\r\n                  <span>building</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bulb-61' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bulb-61'\" (cbOnSuccess) = \"copy = 'bulb-61'\">\r\n                <div>\r\n                  <i class=\"ni ni-bulb-61\"></i>\r\n                  <span>bulb-61</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bullet-list-67' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bullet-list-67'\" (cbOnSuccess) = \"copy = 'bullet-list-67'\">\r\n                <div>\r\n                  <i class=\"ni ni-bullet-list-67\"></i>\r\n                  <span>bullet-list-67</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bus-front-12' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bus-front-12'\" (cbOnSuccess) = \"copy = 'bus-front-12'\">\r\n                <div>\r\n                  <i class=\"ni ni-bus-front-12\"></i>\r\n                  <span>bus-front-12</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-pause' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-pause'\" (cbOnSuccess) = \"copy = 'button-pause'\">\r\n                <div>\r\n                  <i class=\"ni ni-button-pause\"></i>\r\n                  <span>button-pause</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-play' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-play'\" (cbOnSuccess) = \"copy = 'button-play'\">\r\n                <div>\r\n                  <i class=\"ni ni-button-play\"></i>\r\n                  <span>button-play</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-power' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-power'\" (cbOnSuccess) = \"copy = 'button-power'\">\r\n                <div>\r\n                  <i class=\"ni ni-button-power\"></i>\r\n                  <span>button-power</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'calendar-grid-58' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'calendar-grid-58'\" (cbOnSuccess) = \"copy = 'calendar-grid-58'\">\r\n                <div>\r\n                  <i class=\"ni ni-calendar-grid-58\"></i>\r\n                  <span>calendar-grid-58</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'camera-compact' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'camera-compact'\" (cbOnSuccess) = \"copy = 'camera-compact'\">\r\n                <div>\r\n                  <i class=\"ni ni-camera-compact\"></i>\r\n                  <span>camera-compact</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'caps-small' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'caps-small'\" (cbOnSuccess) = \"copy = 'caps-small'\">\r\n                <div>\r\n                  <i class=\"ni ni-caps-small\"></i>\r\n                  <span>caps-small</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cart' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cart'\" (cbOnSuccess) = \"copy = 'cart'\">\r\n                <div>\r\n                  <i class=\"ni ni-cart\"></i>\r\n                  <span>cart</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chart-bar-32' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chart-bar-32'\" (cbOnSuccess) = \"copy = 'chart-bar-32'\">\r\n                <div>\r\n                  <i class=\"ni ni-chart-bar-32\"></i>\r\n                  <span>chart-bar-32</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chart-pie-35' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chart-pie-35'\" (cbOnSuccess) = \"copy = 'chart-pie-35'\">\r\n                <div>\r\n                  <i class=\"ni ni-chart-pie-35\"></i>\r\n                  <span>chart-pie-35</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chat-round' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chat-round'\" (cbOnSuccess) = \"copy = 'chat-round'\">\r\n                <div>\r\n                  <i class=\"ni ni-chat-round\"></i>\r\n                  <span>chat-round</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'check-bold' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'check-bold'\" (cbOnSuccess) = \"copy = 'check-bold'\">\r\n                <div>\r\n                  <i class=\"ni ni-check-bold\"></i>\r\n                  <span>check-bold</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'circle-08' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'circle-08'\" (cbOnSuccess) = \"copy = 'circle-08'\">\r\n                <div>\r\n                  <i class=\"ni ni-circle-08\"></i>\r\n                  <span>circle-08</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cloud-download-95' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cloud-download-95'\" (cbOnSuccess) = \"copy = 'cloud-download-95'\">\r\n                <div>\r\n                  <i class=\"ni ni-cloud-download-95\"></i>\r\n                  <span>cloud-download-95</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cloud-upload-96' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cloud-upload-96'\" (cbOnSuccess) = \"copy = 'cloud-upload-96'\">\r\n                <div>\r\n                  <i class=\"ni ni-cloud-upload-96\"></i>\r\n                  <span>cloud-upload-96</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'compass-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'compass-04'\" (cbOnSuccess) = \"copy = 'compass-04'\">\r\n                <div>\r\n                  <i class=\"ni ni-compass-04\"></i>\r\n                  <span>compass-04</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'controller' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'controller'\" (cbOnSuccess) = \"copy = 'controller'\">\r\n                <div>\r\n                  <i class=\"ni ni-controller\"></i>\r\n                  <span>controller</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'credit-card' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'credit-card'\" (cbOnSuccess) = \"copy = 'credit-card'\">\r\n                <div>\r\n                  <i class=\"ni ni-credit-card\"></i>\r\n                  <span>credit-card</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'curved-next' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'curved-next'\" (cbOnSuccess) = \"copy = 'curved-next'\">\r\n                <div>\r\n                  <i class=\"ni ni-curved-next\"></i>\r\n                  <span>curved-next</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'delivery-fast' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'delivery-fast'\" (cbOnSuccess) = \"copy = 'delivery-fast'\">\r\n                <div>\r\n                  <i class=\"ni ni-delivery-fast\"></i>\r\n                  <span>delivery-fast</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'diamond' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'diamond'\" (cbOnSuccess) = \"copy = 'diamond'\">\r\n                <div>\r\n                  <i class=\"ni ni-diamond\"></i>\r\n                  <span>diamond</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'email-83' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'email-83'\" (cbOnSuccess) = \"copy = 'email-83'\">\r\n                <div>\r\n                  <i class=\"ni ni-email-83\"></i>\r\n                  <span>email-83</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-add' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-add'\" (cbOnSuccess) = \"copy = 'fat-add'\">\r\n                <div>\r\n                  <i class=\"ni ni-fat-add\"></i>\r\n                  <span>fat-add</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-delete' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-delete'\" (cbOnSuccess) = \"copy = 'fat-delete'\">\r\n                <div>\r\n                  <i class=\"ni ni-fat-delete\"></i>\r\n                  <span>fat-delete</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-remove' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-remove'\" (cbOnSuccess) = \"copy = 'fat-remove'\">\r\n                <div>\r\n                  <i class=\"ni ni-fat-remove\"></i>\r\n                  <span>fat-remove</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'favourite-28' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'favourite-28'\" (cbOnSuccess) = \"copy = 'favourite-28'\">\r\n                <div>\r\n                  <i class=\"ni ni-favourite-28\"></i>\r\n                  <span>favourite-28</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'folder-17' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'folder-17'\" (cbOnSuccess) = \"copy = 'folder-17'\">\r\n                <div>\r\n                  <i class=\"ni ni-folder-17\"></i>\r\n                  <span>folder-17</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'glasses-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'glasses-2'\" (cbOnSuccess) = \"copy = 'glasses-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-glasses-2\"></i>\r\n                  <span>glasses-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'hat-3' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'hat-3'\" (cbOnSuccess) = \"copy = 'hat-3'\">\r\n                <div>\r\n                  <i class=\"ni ni-hat-3\"></i>\r\n                  <span>hat-3</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'headphones' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'headphones'\" (cbOnSuccess) = \"copy = 'headphones'\">\r\n                <div>\r\n                  <i class=\"ni ni-headphones\"></i>\r\n                  <span>headphones</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'html5' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'html5'\" (cbOnSuccess) = \"copy = 'html5'\">\r\n                <div>\r\n                  <i class=\"ni ni-html5\"></i>\r\n                  <span>html5</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'istanbul' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'istanbul'\" (cbOnSuccess) = \"copy = 'istanbul'\">\r\n                <div>\r\n                  <i class=\"ni ni-istanbul\"></i>\r\n                  <span>istanbul</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'circle-08' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'circle-08'\" (cbOnSuccess) = \"copy = 'circle-08'\">\r\n                <div>\r\n                  <i class=\"ni ni-circle-08\"></i>\r\n                  <span>circle-08</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'key-25' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'key-25'\" (cbOnSuccess) = \"copy = 'key-25'\">\r\n                <div>\r\n                  <i class=\"ni ni-key-25\"></i>\r\n                  <span>key-25</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'laptop' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'laptop'\" (cbOnSuccess) = \"copy = 'laptop'\">\r\n                <div>\r\n                  <i class=\"ni ni-laptop\"></i>\r\n                  <span>laptop</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'like-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'like-2'\" (cbOnSuccess) = \"copy = 'like-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-like-2\"></i>\r\n                  <span>like-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'lock-circle-open' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'lock-circle-open'\" (cbOnSuccess) = \"copy = 'lock-circle-open'\">\r\n                <div>\r\n                  <i class=\"ni ni-lock-circle-open\"></i>\r\n                  <span>lock-circle-open</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'map-big' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'map-big'\" (cbOnSuccess) = \"copy = 'map-big'\">\r\n                <div>\r\n                  <i class=\"ni ni-map-big\"></i>\r\n                  <span>map-big</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'mobile-button' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'mobile-button'\" (cbOnSuccess) = \"copy = 'mobile-button'\">\r\n                <div>\r\n                  <i class=\"ni ni-mobile-button\"></i>\r\n                  <span>mobile-button</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'money-coins' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'money-coins'\" (cbOnSuccess) = \"copy = 'money-coins'\">\r\n                <div>\r\n                  <i class=\"ni ni-money-coins\"></i>\r\n                  <span>money-coins</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'note-03' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'note-03'\" (cbOnSuccess) = \"copy = 'note-03'\">\r\n                <div>\r\n                  <i class=\"ni ni-note-03\"></i>\r\n                  <span>note-03</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'notification-70' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'notification-70'\" (cbOnSuccess) = \"copy = 'notification-70'\">\r\n                <div>\r\n                  <i class=\"ni ni-notification-70\"></i>\r\n                  <span>notification-70</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'palette' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'palette'\" (cbOnSuccess) = \"copy = 'palette'\">\r\n                <div>\r\n                  <i class=\"ni ni-palette\"></i>\r\n                  <span>palette</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'paper-diploma' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'paper-diploma'\" (cbOnSuccess) = \"copy = 'paper-diploma'\">\r\n                <div>\r\n                  <i class=\"ni ni-paper-diploma\"></i>\r\n                  <span>paper-diploma</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'pin-3' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'pin-3'\" (cbOnSuccess) = \"copy = 'pin-3'\">\r\n                <div>\r\n                  <i class=\"ni ni-pin-3\"></i>\r\n                  <span>pin-3</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'planet' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'planet'\" (cbOnSuccess) = \"copy = 'planet'\">\r\n                <div>\r\n                  <i class=\"ni ni-planet\"></i>\r\n                  <span>planet</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ruler-pencil' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ruler-pencil'\" (cbOnSuccess) = \"copy = 'ruler-pencil'\">\r\n                <div>\r\n                  <i class=\"ni ni-ruler-pencil\"></i>\r\n                  <span>ruler-pencil</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'satisfied' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'satisfied'\" (cbOnSuccess) = \"copy = 'satisfied'\">\r\n                <div>\r\n                  <i class=\"ni ni-satisfied\"></i>\r\n                  <span>satisfied</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'scissors' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'scissors'\" (cbOnSuccess) = \"copy = 'scissors'\">\r\n                <div>\r\n                  <i class=\"ni ni-scissors\"></i>\r\n                  <span>scissors</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'send' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'send'\" (cbOnSuccess) = \"copy = 'send'\">\r\n                <div>\r\n                  <i class=\"ni ni-send\"></i>\r\n                  <span>send</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'settings-gear-65' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'settings-gear-65'\" (cbOnSuccess) = \"copy = 'settings-gear-65'\">\r\n                <div>\r\n                  <i class=\"ni ni-settings-gear-65\"></i>\r\n                  <span>settings-gear-65</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'settings' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'settings'\" (cbOnSuccess) = \"copy = 'settings'\">\r\n                <div>\r\n                  <i class=\"ni ni-settings\"></i>\r\n                  <span>settings</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'single-02' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'single-02'\" (cbOnSuccess) = \"copy = 'single-02'\">\r\n                <div>\r\n                  <i class=\"ni ni-single-02\"></i>\r\n                  <span>single-02</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'single-copy-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'single-copy-04'\" (cbOnSuccess) = \"copy = 'single-copy-04'\">\r\n                <div>\r\n                  <i class=\"ni ni-single-copy-04\"></i>\r\n                  <span>single-copy-04</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'sound-wave' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'sound-wave'\" (cbOnSuccess) = \"copy = 'sound-wave'\">\r\n                <div>\r\n                  <i class=\"ni ni-sound-wave\"></i>\r\n                  <span>sound-wave</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'spaceship' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'spaceship'\" (cbOnSuccess) = \"copy = 'spaceship'\">\r\n                <div>\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                  <span>spaceship</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'square-pin' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'square-pin'\" (cbOnSuccess) = \"copy = 'square-pin'\">\r\n                <div>\r\n                  <i class=\"ni ni-square-pin\"></i>\r\n                  <span>square-pin</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'support-16' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'support-16'\" (cbOnSuccess) = \"copy = 'support-16'\">\r\n                <div>\r\n                  <i class=\"ni ni-support-16\"></i>\r\n                  <span>support-16</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tablet-button' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tablet-button'\" (cbOnSuccess) = \"copy = 'tablet-button'\">\r\n                <div>\r\n                  <i class=\"ni ni-tablet-button\"></i>\r\n                  <span>tablet-button</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tag' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tag'\" (cbOnSuccess) = \"copy = 'tag'\">\r\n                <div>\r\n                  <i class=\"ni ni-tag\"></i>\r\n                  <span>tag</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tie-bow' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tie-bow'\" (cbOnSuccess) = \"copy = 'tie-bow'\">\r\n                <div>\r\n                  <i class=\"ni ni-tie-bow\"></i>\r\n                  <span>tie-bow</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'time-alarm' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'time-alarm'\" (cbOnSuccess) = \"copy = 'time-alarm'\">\r\n                <div>\r\n                  <i class=\"ni ni-time-alarm\"></i>\r\n                  <span>time-alarm</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'trophy' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'trophy'\" (cbOnSuccess) = \"copy = 'trophy'\">\r\n                <div>\r\n                  <i class=\"ni ni-trophy\"></i>\r\n                  <span>trophy</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tv-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tv-2'\" (cbOnSuccess) = \"copy = 'tv-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-tv-2\"></i>\r\n                  <span>tv-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'umbrella-13' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'umbrella-13'\" (cbOnSuccess) = \"copy = 'umbrella-13'\">\r\n                <div>\r\n                  <i class=\"ni ni-umbrella-13\"></i>\r\n                  <span>umbrella-13</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'user-run' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'user-run'\" (cbOnSuccess) = \"copy = 'user-run'\">\r\n                <div>\r\n                  <i class=\"ni ni-user-run\"></i>\r\n                  <span>user-run</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'vector' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'vector'\" (cbOnSuccess) = \"copy = 'vector'\">\r\n                <div>\r\n                  <i class=\"ni ni-vector\"></i>\r\n                  <span>vector</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'watch-time' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'watch-time'\" (cbOnSuccess) = \"copy = 'watch-time'\">\r\n                <div>\r\n                  <i class=\"ni ni-watch-time\"></i>\r\n                  <span>watch-time</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'world' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'world'\" (cbOnSuccess) = \"copy = 'world'\">\r\n                <div>\r\n                  <i class=\"ni ni-world\"></i>\r\n                  <span>world</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'zoom-split-in' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'zoom-split-in'\" (cbOnSuccess) = \"copy = 'zoom-split-in'\">\r\n                <div>\r\n                  <i class=\"ni ni-zoom-split-in\"></i>\r\n                  <span>zoom-split-in</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'collection' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'collection'\" (cbOnSuccess) = \"copy = 'collection'\">\r\n                <div>\r\n                  <i class=\"ni ni-collection\"></i>\r\n                  <span>collection</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'image' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'image'\" (cbOnSuccess) = \"copy = 'image'\">\r\n                <div>\r\n                  <i class=\"ni ni-image\"></i>\r\n                  <span>image</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'shop' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'shop'\" (cbOnSuccess) = \"copy = 'shop'\">\r\n                <div>\r\n                  <i class=\"ni ni-shop\"></i>\r\n                  <span>shop</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ungroup' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ungroup'\" (cbOnSuccess) = \"copy = 'ungroup'\">\r\n                <div>\r\n                  <i class=\"ni ni-ungroup\"></i>\r\n                  <span>ungroup</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'world-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'world-2'\" (cbOnSuccess) = \"copy = 'world-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-world-2\"></i>\r\n                  <span>world-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ui-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ui-04'\" (cbOnSuccess) = \"copy = 'ui-04'\">\r\n                <div>\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                  <span>ui-04</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow border-0\">\r\n        <div id=\"map-canvas\" class=\"map-canvas\" data-lat=\"40.748817\" data-lng=\"-73.985428\" style=\"height: 600px;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Applications Users</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n            <tr>\r\n              <th scope=\"col\">Id</th>\r\n              <th scope=\"col\">Username</th>\r\n              <th scope=\"col\">First Name</th>\r\n              <th scope=\"col\">Last Name</th>\r\n              <th scope=\"col\">Email</th>\r\n              <th scope=\"col\">Status</th>\r\n              <th scope=\"col\"></th>\r\n            </tr>\r\n            </thead>\r\n            <tbody >\r\n            <tr >\r\n              <td>\r\n                ffd\r\n              </td>\r\n              <td>\r\n                qdsd\r\n              </td>\r\n              <td>\r\n                qsdqsd\r\n              </td>\r\n              <td>\r\n                qsdqsd\r\n              </td>\r\n              <td>\r\n                qsdsd\r\n              </td>\r\n              <td>\r\n                <span  class=\"badge badge-dot\">\r\n                  <i class=\"bg-success\"></i> active\r\n                </span>\r\n\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <div ngbDropdown placement=\"bottom-right\">\r\n                  <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                    <i class=\"fas fa-ellipsis-v\"></i>\r\n                  </a>\r\n                  <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                  </div>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"card-footer py-4\">\r\n          <nav aria-label=\"...\">\r\n            <ul class=\"pagination justify-content-end mb-0\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\r\n                  <i class=\"fas fa-angle-left\"></i>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item active\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\r\n              </li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">\r\n                  <i class=\"fas fa-angle-right\"></i>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Card tables</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\">Project</th>\r\n                <th scope=\"col\">Budget</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Users</th>\r\n                <th scope=\"col\">Completion</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n<!--              <tr>-->\r\n<!--                <th scope=\"row\">-->\r\n<!--                  <div class=\"media align-items-center\">-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">-->\r\n<!--                    </a>-->\r\n<!--                    <div class=\"media-body\">-->\r\n<!--                      <span class=\"mb-0 text-sm\">Argon Design System</span>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </th>-->\r\n<!--                <td>-->\r\n<!--                  $2,500 USD-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <span class=\"badge badge-dot mr-4\">-->\r\n<!--                    <i class=\"bg-warning\"></i> pending-->\r\n<!--                  </span>-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <div class=\"avatar-group\">-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <div class=\"d-flex align-items-center\">-->\r\n<!--                    <span class=\"mr-2\">60%</span>-->\r\n<!--                    <div>-->\r\n<!--                      <div class=\"progress\">-->\r\n<!--                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>-->\r\n<!--                      </div>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--                <td class=\"text-right\">-->\r\n<!--                  <div ngbDropdown placement=\"bottom-right\">-->\r\n<!--                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>-->\r\n<!--                      <i class=\"fas fa-ellipsis-v\"></i>-->\r\n<!--                    </a>-->\r\n<!--                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--              </tr>-->\r\n<!--              <tr>-->\r\n<!--                <th scope=\"row\">-->\r\n<!--                  <div class=\"media align-items-center\">-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/angular.jpg\">-->\r\n<!--                    </a>-->\r\n<!--                    <div class=\"media-body\">-->\r\n<!--                      <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </th>-->\r\n<!--                <td>-->\r\n<!--                  $1,800 USD-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <span class=\"badge badge-dot\">-->\r\n<!--                    <i class=\"bg-success\"></i> completed-->\r\n<!--                  </span>-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <div class=\"avatar-group\">-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <div class=\"d-flex align-items-center\">-->\r\n<!--                    <span class=\"mr-2\">100%</span>-->\r\n<!--                    <div>-->\r\n<!--                      <div class=\"progress\">-->\r\n<!--                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>-->\r\n<!--                      </div>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--                <td class=\"text-right\">-->\r\n<!--                  <div ngbDropdown  placement=\"bottom-right\">-->\r\n<!--                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>-->\r\n<!--                      <i class=\"fas fa-ellipsis-v\"></i>-->\r\n<!--                    </a>-->\r\n<!--                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--              </tr>-->\r\n<!--              <tr>-->\r\n<!--                <th scope=\"row\">-->\r\n<!--                  <div class=\"media align-items-center\">-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/sketch.jpg\">-->\r\n<!--                    </a>-->\r\n<!--                    <div class=\"media-body\">-->\r\n<!--                      <span class=\"mb-0 text-sm\">Black Dashboard</span>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </th>-->\r\n<!--                <td>-->\r\n<!--                  $3,150 USD-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <span class=\"badge badge-dot mr-4\">-->\r\n<!--                    <i class=\"bg-danger\"></i> delayed-->\r\n<!--                  </span>-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <div class=\"avatar-group\">-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">-->\r\n<!--                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">-->\r\n<!--                    </a>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--                <td>-->\r\n<!--                  <div class=\"d-flex align-items-center\">-->\r\n<!--                    <span class=\"mr-2\">72%</span>-->\r\n<!--                    <div>-->\r\n<!--                      <div class=\"progress\">-->\r\n<!--                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>-->\r\n<!--                      </div>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--                <td class=\"text-right\">-->\r\n<!--                  <div ngbDropdown  placement=\"top-right\">-->\r\n<!--                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>-->\r\n<!--                      <i class=\"fas fa-ellipsis-v\"></i>-->\r\n<!--                    </a>-->\r\n<!--                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>-->\r\n<!--                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>-->\r\n<!--                    </div>-->\r\n<!--                  </div>-->\r\n<!--                </td>-->\r\n<!--              </tr>-->\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/react.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">React Material Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $4,400 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-info\"></i> on schedule\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">90%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown   placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/vue.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,200 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown   placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"card-footer py-4\">\r\n          <nav aria-label=\"...\">\r\n            <ul class=\"pagination justify-content-end mb-0\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\r\n                  <i class=\"fas fa-angle-left\"></i>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item active\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\r\n              </li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">\r\n                  <i class=\"fas fa-angle-right\"></i>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Dark table -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col\">\r\n      <div class=\"card bg-default shadow\">\r\n        <div class=\"card-header bg-transparent border-0\">\r\n          <h3 class=\"text-white mb-0\">Card tables</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-dark table-flush\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <th scope=\"col\">Project</th>\r\n                <th scope=\"col\">Budget</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Users</th>\r\n                <th scope=\"col\">Completion</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Argon Design System</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,500 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-warning\"></i> pending\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">60%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"bottom-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/angular.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $1,800 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"bottom-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/sketch.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Black Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $3,150 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-danger\"></i> delayed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">72%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/react.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">React Material Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $4,400 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-info\"></i> on schedule\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">90%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/vue.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,200 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-profile/update-profile.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-profile/update-profile.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-size: cover; background-position: center top;\">\r\n  <!-- Mask -->\r\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\r\n  <!-- Header container -->\r\n  <div class=\"container-fluid d-flex align-items-center\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-7 col-md-10\">\r\n        <h1 class=\"display-2 text-white\">Hello {{this.currentUser.username}}</h1>\r\n        <p class=\"text-white mt-0 mb-5\">Here you can update all your personal information and edit your profile image</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-8 ant-col-lg-offset-4 order-xl-1\">\r\n      <div class=\"card bg-secondary shadow\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-3\">\r\n            <div class=\"card-profile-image\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img [src]=this.image class=\"rounded-circle\">\r\n              </a>\r\n            </div>\r\n            <div class=\"card-img-overlay ant-col-md-offset-13 ant-col-sm-offset-13 ant-col-xs-offset-13 ant-col-lg-offset-15\" style=\"margin-top: 80px; border-radius: 50px\">\r\n              <button class=\"btn btn-info btn-sm\" (click)=\"clickedTrue()\"><i class=\"fa fa-pen\"></i></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <form role=\"form\"  [formGroup]=\"profileToCreate\" >\r\n          <div class=\"card-header bg-white border-0\">\r\n            <div class=\"row align-items-center\">\r\n              <div class=\"col-8\">\r\n                <h3 class=\"mb-0\">My account</h3>\r\n              </div>\r\n              <div class=\"col-4 text-right\">\r\n                <button (click)=\"submit()\" type=\"submit\" class=\"btn btn-sm btn-primary\">submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div *ngIf=\"imageEditClicked\" class=\"form-group\">\r\n              <label class=\"form-control-label\" for=\"input-image\">Choose an image</label>\r\n              <input type=\"file\" id=\"input-image\" class=\"form-control\" name=\"myFile\" (change)=\"fileEvent($event)\">\r\n            </div>\r\n            <h6 class=\"heading-small text-muted mb-4\">User information</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-username\">Username</label>\r\n                    <input type=\"text\" id=\"input-username\" class=\"form-control form-control-alternative\" formControlName=\"username\" placeholder=\"{{this.currentUser?.username}}\" value=\"{{this.currentUser.username}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-email\">Email address</label>\r\n                    <input formControlName=\"email\" type=\"email\" id=\"input-email\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentUser?.email}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-first-name\">First name</label>\r\n                    <input formControlName=\"firstName\" type=\"text\" id=\"input-first-name\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentUser?.first_name}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-last-name\">Last name</label>\r\n                    <input formControlName=\"lastName\" type=\"text\" id=\"input-last-name\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentUser?.last_name}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <label class=\"form-control-label\" for=\"input-first-name\">Gender</label>\r\n                  <select formControlName=\"gender\" class=\"form-control form-control-alternative\" id=\"input-gender\" name=\"input-gender\" data-selected-text-format=\"count\" title=\"Gender\" >\r\n                    <option class=\"\" *ngFor=\"let item of gender|enumToArray\">{{item.name}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-number\">Phone Number</label>\r\n                    <input formControlName=\"number\" id=\"input-number\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentProfile?.phone_number}}\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 ant-col-lg-offset-7\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-birth-date\">Birthday</label>\r\n                    <br>\r\n                    <nz-date-picker formControlName=\"birthday\" id=\"input-birth-date\" nzSize=\"large\"></nz-date-picker>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-4\" />\r\n            <!-- Address -->\r\n            <h6 class=\"heading-small text-muted mb-4\">Address</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-address\">Street</label>\r\n                    <input formControlName=\"street\" id=\"input-address\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentAddress?.street}}\" type=\"text\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-address2\">Street 2 (optional)</label>\r\n                    <input formControlName=\"street2\" id=\"input-address2\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentAddress?.street2}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-city\">City</label>\r\n                    <input formControlName=\"city\" type=\"text\" id=\"input-city\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentAddress?.city}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-country\">Country</label>\r\n                    <input formControlName=\"country\" type=\"text\" id=\"input-country\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentCountry?.name}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-4\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"input-postal-code\">Postal code</label>\r\n                    <input formControlName=\"postalCode\" type=\"number\" id=\"input-postal-code\" class=\"form-control form-control-alternative\" placeholder=\"{{this.currentAddress?.postal_code}}\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\" style=\"min-height: 600px; background-size: cover; background-position: center top;\">\r\n  <!-- Mask -->\r\n  <span class=\"mask bg-gradient-danger opacity-8\"></span>\r\n  <!-- Header container -->\r\n  <div class=\"container-fluid d-flex align-items-center\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-10\">\r\n        <h1 class=\"display-2 text-white\">Hello {{this.currentUser.username}}</h1>\r\n        <p class=\"text-white mt-0 mb-5\">This is your profile page. You can edit your profile or check your current coins amount </p>\r\n        <a [routerLink]=\"['/template/update-profile']\" class=\"btn btn-info\">Edit profile</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-7 order-xl-2 mb-5 mb-xl-0 ant-col-lg-offset-5\">\r\n      <div class=\"card card-profile shadow\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-3 order-lg-2\">\r\n            <div class=\"card-profile-image\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img [src]=this.image class=\"rounded-circle\">\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\r\n          <div class=\"d-flex justify-content-between\">\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body pt-0 pt-md-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div class=\"card-profile-stats d-flex justify-content-center mt-md-5\">\r\n                <div>\r\n                  <span class=\"heading\">22</span>\r\n                  <span class=\"description\">Friends</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">10</span>\r\n                  <span class=\"description\">Photos</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">89</span>\r\n                  <span class=\"description\">Comments</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h3>\r\n              {{this.currentUser.username}}<span class=\"font-weight-light\"></span>\r\n            </h3>\r\n            <div class=\"h5 font-weight-300\">\r\n              <i class=\"ni location_pin mr-2\"></i> {{this.currentUser.address}}\r\n            </div>\r\n            <div class=\"h5 mt-4\">\r\n              <i class=\"ni ni-email-83 mr-2\"></i> {{this.currentUser.email}}\r\n            <div>\r\n              <i class=\"ni education_hat mr-2\"></i>University of Computer Science\r\n            </div>\r\n            <a href=\"javascript:void(0)\">Show more</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/_models/address.ts":
/*!************************************!*\
  !*** ./src/app/_models/address.ts ***!
  \************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Address {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get street() {
        return this._street;
    }
    set street(value) {
        this._street = value;
    }
    get street2() {
        return this._street2;
    }
    set street2(value) {
        this._street2 = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get country() {
        return this._country;
    }
    set country(value) {
        this._country = value;
    }
    get postal_code() {
        return this._postal_code;
    }
    set postal_code(value) {
        this._postal_code = value;
    }
}


/***/ }),

/***/ "./src/app/_models/country.ts":
/*!************************************!*\
  !*** ./src/app/_models/country.ts ***!
  \************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Country {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}


/***/ }),

/***/ "./src/app/_models/enum/Gender.ts":
/*!****************************************!*\
  !*** ./src/app/_models/enum/Gender.ts ***!
  \****************************************/
/*! exports provided: Gender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gender", function() { return Gender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));


/***/ }),

/***/ "./src/app/_models/profile.ts":
/*!************************************!*\
  !*** ./src/app/_models/profile.ts ***!
  \************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Profile {
    constructor() {
        this._badge = null;
        this._address = null;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get phone_number() {
        return this._phone_number;
    }
    set phone_number(value) {
        this._phone_number = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    get birth_date() {
        return this._birth_date;
    }
    set birth_date(value) {
        this._birth_date = value;
    }
    get image_url() {
        return this._image_url;
    }
    set image_url(value) {
        this._image_url = value;
    }
    get status() {
        return this._status;
    }
    set status(value) {
        this._status = value;
    }
    get badge() {
        return this._badge;
    }
    set badge(value) {
        this._badge = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
}


/***/ }),

/***/ "./src/app/layouts/template-layout/template-layout.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layouts/template-layout/template-layout.module.ts ***!
  \*******************************************************************/
/*! exports provided: TemplateLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateLayoutModule", function() { return TemplateLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _template_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-layout.routing */ "./src/app/layouts/template-layout/template-layout.routing.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/update-profile/update-profile.component */ "./src/app/pages/update-profile/update-profile.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/snack-bar.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");

















let TemplateLayoutModule = class TemplateLayoutModule {
};
TemplateLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
            _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_6__["TablesComponent"],
            _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"],
            _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_8__["MapsComponent"],
            _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_13__["UpdateProfileComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_template_layout_routing__WEBPACK_IMPORTED_MODULE_4__["TemplateLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_14__["NgZorroAntdModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
        ]
    })
], TemplateLayoutModule);



/***/ }),

/***/ "./src/app/layouts/template-layout/template-layout.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/template-layout/template-layout.routing.ts ***!
  \********************************************************************/
/*! exports provided: TemplateLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateLayoutRoutes", function() { return TemplateLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/update-profile/update-profile.component */ "./src/app/pages/update-profile/update-profile.component.ts");






const TemplateLayoutRoutes = [
    { path: 'user-profile', component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'update-profile', component: _pages_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_5__["UpdateProfileComponent"] },
    { path: 'tables', component: _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_2__["TablesComponent"] },
    { path: 'icons', component: _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"] },
    { path: 'maps', component: _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_4__["MapsComponent"] }
];


/***/ }),

/***/ "./src/app/pages/icons/icons.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/icons/icons.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/icons/icons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IconsComponent = class IconsComponent {
    constructor() { }
    ngOnInit() {
    }
};
IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./icons.component.scss */ "./src/app/pages/icons/icons.component.scss")).default]
    })
], IconsComponent);



/***/ }),

/***/ "./src/app/pages/maps/maps.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/maps/maps.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvbWFwcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/maps/maps.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MapsComponent = class MapsComponent {
    constructor() { }
    ngOnInit() {
        let map = document.getElementById('map-canvas');
        let lat = map.getAttribute('data-lat');
        let lng = map.getAttribute('data-lng');
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] },
                { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] },
                { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] },
                { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
                { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                { "featureType": "water", "elementType": "all", "stylers": [{ "color": '#5e72e4' }, { "visibility": "on" }] }
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        });
        var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
            '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    }
};
MapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maps',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./maps.component.scss */ "./src/app/pages/maps/maps.component.scss")).default]
    })
], MapsComponent);



/***/ }),

/***/ "./src/app/pages/tables/tables.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tables/tables.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tables/tables.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tables/tables.component.ts ***!
  \**************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TablesComponent = class TablesComponent {
    constructor() { }
    ngOnInit() {
    }
};
TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tables',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tables.component.scss */ "./src/app/pages/tables/tables.component.scss")).default]
    })
], TablesComponent);



/***/ }),

/***/ "./src/app/pages/update-profile/update-profile.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/update-profile/update-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/image.service */ "./src/app/_services/image.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_models/user */ "./src/app/_models/user.ts");
/* harmony import */ var _globals_global_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_globals/global-variables */ "./src/app/_globals/global-variables.ts");
/* harmony import */ var _models_enum_Gender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_models/enum/Gender */ "./src/app/_models/enum/Gender.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _models_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_models/profile */ "./src/app/_models/profile.ts");
/* harmony import */ var _models_address__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_models/address */ "./src/app/_models/address.ts");
/* harmony import */ var _models_country__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_models/country */ "./src/app/_models/country.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_services/crud.service */ "./src/app/_services/crud.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");














let UpdateProfileComponent = class UpdateProfileComponent {
    constructor(formBuilder, imageService, authenticationService, crudService, router) {
        this.formBuilder = formBuilder;
        this.imageService = imageService;
        this.authenticationService = authenticationService;
        this.crudService = crudService;
        this.router = router;
        this.dateFormat = 'yyyy/MM/dd';
        this.gender = _models_enum_Gender__WEBPACK_IMPORTED_MODULE_7__["Gender"];
        this.imageEditClicked = false;
        this.currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.currentProfile = new _models_profile__WEBPACK_IMPORTED_MODULE_9__["Profile"]();
        this.currentAddress = new _models_address__WEBPACK_IMPORTED_MODULE_10__["Address"]();
        this.currentCountry = new _models_country__WEBPACK_IMPORTED_MODULE_11__["Country"]();
        this.image = null;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
    }
    ngOnInit() {
        // fetch profile from back
        this.crudService.getOne(_globals_global_variables__WEBPACK_IMPORTED_MODULE_6__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_6__["USERS_PROFILE"], this.authenticationService.getCurrentUser().id).subscribe((res) => {
            this.currentUser = JSON.parse(res.user);
            this.currentProfile = this.currentUser.profile;
            if (this.currentProfile) {
                this.currentAddress = this.currentProfile.address;
                if (this.currentAddress) {
                    this.currentCountry = this.currentAddress.country;
                    console.log(this.currentUser.username);
                }
            }
            this.initializeForm();
        });
        this.profileToCreate = this.formBuilder.group({
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            gender: '',
            number: '',
            birthday: '',
            street: '',
            street2: '',
            city: '',
            country: '',
            postalCode: '',
        });
        // fetch current user image
        this.imageService.getImage().subscribe((data) => {
            this.image = _globals_global_variables__WEBPACK_IMPORTED_MODULE_6__["IMG_URL"] + data; // 'https://clubisti.net/assets/img/'+ data | environment.apiUrl+'/assets/img/'+
        }, error => {
            console.log(error);
            this.image = 'assets/img/theme/team-4-800x800.jpg';
        });
    }
    initializeForm() {
        this.profileToCreate.controls['username'].setValue(this.currentUser.username);
        console.log('init' + this.profileToCreate.value.username);
        this.profileToCreate.controls['email'].setValue(this.currentUser.email);
        this.profileToCreate.controls['firstName'].setValue(this.currentUser.first_name);
        this.profileToCreate.controls['lastName'].setValue(this.currentUser.last_name);
        if (this.currentProfile) {
            this.profileToCreate.controls['gender'].setValue(this.currentProfile.gender);
            this.profileToCreate.controls['number'].setValue(this.currentProfile.phone_number);
            if (this.currentAddress) {
                this.profileToCreate.controls['street'].setValue(this.currentAddress.street);
                this.profileToCreate.controls['street2'].setValue(this.currentAddress.street2);
                this.profileToCreate.controls['city'].setValue(this.currentAddress.city);
                this.profileToCreate.controls['postalCode'].setValue(this.currentAddress.postal_code);
                if (this.currentCountry) {
                    this.profileToCreate.controls['country'].setValue(this.currentCountry.name);
                }
            }
        }
    }
    clickedTrue() {
        this.imageEditClicked = true;
    }
    fileEvent(e) {
        this.fileData = e.target.files[0];
        console.log(this.fileData);
    }
    submit() {
        console.log('submitted');
        if (this.profileToCreate.value.birthday) {
            this.profileToCreate.value.birthday = this.pipe.transform(this.profileToCreate.value.birthday, ' yyyy-M-d hh:mm:ss');
        }
        const jsonUser = {
            user: {
                username: this.profileToCreate.value.username,
                email: this.profileToCreate.value.email,
                first_name: this.profileToCreate.value.firstName,
                last_name: this.profileToCreate.value.lastName,
                profile: {
                    gender: this.profileToCreate.value.gender,
                    phone_number: this.profileToCreate.value.number,
                    birth_date: this.profileToCreate.value.birthday,
                    address: {
                        street: this.profileToCreate.value.street,
                        street2: this.profileToCreate.value.street2,
                        postal_code: this.profileToCreate.value.postalCode,
                        city: this.profileToCreate.value.city,
                        country: {
                            name: this.profileToCreate.value.country
                        }
                    }
                }
            }
        };
        // call for update
        this.crudService.update(_globals_global_variables__WEBPACK_IMPORTED_MODULE_6__["API_URL"] + _globals_global_variables__WEBPACK_IMPORTED_MODULE_6__["USERS_PROFILE"], this.authenticationService.getCurrentUser().id, jsonUser).subscribe((result) => {
            console.log(result.body.user);
            // update current user
            this.authenticationService.savingUser(result);
        });
        // post image
        if (this.fileData) {
            this.imageService.postImage(this.fileData).subscribe(data => {
                console.log(data);
            });
        }
        this.router.navigate(['/template/user-profile']);
    }
};
UpdateProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_12__["CrudService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"] }
];
UpdateProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-profile/update-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-profile.component.css */ "./src/app/pages/update-profile/update-profile.component.css")).default]
    })
], UpdateProfileComponent);



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _globals_global_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_globals/global-variables */ "./src/app/_globals/global-variables.ts");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/image.service */ "./src/app/_services/image.service.ts");





let UserProfileComponent = class UserProfileComponent {
    constructor(authenticationService, imageService) {
        this.authenticationService = authenticationService;
        this.imageService = imageService;
    }
    ngOnInit() {
        this.imageService.getImage().subscribe((data) => {
            this.image = _globals_global_variables__WEBPACK_IMPORTED_MODULE_3__["IMG_URL"] + data; // 'https://clubisti.net/assets/img/'+ data | environment.apiUrl+'/assets/img/'+
        }, error => {
            console.log(error);
            this.image = 'assets/img/theme/team-4-800x800.jpg';
        });
        this.currentUser = this.authenticationService.getCurrentUser();
        console.log(this.currentUser.username);
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] }
];
UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/pages/user-profile/user-profile.component.scss")).default]
    })
], UserProfileComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-template-layout-template-layout-module-es2015.js.map