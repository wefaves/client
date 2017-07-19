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
  private selectedItem: History;
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
        if (this.history.length > 0) {
          this.alertService.success('Votre historique à été synchronisé.');
        } else {
          this.alertService.warning('Aucun historique synchronisé.');
        }
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  onDelete() {
    this.historyService.delete(this.selectedItem.id).then(
      () => {
        this.alertService.success('Cet élément de votre historique à été supprimé.');

        const index = this.history.indexOf(this.selectedItem, 0);
        if (index > -1) {
          this.history.splice(index, 1);
        }
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  onSelect(item: History) {
    this.selectedItem = item;
  }

  deleteAll() {
    for (const item of this.history) {
      this.historyService.delete(item.id);
    }
    this.history = new Array<History>();
  }
}
