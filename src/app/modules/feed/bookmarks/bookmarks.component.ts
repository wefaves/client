import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../../../services/bookmark.service';
import { Bookmark } from '../../../models/bookmark/bookmark';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent implements OnInit {

  bookmarks: Bookmark[] = [];

  constructor(private bookmarkService: BookmarkService) {}
  ngOnInit() {
    this.getBookmarks();
  }

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmark) => {
        this.bookmarks = bookmark;
      }
    ).catch();
  }
}
