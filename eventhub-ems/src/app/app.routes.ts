import { Routes } from '@angular/router';
import { Event } from './pages/event/event';
import { Home } from './pages/home/home';
import { LoginPages } from './pages/login-pages/login-pages';


export const routes: Routes = [
    { path: '', component: Home },
    { path: 'event', component: Event },
    { path: 'login', component: LoginPages}
];