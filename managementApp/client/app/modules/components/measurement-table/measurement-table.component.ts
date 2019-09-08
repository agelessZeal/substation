import {Component, OnInit} from '@angular/core';
import {MeasurementFormService} from "../../../core/services/measurement-form.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateMeasurementTypeService} from "../../../core/services/update-measurement-type.service";
import {forkJoin} from "rxjs";
import  config from '../../../../../config.json';
import {NavigationService} from "../../../core/services/navigation.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;

@Component({
    selector: 'app-measurement-table',
    templateUrl: './measurement-table.component.html',
    styleUrls: ['./measurement-table.component.css']
})
export class MeasurementTableComponent implements OnInit {

    measurements: Array<MeasurementType>;
    measurementCols: any[];
    addressCols: any[];
    contactCols: any[];
    selectedRows: Array<MeasurementType>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(
        private msFormService: MeasurementFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private navService: NavigationService,
        private settingService: SettingService,
        private updateMsService: UpdateMeasurementTypeService) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.measurements = [];
        this.selectedRows = [];
        this.isHideFilter = false;
        this.apiURL = `${config.client_info.apiURL.serverURL}/measurements`;

        this.tableId = 'measurement-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.measurementCols = [
            {field: 'id', header: 'ID', group:''},
            {field: 'name', header: 'Name', group:''},
            {field: 'description', header: 'Description', group:''},
            {field: 'unit', header: 'Unit', group:''},
            {field: 'multiplier', header: 'Multiplier', group:''},
            {field: 'format', header: 'Format', group:''},
            {field: 'aggregation', header: 'Aggregation', group:''},
        ];

    }

    ngOnInit() {

        this.getMeasurementTypes();
        this.initTableSetting();

        this.updateMsService.getMeasurementTypeInfo().subscribe(updateInfo => {
            if (updateInfo.mode) {
                console.log(updateInfo.newMsType);
                this.measurements.push(updateInfo.newMsType);
            } else {
                for (let i = 0; i < this.measurements.length; i++) {
                    if (this.measurements[i].id == updateInfo.id) {
                        this.measurements[i] = updateInfo.newMsType;
                    }
                }
            }
        });
    }

    getMeasurementTypes() {
        let msTypeIdList = [];
        let promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe((res: any) => {
            msTypeIdList = res;
            for (let i = 0; i < msTypeIdList.length; i++) {
                let subDetailURL = this.apiURL + '/' + msTypeIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, subDetailURL));
            }
            if (msTypeIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.measurements = results;
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get substation list", err);
                    this.measurements = [];
                    this.contentLoaded = true;
                })
            } else {
                console.log("Can't get substation list");
                this.measurements = [];
                this.contentLoaded = true;
            }
        }, error => {
            if(error.error instanceof ErrorEvent){
                alert(error.error.message);
            } else {
                alert(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
            }
            console.error("Can't get measurement list", error);
            this.measurements = [];
            this.contentLoaded = true;
        });
    }

    onDeleteRows() {
        let msTypeIds = [];
        let promiseList = [];
        for (let i = 0; i < this.selectedRows.length; i++) {
            let msTypeDeleteURL = this.apiURL + '/' + this.selectedRows[i].id;
            msTypeIds.push(this.selectedRows[i].id);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, msTypeDeleteURL));
        }
        if (msTypeIds.length > 0) {
            forkJoin(promiseList).subscribe(results => {
                let leftMeasurementTypes = [];
                for (let i = 0; i < this.measurements.length; i++) {
                    if (msTypeIds.indexOf(this.measurements[i].id) < 0) {
                        leftMeasurementTypes.push(this.measurements[i]);
                    }
                }
                this.measurements = leftMeasurementTypes;
                this.selectedRows = [];
                this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, err => {
                this.measurements = [];
                this.contentLoaded = true;
                console.error('Error in measurements Deleting', err);
            })
        } else {
            this.measurements = [];
            this.contentLoaded = true;
            console.log('Error in measurements Deleting due to the Empty String');
        }
    }

    editMs(ms) {
        let self = this;
        this.navService.setNavInfo('measurement-form', true, '');
        setTimeout(function () {
            self.msFormService.setMeasurementFormInfo(false, ms, true);
            self.scrollService.setMovedScroll(true, 'measurement-form');
        }, 100);
    }

    onAddNewRow() {
        let self = this;
        this.navService.setNavInfo('measurement-form', true, '');
        setTimeout(function () {
            self.msFormService.setMeasurementFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'measurement-form');
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
            settingInfo.visible = ['ID','Name','Description','Unit','Multiplier', 'Format', 'Aggregation'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.measurementCols = this.checkColVisibility(this.measurementCols, settingInfo.visible);
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
