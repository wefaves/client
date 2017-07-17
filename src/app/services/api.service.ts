import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class ApiService {

  /* ---------------------------------------------------------------------------------------------------------------- */

  private BASE_URL: string = environment.api_endpoint;

  /* ---------------------------------------------------------------------------------------------------------------- */

  /**
   * Get the Json Web Token from the local storage.
   *
   * @returns {RequestOptions}
   */
  private static formatHeader(): RequestOptions {
    const headers: Headers = new Headers();
    if (localStorage.getItem('user') != null) {
      const token = JSON.parse(localStorage.getItem('user')).token;
      headers.append('Authorization', 'Bearer ' + token);
    }
    return new RequestOptions({headers});
  }

  /**
   * Get the body of an HTTP response.
   *
   * @param res
   * @returns {any|{}}
   */
  private static handleBody(res: Response) {
    return res.json() || {};
  }

  /**
   * Format the error message of an HTTP response.
   *
   * @param error
   * @returns {any}
   */
  private static handleError(error: Response | any) {
    let errorModel: any = {};

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);

      errorModel = { status: error.status, message: `${error.status} - ${err.cause} ` };
    } else {
      errorModel = { status: error.status, message: error.toString()};
    }
    return Observable.throw(errorModel);
  }

  /* ---------------------------------------------------------------------------------------------------------------- */

  constructor(private http: Http) {}
  /* ---------------------------------------------------------------------------------------------------------------- */

  /**
   * Perform a PUT request.
   *
   * @param url
   * @param auth
   * @param body
   * @returns {Observable<>}
   */
  putRequest(url: string, body: Object): Observable<Object> {
    return this.http.put(this.BASE_URL + url, body, ApiService.formatHeader())
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Perform a POST request.
   *
   * @param url
   * @param auth
   * @param body
   * @returns {Observable<>}
   */
  postRequest(url: string, body: Object): Observable<Object> {
    return this.http.post(this.BASE_URL + url, body, ApiService.formatHeader())
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Perform a HEAD request.
   *
   * @param url
   * @param auth
   * @returns {Observable<>}
   */
  headRequest(url: string, auth: boolean): Observable<Object> {
    if (auth) {
      return this.http.head(this.BASE_URL + url, ApiService.formatHeader())
        .map(ApiService.handleBody)
        .catch(ApiService.handleError);
    } else {
      return this.http.head(url)
        .map(ApiService.handleBody)
        .catch(ApiService.handleError);
    }
  }

  /**
   * Perform a GET request.
   *
   * @param url
   * @param auth
   * @returns {Promise<>}
   */
  getRequest(url: string): Observable<Object> {
    return this.http.get(this.BASE_URL + url, ApiService.formatHeader())
      .map(ApiService.handleBody)
      .catch(ApiService.handleError);
  }

  //noinspection JSUnusedGlobalSymbols
  /**
   * Perform a DELETE request.
   *
   * @param url
   * @param auth
   * @returns {Observable<>}
   */
  deleteRequest(url: string, auth: boolean): Observable<Object> {
    if (auth) {
      return this.http.delete(this.BASE_URL + url, ApiService.formatHeader())
        .map(ApiService.handleBody)
        .catch(ApiService.handleError);
    } else {
      return this.http.delete(this.BASE_URL + url)
        .map(ApiService.handleBody)
        .catch(ApiService.handleError);
    }
  }
}
