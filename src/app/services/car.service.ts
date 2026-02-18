import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cars } from '../cars';
import { CARS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsList: Cars[] = CARS;

  constructor() { }

  getCars(): Observable<Cars[]> {
    return of(CARS);
  }

  getCar(id: number): Observable<Cars | undefined> {
    const car = this.carsList.find(c => c.id === id);
    return of(car);
  }

  createCar(car: Cars): Observable<Cars[]> {
    this.carsList.push(car);
    return of(this.carsList);
  }

  updateCar(car: Cars): Observable<Cars[]> {
    const index = this.carsList.findIndex(c => c.id === car.id);
    if (index !== -1) {
      this.carsList[index] = car;
    }
    return of(this.carsList);
  }

  deleteCar(id: number): Observable<Cars[]> {
    this.carsList = this.carsList.filter(c => c.id !== id);
    return of(this.carsList);
  }

}
