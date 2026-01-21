import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cars } from './cars';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  title = 'Cars models';

  carsList: Cars[] = [
    { id: 1, name: "Giulia", company: "Alfa Romeo", year: 2026, electric: false },
    { id: 2, name: "Mustang", company: "Ford", year: 1969, electric: false },
    { id: 3, name: "Santa fe", company: "Hyundai", year: 2008, electric: false },
    { id: 4, name: "Camry", company: "Toyota", year: 2007, electric: false },
    { id: 5, name: "Model 3", company: "Tesla", year: 2025, electric: true },
    { id: 6, name: "Accord", company: "Honda", year: 2020, electric: false },
    { id: 7, name: "Gtr", company: "Nissan", year: 2024, electric: false }
  ];
}
