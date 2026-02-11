import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { CarListComponent } from './app/car.list/car.list.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
