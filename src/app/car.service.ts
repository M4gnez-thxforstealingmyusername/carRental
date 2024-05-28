import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './Car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  http = inject(HttpClient);

  constructor() { }

  private carUrl = 'http://localhost/carRentalAPI/car';


  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl);
  }
}
