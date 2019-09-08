import {Injectable} from '@angular/core';
import {LatLngExpression} from 'leaflet';
import {Observable, Subject} from "rxjs";
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

export class Marker {
    id: number;
    name: String;
    description: String;
    location: LatLngExpression
}

@MultiWindowService<UpdateMsMrMarkerService>()
@Injectable()
export class UpdateMsMrMarkerService {

    private subject = new Subject<any>();

    // type: 'Meaurements' / 'Meterings'

    // devId': devId
    // unitId: unitId,

    // devInfo: devInfo
    // unitInfo: unitInfo
    // value: measurement value

    public setMsMarker(type: string, layerType: string, mkList: any) {
        this.subject.next({
            type: type,
            layerType: layerType,
            mkList: mkList
        });
    }

    getMsMarketInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
