import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../services/alert.service";
import { BookmarkService } from "../../services/bookmark.service";
import {Bookmark} from "../../models/bookmark/bookmark";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent implements OnInit {

  private bookmarks: Array<Bookmark> =  new Array<Bookmark>();
  private selectedBookmark: Bookmark;

  constructor(private bookmarkService: BookmarkService, private alertService: AlertService) { }

  ngOnInit() {
    this.getBookmarks();
    // this.bookmarkService.getAll()
    //   .subscribe(
    //     data => {
    //       this.bookmarks = data;
    //       for (var _i = 0; _i < this.bookmarks.length; _i++) {
    //         var arr = this.bookmarks[_i].url.split("/");
    //         var result = arr[0] + "//" + arr[2]
    //
    //         this.bookmarks[_i].domain = result;
    //       }
    //     },
    //     error => {
    //       let obj = JSON.parse(error._body);
    //
    //       this.alertService.error(obj.message);
    //     });
  }

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        this.alertService.success('Vos favoris ont été synchronisé.')
        this.bookmarks = bookmarks;
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }
  onDelete() {
    this.bookmarkService.deleteById(this.selectedBookmark.id).then(
      (res) => {
        console.log(res);
        this.alertService.success('Your bookmark has been deleted.');
        let index: number = this.bookmarks.indexOf(this.selectedBookmark);
        if (index !== -1) {
          this.bookmarks.splice(index, 1);
        }
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }

  onEdit() {

  }

  onSelect(bookmark: any) {
    this.selectedBookmark = bookmark;
  }
}
