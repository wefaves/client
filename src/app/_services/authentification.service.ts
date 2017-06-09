import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from "../../environments/environment";
import { UserService } from "./user.service";
import { AlertService } from "./alert.service";
import { Cookie} from "ng2-cookies";

@Injectable()
export class AuthenticationService {

  private currentUser = JSON.parse(Cookie.get('currentUser'));

  constructor(private http: Http, private userService: UserService, private alertService: AlertService) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.apiUrl+'/login_check', JSON.stringify({ _username: username, _password: password }),  options)
      .map((response: Response) => {
        let data = response.json();

        if (data.token) {
          Cookie.set('currentUser', JSON.stringify(data));
          this.userService.getSelf()
            .subscribe(
              user => {
                user.token = data.token;
                Cookie.set('currentUser', JSON.stringify(user));
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
    Cookie.delete('currentUser');
    window.location.reload();
  }

  isAuthentificated() {
    if (Cookie.get('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
