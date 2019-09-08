import {Component, OnInit} from '@angular/core';
import {forkJoin} from 'rxjs';
import {HttpServiceHelper} from '../../../core/http/HttpServiceHelper';
import {AuthService} from '../../../core/services/auth.service';
import {MsMrDeviceSelectionService} from "../../../core/services/msmr-device-selection.service";
import {UpdateMsMrMarkerService} from "../../../core/services/update-msmr-marker.service";
import {async} from "rxjs-compat/scheduler/async";

declare var config: any;

@Component({
    selector: 'app-measurement',
    templateUrl: './measurement.component.html',
    styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {

    accessTokenSub: string;
    apiBaseURL: string;
    devDetailList: any;

    msList: any;
    devIdList: any[];
    pollingTs: number;

    constructor(private authService: AuthService,
                private msmrLayerService: MsMrDeviceSelectionService,
                private httpService: HttpServiceHelper,
                private updateMsMarkerService: UpdateMsMrMarkerService) {
        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;

        this.msList = [];
        this.devIdList = [];

        this.pollingTs = config.client_info.measurement_polling_time;
    }

    ngOnInit() {
        this.msmrLayerService.getDevList().subscribe((info: any) => {
            if (info.type == 'ms') {
                this.msList = info.unitList;
                this.devIdList = info.devIdList;
                this.getMeteringData();
            }
        });
    }

    async getMeteringData() {
        let i, j;
        let detailUrlList = [];
        for (j = 0; j < this.msList.length; j++) {
            for (i = 0; i < this.devIdList.length; i++) {
                detailUrlList.push(`${this.apiBaseURL}/measurements/${this.msList[j].id}/actual/device/${this.devIdList[i].mrid}?devmsorder=${i}-${j}`);
            }
        }
        let mslayers: any = {};
        // i = 0;
        for (i = 0; i<detailUrlList.length; i++) {
            let devmsorder = detailUrlList[i].split('devmsorder=')[1];
            let devid = devmsorder.split('-')[0];
            let msid = devmsorder.split('-')[1];
            let keyName = this.msList[msid].id;
            let results:any;
            let layerMkInfo = {dev: this.devIdList[devid], unit: this.msList[msid], value: null};
            try {
                results = await this.httpService.httpGetRequestWithHeader(this.accessTokenSub, detailUrlList[i]).toPromise();
                let dataObj: any;
                dataObj = results.body.data;
                if (dataObj.length > 0) {
                    layerMkInfo.value = dataObj[0].value;
                }
            } catch (e) {
                console.log('error===>', e);
            }
            if (mslayers.hasOwnProperty(keyName)) {
                mslayers[keyName].push(layerMkInfo);
            } else {
                mslayers[keyName] = [layerMkInfo]
            }
        }
        for (let key in mslayers) {
            if (mslayers.hasOwnProperty(key)) {
                this.updateMsMarkerService.setMsMarker('Measurements', key, mslayers[key]);
            }
        }
        this.refreshMeasurement();
    }

    refreshMeasurement() {
        let self = this;
        setTimeout(function () {
            self.getMeteringData();
        }, self.pollingTs * 1000)
    }


}
