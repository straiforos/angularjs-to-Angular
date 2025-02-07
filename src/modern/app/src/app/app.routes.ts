import { Routes } from '@angular/router';

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
