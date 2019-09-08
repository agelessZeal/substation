import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MsalModule, MsalInterceptor} from '@azure/msal-angular';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LogLevel} from 'msal';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

import {HttpServiceHelper} from './core/http/HttpServiceHelper';
import {HomeComponent} from './modules/pages/home/home.component';
import {PolicyComponent} from './modules/pages/policy/policy.component';
import {ImpressumComponent} from './modules/pages/impressum/impressum.component';
import {TermsComponent} from './modules/pages/terms/terms.component';
import {CustomerServiceComponent} from './modules/pages/customer-service/customer-service.component';
import {QuestionAnswerComponent} from './modules/pages/question-answer/question-answer.component';
import {DisclaimerComponent} from './modules/pages/disclaimer/disclaimer.component';
import { MoreInfoComponent } from './modules/pages/more-info/more-info.component';

declare var config: any;

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log('client logging' + message);
}

export const protectedResourceMap: [string, string[]][] = [[config.client_info.apiEndPoints.graphProfileAPI, ['user.read']]];

const cookieConfig: NgcCookieConsentConfig = {
    cookie: {
        domain: config.client_info.cookie.domain // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
    },
    position: 'bottom-right',
    palette: {
        popup: {
            background: '#000'
        },
        button: {
            background: '#f1d600'
        }
    },
    theme: 'classic',
    type: 'info',
    content: {
        message: 'This website uses cookies to ensure you get the best experience on our website.',
        dismiss: 'Got it!',
        deny: 'Refuse cookies',
        link: 'Learn more',
        href: config.client_info.cookie.link,
        policy: 'Cookie Policy'
    }
};

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PolicyComponent,
        ImpressumComponent,
        TermsComponent,
        CustomerServiceComponent,
        QuestionAnswerComponent,
        DisclaimerComponent,
        MoreInfoComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        NgSelectModule,
        FormsModule,
        CarouselModule,
        ScrollToModule.forRoot(),
        NgcCookieConsentModule.forRoot(cookieConfig),
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
    ],
    providers: [HttpServiceHelper, /*,{provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true}*/], //https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/421
    bootstrap: [AppComponent]
})

export class AppModule {
}
