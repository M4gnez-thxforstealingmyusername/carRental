import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import { CommonModule } from '@angular/common';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  router = inject(Router)
  userService = inject(UserService);

  user : User = new User(null, "", "", "", "");
  userPassword : string = "";
  userPasswordConfirm : string = "";

  registerUser(){
    this.userService.register(this.user, this.userPassword).subscribe( res => {this.router.navigate(["/login"]);}, error => {
      console.error('Error:', error);
    });
  }

  checkEmail(){
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(this.user.email ?? "");
  }

  checkPasswordLen(){
    return this.userPassword.length >= 8;
  }

  checkPasswordDigit(){
    var regex = /\d/;
    return regex.test(this.userPassword);
  }

  checkPasswordLower(){
    var regex = /[a-z]/;
    return regex.test(this.userPassword);
  }

  checkPasswordUpper(){
    var regex = /[A-Z]/;
    return regex.test(this.userPassword);
  }
}
