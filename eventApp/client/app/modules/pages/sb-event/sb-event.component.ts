import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SplitComponent} from "angular-split";
import {MapResizeService} from "../../../core/services/map-resize.service";
import {GlOnClose, GoldenLayoutConfiguration, GoldenLayoutService} from "@embedded-enterprises/ng6-golden-layout";


@Component({
    selector: 'app-sb-event',
    templateUrl: './sb-event.component.html',
    styleUrls: ['./sb-event.component.css']
})
export class SbEventComponent implements OnInit, OnDestroy, GlOnClose {

    // @ViewChild('splitEl') splitEl: SplitComponent;
    constructor() {
    }

    ngOnInit() {
        (window.opener || window).console.log(`ngoninit`);
    }

    public ngOnDestroy(): void {
        (window.opener || window).console.log(`ngondestroy`);
    }

    ngAfterViewInit() {
        // this.splitEl.dragProgress$.subscribe(x => {
        //     this.mapResizeService.setMapResizeInfo(x);
        // });
    }

    public glOnClose(): Promise<void> {
        console.log(`glOnClose`);
        return new Promise((resolve, reject) => {
            console.log(`glonclose promise`);
            setTimeout(() => {
                console.log(`resolving`);
                resolve()
            }, 1000);
        });
    }
}
