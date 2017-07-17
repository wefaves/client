import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  private model: any = {};

  constructor() { }

  ngOnInit() {
  }

  registration() {
    console.log(this.model);
  }
}
