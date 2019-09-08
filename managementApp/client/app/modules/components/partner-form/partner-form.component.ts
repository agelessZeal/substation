import {Component, OnInit} from '@angular/core';
import {ConfirmationService, SelectItem} from "primeng/api";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {UpdatePartnerService} from "../../../core/services/update-partner.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {PartnerFormService} from "../../../core/services/partner-form.service";
import {UserRole} from "../../../core/interfaces/user-role";

import {PartnerRole} from "../../../core/interfaces/partner-role";
import {ExpandingPartnerChildrenService} from "../../../core/services/expanding-partner-children.service";

declare var config;

@Component({
    selector: 'app-partner-form',
    templateUrl: './partner-form.component.html',
    styleUrls: ['./partner-form.component.css'],
    providers: [ConfirmationService]
})
export class PartnerFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;

    mrID: string;
    eicCode: string;
    partnerRole: string;
    description: string;

    addressNumber: string;
    street: string;
    city: string;
    locality: string;
    zip: string;
    country: string;
    region: string;

    contactRoles: SelectItem[];
    partnerRoles: string[];

    newContact: Contact;
    contactCols: any[];
    contacts: any[];
    displayAddModal: boolean;

    isFormChanged: boolean;

    accessToken: string;
    apiURL: string;

    constructor(private httpService: HttpServiceHelper,
                private partnerFormService: PartnerFormService,
                private scrollService: ScrollMovingService,
                private updatePartnerService: UpdatePartnerService,
                private expandPartnerChildrenService: ExpandingPartnerChildrenService,
                private navService: NavigationService,
                private confirmationService: ConfirmationService) {

        this.isFormChanged = false;
        this.displayAddModal = false;

        this.contactRoles = [];
        this.partnerRoles = [];

        this.newContact = {firstname: '', lastname: '', phone: '', email: '', role: UserRole.manager, userid: ''};

        for (let item in UserRole) {
            if (isNaN(Number(item))) {
                this.contactRoles.push({label: UserRole[item], value: UserRole[item]});
            }
        }

        for (let item in PartnerRole) {
            if (isNaN(Number(item))) {
                this.partnerRoles.push(PartnerRole[item]);
            }
        }

        this.contactCols = [
            {field: 'firstname', header: 'First Name'},
            {field: 'lastname', header: 'Last Name'},
            {field: 'phone', header: 'Phone'},
            {field: 'email', header: 'Email'},
            {field: 'role', header: 'Role'},
            {field: 'userid', header: 'UserID'},
        ];

        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();

        this.apiURL = `${config.client_info.apiURL.serverURL}/partners`;

    }

    ngOnInit() {
        this.partnerFormService.getPartnerFormInfo().subscribe(subFormInfo => {
            this.formMode = subFormInfo.type;
            this.isEnabled = subFormInfo.showMode;
            this.formData = subFormInfo.value;
            if (this.formMode) { //Add Mode
                this.initFormData();
            }
            this.setPartnerDetails();
        })
    }

    setPartnerDetails() {
        this.mrID = this.formData.mrid;
        this.eicCode = this.formData.eicCode;
        this.partnerRole = this.formData.role.role;
        this.description = this.formData.description;

        this.contacts = JSON.parse(JSON.stringify(this.formData.contacts)); //Array copy

        this.addressNumber = this.formData.registeredseat.number;
        this.street = this.formData.registeredseat.street;
        this.city = this.formData.registeredseat.city;
        this.locality = this.formData.registeredseat.locality;
        this.zip = this.formData.registeredseat.zip;
        this.country = this.formData.registeredseat.country;
        this.region = this.formData.registeredseat.region;

        this.isFormChanged = false;
    }

    initFormFields() {

        this.eicCode = this.mrID = this.description = '';
        this.contacts = [];
        this.partnerRole = PartnerRole.owner;

        this.addressNumber = this.street = this.city = this.locality = this.zip = this.country = this.region = '';
    }

    initFormData() {
        this.formData = {
            eicCode: '',
            mrid: '',
            role: {role: PartnerRole.owner},
            contacts: [],
            location: {latitude: 0, longitude: 0, altitude: 0},
            registeredseat: [{number: '', street: '', city: '', locality: '', zip: '', country: '', region: ''}],
            description: '',
        }
    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let postBody = {
                eicCode: this.eicCode,
                mrid: this.mrID,
                role: {role: this.partnerRole},
                contacts: this.contacts,
                registeredseat: {
                    number: this.addressNumber,
                    street: this.street,
                    city: this.city,
                    locality: this.locality,
                    zip: this.zip,
                    country: this.country,
                    region: this.region,
                },
                description: this.description,
            };
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody)
                    .subscribe((res: any) => {
                        this.formData = postBody;
                        this.contacts = [];
                        this.updatePartnerService.setPartnerInfo(true, null, postBody);
                        this.initFormData();
                        this.initFormFields();
                        this.isFormChanged = false;
                        console.log('Success in add substation', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in add substation', err);
                    });
            } else { //Edit mode
                let partnerEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, partnerEditURL, postBody)
                    .subscribe((res: any) => {
                        this.updatePartnerService.setPartnerInfo(false, this.formData.mrid, postBody);
                        this.formData = postBody;
                        this.contacts = JSON.parse(JSON.stringify(this.formData.contacts));
                        this.isFormChanged = false;
                        console.log('Success in update partners', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in update partners', err);
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
        this.navService.setNavInfo('partner-list', true, '');
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
        if (this.eicCode.trim() == "") {
            return false;
        }
        if (this.mrID.trim() == "") {
            return false;
        }
        return true;
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

    compareContacts(x: Contact, y: Contact) {
        return (x.firstname == y.firstname &&
            x.lastname == y.lastname &&
            x.phone == y.phone &&
            x.email == y.email &&
            x.userid == y.userid &&
            x.role == y.role);
    }

    checkFormChange() {
        this.isFormChanged = (this.mrID != this.formData.mrid ||
            this.eicCode != this.formData.eicCode ||
            this.partnerRole != this.formData.role.role ||
            this.contacts.length != this.formData.contacts.length ||
            this.addressNumber != this.formData.registeredseat.number ||
            this.street != this.formData.registeredseat.street ||
            this.city != this.formData.registeredseat.city ||
            this.locality != this.formData.registeredseat.locality ||
            this.zip != this.formData.registeredseat.zip ||
            this.country != this.formData.registeredseat.country ||
            this.region != this.formData.registeredseat.region ||
            this.description != this.formData.description);
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
    }

    onShowAddDialog() {
        this.displayAddModal = true;
        this.newContact = {firstname: '', lastname: '', phone: '', email: '', role: UserRole.manager, userid: ''};
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

    onOpenContacts() {
        let self = this;
        this.navService.setNavInfo('partner-contact', true, '');
        setTimeout(function () {
            self.expandPartnerChildrenService.setPartnerChildrenStatus(true, self.formData.contacts, 'contact');
            self.scrollService.setMovedScroll(true, 'partner-contact-list');
        }, 100)
    }

    onOpenAddresses() {
        let self = this;
        this.navService.setNavInfo('partner-address', true, '');
        setTimeout(function () {
            self.expandPartnerChildrenService.setPartnerChildrenStatus(true, self.formData.mrid, 'address');
            self.scrollService.setMovedScroll(true, 'partner-address-list');
        }, 100)
    }

    onOpenSubstations() {
        let self = this;
        this.navService.setNavInfo('partner-substation', true, '');
        setTimeout(function () {
            self.expandPartnerChildrenService.setPartnerChildrenStatus(true, self.formData.mrid, 'substation');
            self.scrollService.setMovedScroll(true, 'partner-substation-list');
        }, 100)
    }

    eicCodeChange(newVal: string) {
        this.eicCode = newVal;
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

    roleChange(newVal: string) {
        this.partnerRole = newVal;
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
}
