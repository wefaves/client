import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthenticationService } from './services/authentification.service';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { User } from './models/user/user';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  environmentName: string;
  environmentVersion: string;

  constructor() {
    this.environmentName = environment.envName;
    this.environmentVersion = environment.version;

    if (this.environmentName === 'development') {
      console.log('This is '+this.environmentName+' environment.');
      console.log('Version '+this.environmentVersion);
    }
  }
}
