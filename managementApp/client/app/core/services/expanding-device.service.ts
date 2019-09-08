import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandingDeviceService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating Device table
     * @param mode // true=> Expanding , false=>Collapse
     * @param bayId //Parent Bay Id
     */
  public setDeviceStatus(mode: boolean, bayId: string) {
    this.subject.next({mode: mode, bayId: bayId});
  }

  getDeviceStatusInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
