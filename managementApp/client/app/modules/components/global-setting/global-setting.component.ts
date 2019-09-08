import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";
import {ConfirmationService, Message, MessageService} from "primeng/api";

declare var config;

@Component({
    selector: 'app-global-setting',
    templateUrl: './global-setting.component.html',
    styleUrls: ['./global-setting.component.css'],
    providers: [MessageService]
})
export class GlobalSettingComponent implements OnInit {

    accessToken: string;
    apiURL: string;
    isReadingSetting: boolean;
    msgs: Message[] = [];

    constructor(private httpService: HttpServiceHelper,
                private messageService: MessageService) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
        this.apiURL = `${config.client_info.apiURL.serverURL}`;
        this.isReadingSetting = false;
    }

    ngOnInit() {

    }

    onReadSetting() {
        document.getElementById('file').click();
    }

    handleFileInput(files: FileList) {
        let self = this;
        let readICDURL = `${config.client_info.apiURL.serverURL}/readconfig`;
        let fileBody: any = files.item(0);
        let reader:any = new FileReader();
        this.isReadingSetting = true;
        reader.onload = function(){
            let fileContent:string = reader.result;
            self.httpService.httpFileUploadRequest(self.accessToken, readICDURL, fileContent).subscribe(resBody => {
                console.log('Read Global Setting Successfully');
                self.isReadingSetting = false;
                let fileTag:any;
                fileTag = document.getElementById('file');
                fileTag.value = '';
                self.showMsg('success', 'Success', 'Read Config file Successfully!');
            },error => {
                self.showMsg('error', 'Error', 'Read Config file Failed!');
                self.isReadingSetting = false;
            })
        };
        reader.readAsText(fileBody);
    }
    showMsg(msgType, summary, detail) {
        this.msgs = [];
        this.msgs.push({severity:msgType, summary:summary, detail:detail});
    }
}
