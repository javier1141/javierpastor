import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Cancion } from 'src/Models/Cancion';
import { CancionesServicesService } from 'src/servicios/canciones-services.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrls: ['./artistas.component.scss']
})
export class ArtistasComponent implements OnInit {

  Data: Cancion[] = [];
  public auxcancion:Cancion=new Cancion();
  public audio: HTMLAudioElement;
  public playAudio: boolean=false;
  public silent: boolean=false;
  public numero:number;
  strmusic:string="adele";
  value= 100;

  constructor(private cancionesservicios:CancionesServicesService) {
    this.audio=new Audio();
    this.numero=0;
  }

  ngOnInit(): void {
    this.getCanciones(this.strmusic);
  }

  changeFn(e:any) {
    this.strmusic = e.target.value;
    this.getCanciones(this.strmusic);
  }

  getCanciones(nombre_artista:string){
    this.cancionesservicios.getTruckartista(nombre_artista).subscribe((data)=>this.Pintar(data));
  }

  Pintar(datos: any): void {

    if(datos!=null){
      for(let i=0;i<datos.data.length;i++ ){
        var aux=new Cancion();
        var result=datos.data[i];



        var str:String=result.title_short;

        if(str.length>10){
          aux.nombre=str.substring(0,17);
        }else{

          aux.nombre=result.title_short;

        }
        aux.artista.nombre=result.artist.name;
        aux.artista.picture=result.artist.picture;
        aux.artista.picture_small=result.album.cover;

        aux.picture_small=result.album.cover;

        aux.track=result.preview;
        this.Data[i]=aux;
      }

      this.auxcancion=this.Data[0];
      this.audio.src=this.auxcancion.track;
      this.numero=0;
      console.log(result);

    }
  }

  playPause(num:number){

    if (this.playAudio==false) {

      this.auxcancion=this.Data[num];
      this.audio.src=this.auxcancion.track;

      this.audio.play();

      this.playAudio = true;

    }else{
      this.auxcancion=this.Data[num];
      this.audio.src=this.auxcancion.track;

      this.audio.pause();
      this.playAudio = false;

    }
  }

  evento_imagen(resp:Cancion){

    this.auxcancion=resp;

    this.audio.src=resp.track;
    this.audio.play();
    this.playAudio = true;

  }

  atras(){
    if( this.numero==0){
      this.numero=0;
      this.audio.currentTime = 0;
      this.playPause(this.numero)
    }
    else{
      this.numero=this.numero-1;
      this.audio.currentTime = 0;
      this.playPause(this.numero)
    }
  }

  adelante(){
    if( this.numero==this.Data.length-1){
      this.numero=this.Data.length-1;
      this.audio.currentTime = 0;
      this.playPause(this.numero)
    }
    else{
      this.numero=this.numero+1;
      this.audio.currentTime = 0;
      this.playPause(this.numero)
    }
  }

  onInputChange(event: MatSliderChange) {
    if(event.value!=null)
    {
      this.silent=false;
      this.audio.volume=event.value/100;
    }


  }

  silenc(){
    if(this.audio.volume==0){
      this.silent=false;
      this.audio.volume=this.value/100;
    }
    else{
      this.audio.volume=0;
      this.silent=true;
    }

  }

  buscar(){
    this.getCanciones(this.strmusic);
  }

  reproducir(){

    if (this.playAudio==false) {

      this.audio.play();

      this.playAudio = true;

    }else{

      this.audio.pause();
      this.playAudio = false;

    }

  }

}
