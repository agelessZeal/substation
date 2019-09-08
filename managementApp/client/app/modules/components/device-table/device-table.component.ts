import {Component, OnInit} from '@angular/core';
import {DeviceFormService} from "../../../core/services/device-form.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateDeviceService} from "../../../core/services/update-device.service";
import {ExpandingDeviceService} from "../../../core/services/expanding-device.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {forkJoin} from "rxjs";
import {ConfirmationService} from "primeng/api";
import {ReadIcdService} from "../../../core/services/read-icd.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-device-table',
    templateUrl: './device-table.component.html',
    styleUrls: ['./device-table.component.css'],
    providers: [ConfirmationService]
})

export class DeviceTableComponent implements OnInit {

    isEnabled: boolean;
    bayId: string;
    devices: Array<Device>;
    deviceCols: any[];
    iecCols: any[];

    selectedRows: Array<Device>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(
        private deviceFormService: DeviceFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private updateDeviceService: UpdateDeviceService,
        private expandDeviceService: ExpandingDeviceService,
        private navService: NavigationService,
        private readIcdService: ReadIcdService,
        private settingService: SettingService,
        private confirmationService: ConfirmationService) {

        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.isEnabled = false;
        this.bayId = '';

        this.isHideFilter = false;
        this.devices = [];
        this.selectedRows = [];
        this.apiURL = `${config.client_info.apiURL.serverURL}/devices`;

        this.tableId = 'device-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.deviceCols = [
            {field: 'mrid', header: 'MrId', group:''},
            {field: 'name', header: 'Name', group:''},
            {field: 'devicetypemrid', header: 'DeviceTypeMrID', group:''},
            {field: 'description', header: 'Description', group:''},
            {field: 'latitude', header: 'Location.Lat', group:'location'},
            {field: 'longitude', header: 'Location.Lon', group:'location'},
            {field: 'altitude', header: 'Location.Alt', group:'location'},
        ];

    }

    ngOnInit() {

        this.initTableSetting();

        this.expandDeviceService.getDeviceStatusInfo().subscribe(deviceStatus => {
            this.isEnabled = deviceStatus.mode;
            this.bayId = deviceStatus.bayId;
            this.getDevices();
        });

        this.updateDeviceService.getDeviceInfo().subscribe(updateInfo => {
            if (updateInfo.mode) {
                this.devices.push(updateInfo.newDevice);
            } else {
                for (let i = 0; i < this.devices.length; i++) {
                    if (this.devices[i].mrid == updateInfo.mrid) {
                        this.devices[i] = updateInfo.newDevice;
                    }
                }
            }
        });

        this.readIcdService.getBayInfo().subscribe(bayInfo => {
            this.bayId = bayInfo.bayId;
            this.getDevices();
        });
    }

    getDevices() {
        const getDeviceURL = `${config.client_info.apiURL.serverURL}/bays/${this.bayId}/devices`;
        let devIdList = [];
        let promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, getDeviceURL)
            .subscribe((res: any) => {
                devIdList = res;
                for (let i = 0; i < devIdList.length; i++) {
                    let devDetailURL = this.apiURL + '/' + devIdList[i];
                    promiseList.push(this.httpService.httpGetRequest(this.accessToken, devDetailURL));
                }
                if (devIdList.length > 0) {
                    forkJoin(promiseList).subscribe(results => {
                        this.devices = results;
                        this.contentLoaded = true;
                        console.log('Success in device listing', results);
                    }, err => {
                        this.devices = [];
                        this.contentLoaded = true;
                        console.error("Can't get device details", err);
                    })
                } else {
                    this.devices = [];
                    this.contentLoaded = true;
                    console.warn('Empty Device Id List');
                }
            }, err => {
                this.devices = [];
                this.contentLoaded = true;
                console.log('Error in devices listing', err);
            });
    }

    isChanged() {
        let opSaveBtn: any;
        opSaveBtn = document.getElementsByClassName('dev-form-btn op-btn-save');
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
        this.navService.setNavInfo('bay-form', true, this.bayId);
        this.scrollService.setMovedScroll(true, '');
        this.devices = [];
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

    onDeleteRows() {
        let deviceIds = [];
        let promiseList = [];
        this.contentLoaded = false;
        for (let i = 0; i < this.selectedRows.length; i++) {
            let devDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            deviceIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, devDeleteURL));
        }
        if (deviceIds.length > 0) {
            forkJoin(promiseList).subscribe(results => {
                let leftDevices = [];
                for (let i = 0; i < this.devices.length; i++) {
                    if (deviceIds.indexOf(this.devices[i].mrid) < 0) {
                        leftDevices.push(this.devices[i]);
                    }
                }
                this.devices = leftDevices;
                this.selectedRows = [];
                this.contentLoaded = true;
                console.log('Success in device Deleting', results);
            }, err => {
                this.devices = [];
                this.contentLoaded = true;
                console.log("Can't delete device", err);
            });
        } else {
            this.devices = [];
            this.contentLoaded = true;
            console.warn('Empty Device Id List - Delete Device Function');
        }
    }

    editDevice(device) {
        let self = this;
        this.navService.setNavInfo('dev-form', true, device.mrid);
        setTimeout(function () {
            self.deviceFormService.setDeviceFormInfo(false, self.bayId, device);
            self.scrollService.setMovedScroll(true, 'device-form');
        }, 100);

    }

    onAddNewDevice() {
        let self = this;
        this.navService.setNavInfo('dev-form', true, '');
        setTimeout(function () {
            self.deviceFormService.setDeviceFormInfo(true, self.bayId, null);
            self.scrollService.setMovedScroll(true, 'device-form');
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
            settingInfo.visible = [
                'MrId','Name','DeviceTypeMrID','Description',
                'Location.Lat','Location.Lon','Location.Alt',
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.deviceCols = this.checkColVisibility(this.deviceCols, settingInfo.visible);
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
