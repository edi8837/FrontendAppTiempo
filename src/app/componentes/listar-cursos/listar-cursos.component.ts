import { Component } from '@angular/core';
import { CursoService } from '../../services/Curso/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent {
  Cursos:any;


  constructor(

    public CursosService: CursoService,
    private router:Router,
    private route:ActivatedRoute,
    //private toastController:ToastController,
    
  ) {

  }
  ngOnInit(): void {
   
    this.CursosService.getAllCursos().subscribe((data)=>{
      this.Cursos=data
      console.log(data)
     },(error)=>{
      console.error(error)
     }
     );
     

  }
  // Calcular(id:number):void {
  //   localStorage.setItem("id",""+id)
  
  // console.log("entra",id)
  // this.router.navigate(["/Ruta3",id])
  // }


  Eliminar(Curso:any):void {
    
    console.log(Curso)
    this.CursosService.Elminar(Curso.idC).subscribe((data)=>{
       console.log(data)
        this.Cursos.pop(Curso)
    },(error)=>{
    console.error(error)
    }
    );
      }
}
