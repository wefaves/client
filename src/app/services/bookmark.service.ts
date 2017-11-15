/**
 * Created by romain on 2017-04-09.
 */
import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Bookmark} from "../models/bookmark/bookmark";

@Injectable()
export class BookmarkService {

  constructor(private apiService: ApiService) {}

  public getUserBookmarks(): Promise<Bookmark[]> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/bookmarks')
        .subscribe(
          data => resolve(Bookmark.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  public getOne(bookmark_id: number): Promise<Bookmark> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/bookmarks/' + bookmark_id)
        .subscribe(
          data => resolve(Bookmark.ParseFromObject(data)),
          error => reject(<any>error));
    });
  }

  public deleteById(bookmark_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.deleteRequest('/users/self/bookmarks/' + bookmark_id)
        .subscribe(
          data => resolve(data),
          error => reject(<any>error));
    });
  }

  public deleteFolderById(folder_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.deleteRequest('/users/self/bookmarks/folder/' + folder_id)
        .subscribe(
          data => resolve(data),
          error => reject(<any>error));
    });
  }

  public editById(bookmark: Bookmark): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.patchRequest('/users/self/bookmarks/' + bookmark.id, Bookmark.GetModel(bookmark))
        .subscribe(
          data => resolve(data),
          error => reject(<any>error));
    });
  }
}
