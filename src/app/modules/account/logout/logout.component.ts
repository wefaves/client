import { Component } from '@angular/core';
import { TokenService } from '../../../services/tokenService';
import { Router } from '@angular/router';
import { FacebookService, InitParams } from 'ngx-facebook';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private router: Router,
              private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '191354358053537',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
    fb.getLoginStatus().then(
      (res) => {
        if (res.status === "connected") {
          fb.logout().then(
            (resp) => {
            }
          )
        }
      }
    );
    this.tokenService.deleteOnStorage().then(
      () => {
        this.userService.deleteOnStorage().then(
          () => {
            this.router.navigate(['/']);
          }
        );
      }
    );
  }
}
