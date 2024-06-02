import { Component, OnInit, inject } from '@angular/core';
import { RentService } from '../rent.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Rent } from '../Rent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rent-modify',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rent-modify.component.html',
  styleUrl: './rent-modify.component.css'
})
export class RentModifyComponent implements OnInit{
  route = inject(ActivatedRoute);
  router = inject(Router);
  rentService = inject(RentService);

  rentId! : number;
  rent? : Rent;

  ngOnInit(): void {
    this.rentId = parseInt(this.route.snapshot.paramMap.get('id') ?? "");

    this.rentService.getRent().subscribe(data => this.rent = data.find(x => x.id == this.rentId))
  }

  modify(){
    if(this.rent){
      this.rentService.modifyRent(this.rent).subscribe();
      this.router.navigate(["/user"]);
    }
  }

  callOff(){
    if(this.rent)
      this.rentService.deleteRent(this.rent).subscribe();
    this.router.navigate(["/user"]);
  }
}
