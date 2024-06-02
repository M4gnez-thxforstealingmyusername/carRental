import { Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RentFormComponent } from './rent-form/rent-form.component';
import { UserComponent } from './user/user.component';
import { RentModifyComponent } from './rent-modify/rent-modify.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'cars', component: CarListComponent },
    { path: 'register', component: RegisterFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactFormComponent },
    { path: 'rent/:id', component: RentFormComponent },
    { path: 'user', component: UserComponent },
    { path: 'user/rent/:id', component: RentModifyComponent },
];
