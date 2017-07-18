/**
 * Created by romain on 2017-04-09.
 */
import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentification.service";
import {UserService} from "../services/user.service";
import {User} from "../models/user/user";

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {

  private user: User;

  constructor(private authenticatedService: AuthenticationService, private userService: UserService) {
    this.user = userService.getOnStorageSync();

    this.userService.subscribeToUserService((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authenticatedService.logout();
  }
}
