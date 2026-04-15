import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';

import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { ProductCardComponent } from './shared/product-card/product-card';

import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    HomeComponent,
    CatalogoComponent,
    DetalleComponent,
    ContactoComponent,
    CarritoComponent,
    AgregarProductoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }