import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private subject = new Subject<any>();

    /**
     * Notification service for updating substation table
     * @param elem // Navigation element, [sub-list, sub-form, bay-list, bay-form, dev-list, dev-form]
     * @param st // true => show, false =>hide
     * @param name // element id
     */
  public setNavInfo(elem: string,st:boolean, name: string) {
    this.subject.next({elem:elem, st:st,name:name});
  }
  getNavInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
