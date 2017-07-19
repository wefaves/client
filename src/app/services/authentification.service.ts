import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {ApiService} from "./api.service";
import {User} from "../models/user/user";
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {AlertService} from "app/services/alert.service";

@Injectable()
export class AuthenticationService {

  constructor(private userService: UserService,
              private apiService: ApiService,
              private router: Router,
              private alertService: AlertService) { }

  login(username: string, password: string): Promise<User> {
    console.log('username :');
    console.log(username);
    console.log('password :');
    console.log(password);
    return new Promise((resolve, reject) => {
      this.apiService.postRequest('/login_check', {_username: username, _password: password})
        .subscribe(
          data => resolve(User.ParseFromJwt(data)),
          error => reject(<any>error));
    });
  }

  logout() {
    this.userService.deleteOnStorage().then(
      () => {
        this.alertService.success('Vous êtes déconnecté.', true);
        this.router.navigate(['/account/login'])
      }
    );
  }
}
