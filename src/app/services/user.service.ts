import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { environment} from '../../environments/environment';
import { Subject } from 'rxjs/Subject';
import { ApiService } from './api.service';
import { User } from "../models/user/user";

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
        localStorage.setItem('user', JSON.stringify(User.GetModel(user)));
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
      this.updateOnStorage(null);
      resolve();
    });
  }

  /* ---------------------------------------------------------------------------------------------------------------- */
  /* User API management                                                                                              */


  // getAll() {
  //   return
  //   return this.http.get(environment.apiUrl+'/users').map((response: Response) => response.json());
  // }
  //
  // getSelf() {
  //   return this.http.get(environment.apiUrl+'/users/self', this.jwt()).map((response: Response) =>response.json());
  // }
  //
  // getById(id: string) {
  //   return this.http.get(environment.apiUrl+'/users/'+id).map((response: Response) =>response.json());
  // }
  //
  // update(user: any = {}) {
  //   return this.http.put(environment.apiUrl+'/users/'+user.id, user, this.jwt()).map((response: Response) => response.json());
  // }
  //
  // create(user: any = {}) {
  //   return this.http.post(environment.apiUrl+'/users', user).map((response: Response) => response.json());
  // }

  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  // }
}
