import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { FormsModule } from '@angular/forms';
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    LoadersCssModule
  ],
  declarations: [HistoryListComponent, HistoryDetailComponent],
  exports: [HistoryListComponent]
})
export class HistoryModule { }
