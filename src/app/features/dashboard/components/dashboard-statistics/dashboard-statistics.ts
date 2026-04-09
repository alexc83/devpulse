import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [],
  templateUrl: './dashboard-statistics.html',
  styleUrl: './dashboard-statistics.css',
})
export class DashboardStatistics {
  value = input.required<number>();
  label = input.required<string>();
}
