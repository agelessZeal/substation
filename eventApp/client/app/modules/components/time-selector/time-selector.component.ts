import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-time-selector',
    templateUrl: './time-selector.component.html',
    styleUrls: ['./time-selector.component.css']
})
export class TimeSelectorComponent implements OnInit {
    @Output() onSetPeriod = new EventEmitter();
    @Input() isEnabledSetBtn: boolean;
    startDate: Date;
    rH: string;
    rM: string;
    rD: string;
    rS: string;

    constructor() {
        this.startDate = new Date(Date.now() - 432e5);
        this.rD = '0';
        this.rH = '1';
        this.rM = '0';
        this.rS = '0';
    }

    ngOnInit() {
        this.onSetTimeBtn();
    }

    onSetTimeBtn() {
        if(parseInt(this.rD)<0) {
            this.rD = '00';
        }
        if (parseInt(this.rH) > 23 || parseInt(this.rH) < 0) {
            this.rH = '00';
        }
        if (this.rH.toString().length<2) {
            this.rH = '0' + this.rH;
        }
        if (parseInt(this.rM) > 59 || parseInt(this.rM) < 0) {
            this.rM = '00';
        }
        if (this.rM.toString().length<2) {
            this.rM = '0' + this.rM;
        }
        if (parseInt(this.rS) > 59 || parseInt(this.rS) < 0) {
            this.rS = '00';
        }
        if (this.rS.toString().length<2) {
            this.rS = '0' + this.rS;
        }
        let totalTs = parseInt(this.rS) + parseInt(this.rM) * 60 + parseInt(this.rH) * 3600 + parseInt(this.rD) * 86400;
        let startdt = new Date(this.startDate.getTime());
        let enddt = new Date(this.startDate.getTime() + totalTs * 1000);
        let startdtUTC = moment.utc(startdt).format();
        let enddtUTC = moment.utc(enddt).format();
        let tsSpan = `${this.rD}:${this.rH}:${this.rM}:${this.rS}`;
        this.onSetPeriod.emit({start:startdtUTC, span: tsSpan, end:enddtUTC});
    }


    onChangeToDate($ev) {
        console.log(moment.utc(this.startDate).format());
    }

}
