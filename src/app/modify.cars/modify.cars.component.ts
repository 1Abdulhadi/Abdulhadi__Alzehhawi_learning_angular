import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { NgIf } from "@angular/common";
import { Cars } from '../cars';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-modify-cars',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify.cars.component.html',
  styleUrls: ['./modify.cars.component.css']
})
export class ModifyCarsComponent implements OnInit {
  carForm: FormGroup;
  car: Cars | undefined;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      company: ['', Validators.required],
      year: ['', Validators.required],
      electric: [false],
      imageUrl: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.carService.getCar(+id).subscribe({
        next: (car) => {
          if (car) {
            this.car = car;
            this.carForm.patchValue(car);
          }
        },
        error: (err) => {
          console.error("Error fetching car", err);
          this.errorMessage = 'Failed to load car. Please try again.';
        }
      });
    }
  }

  onSubmit(): void {
    const car: Cars = this.carForm.value;

    if (car.id) {
      // Update  car
      this.carService.updateCar(car).subscribe({
        next: () => {
          this.router.navigate(['/cars']);
        },
        error: (err) => {
          console.error("Error updating car", err);
          this.errorMessage = 'Failed to update car. Please try again.';
        }
      });
    } else {
      // Create new car
      this.carService.createCar(car).subscribe({
        next: () => {
          this.router.navigate(['/cars']);
        },
        error: (err) => {
          console.error("Error creating car", err);
          this.errorMessage = 'Failed to create car. Please try again.';
        }
      });
    }
  }

  navigateToCarList(): void {
    this.router.navigate(['/cars']);
  }
}
