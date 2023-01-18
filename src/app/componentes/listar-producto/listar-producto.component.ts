import { Component, OnInit } from '@angular/core';
import { ProductoServicoService } from '../../services/produtos/producto-servico.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})

export class ListarProductoComponent implements OnInit{
  Productos:any;


  constructor(

    public ProcutoService: ProductoServicoService,
    private router:Router,
    private route:ActivatedRoute,
    //private toastController:ToastController,
    
  ) {

  }
  ngOnInit(): void {
   
    this.ProcutoService.getAllPersonas().subscribe((data)=>{
      this.Productos=data
      console.log(data)
     },(error)=>{
      console.error(error)
     }
     );
     

  }
  Calcular(id:number):void {
    localStorage.setItem("id",""+id)
  
  console.log("entra",id)
  this.router.navigate(["/Ruta3",id])
  }


  Eliminar(producto:any):void {

    this.ProcutoService.Elminar(producto.id).subscribe((data)=>{
      console.log(data)
      this.Productos.pop(producto)
     },(error)=>{
      console.error(error)
     }
     );
    }
  


}


