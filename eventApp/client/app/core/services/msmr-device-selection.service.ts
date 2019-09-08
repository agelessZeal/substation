import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

@MultiWindowService<MsMrDeviceSelectionService>()
@Injectable()
export class MsMrDeviceSelectionService {

    private subject = new Subject<any>();
    public setDevList(type: string, unitList: any, devIdList: any, timeInfo = null) {
        this.subject.next({type:type, unitList: unitList, devIdList: devIdList, timeInfo: timeInfo});
    }
    getDevList(): Observable<any> {
        return this.subject.asObservable();
    }
}
