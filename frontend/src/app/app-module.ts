import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { ProductCard } from './shared/product-card/product-card';
import { HomeComponent } from './pages/home/home.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AgregarProductoComponent } from './pages/agregar-producto/agregar-producto.component';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    ProductCard,
    HomeComponent,
    CatalogoComponent,
    DetalleComponent,
    CarritoComponent,
    ContactoComponent,
    AgregarProductoComponent
  ],
  imports: [
     BrowserModule,
  AppRoutingModule,
  FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }