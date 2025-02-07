import { Routes } from '@angular/router';
import { UrlHandlingStrategy } from '@angular/router';

// Custom URL handling strategy to handle both Angular and AngularJS routes
export class CustomUrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: any): boolean {
    // Angular handles /modern/* routes, AngularJS handles /legacy/* routes
    return url.toString().startsWith('/v2') || url.toString() === '/';
  }

  extract(url: any): any {
    return url;
  }

  merge(newUrlPart: any, wholeUrl: any): any {
    return wholeUrl;
  }
}

export const routes: Routes = [
  { 
    path: 'v2', 
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
      { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'settings', loadComponent: () => import('./components/settings/settings.component').then(m => m.SettingsComponent) }
    ]
  }
];
