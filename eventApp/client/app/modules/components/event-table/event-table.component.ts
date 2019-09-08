import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {forkJoin} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import * as moment from 'moment';
import {UpdateMarkerService} from "../../../core/services/update-marker.service";
import {InteractionMarkerService} from "../../../core/services/interaction-marker.service";
import {UpdateBreadCrumbService} from "../../../core/services/update-bread-crumb.service";
import {AuthService} from "../../../core/services/auth.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config: any;

@Component({
    selector: 'app-event-table',
    templateUrl: './event-table.component.html',
    styleUrls: ['./event-table.component.css']
})
export class EventTableComponent implements OnInit {

    isLoggedIn:boolean;
    events: Array<SbEvent>;
    eventsCols: any[];
    selectedRow: any;
    curSelectedRow: any;

    isHideFilter: boolean;
    accessToken: string;
    contentLoaded: boolean;

    fromDate: Date; // for Events Data Search
    toDate: string; //  Events Data Search

    curSearchInfo: any;
    eventTimer: any;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(private interactMkService: InteractionMarkerService,
                private updateMKService: UpdateMarkerService,
                private httpService: HttpServiceHelper,
                private authService: AuthService,
                private settingService: SettingService,
                private bdService: UpdateBreadCrumbService) {
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.eventTimer = false;
        this.eventsCols = [
            {field: 'id', header: 'ID'},
            {field: 'name', header: 'Name'},
            {field: 'date', header: 'Date'},
            {field: 'remark', header: 'Remark'},
            {field: 'cause', header: 'Cause'},
            {field: 'devicemrid', header: 'Devicemrid'},
        ];
        this.events = [];
        this.isLoggedIn = true;
        this.curSearchInfo = {sub:'',bay:'',dev:''};
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.fromDate = new Date(Date.now() - 864e5);

        this.tableId = 'event-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;

    }

    ngOnInit() {

        this.initTableSetting();

        this.getSbEvents();
        this.interactMkService.getMarkerInfo().subscribe(mkInfo => {
            if(mkInfo.type == 'Events') {
                this.curSelectedRow = mkInfo.mkInfo;
                document.getElementById('tbl-sel-btn').click(); //Angular Model Rendering Issue (Force Rendering)
            }
        });
        this.bdService.getBDInfo().subscribe(bdInfo => {
            this.curSearchInfo = bdInfo;
            this.stopEventTimer();
            this.getSbEvents();
        })
    }

    onForceRowSelect() {
        this.selectedRow = this.curSelectedRow;
    }

    startEventTimer() {
        if(this.isLoggedIn){
            this.stopEventTimer();
            let self = this;
            this.eventTimer = setTimeout(function () {
                self.getSbEvents();
            }, config.client_info.polling_time*1000)
        }
    }

    stopEventTimer() {
        if(this.eventTimer){
            clearTimeout(this.eventTimer);
            this.eventTimer = false;
        }
    }

    getSbEvents() {
        let eventIds = [];
        let promiseList = [];
        let fromdt = moment.utc(this.fromDate).format();
        let todt = moment.utc(this.toDate).format();
        if(fromdt>todt) return;

        let alarmListURL = `${config.client_info.apiURL.serverURL}/events/all?`;
        if (this.curSearchInfo.sub) alarmListURL += `&substationmrid=${this.curSearchInfo.sub}`;
        if (this.curSearchInfo.bay) alarmListURL += `&baymrid=${this.curSearchInfo.bay}`;
        if (this.curSearchInfo.dev) alarmListURL += `&devicemrid=${this.curSearchInfo.dev}`;
        if (this.fromDate) alarmListURL += `&fromDate=${fromdt}`;
        if (this.toDate) alarmListURL += `&toDate=${todt}`;
        if(!this.eventTimer){
            this.contentLoaded = false;
        }
        this.httpService.httpGetRequest(this.accessToken, alarmListURL).subscribe((results: any) => {
            eventIds = results;
            for (let i = 0; i < eventIds.length; i++) {
                let eventDetailURL = `${config.client_info.apiURL.serverURL}/events/all/${eventIds[i]}`;
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, eventDetailURL));
            }
            if (promiseList.length > 0) {
                forkJoin(promiseList).subscribe(eventDetails => {
                    //Split Active Alarms and InActive Alarms =================================================================
                    this.contentLoaded = true;
                    this.getEventsLocation(eventDetails);
                })
            } else {
                this.contentLoaded = true;
                this.getEventsLocation([]);

            }

        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            this.contentLoaded = true;
            this.getEventsLocation([]);
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
                        this.isLoggedIn = false;
                        this.authService.setAuthInfo({login_st:false})
                    }
                }else{
                    alert(errMsg);
                }
                this.stopEventTimer();
                break;
            case 401:
                this.isLoggedIn = false;
                this.stopEventTimer();
                this.authService.setAuthInfo({login_st:false});
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
                this.startEventTimer();
        }
    }

    getEventsLocation(eventList: any[]) {
        let promiseList = [];
        let devIdList = [];
        for(let i = 0 ;i<eventList.length; i++) {
            if(devIdList.indexOf(eventList[i].devicemrid)<0){
                devIdList.push(eventList[i].devicemrid);
            }
        }
        if(devIdList.length>0){
            for(let i = 0 ;i<devIdList.length; i++) {
                let devDetailURL = `${config.client_info.apiURL.serverURL}/devices/${devIdList[i]}`;
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, devDetailURL));
            }
            if(!this.eventTimer){
                this.contentLoaded = false;
            }
            forkJoin(promiseList).subscribe(devDetailList => {
                for(let devInfo of devDetailList) {
                    for (let evInfo of eventList) {
                        if(devInfo.mrid == evInfo.devicemrid) {
                            evInfo.location = devInfo.location;
                            evInfo.mk_type = 'Events';
                        }
                    }
                }
                this.events = eventList;
                this.contentLoaded = true;
                this.startEventTimer();
            },(error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
                this.contentLoaded = true;
                this.events = [];
                this.startEventTimer();
            })
        } else {
            this.events = [];
            this.startEventTimer();
        }
    }

    onSelectRow(event: any) {
        this.interactMkService.setMarkerInfo('Events', event.data, true);
    }

    onDeselectRow(event: any) {
        this.interactMkService.setMarkerInfo('Events', event.data, false);
    }

    onChangeFromDate(fromdt) {
        this.fromDate = fromdt;
    }
    onChangeToDate(todt: string) {
        this.toDate = todt;
        console.log(this.toDate);

    }
    onResetTime() {
        this.fromDate = new Date(Date.now() - 864e5);
        this.toDate = ''
        //
        // let tstEv = {
        //     "id": "12",
        //     "date": "2019-05-28T08:50:27.978Z",
        //     "remark": "23",
        //     "name": "666",
        //     "cause": "666",
        //     "mk_type" :'Events',
        //     "devicemrid": "sub2_bay2_device0",
        //     "location":{latitude:47.4979, longitude:19.0402},
        // };
        // this.interactMkService.setMarkerInfo('Events', tstEv, true);
    }

    initTableSetting() {

        readTable(this.tableId);
        let tblSettingStr = localStorage.getItem(this.tableSettingName);
        let settingInfo: any;
        if(tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        } else {
            //Write New Setting
            settingInfo = { filter: true};
            settingInfo.visible = ['ID','Name','Date','Remark','Cause','Devicemrid'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.eventsCols = this.checkColVisibility(this.eventsCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    }

    checkColVisibility(colList: any, visibleColList: any) {

        for(let i = 0; i<colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header)>-1;
        }
        return colList;
    }
    onChangeVisibility(item) {
        checkTable(this.tableId, item);
        if(item.visibility){
            this.curSelColsCnt += 1;
        } else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName,'visibility', {col:item.header,st:item.visibility})
    }
    onChangeFilter() {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName,'filter', this.isHideFilter);
    }
    onColResize($ev) {
        updateTableWidth(this.tableId, $ev);
    }
}
