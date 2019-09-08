import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeteringFormService {

  private subject = new Subject<any>();

    /**
     * Communication between substation table and measurement form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
  public setMeteringFormInfo(formMode: boolean, formValue: any,showMode:boolean, devId: string) {
    this.subject.next({type: formMode, value: formValue,showMode:showMode, deviceId:devId});
  }

  getMeteringFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
