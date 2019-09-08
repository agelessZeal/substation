import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReadIcdService {

    private subject = new Subject<any>();

    /**
     * Communication between Bay form and child component
     * @param bayId // Bay MrID
     */
    public setBayInfo(bayId: string) {
        this.subject.next({bayId: bayId});
    }

    getBayInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
