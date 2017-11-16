import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';

@Component({
  selector: 'app-bookmark-folder-child',
  templateUrl: './bookmark-folder-child.component.html',
  styleUrls: ['./bookmark-folder-child.component.sass']
})
export class BookmarkFolderChildComponent implements OnInit {

  _bookmarks: Bookmark[];

  @Input()
  set bookmarks(bookmarks: Bookmark[]) {
    this._bookmarks = bookmarks;
  }

  get bookmarks(): Bookmark[] {
    return this._bookmarks;
  }

  constructor() { }

  ngOnInit() {
  }

}
