import {Component, OnInit} from '@angular/core';
import {NavigationService} from "../../../core/services/navigation.service";

@Component({
    selector: 'app-virtual-substation',
    templateUrl: './virtual-substation.component.html',
    styleUrls: ['./virtual-substation.component.css']
})
export class VirtualSubstationComponent implements OnInit {

    substationFormSt: boolean;
    constructor(private navService: NavigationService) {
        this.substationFormSt = false;
    }

    ngOnInit() {
        this.navService.getNavInfo().subscribe(naveInfo => {
            let elemSt = naveInfo.st;
            switch (naveInfo.elem) {
                case 'virtual-substation-list':
                    this.substationFormSt = false;
                    break;
                case 'virtual-substation-form':
                    this.substationFormSt = elemSt;
                    break;
            }
        });
    }

}
