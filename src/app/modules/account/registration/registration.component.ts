import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../../services/authentification.service";
import { AlertService } from "../../../services/alert.service";
import { Router } from "@angular/router";
import { TokenService } from '../../../services/tokenService';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  private model: any = {};

  constructor(private tokenService: TokenService,
              private authentificationService: AuthenticationService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
  }

  registration() {
    const userObj = {
      fos_user_registration_form: {
        email: this.model.email,
        username: this.model.username,
        plainPassword: {
          first: this.model.password,
          second: this.model.passwordConf
        }
      }
    }

    // this.userService.postOnApi(userObj).then(
    //   () => {
    //     this.authentificationService.login(this.model.username, this.model.password).then(
    //       (token) => {
    //         this.tokenService.createOnStorage(token).then(
    //           () => {
    //             this.alertService.success('✅ Votre compte à été créé. Merci d\'avoir rejoint la communauté Wefaves 🍾🎈🎊🎉 !', true);
    //             this.router.navigate(['/']);
    //           });
    //       }
    //     ).catch(
    //       (err) => {
    //         this.alertService.error(err.message);
    //       }
    //     );
    //   }
    // ).catch(
    //   (err) => {
    //     this.alertService.error(err.message);
    //   }
    // );
  }
}
