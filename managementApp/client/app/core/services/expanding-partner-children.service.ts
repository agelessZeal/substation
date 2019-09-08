import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandingPartnerChildrenService {

  private subject = new Subject<any>();

    /**
     * Notification service for expanding Contact table
     * @param mode // true=> Expanding , false=>Collapse
     * @param data //parent => children
     * @param name //component name [contacts, addresses, substations]
     */
  public setPartnerChildrenStatus(mode: boolean, data: any, name: string) {
    this.subject.next({mode: mode, data: data,name:name});
  }

  getPartnerChildrenInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
