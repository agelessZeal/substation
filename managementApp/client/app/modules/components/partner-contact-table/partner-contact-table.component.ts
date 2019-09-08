import {Component, OnInit} from '@angular/core';
import {ExpandingPartnerChildrenService} from "../../../core/services/expanding-partner-children.service";
import {ConfirmationService} from "primeng/api";
import {NavigationService} from "../../../core/services/navigation.service";
import {UpdatePartnerService} from "../../../core/services/update-partner.service";
import {SettingService} from "../../../core/services/setting.service";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;

@Component({
    selector: 'app-partner-contact-table',
    templateUrl: './partner-contact-table.component.html',
    styleUrls: ['./partner-contact-table.component.css'],
    providers: [ConfirmationService]
})
export class PartnerContactTableComponent implements OnInit {

    contacts: Array<Contact>;
    isEnabled: boolean;
    contactCols: any[];
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    constructor(private expandPartnerContactService: ExpandingPartnerChildrenService,
                private navService: NavigationService,
                private settingService: SettingService,
                private updatePartnerService: UpdatePartnerService) {
        this.contacts = [];
        this.isHideFilter = false;

        this.tableId = 'partner-contact-list';
        this.tableSettingName = this.tableId +'_setting';
        this.isShowSetting = false;
        this.contactCols = [
            {field: 'firstname', header: 'First Name', group:''},
            {field: 'lastname', header: 'Last Name', group:''},
            {field: 'phone', header: 'Phone', group:''},
            {field: 'email', header: 'Email', group:''},
            {field: 'role', header: 'Role', group:''},
            {field: 'userid', header: 'UserID', group:''},
        ];

    }

    ngOnInit() {

        this.initTableSetting();

        this.expandPartnerContactService.getPartnerChildrenInfo().subscribe(contactInfo => {
            if(contactInfo.name == 'contact'){
                this.isEnabled = contactInfo.mode;
                this.contacts = contactInfo.data;
            }
        });
        this.updatePartnerService.getPartnerInfo().subscribe(updateInfo => {
            if (!updateInfo.mode && this.isEnabled) { //Partner edit mode
                this.contacts = updateInfo.newPartner.contacts
            }
        });
    }

    onCloseComponent() {
        this.navService.setNavInfo('partner-form', true, '');
        this.isEnabled = false;
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
            settingInfo.visible = ['First Name','Last Name','Phone','Email','Role','UserID'];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.contactCols = this.checkColVisibility(this.contactCols, settingInfo.visible);
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
