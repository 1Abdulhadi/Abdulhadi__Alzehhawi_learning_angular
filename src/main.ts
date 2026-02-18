import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { App } from './app/app';
import { CarListComponent } from './app/car.list/car.list.component';
import { PageNotFoundComponent } from './app/page.not.found/page.not.found.component';
import { ModifyCarsComponent } from './app/modify.cars/modify.cars.component';

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'modify-cars/:id', component: ModifyCarsComponent },
  { path: 'modify-cars', component: ModifyCarsComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).catch((err) => console.error(err));
