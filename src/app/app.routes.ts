import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    {
        path:'admin',
        loadComponent: () => import('./shared/layout/layout.component').then(m => m.LayoutComponent),
        children:[
            {
                path:'dashboard',
                loadComponent: () => import('./admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path:'users',
                loadComponent: () => import('./admin/users/users.component').then(m => m.UsersComponent)
            },
            {
                path:'settings',
                loadComponent: () => import('./admin/settings/settings.component').then(m => m.SettingsComponent)
            },
        ]
      },
];
