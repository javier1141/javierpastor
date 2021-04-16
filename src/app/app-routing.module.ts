import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistasComponent } from './artistas/artistas.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path:'' , component:BodyComponent},
  {path:'canciones' , component:BodyComponent},
  {path:'artistas' , component:ArtistasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
