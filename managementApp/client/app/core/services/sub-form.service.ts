import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubFormService {

  private subject = new Subject<any>();

    /**
     * Communication between substation table and substation form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
  public setSubFormInfo(formMode: boolean, formValue: Substation,showMode:boolean) {
    this.subject.next({type: formMode, value: formValue,showMode:showMode});
  }

  getSubFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
