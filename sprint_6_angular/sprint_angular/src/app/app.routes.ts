import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { Home } from './pages/home/home';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:"full"},
    {path:"login", component:Login},
    {path:"home",canActivate:[authGuard], component: Home},
    {path:"dashboard", canActivate:[authGuard], component:Dashboard},
];
