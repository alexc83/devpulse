import { Component, computed, inject } from '@angular/core';
import { DashboardStatistics } from '../../components/dashboard-statistics/dashboard-statistics';
import { BlogpostService } from '../../../post/services/blogpost-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [DashboardStatistics, DatePipe, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  blogPostService = inject(BlogpostService);

  blogPosts = toSignal(this.blogPostService.getBlogPosts(), { initialValue: [] });
  totalBlogPosts = computed(() => this.blogPosts().length);
}
