import {Component, OnInit} from '@angular/core';
import {ConfirmationService, SelectItem} from "primeng/api";
import {NavigationService} from "../../../core/services/navigation.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ExpandingMsMtService} from "../../../core/services/expanding-ms-mt.service";
import {SettingService} from "../../../core/services/setting.service";
import {MeteringFormService} from "../../../core/services/metering-form.service";
import {UpdateMeteringTypeService} from "../../../core/services/update-metering-type.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-device-metering-table',
    templateUrl: './device-metering-table.component.html',
    styleUrls: ['./device-metering-table.component.css'],
    providers: [ConfirmationService]
})
export class DeviceMeteringTableComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;

    deviceId: string;

    meterings: any[];
    srcMeterings: any[];
    meteringCols: any[];

    isPublicCols: SelectItem[];

    contentLoaded: boolean;
    isHideFilter: boolean;

    accessToken: string;
    apiURL: string;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;
    isFormChanged: boolean;

    constructor(private httpService: HttpServiceHelper,
                private scrollService: ScrollMovingService,
                private navService: NavigationService,
                private settingService: SettingService,
                private expandMsMtService: ExpandingMsMtService,
                private meteringFormService: MeteringFormService,
                private updateMeteringFormService: UpdateMeteringTypeService,
                private confirmationService: ConfirmationService) {

        this.contentLoaded = false;
        this.isHideFilter = false;
        this.meterings = [];
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.apiURL = `${config.client_info.apiURL.serverURL}/devices`;

        this.tableId = 'dev-mr-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;

        this.meteringCols = [
            {field: 'id', header: 'ID', group:''},
            {field: 'name', header: 'Name', group:''},
            {field: 'description', header: 'Description', group:''},
            {field: 'unit', header: 'Unit', group:''},
            {field: 'multiplier', header: 'Multiplier', group:''},
            {field: 'format', header: 'Format', group:''},
            {field: 'aggregation', header: 'Aggregation', group:''},
            {field: 'isPublic', header: 'IsPublic', group:''},
        ];

        this.isPublicCols = [
            {label:'true',value:true},
            {label:'false',value:false},
        ];

        this.initFormFields();
    }

    ngOnInit() {

        this.initTableSetting();

        this.expandMsMtService.getDeviceMsMtStatusInfo().subscribe(serviceInfo => {
            if(serviceInfo.name == 'metering'){
                this.isEnabled = serviceInfo.mode;
                this.deviceId = serviceInfo.id;
                this.getTableContent();
            }
        });

        this.updateMeteringFormService.getMeteringTypeInfo().subscribe(mrInfo => {
            //Checking prev metering Info
            for(let i = 0; i<this.meterings.length; i++) {
                if(this.meterings[i].metering.id = mrInfo.id) {
                    this.meterings[i] = JSON.parse(JSON.stringify(mrInfo.newMtType)) ;
                    //Update metering data
                    let postBody = this.meterings;
                    let mrEditURL = this.apiURL + '/' + this.deviceId + '/meterings';
                    this.httpService.httpPutRequest(this.accessToken, mrEditURL, postBody)
                        .subscribe((res: any) => {
                            this.srcMeterings = JSON.parse(JSON.stringify(postBody));
                            console.log('Success in update meaterings', postBody);
                        }, err => {
                            this.srcMeterings = [];
                            this.meterings = [];
                            console.log('Error in update meaterings', err);
                        });
                }
            }
        })
    }

    getTableContent() {
        this.contentLoaded  = false;
        const getDevMsURL = `${config.client_info.apiURL.serverURL}/devices/${this.deviceId}/meterings`;
        this.httpService.httpGetRequest(this.accessToken, getDevMsURL)
            .subscribe((res: any) => {
                this.meterings = JSON.parse(JSON.stringify(res));
                this.srcMeterings = JSON.parse(JSON.stringify(res));
                this.contentLoaded = true;
            }, err => {
                this.meterings = [];
                this.srcMeterings = [];
                this.contentLoaded = true;
                console.error('Error in measurements updating', err);
            });
    }

    initFormFields() {
        this.meterings = [];
    }

    onSaveFormData() {
        let postBody = this.meterings;
        let mrEditURL = this.apiURL + '/' + this.deviceId + '/meterings';
        this.httpService.httpPutRequest(this.accessToken, mrEditURL, postBody)
            .subscribe((res: any) => {
                this.srcMeterings = JSON.parse(JSON.stringify(postBody));
                this.isFormChanged = false;
                console.log('Success in update meaterings', postBody);
            }, err => {
                this.srcMeterings = [];
                this.meterings = [];
                this.isFormChanged = false;
                console.log('Error in update meaterings', err);
            });
    }

    isChanged() {
        let opSaveBtn: any;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if (opSaveBtn) {
            let disabledBtnCnt = 0;
            for (let i = 0; i < opSaveBtn.length; i++) {
                if (opSaveBtn[i].disabled) {
                    disabledBtnCnt++;
                }
            }
            if (disabledBtnCnt != opSaveBtn.length) {
                return true;
            }
        } else {
            return false;
        }
    }

    closeMe() {
        this.navService.setNavInfo('dev-mt-list', false, '');
        const htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[htmlElem.length-1].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        this.initFormFields();
    }

    onCloseComponent() {
        let self = this;
        if (this.isChanged()) {
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: () => {
                    self.closeMe();
                },
                reject: () => {

                }
            });
        } else {
            this.closeMe();
        }
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
                'ID','Name','Description','Unit', 'Multiplier', 'Format', 'IsPublic'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.meteringCols = this.checkColVisibility(this.meteringCols, settingInfo.visible);
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

    onTblFilter(ev, item, dt) {
        let field = (item.group != '')? item.group + '.' + item.field: item.field;
        dt.filter(ev.target.value,  field, item.filterMatchMode);
    }

    onChangeFilter() {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName,'filter', this.isHideFilter);
    }

    onColResize($ev) {
        updateTableWidth(this.tableId, $ev);
    }

    onContactEditComplete(newVal) {
        this.checkFormChange();
    }

    compareContacts(x: any, y: any) {
        return (x.metering.id == y.metering.id &&
            x.metering.name == y.metering.name &&
            x.metering.description == y.metering.description &&
            x.metering.unit == y.metering.unit &&
            x.metering.multiplier == y.metering.multiplier &&
            x.metering.format == y.metering.format &&
            x.metering.aggregation == y.metering.aggregation &&
            x.isPublic == y.isPublic);
    }

    checkFormChange() {
        let sameObjCnt = 0;
        this.isFormChanged = this.meterings.length != this.srcMeterings.length;
        for (let i = 0; i < this.meterings.length; i++) {
            for (let j = 0; j < this.srcMeterings.length; j++) {
                if (this.compareContacts(this.meterings[i], this.srcMeterings[j])) {
                    sameObjCnt++;
                }
            }
        }

        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.meterings.length);
    }

}
