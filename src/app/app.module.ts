import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './indice/indice.component';
import { BodyComponent } from './body/body.component';
import {CancionesServicesService} from '../servicios/canciones-services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {SliderFormattingExampleComponent} from './body/slider-formatting-example/slider-formatting-example.component';
import { ArtistasComponent } from './artistas/artistas.component'




@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    BodyComponent,
    SliderFormattingExampleComponent,
    ArtistasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule
  ],
  exports:[
    MatSliderModule
  ],
  providers: [CancionesServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
