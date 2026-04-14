import { Component } from '@angular/core';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  // Inyectamos el servicio para tener acceso a los productos y totales
  constructor(public carritoService: CarritoService) {}

  // Método para finalizar la compra (Requisito 4.6 del PDF)
  finalizarCompra() {
    if (this.carritoService.totalProductos() > 0) {
      alert('¡Gracias por tu compra en PAMICELL! Tu pedido está en camino.');
      this.carritoService.limpiar();
    }
  }
}