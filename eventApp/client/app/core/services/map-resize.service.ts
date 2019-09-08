import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

@MultiWindowService<MapResizeService>()
@Injectable()
export class MapResizeService {

    private subject = new Subject<any>();
    public setMapResizeInfo(resizeInfo: any) {
        this.subject.next(resizeInfo);
    }
    getMapResizeInfo(): Observable<any> {
        return this.subject.asObservable();
    }
}
