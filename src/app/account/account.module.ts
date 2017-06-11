import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from "@angular/forms";
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HistoryComponent } from './history/history.component';
import { FacebookModule } from "ngx-facebook/dist/esm";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    FacebookModule.forRoot()
  ],
  declarations: [AccountComponent, ProfileComponent, LoginComponent, RegistrationComponent, ProfileComponent, BookmarksComponent, HistoryComponent]
})
export class AccountModule { }
