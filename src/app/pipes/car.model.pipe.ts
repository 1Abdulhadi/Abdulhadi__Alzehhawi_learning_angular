import { Pipe, PipeTransform } from '@angular/core';
import { Cars } from '../cars';

@Pipe({
  name: 'carModel',
  standalone: true
})
export class CarModelPipe implements PipeTransform {

  transform(car: Cars): string {
    return `${car.company} ${car.name}`;
  }
}
