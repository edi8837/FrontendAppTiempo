import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscribir } from 'src/app/Entidades/inscribir';

@Injectable({
  providedIn: 'root'
})
export class InscribirService {
  private Api_server="http://localhost:8083/api/Inscripcion";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor( private httpCliente: HttpClient
  ) { }
  public saveEstudiante(inscribir:any):Observable<any>{
    return this.httpCliente.put<any>(this.Api_server+"/create",JSON.stringify(inscribir),this.httpOptions)
  }
  public UpdateEstudiante(estudiante:Inscribir):Observable<any>{
    return this.httpCliente.post<Inscribir>(this.Api_server+"/update",JSON.stringify(estudiante),this.httpOptions)
  }
  
   public getAllEstudiante(): Observable<any>{
    return this.httpCliente.get(this.Api_server+"/findAll");
  }
  

  public Elminar(id: number): Observable<any>{
    return this.httpCliente.delete(this.Api_server+"delete/"+id);
  }
}