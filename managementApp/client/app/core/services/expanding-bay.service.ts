import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpandingBayService {

  private subject = new Subject<any>();

    /**
     * Notification service for expanding Bay table
     * @param mode // true=> Expanding , false=>Collapse
     * @param substationId //Parent Substation Id
     */
  public setBayStatus(mode: boolean, substationId: string) {
    this.subject.next({mode: mode, substationId: substationId});
  }

  getBayStatusInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
