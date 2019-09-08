import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {MeasurementFormService} from "../../../core/services/measurement-form.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {ConfirmationService} from "primeng/api";
import {UpdateMeasurementTypeService} from "../../../core/services/update-measurement-type.service";
import {MsAggregation} from "../../../core/interfaces/ms-aggregation";

declare var config;

@Component({
    selector: 'app-measurement-form',
    templateUrl: './measurement-form.component.html',
    styleUrls: ['./measurement-form.component.css'],
    providers: [ConfirmationService]
})

export class MeasurementFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;

    id: string;
    name: string;
    description: string;
    format: string;
    aggregation: string;
    unit: string;
    multiplier: string;

    enumList: any[];
    enumFlag: boolean;
    enumCols: any[];
    curSelEnum: string;
    enumValue: string;
    isEnabledEnum: boolean;

    isFormChanged: boolean;
    aggregationList: any[];

    accessToken: string;
    apiURL: string;

    constructor(private httpService: HttpServiceHelper,
                private msFormService: MeasurementFormService,
                private scrollService: ScrollMovingService,
                private updateMsService: UpdateMeasurementTypeService,
                private navService: NavigationService,
                private confirmationService: ConfirmationService) {

        this.isFormChanged = false;

        this.formMode = true;
        this.isEnabled = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();

        this.apiURL = `${config.client_info.apiURL.serverURL}/measurements`;

        this.enumCols = [
            {field: 'no', header: 'No'},
            {field: 'value', header: 'Value'},
        ];

        this.enumList = [];
        this.curSelEnum = '';
        this.enumFlag = false;
        this.enumValue = '';

        this.isEnabledEnum = true;

        this.aggregation = 'None';
        this.aggregationList = [];
        for (let item in MsAggregation) {
            if (isNaN(Number(item))) {
                this.aggregationList.push({label: MsAggregation[item], value: MsAggregation[item]});
            }
        }
    }

    ngOnInit() {
        this.msFormService.getMeasurementFormInfo().subscribe(formInfo => {
            this.isEnabled = formInfo.showMode;
            this.formData = formInfo.value;
            this.formMode = formInfo.type;
            if (this.formMode) { //Add Mode
                this.initFormData();
            }
            this.setMeasurementDetails();
        })
    }

    setMeasurementDetails() {
        this.id = this.formData.id;
        this.name = this.formData.name;
        this.description = this.formData.description;
        this.format = this.formData.format;
        this.aggregation = (this.formData.aggregation)?this.formData.aggregation:'None';
        this.unit = this.formData.unit;
        this.multiplier = this.formData.multiplier;
        this.isFormChanged = false;

        this.enumList = (this.formData.enumeration) ? JSON.parse(JSON.stringify(this.formData.enumeration.values)) : [];
        this.enumFlag = (this.formData.enumeration) ? this.formData.enumeration.flags : false;

        if (this.formData.enumeration) {
            this.isEnabledEnum = true;
        } else {
            this.isEnabledEnum = false;
        }
    }

    initFormFields() {
        this.id = this.name = this.description = this.format = this.unit = this.multiplier = '';
        this.aggregation = 'None';
        this.enumFlag = false;
        this.enumList = [];
    }

    initFormData() {
        this.formData = {
            id: '',
            name: '',
            description: '',
            format: '',
            aggregation: 'None',
            unit: '',
            multiplier: '',
            enumeration: {flags: false, values: []}
        };
    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let enumval = (this.isEnabledEnum) ? {
                flags: this.enumFlag,
                values: this.enumList,
            } : null;

            let postBody = {
                id: this.id,
                name: this.name,
                description: this.description,
                unit: this.unit,
                multiplier: this.multiplier,
                enumeration: enumval,
                format: this.format,
                aggregation: this.aggregation,

            };
            if (this.formMode) { //Add mode
                this.httpService.httpPostRequest(this.accessToken, this.apiURL, postBody)
                    .subscribe((res: any) => {
                        this.formData = postBody;
                        this.updateMsService.setMeasurementInfo(true, null, postBody);
                        this.initFormData();
                        this.initFormFields();
                        this.isFormChanged = false;
                        console.log('Success in add measurement', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in add measurement', err);
                    });
            } else { //Edit mode
                let msEditURL = this.apiURL + '/' + this.formData.id;
                this.httpService.httpPutRequest(this.accessToken, msEditURL, postBody)
                    .subscribe((res: any) => {
                        this.updateMsService.setMeasurementInfo(false, this.formData.id, postBody);
                        this.formData = postBody;
                        this.isFormChanged = false;
                        console.log('Success in update measurements', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in update measurements', err);
                    });
            }

            if(!this.isEnabledEnum) {
                this.enumList = [];
                this.curSelEnum = '';
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
        return (this.id.trim() != "" && this.unit.trim() != "" && this.multiplier.trim() != "")
    }

    checkFormChange() {

        let formEumSt = false;
        if(this.formData.enumeration) {
            formEumSt = true;
        }

        this.isFormChanged = (this.id != this.formData.id ||
            this.name != this.formData.name ||
            this.unit != this.formData.unit ||
            this.multiplier != this.formData.multiplier ||
            this.description != this.formData.description ||
            this.format != this.formData.format ||
            this.aggregation != this.formData.aggregation ||
            this.isEnabledEnum != formEumSt);

        if (this.isEnabledEnum && formEumSt) {
            this.isFormChanged = this.isFormChanged || (this.enumList.length != this.formData.enumeration.values.length);
            this.isFormChanged = this.isFormChanged || (this.enumFlag != this.formData.enumeration.flags);

            let samecnt = 0;
            let formEnumList = this.formData.enumeration.values;
            for (let i = 0; i < this.enumList.length; i++) {
                for (let j = 0; j < formEnumList.length; j++) {
                    if (this.enumList[i] == formEnumList[j]) {
                        samecnt++;
                    }
                }
            }
            this.isFormChanged = this.isFormChanged || (samecnt < this.enumList.length);
        }
    }

    idChange(newVal: string) {
        this.id = newVal;
        this.id = newVal;
        this.checkFormChange();
    }

    descriptionChange(newVal: string) {
        this.description = newVal;
        this.checkFormChange();
    }

    formatChange(newVal: string) {
        this.format = newVal;
        this.checkFormChange();
    }

    aggregationChange(newVal: string) {
        this.aggregation = newVal;
        this.checkFormChange();
    }

    nameChange(newVal: string) {
        this.name = newVal;
        this.checkFormChange();
    }

    unitChange(newVal: string) {
        this.unit = newVal;
        this.checkFormChange();
    }

    multiplierChange(newVal: string) {
        this.multiplier = newVal;
        this.checkFormChange();
    }

    onChangeEnumFlags(newVal: string) {
        this.enumFlag = newVal == 'true';
        this.checkFormChange();
    }

    // =============================================
    onOffEnumValues($ev) {
        this.isEnabledEnum = $ev;
        this.checkFormChange();
    }

    onEnumRowSelect($ev) {
        if (this.isEnabledEnum) {
            this.curSelEnum = $ev.data;
            this.enumValue = $ev.data;
        }
    }

    onEnumRowUnSelect($ev) {
        if (this.isEnabledEnum) {
            this.curSelEnum = '';
            this.enumValue = '';
        }
    }

    onDeleteEnum(enumVal) {
        let indexof = this.enumList.indexOf(enumVal);
        if (indexof > -1) {
            this.enumList.splice(indexof, 1)
        }
        this.checkFormChange();
    }

    onAddNewEnum() {
        //Check duplication enumValues
        if (this.curSelEnum.length != 0) {
            let prevIndex = this.enumList.indexOf(this.curSelEnum);
            if (this.enumList.indexOf(this.enumValue) < 0) {
                this.enumList[prevIndex] = this.enumValue;
            }
            this.curSelEnum = '';
        } else {
            if (this.enumList.indexOf(this.enumValue) < 0) {
                this.enumList.push(this.enumValue);
            }
        }
        this.enumValue = '';
        this.checkFormChange();
    }

}
