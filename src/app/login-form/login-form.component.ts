import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Message } from '../Message';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit{
  userService = inject(UserService);
  router = inject(Router)

  user!: User | null;

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.user = data
      if(this.user.email == undefined)
        this.user = null;
    })
  }
  
  userEmail?: string;
  userPassword?: string;

  info?: Message;

  login(){
    this.userService.getUser().subscribe(data => console.log(data))
    this.userService.login(this.userEmail ?? "", this.userPassword ?? "").subscribe(data => {
      this.info = data
      if(this.info?.logged){
        this.userService.getUser().subscribe(data => this.user = data)
      }
    })
  }
}
