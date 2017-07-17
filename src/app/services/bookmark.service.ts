/**
 * Created by romain on 2017-04-09.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment } from "../../environments/environment";
import { ServiceHelper } from "./service.helper";
import { AuthenticationService } from "./authentification.service";

@Injectable()
export class BookmarkService extends ServiceHelper {

  constructor(private http: Http, authenticationService: AuthenticationService) {
    super();
  }

  getAll() {
    return this.http.get(environment.apiUrl+'/users/self/favorite', this.jwt()).map((response: Response) => response.json());
  }

  delete(bookmarkId: string) {
    return this.http.delete(environment.apiUrl+'/users/self/favorite/'+bookmarkId, this.jwt()).map((response: Response) => response.json());
  }
}
