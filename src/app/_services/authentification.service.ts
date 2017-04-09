import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from "../../environments/environment";

@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.apiUrl+'/login_check', JSON.stringify({ _username: username, _password: password }),  options)
      .map((response: Response) => {
        let user = response.json();
        user.username = username

        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
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
