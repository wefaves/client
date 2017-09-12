import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  title: String;

  constructor(
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.title = 'users modif works!';
  }

}
