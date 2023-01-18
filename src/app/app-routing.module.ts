import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularTiempoComponent } from './componentes/calcular-tiempo/calcular-tiempo.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';

const routes: Routes = [
  { path: '', component: CrearProductoComponent},
  { path: 'Ruta1', component: CrearProductoComponent},
  { path: 'Ruta2', component: ListarProductoComponent},
  { path: 'Ruta3/:id', component: CalcularTiempoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
