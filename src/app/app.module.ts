import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from "./account/account.module";
import { AlertService } from "./_services/alert.service";
import { AuthGuard } from "./_guard/auth.guard";
import { AuthenticationService } from "./_services/authentification.service";
import { AlertComponent } from "./_directives/alert.component";
import { HomeComponent } from './home/home.component';
import { MenuComponent } from "./_directives/menu.component";

@NgModule({
  declarations: [
    AlertComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccountModule,
    AppRoutingModule
  ],
  providers: [
    AlertService,
    AuthenticationService,
    AuthGuard

  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
