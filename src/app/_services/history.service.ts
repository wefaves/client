import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment} from "../../environments/environment";
import { ServiceHelper } from "./service.helper";
import {AuthenticationService} from "./authentification.service";

@Injectable()
export class HistoryService extends ServiceHelper {
  constructor(private http: Http, authenticationService: AuthenticationService) {
    super(authenticationService);
  }

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
}
