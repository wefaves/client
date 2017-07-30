import { Component, OnInit } from '@angular/core';
import { AlertService } from "../../../services/alert.service";
import { UserService } from "../../../services/user.service";
import { User } from "../../../models/user/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  private user: User;
  private password: any = {};
  constructor(private alertService: AlertService,
    private userService: UserService) {
    this.user = User.GetNewInstance();
  }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo() {
    this.userService.getSelf().then(
      (user) => {
        this.user = user;
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    )
  }

  save() {
    const model = {
      fos_user_profile_form: {
        username: this.user.username,
        email: this.user.email,
        current_password: this.password.password,
      }
    };

    this.userService.updateSelf(model).then(
      (user) => {
        this.user = user;
        this.alertService.success('Votre profil à été mis à jour 👏.');
      }
    ).catch(
      (err) => {
        this.alertService.error(err);
      }
    );
  }
}
