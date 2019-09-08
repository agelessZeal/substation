import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BayFormService {

  private subject = new Subject<any>();

    /**
     * Communication between Bay table and Bay form element
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param subMrId // Substation MrID
     * @param formValue //Selected form data
     */
  public setBayFormInfo(formMode: boolean, subMrId: string, formValue: Bay) {
    this.subject.next({type: formMode, subMrId:subMrId, value: formValue});
  }

  getBayFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
