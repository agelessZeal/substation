import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceFormService {

  private subject = new Subject<any>();

    /**
     * Communication between Bay table and Bay form element
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param bayMrId // Bay MrID
     * @param formValue //Selected form data
     */
  public setDeviceFormInfo(formMode: boolean, bayMrId: string, formValue: Device) {
    this.subject.next({type: formMode, bayMrId:bayMrId, value: formValue});
  }

  getDeviceFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
