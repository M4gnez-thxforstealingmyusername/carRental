import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  currentUser?: Observable<User>;

  constructor() { }

  private userUrl = 'http://localhost/carRentalAPI/user';
  private loginUrl = 'http://localhost/carRentalAPI/login';
  private logoutUrl = 'http://localhost/carRentalAPI/logout';
  private registerUrl = 'http://localhost/carRentalAPI/register';

  getUser(): Observable<User>{
    this.currentUser = this.http.get<User>(this.userUrl, { withCredentials: true });
    return this.currentUser;
  }



  register(user: User, password: string): Observable<any>{
    return this.http.post(this.registerUrl, {name: user.name, lastName: user.lastName, email: user.email, password: password, phone: user.phone}, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  }

  login(email: string, password: string): Observable<any>{
    return this.http.post(this.loginUrl, {email: email, password: password }, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
  }

  logout(){
    return this.http.post(this.logoutUrl, {}, {withCredentials: true}).subscribe()
  }


}
