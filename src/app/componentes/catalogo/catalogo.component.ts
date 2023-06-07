import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscribir } from 'src/app/Entidades/inscribir';
import { CursoService } from 'src/app/services/Curso/curso.service';
import { EstudiateService } from 'src/app/services/Curso/estudiate.service';
import { InscribirService } from 'src/app/services/Curso/inscribir.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
  Cursos: any;

  IDC: any
  IDE: any
  fecha: any

  constructor(

    public CursosService: CursoService,
    public EtudianteService: EstudiateService,
    public inscribirService: InscribirService,

    private router: Router,
    private route: ActivatedRoute,
    //private toastController:ToastController,

  ) {

  }
  ngOnInit(): void {

    this.CursosService.getAllCursos().subscribe((data) => {
      this.Cursos = data
      console.log(data)
    }, (error) => {
      console.error(error)
    }
    );


  }



  Inscribir(id: any): void {

    this.CursosService.getAllCurso(id).subscribe((data) => {
     
      localStorage.setItem("idC1",""+data.idC)

    }, (error) => {
      console.error(error)
    }
    );
    const numeroEntero = parseInt("" + localStorage.getItem("idC"), 10);
    this.EtudianteService.getAllEtu(numeroEntero).subscribe((data) => {
      
      localStorage.setItem("idE1",""+data.id)
      

    }, (error) => {
      console.error(error)
    }
    );
    const numeroEntero1 = parseInt("" + localStorage.getItem("idC1"), 10)
    const numeroEntero2 = parseInt("" + localStorage.getItem("idE1"), 10)
    this.guardar(numeroEntero1,numeroEntero2,"12/12/12")
   
  }
  guardar(idC:Number,idE:number,fecha:String){
    let data ={
      "idC":idC,
    "idE":idE,
    "fecha":fecha,

  }
  console.log(data)

    this.inscribirService.saveEstudiante(data).subscribe((data) => {
      console.log(data)
    }, (error) => {
      console.error(error)
    }
    );
}

}

