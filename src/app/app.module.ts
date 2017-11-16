import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './modules/account/account.module';
import { AlertService } from './services/alert.service';
import { AuthGuard } from './guard/auth.guard';
import { AuthenticationService } from './services/authentification.service';
import { AlertComponent } from './components/alert/alert.component';
import { UserService } from './services/user.service';
import { BookmarkService } from './services/bookmark.service';
import { HistoryService } from './services/history.service';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MenuComponent } from './components/menu/menu.component';
import { FacebookModule} from 'ngx-facebook';
import { TokenService } from './services/tokenService';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CookieService } from 'ng2-cookies';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    HomepageComponent,
    AlertComponent,
    AppComponent,
    PageNotFoundComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccountModule,
    AppRoutingModule,
    FacebookModule.forRoot(),
    NgbModule.forRoot(),
    // BookmarkModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    ApiService,
    AuthGuard,
    UserService,
    CookieService,
    BookmarkService,
    HistoryService,
    TokenService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
