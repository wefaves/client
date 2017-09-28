import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [BookmarkListComponent, BookmarkDetailComponent],
  exports: [BookmarkListComponent]
})
export class BookmarkModule { }
