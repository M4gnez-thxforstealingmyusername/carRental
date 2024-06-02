import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../User';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../Car';
import { CarService } from '../car.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Rent } from '../Rent';
import { RentService } from '../rent.service';
import { asapScheduler, map } from 'rxjs';
import { sanitizeIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-rent-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './rent-form.component.html',
  styleUrl: './rent-form.component.css'
})
export class RentFormComponent implements OnInit{
  userService = inject(UserService);
  carService = inject(CarService);
  rentService = inject(RentService);
  route = inject(ActivatedRoute);

  carId! : string | null;
  user!: User | null;
  car!: Car | null;

  rentStartDate!: string;
  rentEndDate!: string;

  rents!: Rent[];
  myRents!: Rent[];
  occupiedDates: Date[] = [];
  dateCorrect = true;

  async ngOnInit(): Promise<void>{
    this.carId = this.route.snapshot.paramMap.get('id');

    this.userService.getUser().subscribe(async data => {
      this.user = data
      if(this.user.email == undefined)
        this.user = null;
    })

    this.carService.getCars().subscribe(data => {
      this.car = data.find(x => x.id == parseInt(this.carId ?? "")) ?? null
    })

    this.getRents();
  }

  getRents(){
    this.rentService.getRent().subscribe(data => {
      this.rents = data.filter(x => x.carId == parseInt(this.carId ?? ""))
      this.myRents = this.rents.filter(x => x.userId == this.user?.id);

    });
  }


  checkDate(){
    return this.rentStartDate < this.rentEndDate
  }

  testDates(){
    this.rents.filter(x => x.carId == parseInt(this.carId ?? "")).forEach(x =>{
      this.occupiedDates.push(...this.dateSpan(x.startDate, x.endDate))
    })

    this.dateCorrect = true;

    this.dateSpan(this.rentStartDate, this.rentEndDate).forEach(item => {
      if(this.occupiedDates.some(date => date.getDate() == item.getDate())){
        this.dateCorrect = false;
      }
    })

    if(this.dateCorrect){
      this.rentService.addRent(new Rent(parseInt(this.carId ?? ""), this.rentStartDate, this.rentEndDate)).subscribe();
      
    }
  }

  dateSpan(startDateString : string, endDateString : string) : Date[]{
    var sd = new Date(startDateString);
    var ed = new Date(endDateString);

    var ds : Date[]= [];

    for(var i = sd; i <= ed; i.setDate(i.getDate() + 1)){
      var nd = new Date();
      nd.setDate(i.getDate());
      ds.push(nd);
    }

    return ds;
  }
}
