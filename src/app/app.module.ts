import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { RutaComponent } from './ruta/ruta.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GeocodeComponent } from './geocode/geocode.component';
import { FinishComponent } from './finish/finish.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, PrincipalComponent, RutaComponent,GeocodeComponent, FinishComponent],
  imports: [BrowserModule, AppRoutingModule, NgxSpinnerModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
