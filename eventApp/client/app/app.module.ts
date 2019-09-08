import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {MsalModule} from '@azure/msal-angular';
import {LogLevel} from 'msal';
import {TabViewModule} from 'primeng/tabview';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';

import {
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
} from 'ng-pick-datetime';

import {HomeComponent} from './modules/pages/home/home.component';
import {SbEventComponent} from './modules/pages/sb-event/sb-event.component';
import {OpenStreetMapComponent} from './modules/components/openstreet-map/openstreet-map.component';
import {HttpServiceHelper} from "./core/http/HttpServiceHelper";
import {HTMLMarkerComponent} from "./modules/components/openstreet-map/html-marker.component";
import {AngularSplitModule} from 'angular-split';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {EvBreadcrumbComponent} from './modules/components/ev-breadcrumb/ev-breadcrumb.component';
import {EventTableComponent} from './modules/components/event-table/event-table.component';
import {AlarmComponent} from './modules/components/alarm/alarm.component';
import {InActiveAlarmComponent} from './modules/components/inactive-alarm/in-active-alarm.component';
import {PageLoadingComponent} from './modules/components/page-loading/page-loading.component';
import {TestHttpComponent} from './modules/components/test-http/test-http.component';
import {LeafletMarkerClusterModule} from './modules/components/openstreet-map/leaflet-markercluster/leaflet-markercluster.module';
import {TimeSelectorComponent} from './modules/components/time-selector/time-selector.component';
import {MeasurementComponent} from './modules/components/measurement/measurement.component';
import {MeteringComponent} from './modules/components/metering/metering.component';
import * as $ from 'jquery';
import {
    GoldenLayoutModule,
    GoldenLayoutConfiguration,
} from '@embedded-enterprises/ng6-golden-layout';
import {AuthService} from "./core/services/auth.service";
import {DataService} from "./core/services/data.service";
import {InteractionMarkerService} from "./core/services/interaction-marker.service";
import {MapResizeService} from "./core/services/map-resize.service";
import {MsMrDeviceSelectionService} from "./core/services/msmr-device-selection.service";
import {UpdateMsMrMarkerService} from "./core/services/update-msmr-marker.service";
import {UpdateBreadCrumbService} from "./core/services/update-bread-crumb.service";
import {UpdateMarkerService} from "./core/services/update-marker.service";

import {TooltipModule} from 'primeng/tooltip';
import {AlarmTabService} from "./core/services/alarm-tab.service";

declare var config: any;
// declare var config: any;

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}

export const protectedResourceMap: [string, string[]][] = [['https://graph.microsoft.com/v1.0/me', ['user.read']]];


const glConfig: GoldenLayoutConfiguration = {
    components: [
        {
            component: AlarmComponent,
            componentName: 'app-alarm'
        }, {
            component: EventTableComponent,
            componentName: 'app-event-table'
        }, {
            component: OpenStreetMapComponent,
            componentName: 'app-openstreet-map'
        },
    ],
    defaultLayout: {
        content: [
            {
                type: "row",
                content: [
                    {
                        type: 'column',
                        content: [
                            {
                                type: 'component',
                                componentName: 'app-alarm',
                                isClosable: false,
                                title: 'Alarms',
                            },
                            {
                                type: 'component',
                                componentName: 'app-event-table',
                                isClosable: false,
                                title: 'Events',
                            }
                        ],
                    },
                    {
                        type: 'component',
                        componentName: 'app-openstreet-map',
                        isClosable: false,
                        title: 'Map',
                    }
                ],

            }
        ]
    }
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SbEventComponent,
        OpenStreetMapComponent,
        HTMLMarkerComponent,
        EvBreadcrumbComponent,
        EventTableComponent,
        AlarmComponent,
        InActiveAlarmComponent,
        PageLoadingComponent,
        TestHttpComponent,
        TimeSelectorComponent,
        MeasurementComponent,
        MeteringComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        TabViewModule,
        DropdownModule,
        TableModule,
        DialogModule,
        ButtonModule,
        CheckboxModule,
        TooltipModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        MsalModule.forRoot({
                clientID: config.client_info.msal_info.clientID,
                authority: config.client_info.msal_info.authority,
                validateAuthority: true,
                redirectUri: config.client_info.msal_info.redirectUri,
                cacheLocation: 'localStorage',
                postLogoutRedirectUri: config.client_info.msal_info.postLogoutRedirectUri,
                navigateToLoginRequestUrl: true,
                popUp: false,
                consentScopes: ['user.read', config.client_info.msal_info.reqScopes, config.client_info.msal_info.reqScopesSub],
                unprotectedResources: ['https://www.microsoft.com/en-us/'],
                protectedResourceMap: protectedResourceMap,
                logger: loggerCallback,
                correlationId: '9843',
                level: LogLevel.Info,
                piiLoggingEnabled: true
            }
        ),
        AngularSplitModule.forRoot(),
        LeafletModule.forRoot(),
        LeafletMarkerClusterModule,
        GoldenLayoutModule.forRoot(glConfig),
    ],
    entryComponents: [HTMLMarkerComponent, AlarmComponent, EventTableComponent, OpenStreetMapComponent],
    providers:
        [HttpServiceHelper,
            AlarmTabService,
            AuthService,
            DataService,
            InteractionMarkerService,
            MapResizeService,
            MsMrDeviceSelectionService,
            UpdateBreadCrumbService,
            UpdateMsMrMarkerService,
            UpdateMarkerService,
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
