import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../../services/history.service';
import { History } from '../../../models/history/history';
import { AlertService } from '../../../services/alert.service';
import { ApiError } from '../../../models/error/apiError';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.sass']
})
export class HistoryListComponent implements OnInit {

  history: History[];
  loading = true;

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
      (err: ApiError) => {
        this.alertService.error(err.cause);
        this.loading = false;
      }
    );
  }

}
