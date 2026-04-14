import { Component, Input } from '@angular/core';
import { Producto } from '../../core/services/producto';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input() producto!: Producto;

  // IMPORTANTE: Asegúrate de que diga 'public' para descartar problemas de acceso
  constructor(public carritoService: CarritoService) {}

  agregarAlCarrito(): void {
    // 1. LOG DE PRUEBA: Si no ves esto en la consola (F12), el botón no está llamando a la función
    console.log('Intentando agregar producto:', this.producto);

    if (this.producto) {
      this.carritoService.agregar(this.producto);
      
      // 2. ALERT DE PRUEBA: Para confirmar visualmente sin ir a otra página
      alert(`${this.producto.nombre} añadido al carrito`);
    } else {
      console.error('No se pudo agregar: El objeto producto está vacío');
    }
  }
}