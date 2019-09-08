import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {NavigationService} from "../../../core/services/navigation.service";
import {ExpandingPartnerChildrenService} from "../../../core/services/expanding-partner-children.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-partner-substation-table',
    templateUrl: './partner-substation-table.component.html',
    styleUrls: ['./partner-substation-table.component.css']
})


export class PartnerSubstationTableComponent implements OnInit {

    substations: Array<Substation>;
    partnerMrID: string;
    subCols: any[];
    selectedRows: Array<Substation>;
    accessToken: string;
    apiURL: string;

    contentLoaded: boolean;
    isHideFilter: boolean;
    isEnabled: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(private expandPartnerChildService: ExpandingPartnerChildrenService,
                private httpService: HttpServiceHelper,
                private settingService: SettingService,
                private navService: NavigationService) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.contentLoaded = false;
        this.partnerMrID = '';
        this.isEnabled = false;
        this.substations = [];
        this.selectedRows = [];
        this.isHideFilter = false;
        this.apiURL = `${config.client_info.apiURL.serverURL}/partners/`;

        this.tableId = 'partner-substation-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.subCols = [
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
        this.initTableSetting();
        this.expandPartnerChildService.getPartnerChildrenInfo().subscribe(substationInfo => {
            if(substationInfo.name == 'substation'){
                this.isEnabled = substationInfo.mode;
                this.partnerMrID = substationInfo.data;

                this.getSubstations();
            }
        });
    }

    getSubstations() {
        this.contentLoaded = false;
        let apiURL = this.apiURL + this.partnerMrID + '/substations';
        this.httpService.httpGetRequest(this.accessToken, apiURL).subscribe((res: any) => {
            this.substations = res;
            this.contentLoaded = true;
        }, error => {
            console.error("Can't get substation list", error);
            this.substations = [];
            this.contentLoaded = true;
        });
    }

    onCloseComponent() {
        this.navService.setNavInfo('partner-form', true, '');
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
                'MrId','Description',
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
