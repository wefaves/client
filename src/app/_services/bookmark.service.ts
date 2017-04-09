/**
 * Created by romain on 2017-04-09.
 */
import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import { environment} from "../../environments/environment";

@Injectable()
export class BookmarkService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(environment.apiUrl+'/users/self/favorite', this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer '+currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
