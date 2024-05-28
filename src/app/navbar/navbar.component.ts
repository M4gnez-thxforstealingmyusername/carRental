import { Component, OnInit, inject } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { User } from '../User';
import { UrlSegment } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  userService = inject(UserService);
  user : User | null = null;

  ngOnInit(){
    this.userService.getUser().subscribe(data => {
      if(data.id != null)
        this.user = data;
    });
  }

  logout(){
    this.userService.logout();
    this.ngOnInit()
  }
}
