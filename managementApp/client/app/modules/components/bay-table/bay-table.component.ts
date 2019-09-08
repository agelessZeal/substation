import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";

import {BayFormService} from "../../../core/services/bay-form.service";
import {UpdateBayService} from "../../../core/services/update-bay.service";
import {ExpandingBayService} from "../../../core/services/expanding-bay.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {forkJoin} from "rxjs";
import {ConfirmationService} from "primeng/api";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-bay-table',
    templateUrl: './bay-table.component.html',
    styleUrls: ['./bay-table.component.css'],
    providers: [ConfirmationService]
})
export class BayTableComponent implements OnInit {

    isEnabled: boolean;
    substationId: string;
    bays: Array<Bay>;
    bayCols: any[];

    locationCols: any[];

    selectedRows: Array<Bay>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;
    
    constructor(
        private bayFormService: BayFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private updateBayService: UpdateBayService,
        private expandBayService: ExpandingBayService,
        private settingService: SettingService,
        private navService: NavigationService,
        private confirmationService: ConfirmationService) {

        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.isEnabled = false;
        this.substationId = '';
        this.bays = [];
        this.isHideFilter = false;
        this.selectedRows = [];
        this.apiURL = `${config.client_info.apiURL.serverURL}/bays`;
        
        this.tableId = 'bay-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.bayCols = [
            {field: 'mrid', header: 'MrId', group:''},
            {field: 'name', header: 'Name', group:''},
            {field: 'description', header: 'Description', group:''},
            {field: 'latitude', header: 'Location.Lat', group:'location'},
            {field: 'longitude', header: 'Location.Lon', group:'location'},
            {field: 'altitude', header: 'Location.Alt', group:'location'},
        ];
        
    }

    ngOnInit() {

        this.expandBayService.getBayStatusInfo().subscribe(bayStatus => {
            this.isEnabled = bayStatus.mode;
            this.substationId = bayStatus.substationId;
            this.getBays();
        });

        this.updateBayService.getBayInfo().subscribe(updateInfo => {
            if (updateInfo.mode) {
                console.log(updateInfo.newBay);
                this.bays.push(updateInfo.newBay);
            } else {
                for (let i = 0; i < this.bays.length; i++) {
                    if (this.bays[i].mrid == updateInfo.mrid) {
                        this.bays[i] = updateInfo.newBay;
                    }
                }
            }
        });

        this.initTableSetting();
    }

    getBays() {
        let bayIdList = [];
        let promiseList = [];
        const getBayURL = `${config.client_info.apiURL.serverURL}/substations/${this.substationId}/bays`;
        this.httpService.httpGetRequest(this.accessToken, getBayURL)
            .subscribe((res: any) => {
                bayIdList = res;
                for (let i = 0; i < bayIdList.length; i++) {
                    let bayDetailURL = this.apiURL + '/' + bayIdList[i];
                    promiseList.push(this.httpService.httpGetRequest(this.accessToken, bayDetailURL));
                }
                if (bayIdList.length > 0) {
                    forkJoin(promiseList).subscribe(results => {
                        this.bays = results;
                        this.contentLoaded = true;
                        console.log('Success in bay listing', res);
                    }, err => {
                        console.error("Can't get Bay Details", err);
                        this.bays = [];
                        this.contentLoaded = true;
                    });
                } else {
                    console.warn('Empty Bay List');
                    this.bays = [];
                    this.contentLoaded = true;
                }
            }, err => {
                this.bays = [];
                this.contentLoaded = true;
                console.error('Error in bays listing', err);
            });
    }
    isChanged() {
        let opSaveBtn:any;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if(opSaveBtn){
            let disabledBtnCnt = 0;
            for(let i = 0 ;i<opSaveBtn.length; i++){
                if(opSaveBtn[i].disabled){
                    disabledBtnCnt ++;
                }
            }
            if(disabledBtnCnt != opSaveBtn.length){
                return true;
            }
        }else{
            return false;
        }
    }

    closeMe() {
        this.navService.setNavInfo('sub-form',true, this.substationId);
        this.scrollService.setMovedScroll(true,'');
        this.bays = [];
    }

    onCloseComponent() {
        let self = this;
        if(this.isChanged()){
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: () => {
                    self.closeMe();
                },
                reject: () => {

                }
            });
        }else{
            this.closeMe();
        }
    }

    onDeleteRows() {
        let bayIds = [];
        let promiseList = [];
        this.contentLoaded = false;
        for (let i = 0; i < this.selectedRows.length; i++) {
            bayIds.push(this.selectedRows[i].mrid);
            let deleteBayURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, deleteBayURL));
        }
        if(bayIds.length>0){
            forkJoin(promiseList).subscribe(results => {
                let leftBays = [];
                for (let i = 0; i < this.bays.length; i++) {
                    if (bayIds.indexOf(this.bays[i].mrid) < 0) {
                        leftBays.push(this.bays[i]);
                    }
                }
                this.bays = leftBays;
                this.selectedRows = [];
                this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, err =>{
                this.bays = [];
                this.contentLoaded = true;
                console.error("Can't delete bay list", err);
            });
        }else{
            console.warn('No Selected Bays');
        }
    }

    editBay(bay) {
        let self = this;
        this.navService.setNavInfo('bay-form', true, bay.mrid);
        setTimeout(function () {
            self.bayFormService.setBayFormInfo(false, self.substationId, bay);
            self.scrollService.setMovedScroll(true, 'bay-form');
        }, 100);
    }

    onAddNewBay() {
        let self = this;
        this.navService.setNavInfo('bay-form', true, '');
        setTimeout(function () {
            self.bayFormService.setBayFormInfo(true, self.substationId, null);
            self.scrollService.setMovedScroll(true, 'bay-form');
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
            settingInfo.visible = [
                'MrId','Name','Description',
                'Location.Lat','Location.Lon','Location.Alt',
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.bayCols = this.checkColVisibility(this.bayCols, settingInfo.visible);
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
