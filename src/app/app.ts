import { Component } from '@angular/core';
import { CarsComponent } from './cars.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
