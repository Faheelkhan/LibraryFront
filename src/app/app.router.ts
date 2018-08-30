import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
// import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
// import { AuthGuard } from './shared/services/auth/auth.guard';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminLayoutComponent,
    // canActivate: [AuthGuard],
    // canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        // data: { title: 'Others', breadcrumb: 'OTHERS'}
      },
      {
        path: 'categories',
        loadChildren: './categories/categories.module#CategoriesModule',
        // data: { title: 'Others', breadcrumb: 'OTHERS'}
      },
      {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      },
      {
        path: 'press',
        loadChildren: './press/press.module#PressModule'
      },
      {
        path: 'webMenu',
        loadChildren: './web-menu/web-menu.module#WebMenuModule'
      },
      {
        path: 'sites',
        loadChildren: './sites/sites.module#SitesModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];

