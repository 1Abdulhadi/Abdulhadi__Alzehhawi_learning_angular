import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cars } from '../cars';
import { CarListItemComponent } from '../car.list.item/car.list.item.component';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarListItemComponent],
  templateUrl: './car.list.component.html',
  styleUrls: ['./car.list.component.css']
})
export class CarListComponent {
  carsList: Cars[] = [
    { id: 1, name: "Giulia", company: "Alfa Romeo", year: 2026, electric: false },
    { id: 2, name: "Mustang", company: "Ford", year: 1969, electric: false },
    { id: 3, name: "Santa Fe", company: "Hyundai", year: 2008, electric: false },
    { id: 4, name: "Camry", company: "Toyota", year: 2007, electric: false },
    { id: 5, name: "Model 3", company: "Tesla", year: 2025, electric: true },
    { id: 6, name: "Accord", company: "Honda", year: 2020, electric: false },
    { id: 7, name: "GT-R", company: "Nissan", year: 2024, electric: false }
  ];

  constructor(private carService: CarService) { }
}
