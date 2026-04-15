import { Component, Input } from '@angular/core';
import { Producto } from '../../core/services/producto';
import { CarritoService } from '../../core/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input() producto!: Producto;

  // IMPORTANTE: Asegúrate de que diga 'public' para descartar problemas de acceso
  constructor(public carritoService: CarritoService) { }

  agregarAlCarrito(): void {
    if (this.producto) {
      this.carritoService.agregar(this.producto);

      Swal.fire({
        toast: true,
        position: 'top-end',
        icon: 'success',
        title: `${this.producto.nombre} añadido`,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: '#1c1d1f',
        color: '#fff'
      });

    } else {
      console.error('Producto vacío');
    }
  }
}