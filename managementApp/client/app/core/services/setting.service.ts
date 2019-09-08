import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    private subject = new Subject<any>();
    public setSettingInfo(tblName: string, settingKey: string, settingValue: any) {
        this.subject.next({tbl: tblName, key: settingKey, value: settingValue});
    }
    getSettingInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
