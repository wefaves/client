/**
 * Created by romain on 2017-04-21.
 */
import { Headers, RequestOptions, } from "@angular/http";
import { AuthenticationService } from "./authentification.service";

export class ServiceHelper {

  constructor(private authenticationService: AuthenticationService) {
  }

  protected jwt() {
    var currentUser = this.authenticationService.getCurrentUser();

    if (this.authenticationService && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer '+currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
