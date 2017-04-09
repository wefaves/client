import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../_services/alert.service";
import {BookmarkService} from "../../_services/bookmark.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.sass']
})
export class BookmarksComponent implements OnInit {

  bookmarks: any = []

  constructor(private bookmarkService: BookmarkService, private alertService: AlertService) { }

  ngOnInit() {
    this.bookmarkService.getAll()
      .subscribe(
        data => {
          console.log(data)
          this.bookmarks = data;
        },
        error => {
          let obj = JSON.parse(error._body);

          this.alertService.error(obj.message);
        });
  }

}
