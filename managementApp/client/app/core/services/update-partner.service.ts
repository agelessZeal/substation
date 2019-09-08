import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatePartnerService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating Partner table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Partner mrid
     * @param newPartner //New Partner Data
     */
  public setPartnerInfo(mode: boolean, mrid: string, newPartner: any) {
    this.subject.next({mode: mode, mrid: mrid, newPartner:newPartner });
  }
  getPartnerInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
