import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';
import {Observable, Subject} from "rxjs";
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

export class Marker {
    id: number;
    name: String;
    description: String;
    location: LatLngExpression
}

@MultiWindowService<UpdateMarkerService>()
@Injectable()
export class UpdateMarkerService {

    private subject = new Subject<any>();

    /**
     * Draw Maker List on the openstreet map
     * @param type //'event' = >Events Data, 'alarm' => Alarm Data
     * @param mkList
     */
    public drawMks(type: string, mkList: Array<any>) {
        this.subject.next({type:type, mkList:mkList});
    }
    getMksInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
