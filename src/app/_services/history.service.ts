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
    return this.http.get(environment.apiUrl+'/users/self/history', this.jwt()).map((response: Response) => response.json());
  }

  delete(historyId: string) {
    return this.http.delete(environment.apiUrl+'/users/self/history/'+historyId, this.jwt()).map((response: Response) => response.json());
  }
}
