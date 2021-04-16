import { Artista } from "./Artista";

export class Cancion{
   nombre?:string;
   picture_small:string="";
   artista:Artista;
   track:string="";

   constructor(){
     this.artista=new Artista();
   }
}
