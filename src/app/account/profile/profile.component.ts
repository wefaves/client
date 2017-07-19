import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {UserService} from "../../services/user.service";

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
  }

}
