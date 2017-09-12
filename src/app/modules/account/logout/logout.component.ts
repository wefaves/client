import { Component } from '@angular/core';
import { TokenService } from '../../../services/tokenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {

  constructor(private tokenService: TokenService, private router: Router) {
    this.tokenService.deleteOnStorage().then(
      () => {
        this.router.navigate(['/']);
      }
    );
  }
}
