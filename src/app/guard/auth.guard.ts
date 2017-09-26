import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../services/tokenService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

  isAuthenticated(): boolean {
    if (this.tokenService.getOnStorageSync() != null) {
      return true;
    }
    return false;
  }

  isAuthorized() {
    return false;
  }
}
