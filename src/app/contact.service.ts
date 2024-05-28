import { Injectable, inject } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  http = inject(HttpClient)

  contactUrl = 'http://localhost/carRentalAPI/contact';

  push(user: User): Observable<any>{
    return this.http.post(this.contactUrl, {name: user.name, lastName: user.lastName, email: user.email, phone: user.phone}, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  }
}
