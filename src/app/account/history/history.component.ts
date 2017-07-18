import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {HistoryService} from "../../services/history.service";
import {History} from "../..//models/history/history";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.sass']
})
export class HistoryComponent implements OnInit {

  private history: Array<History> =  new Array<History>();
  constructor(
    private alertService: AlertService,
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.getUserHistory();
  }

  getUserHistory() {
    this.historyService.getUserHistory().then(
      (history) => {
        this.history = history;
        this.alertService.success('Votre historique à été synchronisé.');
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  onDelete() {

  }

}
