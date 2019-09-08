import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {DeviceFormService} from "../../../core/services/device-form.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateDeviceService} from "../../../core/services/update-device.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {ConfirmationService, SelectItem} from "primeng/api";
import {ExpandingMsMtService} from "../../../core/services/expanding-ms-mt.service";
import {forkJoin} from "rxjs";

declare var config;

@Component({
    selector: 'app-device-form',
    templateUrl: './device-form.component.html',
    styleUrls: ['./device-form.component.css'],
    providers: [ConfirmationService]
})
export class DeviceFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;
    devicetypemrid: string;

    bayMrID: string;
    mrID: string;
    name: string;
    description: string;

    latitude: number;
    longitude: number;
    altitude: number;

    vendor: string;
    hwRev: string;
    swRev: string;
    serNum: string;
    model: string;
    owner: string;
    primeOps: string;
    secondOps: string;

    iecCols: any[];
    newIec: Iec61850;
    iecList: any[];
    displayAddModal: boolean;
    displayDeviceTypeModal: boolean;

    isFormChanged: boolean;
    accessToken: string;
    apiURL: string;

    deviceTypes: Array<DeviceType>;
    deviceTypeCols: any[];
    selectedDeviceTypeRow: DeviceType;
    isHideFilter: boolean;
    contentLoaded: boolean;
    isDeviceHideFilter: boolean;

    constructor(private httpService: HttpServiceHelper,
                private deviceFormService: DeviceFormService,
                private scrollService: ScrollMovingService,
                private navService: NavigationService,
                private updateDeviceService: UpdateDeviceService,
                private confirmationService: ConfirmationService,
                private expandMsMtService: ExpandingMsMtService) {

        this.isFormChanged = false;
        this.formMode = true;
        this.isEnabled = false;
        this.displayAddModal = false;
        this.displayDeviceTypeModal = false;
        this.isDeviceHideFilter = false;
        this.devicetypemrid = '';
        this.iecCols = [
            {field: 'iec61850', header: 'Iec61850'},
            {field: 'value', header: 'Value'},
        ];
        this.newIec = {iec61850: '', value: ''};
        this.selectedDeviceTypeRow = {mrid:'', vendor:'',hwRev:'',swRev:'',serNum:'', model:'', owner:'',primeOps:'',secondOps:''};

        this.deviceTypeCols = [
            {field: 'mrid', header: 'MrID', group:''},
            {field: 'vendor', header: 'Vendor', group:''},
            {field: 'swRev', header: 'SwRev', group:''},
            {field: 'hwRev', header: 'HwRev', group:''},
            {field: 'serNum', header: 'SerNum', group:''},
            {field: 'model', header: 'Model', group:''},
            {field: 'owner', header: 'Owner', group:''},
            {field: 'primeOps', header: 'PrimeOps', group:''},
            {field: 'secondOps', header: 'SecondOps', group:''},
        ];

        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);

        this.initFormFields();
        this.apiURL = `${config.client_info.apiURL.serverURL}/devices`;
    }

    ngOnInit() {
        this.deviceFormService.getDeviceFormInfo().subscribe(deviceFormInfo => {
            this.isEnabled = true;
            this.formData = deviceFormInfo.value;
            this.bayMrID = deviceFormInfo.bayMrId;
            this.formMode = deviceFormInfo.type;
            if (this.formMode) { //Add Mode
                this.initFormData();
            }
            this.setDeviceDetails();
        })
    }

    setDeviceDetails() {

        this.bayMrID = this.formData.baymrid;

        this.mrID = this.formData.mrid;
        this.name = this.formData.name;
        this.description = this.formData.description;

        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;

        this.iecList = JSON.parse(JSON.stringify(this.formData.iec61850)); //Array copy

        this.devicetypemrid = this.formData.devicetypemrid;
        this.selectedDeviceTypeRow = {mrid:'', vendor:'',hwRev:'',swRev:'',serNum:'', model:'', owner:'',primeOps:'',secondOps:''};
        this.deviceTypes = [];
        this.isFormChanged = false;
        this.getDeviceTypes();

    }

    initFormFields() {

        this.mrID = this.description = this.name = '';
        this.latitude = this.longitude = this.altitude = 0;
        this.devicetypemrid = '';
        this.iecList = [];
    }

    initFormData() {
        this.formData = {
            baymrid: this.bayMrID,
            mrid: '',
            name: '',
            location: {latitude: 0, longitude: 0, altitude: 0},
            description: '',
            devicetypemrid: '',
            iec61850:[]
        };
    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let postBody = {
                baymrid: this.bayMrID,
                mrid: this.mrID,
                name: this.name,
                description: this.description,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                devicetypemrid: this.devicetypemrid,
                iec61850 :this.iecList

            };
            if (this.formMode) { //Add mode
                let devAddURL = this.apiURL + '?bayId=' + this.bayMrID;
                this.httpService.httpPostRequest(this.accessToken, devAddURL, postBody)
                    .subscribe((res: any) => {
                        this.formData = postBody;
                        this.iecList = [];
                        this.updateDeviceService.setDeviceInfo(true, null, postBody);
                        this.initFormData();
                        this.initFormFields();
                        this.isFormChanged = false;
                        console.log('Success in add devices', postBody);
                    }, err => {
                        this.formData = {};
                        this.initFormFields();
                        this.initFormData();
                        console.log('Error in add devices', err);
                    });
            } else { //Edit mode
                let devEditURL = this.apiURL + '/' + this.formData.mrid;
                devEditURL += '?bayId=' + this.bayMrID;
                this.httpService.httpPutRequest(this.accessToken, devEditURL, postBody)
                    .subscribe((res: any) => {
                        this.updateDeviceService.setDeviceInfo(false, this.formData.mrid, postBody);
                        this.formData = postBody;
                        this.iecList = JSON.parse(JSON.stringify(this.formData.iec61850));
                        this.isFormChanged = false;
                        console.log('Success in update devices', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in update devices', err);
                    });
            }

        }
    }

    closeMe() {
        this.navService.setNavInfo('dev-list',true, this.formData.mrid);
        this.scrollService.setMovedScroll(true,'');
        this.initFormData();
        this.initFormFields();
    }

    onCloseComponent() {
        let self = this;
        if(this.isFormChanged){
            this.confirmationService.confirm({
                message: 'Changes you made may not be saved.',
                accept: () => {
                    self.closeMe();
                },
                reject: () => {

                }
            });
        }else{
            this.closeMe();
        }
    }

    checkValidation() {
        if (this.mrID.trim() == "") {
            return false;
        }
        if (this.name.trim() == "") {
            return false;
        }
        return true;
    }

    compareContacts(x: Iec61850, y: Iec61850) {
        return (x.iec61850 == y.iec61850 &&
            x.value == y.value);
    }
    checkFormChange() {
        this.isFormChanged = (this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.name != this.formData.name ||
            this.devicetypemrid != this.formData.devicetypemrid ||
            this.iecList.length !=  this.formData.iec61850.length );
        let sameObjCnt = 0;
        let formIec61850 = this.formData.iec61850;
        for (let i = 0; i < this.iecList.length; i++) {
            for (let j = 0; j < formIec61850.length; j++) {
                if(this.compareContacts(this.iecList[i], formIec61850[j])){
                    sameObjCnt ++;
                }
            }
        }

        this.isFormChanged = this.isFormChanged || (sameObjCnt < this.iecList.length );
    }

    onMeasurements() {
        let self = this;
        this.navService.setNavInfo('dev-ms-list', true, 'dev-ms-list');
        setTimeout(function () {
            self.expandMsMtService.setDeviceMsMtStatus(true, self.formData.mrid,'measurement');
            self.scrollService.setMovedScroll(true, 'dev-ms-list');
        }, 100);
    }

    onMeterings() {
        let self = this;
        this.navService.setNavInfo('dev-mt-list', true, 'dev-mt-list');
        setTimeout(function () {
            self.expandMsMtService.setDeviceMsMtStatus(true, self.formData.mrid,'metering');
            self.scrollService.setMovedScroll(true, 'dev-mt-list');
        }, 100);
    }

    mrIDChange(newVal: string) {
        this.mrID = newVal;
        this.checkFormChange();
    }

    descriptionChange(newVal: string) {
        this.description = newVal;
        this.checkFormChange();
    }

    nameChange(newVal: string) {
        this.name = newVal;
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

    newIec61850Change(newVal: string) {
        this.newIec.iec61850 = newVal;
    }

    newIecValueChange(newVal: string) {
        this.newIec.value = newVal;
    }

    onShowAddDialog() {
        this.displayAddModal = true;
        this.newIec = {iec61850: '', value: ''};
    }

    onDiscard() {
        this.displayAddModal = false;
    }

    onAddRow() {
        if (this.newIec.iec61850.trim() == "" || this.newIec.value.trim() == "") return;
        this.iecList.push(this.newIec);
        this.displayAddModal = false;
        this.newIec = {iec61850: '', value: ''};
        this.isFormChanged = true;
        this.checkFormChange();
    }

    onContactEditComplete(newVal){
        this.checkFormChange();
    }

    onDeleteIec61850(iec61850: Iec61850) {
        let indexof = this.iecList.indexOf(iec61850);
        if(indexof>-1){
            this.iecList.splice(indexof,1)
        }
        this.checkFormChange();
    }
    /////////////////////////////////////////////////////////////////////////////////////
    onShowDeviceTypesDialog() {
        this.displayDeviceTypeModal = true;
    }

    onDiscardDeviceType() {
        this.displayDeviceTypeModal = false;
    }

    onSelectDeviceType() {
        if (this.selectedDeviceTypeRow && this.selectedDeviceTypeRow.mrid){
            this.displayDeviceTypeModal = false;
            this.devicetypemrid = this.selectedDeviceTypeRow.mrid;
            this.isFormChanged = true;
            this.checkFormChange();
        }
    }

    getDeviceTypes() {
        let deviceTypeIdList = [];
        let promiseList = [];
        let deviceTypeBaseURL = `${config.client_info.apiURL.serverURL}/devicetypes`;
        this.httpService.httpGetRequest(this.accessToken, deviceTypeBaseURL).subscribe((res: any) => {
            deviceTypeIdList = res;
            for (let i = 0; i < deviceTypeIdList.length; i++) {
                let deviceTypeDetailURL =  deviceTypeBaseURL + '/'+ deviceTypeIdList[i];
                promiseList.push(this.httpService.httpGetRequest(this.accessToken, deviceTypeDetailURL));
            }
            if (deviceTypeIdList.length > 0) {
                forkJoin(promiseList).subscribe(results => {
                    this.deviceTypes = results;
                    for(let j = 0; j<results.length; j++) {
                        if(results[j].mrid == this.devicetypemrid) {
                            this.selectedDeviceTypeRow = results[j];
                        }
                    }
                    this.contentLoaded = true;
                }, err => {
                    console.log("Can't get device type list", err);
                    this.contentLoaded = true;
                })
            } else {
                console.log("Empty device type list");
                this.contentLoaded = true;
            }
        }, error => {
            if (error.error instanceof ErrorEvent) {
                alert(error.error.message);
            } else {
                alert(`Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`);
            }
            console.error("Can't get device type list", error);
            this.contentLoaded = true;
        });
    }

    onChangeFilter() {
        this.isDeviceHideFilter = !this.isDeviceHideFilter;
    }
}
