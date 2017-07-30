import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../services/alert.service";
import { BookmarkService } from "../../services/bookmark.service";
import { Bookmark } from "../../models/bookmark/bookmark";
import { User } from '../../models/user/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  user: User = null;

  bookmarks: Array<Bookmark> = new Array<Bookmark>();

  constructor(private bookmarkService: BookmarkService,
              private alertService: AlertService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {}

  getBookmarks() {
    this.bookmarkService.getUserBookmarks().then(
      (bookmarks) => {
        this.alertService.success('Vos favoris ont été synchronisé.')
        this.bookmarks = bookmarks;
        console.log(this.bookmarks);
      }
    ).catch(
      (err) => {
        this.alertService.error(err.message);
      }
    );
  }

  openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }
}


