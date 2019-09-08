import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

@MultiWindowService<UpdateBreadCrumbService>()
@Injectable()
export class UpdateBreadCrumbService {

    private subject = new Subject<any>();

    /**
     * Set Current Selected Item
     * @param searchInfo : {sub:sub, bay:bay, dev:dev}
     */

    public setBDInfo(searchInfo: any) {
        this.subject.next(searchInfo);
    }

    getBDInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
