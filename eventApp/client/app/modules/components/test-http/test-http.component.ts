import {Component, OnInit} from '@angular/core';
import {HttpServiceHelper} from "../../../core/http/HttpServiceHelper";

declare var config: any;

@Component({
    selector: 'app-test-http',
    templateUrl: './test-http.component.html',
    styleUrls: ['./test-http.component.css']
})
export class TestHttpComponent implements OnInit {

    accessToken: string;
    constructor(private httpService: HttpServiceHelper) {
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
    }
    ngOnInit() {
    }

    addNewAlarm() {
        let postBody = {
            "id": "1",
            "date": "2019-05-22T08:53:13.582Z",
            "postponedate": "2019-05-22T08:53:13.582Z",
            "state": "New",
            "remark": "rrr",
            "name": "dfd",
            "cause": "ccccdc",
            "severity": "Major",
            "devicemrid": "sub1_bay0_device0"
        };
        let addNewAlarmURL = `${config.client_info.apiURL.serverURL}/events/alarm`;
        this.httpService.httpPostRequest(this.accessToken, addNewAlarmURL, postBody).subscribe(stInfo => {
            console.log(stInfo);
        },err => {
            console.log(err);
        })
    }

    addNewEvent() {
        let postBody = {
            "id": "12",
            "date": "2019-05-28T08:50:27.978Z",
            "remark": "23",
            "name": "666",
            "cause": "666",
            "devicemrid": "sub2_bay2_device0"
        };
        let addNewAlarmURL = `${config.client_info.apiURL.serverURL}/events/all`;
        this.httpService.httpPostRequest(this.accessToken, addNewAlarmURL, postBody).subscribe(stInfo => {
            console.log(stInfo);
        },err => {
            console.log(err);
        })
    }

}
