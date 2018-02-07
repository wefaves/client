import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeedComponent } from './modules/feed/feed.component';
import { AuthGuard } from './guard/auth.guard';
import { BookmarkListComponent } from './modules/bookmark/bookmark-list/bookmark-list.component';
import { BookmarksComponent } from './modules/feed/bookmarks/bookmarks.component';
import { HistoryComponent } from './modules/feed/history/history.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard], children: [
    { path: '',   redirectTo: '/feed/bookmarks', pathMatch: 'full' },
    { path: 'bookmarks', component: BookmarksComponent },
    { path: 'history', component: HistoryComponent },
  ] },
  { path: 'bookmark', component: BookmarkListComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
