import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HttpServiceHelper} from './core/http/HttpServiceHelper';
import {LogLevel} from 'msal';
import {SubstationComponent} from './modules/pages/substation/substation.component';
import {PartnerComponent} from './modules/pages/partner/partner.component';
import {MeasurementsComponent} from './modules/pages/measurements/measurements.component';
import {HomeComponent} from './modules/pages/home/home.component';
import {SidebarComponent} from './modules/components/sidebar/sidebar.component';
import {BayTableComponent} from './modules/components/bay-table/bay-table.component';
import {BayFormComponent} from './modules/components/bay-form/bay-form.component';
import {DeviceTableComponent} from './modules/components/device-table/device-table.component';
import {DeviceFormComponent} from './modules/components/device-form/device-form.component';

import {SubstationTableComponent} from './modules/components/substation-table/substation-table.component';
import {SubstationFormComponent} from './modules/components/substation-form/substation-form.component';
import {MsalInterceptor, MsalModule} from '@azure/msal-angular';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {MultiSelectModule} from 'primeng/multiselect';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {CheckboxModule} from 'primeng/checkbox';
import {TooltipModule} from 'primeng/tooltip';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {PartnerTableComponent} from './modules/components/partner-table/partner-table.component';
import {PartnerFormComponent} from './modules/components/partner-form/partner-form.component';
import {PartnerSubstationTableComponent} from './modules/components/partner-substation-table/partner-substation-table.component';
import {PartnerContactTableComponent} from './modules/components/partner-contact-table/partner-contact-table.component';
import {PartnerAddressTableComponent} from './modules/components/partner-address-table/partner-address-table.component';
import {MeasurementTableComponent} from './modules/components/measurement-table/measurement-table.component';
import {MeasurementFormComponent} from './modules/components/measurement-form/measurement-form.component';
import {DeviceMeasurementFormComponent} from './modules/components/device-measurement-form/device-measurement-form.component';
import {DeviceMeteringTableComponent} from './modules/components/device-metering-table/device-metering-table.component';
import {DeviceMeasurementTableComponent} from './modules/components/device-measurement-table/device-measurement-table.component';
import {DeviceTypeComponent} from './modules/pages/device-type/device-type.component';
import {DeviceTypeTableComponent} from './modules/components/device-type-table/device-type-table.component';
import {DeviceTypeFormComponent} from './modules/components/device-type-form/device-type-form.component';
import {GlobalSettingComponent} from './modules/components/global-setting/global-setting.component';
import { VirtualSubstationComponent } from './modules/pages/virtual-substation/virtual-substation.component';
import { VirtualSubstationTableComponent } from './modules/components/virtual-substation-table/virtual-substation-table.component';
import { VirtualSubstationFormComponent } from './modules/components/virtual-substation-form/virtual-substation-form.component';
import { PhysicalSubstationFormComponent } from './modules/components/physical-substation-form/physical-substation-form.component';

declare var config;

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}

export const protectedResourceMap: [string, string[]][] = [['https://graph.microsoft.com/v1.0/me', ['user.read']]];

@NgModule({
    declarations: [
        AppComponent,
        SubstationComponent,
        PartnerComponent,
        MeasurementsComponent,
        HomeComponent,
        SidebarComponent,
        SubstationTableComponent,
        SubstationFormComponent,
        BayTableComponent,
        BayFormComponent,
        DeviceTableComponent,
        DeviceFormComponent,
        PartnerTableComponent,
        PartnerFormComponent,
        PartnerSubstationTableComponent,
        PartnerContactTableComponent,
        PartnerAddressTableComponent,
        MeasurementTableComponent,
        MeasurementFormComponent,
        DeviceMeasurementFormComponent,
        DeviceMeteringTableComponent,
        DeviceMeasurementTableComponent,
        DeviceTypeComponent,
        DeviceTypeTableComponent,
        DeviceTypeFormComponent,
        GlobalSettingComponent,
        VirtualSubstationComponent,
        VirtualSubstationTableComponent,
        VirtualSubstationFormComponent,
        PhysicalSubstationFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        MenuModule,
        TableModule,
        ButtonModule,
        BreadcrumbModule,
        OverlayPanelModule,
        ConfirmDialogModule,
        InputTextModule,
        DropdownModule,
        DialogModule,
        MultiSelectModule,
        TriStateCheckboxModule,
        CheckboxModule,
        TooltipModule,
        MessagesModule,
        MessageModule,
        MsalModule.forRoot({
                clientID: config.client_info.msal_info.clientID,
                authority: config.client_info.msal_info.authority,
                validateAuthority: true,
                redirectUri: config.client_info.msal_info.redirectUri,
                cacheLocation: 'localStorage',
                postLogoutRedirectUri: config.client_info.msal_info.postLogoutRedirectUri,
                navigateToLoginRequestUrl: true,
                popUp: false,
                consentScopes: ['user.read', config.client_info.msal_info.consentScopes],
                unprotectedResources: ['https://www.microsoft.com/en-us/'],
                protectedResourceMap: protectedResourceMap,
                logger: loggerCallback,
                correlationId: '9843',
                level: LogLevel.Info,
                piiLoggingEnabled: true
            }
        ),
    ],
    providers: [HttpServiceHelper /*, {provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true }*/],
    bootstrap: [AppComponent]
})
export class AppModule {
}
