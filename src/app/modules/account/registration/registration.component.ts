import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../services/authentification.service";
import { AlertService } from "../../../services/alert.service";
import { Router } from "@angular/router";
import { TokenService } from '../../../services/tokenService';
import { UserService } from '../../../services/user.service';
import { ApiError } from '../../../models/error/apiError';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  model: any = {};

  constructor(private tokenService: TokenService,
              private userService: UserService,
              private authentificationService: AuthenticationService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
  }

  registration() {
    const userObj = {
      email: this.model.email,
      plainPassword: {
        first: this.model.password,
        second: this.model.passwordConf
      }
    };

    this.userService.postOnApi(userObj).then(
      () => {
        this.authentificationService.login(this.model.email, this.model.password).then(
          (token) => {
            this.tokenService.createOnStorage(token).then(
              () => {
                this.alertService.success('✅ Votre compte à été créé. Merci d\'avoir rejoint la communauté Wefaves 🍾🎈🎊🎉 !', true);
                this.router.navigate(['/feed']);
              });
          }
        ).catch(
          (err: ApiError) => {
            this.alertService.error(err.cause);
          }
        );
      }
    ).catch(
      (err: ApiError) => {
        this.alertService.error(err.cause);
      }
    );
  }
}
