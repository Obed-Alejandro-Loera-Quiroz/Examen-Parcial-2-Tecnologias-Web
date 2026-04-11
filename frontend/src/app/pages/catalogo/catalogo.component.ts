import { Component, OnInit } from '@angular/core';
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {

  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  textoBusqueda: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data;
      this.productosFiltrados = data;
    });
  }

  filtrarProductos(): void {
    const texto = this.textoBusqueda.toLowerCase().trim();

    this.productosFiltrados = this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(texto) ||
      producto.marca.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto)
    );
  }
}