// Polyfills.
import 'core-js/client/shim';
import 'zone.js/dist/zone';

import 'hammerjs';

// Angular 2 Material.
import '../styles/blue-amber.scss';
// App.
import '../styles/app.scss';

import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from '../aot/app/app.module.ngfactory';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);