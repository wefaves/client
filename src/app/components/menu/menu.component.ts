import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user.service';
import { NavigationEnd, Router } from '@angular/router';
import { ApiError } from '../../models/error/apiError';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  user: User;
  currentTabItem: string;
  show: boolean = false;

  constructor(private userService: UserService,
              private router: Router) {
    router.events.subscribe(
      (event) => {
        if (event  instanceof NavigationEnd) {
          if (event.url.split('?')[0] === '/account/login' || event.url === '/account/registration'
            || event.url === '/') {
            this.show = false;
          } else {
            this.show = true;
          }
        }
      }
    );
  }

  ngOnInit() {
    this.userService.getOnStorage().then(
      (user) => {
        this.user = user;
      }
    );

    this.userService.subscribeToUserService((user) => {
      this.user = user;
    });

    this.router.events.subscribe((val: any) => {
      this.currentTabItem = val.url;
    });
  }

  logout() {
    this.router.navigate(['account/logout']);
  }
}
