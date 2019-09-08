import {Component, OnInit} from '@angular/core';
import {DeviceTypeFormService} from "../../../core/services/device-type-form.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateDeviceTypeService} from "../../../core/services/update-device-type.service";
import {forkJoin} from "rxjs";
import {NavigationService} from "../../../core/services/navigation.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-device-type-table',
    templateUrl: './device-type-table.component.html',
    styleUrls: ['./device-type-table.component.css']
})
export class DeviceTypeTableComponent implements OnInit {

    deviceTypes: Array<DeviceType>;
    deviceTypeCols: any[];
    locationCols: any[];
    addressCols: any[];
    contactCols: any[];
    selectedRows: Array<DeviceType>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;
    
    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;
    
    constructor(
        private deviceTypeFormService: DeviceTypeFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private settingService: SettingService,
        private navService: NavigationService,
        private updateDeviceTypeService: UpdateDeviceTypeService) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.deviceTypes = [];
        this.selectedRows = [];
        this.isHideFilter = false;
        this.apiURL = `${config.client_info.apiURL.serverURL}/devicetypes`;

        this.tableId = 'device-type-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.deviceTypeCols = [
            {field: 'mrid', header: 'MrID', group:''},
            {field: 'vendor', header: 'Vendor', group:''},
            {field: 'hwRev', header: 'HwRev', group:''},
            {field: 'swRev', header: 'SwRev', group:''},
            {field: 'model', header: 'Model', group:''},
            {field: 'owner', header: 'Owner', group:''},
            {field: 'primeOps', header: 'PrimeOps', group:''},
            {field: 'secondOps', header: 'SecondOps', group:''},
        ];
        
    }

    ngOnInit() {

        this.getDeviceTypes();
        this.initTableSetting();
        
        this.updateDeviceTypeService.getDeviceTypeInfo().subscribe(updateInfo => {
            if (updateInfo.mode) {
                console.log(updateInfo.newDeviceType);
                this.deviceTypes.push(updateInfo.newDeviceType);
            } else {
                for (let i = 0; i < this.deviceTypes.length; i++) {
                    if (this.deviceTypes[i].mrid == updateInfo.mrid) {
                        this.deviceTypes[i] = updateInfo.newDeviceType;
                    }
                }
            }
        });
    }

    getDeviceTypes() {
        let deviceTypeIdList = [];
        let promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe((res: any) => {
            deviceTypeIdList = res;
            for (let i = 0; i < deviceTypeIdList.length; i++) {
                let deviceTypeDetailURL = this.apiURL + '/' + deviceTypeIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, deviceTypeDetailURL));
            }
            if (deviceTypeIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.deviceTypes = results;
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get device type list", err);
                    this.deviceTypes = [];
                    this.contentLoaded = true;
                })
            } else {
                console.log("Empty device type list");
                this.deviceTypes = [];
                this.contentLoaded = true;
            }
        }, error => {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            } else {
                alert(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
            }
            console.error("Can't get device type list", error);
            this.deviceTypes = [];
            this.contentLoaded = true;
        });
    }

    onDeleteRows() {
        let devTypeIds = [];
        let promiseList = [];
        for (let i = 0; i < this.selectedRows.length; i++) {
            let subDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            devTypeIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, subDeleteURL));
        }
        if (devTypeIds.length > 0) {
            forkJoin(promiseList).subscribe(results => {
                let leftDeviceTypes = [];
                for (let i = 0; i < this.deviceTypes.length; i++) {
                    if (devTypeIds.indexOf(this.deviceTypes[i].mrid) < 0) {
                        leftDeviceTypes.push(this.deviceTypes[i]);
                    }
                }
                this.deviceTypes = leftDeviceTypes;
                this.selectedRows = [];
                this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, err => {
                this.deviceTypes = [];
                this.contentLoaded = true;
                console.error('Error in deviceTypes Deleting', err);
            })
        } else {
            this.deviceTypes = [];
            this.contentLoaded = true;
            console.log('Error in deviceTypes Deleting due to the Empty String');
        }
    }

    editDevType(devicetype) {
        let self = this;
        this.navService.setNavInfo('device-type-form', true, '');
        setTimeout(function () {
            self.deviceTypeFormService.setDeviceTypeFormInfo(false, devicetype, true);
            self.scrollService.setMovedScroll(true, 'device-type-form');
        }, 100);
    }

    onAddNewRow() {
        let self = this;
        this.navService.setNavInfo('device-type-form', true, '');
        setTimeout(function () {
            self.deviceTypeFormService.setDeviceTypeFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'device-type-form');
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
    // ====================================================
    initTableSetting() {

        readTable(this.tableId);
        let tblSettingStr = localStorage.getItem(this.tableSettingName);
        let settingInfo: any;
        if(tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        } else {
            //Write New Setting
            settingInfo = { filter: true};
            settingInfo.visible = ['MrID','Vendor','HwRev','SwRev','Model','Owner','PrimeOps','SecondOps'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.deviceTypeCols = this.checkColVisibility(this.deviceTypeCols, settingInfo.visible);
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
