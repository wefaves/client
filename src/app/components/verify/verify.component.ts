import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Token } from '../../models/user/token';
import { TokenService } from '../../services/tokenService';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.sass']
})
export class VerifyComponent implements OnInit {

  token = Token.GetNewInstance();
  constructor(private route: ActivatedRoute,
              private tokenService: TokenService,
              private router: Router) {
    this.route
      .queryParams
      .subscribe(params => {
        this.token.access_token = params['access_token'];
        this.token.expires_in = params['expires_in'];
        this.token.token_type = params['token_type'];
        this.token.scope = params['scope'];
        this.token.refresh_token = params['refresh_token'];

        if (this.token.access_token !== '') {
          this.tokenService.createOnStorage(this.token);
        }
        this.router.navigate(['/home']);
      });
  }

  ngOnInit() {
  }

}
