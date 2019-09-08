import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../../../core/services/navigation.service";

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

    partnerFormSt: boolean;
    partnerContactSt: boolean;
    partnerAddressSt: boolean;
    partnerSubstationSt: boolean;
    constructor(private navService: NavigationService) {
        this.partnerFormSt = false;
        this.partnerContactSt = false;
        this.partnerAddressSt = false;
        this.partnerSubstationSt = false;
    }

    ngOnInit() {
        this.navService.getNavInfo().subscribe(naveInfo => {
            let elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'partner-list':
                    this.partnerFormSt = false;
                    this.partnerContactSt = this.partnerAddressSt = this.partnerSubstationSt = false;
                    break;
                case 'partner-form':
                    this.partnerFormSt = elemSt;
                    this.partnerContactSt = this.partnerAddressSt = this.partnerSubstationSt = false;
                    break;
                case 'partner-contact':
                    this.partnerContactSt = elemSt;
                    break;
                case 'partner-address':
                    this.partnerAddressSt = elemSt;
                    break;
                case 'partner-substation':
                    this.partnerSubstationSt = elemSt;
                    break;

            }
        });
    }

}
