import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './componentes/home/home.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearEstudianteComponent } from './componentes/crear-estudiante/crear-estudiante.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { InscribirComponent } from './componentes/inscribir/inscribir.component';
import { RegistroUserComponent } from './componentes/registro-user/registro-user.component';

const routes: Routes = [
  { path: '', component: IniciarSesionComponent},
  { path: 'Ruta2', component: ListarCursosComponent},
  { path: 'Ruta1', component: CatalogoComponent},
  { path: 'Ruta3', component: CrearEstudianteComponent},
  { path: 'Ruta4', component: CrearCursoComponent},
  { path: 'Ruta5', component: IniciarSesionComponent},
  { path: 'Ruta6', component: InscribirComponent},
  { path: 'Ruta7', component: RegistroUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
