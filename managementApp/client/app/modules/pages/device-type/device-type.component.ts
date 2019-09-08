import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../../core/services/navigation.service";

@Component({
  selector: 'app-device-type',
  templateUrl: './device-type.component.html',
  styleUrls: ['./device-type.component.css']
})
export class DeviceTypeComponent implements OnInit {

    deviceTypeFormSt: boolean;
    constructor(private navService: NavigationService) {
        this.deviceTypeFormSt = false;
    }

    ngOnInit() {
        this.navService.getNavInfo().subscribe(naveInfo => {
            let elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'device-type-list':
                    this.deviceTypeFormSt = false;
                    break;
                case 'device-type-form':
                    this.deviceTypeFormSt = elemSt;
                    break;
            }
        });
    }


}
