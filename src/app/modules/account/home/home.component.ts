import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AlertService } from "../../../services/alert.service";
import { BookmarkService } from "../../../services/bookmark.service";
import {Bookmark} from "../../../models/bookmark/bookmark";
import { ApiError } from '../../../models/error/apiError';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  private bookmarks: Array<Bookmark> = new Array<Bookmark>();
  private selectedBookmark: Bookmark;

  constructor(private bookmarkService: BookmarkService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        this.alertService.success('Vos favoris ont été synchronisé.');
        this.bookmarks = bookmarks;
        console.log(this.bookmarks);
      }
    ).catch(
      (err: ApiError) => {
        this.alertService.error(err.cause);
      }
    );
  }
  onSelect(bookmark: any) {
    this.selectedBookmark = bookmark;
  };

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
}


