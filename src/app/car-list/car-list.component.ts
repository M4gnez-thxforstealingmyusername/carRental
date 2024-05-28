import { Component, OnInit, inject } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';
import { CarComponent } from '../car/car.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CarComponent, CommonModule],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent implements OnInit{
  carService = inject(CarService);

  cars? : Car[];

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => {this.cars = data;});
  }

}
