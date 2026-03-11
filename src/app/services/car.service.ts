import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Cars } from '../cars';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'api/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  getCar(id: number): Observable<Cars | undefined> {
    return this.http.get<Cars>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  createCar(car: Cars): Observable<Cars> {
    return this.http.post<Cars>(this.apiUrl, car).pipe(catchError(this.handleError));
  }

  updateCar(updatedCar: Cars): Observable<Cars | undefined> {
    const url = `${this.apiUrl}/${updatedCar.id}`;
    return this.http.put<Cars>(url, updatedCar).pipe(catchError(this.handleError));
  }

  deleteCar(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
