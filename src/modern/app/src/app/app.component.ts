import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UpgradeModule } from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="modern-nav">
      <div class="nav-brand">Hybrid Application</div>
      <div class="nav-links">
        <!-- Modern Angular Routes -->
        <div class="nav-section">
          <span class="section-label">Angular v19:</span>
          <a routerLink="/v2/home" routerLinkActive="active">Home</a>
          <a routerLink="/v2/dashboard" routerLinkActive="active">Dashboard</a>
          <a routerLink="/v2/settings" routerLinkActive="active">Settings</a>
        </div>
        
        <!-- Legacy AngularJS Routes -->
        <div class="nav-section">
          <span class="section-label">AngularJS:</span>
          <a href="/app/">Legacy Home</a>
          <a href="/app/about">About</a>
          <a href="/app/contact">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Angular router outlet -->
    <router-outlet></router-outlet>
    
    <!-- AngularJS view -->
    <div ng-view></div>
  `,
  styles: [`
    .modern-nav {
      background: #7702FF;
      padding: 1rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .nav-brand {
      font-size: 1.25rem;
      font-weight: bold;
    }
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    .nav-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .section-label {
      font-size: 0.875rem;
      opacity: 0.8;
    }
    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .nav-links a:hover {
      background-color: rgba(255,255,255,0.1);
    }
    .nav-links a.active {
      background-color: rgba(255,255,255,0.2);
    }
  `]
})
export class AppComponent {
  constructor(private upgrade: UpgradeModule) {}

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['legacyApp']);
  }
}
