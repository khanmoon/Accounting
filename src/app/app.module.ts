import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountCardComponent } from './account-card/account-card.component';
import { FetchAccountsService } from './fetch-accounts.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [FetchAccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
