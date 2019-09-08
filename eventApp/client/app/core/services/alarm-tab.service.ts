import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

@MultiWindowService<AlarmTabService>()
@Injectable()
export class AlarmTabService {

    private subject = new Subject<any>();
    public setTabMode(authInfo: any) {
        this.subject.next(authInfo);
    }
    getTabMode(): Observable<any> {
        return this.subject.asObservable();
    }
}
