import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';

import {FormsModule,ReactiveFormsModule}from '@angular/forms' 
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from "./componentes/nav-menu/nav-menu.component";
import { FooterComponent } from './componentes/footer/footer.component';
import { CrearCursoComponent } from './componentes/crear-curso/crear-curso.component';
import { CrearEstudianteComponent } from './componentes/crear-estudiante/crear-estudiante.component';
import { ListarCursosComponent } from './componentes/listar-cursos/listar-cursos.component';
import { CatalogoComponent } from './componentes/catalogo/catalogo.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

import { InscribirComponent } from './componentes/inscribir/inscribir.component';
import { RegistroUserComponent } from './componentes/registro-user/registro-user.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavMenuComponent,
        FooterComponent,
        CrearCursoComponent,
        CrearEstudianteComponent,
        ListarCursosComponent,
        CatalogoComponent,
        IniciarSesionComponent,
      
        InscribirComponent,
                RegistroUserComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        RouterModule
       
    ]
})
export class AppModule { }
