import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/tokenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) {
    if (tokenService.getOnStorageSync() != null) {
      this.router.navigate(['/feed']);
    }
  }

  ngOnInit() {}
}
