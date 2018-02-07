import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { TruncateModule } from 'ng2-truncate';
import { AccountComponent } from './account.component';
import { LogoutComponent } from './logout/logout.component';
import { FacebookModule } from 'ngx-facebook/dist/esm';
import { FeedComponent } from '../feed/feed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkModule } from '../bookmark/bookmark.module';
import { DirectivesModule } from '../directives/directives.module';
import { HistoryModule } from '../history/history.module';
import { HomeComponent } from './home/home.component';
import { ResettingComponent } from './resetting/resetting.component';
import { HistoryComponent } from '../feed/history/history.component';
import { BookmarksComponent } from '../feed/bookmarks/bookmarks.component';
import { NavigationComponent } from '../feed/navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccountRoutingModule,
    TruncateModule,
    FacebookModule.forRoot(),
    BookmarkModule,
    HistoryModule,
    NgbModule,
    DirectivesModule
  ],
  declarations: [
    ProfileComponent, ProfileComponent,
    AccountComponent, LogoutComponent,
    FeedComponent, LoginComponent, ResettingComponent,
    RegistrationComponent, HomeComponent, HistoryComponent, BookmarksComponent, NavigationComponent
  ]
})
export class AccountModule { }
