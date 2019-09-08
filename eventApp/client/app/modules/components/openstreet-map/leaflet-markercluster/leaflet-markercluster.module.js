"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var leaflet_markercluster_directive_1 = require("./leaflet-markercluster.directive");
var LeafletMarkerClusterModule = /** @class */ (function () {
    function LeafletMarkerClusterModule() {
    }
    LeafletMarkerClusterModule_1 = LeafletMarkerClusterModule;
    LeafletMarkerClusterModule.forRoot = function () {
        return { ngModule: LeafletMarkerClusterModule_1, providers: [] };
    };
    var LeafletMarkerClusterModule_1;
    LeafletMarkerClusterModule = LeafletMarkerClusterModule_1 = __decorate([
        core_1.NgModule({
            exports: [leaflet_markercluster_directive_1.LeafletMarkerClusterDirective],
            declarations: [leaflet_markercluster_directive_1.LeafletMarkerClusterDirective]
        })
    ], LeafletMarkerClusterModule);
    return LeafletMarkerClusterModule;
}());
exports.LeafletMarkerClusterModule = LeafletMarkerClusterModule;
//# sourceMappingURL=leaflet-markercluster.module.js.map