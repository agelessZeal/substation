import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

export class Marker {
    id: number;
    name: String;
    description: String;
    position: LatLngExpression
}
@MultiWindowService<DataService>()
@Injectable()
export class DataService {
    markers: Marker[] = [
        {
            id: 1,
            name: 'Marker name 1',
            description: 'descr 1',
            position: [ 46.879966, -121.726909 ]
        },
        {
            id: 2,
            name: 'Marker name 2',
            description: 'descr 2',
            position: [ 46.000966, -123.726909 ]
        }
    ];

    getMarkers() {
        return this.markers;
    }

    getMarkerById(id) {
        return this.markers.filter((entry) => entry.id === id)[0];
    }

    changeMarkerData() {
        for(let marker of this.markers) {
            // just add a random number at the end
            marker.description = `Some random value ${Math.random() * 100}`;
        }
    }

}
