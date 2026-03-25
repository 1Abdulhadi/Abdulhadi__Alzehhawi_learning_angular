import { Component, Input } from '@angular/core';
import { CommonModule, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Cars } from '../cars';
import { CarModelPipe } from '../pipes/car.model.pipe';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [CommonModule, UpperCasePipe, CurrencyPipe, DatePipe, CarModelPipe],
  templateUrl: './car.list.item.component.html',
  styleUrls: ['./car.list.item.component.css']
})
export class CarListItemComponent {
  @Input() car?: Cars;
}
