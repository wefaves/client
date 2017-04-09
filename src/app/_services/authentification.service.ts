import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from "../../environments/environment";
import {UserService} from "./user.service";
import {AlertService} from "./alert.service";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http, private userService: UserService, private alertService: AlertService) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.apiUrl+'/login_check', JSON.stringify({ _username: username, _password: password }),  options)
      .map((response: Response) => {
        let data = response.json();

        if (data.token) {
          localStorage.setItem('currentUser', JSON.stringify(data));
          this.userService.getSelf()
            .subscribe(
              user => {
                user.token = data.token;
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.alertService.success('You have been log in', true);
              },
              error => {
                this.alertService.error(error);
              }
            );
        }
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  isAuthentificated() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
}
