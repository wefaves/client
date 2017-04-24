import { Component, OnInit } from '@angular/core';
import {AlertService} from "../../_services/alert.service";
import {AuthenticationService} from "../../_services/authentification.service";
import {Router, ActivatedRoute} from "@angular/router";

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
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (this.authenticationService.isAuthentificated()) {
      this.alertService.success('You\'re already login', true);
      this.router.navigate([this.returnUrl]);
    }
  }

  login() {
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          window.location.reload();
          this.router.navigate([this.returnUrl]);
        },
        error => {
          let obj = JSON.parse(error._body);

          this.alertService.error(obj.message);
          this.loading = false;
        });
  }
}
