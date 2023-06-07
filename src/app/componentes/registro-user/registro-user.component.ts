import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstudiateService } from 'src/app/services/Curso/estudiate.service';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css']
})
export class RegistroUserComponent {
  loginForm : FormGroup =this.fb.group({
    email: ['', Validators.required],
    contrasenia: ['', Validators.required],
    rol: ['Cliente']})

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
      this.EstudianteService.saveEstudiante(this.loginForm.value).subscribe(
        
        (data) =>{
          
          console.log('hola',data)
          localStorage.setItem("idC",""+data.id)
          localStorage.setItem("nombre",""+data.nombre)
  
          this.router.navigate(["/Ruta5"])
         
      },(error)=>{

        console.error(error)
      })
      return true;
    }

  }
}
