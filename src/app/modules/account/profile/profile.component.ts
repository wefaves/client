import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user';
import { UserService } from '../../../services/user.service';
import { Password } from '../../../models/user/password/Password';
import { Token } from '../../../models/user/token';
import { TokenService } from '../../../services/tokenService';
import { AlertService } from '../../../services/alert.service';
import { ApiError } from '../../../models/error/apiError';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  token: Token;
  user: User;
  password: Password = Password.GetNewInstance();

  constructor(private userService: UserService,
              private tokenService: TokenService,
              private alertService: AlertService) {
    this.user = this.userService.getOnStorageSync();
    this.token = this.tokenService.getOnStorageSync();
  }

  ngOnInit() {}

  changePassword() {
    this.userService.changePassword(this.password).then(
      () => {
        this.alertService.success('Votre mot de passe à été mis à jour.');
        this.password = Password.GetNewInstance();
        window.scrollTo(0, 0);
      }
    ).catch(
      (err: ApiError) => {
        this.alertService.error(err.cause);
        window.scrollTo(0, 0);
      }
    );
  }
}
