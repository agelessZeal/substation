import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollMovingService {

  private subject = new Subject<any>();

    /**
     * Notify Scroll Movement
     * @param direction // true=> left - > right, falseL right->left;
     * @param elem // HTML element
     */
  public setMovedScroll(direction:boolean,elem:string) {
    this.subject.next({direction:direction,elem:elem});
  }

  getMovedScroll(): Observable<any> {
    return this.subject.asObservable();
  }
}
