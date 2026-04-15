import { Component } from '@angular/core';
import { CarritoService } from '../../core/services/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent {
  // Inyectamos el servicio para tener acceso a los productos y totales
  constructor(public carritoService: CarritoService) { }

  // Método para finalizar la compra (Requisito 4.6 del PDF)
  finalizarCompra() {
    if (this.carritoService.totalProductos() > 0) {
      Swal.fire({
        title: '¿Confirmar compra?',
        text: 'Tu pedido será procesado',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, comprar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#16a34a'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: 'Compra realizada',
            text: 'Gracias por comprar en PAMICELL',
            timer: 2000,
            showConfirmButton: false
          });

          this.carritoService.limpiar();
        }
      });
    }
  }
}