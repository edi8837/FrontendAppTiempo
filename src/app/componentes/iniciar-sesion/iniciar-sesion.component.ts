import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/services/Curso/curso.service';
import { EstudiateService } from 'src/app/services/Curso/estudiate.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  loginForm : FormGroup =this.fb.group({
    email: ['', Validators.required],
    contrasenia: ['', Validators.required]})

  constructor(

    private router:Router,
    private route:ActivatedRoute,
    public fb: FormBuilder,
    public EstudianteService: EstudiateService
  ) {

  }
  ngOnInit(): void {
  }
  Iniciar() {
    if(!this.loginForm.valid){
     
      console.log('ingresa datos')
      return false;
    }else{
      this.EstudianteService.login(this.loginForm.value).subscribe(
        
        (data) =>{
          
          console.log('hola',data)
          localStorage.setItem("idC",""+data.id)
          localStorage.setItem("nombre",""+data.nombre)
  
          this.router.navigate(["/Ruta4"])
         
      },(error)=>{

        console.error(error)
      })
      return true;
    }

  }
  ir(){
    this.router.navigate(["/Ruta7"])
         
  }
}


