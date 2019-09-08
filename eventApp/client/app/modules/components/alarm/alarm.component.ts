import {Component, Inject, Input, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {forkJoin} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {InteractionMarkerService} from "../../../core/services/interaction-marker.service";
import {UpdateMarkerService} from "../../../core/services/update-marker.service";
import {UpdateBreadCrumbService} from "../../../core/services/update-bread-crumb.service";
import {Actions} from "../../../core/interfaces/actions";
import {SelectItem} from "primeng/api";
import {Severity} from "../../../core/interfaces/severity";
import * as moment from "moment";
import {Router} from "@angular/router";
import {AuthService} from "../../../core/services/auth.service";

import * as GoldenLayout from "golden-layout";
import {GoldenLayoutContainer} from "@embedded-enterprises/ng6-golden-layout";
import {SettingService} from "../../../core/services/setting.service";
import {AlarmTabService} from "../../../core/services/alarm-tab.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config: any;

@Component({
    selector: 'app-alarm',
    templateUrl: './alarm.component.html',
    styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

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

    alarmTabMode: boolean; //True => active alarms, False => inactive alarms
    curSearchInfo: any;

    displayAddActionModal: boolean;
    displayEditAlarmModal: boolean;
    newActionName: string;
    newActionDate: Date;
    newActionMsg: string;

    actionList: SelectItem[];
    actionCols: any[];
    alarmActions: any;
    curAlarmInfo: any;
    curSeverity: string;
    curRemark: string;
    isAlarmEditFormChanged: boolean;
    isAlarmSaving: boolean; //Save Alarm Button Spinner
    isActionAdding: boolean; //Add Action Button Spinner
    severities: string[];
    alarmTimer: any;

    constructor(
                @Inject(GoldenLayoutContainer) private container: GoldenLayout.Container,
                private interactMkService: InteractionMarkerService,
                private updateMKService: UpdateMarkerService,
                private httpService: HttpServiceHelper,
                private router: Router,
                private alarmTabService: AlarmTabService,
                private settingService: SettingService,
                private authService: AuthService,
                private bdService: UpdateBreadCrumbService) {
        this.alarmTabMode = true;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.isAlarmSaving = false;
        this.isActionAdding = false;
        this.alarmTimer = false;
        this.isLoggedIn = true;
        this.alarmCols = [
            {field: 'name', header: 'Name', group:''},
            {field: 'date', header: 'Date'},
            {field: 'postponedate', header: 'PostponeDate', group:''},
            {field: 'state', header: 'State', group:''},
            {field: 'remark', header: 'Remark', group:''},
            {field: 'cause', header: 'Cause', group:''},
            {field: 'severity', header: 'Severity', group:''},
            {field: 'devicemrid', header: 'Devicemrid', group:''},
            {field: 'activecount', header: 'ActiveCount', group:''},
            {field: 'activedate', header: 'ActiveDate', group:''},
        ];
        this.actionCols = [
            {field: 'action', header: 'Action'},
            {field: 'date', header: 'Date'},
            {field: 'targetdate', header: 'TargetDate'},
            {field: 'message', header: 'Message'},
        ];
        this.alarmActions = [];
        this.alarms = [];
        this.curSearchInfo = {sub: '', bay: '', dev: ''};

        this.displayAddActionModal = false;
        this.displayEditAlarmModal = false;
        this.newActionName = this.newActionMsg = '';
        this.newActionDate = new Date();
        this.curSeverity = this.curRemark = '';
        this.isAlarmEditFormChanged = false;
        this.actionList = [];
        for (let item in Actions) {
            if (isNaN(Number(item))) {
                this.actionList.push({label: Actions[item], value: Actions[item]});
            }
        }
        this.severities = [];
        for (let item in Severity) {
            if (isNaN(Number(item))) {
                this.severities.push(Severity[item]);
            }
        }
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.tableId = 'alarm-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
    }

    ngOnInit() {
        //Get Active Alarms
        this.initTableSetting();
        this.getAlarms();
        this.interactMkService.getMarkerInfo().subscribe(mkInfo => {
            if (mkInfo.type == 'Alarms') {
                this.curSelectedRow = mkInfo.mkInfo;
                //Angular Model Rendering Issue (Force Rendering)
                this.alarmTabMode = true;
                let alarmTblSelBtn = document.getElementById('alarm-tbl-sel-btn');
                if(alarmTblSelBtn) {
                    alarmTblSelBtn.click();
                }
            }
            if(mkInfo.type == 'In-Alarms') {
                this.alarmTabMode = false;
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
        let htmlDomItem = document.getElementById(`active-alarm-${this.selectedRow.id}`);
        if(htmlDomItem) {
            htmlDomItem.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
        }
    }

    getAlarms() {
        let alarmIds = [];
        let promiseList = [];
        let alarmListURL = `${config.client_info.apiURL.serverURL}/events/alarm?active=true`;
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
            console.log('------------------Get InActive Alarm Actions-----------------------');
            forkJoin(promiseList).subscribe((results: any) => {
                // let alarmActionList = res.body;
                for (let resp of results) {
                    let alamid = resp.url.split('alarm/')[1].split('/actions')[0];
                    for (let alarmItem of alarmList) {
                        if (alarmItem.id == alamid) {
                            alarmItem.actions = resp.body;
                            alarmItem.mk_type = 'Alarms';
                        }
                    }
                }
                this.alarms = alarmList;
                this.updateMKService.drawMks('Alarms', alarmList);
                this.contentLoaded = true;
                this.startAlarmTimer();
            }, (error: HttpErrorResponse) => {
                this.httpErrorHandler(error);
                this.alarms = [];
                this.updateMKService.drawMks('Alarms', []);
                this.contentLoaded = true;
            })
        } else {
            this.alarms = [];
            this.updateMKService.drawMks('Alarms', []);
            this.startAlarmTimer();
        }
    }

    httpErrorHandler(error: any) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log(error);
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

    onActiveAlarmSelect(event: any) {
        this.interactMkService.setMarkerInfo('Alarms', event.data, true);
    }

    onActiveAlarmDeselect(event: any) {
        this.interactMkService.setMarkerInfo('Alarms', event.data, false);
    }

    onAddActionDialog() {
        this.newActionName = Actions.post;
        this.newActionDate = new Date();
        this.newActionMsg = '';
        this.displayAddActionModal = true;
    }

    onDiscard() {
        this.displayAddActionModal = false;
    }

    onAddAlarmAction() {
        //updating current alarms
        let actioninfo = {
            alarmid: this.curAlarmInfo.id,
            action: this.newActionName,
            date: moment.utc(this.newActionDate).format(),
            targetdate: moment.utc(this.newActionDate).format(),
            message: this.newActionMsg
        };
        let actionPostURL = `${config.client_info.apiURL.serverURL}/events/alarm/${this.curAlarmInfo.id}/actions`;
        this.isActionAdding = true;
        this.httpService.httpPostRequest(this.accessToken, actionPostURL, actioninfo).subscribe(res => {
            this.alarmActions.push(actioninfo);
            ///update table action data
            let curalarmList: any;
            curalarmList = this.alarms;
            for (let alarmitem of curalarmList) {
                if (alarmitem.id == actioninfo.alarmid) {
                    alarmitem.actions.push(actioninfo);
                    break;
                }
            }
            this.displayAddActionModal = false;
            this.isActionAdding = false;
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            this.isActionAdding = false;
            this.displayAddActionModal = false;
        });
    }

    onDiscardAlarm() {
        this.displayEditAlarmModal = false;
    }

    onSaveAlarm() {
        //1. update alarm info
        let alarmObj: any;
        alarmObj = JSON.parse(JSON.stringify(this.curAlarmInfo));
        alarmObj.severity = this.curSeverity;
        alarmObj.remark = this.curRemark;
        let alarmPatchURL = `${config.client_info.apiURL.serverURL}/events/alarm/${alarmObj.id}`;
        this.isAlarmEditFormChanged = false;
        this.isAlarmSaving = true;
        this.httpService.httpPatchRequest(this.accessToken, alarmPatchURL, alarmObj).subscribe(res => {
            console.log('Updated Alarm successfully');
            let curalarmList: any;
            curalarmList = this.alarms;
            for (let alarmitem of curalarmList) {
                if (alarmitem.id == alarmObj.id) {
                    alarmitem.severity = alarmObj.severity;
                    alarmitem.remark = alarmObj.remark;
                    break;
                }
            }
            this.displayEditAlarmModal = false;
            this.isAlarmSaving = false;
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            this.isAlarmEditFormChanged = true;
            this.isAlarmSaving = false;
        })

    }

    onNewActionNameChange(event) {
        this.newActionName = event.value;
    }

    onNewActionDateChange(newVal) {
        this.newActionDate = newVal;
    }

    onNewActionMsgChange(newVal: string) {
        this.newActionMsg = newVal;
    }

    onInActiveAlarmSelect(event: any) {

    }

    onInActiveAlarmDeselect(event: any) {

    }

    //////Edit Alarm Form/////////
    checkEditAlarmForm() {
        this.isAlarmEditFormChanged = (this.curSeverity != this.curAlarmInfo.severity ||
            this.curRemark != this.curAlarmInfo.remark);
    }

    onEditActiveAlarmRow(alarmInfo) {
        this.curAlarmInfo = alarmInfo;
        this.alarmActions = JSON.parse(JSON.stringify(alarmInfo.actions));
        this.curSeverity = alarmInfo.severity;
        this.curRemark = alarmInfo.remark;
        this.displayEditAlarmModal = true;
    }

    onEditInActiveAlarmRow(alarmInfo) {
        this.curAlarmInfo = alarmInfo;
        this.alarmActions = JSON.parse(JSON.stringify(alarmInfo.actions));
        this.curSeverity = alarmInfo.severity;
        this.curRemark = alarmInfo.remark;
        this.displayEditAlarmModal = true;
    }

    onSeverityChange(newVal: string) {
        this.curSeverity = newVal;
        this.checkEditAlarmForm();
    }

    onRemarkChange(newVal: string) {
        this.curRemark = newVal;
        this.checkEditAlarmForm();
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
                'Name','Date','PostponeDate','State','Remark','Cause',
                'Severity','Devicemrid','ActiveCount','ActiveDate'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.alarmCols = this.checkColVisibility(this.alarmCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    }
    onChangeTabView($ev) {
        if ($ev.index == 1) {
            this.alarmTabService.setTabMode(true);
        }
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
