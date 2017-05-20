import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  environmentName = environment.envName;
  environmentVersion = environment.version;

  constructor() { }

  ngOnInit() {
  }
}
