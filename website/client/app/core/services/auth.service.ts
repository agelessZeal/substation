import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subject = new Subject<any>();
    public setAuthInfo(authInfo: any) {
        this.subject.next(authInfo);
    }
    getAuthInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
