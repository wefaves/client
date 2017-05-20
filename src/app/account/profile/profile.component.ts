import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../_services/alert.service";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: any = {};

  constructor(private alertService: AlertService,
    private userService: UserService) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getSelf()
      .subscribe(
        user => {
          this.user = user;
        }, error => {
          this.alertService.error(error);
        }
      );
  }

}
