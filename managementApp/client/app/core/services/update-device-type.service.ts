import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDeviceTypeService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating device type table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Device Type mrid
     * @param newDeviceType //New Device Type Data
     */
  public setDeviceTypeInfo(mode: boolean, mrid: string, newDeviceType: any) {
    this.subject.next({mode: mode, mrid: mrid, newDeviceType:newDeviceType });
  }
  getDeviceTypeInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
