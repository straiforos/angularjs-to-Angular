import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="modern-home">
      <h1>Modern Angular Features</h1>
      <p>Welcome to the Angular (v19) side of our hybrid application.</p>
      <div class="features-list">
        <h3>Modern Features Used:</h3>
        <ul>
          <li>Standalone Components</li>
          <li>Signal-based State Management</li>
          <li>Control Flow</li>
          <li>Deferred Loading</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .modern-home {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
    .features-list {
      margin-top: 20px;
      padding: 20px;
      background: #f8f9fa;
      border-radius: 8px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 8px 0;
      border-bottom: 1px solid #eee;
    }
    li:last-child {
      border-bottom: none;
    }
  `]
})
export class HomeComponent {} 