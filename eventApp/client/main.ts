import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import { MultiWindowInit } from '@embedded-enterprises/ng6-golden-layout';

if (environment.production) {
    enableProdMode();
}

// call MultiWindowInit before bootstrapModule().
MultiWindowInit();

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
