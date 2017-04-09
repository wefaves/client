import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, ProfileComponent, LoginComponent, RegistrationComponent, ProfileComponent]
})
export class AccountModule { }
