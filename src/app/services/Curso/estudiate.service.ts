import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/Entidades/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudiateService {
  private Api_server="http://localhost:8082/api/usuario";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor( private httpCliente: HttpClient
  ) { }
  public saveEstudiante(estudiante:any):Observable<any>{
    return this.httpCliente.put<any>(this.Api_server+"/create",JSON.stringify(estudiante),this.httpOptions)
  }
  public UpdateEstudiante(estudiante:any):Observable<any>{
    return this.httpCliente.post<any>(this.Api_server+"/Createperfil",JSON.stringify(estudiante),this.httpOptions)
  }
  public login(login:any):Observable<any>{
    return this.httpCliente.post<any>(this.Api_server+"/login",JSON.stringify(login),this.httpOptions)
  }
  
   public getAllEstudiante(): Observable<any>{
    return this.httpCliente.get(this.Api_server+"/findAll");
  }
  public getAllEtu(id: number): Observable<any>{
    return this.httpCliente.get(this.Api_server+"/findByid/"+id);
  }

  public Elminar(id: number): Observable<any>{
    return this.httpCliente.delete(this.Api_server+"/delete/"+id);
  }
}