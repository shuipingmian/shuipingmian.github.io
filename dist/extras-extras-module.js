(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extras-extras-module"],{

/***/ "./src/app/routes/extras/extras-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/routes/extras/extras-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ExtrasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasRoutingModule", function() { return ExtrasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpcenter/helpcenter.component */ "./src/app/routes/extras/helpcenter/helpcenter.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/routes/extras/settings/settings.component.ts");
/* harmony import */ var _poi_poi_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poi/poi.component */ "./src/app/routes/extras/poi/poi.component.ts");






var routes = [
    { path: 'helpcenter', component: _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_3__["HelpCenterComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["ExtrasSettingsComponent"] },
    { path: 'poi', component: _poi_poi_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiComponent"] },
];
var ExtrasRoutingModule = /** @class */ (function () {
    function ExtrasRoutingModule() {
    }
    ExtrasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExtrasRoutingModule);
    return ExtrasRoutingModule;
}());



/***/ }),

/***/ "./src/app/routes/extras/extras.module.ts":
/*!************************************************!*\
  !*** ./src/app/routes/extras/extras.module.ts ***!
  \************************************************/
/*! exports provided: ExtrasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasModule", function() { return ExtrasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ "./src/app/shared/index.ts");
/* harmony import */ var _extras_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras-routing.module */ "./src/app/routes/extras/extras-routing.module.ts");
/* harmony import */ var _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpcenter/helpcenter.component */ "./src/app/routes/extras/helpcenter/helpcenter.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/routes/extras/settings/settings.component.ts");
/* harmony import */ var _poi_poi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./poi/poi.component */ "./src/app/routes/extras/poi/poi.component.ts");
/* harmony import */ var _poi_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poi/edit/edit.component */ "./src/app/routes/extras/poi/edit/edit.component.ts");








var COMPONENTS = [
    _helpcenter_helpcenter_component__WEBPACK_IMPORTED_MODULE_4__["HelpCenterComponent"],
    _settings_settings_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasSettingsComponent"],
    _poi_poi_component__WEBPACK_IMPORTED_MODULE_6__["ExtrasPoiComponent"]
];
var COMPONENTS_NOROUNT = [_poi_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["ExtrasPoiEditComponent"]];
var ExtrasModule = /** @class */ (function () {
    function ExtrasModule() {
    }
    ExtrasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _extras_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExtrasRoutingModule"]],
            declarations: COMPONENTS.concat(COMPONENTS_NOROUNT),
            entryComponents: COMPONENTS_NOROUNT,
        })
    ], ExtrasModule);
    return ExtrasModule;
}());



/***/ }),

/***/ "./src/app/routes/extras/helpcenter/helpcenter.component.html":
/*!********************************************************************!*\
  !*** ./src/app/routes/extras/helpcenter/helpcenter.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center pb-lg\">\r\n  <h1 class=\"py-md mt-sm\">帮助中心</h1>\r\n  <div>帮助用户快速找到问题答案</div>\r\n</div>\r\n<div class=\"text-center\">\r\n  <nz-input-group nzCompact nzSize=\"large\">\r\n    <input [(ngModel)]=\"q\" placeholder=\"请用关键词进行搜索，例如“服务器密码重置”\" style=\"width: 50%;\" nz-input>\r\n    <nz-select [(ngModel)]=\"type\" nzSize=\"large\" style=\"width:20%;\">\r\n      <nz-option [nzLabel]=\"'不限'\" [nzValue]=\"''\"></nz-option>\r\n      <nz-option [nzLabel]=\"'弹性计算'\" [nzValue]=\"'弹性计算'\"></nz-option>\r\n      <nz-option [nzLabel]=\"'存储与CDN'\" [nzValue]=\"'存储与CDN'\"></nz-option>\r\n      <nz-option [nzLabel]=\"'会员服务'\" [nzValue]=\"'会员服务'\"></nz-option>\r\n      <nz-option [nzLabel]=\"'数据库'\" [nzValue]=\"'数据库'\"></nz-option>\r\n    </nz-select>\r\n    <button nz-button [nzType]=\"'primary'\" (click)=\"search()\" nzSize=\"large\">\r\n      <span>搜索</span>\r\n    </button>\r\n  </nz-input-group>\r\n  <div class=\"py-sm text-grey-dark\">\r\n    搜索热词：\r\n    <a class=\"ml-sm\" (click)=\"quick('远程连接服务器')\">远程连接服务器</a>\r\n    <a class=\"ml-sm\" (click)=\"quick('挂载数据盘')\">挂载数据盘</a>\r\n    <a class=\"ml-sm\" (click)=\"quick('域名解析')\">域名解析</a>\r\n    <a class=\"ml-sm\" (click)=\"quick('域名实名认证')\">域名实名认证</a>\r\n    <a class=\"ml-sm\" (click)=\"quick('账号实名认证')\">账号实名认证</a>\r\n    <a class=\"ml-sm\" (click)=\"quick('忘记密码')\">忘记密码</a>\r\n  </div>\r\n</div>\r\n<nz-row [nzGutter]=\"16\" class=\"py-lg\">\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('弹性计算')\" class=\"d-block text-center text-primary\">\r\n        <i nz-icon type=\"rocket\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">弹性计算</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('存储与CDN')\" class=\"d-block text-center text-red\">\r\n        <i nz-icon type=\"hdd\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">存储与CDN</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('会员服务')\" class=\"d-block text-center text-orange\">\r\n        <i nz-icon type=\"user\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">会员服务</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('数据库')\" class=\"d-block text-center text-purple\">\r\n        <i nz-icon type=\"database\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">数据库</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('域名与网站')\" class=\"d-block text-center text-cyan\">\r\n        <i nz-icon type=\"api\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">域名与网站</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('网络')\" class=\"d-block text-center text-teal\">\r\n        <i nz-icon type=\"global\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">网络</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('应用服务')\" class=\"d-block text-center text-pink\">\r\n        <i nz-icon type=\"appstore\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">应用服务</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzXs]=\"12\" [nzMd]=\"8\">\r\n    <nz-card>\r\n      <a (click)=\"msg.info('开发者工具')\" class=\"d-block text-center text-success\">\r\n        <i nz-icon type=\"tool\" class=\"display-1 mb-md\"></i>\r\n        <h2 class=\"mb0\">开发者工具</h2>\r\n      </a>\r\n    </nz-card>\r\n  </nz-col>\r\n</nz-row>\r\n"

/***/ }),

/***/ "./src/app/routes/extras/helpcenter/helpcenter.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/routes/extras/helpcenter/helpcenter.component.ts ***!
  \******************************************************************/
/*! exports provided: HelpCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterComponent", function() { return HelpCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var HelpCenterComponent = /** @class */ (function () {
    function HelpCenterComponent(msg) {
        this.msg = msg;
        this.type = '';
        this.q = '';
    }
    HelpCenterComponent.prototype.quick = function (key) {
        this.q = key;
        this.search();
    };
    HelpCenterComponent.prototype.search = function () {
        this.msg.success("\u641C\u7D22\uFF1A" + this.q);
    };
    HelpCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-helpcenter',
            template: __webpack_require__(/*! ./helpcenter.component.html */ "./src/app/routes/extras/helpcenter/helpcenter.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], HelpCenterComponent);
    return HelpCenterComponent;
}());



/***/ }),

/***/ "./src/app/routes/extras/poi/edit/edit.component.html":
/*!************************************************************!*\
  !*** ./src/app/routes/extras/poi/edit/edit.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"modal-title\">{{i.id > 0 ? '编辑' : '添加'}}-门店（基于HTML模板表单写法）</div>\r\n</div>\r\n<form #f=\"ngForm\" (ngSubmit)=\"save()\" nz-form>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">所属分销商</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      {{i.user_id}}\r\n      <a (click)=\"msgSrv.info('find')\">查找用户</a>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">门店名称</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.name\" name=\"name\" maxlength=\"30\" required />\r\n      <p nz-form-explain>如：国美、麦当劳，不应包含地区、地址、分店名等信息，错误示例：北京国美</p>\r\n    </nz-form-control>\r\n    <nz-form-label nzSpan=\"4\">分店名称</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.branch_name\" name=\"branch_name\" maxlength=\"20\" required />\r\n      <p nz-form-explain>不应包含地区信息，不应与门店名有重复，错误示例：北京王府井店</p>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">所在地</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.geo\" name=\"geo\" maxlength=\"50\" required />\r\n    </nz-form-control>\r\n    <nz-form-label nzSpan=\"4\">街道地址</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.address\" name=\"address\" maxlength=\"50\" required />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">纬度</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.lat\" name=\"lat\" required />\r\n    </nz-form-control>\r\n    <nz-form-label nzSpan=\"4\">经度</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.lng\" name=\"lng\" required />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">电话</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.tel\" name=\"tel\" maxlength=\"30\" required />\r\n    </nz-form-control>\r\n    <nz-form-label nzSpan=\"4\">门店类型</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <nz-select [(ngModel)]=\"i.categories\" name=\"categories\" required [nzAllowClear]=\"false\">\r\n        <nz-option *ngFor=\"let i of cat\" [nzLabel]=\"i\" [nzValue]=\"i\">\r\n        </nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">推荐品</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.recommend\" name=\"recommend\" maxlength=\"200\" placeholder=\"200字以内\" />\r\n    </nz-form-control>\r\n    <nz-form-label nzSpan=\"4\">特色服务</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.special\" name=\"special\" maxlength=\"50\" placeholder=\"50字以内\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">商户简介</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.introduction\" name=\"introduction\" maxlength=\"300\" placeholder=\"300字以内\" />\r\n    </nz-form-control>\r\n    <nz-form-label nzSpan=\"4\">营业时间</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <input nz-input [(ngModel)]=\"i.open_time\" name=\"open_time\" maxlength=\"30\" placeholder=\"30字以内\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item class=\"mb-sm\">\r\n    <nz-form-label nzSpan=\"4\">人均价格</nz-form-label>\r\n    <nz-form-control nzSpan=\"8\">\r\n      <nz-input-number [(ngModel)]=\"i.avg_price\" name=\"avg_price\" [nzMin]=\"0\" [nzStep]=\"10\"></nz-input-number>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <div class=\"modal-footer\">\r\n    <button nz-button type=\"button\" (click)=\"close()\">关闭</button>\r\n    <button nz-button [disabled]=\"!f.form.valid || !f.form.dirty\" [nzLoading]=\"http.loading\" [nzType]=\"'primary'\">保存</button>\r\n  </div>\r\n</form>\n"

/***/ }),

/***/ "./src/app/routes/extras/poi/edit/edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/routes/extras/poi/edit/edit.component.ts ***!
  \**********************************************************/
/*! exports provided: ExtrasPoiEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPoiEditComponent", function() { return ExtrasPoiEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");




var ExtrasPoiEditComponent = /** @class */ (function () {
    function ExtrasPoiEditComponent(modal, msgSrv, http) {
        this.modal = modal;
        this.msgSrv = msgSrv;
        this.http = http;
        this.cat = ['美食', '美食,粤菜', '美食,粤菜,湛江菜'];
    }
    ExtrasPoiEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.i.id > 0) {
            this.http.get('/pois').subscribe(function (res) { return (_this.i = res.list[0]); });
        }
    };
    ExtrasPoiEditComponent.prototype.save = function () {
        var _this = this;
        this.http.get('/pois').subscribe(function () {
            _this.msgSrv.success('保存成功，只是模拟，实际未变更');
            _this.modal.close(true);
            _this.close();
        });
    };
    ExtrasPoiEditComponent.prototype.close = function () {
        this.modal.destroy();
    };
    ExtrasPoiEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-extras-poi-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/routes/extras/poi/edit/edit.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzModalRef"],
            ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"],
            _delon_theme__WEBPACK_IMPORTED_MODULE_3__["_HttpClient"]])
    ], ExtrasPoiEditComponent);
    return ExtrasPoiEditComponent;
}());



/***/ }),

/***/ "./src/app/routes/extras/poi/poi.component.html":
/*!******************************************************!*\
  !*** ./src/app/routes/extras/poi/poi.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alain-default__content-title\">\r\n  <h1>门店</h1>\r\n  <button nz-button (click)=\"add()\" [nzType]=\"'primary'\">添加</button>\r\n</div>\r\n<form nz-form [nzLayout]=\"'inline'\" class=\"search-form\">\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <nz-select [(ngModel)]=\"s.s\" name=\"s\" [nzAllowClear]=\"false\">\r\n        <nz-option nzValue=\"\" nzLabel=\"状态不限\"></nz-option>\r\n        <nz-option nzValue=\"1\" nzLabel=\"正常\"></nz-option>\r\n        <nz-option nzValue=\"2\" nzLabel=\"已取消\"></nz-option>\r\n        <nz-option nzValue=\"3\" nzLabel=\"已删除\"></nz-option>\r\n        <nz-option nzValue=\"10\" nzLabel=\"待提交\"></nz-option>\r\n        <nz-option nzValue=\"11\" nzLabel=\"待审核\"></nz-option>\r\n      </nz-select>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <input nz-input [(ngModel)]=\"s.user_id\" name=\"user_id\" nzPlaceHolder=\"用户编号\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <input nz-input [(ngModel)]=\"s.q\" name=\"q\" nzPlaceHolder=\"门店、分店名称\">\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item>\r\n    <nz-form-control>\r\n      <button nz-button (click)=\"st.reset(s)\">搜索</button>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n<st #st class=\"bg-white\" [columns]=\"columns\" [data]=\"url\" [req]=\"{params: s}\"></st>\n"

/***/ }),

/***/ "./src/app/routes/extras/poi/poi.component.ts":
/*!****************************************************!*\
  !*** ./src/app/routes/extras/poi/poi.component.ts ***!
  \****************************************************/
/*! exports provided: ExtrasPoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasPoiComponent", function() { return ExtrasPoiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _delon_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @delon/theme */ "./node_modules/@delon/theme/fesm5/theme.js");
/* harmony import */ var _delon_abc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @delon/abc */ "./node_modules/@delon/abc/fesm5/abc.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/routes/extras/poi/edit/edit.component.ts");






var ExtrasPoiComponent = /** @class */ (function () {
    function ExtrasPoiComponent(msg, modal) {
        var _this = this;
        this.msg = msg;
        this.modal = modal;
        this.s = {
            pi: 1,
            ps: 10,
            s: '',
        };
        this.url = '/pois';
        this.columns = [
            { title: '编号', index: 'id', width: '100px' },
            { title: '门店名称', index: 'name' },
            { title: '分店名', index: 'branch_name' },
            { title: '状态', index: 'status_str', width: '100px' },
            {
                title: '操作',
                width: '180px',
                buttons: [
                    {
                        text: '编辑',
                        type: 'modal',
                        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiEditComponent"],
                        paramName: 'i',
                        click: function () { return _this.msg.info('回调，重新发起列表刷新'); },
                    },
                    { text: '图片', click: function () { return _this.msg.info('click photo'); } },
                    { text: '经营SKU', click: function () { return _this.msg.info('click sku'); } },
                ],
            },
        ];
    }
    ExtrasPoiComponent.prototype.add = function () {
        var _this = this;
        this.modal
            .static(_edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["ExtrasPoiEditComponent"], { i: { id: 0 } })
            .subscribe(function () {
            _this.st.load();
            _this.msg.info('回调，重新发起列表刷新');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('st'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _delon_abc__WEBPACK_IMPORTED_MODULE_4__["STComponent"])
    ], ExtrasPoiComponent.prototype, "st", void 0);
    ExtrasPoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-extras-poi',
            template: __webpack_require__(/*! ./poi.component.html */ "./src/app/routes/extras/poi/poi.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"], _delon_theme__WEBPACK_IMPORTED_MODULE_3__["ModalHelper"]])
    ], ExtrasPoiComponent);
    return ExtrasPoiComponent;
}());



/***/ }),

/***/ "./src/app/routes/extras/settings/settings.component.html":
/*!****************************************************************!*\
  !*** ./src/app/routes/extras/settings/settings.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-row [nzGutter]=\"24\" class=\"py-lg\">\r\n  <nz-col [nzSpan]=\"6\">\r\n    <nz-card nzTitle=\"Personal settings\" class=\"ant-card__body-nopadding\">\r\n      <a (click)=\"active=1\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===1}\">Profile</a>\r\n      <a (click)=\"active=2\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===2}\">Account</a>\r\n      <a (click)=\"active=3\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===3}\">Emails</a>\r\n      <a (click)=\"active=4\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===4}\">Notifications</a>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"Developer settings\" class=\"ant-card__body-nopadding\">\r\n      <a (click)=\"active=5\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===5}\">OAuth applications</a>\r\n      <a (click)=\"active=6\" class=\"d-block py-sm px-md\" [ngClass]=\"{'bg-primary-light text-white':active===6}\">Personal access tokens</a>\r\n    </nz-card>\r\n  </nz-col>\r\n  <nz-col [nzSpan]=\"18\">\r\n    <nz-card nzTitle=\"Public profile\" *ngIf=\"active===1\">\r\n      <nz-row [nzGutter]=\"64\">\r\n        <nz-col [nzSpan]=\"16\">\r\n          <form nz-form [formGroup]=\"profileForm\" (ngSubmit)=\"profileSave($event, profileForm.value)\" [nzLayout]=\"'vertical'\">\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"name\" nzRequired>name</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"name\" id=\"name\">\r\n                <div *ngIf=\"name.invalid && (name.dirty || name.touched)\">\r\n                  <nz-form-explain *ngIf=\"name.errors.required\">required</nz-form-explain>\r\n                  <nz-form-explain *ngIf=\"name.errors.pattern\">must match pattern [-_a-zA-Z0-9]</nz-form-explain>\r\n                </div>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"email\">email</nz-form-label>\r\n              <nz-form-control>\r\n                <nz-select formControlName=\"email\">\r\n                  <nz-option [nzLabel]=\"'Select a verified email to display'\" [nzValue]=\"''\"></nz-option>\r\n                  <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\r\n                </nz-select>\r\n                <nz-form-explain>You can manage verified email addresses in your\r\n                  <a (click)=\"active=3\">email settings</a>.</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"bio\">Bio</nz-form-label>\r\n              <nz-form-control>\r\n                <textarea nz-input formControlName=\"bio\" id=\"bio\" placeholder=\"Tell us a little bit about yourself\"></textarea>\r\n                <nz-form-explain>You can\r\n                  <strong>@mention</strong> other users and organizations to link to them.</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"url\">URL</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"url\" id=\"url\">\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"company\">Company</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"company\" id=\"company\">\r\n                <nz-form-explain>You can\r\n                  <strong>@mention</strong> your company's GitHub organization to link it.</nz-form-explain>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item class=\"border-top-1 mt-md pt-md\">\r\n              <nz-form-label nzFor=\"location\">Location</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input formControlName=\"location\" id=\"location\">\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-control>\r\n                <button nz-button [nzType]=\"'primary'\" [disabled]=\"profileForm.invalid\">Update profile</button>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </form>\r\n        </nz-col>\r\n        <nz-col [nzSpan]=\"8\">\r\n          <h4>Profile picture</h4>\r\n          <img src=\"./assets/tmp/img/avatar.jpg\" style=\"width: 100%;\">\r\n          <nz-upload nzAction=\"https://jsonplaceholder.typicode.com/posts/\" class=\"d-block mt-md text-center\">\r\n            <button nz-button>Upload new picture</button>\r\n          </nz-upload>\r\n        </nz-col>\r\n      </nz-row>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"Change password\" *ngIf=\"active===2\">\r\n      <nz-row [nzGutter]=\"64\">\r\n        <nz-col [nzSpan]=\"16\">\r\n          <form nz-form [nzLayout]=\"'vertical'\">\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"old_password\" nzRequired>Old password</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input [(ngModel)]=\"pwd.old_password\" name=\"old_password\" id=\"old_password\" type=\"password\" required>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label nzFor=\"new_password\" nzRequired>New password</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input [(ngModel)]=\"pwd.new_password\" name=\"new_password\" id=\"new_password\" type=\"password\" required>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-label nzRequired nzFor=\"confirm_new_password\">Confirm new password</nz-form-label>\r\n              <nz-form-control>\r\n                <input nz-input [(ngModel)]=\"pwd.confirm_new_password\" name=\"confirm_new_password\" id=\"confirm_new_password\" type=\"password\"\r\n                  required>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n            <nz-form-item>\r\n              <nz-form-control>\r\n                <button nz-button (click)=\"pwdSave()\" [nzType]=\"'primary'\">Update profile</button>\r\n                <a class=\"pl-sm\" [routerLink]=\"['/forget']\">I forgot my password</a>\r\n              </nz-form-control>\r\n            </nz-form-item>\r\n          </form>\r\n        </nz-col>\r\n      </nz-row>\r\n      <h2 class=\"py-md mt-lg border-bottom-1\">Change username</h2>\r\n      <p class=\"py-sm\">Changing your username can have unintended side effects.</p>\r\n      <button nz-button (click)=\"msg.info('to change username page')\">\r\n        <span>Change username</span>\r\n      </button>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"Email\" *ngIf=\"active===3\">\r\n      <nz-row class=\"border-1 p-md rounded-sm\" [nzType]=\"'flex'\" [nzJustify]=\"'center'\" [nzAlign]=\"'middle'\">\r\n        <nz-col [nzSpan]=\"12\">\r\n          cipchk@qq.com\r\n          <nz-tooltip [nzTitle]=\"'This email will be used for account-related notifications (e.g. account changes, password resets, billing receipts) as well as any web-based GitHub operations (e.g. edits and merges).'\">\r\n            <span nz-tooltip>\r\n              <nz-tag [nzColor]=\"'#28a745'\">Primary</nz-tag>\r\n            </span>\r\n          </nz-tooltip>\r\n          <nz-tooltip [nzTitle]=\"'This email will be used as the \\'from\\' address for web-based GitHub operations.'\">\r\n            <span nz-tooltip>\r\n              <nz-tag [nzColor]=\"'#959da5'\">Public</nz-tag>\r\n            </span>\r\n          </nz-tooltip>\r\n        </nz-col>\r\n        <nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n          <i nz-icon type=\"delete\" class=\"text-lg\"></i>\r\n        </nz-col>\r\n      </nz-row>\r\n      <h4 class=\"pt-md mb-sm\">Add email address</h4>\r\n      <input nz-input style=\"width: 200px;\" class=\"mr-sm\">\r\n      <button nz-button (click)=\"msg.info('add')\">Add</button>\r\n      <h4 class=\"border-top-1 py-md mt-md\">Primary email address</h4>\r\n      <p class=\"mb-md\">cipchk@qq.com will be used for account-related notifications and for web-based GitHub operations (e.g. edits and merges).</p>\r\n      <nz-select [(ngModel)]=\"primary_email\" class=\"mr-sm\">\r\n        <nz-option [nzLabel]=\"'cipchk@qq.com'\" [nzValue]=\"'cipchk@qq.com'\"></nz-option>\r\n      </nz-select>\r\n      <button nz-button (click)=\"msg.info('save')\">Save</button>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"Notifications\" *ngIf=\"active===4\">\r\n      <p class=\"pb-md\">Choose how you receive notifications. These notification settings apply to the repositories you’re watching.</p>\r\n      <nz-list nzBordered>\r\n        <nz-list-item class=\"d-block\">\r\n          <h4>Automatically watch repositories</h4>\r\n          <p class=\"py-sm\">When you’re given push access to a repository, automatically receive notifications for it.</p>\r\n          <label nz-checkbox [ngModel]=\"true\">Automatically watch</label>\r\n        </nz-list-item>\r\n        <nz-list-item class=\"d-block\">\r\n          <h4>Participating</h4>\r\n          <p class=\"py-sm\">Notifications for the conversations you are participating in, or if someone cites you with an @mention.</p>\r\n          <label nz-checkbox [ngModel]=\"true\">Email</label>\r\n          <label nz-checkbox [ngModel]=\"true\">Web</label>\r\n        </nz-list-item>\r\n        <nz-list-item class=\"d-block\">\r\n          <h4>Watching</h4>\r\n          <p class=\"py-sm\">Notifications for all repositories or conversations you’re watching.</p>\r\n          <label nz-checkbox [ngModel]=\"true\">Email</label>\r\n          <label nz-checkbox [ngModel]=\"true\">Web</label>\r\n        </nz-list-item>\r\n      </nz-list>\r\n    </nz-card>\r\n    <nz-card class=\"ant-card__body-nopadding\" *ngIf=\"active===5\" [nzBordered]=\"false\">\r\n      <div class=\"border rounded-md text-center p-lg bg-grey-lighter\">\r\n        <h3>No OAuth applications</h3>\r\n        <p class=\"py-md\">OAuth applications are used to access the GitHub API. Read the docs to find out more.</p>\r\n        <button nz-button (click)=\"msg.info('Register a new application')\" [nzType]=\"'primary'\">\r\n          Register a new application\r\n        </button>\r\n      </div>\r\n    </nz-card>\r\n    <nz-card nzTitle=\"Personal access tokens\" [nzExtra]=\"extra\" *ngIf=\"active===6\">\r\n      <ng-template #extra>\r\n        <button nz-button (click)=\"msg.info('Generate new token')\" [nzSize]=\"'small'\">Generate new token</button>\r\n        <button nz-button (click)=\"msg.info('Revoke all')\" [nzSize]=\"'small'\" [nzType]=\"'danger'\" class=\"ml-sm\">Revoke all</button>\r\n      </ng-template>\r\n      <p>Tokens you have generated that can be used to access the GitHub API.</p>\r\n      <nz-list nzBordered class=\"mt-sm\">\r\n        <nz-list-item>\r\n          <nz-col [nzSpan]=\"12\">\r\n            <strong>octotree</strong> — repo\r\n          </nz-col>\r\n          <nz-col [nzSpan]=\"12\" class=\"text-right\">\r\n            Last used within the last day\r\n            <nz-button-group>\r\n              <button nz-button>Edit</button>\r\n              <button nz-button [nzType]=\"'danger'\">Delete</button>\r\n            </nz-button-group>\r\n          </nz-col>\r\n        </nz-list-item>\r\n      </nz-list>\r\n    </nz-card>\r\n  </nz-col>\r\n</nz-row>\r\n"

/***/ }),

/***/ "./src/app/routes/extras/settings/settings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/routes/extras/settings/settings.component.ts ***!
  \**************************************************************/
/*! exports provided: ExtrasSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasSettingsComponent", function() { return ExtrasSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ExtrasSettingsComponent = /** @class */ (function () {
    function ExtrasSettingsComponent(fb, msg) {
        this.msg = msg;
        this.active = 1;
        this.pwd = {
            old_password: '',
            new_password: '',
            confirm_new_password: '',
        };
        // Email
        this.primary_email = 'cipchk@qq.com';
        this.profileForm = fb.group({
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[-_a-zA-Z0-9]{4,20}$"),
                ]),
            ],
            email: '',
            bio: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(160)],
            url: '',
            company: '',
            location: '',
        });
    }
    Object.defineProperty(ExtrasSettingsComponent.prototype, "name", {
        get: function () {
            return this.profileForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    ExtrasSettingsComponent.prototype.profileSave = function (event, value) {
        console.log('profile value', value);
    };
    ExtrasSettingsComponent.prototype.pwdSave = function () {
        if (!this.pwd.old_password) {
            return this.msg.error('invalid old password');
        }
        if (!this.pwd.new_password) {
            return this.msg.error('invalid new password');
        }
        if (!this.pwd.confirm_new_password) {
            return this.msg.error('invalid confirm new password');
        }
        console.log('pwd value', this.pwd);
    };
    ExtrasSettingsComponent.prototype.ngOnInit = function () {
        this.profileForm.patchValue({
            name: 'cipchk',
            email: 'cipchk@qq.com',
        });
    };
    ExtrasSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-extras-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/routes/extras/settings/settings.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_1__["NzMessageService"]])
    ], ExtrasSettingsComponent);
    return ExtrasSettingsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=extras-extras-module.js.map