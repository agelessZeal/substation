import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateDeviceMsMrService} from "../../../core/services/update-device-ms-mr.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {ConfirmationService} from "primeng/api";
import {DeviceMsMtFormService} from "../../../core/services/device-ms-mt-form.service";
import {ExpandingMsMtService} from "../../../core/services/expanding-ms-mt.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-device-measurement-table',
    templateUrl: './device-measurement-table.component.html',
    styleUrls: ['./device-measurement-table.component.css'],
    providers: [ConfirmationService]
})
export class DeviceMeasurementTableComponent implements OnInit {

    isEnabled: boolean;
    deviceId: string;
    measurements: Array<DeviceMeasurement>;
    devMsCols: any[];

    selectedRows: Array<DeviceMeasurement>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(
        private deviceMsMtFormService: DeviceMsMtFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private updateDevMsMrService: UpdateDeviceMsMrService,
        private expandMsMtService: ExpandingMsMtService,
        private navService: NavigationService,
        private settingService: SettingService,
        private confirmationService: ConfirmationService) {

        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.isEnabled = false;
        this.deviceId = '';
        this.measurements = [];
        this.isHideFilter = false;

        this.tableId = 'dev-ms-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;

        this.selectedRows = [];

        this.devMsCols = [
            {field: 'measurementId', header: 'MrId', group:''},
            {field: 'iec61850path', header: 'Name', group:''},
        ];

    }

    ngOnInit() {

        this.initTableSetting();

        this.expandMsMtService.getDeviceMsMtStatusInfo().subscribe(serviceInfo => {
            if (serviceInfo.name == 'measurement') {
                this.isEnabled = serviceInfo.mode;
                this.deviceId = serviceInfo.id;
                this.getTableContent();
            }
        });

        this.updateDevMsMrService.getDeviceMsMrInfo().subscribe(updateInfo => {
            if (updateInfo.name == 'measurement') {
                let tmpDevMsList: any;
                tmpDevMsList = JSON.parse(JSON.stringify(this.measurements));
                if (updateInfo.mode) {
                    console.log(updateInfo.newItem);
                    tmpDevMsList.push(updateInfo.newItem);
                } else {
                    for (let i = 0; i < tmpDevMsList.length; i++) {
                        if (tmpDevMsList[i].measurementId == updateInfo.id) {
                            tmpDevMsList[i] = updateInfo.newItem;
                            break;
                        }
                    }
                }
                this.updateTableContent(tmpDevMsList);
            }
        });

        this.apiURL = `${config.client_info.apiURL.serverURL}/measurements`;
    }

    getTableContent() {
        const getDevMsURL = `${config.client_info.apiURL.serverURL}/devices/${this.deviceId}/measurements`;
        this.httpService.httpGetRequest(this.accessToken, getDevMsURL)
            .subscribe((res: any) => {
                this.measurements = res;
                this.contentLoaded = true;
            }, err => {
                this.measurements = [];
                this.contentLoaded = true;
                console.error('Error in measurements updating', err);
            });
    }

    updateTableContent(updateBody) {
        this.contentLoaded = false;
        const getDevMsURL = `${config.client_info.apiURL.serverURL}/devices/${this.deviceId}/measurements`;
        this.httpService.httpPutRequest(this.accessToken, getDevMsURL, updateBody)
            .subscribe((res: any) => {
                this.measurements = updateBody;
                this.contentLoaded = true;
            }, err => {
                this.measurements = [];
                this.contentLoaded = true;
                console.error('Error in measurements listing', err);
            });

    }

    onAddNewRow() {
        let self = this;
        this.navService.setNavInfo('dev-ms-form', true, '');
        setTimeout(function () {
            self.deviceMsMtFormService.setDeviceMsMtFormInfo(true, null, 'measurement');
            self.scrollService.setMovedScroll(true, 'dev-ms-form');
        }, 100);
    }

    onDeleteRows() {
        let unSelectedRows: Array<DeviceMeasurement>;
        unSelectedRows = [];
        for (let i = 0; i < this.measurements.length; i++) {
            let sameSt = false;
            for (let j = 0; j < this.selectedRows.length; j++) {
                if (this.measurements[i].measurementId == this.selectedRows[j].measurementId &&
                    this.measurements[i].iec61850path == this.selectedRows[j].iec61850path) {
                    sameSt = true;
                }
                if (!sameSt) {
                    unSelectedRows.push(this.measurements[i]);
                }
            }
        }

        let deviceMsTypeURL = `${config.client_info.apiURL.serverURL}/devices/${this.deviceId}/measurements`;
        this.httpService.httpPutRequest(this.accessToken, deviceMsTypeURL, unSelectedRows).subscribe(res => {
            this.measurements = unSelectedRows;
            this.selectedRows = [];
        }, err => {
            this.measurements = [];
            this.selectedRows = [];
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
        this.navService.setNavInfo('dev-ms-list', false, this.deviceId);
        this.scrollService.setMovedScroll(true, '');
        this.measurements = [];
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

    editRow(devms) {
        let self = this;
        this.navService.setNavInfo('dev-ms-form', true, devms.measurementId);
        setTimeout(function () {
            self.deviceMsMtFormService.setDeviceMsMtFormInfo(false, devms, 'measurement');
            self.scrollService.setMovedScroll(true, 'dev-ms-form');
        }, 100);
    }

    onRowSelect(event) {
        console.log(this.selectedRows);
    }

    onRowUnselect(event) {
        console.log(this.selectedRows);
    }

    selectAllRows(event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedRows);
        } else {
            // alert('all rows diselected');
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
            settingInfo.visible = ['MrId','Name'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.devMsCols = this.checkColVisibility(this.devMsCols, settingInfo.visible);
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
}
