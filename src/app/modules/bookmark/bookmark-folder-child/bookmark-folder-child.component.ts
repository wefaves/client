import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkService } from '../../../services/bookmark.service';
import { AlertService } from '../../../services/alert.service';
import { ApiError } from '../../../models/error/apiError';

@Component({
  selector: 'app-bookmark-folder-child',
  templateUrl: './bookmark-folder-child.component.html',
  styleUrls: ['./bookmark-folder-child.component.sass']
})
export class BookmarkFolderChildComponent implements OnInit {

  _bookmarks: Bookmark[];
  _parent: Bookmark;
  selectedBookmark: Bookmark;

  @Input()
  set bookmarks(bookmarks: Bookmark[]) {
    this._bookmarks = bookmarks;
  }

  get bookmarks(): Bookmark[] {
    return this._bookmarks;
  }

  @Input()
  set parent(parent: Bookmark) {
    this._parent = parent;
  }

  get parent(): Bookmark {
    return this._parent;
  }

  constructor(private modalService: NgbModal,
              private bookmarkService: BookmarkService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  open(content, bookmark: Bookmark, parent: Bookmark, isFolder = false) {
    this.selectedBookmark = bookmark;

    this.modalService.open(content).result.then((result) => {
      if (result === 'Edit') {
        this.edit(bookmark);
      } else if (result === 'Delete') {
        this.delete(bookmark, isFolder, parent);
      }
    }, () => {});
  }

  delete(bookmark: Bookmark, isFolder: boolean, parent?: Bookmark) {
    let ref = parent.bookmarks;

    if (isFolder) {
      ref = parent.bookmark_folder_child;

      this.bookmarkService.deleteFolderById(bookmark.id).then(
        () => {
          this.alertService.success('Your folder and all its bookmarks has been deleted.');
          this.removeFromArray(ref, bookmark);
        }
      ).catch(
        (err: ApiError) => {
          this.alertService.error(err.cause);
        }
      );
    } else {
      this.bookmarkService.deleteById(bookmark.id).then(
        () => {
          this.alertService.success('Your bookmark has been deleted.');
          this.removeFromArray(ref, bookmark);
        }
      ).catch(
        (err: ApiError) => {
          this.alertService.error(err.cause);
        }
      );
    }
  }

  edit(bookmark: Bookmark) {

  }

  removeFromArray(ref, bookmark) {
    var index = ref.indexOf(bookmark);
    console.log(index);
    if (index > -1) {
      ref.splice(index, 1);
    }
  }

}
