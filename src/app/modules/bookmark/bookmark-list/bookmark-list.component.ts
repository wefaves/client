import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { BookmarkService } from '../../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.sass']
})
export class BookmarkListComponent implements OnInit {

  private _bookmarks: [Bookmark];
  private _index: number;

  @Input()
  set bookmarks(bookmarks: [Bookmark]) {
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

  constructor(private bookmarkService: BookmarkService) {}

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        this._bookmarks = bookmarks;
      }
    ).catch(
      (err) => {
      }
    );
  }

  ngOnInit() {}
}
