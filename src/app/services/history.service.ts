import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import {ApiService} from "./api.service";
import {History} from "../models/history/history";

@Injectable()
export class HistoryService {

  constructor(private apiService: ApiService) {}

  getUserHistory(): Promise<History[]> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/history')
        .subscribe(
          data => resolve(History.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  getById(history_id: number): Promise<History> {
    return new Promise((resolve, reject) => {
      this.apiService.getRequest('/users/self/history/' + history_id)
        .subscribe(
          data => resolve(History.ParseFromObject(data)),
          error => reject(<any>error));
    });
  }

  delete(history_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.deleteRequest('/users/self/history/' + history_id)
        .subscribe(
          data => resolve(History.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }

  update(history: History): Promise<any> {
    return new Promise((resolve, reject) => {
      this.apiService.patchRequest('/users/self/history/' + history.id, history)
        .subscribe(
          data => resolve(History.ParseFromObjectToArray(data)),
          error => reject(<any>error));
    });
  }
}
