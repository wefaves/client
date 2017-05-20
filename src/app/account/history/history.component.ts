import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../_services/alert.service";
import {HistoryService} from "../../_services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  history: any = [];
  constructor(
    private alertService: AlertService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getUserHistory();
  }

  getUserHistory() {
    this.historyService.getAll()
      .subscribe(
        history => {
          this.history = history;
        }, error => {
          this.alertService.error(error);
        }
      );
  }

  onDelete() {

  }

}
