import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDeviceMsMrService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating device measurement/metering table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param id //Old item id
     * @param newItem //New Item Data
     * @param name //Component Identifier , measurement/metering
     */
  public setDeviceMsMrInfo(mode: boolean, id: string, newItem: any, name: string) {
    this.subject.next({mode: mode, id: id, newItem:newItem,name:name });
  }

  getDeviceMsMrInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
