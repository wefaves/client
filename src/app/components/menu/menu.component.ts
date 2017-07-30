import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  user: User;

  currentTabItem: string;

  constructor(private userService: UserService,
              private router: Router) {
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
