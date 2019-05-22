import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RutaComponent } from './ruta/ruta.component';
import { PrincipalComponent } from './principal/principal.component';
import { GeocodeComponent } from './geocode/geocode.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'geocode', component: GeocodeComponent },
  { path: 'ruta', component: RutaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
