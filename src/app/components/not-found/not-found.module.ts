import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotFoundRoutingModule} from "./not-found-routing.module";
import {PageNotFoundComponent} from "./not-found.component";

@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class NotFoundModule { }
