import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/Curso/curso.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {
  CursoForm : FormGroup =this.fb.group({
    codigoCurso: ['', Validators.required],
    descripcion: ['', Validators.required],
    horas: ['', Validators.required],
    fechaInicio: ['', Validators.required],
    fechaFin: ['', Validators.required],
    cupos: [0, Validators.required]
  
  })
  
  constructor(

    private router:Router,
    private route:ActivatedRoute,
    public fb: FormBuilder,
    public cursoService: CursoService
  ) {

  }
  ngOnInit(): void {
  }
  guardar() {
    if(!this.CursoForm.valid){
     
      console.log('ingresa datos')
      return false;
    }else{
      this.cursoService.saveCurso(this.CursoForm.value).subscribe(
        
        (data) =>{
          this.CursoForm.reset();
          console.log('hola',data)
         
      },(error)=>{

        console.error(error)
      })
      return true;
    }
    

  }

}
