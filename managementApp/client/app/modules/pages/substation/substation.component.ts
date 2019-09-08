import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../../../core/services/navigation.service";
import {ScrollMovingService} from "../../../core/services/scroll-moving.service";

@Component({
    selector: 'app-substation',
    templateUrl: './substation.component.html',
    styleUrls: ['./substation.component.css'],
})
export class SubstationComponent implements OnInit {

    subListSt: boolean;
    subFormSt: boolean;

    bayListSt: boolean;
    bayFormSt: boolean;

    devListSt: boolean;
    devFormSt: boolean;

    devMsListSt: boolean;
    devMsFormSt: boolean;

    devMtListSt: boolean;
    devMtFormSt: boolean;

    subName: string;
    bayName: string;
    devName: string;

    constructor(private navService: NavigationService,
                private scrollMovingService: ScrollMovingService) {
        this.subFormSt = this.bayListSt = this.bayFormSt = this.devListSt = this.devFormSt = false;
        this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
    }

    ngOnInit() {
        this.subName = this.bayName = this.devName = "";

        this.navService.getNavInfo().subscribe(naveInfo => {
            let elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'sub-list':
                    this.subListSt = elemSt;
                    this.subFormSt = this.bayListSt = this.bayFormSt = this.devListSt = this.devFormSt = false;
                    this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
                    this.subName = this.devName = this.bayName = "";
                    break;
                case 'sub-form':
                    this.subFormSt = elemSt;
                    this.bayListSt = this.bayFormSt = this.devListSt = this.devFormSt = false;
                    this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
                    this.subName = naveInfo.name;
                    this.devName = this.bayName = "";
                    break;
                case 'bay-list':
                    this.bayListSt = elemSt;
                    this.bayFormSt = this.devListSt = this.devFormSt = false;
                    this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
                    this.subName = naveInfo.name;
                    this.devName = this.bayName = "";
                    break;
                case 'bay-form':
                    this.bayFormSt = elemSt;
                    this.devListSt = this.devFormSt = false;
                    this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
                    this.bayName = naveInfo.name;
                    this.devName = "";
                    break;
                case 'dev-list':
                    this.devListSt = elemSt;
                    this.devFormSt = false;
                    this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
                    this.bayName = naveInfo.name;
                    this.devName = "";
                    break;
                case 'dev-form':
                    this.devFormSt = elemSt;
                    this.devMsListSt = this.devMsFormSt = this.devMtListSt = this.devMtFormSt = false;
                    this.devName = naveInfo.name;
                    break;
                case 'dev-ms-list':
                    this.devMsListSt = elemSt;
                    this.devMsFormSt = false;
                    break;
                case 'dev-ms-form':
                    this.devMsFormSt = elemSt;
                    break;
                case 'dev-mt-list':
                    this.devMtListSt = elemSt;
                     break;
            }

        });
    }

    showSubstationDetails() {
        this.navService.setNavInfo('sub-form',true, this.subName);
        this.scrollMovingService.setMovedScroll(true,'');
    }

    showBayDetails() {
        this.navService.setNavInfo('bay-form',true, this.bayName);
        this.scrollMovingService.setMovedScroll(true,'');
    }

    showDeviceDetails() {
        this.navService.setNavInfo('dev-form',true, this.devName);
        this.scrollMovingService.setMovedScroll(true,'');
    }

}
