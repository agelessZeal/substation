import {Component, OnInit} from '@angular/core';
import {PartnerFormService} from "../../../core/services/partner-form.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {SettingService} from "../../../core/services/setting.service";
import {UpdatePartnerService} from "../../../core/services/update-partner.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {forkJoin} from "rxjs";
import {AuthService} from "../../../core/services/auth.service";
import {SubFormService} from "../../../core/services/sub-form.service";
import {UpdateSubstationService} from "../../../core/services/update-substation.service";
import {HttpErrorResponse} from "@angular/common/http";

declare function checkTable(tblId, tdInfo): any;

declare function initTable(tblId): any;

declare function readTable(tblId): any;

declare function updateTableWidth(tblName, tdInfo): any;

declare var config;


@Component({
    selector: 'app-virtual-substation-table',
    templateUrl: './virtual-substation-table.component.html',
    styleUrls: ['./virtual-substation-table.component.css']
})
export class VirtualSubstationTableComponent implements OnInit {

    substations: Array<Substation>;
    subCols: any[];

    contactCols: any[];
    selectedRows: Array<Substation>;

    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(
        private authService: AuthService,
        private subFormService: SubFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private settingService: SettingService,
        private updateSubstationService: UpdateSubstationService,
        private naveService: NavigationService) {

        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.substations = [];
        this.apiURL = `${config.client_info.apiURL.serverURL}/virtual_substations`;
        this.selectedRows = [];

        this.tableId = 'virtual-substation-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.subCols = [
            {field: 'partnermrid', header: 'PMrId', group:''},
            {field: 'mrid', header: 'MrId', group:''},
            {field: 'description', header: 'Description', group:''},
            {field: 'latitude', header: 'Location.Lat', group:'location'},
            {field: 'longitude', header: 'Location.Lon', group:'location'},
            {field: 'altitude', header: 'Location.Alt', group:'location'},
            {field: 'number', header: 'Address.Number', group:'address'},
            {field: 'street', header: 'Address.Street', group:'address'},
            {field: 'city', header: 'Address.City', group:'address'},
            {field: 'locality', header: 'Address.Locality', group:'address'},
            {field: 'zip', header: 'Address.Zip', group:'address'},
            {field: 'country', header: 'Address.Country', group:'address'},
            {field: 'region', header: 'Address.Region', group:'address'},
        ];
    }

    ngOnInit() {
        this.getVirtualSubstations();
        this.initTableSetting();
        //Getting table setting from localstorage.
        this.updateSubstationService.getSubstationInfo().subscribe(updateInfo => {
            if (updateInfo.mode) {
                console.log(updateInfo.newSub);
                this.substations.push(updateInfo.newSub);
            } else {
                for (let i = 0; i < this.substations.length; i++) {
                    if (this.substations[i].mrid == updateInfo.mrid) {
                        this.substations[i] = updateInfo.newSub;
                    }
                }
            }
        });

    }

    getVirtualSubstations() {
        let subIdList = [];
        let promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe((res: any) => {
            subIdList = res;
            for (let i = 0; i < subIdList.length; i++) {
                let subDetailURL = this.apiURL + '/' + subIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, subDetailURL));
            }
            if (subIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.substations = results;
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get virtual substation list", err);
                    this.substations = [];
                    this.contentLoaded = true;
                })
            } else {
                console.log("Can't get virtual substation list");
                alert('No virtual substation data is accessible');
                this.authService.setAuthInfo({login_st:false}); ////888888888888888888888888
                // this.substations = [];
                this.contentLoaded = true;

            }
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            console.error("Can't get virtual substation list", error);
            this.substations = [];
            this.contentLoaded = true;
        });
    }

    httpErrorHandler(error: any) {
        console.error(error);
        switch (error.status) {
            case 400:
                console.log('Bad Request');
                break;
            case 401:
                this.authService.setAuthInfo({login_st:false});
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
        }
    }

    onDeleteRows() {
        let subIds = [];
        let promiseList = [];
        for (let i = 0; i < this.selectedRows.length; i++) {
            let subDeleteURL = this.apiURL + '/' + this.selectedRows[i].mrid;
            subIds.push(this.selectedRows[i].mrid);
            promiseList.push(this.httpService.httpDeleteRequest(this.accessToken, subDeleteURL));
        }
        if (subIds.length > 0) {
            forkJoin(promiseList).subscribe(results => {
                let leftSubstations = [];
                for (let i = 0; i < this.substations.length; i++) {
                    if (subIds.indexOf(this.substations[i].mrid) < 0) {
                        leftSubstations.push(this.substations[i]);
                    }
                }
                this.substations = leftSubstations;
                this.selectedRows = [];
                this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, err => {
                this.substations = [];
                this.contentLoaded = true;
                console.error('Error in substations Deleting', err);
            })
        } else {
            this.substations = [];
            this.contentLoaded = true;
            console.log('Error in substations Deleting due to the Empty String');
        }
    }

    editSubstation(sub) {
        let self = this;
        this.naveService.setNavInfo('virtual-substation-form', true, sub.mrid);
        setTimeout(function () {
            self.subFormService.setSubFormInfo(false, sub, true);
            self.scrollService.setMovedScroll(true, 'substation-form');
        }, 100);

    }

    onAddNewSubstation() {
        let self = this;
        this.naveService.setNavInfo('virtual-substation-form', true, '');
        setTimeout(function () {
            self.subFormService.setSubFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'substation-form');
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
                'PMrId','MrId','Description',
                'Location.Lat','Location.Lon','Location.Alt',
                'Address.Number','Address.Street','Address.City',
                'Address.Locality','Address.Zip','Address.Country','Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.subCols = this.checkColVisibility(this.subCols, settingInfo.visible);
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
