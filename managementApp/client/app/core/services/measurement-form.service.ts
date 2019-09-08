import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeasurementFormService {

  private subject = new Subject<any>();

    /**
     * Communication between substation table and measurement form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
  public setMeasurementFormInfo(formMode: boolean, formValue: MeasurementType,showMode:boolean) {
    this.subject.next({type: formMode, value: formValue,showMode:showMode});
  }

  getMeasurementFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
