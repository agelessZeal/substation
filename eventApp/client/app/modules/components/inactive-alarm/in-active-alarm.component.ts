import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {forkJoin} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {InteractionMarkerService} from "../../../core/services/interaction-marker.service";
import {UpdateMarkerService} from "../../../core/services/update-marker.service";
import {UpdateBreadCrumbService} from "../../../core/services/update-bread-crumb.service";
import {Severity} from "../../../core/interfaces/severity";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";
import {SettingService} from "../../../core/services/setting.service";
import {AlarmTabService} from "../../../core/services/alarm-tab.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config: any;

@Component({
    selector: 'in-active-app-alarm',
    templateUrl: './in-active-alarm.component.html',
    styleUrls: ['./in-active-alarm.component.css']
})
export class InActiveAlarmComponent implements OnInit {

    isLoggedIn: boolean;
    alarms: Array<Alarm>;
    alarmCols: any[];
    selectedRow: Alarm;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    isHideFilter: boolean;
    curSelectedRow: any;

    accessToken: string;
    contentLoaded: boolean;

    curSearchInfo: any;

    severities: string[];
    alarmTimer: any;

    constructor(private interactMkService: InteractionMarkerService,
                private updateMKService: UpdateMarkerService,
                private httpService: HttpServiceHelper,
                private router: Router,
                private authService: AuthService,
                private alarmTabService: AlarmTabService,
                private settingService: SettingService,
                private bdService: UpdateBreadCrumbService) {
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.alarmTimer = false;
        this.isLoggedIn = true;
        this.curSearchInfo = {sub: '', bay: '', dev: ''};
        this.alarmCols = [
            {field: 'id', header: 'ID'},
            {field: 'name', header: 'Name'},
            {field: 'date', header: 'Date'},
            {field: 'postponedate', header: 'PostponeDate'},
            {field: 'state', header: 'State'},
            {field: 'remark', header: 'Remark'},
            {field: 'cause', header: 'Cause'},
            {field: 'severity', header: 'Severity'},
            {field: 'devicemrid', header: 'Devicemrid'},
            {field: 'activecount', header: 'ActiveCount'},
            {field: 'activedate', header: 'ActiveDate'},
        ];
        this.alarms = [];
        this.severities = [];
        for (let item in Severity) {
            if (isNaN(Number(item))) {
                this.severities.push(Severity[item]);
            }
        }
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);

        this.tableId = 'in-alarm-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;

    }

    ngOnInit() {
        this.alarmTabService.getTabMode().subscribe(info => {
            if(info){
                this.initTableSetting();
            }
        });
        //Get Active Alarms
        this.getAlarms();
        this.interactMkService.getMarkerInfo().subscribe(mkInfo => {
            if (mkInfo.type == 'In-Alarms') {
                this.curSelectedRow = mkInfo.mkInfo;
                //Angular Model Rendering Issue (Force Rendering)
                document.getElementById('in-alarm-tbl-sel-btn').click();
            }
        });
        this.bdService.getBDInfo().subscribe(bdInfo => {
            this.curSearchInfo = bdInfo;
            this.stopAlarmTimer();
            this.getAlarms();
        })
    }

    onForceRowSelect() {
        this.selectedRow = this.curSelectedRow;
        document.getElementById(`in-active-alarm-${this.selectedRow.id}`).scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
    }

    getAlarms() {
        let alarmIds = [];
        let promiseList = [];
        let alarmListURL = `${config.client_info.apiURL.serverURL}/events/alarm?active=false`;
        if (this.curSearchInfo.sub) alarmListURL += `&substationmrid=${this.curSearchInfo.sub}`;
        if (this.curSearchInfo.bay) alarmListURL += `&baymrid=${this.curSearchInfo.bay}`;
        if (this.curSearchInfo.dev) alarmListURL += `&devicemrid=${this.curSearchInfo.dev}`;
        if (!this.alarmTimer) {
            this.contentLoaded = false;
        }
        this.httpService.httpGetRequest(this.accessToken, alarmListURL).subscribe((results: any) => {
            alarmIds = results;
            for (let i = 0; i < alarmIds.length; i++) {
                let alarmDetailURL = `${config.client_info.apiURL.serverURL}/events/alarm/${alarmIds[i]}`;
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, alarmDetailURL));
            }
            if (promiseList.length > 0) {
                forkJoin(promiseList).subscribe(alarmDetails => {
                    this.contentLoaded = true;
                    this.getAlarmLocation(alarmDetails);
                })
            } else {
                this.contentLoaded = true;
                this.getAlarmLocation([]);
            }
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            this.contentLoaded = true;
            this.getAlarmLocation([]);
        })
    }

    getAlarmLocation(alarmList: Array<any>) {
        let promiseList = [];
        let devIdList = [];
        for(let i = 0; i<alarmList.length; i++){
            if(devIdList.indexOf(alarmList[i].devicemrid)<0){
                devIdList.push(alarmList[i].devicemrid);
            }
        }
        if (devIdList.length > 0) {
            for (let i = 0; i < devIdList.length; i++) {
                let devDetailURL = `${config.client_info.apiURL.serverURL}/devices/${devIdList[i]}`;
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, devDetailURL));
            }
            if (!this.alarmTimer) {
                this.contentLoaded = false;
            }
            console.warn('------------------Get Alarm Locations-----------------------');
            forkJoin(promiseList).subscribe(devDetailList => {
                for (let devInfo of devDetailList) {
                    for (let alarmInfo of alarmList) {
                        if (devInfo.mrid == alarmInfo.devicemrid) {
                            alarmInfo.location = devInfo.location;
                        }
                    }
                }
                this.contentLoaded = true;
                this.getActionDetails(alarmList);
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
                this.contentLoaded = true;
                this.getActionDetails([]);
            })
        } else {
            this.getActionDetails([]);
        }
    }

    getActionDetails(alarmList: Array<any>) {
        let promiseList = [];
        let alarmIdList = [];
        for (let i = 0; i < alarmList.length; i++) {
            if(alarmIdList.indexOf(alarmList[i].id)<0){
                alarmIdList.push(alarmList[i].id)
            }
        }
        if (alarmIdList.length > 0) {
            for (let i = 0; i < alarmIdList.length; i++) {
                let actionsDetailURL = `${config.client_info.apiURL.serverURL}/events/alarm/${alarmIdList[i]}/actions`;
                promiseList.push(this.httpService.httpGetRequestWithHeader(this.accessToken, actionsDetailURL));
            }
            if (!this.alarmTimer) {
                this.contentLoaded = false;
            }
            console.log('------------------Get In Active Alarm Actions-----------------------');
            forkJoin(promiseList).subscribe((results: any) => {
                // let alarmActionList = res.body;
                for (let resp of results) {
                    let alamid = resp.url.split('alarm/')[1].split('/actions')[0];
                    for (let alarmItem of alarmList) {
                        if (alarmItem.id == alamid) {
                            alarmItem.actions = resp.body;
                            alarmItem.mk_type = 'In-Alarms';
                        }
                    }
                }
                this.alarms = alarmList;
                this.updateMKService.drawMks('In-Alarms', alarmList);
                this.contentLoaded = true;
                this.startAlarmTimer();
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
                this.alarms = alarmList;
                this.updateMKService.drawMks('In-Alarms', alarmList);
                this.contentLoaded = true;
            })
        } else {
            this.alarms = [];
            this.updateMKService.drawMks('In-Alarms', []);
            this.startAlarmTimer();
        }
    }

    httpErrorHandler(error: any) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log('Bad Request');
                break;
            case 401:
                this.isLoggedIn = false;
                this.stopAlarmTimer();
                this.authService.setAuthInfo({login_st:false});
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
                this.startAlarmTimer();
        }
    }

    startAlarmTimer() {
        if(this.isLoggedIn){
            this.stopAlarmTimer();
            let self = this;
            this.alarmTimer = setTimeout(function () {
                self.getAlarms();
            }, config.client_info.polling_time * 1000)
        }
    }

    stopAlarmTimer() {
        if (this.alarmTimer) {
            clearTimeout(this.alarmTimer);
            this.alarmTimer = false;
        }
    }

    onAlarmSelect(event: any) {
        this.interactMkService.setMarkerInfo('In-Alarms', event.data, true);
    }

    onAlarmDeselect(event: any) {
        this.interactMkService.setMarkerInfo('In-Alarms', event.data, false);
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
            settingInfo.visible = [
                'ID', 'Name','Date','PostponeDate','State','Remark','Cause',
                'Severity','Devicemrid','ActiveCount','ActiveDate'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.alarmCols = this.checkColVisibility(this.alarmCols, settingInfo.visible);
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
