import { Component, OnInit, inject } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from '../user.service';
import { RentService } from '../rent.service';
import { User } from '../User';
import { Car } from '../Car';
import { Rent } from '../Rent';
import { CommonModule } from '@angular/common';
import { RentGroup } from '../RentGroup';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  carService = inject(CarService);
  userService = inject(UserService);
  rentService = inject(RentService);

  cars! : Car[];
  user! : User;
  rents! : Rent[];

  rentGroups : RentGroup[] = [];

  ngOnInit(): void {
    forkJoin({
      cars: this.carService.getCars(),
      user : this.userService.getUser(),
      rents: this.rentService.getRent()
    }).subscribe(({cars, user, rents}) => {
      this.cars = cars

      this.user = user

      this.rents = rents.filter(x => x.userId == this.user.id);

      this.cars.forEach(x => {
        this.rentGroups.push(new RentGroup(x, this.rents.filter(y => y.carId == x.id)));
      })
    })
  }
}
