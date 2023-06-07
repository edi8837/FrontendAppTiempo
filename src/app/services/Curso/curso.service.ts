import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/Entidades/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private Api_server="http://localhost:8081/api/curso/";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor( private httpCliente: HttpClient
  ) { }
  public saveCurso(curso:Curso):Observable<any>{
    return this.httpCliente.post<Curso>(this.Api_server+"create",JSON.stringify(curso),this.httpOptions)
  }
  public UpdateCurso(curso:Curso):Observable<any>{
    return this.httpCliente.post<Curso>(this.Api_server+"update",JSON.stringify(curso),this.httpOptions)
  }
  
   public getAllCursos(): Observable<any>{
    return this.httpCliente.get(this.Api_server+"findAll");
  }
  public getAllCurso(id: number): Observable<any>{
    return this.httpCliente.get(this.Api_server+"findByid/"+id);
  }
  

  public Elminar(id: number): Observable<any>{
    return this.httpCliente.delete(this.Api_server+"delete/"+id);
  }
}
