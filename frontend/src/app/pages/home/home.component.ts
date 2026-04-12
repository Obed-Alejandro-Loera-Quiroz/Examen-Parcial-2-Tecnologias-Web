import { Component, OnInit, signal } from '@angular/core';
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  productos = signal<Producto[]>([]);

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => console.error(err)
    });
  }
}