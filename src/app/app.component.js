"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_constant_1 = require("./shared/app.constant");
var AppComponent = (function () {
    function AppComponent() {
        this.filter_text = app_constant_1.AppConstant.CharecterList.FILTER_TEXT;
        this.typed_text = app_constant_1.AppConstant.CharecterList.TYPED_TEXT;
        this.header = 'Practice Session';
    }
    AppComponent.prototype.showInHeader = function (event) {
        this.youHaveClicked = event;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map