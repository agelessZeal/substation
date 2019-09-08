import {Component, OnInit} from '@angular/core';
import {forkJoin} from 'rxjs';
import {HttpServiceHelper} from '../../../core/http/HttpServiceHelper';
import {AuthService} from '../../../core/services/auth.service';
import {MsMrDeviceSelectionService} from "../../../core/services/msmr-device-selection.service";
import {UpdateMsMrMarkerService} from "../../../core/services/update-msmr-marker.service";
import * as moment from 'moment';

declare var config: any;

@Component({
    selector: 'app-metering',
    templateUrl: './metering.component.html',
    styleUrls: ['./metering.component.css']
})
export class MeteringComponent implements OnInit {
    accessTokenSub: string;
    apiBaseURL: string;
    devDetailList: any;
    tsInfo: any;

    mrList: any;
    devIdList: any[];
    pollingTs: number;

    constructor(private authService: AuthService,
                private msmrLayerService: MsMrDeviceSelectionService,
                private httpService: HttpServiceHelper,
                private updateMsMarkerService: UpdateMsMrMarkerService) {
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;
        this.tsInfo = {};
        this.mrList = [];
        this.devIdList = [];

        this.pollingTs = config.client_info.measurement_polling_time;
    }

    ngOnInit() {
        this.msmrLayerService.getDevList().subscribe((info: any) => {
            if(info.type == 'mr') {
                this.mrList = info.unitList;
                this.devIdList = info.devIdList;
                this.tsInfo = info.timeInfo;
                this.getMeteringData();
            }
        });
    }

    async getMeteringData() {
        let mrURLList = [];
        let i, j;
        let tsInfoQuery = `?numberOf=1&startDate=${this.tsInfo.start}&timeSpan=${this.tsInfo.span}`;

        for(j = 0; j<this.mrList.length; j++) {
            for(i = 0; i<this.devIdList.length;i++) {
                mrURLList.push(`${this.apiBaseURL}/meterings/${this.mrList[j].id}/device/${this.devIdList[i].mrid}${tsInfoQuery}&devmsorder=${i}-${j}`);
            }
        }
        let mrlayers:any = {};
        for (i = 0; i<mrURLList.length; i++) {
            let devmsorder = mrURLList[i].split('devmsorder=')[1];
            let devid = devmsorder.split('-')[0];
            let mrid = devmsorder.split('-')[1];
            let layerMkInfo = {dev: this.devIdList[devid], unit: this.mrList[mrid], value:null};
            try {
                let results = await this.httpService.httpGetRequestWithHeader(this.accessTokenSub, mrURLList[i]).toPromise();
                let dataObj:any;
                dataObj = results.body.data;
                if(dataObj.length>0) {
                    layerMkInfo.value = dataObj[dataObj.length-1].value;
                }
            } catch (e) {
                console.log('error', e);
            }
            let keyName = this.mrList[mrid].id;
            if(mrlayers.hasOwnProperty(keyName)){
                mrlayers[keyName].push(layerMkInfo);
            } else {
                mrlayers[keyName] = [layerMkInfo]
            }
        }
        for(let key in mrlayers) {
            if(mrlayers.hasOwnProperty(key)) {
                this.updateMsMarkerService.setMsMarker('Meterings', key, mrlayers[key]);
            }
        }
        // this.refreshMetering();
    }

    refreshMetering() {
        let self = this;
        setTimeout(function () {
            self.getMeteringData();
        },self.pollingTs * 1000)
    }

}
