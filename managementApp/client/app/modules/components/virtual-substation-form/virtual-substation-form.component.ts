import {Component, OnInit} from '@angular/core';
import {ConfirmationService, SelectItem} from "primeng/api";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {SettingService} from "../../../core/services/setting.service";
import {SubFormService} from "../../../core/services/sub-form.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateSubstationService} from "../../../core/services/update-substation.service";
import {ExpandingBayService} from "../../../core/services/expanding-bay.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {UserRole} from "../../../core/interfaces/user-role";
import {AddressRole} from "../../../core/interfaces/address-role";
import {forkJoin} from "rxjs";

declare function checkTable(tblId, tdInfo): any;
declare function initTable(tblId): any;
declare function readTable(tblId): any;
declare function updateTableWidth(tblName, tdInfo): any;
declare var config;

@Component({
    selector: 'app-virtual-substation-form',
    templateUrl: './virtual-substation-form.component.html',
    styleUrls: ['./virtual-substation-form.component.css'],
    providers: [ConfirmationService]
})
export class VirtualSubstationFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;

    partnerMrID: string;
    mrID: string;
    description: string;

    latitude: number;
    longitude: number;
    altitude: number;

    addressNumber: string;
    street: string;
    city: string;
    locality: string;
    zip: string;
    country: string;
    region: string;

    contactRoles: SelectItem[];
    addressRole: string[];

    isFormChanged: boolean;
    accessToken: string;
    apiURL: string;

    newContact: Contact;
    contactCols: any[];
    contacts: any[];
    partnerCols: any[];
    addressCols: any[];
    displayAddModal: boolean;
    displayRealSubAddModal: boolean;
    displayPartnerModal: boolean;

    partners: Array<Partner>;
    selectedPartnerRow: Partner;
    contentLoaded: boolean;
    isHideFilter: boolean;

    isShowSetting: boolean;
    curSelColsCnt: number;
    tableId: string;
    tableSettingName: string;

    realSubList: any[];
    subCols: any[];
    curSelRealSub: string;

    constructor(private httpService: HttpServiceHelper,
                private settingService: SettingService,
                private subFormService: SubFormService,
                private scrollService: ScrollMovingService,
                private updateSubstationService: UpdateSubstationService,
                private expandBayService: ExpandingBayService,
                private navService: NavigationService,
                private confirmationService: ConfirmationService) {

        this.isFormChanged = false;
        this.contentLoaded = false;
        this.isHideFilter = false;
        this.partners = [];
        this.contactRoles = [];
        this.addressRole = [];
        this.displayAddModal = false;
        this.displayPartnerModal = false;
        this.displayRealSubAddModal = false;
        this.contactCols = [
            {field: 'firstname', header: 'First Name'},
            {field: 'lastname', header: 'Last Name'},
            {field: 'phone', header: 'Phone'},
            {field: 'email', header: 'Email'},
            {field: 'role', header: 'Role'},
            {field: 'userid', header: 'UserID'},
        ];

        this.tableId = 'substation-partner-tbl';
        this.tableSettingName = this.tableId + '_setting';
        this.isShowSetting = false;

        this.partnerCols = [
            {field: 'mrid', header: 'MrId', group: ''},
            {field: 'eicCode', header: 'EicCode', group: ''},
            {field: 'role', header: 'Role', group: 'role'},
            {field: 'description', header: 'Description', group: ''},
            {field: 'number', header: 'Address.Number', group: 'registeredseat'},
            {field: 'street', header: 'Address.Street', group: 'registeredseat'},
            {field: 'city', header: 'Address.City', group: 'registeredseat'},
            {field: 'locality', header: 'Address.Locality', group: 'registeredseat'},
            {field: 'zip', header: 'Address.Zip', group: 'registeredseat'},
            {field: 'country', header: 'Address.Country', group: 'registeredseat'},
            {field: 'region', header: 'Address.Region', group: 'registeredseat'},
        ];

        this.newContact = {firstname: '', lastname: '', phone: '', email: '', role: UserRole.manager, userid: ''};
        this.selectedPartnerRow = {mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: ''};

        for (let item in UserRole) {
            if (isNaN(Number(item))) {
                this.contactRoles.push({label: UserRole[item], value: UserRole[item]});
            }
        }

        for (let item in AddressRole) {
            if (isNaN(Number(item))) {
                this.addressRole.push(AddressRole[item]);
            }
        }

        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = `${config.client_info.apiURL.serverURL}/virtual_substations`;

        this.realSubList = [];
        this.curSelRealSub = '';
        this.subCols = [
            {field: 'substationmrid', header: 'MrID'},
            {field: 'role', header: 'Role'},
        ];
    }

    ngOnInit() {
        this.subFormService.getSubFormInfo().subscribe(subFormInfo => {
            this.isEnabled = subFormInfo.showMode;
            this.formData = subFormInfo.value;
            this.formMode = subFormInfo.type;
            if (this.formMode) { //Add Mode
                this.initFormData();
            }
            this.setSubDetails();
        })
    }

    setSubDetails() {
        this.partnerMrID = this.formData.partnermrid;
        this.mrID = this.formData.mrid;
        this.description = this.formData.description;

        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;

        this.contacts = JSON.parse(JSON.stringify(this.formData.contacts)); //Array copy

        this.addressNumber = this.formData.address.number;
        this.street = this.formData.address.street;
        this.city = this.formData.address.city;
        this.locality = this.formData.address.locality;
        this.zip = this.formData.address.zip;
        this.country = this.formData.address.country;
        this.region = this.formData.address.region;

        this.realSubList = JSON.parse(JSON.stringify(this.formData.substations));

        this.isFormChanged = false;
        this.getPartners();
    }

    initFormFields() {
        this.partnerMrID = this.mrID = this.description = '';
        this.latitude = this.longitude = this.altitude = 0;
        this.contacts = [];
        this.addressNumber = this.street = this.city = this.locality = this.zip = this.country = this.region = '';
        this.selectedPartnerRow = {
            mrid: '',
            eicCode: '',
            contacts: [],
            addresses: [],
            users: [],
            description: ''
        };
        this.realSubList = [];
    }

    initFormData() {
        this.formData = {
            partnermrid: '',
            mrid: '',
            location: {latitude: 0, longitude: 0, altitude: 0},
            contacts: [],
            address: {
                number: '',
                street: '',
                city: '',
                locality: '',
                zip: '',
                country: '',
                region: '',
                // role: AddressRole.registered,
            },
            substations: [],
            description: '',
        }
    }

    onBaysTable() {
        let self = this;
        this.navService.setNavInfo('bay-list', true, this.formData.mrid);
        setTimeout(function () {
            self.expandBayService.setBayStatus(true, self.formData.mrid);
            self.scrollService.setMovedScroll(true, 'bay-list');
        }, 100)
    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let postBody = {
                partnermrid: this.partnerMrID,
                mrid: this.mrID,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                contacts: this.contacts,
                address: {
                    number: this.addressNumber,
                    street: this.street,
                    city: this.city,
                    locality: this.locality,
                    zip: this.zip,
                    country: this.country,
                    region: this.region,
                    // role: this.role,
                },
                description: this.description,
                substations: this.realSubList
            };

            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody)
                    .subscribe((res: any) => {
                        this.formData = postBody;
                        this.updateSubstationService.setSubstationInfo(true, null, postBody);
                        this.initFormData();
                        this.initFormFields();
                        this.isFormChanged = false;
                        console.log('Success in add substation', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in add substation', err);
                    });
            } else { //Edit mode
                let subEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, subEditURL, postBody)
                    .subscribe((res: any) => {
                        this.updateSubstationService.setSubstationInfo(false, this.formData.mrid, postBody);
                        this.formData = postBody;
                        this.isFormChanged = false;
                        console.log('Success in update substations', postBody);
                    }, err => {
                        this.formData = {};
                        this.isFormChanged = false;
                        console.log('Error in update substations', err);
                    });
            }

        }
    }

    isChanged() {
        let opSaveBtn: any;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
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
        this.navService.setNavInfo('sub-list', true, '');
        const htmlElem = document.getElementsByClassName('mg-width-virtual');
        htmlElem[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        this.initFormFields();
        this.initFormData();
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

    checkValidation() {
        if (this.partnerMrID.trim() == "") {
            return false;
        }
        if (this.mrID.trim() == "") {
            return false;
        }
        return true;
    }

    compareContacts(x: Contact, y: Contact) {
        return (x.firstname == y.firstname &&
            x.lastname == y.lastname &&
            x.phone == y.phone &&
            x.email == y.email &&
            x.userid == y.userid &&
            x.role == y.role);
    }

    checkFormChange() {
        this.isFormChanged = (this.partnerMrID != this.formData.partnermrid ||
            this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.contacts.length != this.formData.contacts.length ||
            this.addressNumber != this.formData.address.number ||
            this.street != this.formData.address.street ||
            this.city != this.formData.address.city ||
            this.locality != this.formData.address.locality ||
            this.zip != this.formData.address.zip ||
            this.country != this.formData.address.country ||
            this.region != this.formData.address.region ||
            this.description != this.formData.description ||
            this.contacts.length != this.formData.contacts.length ||
            this.realSubList.length != this.formData.substations.length);

        let sameObjCnt = 0;
        let formContacts = this.formData.contacts;
        for (let i = 0; i < this.contacts.length; i++) {
            for (let j = 0; j < formContacts.length; j++) {
                if (this.compareContacts(this.contacts[i], formContacts[j])) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.contacts.length);

        sameObjCnt = 0;
        let formSubList = this.formData.substations;
        for (let i = 0; i < this.realSubList.length; i++) {
            for (let j = 0; j < formSubList.length; j++) {
                if (this.realSubList[i].substationmrid == formSubList[j].substationmrid &&
                    this.realSubList[i].role == formSubList[j].role ) {
                    sameObjCnt++;
                }
            }
        }
        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.realSubList.length);

    }

    partnerMrIDChange(newVal: string) {
        this.partnerMrID = newVal;
        this.checkFormChange();
    }

    mrIDChange(newVal: string) {
        this.mrID = newVal;
        this.checkFormChange();
    }

    descriptionChange(newVal: string) {
        this.description = newVal;
        this.checkFormChange();
    }


    zipChange(newVal: string) {
        this.zip = newVal;
        this.checkFormChange();
    }

    streetChange(newVal: string) {
        this.street = newVal;
        this.checkFormChange();
    }

    numberChange(newVal: string) {
        this.addressNumber = newVal;
        this.checkFormChange();
    }

    cityChange(newVal: string) {
        this.city = newVal;
        this.checkFormChange();
    }

    latitudeChange(newVal: number) {
        this.latitude = newVal;
        this.checkFormChange();
    }

    longitudeChange(newVal: number) {
        this.longitude = newVal;
        this.checkFormChange();
    }

    altitudeChange(newVal: number) {
        this.altitude = newVal;
        this.checkFormChange();
    }

    localityChange(newVal: string) {
        this.locality = newVal;
        this.checkFormChange();
    }

    countryChange(newVal: string) {
        this.country = newVal;
        this.checkFormChange();
    }

    regionChange(newVal: string) {
        this.region = newVal;
        this.checkFormChange();
    }

    newFirstNameChange(newVal: string) {
        this.newContact.firstname = newVal;
    }

    newLastNameChange(newVal: string) {
        this.newContact.lastname = newVal;
    }

    newPhoneChange(newVal: string) {
        this.newContact.phone = newVal;
    }

    newEmailChange(newVal: string) {
        this.newContact.email = newVal;
    }

    newUserIDChange(newVal: string) {
        this.newContact.userid = newVal;
    }

    newRoleChange(newVal: string) {
        this.newContact.role = newVal;
    }

    onShowAddDialog() {
        this.displayAddModal = true;
        this.newContact = {firstname: '', lastname: '', phone: '', email: '', role: UserRole.manager, userid: ''};
    }

    onDeleteSub(item: any) {
        for (let i = 0; i<this.realSubList.length; i++) {
            if(this.realSubList[i].substationmrid == item.substationmrid && this.realSubList[i].role == item.role) {
                this.realSubList.splice(i,1);
                break;
            }
        }
        this.checkFormChange();
    }

    onShowRealSubForm() {
        this.displayRealSubAddModal = true;
    }

    onAddRealSub(item: any) {
        this.displayRealSubAddModal = false;
        // check duplication
        let isexist = false;
        for (let i = 0; i<this.realSubList.length; i++) {
            if(this.realSubList[i].substationmrid == item.substationmrid && this.realSubList[i].role == item.role) {
                 isexist = true;
                 break;
            }
        }
        if (!isexist) {
            this.realSubList.push(item);
            this.checkFormChange();
        }
    }

    onDiscardRealSub() {
        this.displayRealSubAddModal = false;
    }

    onDiscard() {
        this.displayAddModal = false;
    }

    onAddRow() {
        if (this.newContact.userid.trim() == "") return;
        this.contacts.push(this.newContact);
        this.displayAddModal = false;
        this.newContact = {firstname: '', lastname: '', phone: '', email: '', role: UserRole.manager, userid: ''};
        this.isFormChanged = true;
        this.checkFormChange();
    }

    onContactEditComplete(newVal) {
        this.checkFormChange();
    }

    onDeleteContact(contactVal: Contact) {
        let indexof = this.contacts.indexOf(contactVal);
        if (indexof > -1) {
            this.contacts.splice(indexof, 1)
        }
        this.checkFormChange();
    }

    onShowPartnersDialog() {
        this.initTableSetting();
        this.displayPartnerModal = true;
    }

    onRowSelect(event) {
        console.log(this.selectedPartnerRow);
    }

    onRowUnselect(event) {
        console.log(this.selectedPartnerRow);
    }

    selectAllRows(event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedPartnerRow);
        } else {
            // alert('all rows diselected');

        }
    }

    getPartners() {
        let partnerIdList = [];
        let promiseList = [];
        let partnerListURL = `${config.client_info.apiURL.serverURL}/partners`;
        this.httpService.httpGetRequest(this.accessToken, partnerListURL).subscribe((res: any) => {
            partnerIdList = res;
            for (let i = 0; i < partnerIdList.length; i++) {
                let partnerDetailURL = partnerListURL + '/' + partnerIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, partnerDetailURL));
            }
            if (partnerIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.partners = results;
                    for (let j = 0; j < results.length; j++) {
                        if (results[j].mrid == this.partnerMrID) {
                            this.selectedPartnerRow = results[j];
                        }
                    }
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get partners list", err);
                    this.partners = [];
                    this.selectedPartnerRow = {
                        mrid: '',
                        eicCode: '',
                        contacts: [],
                        addresses: [],
                        users: [],
                        description: ''
                    };
                    this.contentLoaded = true;
                })
            } else {
                console.log("Can't get partners list");
                this.partners = [];
                this.selectedPartnerRow = {
                    mrid: '',
                    eicCode: '',
                    contacts: [],
                    addresses: [],
                    users: [],
                    description: ''
                };
                this.contentLoaded = true;
            }
        }, error => {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            } else {
                alert(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
            }
            console.error("Can't get partners list", error);
            this.partners = [];
            this.selectedPartnerRow = {mrid: '', eicCode: '', contacts: [], addresses: [], users: [], description: ''};
            this.contentLoaded = true;
        });
    }

    onDiscardPartner() {
        this.displayPartnerModal = false;
    }

    onSelectPartner() {
        if (this.selectedPartnerRow && this.selectedPartnerRow.mrid) {
            this.displayPartnerModal = false;
            this.partnerMrID = this.selectedPartnerRow.mrid;
            this.isFormChanged = true;
            this.checkFormChange();
        }
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
            settingInfo.visible = [
                'MrId', 'EicCode', 'Role', 'Description',
                'Address.Number', 'Address.Street', 'Address.City',
                'Address.Locality', 'Address.Zip', 'Address.Country', 'Address.Region'
            ];
            localStorage.setItem(this.tableSettingName, JSON.stringify(settingInfo));
        }

        this.isHideFilter = !settingInfo.filter;
        this.partnerCols = this.checkColVisibility(this.partnerCols, settingInfo.visible);
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
