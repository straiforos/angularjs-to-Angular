import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h2>Modern Dashboard</h2>
      <div class="stats">
        @for (stat of stats(); track stat.id) {
          <div class="stat-card">
            <h3>{{ stat.title }}</h3>
            <p class="value">{{ stat.value }}</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .value {
      font-size: 24px;
      font-weight: bold;
      color: #7702FF;
    }
  `]
})
export class DashboardComponent {
  stats = signal([
    { id: 1, title: 'Active Users', value: '1,234' },
    { id: 2, title: 'Revenue', value: '$45,678' },
    { id: 3, title: 'Conversion Rate', value: '23%' },
    { id: 4, title: 'Active Sessions', value: '892' }
  ]);
} 