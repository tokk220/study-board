import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './app/main/main.module';

import { environment } from './environment/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule)
	.catch(err => console.error(err));
