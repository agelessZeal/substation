import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExpandingMsMtService {

    private subject = new Subject<any>();

    /**
     * Notification service for expanding Device Measurement table
     * @param mode // true=> Expanding , false=>Collapse
     * @param id //Parent Device Id
     * @param name //Component Identifier .. measurement/metering
     */
    public setDeviceMsMtStatus(mode: boolean, id: string, name: string) {
        this.subject.next({mode: mode, id: id,name: name});
    }

    getDeviceMsMtStatusInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
