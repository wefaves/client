import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AlertService } from "../../../services/alert.service";
import { BookmarkService } from "../../../services/bookmark.service";
import {Bookmark} from "../../../models/bookmark/bookmark";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  environmentName = environment.envName;
  environmentVersion = environment.version;

  private bookmarks: Array<Bookmark> = new Array<Bookmark>();
  private selectedBookmark: Bookmark;

  constructor(private bookmarkService: BookmarkService, private alertService: AlertService) {
  }

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
        this.alertService.success('Vos favoris ont été synchronisé.');
        this.bookmarks = bookmarks;
        console.log(this.bookmarks);
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }
  onSelect(bookmark: any) {
    this.selectedBookmark = bookmark;
  };

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
}


