import { Component } from '@angular/core';
import { BookmarkService } from '../../../services/bookmark.service';
import { AlertService } from '../../../services/alert.service';
import { HistoryService } from '../../../services/history.service';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { History } from '../../../models/history/history';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.component.html'
})
export class FeedComponent {

  bookmarks: [Bookmark];
  history: [History];

  constructor(
    private bookmarkService: BookmarkService,
    private historyService: HistoryService,
    private alertService: AlertService) {
    this.getBookmarks();
    this.getHistory();
  }

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        this.bookmarks = bookmarks;
        console.log(this.bookmarks);
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  getHistory() {
    this.historyService.getUserHistory().then(
      (history) => {
        this.history = history;
        console.log(this.history);
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }
}
