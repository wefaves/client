import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Subject } from 'rxjs';
import { User } from "../models/user/user";
import { ApiService } from "./api.service";
import { Password } from '../models/user/password/Password';

@Injectable()
export class UserService {

  private _user: Subject<User> = new Subject<User>();

  constructor(private apiService: ApiService) {}

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
      resolve(User.ParseFromObject(localStorage.getItem('user')));
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
          data => resolve(User.ParseFromObject(data)),
          error => reject(<any>error));
    });
  }

  changePassword(password: Password): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.patchRequest('/users/self/change-password', Password.GetModel(password))
        .subscribe(
          data => resolve(data),
          error => reject(<any>error));
    });
  }
}
