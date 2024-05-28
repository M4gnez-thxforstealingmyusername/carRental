import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../User';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  router = inject(Router)
  contactService = inject(ContactService)

  user: User = new User(null, "", "", "", "")

  registerContact(){
    this.contactService.push(this.user).subscribe( res => {console.log(res); this.router.navigate(["/home"]);}, error => {
      console.error('Error:', error);
    });
  }

  checkEmail(){
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(this.user.email ?? "");
  }
}
