import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from "./account.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProfileComponent } from "./profile/profile.component";
import { AuthGuard } from "../../guard/auth.guard";
import { BookmarksComponent } from "./bookmarks/bookmarks.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'registration', component: RegistrationComponent },
          { path: 'bookmarks', component: BookmarksComponent, canActivate: [AuthGuard] },
          { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
          { path: '', component: ProfileComponent, canActivate: [AuthGuard]}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccountRoutingModule { }
