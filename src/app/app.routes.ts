import { Routes } from '@angular/router';
import { CreatePost } from './features/post/pages/create-post/create-post';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: 'create-post',
    component: CreatePost,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  },
];
