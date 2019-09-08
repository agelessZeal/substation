import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {BayFormService} from "../../../core/services/bay-form.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";
import {UpdateBayService} from "../../../core/services/update-bay.service";
import {ExpandingDeviceService} from "../../../core/services/expanding-device.service";
import {NavigationService} from "../../../core/services/navigation.service";
import {ConfirmationService} from "primeng/api";
import {ReadIcdService} from "../../../core/services/read-icd.service";

declare var config;

@Component({
    selector: 'app-bay-form',
    templateUrl: './bay-form.component.html',
    styleUrls: ['./bay-form.component.css'],
    providers: [ConfirmationService],
})
export class BayFormComponent implements OnInit {

    formMode: boolean; //True = >add mode, False=> edit mode
    isEnabled: boolean;
    formData: any;

    substationMrID: string;

    mrID: string;
    name: string;
    description: string;

    latitude: number;
    longitude: number;
    altitude: number;

    isFormChanged: boolean;

    accessToken: string;
    apiURL: string;

    isReadingICD: boolean;

    constructor(private httpService: HttpServiceHelper,
                private bayFormService: BayFormService,
                private scrollService: ScrollMovingService,
                private updateBayService: UpdateBayService,
                private expandDeviceService: ExpandingDeviceService,
                private navService: NavigationService,
                private readIcdService: ReadIcdService,
                private confirmationService: ConfirmationService) {

        this.isFormChanged = false;

        this.formMode = true;
        this.isEnabled = false;
        this.isReadingICD = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.initFormFields();

        this.apiURL = `${config.client_info.apiURL.serverURL}/bays`;

    }

    ngOnInit() {
        this.bayFormService.getBayFormInfo().subscribe(bayFormInfo => {
            this.isEnabled = true;
            this.formData = bayFormInfo.value;
            this.substationMrID = bayFormInfo.subMrId;
            this.formMode = bayFormInfo.type;
            if (this.formMode) { //Add Mode
                this.initFormData();
            }
            this.setBayDetails();
        })
    }

    setBayDetails() {
        this.substationMrID = this.formData.substationmrid;
        this.mrID = this.formData.mrid;
        this.description = this.formData.description;
        this.latitude = this.formData.location.latitude;
        this.longitude = this.formData.location.longitude;
        this.altitude = this.formData.location.altitude;
        this.name = this.formData.name;
        this.isFormChanged = false;
    }

    initFormFields() {
        this.mrID = this.description = this.name = '';
        this.latitude = this.longitude = this.altitude = 0;
    }

    initFormData() {
        this.formData = {
            substationmrid: this.substationMrID,
            mrid: '',
            name: '',
            location: {latitude: 0, longitude: 0, altitude: 0},
            description: '',
        }
    }

    onDevicesTable() {
        let self = this;
        this.navService.setNavInfo('dev-list', true, this.name);
        setTimeout(function () {
            self.expandDeviceService.setDeviceStatus(true, self.formData.mrid);
            self.scrollService.setMovedScroll(true, 'device-list');
        }, 100);
    }

    saveBlobData(data, fileName) {
        let a: any = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let blob = new Blob([data], {type: "octet/stream"}),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    onGeneratePLC() {
        // window.location.href = `${config.client_info.apiURL.serverURL}/generateplc/${this.formData.mrid}`;
        let apiurl = `${config.client_info.apiURL.serverURL}/generateplc/${this.formData.mrid}`;
        this.httpService.httpFileDownload(this.accessToken, apiurl).subscribe((resp) => {
            this.saveBlobData(resp, 'generated.plc')
        }, error => {
            this.httpErrorHandler(error);
        })
    }

    handleFileInput(files: FileList) {
        let self = this;
        let readICDURL = `${config.client_info.apiURL.serverURL}/readicd/${this.formData.mrid}`;
        let fileBody: any = files.item(0);
        let reader:any = new FileReader();
        this.isReadingICD = true;
        reader.onload = function(){
            let fileContent:string = reader.result;
            self.httpService.httpFileUploadRequest(self.accessToken, readICDURL, fileContent).subscribe(resBody => {
                console.log('Read ICD Successfully');
                self.isReadingICD = false;
                let fileTag:any;
                fileTag = document.getElementById('file');
                fileTag.value = '';
                self.readIcdService.setBayInfo(self.formData.mrid);
            },error => {
                self.httpErrorHandler(error);
                self.isReadingICD = false;
            })
        };
        reader.readAsText(fileBody);

    }

    onReadICD() {
        document.getElementById('file').click();
    }

    httpErrorHandler(ev: any) {
        switch (ev.status) {
            case 400:
                let msgbody: string;
                for(let prop in ev.error) {
                    if(ev.error.hasOwnProperty(prop)){
                        msgbody += `${prop} : ${ev.error[prop]}\n`;
                    }
                }
                msgbody += '\n';
                alert(msgbody);
                break;
            default:
                alert(ev.error);

        }
        console.error(ev);
    }

    onSaveFormData() {
        if (this.checkValidation()) {
            let url = config.client_info.apiURL.serverURL;
            let postBody = {
                substationmrid: this.substationMrID,
                mrid: this.mrID,
                name: this.name,
                location: {
                    latitude: this.latitude,
                    longitude: this.longitude,
                    altitude: this.altitude
                },
                description: this.description,
            };
            if (this.formMode) { //Add mode
                let addBayURL = this.apiURL + '?substationId=' + this.substationMrID;
                this.httpService.httpPostRequest(this.accessToken, addBayURL, postBody)
                    .subscribe((res: any) => {
                        this.formData = postBody;
                        this.updateBayService.setBayInfo(true, null, postBody);
                        this.initFormData();
                        this.initFormFields();
                        this.isFormChanged = false;
                        console.log('Success in add substation', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in add substation', err);
                    });

            } else { //Edit mode
                let bayUpdateURL = this.apiURL + '/' + this.formData.mrid + '?substationId=' + this.substationMrID;
                this.httpService.httpPutRequest(this.accessToken, bayUpdateURL, postBody)
                    .subscribe((res: any) => {
                        this.updateBayService.setBayInfo(false, this.formData.mrid, postBody);
                        this.formData = postBody;
                        this.isFormChanged = false;
                        console.log('Success in update substations', postBody);
                    }, err => {
                        this.formData = {};
                        console.log('Error in update substations', err);
                    });
            }

        }
    }

    isChanged() {
        let opSaveBtn:any;
        opSaveBtn = document.getElementsByClassName('op-btn-save');
        if(opSaveBtn){
            let disabledBtnCnt = 0;
            for(let i = 0 ;i<opSaveBtn.length; i++){
                if(opSaveBtn[i].disabled){
                    disabledBtnCnt ++;
                }
            }
            if(disabledBtnCnt != opSaveBtn.length){
                return true;
            }
        }else{
            return false;
        }
    }

    closeMe() {
        this.navService.setNavInfo('bay-list', true, this.formData.substationmrid);
        this.scrollService.setMovedScroll(true, '');
        this.initFormData();
        this.initFormFields();
    }

    onCloseComponent() {
        let self = this;
        if(this.isChanged()){
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

    checkFormChange() {
        this.isFormChanged = (this.mrID != this.formData.mrid ||
            this.longitude != this.formData.location.longitude ||
            this.latitude != this.formData.location.latitude ||
            this.altitude != this.formData.location.altitude ||
            this.name != this.formData.name ||
            this.description != this.formData.description);
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

}
