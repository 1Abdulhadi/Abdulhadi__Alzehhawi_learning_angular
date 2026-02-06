import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cars } from '../cars';
import { CARS } from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Cars[]> {
    return of(CARS);
  }
}
