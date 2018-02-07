import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { AccountComponent } from './account.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedComponent } from '../feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from '../../guard/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule { }
