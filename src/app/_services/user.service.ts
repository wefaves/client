import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment} from '../../environments/environment';
import { Cookie } from 'ng2-cookies';

@Injectable()
export class UserService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(environment.apiUrl+'/users').map((response: Response) => response.json());
  }

  getSelf() {
    return this.http.get(environment.apiUrl+'/users/self', this.jwt()).map((response: Response) =>response.json());
  }

  getById(id: string) {
    return this.http.get(environment.apiUrl+'/users/'+id).map((response: Response) =>response.json());
  }

  update(user: any = {}) {
    return this.http.put(environment.apiUrl+'/users/'+user.id, user, this.jwt()).map((response: Response) => response.json());
  }

  create(user: any = {}) {
    return this.http.post(environment.apiUrl+'/users', user).map((response: Response) => response.json());
  }

  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(Cookie.get('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer '+currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
