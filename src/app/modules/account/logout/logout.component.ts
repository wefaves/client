import { Component } from '@angular/core';
import { TokenService } from '../../../services/tokenService';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent {

  constructor(private tokenService: TokenService) {

    this.tokenService.deleteOnStorage().then(
      () => {
        window.location.href = environment.vitrine_endpoint + '/logout';
      });
  }
}
