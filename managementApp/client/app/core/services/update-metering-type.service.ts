import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMeteringTypeService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating device metering table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param id //Old Measurement id
     * @param newMtType //New Metering Data
     */
  public setMeteringInfo(mode: boolean, id: string, newMtType: any) {
    this.subject.next({mode: mode, id: id, newMtType:newMtType });
  }
  getMeteringTypeInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
