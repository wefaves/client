import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { ApiService} from "./api.service";
import { environment } from '../../environments/environment';
import { Token } from '../models/user/token';

@Injectable()
export class AuthenticationService {

  constructor(private apiService: ApiService) { }

  login(username: string, password: string): Promise<Token> {

    const url = '/oauth/v2/token'
      + '?client_id=' + environment.client_id
      + '&client_secret=' + environment.client_secret
      + '&grant_type=' + environment.grant_type
      + '&username=' + username
      + '&password=' + password

    return new Promise((resolve, reject) => {
      this.apiService.getRequest(url)
        .subscribe(
          data => resolve(Token.ParseFromObject(data)),
          error => reject(<any>error));
    });
  }
}

