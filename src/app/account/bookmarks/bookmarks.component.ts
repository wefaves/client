import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../services/alert.service";
import { BookmarkService } from "../../services/bookmark.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent implements OnInit {

  bookmarks: any = [];
  selectedBookmark: any = {};

  constructor(private bookmarkService: BookmarkService, private alertService: AlertService) { }

  ngOnInit() {
    this.bookmarkService.getAll()
      .subscribe(
        data => {
          this.bookmarks = data;
          for (var _i = 0; _i < this.bookmarks.length; _i++) {
            var arr = this.bookmarks[_i].url.split("/");
            var result = arr[0] + "//" + arr[2]

            this.bookmarks[_i].domain = result;
          }
        },
        error => {
          let obj = JSON.parse(error._body);

          this.alertService.error(obj.message);
        });
  }

  onDelete() {
    this.bookmarkService.delete(this.selectedBookmark.id)
      .subscribe(
        data => {
          this.alertService.success('Your bookmark has been deleted.');
        }, error => {
          // this.alertService.error(error);
          let index: number = this.bookmarks.indexOf(this.selectedBookmark);
          if (index !== -1) {
            this.bookmarks.splice(index, 1);
          }
          this.alertService.success('Your bookmark has been deleted.');
        }
      );
  }

  onEdit() {

  }

  onSelect(bookmark: any) {
    this.selectedBookmark = bookmark;
  }
}
