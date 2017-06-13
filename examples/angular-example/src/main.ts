import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {NotSupportedModule } from './notSupported/notSupported.module';
import { environment } from './environments/environment';

import GateKeeper from 'zuul';

if (environment.production) {
  enableProdMode();
}

const supported = {
  browsers: [
    {
      browser: 'chrome',
      version: '59',
    },
    {
      browser: 'safari',
      version: '9',
    },
    {
      browser: 'ie',
      version: '9',
    },
    {
      browser: 'edge',
      version: '12',
    },
    {
      browser: 'firefox',
      version: '46',
    },
  ],
  required: true,
};

const module = GateKeeper(AppModule,NotSupportedModule,supported);
platformBrowserDynamic().bootstrapModule(module);
