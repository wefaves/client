import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from "../../environments/environment";
import { Cookie} from "ng2-cookies";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(environment.apiUrl+'/login_check', JSON.stringify({ _username: username, _password: password }),  options)
      .map((response: Response) => {
        let data = response.json();

        if (data.token) {
          Cookie.set('currentUser', data.token);
        }
    });
  }

  logout() {
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
    // return this.currentUser;
  }
}
