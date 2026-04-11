import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: any[] = [];

  agregar(producto: any) {
    this.carrito.push(producto);
  }

  obtener() {
    return this.carrito;
  }

  eliminar(index: number) {
    this.carrito.splice(index, 1);
  }
}