(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delon-delon-module"],{

/***/ "./node_modules/@delon/cache/fesm5/cache.js":
/*!**************************************************!*\
  !*** ./node_modules/@delon/cache/fesm5/cache.js ***!
  \**************************************************/
/*! exports provided: CacheService, DelonCacheConfig, DelonCacheModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheService", function() { return CacheService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonCacheConfig", function() { return DelonCacheConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonCacheModule", function() { return DelonCacheModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DC_STORE_STORAGE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DC_STORE_STORAGE_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return LocalStorageCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/add_seconds */ "./node_modules/date-fns/add_seconds/index.js");
/* harmony import */ var date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DelonCacheConfig = /** @class */ (function () {
    function DelonCacheConfig() {
        /**
         * 缓存模式，默认：`promise`
         * - `promise` 约定模式，允许 `key` 作为 http 获取数据
         * - `none` 正常模式
         */
        this.mode = 'promise';
        /**
         * 重命名返回参数，例如：
         * - `null` 返回体为内容
         * - `list` 返回体应 `{ list: [] }`
         * - `result.list` 返回体应 `{ result: { list: [] } }`
         */
        this.reName = '';
        /**
         * 持久化数据键值前缀
         */
        this.prefix = '';
        /**
         * 持久化数据元数据存储键名
         */
        this.meta_key = '__cache_meta';
    }
    DelonCacheConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ DelonCacheConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({ factory: function DelonCacheConfig_Factory() { return new DelonCacheConfig(); }, token: DelonCacheConfig, providedIn: "root" });
    return DelonCacheConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var DC_STORE_STORAGE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["InjectionToken"]('DC_STORE_STORAGE_TOKEN', {
    providedIn: 'root',
    factory: DC_STORE_STORAGE_TOKEN_FACTORY,
});
/**
 * @return {?}
 */
function DC_STORE_STORAGE_TOKEN_FACTORY() {
    return new LocalStorageCacheService();
}
var LocalStorageCacheService = /** @class */ (function () {
    function LocalStorageCacheService() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageCacheService.prototype.get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return JSON.parse(localStorage.getItem(key) || 'null') || null;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    LocalStorageCacheService.prototype.set = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    LocalStorageCacheService.prototype.remove = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        localStorage.removeItem(key);
    };
    return LocalStorageCacheService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var CacheService = /** @class */ (function () {
    function CacheService(_, store, http) {
        this.store = store;
        this.http = http;
        this.memory = new Map();
        this.notifyBuffer = new Map();
        this.meta = new Set();
        this.freqTick = 3000;
        this.cog = {};
        Object.assign(this.cog, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, new DelonCacheConfig(), _));
        this.loadMeta();
        this.startExpireNotify();
    }
    /**
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    CacheService.prototype._deepGet = /**
     * @param {?} obj
     * @param {?} path
     * @param {?=} defaultValue
     * @return {?}
     */
    function (obj, path, defaultValue) {
        if (!obj)
            return defaultValue;
        if (path.length <= 1) {
            /** @type {?} */
            var checkObj = path.length ? obj[path[0]] : obj;
            return typeof checkObj === 'undefined' ? defaultValue : checkObj;
        }
        return path.reduce(function (o, k) { return o[k]; }, obj) || defaultValue;
    };
    // #region meta
    // #region meta
    /**
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.pushMeta = 
    // #region meta
    /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (this.meta.has(key))
            return;
        this.meta.add(key);
        this.saveMeta();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.removeMeta = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.meta.has(key))
            return;
        this.meta.delete(key);
        this.saveMeta();
    };
    /**
     * @return {?}
     */
    CacheService.prototype.loadMeta = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ret = this.store.get(this.cog.meta_key);
        if (ret && ret.v) {
            ((/** @type {?} */ (ret.v))).forEach(function (key) { return _this.meta.add(key); });
        }
    };
    /**
     * @return {?}
     */
    CacheService.prototype.saveMeta = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var metaData = [];
        this.meta.forEach(function (key) { return metaData.push(key); });
        this.store.set(this.cog.meta_key, { v: metaData, e: 0 });
    };
    /**
     * @return {?}
     */
    CacheService.prototype.getMeta = /**
     * @return {?}
     */
    function () {
        return this.meta;
    };
    /**
     * 缓存对象
     */
    /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    CacheService.prototype.set = /**
     * 缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (key, data, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // expire
        /** @type {?} */
        var e = 0;
        if (options.expire) {
            e = date_fns_add_seconds__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), options.expire).valueOf();
        }
        if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])) {
            this.save(options.type, key, { v: data, e: e });
            return;
        }
        return data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (v) {
            _this.save(options.type, key, { v: v, e: e });
        }));
    };
    /**
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    CacheService.prototype.save = /**
     * @param {?} type
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (type, key, value) {
        if (type === 'm') {
            this.memory.set(key, value);
        }
        else {
            this.store.set(this.cog.prefix + key, value);
            this.pushMeta(key);
        }
        this.runNotify(key, 'set');
    };
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    CacheService.prototype.get = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var isPromise = options.mode !== 'none' && this.cog.mode === 'promise';
        /** @type {?} */
        var value = this.memory.has(key) ? this.memory.get(key) : this.store.get(this.cog.prefix + key);
        if (!value || (value.e && value.e > 0 && value.e < new Date().valueOf())) {
            if (isPromise) {
                return this.http
                    .get(key)
                    .pipe(
                // tslint:disable-next-line:no-any
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (ret) { return _this._deepGet(ret, (/** @type {?} */ (_this.cog.reName)), null); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (v) { return _this.set(key, v, { type: options.type, expire: options.expire }); }));
            }
            return null;
        }
        return isPromise ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(value.v) : value.v;
    };
    /** 获取缓存数据，若 `key` 不存在或已过期则返回 null */
    /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.getNone = /**
     * 获取缓存数据，若 `key` 不存在或已过期则返回 null
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.get(key, { mode: 'none' });
    };
    /**
     * 获取缓存，若不存在则设置缓存对象
     */
    /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    CacheService.prototype.tryGet = /**
     * 获取缓存，若不存在则设置缓存对象
     * @param {?} key
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    function (key, data, options) {
        if (options === void 0) { options = {}; }
        /** @type {?} */
        var ret = this.getNone(key);
        if (ret === null) {
            if (!(data instanceof rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"])) {
                this.set(key, data, (/** @type {?} */ (options)));
                return data;
            }
            return this.set(key, (/** @type {?} */ (data)), (/** @type {?} */ (options)));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(ret);
    };
    // #endregion
    // #region has
    /** 是否缓存 `key` */
    // #endregion
    // #region has
    /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.has = 
    // #endregion
    // #region has
    /**
     * 是否缓存 `key`
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.memory.has(key) || this.meta.has(key);
    };
    // #endregion
    // #region remove
    // #endregion
    // #region remove
    /**
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    CacheService.prototype._remove = 
    // #endregion
    // #region remove
    /**
     * @param {?} key
     * @param {?} needNotify
     * @return {?}
     */
    function (key, needNotify) {
        if (needNotify)
            this.runNotify(key, 'remove');
        if (this.memory.has(key)) {
            this.memory.delete(key);
            return;
        }
        this.store.remove(this.cog.prefix + key);
        this.removeMeta(key);
    };
    /** 移除缓存 */
    /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.remove = /**
     * 移除缓存
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this._remove(key, true);
    };
    /** 清空所有缓存 */
    /**
     * 清空所有缓存
     * @return {?}
     */
    CacheService.prototype.clear = /**
     * 清空所有缓存
     * @return {?}
     */
    function () {
        var _this = this;
        this.notifyBuffer.forEach(function (v, k) { return _this.runNotify(k, 'remove'); });
        this.memory.clear();
        this.meta.forEach(function (key) { return _this.store.remove(_this.cog.prefix + key); });
    };
    Object.defineProperty(CacheService.prototype, "freq", {
        // #endregion
        // #region notify
        /**
         * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
         */
        set: 
        // #endregion
        // #region notify
        /**
         * 设置监听频率，单位：毫秒且最低 `20ms`，默认：`3000ms`
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.freqTick = Math.max(20, value);
            this.abortExpireNotify();
            this.startExpireNotify();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CacheService.prototype.startExpireNotify = /**
     * @return {?}
     */
    function () {
        this.checkExpireNotify();
        this.runExpireNotify();
    };
    /**
     * @return {?}
     */
    CacheService.prototype.runExpireNotify = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.freqTime = setTimeout(function () {
            _this.checkExpireNotify();
            _this.runExpireNotify();
        }, this.freqTick);
    };
    /**
     * @return {?}
     */
    CacheService.prototype.checkExpireNotify = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var removed = [];
        this.notifyBuffer.forEach(function (v, key) {
            if (_this.has(key) && _this.getNone(key) === null)
                removed.push(key);
        });
        removed.forEach(function (key) {
            _this.runNotify(key, 'expire');
            _this._remove(key, false);
        });
    };
    /**
     * @return {?}
     */
    CacheService.prototype.abortExpireNotify = /**
     * @return {?}
     */
    function () {
        clearTimeout(this.freqTime);
    };
    /**
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    CacheService.prototype.runNotify = /**
     * @param {?} key
     * @param {?} type
     * @return {?}
     */
    function (key, type) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).next({ type: type, value: this.getNone(key) });
    };
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     */
    /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.notify = /**
     * `key` 监听，当 `key` 变更、过期、移除时通知，注意以下若干细节：
     *
     * - 调用后除再次调用 `cancelNotify` 否则永远不过期
     * - 监听器每 `freq` (默认：3秒) 执行一次过期检查
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.notifyBuffer.has(key)) {
            /** @type {?} */
            var change$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getNone(key));
            this.notifyBuffer.set(key, change$);
        }
        return this.notifyBuffer.get(key).asObservable();
    };
    /**
     * 取消 `key` 监听
     */
    /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.cancelNotify = /**
     * 取消 `key` 监听
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.notifyBuffer.has(key))
            return;
        this.notifyBuffer.get(key).unsubscribe();
        this.notifyBuffer.delete(key);
    };
    /** `key` 是否已经监听 */
    /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    CacheService.prototype.hasNotify = /**
     * `key` 是否已经监听
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.notifyBuffer.has(key);
    };
    /** 清空所有 `key` 的监听 */
    /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    CacheService.prototype.clearNotify = /**
     * 清空所有 `key` 的监听
     * @return {?}
     */
    function () {
        this.notifyBuffer.forEach(function (v) { return v.unsubscribe(); });
        this.notifyBuffer.clear();
    };
    // #endregion
    // #endregion
    /**
     * @return {?}
     */
    CacheService.prototype.ngOnDestroy = 
    // #endregion
    /**
     * @return {?}
     */
    function () {
        this.memory.clear();
        this.abortExpireNotify();
        this.clearNotify();
    };
    CacheService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"], args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    CacheService.ctorParameters = function () { return [
        { type: DelonCacheConfig },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"], args: [DC_STORE_STORAGE_TOKEN,] }] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    /** @nocollapse */ CacheService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["defineInjectable"])({ factory: function CacheService_Factory() { return new CacheService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(DelonCacheConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(DC_STORE_STORAGE_TOKEN), Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: CacheService, providedIn: "root" });
    return CacheService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var DelonCacheModule = /** @class */ (function () {
    function DelonCacheModule() {
    }
    DelonCacheModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{},] }
    ];
    return DelonCacheModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=cache.js.map

/***/ }),

/***/ "./src/app/routes/delon/acl/acl.component.html":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/acl/acl.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    ACL 访问控制\r\n    <small>注意观察左边的菜单；ACLService提供一个完整的基于角色的访问控制的服务，若需要支持路由守卫，请配合ACLService与Route Guard配合简便实现。</small>\r\n  </h1>\r\n</div>\r\n<div nz-row [nzGutter]=\"8\">\r\n  <div nz-col [nzSpan]=\"24\">\r\n    <nz-card nzTitle=\"按钮粒度\">\r\n      ACL原始数据：{{ aclSrv.data | json }}\r\n      <button nz-button [acl]=\"'role-a'\">role-a</button>\r\n      <button nz-button [acl]=\"'role-b'\" class=\"ml-sm\">role-b</button>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n<div nz-row [nzGutter]=\"8\">\r\n  <div nz-col [nzSpan]=\"8\">\r\n    <nz-card nzTitle=\"全量\">\r\n      <button nz-button (click)=\"toggleFull()\">\r\n        <span>{{ full ? '离开' : '设置'}}权限</span>\r\n      </button>\r\n      <p class=\"pt-md\">全量类指系统管理员角色，无任何受限。</p>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzSpan]=\"8\">\r\n    <nz-card nzTitle=\"角色[role-a]\">\r\n      <button nz-button (click)=\"toggleRoleA()\">\r\n        <span>{{ roleA.length > 0 ? '离开' : '设置'}}权限</span>\r\n      </button>\r\n    </nz-card>\r\n  </div>\r\n  <div nz-col [nzSpan]=\"8\">\r\n    <nz-card nzTitle=\"角色[role-b]\">\r\n      <button nz-button (click)=\"toggleRoleB()\">\r\n        <span>{{ roleB.length > 0 ? '离开' : '设置'}}权限</span>\r\n      </button>\r\n    </nz-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/acl/acl.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/acl/acl.component.ts ***!
  \***************************************************/
/*! exports provided: ACLComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACLComponent", function() { return ACLComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");




var ACLComponent = /** @class */ (function () {
    function ACLComponent(aclSrv, menuSrv) {
        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.full = true;
        this.roleA = '';
        this.roleB = '';
    }
    ACLComponent.prototype.reMenu = function () {
        this.menuSrv.resume();
    };
    ACLComponent.prototype.toggleFull = function () {
        this.full = !this.full;
        this.aclSrv.setFull(this.full);
        this.reMenu();
    };
    ACLComponent.prototype.toggleRoleA = function () {
        this.full = false;
        this.roleA = this.roleA === 'role-a' ? '' : 'role-a';
        this.aclSrv.setFull(this.full);
        this.aclSrv.setRole([this.roleA]);
        this.reMenu();
    };
    ACLComponent.prototype.toggleRoleB = function () {
        this.full = false;
        this.roleB = this.roleB === 'role-b' ? '' : 'role-b';
        this.aclSrv.setFull(this.full);
        this.aclSrv.setRole([this.roleB]);
        this.reMenu();
    };
    ACLComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acl',
            template: __webpack_require__(/*! ./acl.component.html */ "./src/app/routes/delon/acl/acl.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_acl__WEBPACK_IMPORTED_MODULE_2__["ACLService"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], ACLComponent);
    return ACLComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/cache/cache.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/delon/cache/cache.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Cache 缓存,\r\n    <a href=\"https://ng-alain.com/components/cache\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card nzTitle=\"Service\">\r\n  <button nz-button (click)=\"set()\">设置</button>\r\n  <button nz-button (click)=\"get()\" class=\"ml-sm\">获取</button>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/cache/cache.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/cache/cache.component.ts ***!
  \*******************************************************/
/*! exports provided: CacheComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CacheComponent", function() { return CacheComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/cache */ "./node_modules/@delon/cache/fesm5/cache.js");




var CacheComponent = /** @class */ (function () {
    function CacheComponent(cache, msg) {
        this.cache = cache;
        this.msg = msg;
        this.KEY = 'user';
    }
    CacheComponent.prototype.ngOnInit = function () { };
    CacheComponent.prototype.set = function () {
        this.cache.set(this.KEY, +new Date());
    };
    CacheComponent.prototype.get = function () {
        this.msg.success(this.cache.getNone(this.KEY));
    };
    CacheComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cache',
            template: __webpack_require__(/*! ./cache.component.html */ "./src/app/routes/delon/cache/cache.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_cache__WEBPACK_IMPORTED_MODULE_3__["CacheService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], CacheComponent);
    return CacheComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/delon-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/delon/delon-routing.module.ts ***!
  \******************************************************/
/*! exports provided: DelonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonRoutingModule", function() { return DelonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");
/* harmony import */ var _simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./simple-table/simple-table.component */ "./src/app/routes/delon/simple-table/simple-table.component.ts");
/* harmony import */ var _util_util_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/util.component */ "./src/app/routes/delon/util/util.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print/print.component */ "./src/app/routes/delon/print/print.component.ts");
/* harmony import */ var _acl_acl_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./acl/acl.component */ "./src/app/routes/delon/acl/acl.component.ts");
/* harmony import */ var _guard_guard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard/guard.component */ "./src/app/routes/delon/guard/guard.component.ts");
/* harmony import */ var _guard_leave_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/leave.component */ "./src/app/routes/delon/guard/leave.component.ts");
/* harmony import */ var _guard_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/auth.component */ "./src/app/routes/delon/guard/auth.component.ts");
/* harmony import */ var _guard_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/admin.component */ "./src/app/routes/delon/guard/admin.component.ts");
/* harmony import */ var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/can-leave.provide */ "./src/app/routes/delon/guard/can-leave.provide.ts");
/* harmony import */ var _cache_cache_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cache/cache.component */ "./src/app/routes/delon/cache/cache.component.ts");
/* harmony import */ var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./downfile/downfile.component */ "./src/app/routes/delon/downfile/downfile.component.ts");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "./src/app/routes/delon/xlsx/xlsx.component.ts");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zip/zip.component */ "./src/app/routes/delon/zip/zip.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./form/form.component */ "./src/app/routes/delon/form/form.component.ts");
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./qr/qr.component */ "./src/app/routes/delon/qr/qr.component.ts");



















var routes = [
    { path: 'simple-table', component: _simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_4__["SimpleTableComponent"] },
    { path: 'util', component: _util_util_component__WEBPACK_IMPORTED_MODULE_5__["UtilComponent"] },
    { path: 'print', component: _print_print_component__WEBPACK_IMPORTED_MODULE_6__["PrintComponent"] },
    { path: 'acl', component: _acl_acl_component__WEBPACK_IMPORTED_MODULE_7__["ACLComponent"] },
    {
        path: 'guard',
        component: _guard_guard_component__WEBPACK_IMPORTED_MODULE_8__["GuardComponent"],
        children: [
            {
                path: 'leave',
                component: _guard_leave_component__WEBPACK_IMPORTED_MODULE_9__["GuardLeaveComponent"],
                canDeactivate: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_12__["CanLeaveProvide"]],
            },
            {
                path: 'auth',
                component: _guard_auth_component__WEBPACK_IMPORTED_MODULE_10__["GuardAuthComponent"],
                canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
                data: { guard: 'user1' },
            },
            {
                path: 'admin',
                component: _guard_admin_component__WEBPACK_IMPORTED_MODULE_11__["GuardAdminComponent"],
                canActivate: [_delon_acl__WEBPACK_IMPORTED_MODULE_3__["ACLGuard"]],
                data: { guard: 'admin' },
            },
        ],
    },
    { path: 'cache', component: _cache_cache_component__WEBPACK_IMPORTED_MODULE_13__["CacheComponent"] },
    { path: 'qr', component: _qr_qr_component__WEBPACK_IMPORTED_MODULE_18__["QRComponent"] },
    { path: 'downfile', component: _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_14__["DownFileComponent"] },
    { path: 'xlsx', component: _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_15__["XlsxComponent"] },
    { path: 'zip', component: _zip_zip_component__WEBPACK_IMPORTED_MODULE_16__["ZipComponent"] },
    { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_17__["DelonFormComponent"] },
];
var DelonRoutingModule = /** @class */ (function () {
    function DelonRoutingModule() {
    }
    DelonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DelonRoutingModule);
    return DelonRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/delon/delon.module.ts":
/*!**********************************************!*\
  !*** ./src/app/routes/delon/delon.module.ts ***!
  \**********************************************/
/*! exports provided: DelonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonModule", function() { return DelonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _delon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delon-routing.module */ "./src/app/routes/delon/delon-routing.module.ts");
/* harmony import */ var _simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple-table/simple-table.component */ "./src/app/routes/delon/simple-table/simple-table.component.ts");
/* harmony import */ var _util_util_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/util.component */ "./src/app/routes/delon/util/util.component.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./print/print.component */ "./src/app/routes/delon/print/print.component.ts");
/* harmony import */ var _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./acl/acl.component */ "./src/app/routes/delon/acl/acl.component.ts");
/* harmony import */ var _guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guard/can-leave.provide */ "./src/app/routes/delon/guard/can-leave.provide.ts");
/* harmony import */ var _guard_guard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guard/guard.component */ "./src/app/routes/delon/guard/guard.component.ts");
/* harmony import */ var _guard_leave_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guard/leave.component */ "./src/app/routes/delon/guard/leave.component.ts");
/* harmony import */ var _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guard/admin.component */ "./src/app/routes/delon/guard/admin.component.ts");
/* harmony import */ var _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/auth.component */ "./src/app/routes/delon/guard/auth.component.ts");
/* harmony import */ var _cache_cache_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cache/cache.component */ "./src/app/routes/delon/cache/cache.component.ts");
/* harmony import */ var _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./downfile/downfile.component */ "./src/app/routes/delon/downfile/downfile.component.ts");
/* harmony import */ var _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xlsx/xlsx.component */ "./src/app/routes/delon/xlsx/xlsx.component.ts");
/* harmony import */ var _zip_zip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./zip/zip.component */ "./src/app/routes/delon/zip/zip.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form/form.component */ "./src/app/routes/delon/form/form.component.ts");
/* harmony import */ var _qr_qr_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./qr/qr.component */ "./src/app/routes/delon/qr/qr.component.ts");




















var COMPONENTS = [
    _simple_table_simple_table_component__WEBPACK_IMPORTED_MODULE_5__["SimpleTableComponent"],
    _util_util_component__WEBPACK_IMPORTED_MODULE_6__["UtilComponent"],
    _print_print_component__WEBPACK_IMPORTED_MODULE_7__["PrintComponent"],
    _acl_acl_component__WEBPACK_IMPORTED_MODULE_8__["ACLComponent"],
    _guard_guard_component__WEBPACK_IMPORTED_MODULE_10__["GuardComponent"],
    _guard_leave_component__WEBPACK_IMPORTED_MODULE_11__["GuardLeaveComponent"],
    _guard_admin_component__WEBPACK_IMPORTED_MODULE_12__["GuardAdminComponent"],
    _guard_auth_component__WEBPACK_IMPORTED_MODULE_13__["GuardAuthComponent"],
    _cache_cache_component__WEBPACK_IMPORTED_MODULE_14__["CacheComponent"],
    _downfile_downfile_component__WEBPACK_IMPORTED_MODULE_15__["DownFileComponent"],
    _xlsx_xlsx_component__WEBPACK_IMPORTED_MODULE_16__["XlsxComponent"],
    _zip_zip_component__WEBPACK_IMPORTED_MODULE_17__["ZipComponent"],
    _form_form_component__WEBPACK_IMPORTED_MODULE_18__["DelonFormComponent"],
    _qr_qr_component__WEBPACK_IMPORTED_MODULE_19__["QRComponent"],
];
var COMPONENTS_NOROUNT = [];
var DelonModule = /** @class */ (function () {
    function DelonModule() {
    }
    DelonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _delon_routing_module__WEBPACK_IMPORTED_MODULE_4__["DelonRoutingModule"]],
            providers: [_guard_can_leave_provide__WEBPACK_IMPORTED_MODULE_9__["CanLeaveProvide"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT,
        })
    ], DelonModule);
    return DelonModule;
}());



/***/ }),

/***/ "./src/app/routes/delon/downfile/downfile.component.html":
/*!***************************************************************!*\
  !*** ./src/app/routes/delon/downfile/downfile.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>Download a file</h1>\r\n</div>\r\n<nz-card nzTitle=\"DEMO\">\r\n  <button nz-button *ngFor=\"let i of fileTypes\" class=\"mr-sm\" down-file [http-data]=\"data\" http-url=\"assets/tmp/demo{{i}}\" file-name=\"demo中文\">{{i}}</button>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/downfile/downfile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/delon/downfile/downfile.component.ts ***!
  \*************************************************************/
/*! exports provided: DownFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownFileComponent", function() { return DownFileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DownFileComponent = /** @class */ (function () {
    function DownFileComponent() {
        this.fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];
        this.data = {
            otherdata: 1,
            time: new Date(),
        };
    }
    DownFileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-down-file',
            template: __webpack_require__(/*! ./downfile.component.html */ "./src/app/routes/delon/downfile/downfile.component.html"),
        })
    ], DownFileComponent);
    return DownFileComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/form/form.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/form/form.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<page-header [title]=\"'Page Name'\"></page-header>\r\n<nz-card>\r\n  <sf mode=\"search\" [schema]=\"searchSchema\" [formData]=\"params\" (formSubmit)=\"st.reset($event)\" (formReset)=\"st.reset(params)\"></sf>\r\n  <st #st [data]=\"url\" [columns]=\"columns\" [req]=\"{params: params}\"></st>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/form/form.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/form/form.component.ts ***!
  \*****************************************************/
/*! exports provided: DelonFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelonFormComponent", function() { return DelonFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");




var DelonFormComponent = /** @class */ (function () {
    function DelonFormComponent(http) {
        this.http = http;
        this.params = {};
        this.url = "/user";
        this.searchSchema = {
            properties: {
                no: {
                    type: 'string',
                    title: '编号',
                },
            },
        };
        this.columns = [
            { title: '编号', index: 'no' },
            { title: '调用次数', type: 'number', index: 'callNo' },
            { title: '头像', type: 'img', width: '50px', index: 'avatar' },
            { title: '时间', type: 'date', index: 'updatedAt' },
        ];
    }
    DelonFormComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('st'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _delon_abc__WEBPACK_IMPORTED_MODULE_3__["STComponent"])
    ], DelonFormComponent.prototype, "st", void 0);
    DelonFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delon-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/routes/delon/form/form.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_2__["_HttpClient"]])
    ], DelonFormComponent);
    return DelonFormComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/guard/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAdminComponent", function() { return GuardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuardAdminComponent = /** @class */ (function () {
    function GuardAdminComponent() {
    }
    GuardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guard-admin',
            template: "\n    <p>\u8FD9\u662F\u4E00\u4E2Aadmin\u9875\u9762</p>\n  ",
        })
    ], GuardAdminComponent);
    return GuardAdminComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/guard/auth.component.ts":
/*!******************************************************!*\
  !*** ./src/app/routes/delon/guard/auth.component.ts ***!
  \******************************************************/
/*! exports provided: GuardAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardAuthComponent", function() { return GuardAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuardAuthComponent = /** @class */ (function () {
    function GuardAuthComponent() {
    }
    GuardAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guard-auth',
            template: "\n    <p>\u8FD9\u662F\u4E00\u4E2Auser1\u9875\u9762</p>\n  ",
        })
    ], GuardAuthComponent);
    return GuardAuthComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/guard/can-leave.provide.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/delon/guard/can-leave.provide.ts ***!
  \*********************************************************/
/*! exports provided: CanLeaveProvide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanLeaveProvide", function() { return CanLeaveProvide; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var CanLeaveProvide = /** @class */ (function () {
    function CanLeaveProvide(confirmSrv) {
        this.confirmSrv = confirmSrv;
    }
    CanLeaveProvide.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.confirmSrv.confirm({
                nzTitle: '确认要离开吗？',
                nzContent: '你已经填写了部分表单离开会放弃已经填写的内容。',
                nzOkText: '离开',
                nzCancelText: '取消',
                nzOnOk: function () {
                    observer.next(true);
                    observer.complete();
                },
                nzOnCancel: function () {
                    observer.next(false);
                    observer.complete();
                },
            });
        });
    };
    CanLeaveProvide = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzModalService"]])
    ], CanLeaveProvide);
    return CanLeaveProvide;
}());



/***/ }),

/***/ "./src/app/routes/delon/guard/guard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/delon/guard/guard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    路由守卫\r\n  </h1>\r\n</div>\r\n<nz-button-group>\r\n  <button nz-button [routerLink]=\"['/delon/guard/leave']\">\r\n    <span>离开确认页</span>\r\n  </button>\r\n</nz-button-group>\r\n<nz-button-group class=\"ml-sm\">\r\n  <button nz-button (click)=\"setRole(true)\">\r\n    <span>设置管理员</span>\r\n  </button>\r\n  <button nz-button (click)=\"setRole('user1')\">\r\n    <span>设置员工1</span>\r\n  </button>\r\n  <button nz-button (click)=\"setRole('user2')\">\r\n    <span>设置员工2</span>\r\n  </button>\r\n</nz-button-group>\r\n<nz-button-group class=\"ml-sm\">\r\n  <button nz-button [routerLink]=\"['/delon/guard/auth']\">\r\n    <span>需要user1</span>\r\n  </button>\r\n  <button nz-button [routerLink]=\"['/delon/guard/admin']\">\r\n    <span>需要管理员</span>\r\n  </button>\r\n</nz-button-group>\r\n<p class=\"mb-lg\">\r\n  当前ACL信息：{{ aclSrv.data | json }}\r\n</p>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/guard/guard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/guard.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardComponent", function() { return GuardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_acl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/acl */ "./node_modules/@delon/acl/fesm5/acl.js");





var GuardComponent = /** @class */ (function () {
    function GuardComponent(aclSrv, menuSrv, router) {
        this.aclSrv = aclSrv;
        this.menuSrv = menuSrv;
        this.router = router;
    }
    GuardComponent.prototype.setRole = function (value) {
        this.aclSrv.setFull(typeof value === 'boolean' ? value : false);
        this.aclSrv.set({ role: [value] });
        this.menuSrv.resume();
        this.router.navigate(['/delon/guard']);
    };
    GuardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-guard',
            template: __webpack_require__(/*! ./guard.component.html */ "./src/app/routes/delon/guard/guard.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_acl__WEBPACK_IMPORTED_MODULE_4__["ACLService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_1__["MenuService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GuardComponent);
    return GuardComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/guard/leave.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/guard/leave.component.ts ***!
  \*******************************************************/
/*! exports provided: GuardLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardLeaveComponent", function() { return GuardLeaveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GuardLeaveComponent = /** @class */ (function () {
    function GuardLeaveComponent() {
    }
    GuardLeaveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guard-leave',
            template: "\n    <p>\u79BB\u5F00\u65F6\u9700\u8981\u786E\u8BA4</p>\n    <button nz-button [nzType]=\"'primary'\" [routerLink]=\"['/logics/guard']\">\n      <span>\u6211\u8981\u79BB\u5F00</span>\n    </button>\n    ",
        })
    ], GuardLeaveComponent);
    return GuardLeaveComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/print/print.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/delon/print/print.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>Lodop打印\r\n    <small>更多体验请至\r\n      <a href=\"https://ng-alain.com/components/lodop\" target=\"_blank\">ng-alain.com</a>\r\n    </small>\r\n  </h1>\r\n</div>\r\n<nz-card>\r\n  <nz-alert *ngIf=\"error\" [nzType]=\"'warning'\" [nzMessage]=\"message\">\r\n    <ng-template #message>\r\n      请先下载\r\n      <a href=\"http://c-lodop.com/download.html\" target=\"_blank\">Lodop插件</a>。\r\n    </ng-template>\r\n  </nz-alert>\r\n  <form *ngIf=\"!error\" nz-form>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">打印服务器</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <nz-input-group>\r\n          <div nz-col [nzSpan]=\"16\">\r\n            <input nz-input nzPlaceHolder=\"https://localhost:8443/CLodopfuncs.js\" [(ngModel)]=\"cog.url\" name=\"url\">\r\n          </div>\r\n          <div nz-col [nzSpan]=\"8\">\r\n            <button nz-button (click)=\"reload(null)\">重新加载打印机</button>\r\n          </div>\r\n        </nz-input-group>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">打印机</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <nz-select style=\"width:90%;\" nzPlaceHolder=\"请选择打印机\" nzShowSearch nzAllowClear [(ngModel)]=\"cog.printer\" name=\"printer\" (ngModelChange)=\"changePinter($event)\">\r\n          <nz-option *ngFor=\"let name of pinters\" [nzLabel]=\"name\" [nzValue]=\"name\">\r\n          </nz-option>\r\n        </nz-select>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">纸张类型</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <nz-select style=\"width:90%;\" nzPlaceHolder=\"请选择纸张类型\" nzShowSearch nzAllowClear [(ngModel)]=\"cog.paper\" name=\"paper\">\r\n          <nz-option *ngFor=\"let name of papers\" [nzLabel]=\"name\" [nzValue]=\"name\">\r\n          </nz-option>\r\n        </nz-select>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-label nz-col [nzSm]=\"6\">打印内容</nz-form-label>\r\n      <nz-form-control nz-col [nzSm]=\"18\">\r\n        <textarea nz-input [(ngModel)]=\"cog.html\" name=\"html\" nzAutosize></textarea>\r\n        <div nz-form-extra>仅限HTML，更多类型支持请参考官网</div>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n    <nz-form-item nz-row>\r\n      <nz-form-control nz-col [nzSm]=\"18\" [nzOffset]=\"6\">\r\n        <button nz-button (click)=\"print(true)\" [nzLoading]=\"printing\">打印预览</button>\r\n        <button nz-button (click)=\"print()\" [nzLoading]=\"printing\">直接打印</button>\r\n      </nz-form-control>\r\n    </nz-form-item>\r\n  </form>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/print/print.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/print/print.component.ts ***!
  \*******************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");




var PrintComponent = /** @class */ (function () {
    function PrintComponent(lodopSrv, msg, notify) {
        var _this = this;
        this.lodopSrv = lodopSrv;
        this.msg = msg;
        this.notify = notify;
        this.cog = {
            url: 'https://localhost:8443/CLodopfuncs.js',
            printer: '',
            paper: '',
            html: "\n      <h1>Title</h1>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n      <p>\u8FD9~\uFF01@#\uFFE5%\u2026\u2026&*\uFF08\uFF09\u2014\u2014sdilfjnvn</p>\n    ",
        };
        this.error = false;
        this.lodop = null;
        this.pinters = [];
        this.papers = [];
        this.printing = false;
        this.lodopSrv.lodop.subscribe(function (_a) {
            var lodop = _a.lodop, ok = _a.ok;
            if (!ok) {
                _this.error = true;
                return;
            }
            _this.error = false;
            _this.msg.success("\u6253\u5370\u673A\u52A0\u8F7D\u6210\u529F");
            _this.lodop = lodop;
            _this.pinters = _this.lodopSrv.printer;
        });
    }
    PrintComponent.prototype.reload = function (options) {
        if (options === void 0) { options = { url: 'https://localhost:8443/CLodopfuncs.js' }; }
        this.pinters = [];
        this.papers = [];
        this.cog.printer = '';
        this.cog.paper = '';
        this.lodopSrv.cog = Object.assign({}, this.cog, options);
        this.error = false;
        if (options === null)
            this.lodopSrv.reset();
    };
    PrintComponent.prototype.changePinter = function (name) {
        this.papers = this.lodop.GET_PAGESIZES_LIST(name, '\n').split('\n');
    };
    PrintComponent.prototype.print = function (isPrivew) {
        if (isPrivew === void 0) { isPrivew = false; }
        var LODOP = this.lodop;
        LODOP.PRINT_INITA(10, 20, 810, 610, '测试C-Lodop远程打印四步骤');
        LODOP.SET_PRINTER_INDEXA(this.cog.printer);
        LODOP.SET_PRINT_PAGESIZE(0, 0, 0, this.cog.paper);
        LODOP.ADD_PRINT_TEXT(1, 1, 300, 200, '下面输出的是本页源代码及其展现效果：');
        LODOP.ADD_PRINT_TEXT(20, 10, '90%', '95%', this.cog.html);
        LODOP.SET_PRINT_STYLEA(0, 'ItemType', 4);
        LODOP.NewPageA();
        LODOP.ADD_PRINT_HTM(20, 10, '90%', '95%', this.cog.html);
        if (isPrivew)
            LODOP.PREVIEW();
        else
            LODOP.PRINT();
    };
    PrintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print',
            template: __webpack_require__(/*! ./print.component.html */ "./src/app/routes/delon/print/print.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_3__["LodopService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzNotificationService"]])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/qr/qr.component.html":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/qr/qr.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>二维码\r\n    <a href=\"//ng-alain.com/components/qr\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card>\r\n  <nz-row [nzGutter]=\"24\">\r\n    <nz-col [nzSpan]=\"8\" class=\"text-center\">\r\n      <qr [value]=\"value\" [background]=\"background\" [backgroundAlpha]=\"backgroundAlpha\" [foreground]=\"foreground\" [foregroundAlpha]=\"foregroundAlpha\"\r\n        [level]=\"level\" [mime]=\"mime\" [padding]=\"padding\" [size]=\"size\" style=\"border:1px solid #999\"></qr>\r\n    </nz-col>\r\n    <nz-col [nzSpan]=\"16\">\r\n      <form nz-form>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">背景</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-group>\r\n              <div nz-col nzSpan=\"12\">\r\n                <input nz-input type=\"color\" [(ngModel)]=\"background\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div nz-col nzSpan=\"12\">\r\n                <nz-input-number [(ngModel)]=\"backgroundAlpha\" [nzMin]=\"0\" [nzMax]=\"1\" [nzStep]=\"0.1\" [ngModelOptions]=\"{standalone: true}\"></nz-input-number>\r\n              </div>\r\n            </nz-input-group>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">前景</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-group>\r\n              <div nz-col nzSpan=\"12\">\r\n                <input nz-input type=\"color\" [(ngModel)]=\"foreground\" [ngModelOptions]=\"{standalone: true}\">\r\n              </div>\r\n              <div nz-col nzSpan=\"12\">\r\n                <nz-input-number [(ngModel)]=\"foregroundAlpha\" [nzMin]=\"0\" [nzMax]=\"1\" [nzStep]=\"0.1\" [ngModelOptions]=\"{standalone: true}\"></nz-input-number>\r\n              </div>\r\n            </nz-input-group>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">误差</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-select [(ngModel)]=\"level\" [ngModelOptions]=\"{standalone: true}\">\r\n              <nz-option nzValue=\"L\" nzLabel=\"L\"></nz-option>\r\n              <nz-option nzValue=\"M\" nzLabel=\"M\"></nz-option>\r\n              <nz-option nzValue=\"Q\" nzLabel=\"Q\"></nz-option>\r\n              <nz-option nzValue=\"H\" nzLabel=\"H\"></nz-option>\r\n            </nz-select>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">Mime</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-select [(ngModel)]=\"mime\" [ngModelOptions]=\"{standalone: true}\">\r\n              <nz-option nzValue=\"image/png\" nzLabel=\"image/png\"></nz-option>\r\n              <nz-option nzValue=\"image/jpeg\" nzLabel=\"image/jpeg\"></nz-option>\r\n              <nz-option nzValue=\"image/gif\" nzLabel=\"image/gif\"></nz-option>\r\n            </nz-select>\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">内边距</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-number [(ngModel)]=\"padding\" [ngModelOptions]=\"{standalone: true}\" [nzMin]=\"0\" [nzMax]=\"100\"></nz-input-number>px\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n        <nz-form-item>\r\n          <nz-form-label [nzSpan]=\"8\">大小</nz-form-label>\r\n          <nz-form-control [nzSpan]=\"16\">\r\n            <nz-input-number [(ngModel)]=\"size\" [ngModelOptions]=\"{standalone: true}\" [nzMin]=\"100\" [nzMax]=\"1000\" [nzStep]=\"padding\"></nz-input-number>px\r\n          </nz-form-control>\r\n        </nz-form-item>\r\n      </form>\r\n    </nz-col>\r\n  </nz-row>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/qr/qr.component.ts":
/*!*************************************************!*\
  !*** ./src/app/routes/delon/qr/qr.component.ts ***!
  \*************************************************/
/*! exports provided: QRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QRComponent", function() { return QRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QRComponent = /** @class */ (function () {
    function QRComponent() {
        this.value = 'https://ng-alain.com/';
        this.background = 'white';
        this.backgroundAlpha = 1.0;
        this.foreground = 'black';
        this.foregroundAlpha = 1.0;
        this.level = 'L';
        this.mime = 'image/png';
        this.padding = 10;
        this.size = 220;
    }
    QRComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-qr',
            template: __webpack_require__(/*! ./qr.component.html */ "./src/app/routes/delon/qr/qr.component.html"),
        })
    ], QRComponent);
    return QRComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/simple-table/simple-table.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/routes/delon/simple-table/simple-table.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    Fullscreen Table\r\n    <small>使用\r\n      <a href=\"//ng-alain.com/components/table\" target=\"_blank\">simple-table</a>、\r\n      <a href=\"//ng-alain.com/components/full-content\" target=\"_blank\">full-content</a> 组合，由于 nz-table 固定表头暂不支持自适应，因此表格的展示的效果在响应式里面效果并不是特别好。</small>\r\n  </h1>\r\n</div>\r\n<full-content (fullscreenChange)=\"fullChange($event)\">\r\n  <nz-card>\r\n    <div nz-row class=\"mb-md\">\r\n      <div nz-col nzSpan=\"12\">\r\n        <form nz-form [nzLayout]=\"'inline'\">\r\n          <nz-form-item>\r\n            <nz-form-label nzFor=\"userid\">User ID</nz-form-label>\r\n            <nz-form-control>\r\n              <input nz-input [(ngModel)]=\"args.userid\" name=\"userid\" id=\"userid\">\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control>\r\n              <button nz-button [nzType]=\"'primary'\" (click)=\"st.load()\" [nzLoading]=\"http.loading\">Search</button>\r\n              <button nz-button (click)=\"st.load({_allow_anonymous: true})\" [disabled]=\"http.loading\">Clear</button>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form>\r\n      </div>\r\n      <div nz-col nzSpan=\"12\">\r\n        <div class=\"text-right\">\r\n          <nz-dropdown>\r\n            <button nz-button nz-dropdown>\r\n              <span>Export</span>\r\n              <i nz-icon type=\"down\"></i>\r\n            </button>\r\n            <ul nz-menu>\r\n              <li nz-menu-item>Excel</li>\r\n              <li nz-menu-item>JSON</li>\r\n              <li nz-menu-item>PNG</li>\r\n            </ul>\r\n          </nz-dropdown>\r\n          <button nz-button [nzType]=\"'default'\" full-toggle class=\"ml-sm\">Full</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <st #st [data]=\"url\" [req]=\"{params: args}\" [res]=\"{ reName: {list: 'results' } }\" [total]=\"total\" [ps]=\"ps\" [columns]=\"columns\"\r\n      [scroll]=\"scroll\">\r\n      <ng-template st-row=\"events\" let-item let-index=\"index\">\r\n        <g2-mini-bar height=\"15\" theme=\"mini\" color=\"#999\" borderWidth=\"3\" [padding]=\"[0, 0, 0, 0]\" [data]=\"events\"></g2-mini-bar>\r\n      </ng-template>\r\n    </st>\r\n  </nz-card>\r\n</full-content>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/simple-table/simple-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/routes/delon/simple-table/simple-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: SimpleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTableComponent", function() { return SimpleTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");




var SimpleTableComponent = /** @class */ (function () {
    function SimpleTableComponent(http, message) {
        var _this = this;
        this.http = http;
        this.message = message;
        this.ps = 20;
        this.total = 200; // mock total
        this.args = { _allow_anonymous: true };
        this.url = "https://api.randomuser.me/?results=20";
        this.events = [];
        this.scroll = { y: '230px' };
        this.columns = [
            { title: 'id', index: 'id.value', type: 'checkbox' },
            { title: 'Avatar', index: 'picture.thumbnail', type: 'img', width: '80px' },
            {
                title: 'Name',
                index: 'name.first',
                width: '150px',
                format: function (item) { return item.name.first + " " + item.name.last; },
                type: 'link',
                click: function (item) { return _this.message.info("" + item.name.first); },
            },
            { title: 'Email', index: 'email' },
            {
                title: 'Gender',
                index: 'gender',
                type: 'yn',
                ynTruth: 'female',
                ynYes: '男',
                ynNo: '女',
                width: '120px',
            },
            { title: 'Events', render: 'events', width: '90px' },
            { title: 'Registered', index: 'registered', type: 'date', width: '150px' },
            {
                title: 'Actions',
                width: '120px',
                buttons: [
                    {
                        text: 'Edit',
                        click: function (item) { return _this.message.info("edit [" + item.id.value + "]"); },
                        if: function (item) { return item.gender === 'female'; },
                    },
                    {
                        text: 'Delete',
                        type: 'del',
                        click: function (item) { return _this.message.info("deleted [" + item.id.value + "]"); },
                    },
                ],
            },
        ];
    }
    SimpleTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get('/chart/visit')
            .subscribe(function (res) { return (_this.events = res.slice(0, 8)); });
    };
    SimpleTableComponent.prototype.fullChange = function (val) {
        this.scroll = val ? { y: '350px' } : { y: '230px' };
    };
    SimpleTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple-table',
            template: __webpack_require__(/*! ./simple-table.component.html */ "./src/app/routes/delon/simple-table/simple-table.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], SimpleTableComponent);
    return SimpleTableComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/util/util.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/util/util.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>\r\n    工具集\r\n    <small>@delon/util 日常用法。</small>\r\n  </h1>\r\n</div>\r\n<nz-row [nzGutter]=\"16\">\r\n  <nz-col [nzSpan]=\"12\">\r\n    <nz-card nzTitle=\"字符串类\">\r\n      <nz-card nzType=\"inner\" nzTitle=\"format\">\r\n        <form nz-form>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"8\">String</nz-form-label>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              <input nz-input [(ngModel)]=\"format_str\" [ngModelOptions]=\"{standalone: true}\">\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"8\">Object</nz-form-label>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              <input nz-input [(ngModel)]=\"format_obj\" [ngModelOptions]=\"{standalone: true}\">\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-control [nzSpan]=\"16\" [nzOffset]=\"8\">\r\n              <button (click)=\"onFormat()\" nz-button>Run</button>\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n          <nz-form-item>\r\n            <nz-form-label [nzSm]=\"8\">Result</nz-form-label>\r\n            <nz-form-control [nzSm]=\"16\">\r\n              {{format_res}}\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </form>\r\n      </nz-card>\r\n      <nz-card nzType=\"inner\" nzTitle=\"yuan\">\r\n        <nz-row [nzGutter]=\"16\">\r\n          <nz-col [nzSpan]=\"12\">\r\n            <input type=\"number\" nz-input [(ngModel)]=\"yuan_str\" (ngModelChange)=\"onYuan($event)\">\r\n          </nz-col>\r\n          <nz-col [nzSpan]=\"12\">\r\n            <div [innerHTML]=\"yuan_res\"></div>\r\n          </nz-col>\r\n        </nz-row>\r\n      </nz-card>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzSpan]=\"12\">\r\n    <nz-card nzTitle=\"其它类\">\r\n      <button nz-button (click)=\"onCopy()\">Copy</button>\r\n    </nz-card>\r\n  </nz-col>\r\n</nz-row>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/util/util.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/util/util.component.ts ***!
  \*****************************************************/
/*! exports provided: UtilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilComponent", function() { return UtilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/util */ "./node_modules/@delon/util/fesm5/util.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");





var UtilComponent = /** @class */ (function () {
    function UtilComponent(messageSrv) {
        this.messageSrv = messageSrv;
        // region: string
        this.format_str = 'this is ${name}';
        this.format_res = '';
        this.format_obj = JSON.stringify({ name: 'asdf' });
        // endregion
        // region: other
        this.content = "time " + +new Date() + "\n\n    \u4E2D\u6587\uFF01@#\uFFE5%\u2026\u2026&*";
    }
    UtilComponent.prototype.onFormat = function () {
        var obj = null;
        try {
            obj = JSON.parse(this.format_obj);
        }
        catch (_a) {
            this.messageSrv.error("\u65E0\u6CD5\u4F7F\u7528 JSON.parse \u8F6C\u6362");
            return;
        }
        this.format_res = Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["format"])(this.format_str, obj, true);
    };
    UtilComponent.prototype.onYuan = function (value) {
        this.yuan_res = Object(_shared__WEBPACK_IMPORTED_MODULE_4__["yuan"])(value);
    };
    UtilComponent.prototype.onCopy = function () {
        var _this = this;
        Object(_delon_util__WEBPACK_IMPORTED_MODULE_3__["copy"])("time " + +new Date()).then(function () { return _this.messageSrv.success("success"); });
    };
    UtilComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-util',
            template: __webpack_require__(/*! ./util.component.html */ "./src/app/routes/delon/util/util.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], UtilComponent);
    return UtilComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/xlsx/xlsx.component.html":
/*!*******************************************************!*\
  !*** ./src/app/routes/delon/xlsx/xlsx.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>Import & Export excel file,\r\n    <a href=\"//ng-alain.com/components/xlsx\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card nzTitle=\"Import\">\r\n  <button nz-button (click)=\"url()\">Via Url</button>\r\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\r\n  <p class=\"mt-sm\">result: {{data | json}}</p>\r\n</nz-card>\r\n<nz-card nzTitle=\"Export\">\r\n  <button nz-button (click)=\"download()\">Export</button>\r\n  <st [data]=\"users\" [ps]=\"3\" [columns]=\"columns\" class=\"mt-sm\"></st>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/xlsx/xlsx.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/xlsx/xlsx.component.ts ***!
  \*****************************************************/
/*! exports provided: XlsxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XlsxComponent", function() { return XlsxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");



var XlsxComponent = /** @class */ (function () {
    function XlsxComponent(xlsx) {
        this.xlsx = xlsx;
        this.users = Array(100)
            .fill({})
            .map(function (item, idx) {
            return {
                id: idx + 1,
                name: "name " + (idx + 1),
                age: Math.ceil(Math.random() * 10) + 20,
            };
        });
        this.columns = [
            { title: '编号', index: 'id', type: 'checkbox' },
            { title: '姓名', index: 'name' },
            { title: '年龄', index: 'age' },
        ];
    }
    XlsxComponent.prototype.url = function () {
        var _this = this;
        this.xlsx.import("./assets/tmp/demo.xlsx").then(function (res) { return (_this.data = res); });
    };
    XlsxComponent.prototype.change = function (e) {
        var _this = this;
        var file = e.target.files[0];
        this.xlsx.import(file).then(function (res) { return (_this.data = res); });
    };
    XlsxComponent.prototype.download = function () {
        var _this = this;
        var data = [this.columns.map(function (i) { return i.title; })];
        this.users.forEach(function (i) {
            return data.push(_this.columns.map(function (c) { return i[c.index]; }));
        });
        this.xlsx.export({
            sheets: [
                {
                    data: data,
                    name: 'sheet name',
                },
            ],
        });
    };
    XlsxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-xlsx',
            template: __webpack_require__(/*! ./xlsx.component.html */ "./src/app/routes/delon/xlsx/xlsx.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_2__["XlsxService"]])
    ], XlsxComponent);
    return XlsxComponent;
}());



/***/ }),

/***/ "./src/app/routes/delon/zip/zip.component.html":
/*!*****************************************************!*\
  !*** ./src/app/routes/delon/zip/zip.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>Read & Write zip file,\r\n    <a href=\"//ng-alain.com/components/zip\" target=\"_blank\">Document</a>\r\n  </h1>\r\n</div>\r\n<nz-card nzTitle=\"解压\">\r\n  <button nz-button (click)=\"url()\">Via Url</button>\r\n  <input type=\"file\" (change)=\"change($event)\" multiple=\"false\" class=\"ml-sm\" />\r\n  <ol>\r\n    <li *ngFor=\"let i of list\">{{i | json}}</li>\r\n  </ol>\r\n</nz-card>\r\n<nz-card nzTitle=\"压缩\" *ngIf=\"instance\">\r\n  <button nz-button (click)=\"data.push({})\" [nzType]=\"'primary'\">new</button>\r\n  <button nz-button (click)=\"download()\" class=\"ml-sm\">download</button>\r\n  <nz-table [nzData]=\"data\" [nzFrontPagination]=\"false\" [nzShowPagination]=\"false\" class=\"mt-sm\">\r\n    <thead>\r\n      <tr>\r\n        <th>\r\n          <span>path</span>\r\n        </th>\r\n        <th>\r\n          <span>url</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let i of data; let index = index\">\r\n        <td>\r\n          <input nz-input [(ngModel)]=\"i.path\" name=\"path{{index}}\">\r\n        </td>\r\n        <td>\r\n          <input nz-input [(ngModel)]=\"i.url\" name=\"url{{index}}\">\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </nz-table>\r\n</nz-card>\r\n"

/***/ }),

/***/ "./src/app/routes/delon/zip/zip.component.ts":
/*!***************************************************!*\
  !*** ./src/app/routes/delon/zip/zip.component.ts ***!
  \***************************************************/
/*! exports provided: ZipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipComponent", function() { return ZipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");




var ZipComponent = /** @class */ (function () {
    function ZipComponent(zip, msg) {
        var _this = this;
        this.zip = zip;
        this.msg = msg;
        // endregion
        // region: write
        this.instance = null;
        this.data = [
            { path: 'demo.docx', url: 'https://ng-alain.com/assets/demo.docx' },
            {
                path: '小程序标志.zip',
                url: 'https://wximg.gtimg.com/shake_tv/mina/standard_logo.zip',
            },
        ];
        this.zip.create().then(function (ret) { return (_this.instance = ret); });
    }
    ZipComponent.prototype.format = function (data) {
        var files = data.files;
        this.list = Object.keys(files).map(function (key) {
            return {
                name: key,
                dir: files[key].dir,
                date: files[key].date,
            };
        });
    };
    ZipComponent.prototype.url = function () {
        var _this = this;
        this.zip.read("./assets/tmp/demo.zip").then(function (res) { return _this.format(res); });
    };
    ZipComponent.prototype.change = function (e) {
        var _this = this;
        var file = e.target.files[0];
        this.zip.read(file).then(function (res) { return _this.format(res); });
    };
    ZipComponent.prototype.download = function () {
        var _this = this;
        var promises = [];
        this.data.forEach(function (item) {
            promises.push(_this.zip.pushUrl(_this.instance, item.path, item.url));
        });
        Promise.all(promises).then(function () {
            _this.zip.save(_this.instance).then(function () {
                _this.msg.success('download success');
                _this.data = [];
            });
        }, function (error) {
            console.warn(error);
            _this.msg.error(JSON.stringify(error));
        });
    };
    ZipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zip',
            template: __webpack_require__(/*! ./zip.component.html */ "./src/app/routes/delon/zip/zip.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_delon_abc__WEBPACK_IMPORTED_MODULE_2__["ZipService"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"]])
    ], ZipComponent);
    return ZipComponent;
}());



/***/ })

}]);
//# sourceMappingURL=delon-delon-module.js.map