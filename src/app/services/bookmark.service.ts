/**
 * Created by romain on 2017-04-09.
 */
import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Bookmark} from "../models/bookmark/bookmark";

@Injectable()
export class BookmarkService {

  constructor(private apiService: ApiService) {}

  public getUserBoomarks(): Promise<[Bookmark]> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/favorite')
        .subscribe(
          data => resolve(Bookmark.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }
}
