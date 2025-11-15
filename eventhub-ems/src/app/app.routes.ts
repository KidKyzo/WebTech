import { Routes } from '@angular/router';
import { Event } from './pages/event/event';
import { Home } from './pages/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'event', component: Event }
];

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     title: 'Home Page'
//   },
//   {
//     path: 'products',
//     component: ProductsComponent,
//     title: 'Our Products'
//   }
// ];