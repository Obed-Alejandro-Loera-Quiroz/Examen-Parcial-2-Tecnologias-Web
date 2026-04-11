import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // FALTA ESTE
import { FormsModule } from '@angular/forms'; // FALTA ESTE (Para el Two-way binding) [cite: 127]
import { HttpClientModule } from '@angular/common/http'; // Para la API [cite: 177]
import { NavbarComponent } from './shared/navbar/navbar';
import { FooterComponent } from './shared/footer/footer';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// No olvides importar tus componentes aquí para que funcionen
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { ProductCardComponent } from './shared/product-card/product-card';
//importar detalle component
import { DetalleComponent } from './pages/detalle/detalle.component';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    FooterComponent,
    CatalogoComponent, 
    ProductCardComponent,
    DetalleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,         // Habilita el uso de ngModel [cite: 127]
    HttpClientModule,    // Habilita el consumo de tu backend [cite: 176, 177]
    AppRoutingModule,
    CommonModule,        // Proporciona directivas comunes como ngIf, ngFor, etc.
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }