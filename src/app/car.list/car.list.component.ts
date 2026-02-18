import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Cars } from '../cars';
import { CarListItemComponent } from '../car.list.item/car.list.item.component';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule, CarListItemComponent, RouterLink],
  templateUrl: './car.list.component.html',
  styleUrls: ['./car.list.component.css']
})
export class CarListComponent implements OnInit {
  carsList: Cars[] = [];
  selectedCar?: Cars;

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe({
      next: (data: Cars[]) => this.carsList = data,
      error: err => console.error("Error fetching cars", err),
      complete: () => console.log("Car data fetch complete")
    });
  }

  selectCar(car: Cars): void {
    this.selectedCar = car;
  }

  onDelete(carId: any): void {
    this.carService.deleteCar(carId);
    this.carsList = this.carsList.filter(car => car.id !== carId);
  }

  onEdit(carId: any): void {
    this.router.navigate(['/modify-cars', carId]);
  }
}
