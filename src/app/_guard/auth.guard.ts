import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from "../services/authentification.service";
import {UserService} from "../services/user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  isAuthenticated() {
    if (this.userService.getOnStorageSync().token) {
      return true;
    }
    return false;
  }

  isAuthorized() {
    return false;
  }
}
