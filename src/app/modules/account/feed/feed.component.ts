import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../../services/bookmark.service';
import { AlertService } from '../../../services/alert.service';
import { HistoryService } from '../../../services/history.service';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { History } from '../../../models/history/history';
import { NgbAccordionConfig, NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html'
})
export class FeedComponent implements OnInit{

  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {}
}
