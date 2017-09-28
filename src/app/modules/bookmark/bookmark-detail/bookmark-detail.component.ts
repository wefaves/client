import { Component, Input } from '@angular/core';
import { Bookmark } from '../../../models/bookmark/bookmark';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkService } from '../../../services/bookmark.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-bookmark-detail',
  templateUrl: './bookmark-detail.component.html',
  styleUrls: ['./bookmark-detail.component.sass']
})
export class BookmarkDetailComponent {

  private _bookmark: Bookmark;
  private _index: number;
  selectedBookmark: Bookmark;

  constructor(private modalService: NgbModal,
              private bookmarkService: BookmarkService,
              private alertService: AlertService) {}

  @Input()
  set bookmark(bookmark: Bookmark) {
    this._bookmark = bookmark;
  }

  get bookmarks(): Bookmark { return this._bookmark; }

  @Input()
  set index(index: number) {
    this._index = index;
  }

  get index(): number { return this._index; }

  open(content, bookmark = null) {
    if (bookmark) {
      this.selectedBookmark = bookmark;
    } else {
      this.selectedBookmark = this._bookmark;
    }
    this.modalService.open(content).result.then((result) => {
      if (result === 'Edit') {
        this.editBookmark();
      } else if (result === 'Delete') {
        this.deleteBookmark();
      }
    }, () => {});
  }

  editBookmark() {
    this.bookmarkService.editById(this.selectedBookmark).then(
      (res) => {
        this.alertService.success('Your bookmark has been successfully edited.')
      }
    ).catch(
      (err) => {
        this.alertService.success(err);
      }
    );
  }

  deleteBookmark() {
    if (this.selectedBookmark.bookmark_folder_child) {
      this.bookmarkService.deleteFolderById(this.selectedBookmark.id).then(
        () => {
          this.alertService.success('Your bookmark has been successfully deleted.', true);
          window.location.reload();
        }
      ).catch(
        (err) => {
          this.alertService.success(err);
        }
      );
    } else {
      this.bookmarkService.deleteById(this.selectedBookmark.id).then(
        () => {
          this.alertService.success('Your bookmark has been successfully deleted.', true);
          window.location.reload();
        }
      ).catch(
        (err) => {
          this.alertService.success(err);
        }
      );
    }
  }
}
