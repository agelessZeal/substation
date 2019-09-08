import {Component, OnInit} from '@angular/core';
import {ConfirmationService} from "primeng/api";
import {DeviceMsMtFormService} from "../../../core/services/device-ms-mt-form.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateDeviceMsMrService} from "../../../core/services/update-device-ms-mr.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {forkJoin} from "rxjs";
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {SettingService} from "../../../core/services/setting.service";

declare var config;

@Component({
    selector: 'app-device-measurement-form',
    templateUrl: './device-measurement-form.component.html',
    styleUrls: ['./device-measurement-form.component.css'],
    providers: [ConfirmationService],
})
export class DeviceMeasurementFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;

    measurementId: string;
    iec61850path: string;

    isFormChanged: boolean;
    displayMsTypesModal: boolean;

    accessToken: string;
    apiURL: string;

    measurements: Array<MeasurementType>;
    selectedMsTypeRow: MeasurementType;
    measurementCols: any[];
    contentLoaded: boolean;
    isHideFilter: boolean;


    constructor(private devMsMtFormService: DeviceMsMtFormService,
                private scrollService: ScrollMovingService,
                private updateDevMsMrService: UpdateDeviceMsMrService,
                private navService: NavigationService,
                private settingService: SettingService,
                private httpService: HttpServiceHelper,
                private confirmationService: ConfirmationService) {

        this.isFormChanged = false;
        this.contentLoaded = false;
        this.displayMsTypesModal = false;
        this.formMode = true;
        this.isEnabled = false;
        this.isHideFilter = false;
        this.measurementCols = [
            {field: 'id', header: 'ID'},
            {field: 'name', header: 'Name'},
            {field: 'description', header: 'Description'},
            {field: 'unit', header: 'Unit'},
            {field: 'multiplier', header: 'Multiplier'},
            {field: 'format', header: 'Format'},
            {field: 'aggregation', header: 'Aggregation'},
        ];
        this.selectedMsTypeRow = {id:'', name:'',description:'', unit:'',multiplier:'', enumeration: null,format:'', aggregation:'None'};
        this.accessToken = localStorage.getItem( config.client_info.storeInfo.tokenKey);
        this.measurements = [];
        this.initFormFields();
    }

    ngOnInit() {
        this.devMsMtFormService.getDeviceMsMtFormInfo().subscribe(formInfo => {
            if(formInfo.name == 'measurement'){
                this.isEnabled = true;
                this.formData = formInfo.value;
                this.formMode = formInfo.type;
                if (this.formMode) { //Add Mode
                    this.initFormData();
                }
                this.setFormDetails();
            }
        })
    }

    setFormDetails() {
        this.measurementId = this.formData.measurementId;
        this.iec61850path = this.formData.iec61850path;
        this.isFormChanged = false;
        this.selectedMsTypeRow = {id:'', name:'',description:'', unit:'',multiplier:'', enumeration: null, format:'', aggregation:'None'};
        this.getMeasurements();
    }

    initFormFields() {
        this.measurementId = this.iec61850path = '';
    }

    initFormData() {
        this.formData = {
            measurementId: '',
            iec61850path: '',
        }
    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let postBody = {
                measurementId: this.measurementId,
                iec61850path: this.iec61850path,
            };
            if (this.formMode) { //Add mode
                this.updateDevMsMrService.setDeviceMsMrInfo(true, null, postBody,'measurement');
                this.initFormData();
                this.initFormFields();
                this.selectedMsTypeRow = {id:'', name:'',description:'', unit:'',multiplier:'', enumeration: null, format:'', aggregation:'None'};
            } else { //Edit mode
                this.updateDevMsMrService.setDeviceMsMrInfo(false, this.formData.measurementId, postBody,'measurement');
            }
            this.formData = postBody;
            this.isFormChanged = false;
            console.log('Success in update substations', postBody);
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
        this.navService.setNavInfo('dev-ms-form', false, this.formData.measurementId);
        this.scrollService.setMovedScroll(true, '');
        this.initFormData();
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
        return (this.iec61850path.trim() != "" && this.measurementId.trim() != "");
    }

    checkFormChange() {
        this.isFormChanged = (this.measurementId != this.formData.measurementId ||
            this.iec61850path != this.formData.iec61850path );
    }

    measurementIDChange(newVal: string) {
        this.measurementId = newVal;
        this.checkFormChange();
    }

    iec61850pathChange(newVal: string) {
        this.iec61850path = newVal;
        this.checkFormChange();
    }

    onShowMsTypesDialog() {
        this.displayMsTypesModal = true;

    }
    onRowSelect(event) {
        console.log(this.selectedMsTypeRow);
        if(!this.selectedMsTypeRow.aggregation) {
            this.selectedMsTypeRow.aggregation = 'None';
        }
    }

    onRowUnselect(event) {
        console.log(this.selectedMsTypeRow);
    }

    selectAllRows(event) {
        if (event.checked) {
            // alert('all rows selected');
            console.log(this.selectedMsTypeRow);
        } else {
            // alert('all rows diselected');

        }
    }

    getMeasurements() {
        let msTypeIdList = [];
        let promiseList = [];
        let apiURL = `${config.client_info.apiURL.serverURL}/measurements`;
        this.httpService.httpGetRequest(this.accessToken, apiURL).subscribe((res: any) => {
            msTypeIdList = res;
            for (let i = 0; i < msTypeIdList.length; i++) {
                let subDetailURL = apiURL + '/' + msTypeIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, subDetailURL));
            }
            if (msTypeIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.measurements = results;
                    for(let j = 0; j<results.length; j++) {
                        if(results[j].id == this.measurementId) {
                            this.selectedMsTypeRow = results[j];
                        }
                    }
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get substation list", err);
                    this.measurements = [];
                    this.selectedMsTypeRow = {id:'', name:'',description:'', unit:'',multiplier:'', enumeration: null, format:'', aggregation:'None'};
                    this.contentLoaded = true;
                })
            } else {
                console.log("Can't get substation list");
                this.measurements = [];
                this.selectedMsTypeRow = {id:'', name:'',description:'', unit:'',multiplier:'', enumeration: null, format:'', aggregation:'None'};
                this.contentLoaded = true;
            }
        }, error => {
            if(error.error instanceof ErrorEvent){
                alert(error.error.message);
            } else {
                alert(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
            }
            console.error("Can't get measurement list", error);
            this.measurements = [];
            this.selectedMsTypeRow = {id:'', name:'',description:'', unit:'',multiplier:'', enumeration: null, format:'', aggregation:'None'};
            this.contentLoaded = true;
        });
    }

    onDiscardMsType() {
        this.displayMsTypesModal = false;
    }

    onAddRowMsType() {
        if (this.selectedMsTypeRow && this.selectedMsTypeRow.id){
            this.displayMsTypesModal = false;
            this.measurementId = this.selectedMsTypeRow.id;
            this.checkFormChange();
        }
    }

    onChangeFilter() {
        this.isHideFilter = !this.isHideFilter;
    }

}
