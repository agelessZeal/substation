import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DeviceMsMtFormService {

    private subject = new Subject<any>();

    /**
     * Communication between Device measurement/metering table and form element
     * @param formMode // true=> Add mode, false=>Edit mode
     * @param formValue //Selected form data
     * @param name // component Identifier
     * measurement=> service between device measurement and form
     * metering=> service between device metering and form
     */
    public setDeviceMsMtFormInfo(formMode: boolean, formValue: any, name: string) {
        this.subject.next({type: formMode, value: formValue,name:name});
    }

    getDeviceMsMtFormInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
