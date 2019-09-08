import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDeviceService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating Device table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Device mrid
     * @param newDevice //New Device Data
     */
  public setDeviceInfo(mode: boolean, mrid: string, newDevice: any) {
    this.subject.next({mode: mode, mrid: mrid, newDevice:newDevice });
  }

  getDeviceInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
