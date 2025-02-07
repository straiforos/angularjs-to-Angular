import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Bootstrap the Angular application
bootstrapApplication(AppComponent, appConfig)
  .then(ref => {
    // Get the injector
    const upgrade = ref.injector.get(UpgradeModule);
    // Bootstrap AngularJS
    upgrade.bootstrap(document.documentElement, ['legacyApp']);
  })
  .catch(err => console.error(err));
