import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { TruncateModule } from 'ng2-truncate';
import { AccountComponent } from './account.component';
import { LogoutComponent } from './logout/logout.component';
import { FacebookModule } from 'ngx-facebook/dist/esm';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    TruncateModule,
    FacebookModule.forRoot(),
  ],
  declarations: [
    ProfileComponent, ProfileComponent,
    AccountComponent, LogoutComponent,
    FeedComponent, LoginComponent,
    RegistrationComponent
  ]
})
export class AccountModule { }
