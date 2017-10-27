/**
 * Created by romain on 2017-04-09.
 */
import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FileService {

  constructor(private http: Http) {}

}
