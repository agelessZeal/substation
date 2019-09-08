import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateMeasurementTypeService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating measurement table
     * @param mode // true=> Add mode, false=>Edit mode
     * @param id //Old Measurement id
     * @param newMsType //New Measurement Data
     */
  public setMeasurementInfo(mode: boolean, id: string, newMsType: any) {
    this.subject.next({mode: mode, id: id, newMsType:newMsType });
  }
  getMeasurementTypeInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
