import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Prenda} from '../Modelo/prenda';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PrendaService {
  private url:string = "http://localhost:9090/v1/users";
  constructor(private http:HttpClient) { }

  getAll():Observable<Prenda[]>{
    return this.http.get<Prenda[]>(this.url);
  }

  create(prenda:Prenda):Observable<Prenda>{
    return this.http.post<Prenda>(this.url, prenda);
  }

  get(id:number):Observable<Prenda>{
    return this.http.get<Prenda>(this.url + "/" + id);
  }

  delete(prenda:Prenda):Observable<Prenda>{
    return this.http.delete<Prenda>(this.url+ "/" + prenda.id); 
   }
   
  update(email:string,contacto:Prenda):Observable<Prenda>{
    return this.http.put<Prenda>(`${this.url}/${email}`, contacto);
  } 
}
