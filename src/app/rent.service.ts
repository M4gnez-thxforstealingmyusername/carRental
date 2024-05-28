import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from './Rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  http = inject(HttpClient);

  constructor() { }

  private rentUrl = 'http://localhost/carRentalAPI/rent';

  getRent(): Observable<Rent[]>{
    return this.http.get<Rent[]>(this.rentUrl, { withCredentials: true });
  }

  addRent(rent: Rent): Observable<any>{
    return this.http.post(this.rentUrl, rent, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  }
}
