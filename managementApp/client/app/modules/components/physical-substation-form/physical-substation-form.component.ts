import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {forkJoin} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {AuthService} from "../../../core/services/auth.service";
import {UserRole} from "../../../core/interfaces/user-role";
import {VirtualSubstationRole} from "../../../core/interfaces/virtual-substation-role";

declare function checkTable(tblId, tdInfo): any;

declare function initTable(tblId): any;

declare function readTable(tblId): any;

declare function updateTableWidth(tblName, tdInfo): any;

declare var config;

@Component({
    selector: 'app-physical-substation-form',
    templateUrl: './physical-substation-form.component.html',
    styleUrls: ['./physical-substation-form.component.css']
})
export class PhysicalSubstationFormComponent implements OnInit {

    @Input() displayModal: boolean;
    @Output() closeForm = new EventEmitter();
    @Output() addNewItem = new EventEmitter();

    accessToken: string;
    apiURL: string;
    isHideFilter: boolean;
    contentLoaded: boolean;

    substations: any[];
    selectedRow: Substation;
    selectedRole: string;
    vRoles: any[];
    subCols: any[];
    tableId: string;

    constructor(private authService: AuthService,
                private httpService: HttpServiceHelper) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.isHideFilter = false;
        this.substations = [];
        this.subCols = [
            {field: 'partnermrid', header: 'PMrId', group: ''},
            {field: 'mrid', header: 'MrId', group: ''},
            {field: 'description', header: 'Description', group: ''},
            {field: 'latitude', header: 'Location.Lat', group: 'location'},
            {field: 'longitude', header: 'Location.Lon', group: 'location'},
            {field: 'altitude', header: 'Location.Alt', group: 'location'},
            /*{field: 'number', header: 'Address.Number', group: 'address'},
            {field: 'street', header: 'Address.Street', group: 'address'},
            {field: 'city', header: 'Address.City', group: 'address'},
            {field: 'locality', header: 'Address.Locality', group: 'address'},
            {field: 'zip', header: 'Address.Zip', group: 'address'},
            {field: 'country', header: 'Address.Country', group: 'address'},
            {field: 'region', header: 'Address.Region', group: 'address'},*/
        ];
        this.tableId = "v-p-substation-list";
        this.apiURL = `${config.client_info.apiURL.serverURL}/substations`;
        this.selectedRow = {partnermrid:'', mrid:'', location:null, contacts:null, address:null, description:''};
        this.selectedRole = '';
        this.vRoles = [];
        for (let item in VirtualSubstationRole) {
            if (isNaN(Number(item))) {
                this.vRoles.push({label: VirtualSubstationRole[item], value: VirtualSubstationRole[item]});
            }
        }

    }

    ngOnInit() {
        this.contentLoaded = false;
    }

    getSubstations() {
        if(this.substations.length>0) return;
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
                    console.log("Can't get substation list", err);
                    this.substations = [];
                    this.contentLoaded = true;
                })
            } else {
                console.log("Can't get substation list");
                alert('No substation data is accessible');
                // this.authService.setAuthInfo({login_st:false}); ////888888888888888888888888
                // this.substations = [];
                this.contentLoaded = true;

            }
        }, (error: HttpErrorResponse) => {
            this.httpErrorHandler(error);
            console.error("Can't get substation list", error);
            this.substations = [];
            this.contentLoaded = true;
        });
    }

    httpErrorHandler(error: any) {
        const msgPrefix = "The remote server returned an error: ";
        const err401Msg = "(401) Unauthorized.";
        switch (error.status) {
            case 400:
                let errMsg = error.error.Message;
                let idx = errMsg.indexOf(msgPrefix);
                if (idx > -1) {
                    let trueMsgPart = errMsg.substr(msgPrefix.length);
                    alert(trueMsgPart);
                    if (trueMsgPart == err401Msg) {
                        this.authService.setAuthInfo({login_st: false})
                    }
                } else {
                    alert(errMsg);
                }
                break;
            case 401:
                this.authService.setAuthInfo({login_st: false});
                break;
            default:
                alert(`Backend returned code ${error.status}, body was: ${error.error.Message}`);
        }
    }

    onTblFilter(ev, item, dt) {
        let field = (item.group != '') ? item.group + '.' + item.field : item.field;
        dt.filter(ev.target.value, field, item.filterMatchMode);
    }

    onDiscard() {
        ///Send Hide Event to parent
        this.closeForm.emit('closed form');
    }

    onAddRow() {
        this.addNewItem.emit({substationmrid:this.selectedRow.mrid, role: this.selectedRole});
    }

    onShowDialog() {
        this.getSubstations();
        if(this.selectedRole == '') {
            this.selectedRole = this.vRoles[0].value;
        }
    }
}
