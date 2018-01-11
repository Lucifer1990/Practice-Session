"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var Http_1 = require("@angular/Http");
var app_component_1 = require("./app.component");
var charecter_list_component_1 = require("../app/charecter-list/charecter-list.component");
var byTen_pipe_1 = require("../app/shared/byTen.pipe");
var charecter_list_service_1 = require("../app/charecter-list/charecter-list.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            Http_1.HttpModule
        ],
        declarations: [
            app_component_1.AppComponent,
            charecter_list_component_1.CharecterList,
            byTen_pipe_1.ByTen
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [charecter_list_service_1.CharecterListService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map