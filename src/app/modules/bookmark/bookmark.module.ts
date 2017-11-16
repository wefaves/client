import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { BookmarkDetailComponent } from './bookmark-detail/bookmark-detail.component';
import { DirectivesModule } from '../directives/directives.module';
import { BookmarkFolderChildComponent } from './bookmark-folder-child/bookmark-folder-child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [BookmarkListComponent, BookmarkFolderChildComponent, BookmarkDetailComponent],
  exports: [BookmarkListComponent]
})
export class BookmarkModule { }
