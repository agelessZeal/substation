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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ngx_leaflet_1 = require("@asymmetrik/ngx-leaflet");
var L = require("leaflet");
require("leaflet.markercluster");
var LeafletMarkerClusterDirective = /** @class */ (function () {
    function LeafletMarkerClusterDirective(leafletDirective) {
        // Hexbin data binding
        this.markerData = [];
        // Fired when the marker cluster is created
        this.markerClusterReady = new core_1.EventEmitter();
        this.leafletDirective = new ngx_leaflet_1.LeafletDirectiveWrapper(leafletDirective);
    }
    LeafletMarkerClusterDirective.prototype.ngOnInit = function () {
        this.leafletDirective.init();
        var map = this.leafletDirective.getMap();
        this.markerClusterGroup = L.markerClusterGroup(this.markerClusterOptions);
        // Fire the ready event
        this.markerClusterReady.emit(this.markerClusterGroup);
        // Add the marker cluster group to the map
        this.markerClusterGroup.addTo(map);
        // Set the data
        this.setData(this.markerData);
    };
    LeafletMarkerClusterDirective.prototype.ngOnChanges = function (changes) {
        // Set the new data
        if (changes['markerData']) {
            this.setData(this.markerData);
        }
    };
    LeafletMarkerClusterDirective.prototype.setData = function (layers) {
        if (null != this.markerClusterGroup) {
            this.markerClusterGroup.clearLayers();
            this.markerClusterGroup.addLayers(layers);
        }
    };
    __decorate([
        core_1.Input('leafletMarkerCluster'),
        __metadata("design:type", Array)
    ], LeafletMarkerClusterDirective.prototype, "markerData", void 0);
    __decorate([
        core_1.Input('leafletMarkerClusterOptions'),
        __metadata("design:type", Object)
    ], LeafletMarkerClusterDirective.prototype, "markerClusterOptions", void 0);
    __decorate([
        core_1.Output('leafletMarkerClusterReady'),
        __metadata("design:type", core_1.EventEmitter)
    ], LeafletMarkerClusterDirective.prototype, "markerClusterReady", void 0);
    LeafletMarkerClusterDirective = __decorate([
        core_1.Directive({
            selector: '[leafletMarkerCluster]',
        }),
        __metadata("design:paramtypes", [ngx_leaflet_1.LeafletDirective])
    ], LeafletMarkerClusterDirective);
    return LeafletMarkerClusterDirective;
}());
exports.LeafletMarkerClusterDirective = LeafletMarkerClusterDirective;
//# sourceMappingURL=leaflet-markercluster.directive.js.map