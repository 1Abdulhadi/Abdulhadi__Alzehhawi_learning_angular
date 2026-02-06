import { Component, OnInit } from '@angular/core';
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
export class CarListComponent implements OnInit {
  carsList: Cars[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: (data: Cars[]) => this.carsList = data,
      error: err => console.error("Error fetching cars", err),
      complete: () => console.log("Car data fetch complete")
    });
  }
}
