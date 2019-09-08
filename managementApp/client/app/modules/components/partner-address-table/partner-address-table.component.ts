import {Component, OnInit} from '@angular/core';
import {ExpandingPartnerChildrenService} from "../../../core/services/expanding-partner-children.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-partner-address-table',
    templateUrl: './partner-address-table.component.html',
    styleUrls: ['./partner-address-table.component.css']
})

export class PartnerAddressTableComponent implements OnInit {

    addresses: Array<Address>;
    isEnabled: boolean;
    addressCols: any[];
    isHideFilter: boolean;
    partnerID: string;
    accessToken: string;
    apiURL: string;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(private expandPartnerChildService: ExpandingPartnerChildrenService,
                private httpService: HttpServiceHelper,
                private settingService: SettingService,
                private navService: NavigationService) {
        this.addresses = [];
        this.isHideFilter = false;
        this.partnerID = '';
        this.apiURL = `${config.client_info.apiURL.serverURL}/partners/`;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);

        this.tableId = 'partner-address-list';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;
        this.addressCols = [
            {field: 'number', header: 'Number', group: ''},
            {field: 'street', header: 'Street', group: ''},
            {field: 'city', header: 'City', group: ''},
            {field: 'locality', header: 'Locality', group: ''},
            {field: 'zip', header: 'Zip', group: ''},
            {field: 'country', header: 'Country', group: ''},
            {field: 'region', header: 'Region', group: ''}
        ];
    }

    ngOnInit() {

        this.initTableSetting();

        this.expandPartnerChildService.getPartnerChildrenInfo().subscribe(contactInfo => {
            if (contactInfo.name == 'address') {
                this.isEnabled = contactInfo.mode;
                this.partnerID = contactInfo.data;
                this.getAddresses();
            }
        });
    }

    onCloseComponent() {
        this.navService.setNavInfo('partner-form', true, '');
    }

    getAddresses() {
        let apiURL = this.apiURL + this.partnerID + '/addresses';
        this.httpService.httpGetRequest(this.accessToken, apiURL).subscribe((res: any) => {
            this.addresses = res;
        }, err => {
            console.error("Can't get addresses list");
            console.error(err);
        })
    }

    initTableSetting() {

        readTable(this.tableId);
        let tblSettingStr = localStorage.getItem(this.tableSettingName);
        let settingInfo: any;
        if (tblSettingStr) {
            settingInfo = JSON.parse(tblSettingStr);
        } else {
            //Write New Setting
            settingInfo = {filter: true};
            settingInfo.visible = ['Number', 'Street', 'City', 'Locality', 'Zip', 'Country', 'Region'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.addressCols = this.checkColVisibility(this.addressCols, settingInfo.visible);
        this.curSelColsCnt = settingInfo.visible.length;
    }

    checkColVisibility(colList: any, visibleColList: any) {

        for (let i = 0; i < colList.length; i++) {
            colList[i].visibility = visibleColList.indexOf(colList[i].header) > -1;
        }
        return colList;
    }

    onChangeVisibility(item) {
        checkTable(this.tableId, item);
        if (item.visibility) {
            this.curSelColsCnt += 1;
        } else {
            this.curSelColsCnt -= 1;
        }
        this.settingService.setSettingInfo(this.tableSettingName, 'visibility', {col: item.header, st: item.visibility})
    }

    onTblFilter(ev, item, dt) {
        let field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    }

    onChangeFilter() {
        this.isHideFilter = !this.isHideFilter;
        this.settingService.setSettingInfo(this.tableSettingName, 'filter', this.isHideFilter);
    }

    onColResize($ev) {
        updateTableWidth(this.tableId, $ev);
    }
}
