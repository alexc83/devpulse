import { Component } from '@angular/core';
import { DashboardStatistics } from '../../components/dashboard-statistics/dashboard-statistics';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardStatistics],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
