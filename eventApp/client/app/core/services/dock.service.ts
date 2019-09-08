import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {MultiWindowService} from "@embedded-enterprises/ng6-golden-layout";

@MultiWindowService<DockService>()

@Injectable()
export class DockService {
    constructor() {
        console.log(`Create FooService`);
    }
}
