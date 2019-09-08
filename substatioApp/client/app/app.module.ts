import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MsalModule, MsalInterceptor} from '@azure/msal-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LogLevel} from 'msal';
import {TreeModule} from 'ng2-tree';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {NgxMaskModule} from 'ngx-mask';
import {NgxJsonViewerModule} from 'ngx-json-viewer';
import {FormsModule} from '@angular/forms';
import {ChartModule} from 'angular-highcharts';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TooltipModule} from 'ng2-tooltip-directive';
import {MomentModule} from 'ngx-moment';

import {HomeComponent} from './modules/pages/home/home.component';
import {HttpServiceHelper} from './core/http/HttpServiceHelper';
import {ExplorerComponent} from './modules/pages/explorer/explorer.component';
import {DeviceTreeComponent} from './modules/components/device-tree/device-tree.component';
import {ChartViewComponent} from './modules/components/chart-view/chart-view.component';

declare var config: any;

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}

export const protectedResourceMap: [string, string[]][] = [[config.client_info.apiEndPoints.graphProfileAPI, ['user.read']]];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ExplorerComponent,
        DeviceTreeComponent,
        ChartViewComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        NgSelectModule,
        FormsModule,
        ChartModule,
        MomentModule,
        TooltipModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
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
        TreeModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        NgxMaskModule.forRoot(),
        NgxJsonViewerModule,
    ],
    providers: [HttpServiceHelper, /*,{provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}*/], //https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/421
    bootstrap: [AppComponent]
})

export class AppModule {
    constructor() {
        console.log('....AppModule Constructor');
    }
}
