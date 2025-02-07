import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="settings">
      <h2>Application Settings</h2>
      <div class="settings-form">
        <div class="setting-group">
          <h3>Notifications</h3>
          <label>
            <input type="checkbox" [(ngModel)]="settings.emailNotifications">
            Email Notifications
          </label>
          <label>
            <input type="checkbox" [(ngModel)]="settings.pushNotifications">
            Push Notifications
          </label>
        </div>
        
        <div class="setting-group">
          <h3>Theme</h3>
          <select [(ngModel)]="settings.theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="system">System</option>
          </select>
        </div>

        <button (click)="saveSettings()">Save Settings</button>
      </div>
    </div>
  `,
  styles: [`
    .settings {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .settings-form {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .setting-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin: 10px 0;
    }
    select {
      width: 200px;
      padding: 8px;
      margin: 10px 0;
    }
    button {
      background: #7702FF;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background: #5b01c3;
    }
  `]
})
export class SettingsComponent {
  settings = {
    emailNotifications: true,
    pushNotifications: false,
    theme: 'light'
  };

  saveSettings() {
    console.log('Settings saved:', this.settings);
    // Implementation for saving settings
  }
} 