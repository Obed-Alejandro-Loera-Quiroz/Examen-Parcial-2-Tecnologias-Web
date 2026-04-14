import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // FALTA ESTE
import { FormsModule } from '@angular/forms'; // FALTA ESTE (Para el Two-way binding) [cite: 127]
import { HttpClientModule } from '@angular/common/http'; // Para la API [cite: 177]
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app';

// No olvides importar tus componentes aquí para que funcionen
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductCardComponent } from './shared/product-card/product-card';
//importar detalle component
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { RouterModule } from '@angular/router'; 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent,
    ProductCardComponent,
    DetalleComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }