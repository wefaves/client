import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class HistoryService {
  constructor() {}

  // getAll() {
  //   return this.http.get(environment.apiUrl+'/users/self/history', this.jwt()).map((response: Response) => response.json());
  // }
  //
  // delete(historyId: string) {
  //   return this.http.delete(environment.apiUrl+'/users/self/history/'+historyId, this.jwt()).map((response: Response) => response.json());
  // }
}
