import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, PrincipalComponent],
  imports: [BrowserModule, AppRoutingModule, NgxSpinnerModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
