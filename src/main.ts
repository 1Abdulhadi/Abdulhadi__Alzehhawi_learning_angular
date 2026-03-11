import { provideRouter, Routes } from '@angular/router';
import { CarListComponent } from "./app/car.list/car.list.component";
import { PageNotFoundComponent } from "./app/page.not.found/page.not.found.component";
import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { ModifyCarsComponent } from './app/modify.cars/modify.cars.component';
import { provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./app/services/in-memory-data.service";

const routes: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: CarListComponent },
  { path: 'modify-cars/:id', component: ModifyCarsComponent },
  { path: 'modify-cars', component: ModifyCarsComponent },
  { path: '**', component: PageNotFoundComponent }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }))
  ],
}).catch((err) => console.error(err));
