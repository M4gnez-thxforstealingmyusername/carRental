import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carRental';
}
