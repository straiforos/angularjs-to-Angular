import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { UrlHandlingStrategy } from '@angular/router';
import { LegacyUpgradeModule } from './upgrade/upgrade.module';

import { routes, CustomUrlHandlingStrategy } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy },
    importProvidersFrom(LegacyUpgradeModule)
  ]
};
