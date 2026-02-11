import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CarListComponent } from './car.list/car.list.component';
import { CarListItemComponent } from './car.list.item/car.list.item.component';
import { CarService } from './services/car.service';
import { Cars } from './cars';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CarListComponent, CarListItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Car Management System';
  selectedCar?: Cars;

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCar(1).subscribe({
      next: (data: Cars | undefined) => this.selectedCar = data,
      error: err => console.error("Error fetching car", err),
      complete: () => console.log("Single car fetch complete!")
    });
  }
}
