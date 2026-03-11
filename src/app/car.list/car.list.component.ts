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
  errorMessage: string = '';

  constructor(private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars().subscribe({
      next: (data: Cars[]) => {
        this.carsList = data;
        this.errorMessage = '';
      },
      error: (err) => {
        console.error("Error fetching cars", err);
        this.errorMessage = 'Failed to load cars. Please try again.';
      }
    });
  }

  onDelete(carId: any): void {
    this.carService.deleteCar(carId).subscribe({
      next: () => {
        this.carsList = this.carsList.filter(car => car.id !== carId);
        this.errorMessage = '';
      },
      error: (err) => {
        console.error("Error deleting car", err);
        this.errorMessage = 'Failed to delete car. Please try again.';
      }
    });
  }

  onEdit(carId: any): void {
    this.router.navigate(['/modify-cars', carId]);
  }
}
