import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeFormService {

  private subject = new Subject<any>();

    /**
     * Communication between substation table and device type form element
     * @param showMode // true=> show, false=>hidden
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     */
  public setDeviceTypeFormInfo(formMode: boolean, formValue: DeviceType,showMode:boolean) {
    this.subject.next({type: formMode, value: formValue,showMode:showMode});
  }

  getDeviceTypeFormInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
