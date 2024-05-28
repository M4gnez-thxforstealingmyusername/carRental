import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Car } from '../Car';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent{
  @Input() car?: Car;
}
