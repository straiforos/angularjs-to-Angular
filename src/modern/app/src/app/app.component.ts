import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="modern-nav">
      <div class="nav-brand">Angular v19</div>
      <div class="nav-links">
        <a routerLink="/modern/home" routerLinkActive="active">Home</a>
        <a routerLink="/modern/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/modern/settings" routerLinkActive="active">Settings</a>
      </div>
    </nav>

    <router-outlet></router-outlet>
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
      gap: 1rem;
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
  title = 'Modern Angular App';
}
