import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { BookmarkService } from '../../../services/bookmark.service';
import { ApiError } from '../../../models/error/apiError';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.sass']
})
export class BookmarkListComponent implements OnInit {

  _bookmarks: Bookmark[];
  _index: number;

  @Input()
  set bookmarks(bookmarks: Bookmark[]) {
    if (bookmarks) {
      this._bookmarks = bookmarks
    } else {
      this.getBookmarks();
    }
  }

  @Input()
  set index(index: number) {
    this._index = index;
  }

  get index(): number {
    return this._index;
  }

  constructor(private bookmarkService: BookmarkService,
              private alertService: AlertService) {}

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        this._bookmarks = bookmarks;
      }
    ).catch(
      (err: ApiError) => {
        this.alertService.error(err.cause);
      }
    );
  }

  ngOnInit() {}
}
