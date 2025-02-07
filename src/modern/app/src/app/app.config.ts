import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { UrlHandlingStrategy } from '@angular/router';

import { routes } from './app.routes';
import { LegacyUpgradeModule, CustomUrlHandlingStrategy } from './upgrade';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: UrlHandlingStrategy, useClass: CustomUrlHandlingStrategy },
    importProvidersFrom(LegacyUpgradeModule)
  ]
};
