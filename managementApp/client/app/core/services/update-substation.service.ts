import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateSubstationService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating substation table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Substation mrid
     * @param newSub //New Substation Data
     */
  public setSubstationInfo(mode: boolean, mrid: string, newSub: any) {
    this.subject.next({mode: mode, mrid: mrid, newSub:newSub });
  }
  getSubstationInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
