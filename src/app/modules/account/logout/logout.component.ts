import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { AlertService } from '../../../services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private userService: UserService,
              private alertService: AlertService,
              private router: Router) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    this.userService.deleteOnStorage().then(
      () => {
        this.alertService.success('À bientôt 👋');
        this.router.navigate(['account/login'])
      }
    );
  }

}
