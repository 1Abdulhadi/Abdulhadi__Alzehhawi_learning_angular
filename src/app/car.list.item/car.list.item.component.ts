import { Component, Input } from '@angular/core';
import { CommonModule, UpperCasePipe, CurrencyPipe, DatePipe } from '@angular/common';
import { Cars } from '../cars';
import { CarModelPipe } from '../pipes/car.model.pipe';
import { HoverHighlightDirective } from '../directives/hover.highlight.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-car-list-item',
  standalone: true,
  imports: [
    CommonModule,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    CarModelPipe,
    HoverHighlightDirective,
    MatCardModule
  ],
  templateUrl: './car.list.item.component.html',
  styleUrls: ['./car.list.item.component.css']
})
export class CarListItemComponent {
  @Input() car?: Cars;
}
