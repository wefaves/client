import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from "./profile/profile.component";
import { BookmarksComponent } from "./bookmarks/bookmarks.component";
import { HistoryComponent } from "./history/history.component";
import { AccountComponent } from './account.component';
import { LogoutComponent } from './logout/logout.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from '../../guard/auth.guard';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      { path: 'bookmarks', component: BookmarksComponent, canActivate: [AuthGuard]},
      { path: 'history', component: HistoryComponent, canActivate: [AuthGuard]},
      { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'profile', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule { }
