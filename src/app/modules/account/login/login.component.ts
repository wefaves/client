import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthGuard } from "../../../guard/auth.guard";
import { UserService } from "../../../services/user.service";
import { AlertService } from '../../../services/alert.service';
import { AuthenticationService } from '../../../services/authentification.service';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';
import { TokenService } from '../../../services/tokenService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;
  constructor(private alertService: AlertService,
              private authenticationService: AuthenticationService,
              private authGuard: AuthGuard,
              private tokenService: TokenService,
              private route: ActivatedRoute,
              private router: Router,
              private fb: FacebookService) {
    let initParams: InitParams = {
      appId: '191354358053537',
      xfbml: true,
      version: 'v2.9'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.authGuard.isAuthenticated()) {
      this.alertService.success('You\'re already login', true);
      this.router.navigate([this.returnUrl]);
    }
  }

  login() {
    this.authenticationService.login(this.model.email, this.model.password).then(
      (token) => {
        this.tokenService.createOnStorage(token).then(
          () => {
            this.router.navigate([this.returnUrl]);
          }
        );
      }
    ).catch(
      (err) => {
        this.alertService.error(err.message);
      }
    );
  }

  loginWithFacebook() {
    this.fb.login()
      .then((response: LoginResponse) => console.log(response))
      .catch((error: any) => console.error(error));

  }
}
