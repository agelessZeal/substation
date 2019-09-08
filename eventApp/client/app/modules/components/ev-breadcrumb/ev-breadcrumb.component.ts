import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {HttpErrorResponse} from "@angular/common/http";
import {UpdateBreadCrumbService} from "../../../core/services/update-bread-crumb.service";
import {AuthService} from "../../../core/services/auth.service";
import {forkJoin} from "rxjs";
import {MsMrDeviceSelectionService} from "../../../core/services/msmr-device-selection.service";

declare var config: any;

@Component({
    selector: 'app-ev-breadcrumb',
    templateUrl: './ev-breadcrumb.component.html',
    styleUrls: ['./ev-breadcrumb.component.css']
})
export class EvBreadcrumbComponent implements OnInit {

    substations: string[];
    bays: string[];
    devices: string[];

    selectedSub: any;
    selectedBay: any;
    selectedDevice: any;

    accessTokenSub: string;
    apiBaseURL: string;
    devDetailList: any;

    contentLoaded: boolean;
    accessToken: string;

    constructor(private bdService: UpdateBreadCrumbService,
                private authService: AuthService,
                private msmrLayerService: MsMrDeviceSelectionService,
                private httpService: HttpServiceHelper) {
        this.substations = ['All'];
        this.bays = ['All'];
        this.devices = ['All'];
        this.contentLoaded = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);

        this.selectedSub = 'All';
        this.selectedBay = 'All';
        this.selectedDevice = 'All';

        this.accessTokenSub = localStorage.getItem(config.client_info.storeInfo.tokenKey + '_sub');
        this.devDetailList = null;
        this.apiBaseURL = config.client_info.apiURL.serverURLSubstation;

    }

    ngOnInit() {
        this.getSubstations();
        let self = this;
    }

    getSubstations() {
        let subListURL = `${config.client_info.apiURL.serverURL}/substations`;
        this.substations = ['All'];
        this.contentLoaded = false;
        this.httpService.httpGetRequest(this.accessToken, subListURL).subscribe((res: any) => {
            this.substations = this.substations.concat(res);
            this.contentLoaded = true;
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            console.error("Can't get substation list", error);
            this.contentLoaded = true;
        });
    }

    getBays(subId: string) {
        const getBayURL = `${config.client_info.apiURL.serverURL}/substations/${subId}/bays`;
        this.contentLoaded = false;
        this.bays = ['All'];
        this.httpService.httpGetRequest(this.accessToken, getBayURL)
            .subscribe((res: any) => {
                this.bays = this.bays.concat(res);
                this.contentLoaded = true;
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
                this.contentLoaded = true;
            });

    }

    getDevices(bayId: string) {
        const getDeviceURL = `${config.client_info.apiURL.serverURL}/bays/${bayId}/devices`;
        this.contentLoaded = false;
        this.devices = ['All'];
        this.httpService.httpGetRequest(this.accessToken, getDeviceURL)
            .subscribe((res: any) => {
                this.devices = this.devices.concat(res);
                this.contentLoaded = true;
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
                this.contentLoaded = true;
            });
    }

    httpErrorHandler(error: any) {
        const msgPrefix = "The remote server returned an error: ";
        const err401Msg = "(401) Unauthorized.";
        console.error(error);
        switch (error.status) {
            case 400:
                let errMsg = error.error.Message;
                let idx = errMsg.indexOf(msgPrefix);
                if (idx > -1) {
                    let trueMsgPart = errMsg.substr(msgPrefix.length);
                    alert(trueMsgPart);
                    if(trueMsgPart == err401Msg) {
                        this.authService.setAuthInfo({login_st:false})
                    }
                }else{
                    alert(errMsg);
                }
                break;
            case 401:
                this.authService.setAuthInfo({login_st:false});
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
        }
    }
    onSelectSubstation(newVal: any) {
        this.bays = ['All'];
        this.devices = ['All'];
        if (newVal != 'All') {
            this.getBays(newVal);
        } else {
            this.selectedBay = 'All';
            this.selectedDevice = 'All';
        }
        this.sendSearchMsg('sub');
    }

    onSelectBay(newVal: any) {
        this.devices = ['All'];
        this.selectedDevice = 'All';
        if (newVal != 'All') {
            this.getDevices(newVal);
        }
        this.sendSearchMsg('bay');
    }

    onSelectDevice(newVal: any) {
        this.sendSearchMsg('dev');
    }

    sendSearchMsg(type) {
        let subId = (this.selectedSub == 'All') ? '' : this.selectedSub;
        let bayId = (this.selectedBay == 'All') ? '' : this.selectedBay;
        let devId = (this.selectedDevice == 'All') ? '' : this.selectedDevice;
        this.bdService.setBDInfo({sub: subId, bay: bayId, dev: devId, type:type});
    }
}
