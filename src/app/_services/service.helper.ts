/**
 * Created by romain on 2017-04-21.
 */
import { Headers, RequestOptions, } from "@angular/http";
import { Cookie } from "ng2-cookies";

export class ServiceHelper {

  constructor() {
  }

  protected jwt() {
    let currentUser = JSON.parse(Cookie.get('currentUser'));
    if (currentUser) {
      let headers = new Headers({ 'Authorization': 'Bearer '+currentUser });
      return new RequestOptions({ headers: headers });
    }
  }
}
