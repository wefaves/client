import { Component, Input } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';

@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.sass']
})
export class BookmarkDetailComponent {

  private _bookmarks: [Bookmark];

  @Input()
  set bookmarks(bookmarks: [Bookmark]) {
    console.log(bookmarks);
    this._bookmarks = bookmarks;
  }

  get bookmarks(): [Bookmark] { return this._bookmarks; }
}
