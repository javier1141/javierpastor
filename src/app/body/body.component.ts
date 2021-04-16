import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { Canciones } from 'src/Models/Canciones';
import {CancionesServicesService} from '../../servicios/canciones-services.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  Data: Canciones[] = [];
  public audio: HTMLAudioElement;
  public playAudio: boolean=false;
  public numero:number;
  music:string="adela";
  imagen_album:string="";
  value= 100;

  constructor(private cancionesservicios:CancionesServicesService) {
    this.audio=new Audio();
    this.numero=0;
  }

  ngOnInit(): void {
    this.getCanciones(this.music);
  }

  changeFn(e:any) {
    this.music = e.target.value;
    this.getCanciones(this.music);
  }

  getCanciones(nombre_cancion:string){
    this.cancionesservicios.getTruck(nombre_cancion).subscribe((data)=>this.Pintar(data));
  }

  Pintar(datos: any): void {

    if(datos!=null){
      for(let i=0;i<datos.data.length;i++ ){
        var aux=new Canciones();
        var result=datos.data[i];

        var str:String=result.title_short;

        if(str.length>10){
          aux.nombre=str.substring(0,17);
        }else{

          aux.nombre=result.title_short;

        }
        aux.artista=result.artist.name;
        aux.picture_small=result.album.cover;
        aux.track=result.preview;




        this.Data[i]=aux;
      }

      this.audio.src=this.Data[0].track;
      this.imagen_album=this.Data[0].picture_small;
      this.numero=0;

    }



    //console.log(datos);
  }

  /*getSelectedBeat(){
    console.log(this.music)
    switch(this.music){
      case 0:
        alert("nada");
        break;
      case 1:
        this.audio.src=this.Data[1].track;
        break;
      case 2:
        this.audio.src=this.Data[2].track;
        break;
      case 3:
        this.audio.src=this.Data[3].track;
        break;
      default:
        alert("Selecciona el beat abriendo el desplegable");
    }
  }
*/

  playPause(num:number){
    this.audio.src=this.Data[num].track;
    console.log(this.audio.src);
    if (this.playAudio==false) {

      this.audio.play();

      this.playAudio = true;

    }else{
      this.audio.pause();
      this.playAudio = false;

    }
  }

  evento_imagen(resp:Canciones){
    this.audio.src=resp.track;
    this.imagen_album=resp.picture_small;
    this.audio.play();
    this.playAudio = true;

  }

  atras(){
    if( this.numero==0){
      this.numero=0;
      console.log(this.numero);
      this.audio.currentTime = 0;
      this.imagen_album=this.Data[this.numero].picture_small;
      this.playPause(this.numero)
    }
    else{
      this.numero=this.numero-1;
      console.log(this.numero);
      this.audio.currentTime = 0;
      this.imagen_album=this.Data[this.numero].picture_small;
      this.playPause(this.numero)
    }
  }

  adelante(){
    if( this.numero==this.Data.length-1){
      this.numero=this.Data.length-1;
      console.log(this.numero);
      this.audio.currentTime = 0;
      this.imagen_album=this.Data[this.numero].picture_small;
      this.playPause(this.numero)
    }
    else{
      this.numero=this.numero+1;
      console.log(this.numero);
      this.audio.currentTime = 0;
      this.imagen_album=this.Data[this.numero].picture_small;
      this.playPause(this.numero)
    }
  }

  onInputChange(event: MatSliderChange) {
    if(event.value!=null)
    {
      this.audio.volume=event.value/100;
    }


  }

  silenc(){
    if(this.audio.volume==0){
      this.audio.volume=this.value/100;
    }
    else{
      this.audio.volume=0;
    }

  }

}



