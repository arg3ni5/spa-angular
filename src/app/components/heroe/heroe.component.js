"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var HeroeComponent = /** @class */ (function () {
    function HeroeComponent(activatedRoute, _heroesService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this._heroesService = _heroesService;
        this.heroe = {};
        this.activatedRoute.params.subscribe(function (params) {
            _this.heroe = _this._heroesService.getHeroe(params['id']);
            console.log(_this.heroe);
        });
    }
    HeroeComponent.prototype.ngOnInit = function () {
    };
    HeroeComponent = __decorate([
        core_1.Component({
            selector: 'app-heroe',
            templateUrl: './heroe.component.html',
            styles: []
        })
    ], HeroeComponent);
    return HeroeComponent;
}());
exports.HeroeComponent = HeroeComponent;
