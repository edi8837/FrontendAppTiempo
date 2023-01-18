import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ProductoServicoService } from '../../services/produtos/producto-servico.service';




@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {



  productoForm : FormGroup =this.fb.group({
    nombre: ['', Validators.required],
    tiempo1: [0, Validators.required],
    tiempo2: [0, Validators.required],
    tiempo3: [0, Validators.required],

  })
  Productos:any;


  constructor(

    private router:Router,
    private route:ActivatedRoute,
    public fb: FormBuilder,
    public ProcutoService: ProductoServicoService
  ) {

  }

  ngOnInit(): void {


   
  }
  guardar() {
    if(!this.productoForm.valid){
     
      console.log('ingresa datos')
      return false;
    }else{
      this.ProcutoService.saveProdcuto (this.productoForm.value).subscribe(
        
        (data) =>{
          this.productoForm.reset();
          console.log('hola',data)
         
      },(error)=>{

        console.error(error)
      })
      return true;
    }
    

  }
}
