import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoryService } from '../../../services/history.service';
import { History } from '../../../models/history/history';
import { AlertService } from '../../../services/alert.service';
import { ApiError } from '../../../models/error/apiError';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.sass']
})
export class HistoryDetailComponent implements OnInit {

  private _history: History;

  get history(): History {
    return this._history;
  }

  @Input()
  set history(value: History) {
    this._history = value;
  }

  constructor(private modalService: NgbModal,
              private historyService: HistoryService,
              private alertService: AlertService) {}

  ngOnInit() {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      if (result === 'Edit') {
        this.editHistory();
      } else if (result === 'Delete') {
        this.deleteHistory();
      }
    }, () => {});
  }

  editHistory() {
    this.historyService.update(this.history).then(
      () => {
        this.alertService.success('Your history item has been successfully edited.')
      }
    ).catch(
      (err: ApiError) => {
        this.alertService.success(err.cause);
      }
    );
  }

  deleteHistory() {
    this.historyService.delete(this.history.id).then(
      () => {
        this.alertService.success('Your history item has been successfully deleted.', true);
        window.location.reload();
      }
    ).catch(
      (err: ApiError) => {
        this.alertService.success(err.cause);
      }
    );
  }
}
