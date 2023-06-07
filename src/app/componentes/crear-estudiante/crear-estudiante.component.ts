import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../services/Curso/curso.service';
import { EstudiateService } from '../../services/Curso/estudiate.service';

@Component({
  selector: 'app-crear-estudiante',
  templateUrl: './crear-estudiante.component.html',
  styleUrls: ['./crear-estudiante.component.css']
})
export class CrearEstudianteComponent {
  EstudianteForm : FormGroup =this.fb.group({
    id: ['', Validators.required],
    cedula: ['', Validators.required],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['', Validators.required],
    contrasenia: ['', Validators.required],
    rol: ['', Validators.required],
    telefono: [, Validators.required]
  
  })
  
  
  constructor(
//hols
    private router:Router,
    private route:ActivatedRoute,
    public fb: FormBuilder,
    public estudianteService: EstudiateService
  ) {

  }
  ngOnInit(): void {
    
    this.estraerPerfil()
    
  }
  
  guardar() {
    
    if(!this.EstudianteForm.valid){
     
      console.log('ingresa datos')
      return false;
    }else{
      this.estudianteService.UpdateEstudiante(this.EstudianteForm.value).subscribe(
        
        (data) =>{
          
          console.log('hola',data)
         
      },(error)=>{

        console.error(error)
      })
      return true;
    }
    

  }

  estraerPerfil(){
    const numeroEntero = parseInt("" + localStorage.getItem("idC"), 10);
    this.estudianteService.getAllEtu(numeroEntero).subscribe((data) => {

      this.EstudianteForm.setValue({
      id:data.id,
      cedula:data.cedula,
      nombre:data.nombre,
      apellido:data.apellido,
      email:data.email,
      contrasenia:data.contrasenia,
      rol:data.rol,
      telefono:data.telefono
        
      })
    }, (error) => {
      console.error(error)
    }
    );
  }

}
