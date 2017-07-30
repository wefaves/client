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
import { TruncateModule } from "ng2-truncate";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    TruncateModule
  ],
  declarations: [AccountComponent, ProfileComponent, LoginComponent, RegistrationComponent, ProfileComponent, BookmarksComponent, HistoryComponent]
})
export class AccountModule { }
