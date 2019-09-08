import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateDeviceTypeService} from "../../../core/services/update-device-type.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {ConfirmationService} from "primeng/api";
import {DeviceTypeFormService} from "../../../core/services/device-type-form.service";

declare var config;

@Component({
    selector: 'app-device-type-form',
    templateUrl: './device-type-form.component.html',
    styleUrls: ['./device-type-form.component.css'],
    providers: [ConfirmationService]
})
export class DeviceTypeFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;

    devType: DeviceType;

    isFormChanged: boolean;

    accessToken: string;
    apiURL: string;

    constructor(private httpService: HttpServiceHelper,
                private deviceTypeFormService: DeviceTypeFormService,
                private scrollService: ScrollMovingService,
                private updateDeviceTypeService: UpdateDeviceTypeService,
                private navService: NavigationService,
                private confirmationService: ConfirmationService) {

        this.isFormChanged = false;

        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();
        this.apiURL = `${config.client_info.apiURL.serverURL}/devicetypes`;
    }

    ngOnInit() {
        this.deviceTypeFormService.getDeviceTypeFormInfo().subscribe(formInfo => {
            this.isEnabled = formInfo.showMode;
            this.formData = formInfo.value;
            this.formMode = formInfo.type;
            if (this.formMode) { //Add Mode
                this.initFormData();
            }
            this.devType = JSON.parse(JSON.stringify(this.formData));
            this.isFormChanged = false;
        })
    }

    initFormData() {
        this.formData = {
            mrid: '',
            vendor: '',
            hwRev: '',
            swRev: '',
            serNum: '',
            model: '',
            owner: '',
            primeOps: '',
            secondOps: ''
        }
    }

    initFormFields() {
        this.devType = {
            mrid: '',
            vendor: '',
            hwRev: '',
            swRev: '',
            serNum: '',
            model: '',
            owner: '',
            primeOps: '',
            secondOps: ''
        };

    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let postBody = JSON.parse(JSON.stringify(this.devType));
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody)
                    .subscribe((res: any) => {
                        this.formData = postBody;
                        this.updateDeviceTypeService.setDeviceTypeInfo(true, null, postBody);
                        this.initFormFields();
                        this.initFormData();
                        this.isFormChanged = false;
                        console.log('Success in add device type', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in add device type', err);
                    });
            } else { //Edit mode
                let deviceTypeEditURL = this.apiURL + '/' + this.formData.mrid;
                this.httpService.httpPutRequest(this.accessToken, deviceTypeEditURL, postBody)
                    .subscribe((res: any) => {
                        this.updateDeviceTypeService.setDeviceTypeInfo(false, this.formData.mrid, postBody);
                        this.formData = postBody;
                        this.isFormChanged = false;
                        console.log('Success in update measurements', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in update measurements', err);
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
        this.isEnabled = false;
        this.isFormChanged = false;
        this.initFormFields();
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
        return (this.devType.mrid.trim() != "" &&
            this.devType.vendor.trim() != "" &&
            this.devType.hwRev.trim() != "" &&
            this.devType.swRev.trim() != "")
    }

    checkFormChange() {
        this.isFormChanged = (this.devType.mrid != this.formData.mrid ||
            this.devType.vendor != this.formData.vendor ||
            this.devType.hwRev != this.formData.hwRev ||
            this.devType.swRev != this.formData.swRev ||
            this.devType.serNum != this.formData.serNum ||
            this.devType.model != this.formData.model ||
            this.devType.owner != this.formData.owner ||
            this.devType.primeOps != this.formData.primeOps ||
            this.devType.secondOps != this.formData.secondOps);
    }

    mridChange(newVal: string) {
        this.devType.mrid = newVal;
        this.checkFormChange();
    }

    vendorChange(newVal: string){
        this.devType.vendor = newVal;
        this.checkFormChange();
    }
    serNumChange(newVal: string){
        this.devType.serNum = newVal;
        this.checkFormChange();
    }
    hwRevChange(newVal: string){
        this.devType.hwRev = newVal;
        this.checkFormChange();
    }
    swRevChange(newVal: string){
        this.devType.swRev = newVal;
        this.checkFormChange();
    }
    modelChange(newVal: string){
        this.devType.model = newVal;
        this.checkFormChange();
    }
    ownerChange(newVal: string){
        this.devType.owner = newVal;
        this.checkFormChange();
    }
    primeOpsChange(newVal: string){
        this.devType.primeOps = newVal;
        this.checkFormChange();
    }
    secondOpsChange(newVal: string){
        this.devType.secondOps = newVal;
        this.checkFormChange();
    }


}
