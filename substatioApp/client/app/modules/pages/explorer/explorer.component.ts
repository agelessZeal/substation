import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {BroadcastService, MsalService} from '@azure/msal-angular';
import {HttpClient} from '@angular/common/http';
import {HttpServiceHelper} from '../../../core/http/HttpServiceHelper';
import {TreeToggleService} from '../../../core/services/tree-toggle.service';
import {Router} from '@angular/router';

declare var config;

@Component({
    selector: 'app-explorer',
    templateUrl: './explorer.component.html',
    styleUrls: ['./explorer.component.css']
})

export class ExplorerComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    accessToken: string;
    isTreeShowed: boolean;

    constructor(private authService: MsalService,
                private http: HttpClient,
                private router: Router,
                private httpService: HttpServiceHelper,
                private broadcastService: BroadcastService,
                private treeToggleService: TreeToggleService) {
        this.isTreeShowed = false;
        this.accessToken = localStorage.getItem(config.client_info.storeInfo.tokenKey);
    }

    ngOnInit() {
        this.treeToggleService.getToggleInfo().subscribe(toggleInfo => {
            this.isTreeShowed = toggleInfo;
            console.error(toggleInfo);
        });
    }

    ngOnDestroy() {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
