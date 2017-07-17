import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../services/alert.service";
import {AuthenticationService} from "../../services/authentification.service";
import {Router, ActivatedRoute} from "@angular/router";
import {AuthGuard} from "../../_guard/auth.guard";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private alertService: AlertService,
              private authenticationService: AuthenticationService,
              private authGuard: AuthGuard,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.authGuard.isAuthenticated()) {
      this.alertService.success('You\'re already login', true);
      this.router.navigate([this.returnUrl]);
    }
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password).then(
      (user) => {
        this.loading = false;
        this.userService.createOnStorage(user).then(
          (res) => {
            this.alertService.success('Bonjour !', true);
            this.router.navigate([this.returnUrl]);
          }
        );
      }
    ).catch(
      (error) => {
        this.loading = false;
        this.alertService.error(error);
      }
    );
  }
}
