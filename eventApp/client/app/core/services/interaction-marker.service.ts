import { Injectable } from '@angular/core';
import { LatLngExpression} from 'leaflet';
import {Observable, Subject} from "rxjs";
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

@MultiWindowService<InteractionMarkerService>()
@Injectable()
export class InteractionMarkerService {

    private subject = new Subject<any>();

    /**
     * Select Marker and Select Row
     * @param type //'event' = >Events Data, 'alarm' =>Active Alarm Data, 'in-alarm'=>InActive Alarm
     * @param mkInfo
     * @param is_selected //True => select, False => Deselect Event
     */
    public setMarkerInfo(type: string, mkInfo: any, is_selected: boolean) {
        this.subject.next({type:type, mkInfo:mkInfo, is_selected:is_selected});
    }
    getMarkerInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
