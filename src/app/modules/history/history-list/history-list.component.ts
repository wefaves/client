import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../services/history.service';
import { History } from '../../../models/history/history';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.sass']
})
export class HistoryListComponent implements OnInit {

  private history: [History];
  private loading = true;

  constructor(private historyService: HistoryService,
              private alertService: AlertService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.historyService.getUserHistory().then(
      (history) => {
        this.history = history;
        this.loading = false;
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
        this.loading = false;
      }
    );
  }

}
