import { Injectable } from '@angular/core';
import { Producto } from 'src/app/Entidades/producto';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoServicoService {

  private Api_server="http://localhost:8080/Producto/"; 
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private httpCliente: HttpClient
  ) { }

public saveProdcuto(producto:Producto):Observable<any>{
  return this.httpCliente.post<Producto>(this.Api_server+"create/",JSON.stringify(producto),this.httpOptions)
}

 public getAllPersonas(): Observable<any>{
  return this.httpCliente.get(this.Api_server+"Productos");
}

public getProducto(id: number): Observable<any>{
  return this.httpCliente.get(this.Api_server+"producto/id/"+id);
}

public Elminar(id: number): Observable<any>{
  return this.httpCliente.delete(this.Api_server+"delete/"+id);
}

public saveCalulo(Calculo:any):Observable<any>{
  return this.httpCliente.post(this.Api_server+"Calculo/",Calculo,this.httpOptions)
}


}
