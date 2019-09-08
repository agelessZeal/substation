import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnerFormService {

  private subject = new Subject<any>();

    /**
     * Communication between partner table and partner form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
  public setPartnerFormInfo(formMode: boolean, formValue: Partner,showMode:boolean) {
    this.subject.next({type: formMode, value: formValue,showMode:showMode});
  }

  getPartnerFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
