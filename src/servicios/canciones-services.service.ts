import {Injectable} from "@angular/core"
import {HttpClient,HttpHeaders} from  "@angular/common/http"
import {Observable} from "rxjs/internal/Observable"

@Injectable({
  providedIn: 'root'
})
export class CancionesServicesService {

  constructor(private  http:HttpClient) {}



  getTruck( cancion:string){

    var url_api="/search?q=track:"+cancion+"&index=0&limit=6&output=json";
    const headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Accept', 'application/json;charset=UTF-8');


    return this.http.get<any>(url_api,{headers:headers});
  }

  getTruckartista( data:string){

    var url_api="/search?q="+data+"&limit=6&index=0";
    const headers = new HttpHeaders()
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin','*');
    headers.append('Accept', 'application/json;charset=UTF-8');


    return this.http.get<any>(url_api,{headers:headers});
  }
}
