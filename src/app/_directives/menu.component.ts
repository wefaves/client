/**
 * Created by romain on 2017-04-09.
 */
import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentification.service";

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {
  authenticated: boolean = false;

  constructor(private authenticatedService: AuthenticationService) { }

  ngOnInit() {
    this.authenticated = this.authenticatedService.isAuthentificated();
  }

  logout() {
    console.log('logout')
    this.authenticatedService.logout();
  }
}
