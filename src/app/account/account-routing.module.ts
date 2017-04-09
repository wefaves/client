import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from "./account.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProfileComponent } from "./profile/profile.component";

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
          { path: '', component: ProfileComponent }
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
