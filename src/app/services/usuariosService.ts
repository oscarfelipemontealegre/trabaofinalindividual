import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
    url ='http://localhost:4000/api';

  
  constructor( private http:HttpClient) { }

  getUsuarios():Observable<any>{

    return this.http.get('$(this.url)/usuarios')
  }

  borrarUsuario(id:string):Observable<any>{
    return this.http.delete('$(this.url)/eliminar/${id}')
  }
}
