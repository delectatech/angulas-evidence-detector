import { Routes } from '@angular/router';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('@app/auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'list',
    loadComponent: () => import('@app/views/list/list.component').then((m) => m.ListComponent),
    canActivate: [AuthGuard],
    data: { animation: 'ListPage' },
  },
  {
    path: 'establecimiento/:uid',
    loadComponent: () => import('@app/views/detail/detail.component').then((m) => m.DetailComponent),
    canActivate: [AuthGuard],
    data: { animation: 'DetailPage' },
  },
  { path: '**', redirectTo: '/login' },
];
