import {Component, OnInit} from '@angular/core';
import {PartnerFormService} from "../../../core/services/partner-form.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdatePartnerService} from "../../../core/services/update-partner.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";

import {forkJoin} from "rxjs";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-partner-table',
    templateUrl: './partner-table.component.html',
    styleUrls: ['./partner-table.component.css']
})


export class PartnerTableComponent implements OnInit {

    partners: Array<Partner>;
    partnerCols: any[];
    addressCols: any[];
    contactCols: any[];
    selectedRows: Array<Partner>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(
        private partnerFormService: PartnerFormService,
        private httpService: HttpServiceHelper,
        private scrollService: ScrollMovingService,
        private settingService: SettingService,
        private updatePartnerService: UpdatePartnerService,
        private navService: NavigationService) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.partners = [];
        this.apiURL = `${config.client_info.apiURL.serverURL}/partners`;
        this.selectedRows = [];

        this.tableId = 'partner-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.partnerCols = [
            {field: 'mrid', header: 'MrId', group:''},
            {field: 'eicCode', header: 'EicCode', group:''},
            {field: 'role', header: 'Role', group:'role'},
            {field: 'description', header: 'Description', group:''},
            {field: 'number', header: 'Address.Number', group:'registeredseat'},
            {field: 'street', header: 'Address.Street', group:'registeredseat'},
            {field: 'city', header: 'Address.City', group:'registeredseat'},
            {field: 'locality', header: 'Address.Locality', group:'registeredseat'},
            {field: 'zip', header: 'Address.Zip', group:'registeredseat'},
            {field: 'country', header: 'Address.Country', group:'registeredseat'},
            {field: 'region', header: 'Address.Region', group:'registeredseat'},
        ];
    }

    ngOnInit() {

        this.selectedRows = [];
        this.isHideFilter = false;

        this.contactCols = [
            {field: 'firstname', header: 'Firstname'},
            {field: 'lastname', header: 'Lastname'},
            {field: 'phone', header: 'Phone'},
            {field: 'email', header: 'Email'},
            {field: 'role', header: 'Role'},
            {field: 'userid', header: 'UserID'},
        ];

        this.getPartners();

        this.initTableSetting();

        this.updatePartnerService.getPartnerInfo().subscribe(updateInfo => {
            if (updateInfo.mode) {
                console.log(updateInfo.newPartner);
                this.partners.push(updateInfo.newPartner);
            } else {
                for (let i = 0; i < this.partners.length; i++) {
                    if (this.partners[i].mrid == updateInfo.mrid) {
                        this.partners[i] = updateInfo.newPartner;
                    }
                }
            }
        });
    }

    getPartners() {
        let partnerIdList = [];
        let promiseList = [];
        this.httpService.httpGetRequest(this.accessToken, this.apiURL).subscribe((res: any) => {
            partnerIdList = res;
            for (let i = 0; i < partnerIdList.length; i++) {
                let partnerDetailURL = this.apiURL + '/' + partnerIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, partnerDetailURL));
            }
            if (partnerIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.partners = results;
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get partners list", err);
                    this.partners = [];
                    this.contentLoaded = true;
                })
            } else {
                console.log("Can't get partners list");
                this.partners = [];
                this.contentLoaded = true;
            }
        }, error => {
            if(error.error instanceof ErrorEvent){
                alert(error.error.message);
            } else {
                alert(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
            }
            console.error("Can't get partners list", error);
            this.partners = [];
            this.contentLoaded = true;
        });
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
                let leftPartners = [];
                for (let i = 0; i < this.partners.length; i++) {
                    if (subIds.indexOf(this.partners[i].mrid) < 0) {
                        leftPartners.push(this.partners[i]);
                    }
                }
                this.partners = leftPartners;
                this.selectedRows = [];
                this.contentLoaded = true;
                console.log('Success in substation Deleting', results);
            }, err => {
                this.partners = [];
                this.contentLoaded = true;
                console.error('Error in partners Deleting', err);
            })
        } else {
            this.partners = [];
            this.contentLoaded = true;
            console.log('Error in partners Deleting due to the Empty String');
        }
    }

    onEditRow(partner) {
        let self = this;
        this.navService.setNavInfo('partner-form', true, partner.mrid);
        setTimeout(function () {
            self.partnerFormService.setPartnerFormInfo(false, partner, true);
            self.scrollService.setMovedScroll(true, 'partner-form');
        }, 100);

    }

    onAddNewRow() {
        let self = this;
        this.navService.setNavInfo('partner-form', true, '');
        setTimeout(function () {
            self.partnerFormService.setPartnerFormInfo(true, null, true);
            self.scrollService.setMovedScroll(true, 'partner-form');
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
                'MrId','EicCode','Role','Description',
                'Location.Lat','Location.Lon','Location.Alt',
                'Address.Number','Address.Street','Address.City',
                'Address.Locality','Address.Zip','Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.partnerCols = this.checkColVisibility(this.partnerCols, settingInfo.visible);
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
