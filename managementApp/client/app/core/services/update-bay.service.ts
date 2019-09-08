import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateBayService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating Bay table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param mrid //Old Bay mrid
     * @param newBay //New Bay Data
     */
  public setBayInfo(mode: boolean, mrid: string, newBay: any) {
    this.subject.next({mode: mode, mrid: mrid, newBay:newBay });
  }

  getBayInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
