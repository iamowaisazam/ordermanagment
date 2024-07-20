import { Routes } from '@angular/router';

export const routes: Routes = [
   
    // { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    
    // {
    //     path:'',
    //     loadComponent: () => import('./web/shared/weblayout/weblayout.component').then(m => m.WeblayoutComponent),
    //     children:[
    //         {
    //             path:'',
    //             loadComponent: () => import('./web/home/home.component').then(m => m.HomeComponent)
    //         },
    //     ]
    // },
    {
        path:'login',
        loadComponent: () => import('./admin/login/login.component').then(m => m.LoginComponent)
    },
    {
        path:'register',
        loadComponent: () => import('./admin/register/register.component').then(m => m.RegisterComponent)
    },
    { path: '', redirectTo: 'admin/dashboard', pathMatch: 'full' },
    {
        path:'admin',
        loadComponent: () => import('./admin/shared/layout/layout.component').then(m => m.LayoutComponent),
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
