import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cars } from '../cars';
import { CarService } from '../services/car.service';
import { HighlightOnFocusDirective } from '../directives/highlight.on.focus.directive';

@Component({
  selector: 'app-modify-cars',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightOnFocusDirective],
  templateUrl: './modify.cars.component.html',
  styleUrls: ['./modify.cars.component.css']
})
export class ModifyCarsComponent implements OnInit {
  carForm: FormGroup;
  car: Cars | undefined;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.carForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      company: ['', Validators.required],
      year: ['', Validators.required],
      electric: [false],
      imageUrl: [''],
      price: ['', Validators.required],
      releaseDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.carService.getCar(+carId).subscribe({
        next: (car) => {
          if (car) {
            this.car = car;
            this.carForm.patchValue(car);
          }
        },
        error: (err) => {
          console.error('Error fetching car', err);
          this.errorMessage = 'Failed to load car. Please try again.';
        }
      });
    }
  }

  onSubmit(): void {
    if (this.carForm.valid) {
      const formValue = this.carForm.value;
      if (this.car && this.car.id) {
        this.carService.updateCar(formValue).subscribe({
          next: () => {
            this.router.navigate(['/cars']);
          },
          error: (err) => {
            console.error('Error updating car', err);
            this.errorMessage = 'Failed to update car. Please try again.';
          }
        });
      } else {
        this.carService.createCar(formValue).subscribe({
          next: () => {
            this.router.navigate(['/cars']);
          },
          error: (err) => {
            console.error('Error creating car', err);
            this.errorMessage = 'Failed to create car. Please try again.';
          }
        });
      }
    }
  }
}
