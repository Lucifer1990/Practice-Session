"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_constant_1 = require("../shared/app.constant");
var charecter_list_service_1 = require("./charecter-list.service");
var CharecterList = (function () {
    function CharecterList(_CharecterListService) {
        this._CharecterListService = _CharecterListService;
        this.clickedValue = new core_1.EventEmitter();
        this.header_title = app_constant_1.AppConstant.CharecterList.HEADER_TITLE;
        this.no_records = app_constant_1.AppConstant.CharecterList.NO_RECORDS;
    }
    CharecterList.prototype.ngOnInit = function () {
        var _this = this;
        this._CharecterListService.getCharecters()
            .subscribe(function (response) {
            _this.charecter_list = response;
        }, function (error) {
        }, function () {
        });
    };
    CharecterList.prototype.ngOnChanges = function () {
        console.log(this.seriesName);
    };
    CharecterList.prototype.showInHeader = function (name) {
        this.clickedValue.emit(name);
    };
    return CharecterList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CharecterList.prototype, "seriesName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CharecterList.prototype, "clickedValue", void 0);
CharecterList = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'charecter-list',
        templateUrl: 'charecter-list.component.html',
        styleUrls: ['charecter-list.component.scss']
    }),
    __metadata("design:paramtypes", [charecter_list_service_1.CharecterListService])
], CharecterList);
exports.CharecterList = CharecterList;
//# sourceMappingURL=charecter-list.component.js.map