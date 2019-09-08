import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreeToggleService {

  private subject = new Subject<any>();

  public setToggle(toggledTree: boolean) {
    this.subject.next(toggledTree);
  }

  getToggleInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
