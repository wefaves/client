import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BookmarkListComponent, BookmarkDetailComponent],
  exports: [BookmarkListComponent]
})
export class BookmarkModule { }
