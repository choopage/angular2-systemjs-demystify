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
var core_1 = require('angular2/core');
var head_transclusion_component_1 = require('./head-transclusion.component');
var TransclusionComponent = (function () {
    function TransclusionComponent() {
    }
    TransclusionComponent = __decorate([
        core_1.Component({
            selector: 'transclusion-component',
            template: "\n        <div trans header=\"Jek Bao Choo\">\n            This is from Transclusion Component\n            Remember that the header input is header, not [header]\n        </div>\n    ",
            directives: [head_transclusion_component_1.HeadTransclusionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TransclusionComponent);
    return TransclusionComponent;
}());
exports.TransclusionComponent = TransclusionComponent;
