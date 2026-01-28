import { Component } from '@angular/core';
import { CarListComponent } from './car.list/car.list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CarListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Car Management System';
}
