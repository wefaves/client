import { Component, OnInit } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { BookmarkService } from '../../../services/bookmark.service';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.sass']
})
export class BookmarkListComponent implements OnInit {

  bookmarks: Array<Bookmark> = new Array<Bookmark>();

  constructor(private bookmarkService: BookmarkService) {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        console.log(bookmarks);
        this.bookmarks = bookmarks;
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {}
}
