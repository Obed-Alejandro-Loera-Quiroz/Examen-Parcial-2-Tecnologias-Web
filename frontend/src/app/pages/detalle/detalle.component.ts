import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css']
})
export class DetalleComponent implements OnInit {
  producto: Producto | null = null;
  cargando = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    const productoState = history.state.producto as Producto | undefined;

    if (productoState) {
      this.producto = productoState;
      this.cargando = false;
      return;
    }

    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id || isNaN(id)) {
      this.error = 'ID de producto inválido';
      this.cargando = false;
      return;
    }

    this.productoService.getProductos().subscribe({
      next: (productos) => {
        const encontrado = productos.find(p => Number(p.id) === id) || null;

        if (encontrado) {
          this.producto = encontrado;
        } else {
          this.error = 'Producto no encontrado';
        }

        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar detalle:', err);
        this.error = 'No se pudo cargar el producto';
        this.cargando = false;
      }
    });
  }

  getImagenUrl(nombreImagen: string): string {
    return `http://localhost:3000/uploads/${nombreImagen}`;
  }
}