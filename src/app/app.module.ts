import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './account/account.module';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './_guard/auth.guard';
import { AuthenticationService } from './services/authentification.service';
import { AlertComponent } from './_directives/alert.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './_directives/menu.component';
import { UserService } from './services/user.service';
import { BookmarkService } from './services/bookmark.service';
import { HistoryService } from './services/history.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  declarations: [
    AlertComponent,
    HomeComponent,
    MenuComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    AccountModule,
    AppRoutingModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    ApiService,
    AuthGuard,
    UserService,
    BookmarkService,
    HistoryService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
