import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './componentes/listar-producto/listar-producto.component';
import { CalcularTiempoComponent } from './componentes/calcular-tiempo/calcular-tiempo.component';
import {FormsModule,ReactiveFormsModule}from '@angular/forms' 
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavMenuComponent } from "./componentes/nav-menu/nav-menu.component";
import { FooterComponent } from './componentes/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CrearProductoComponent,
        ListarProductoComponent,
        CalcularTiempoComponent,
        NavMenuComponent,
        FooterComponent
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
