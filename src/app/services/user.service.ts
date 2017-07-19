import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject';
import { User } from "../models/user/user";
import { Cookie } from "ng2-cookies/ng2-cookies";
import {ApiService} from "./api.service";
import {JwtHelper} from "angular2-jwt";
import {AlertService} from "./alert.service";
import {Router} from "@angular/router";

@Injectable()
export class UserService {

  jwtHelper: JwtHelper = new JwtHelper();
  private _user: Subject<User> = new Subject<User>();

  constructor(private apiService: ApiService, private alertService: AlertService, private router: Router) {
    if (localStorage.getItem('user')) {
      const token = JSON.parse(localStorage.getItem('user')).token;

      if (this.jwtHelper.isTokenExpired(token)) {
        this.deleteOnStorage().then(
          () => {
            this.alertService.warning('Votre session à expiré veuilliez vous reconnecter,', true);
            this.router.navigate(['/account/login']);
          }
        );
      }
    }
  }

  /* ---------------------------------------------------------------------------------------------------------------- */
  /* Observable use object                                                                                            */

  public subscribeToUserService(callback) {
    return this._user.subscribe(callback);
  }

  public updateUserService(user: User) {
    this._user.next(user);
  }

  /* ---------------------------------------------------------------------------------------------------------------- */
  /* User storage management                                                                                          */

  /**
   * Write user properties in the local storage.
   *
   * @param user
   * @returns {Promise<User>}
   */
  createOnStorage(user: User): Promise<User> {
    return new Promise((resolve) => {
      this.getOnStorage().then((res) => {
        if (res) {
          this.deleteOnStorage();
        }
      }).then(() => {
        localStorage.setItem('user', JSON.stringify(User.GetModel(user)));
        Cookie.set("currentUser", user.token);
        this.updateUserService(user);
        resolve();
      });
    });
  }

  /**
   * Get user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  getOnStorage(): Promise<User> {
    return new Promise((resolve) => {
      resolve(localStorage.getItem('user'));
    });
  }

  /**
   * Get user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  getOnStorageSync(): User {
    const user = User.ParseFromObject(JSON.parse(localStorage.getItem('user')));
    return user;
  }

  /**
   * Delete user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  deleteOnStorage(): Promise<any> {
    return new Promise((resolve) => {
      localStorage.removeItem('user');
      Cookie.delete("currentUser");
      this.updateUserService(null);
      resolve();
    });
  }

  /* ---------------------------------------------------------------------------------------------------------------- */
  /* API                                                                                         */

  postOnApi(user: {}): Promise<User> {
    return new Promise((resolve, reject) => {
      this.apiService.postRequest('/users', user)
        .subscribe(
          data => resolve(User.ParseFromObject(data)),
          error => reject(<any>error));
    });
  }

  getSelf(): Promise<User> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self')
        .subscribe(
          data => resolve(User.ParseFromObject(data)),
          error => reject(<any>error));
    });
  }

  updateSelf(model: {}): Promise<User> {
    return new Promise((resolve, reject) => {
      this.apiService.patchRequest('/users/self', model)
        .subscribe(
          data => resolve(User.ParseFromObject(data, true)),
          error => reject(<any>error));
    });
  }
}
