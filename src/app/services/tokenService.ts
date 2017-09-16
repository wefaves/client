import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Token } from '../models/user/token';
import { CookieService } from 'ng2-cookies';

@Injectable()
export class TokenService {
  private token: Subject<Token> = new Subject<Token>();

  constructor(private cookieService: CookieService) {}

  public subscribeToken(callback) {
    return this.token.subscribe(callback);
  }

  public updateToken(token: Token) {
    this.token.next(token);
  }

  /**
   * Write user properties in the local storage.
   *
   * @param user
   * @returns {Promise<User>}
   */
  createOnStorage(token: Token): Promise<Token> {
    return new Promise((resolve) => {
      this.getOnStorage().then((res) => {
        if (res) {
          this.deleteOnStorage();
        }
      }).then(() => {
        localStorage.setItem('token', JSON.stringify(token.getModel()));
        this.cookieService.set('token', token.access_token);
        this.updateToken(token);
        resolve();
      });
    });
  }

  /**
   * Get user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  getOnStorage(): Promise<Token> {
    return new Promise((resolve) => {
      resolve(localStorage.getItem('token'));
    });
  }

  /**
   * Get user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  getOnStorageSync(): Token {
    const tokenObj = JSON.parse(localStorage.getItem('token'));

    if (tokenObj) {
      return Token.ParseFromObject(tokenObj);
    }
    return null;
  }

  /**
   * Update user properties from local storage.
   *
   * @param user
   * @returns {Promise<User>}
   */
  updateOnStorage(token: Token): Promise<Token> {
    return new Promise((resolve) => {
      resolve(localStorage.getItem('token'));
    });
  }

  /**
   * Delete user properties from local storage.
   *
   * @returns {Promise<User>}
   */
  deleteOnStorage(): Promise<any> {
    return new Promise((resolve) => {
      localStorage.removeItem('token');
      this.cookieService.delete('token');      this.updateOnStorage(null);
      resolve();
    });
  }
}
