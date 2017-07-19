import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs/Subject';
import { ApiService } from './api.service';
import { User } from "../models/user/user";
import { Cookie } from "ng2-cookies/ng2-cookies";

@Injectable()
export class UserService {

  private _user: Subject<User> = new Subject<User>();

  constructor(public apiService: ApiService) {}

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
        this.updateUserService(user);
        console.log(JSON.stringify(User.GetModel(user)));
        localStorage.setItem('user', JSON.stringify(User.GetModel(user)));
        Cookie.set("CurrentUser", JSON.stringify(User.GetModel(user)));
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
      this.updateUserService(User.ParseFromObject(localStorage.getItem('user')));
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

    this.updateUserService(user);
    return user;
  }

  /**
   * Update user properties from local storage.
   *
   * TODO to implement
   *
   * @param user
   * @returns {Promise<User>}
   */
  updateOnStorage(user: User): Promise<User> {
    return new Promise((resolve) => {
      resolve(localStorage.getItem('user'));
    });
  }

  /**
   * Delete user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  deleteOnStorage(): Promise<any> {
    return new Promise((resolve) => {
      localStorage.removeItem('user');
      Cookie.delete("CurrentUser");
      this.updateOnStorage(null);
      resolve();
    });
  }
}
