import { provideRouter, Routes } from '@angular/router';
import { CarListComponent } from "./app/car.list/car.list.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./app/services/in-memory-data.service";

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id',
    loadComponent: () => import('./app/car.list.item/car.list.item.component').then(m => m.CarListItemComponent) },
  { path: 'modify-cars/:id',
    loadComponent: () => import('./app/modify.cars/modify.cars.component').then(m => m.ModifyCarsComponent) },
  { path: 'modify-cars',
    loadComponent: () => import('./app/modify.cars/modify.cars.component').then(m => m.ModifyCarsComponent) },
  { path: '**',
    loadComponent: () => import('./app/page.not.found/page.not.found.component').then(m => m.PageNotFoundComponent) }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }))
  ],
}).catch((err) => console.error(err));
