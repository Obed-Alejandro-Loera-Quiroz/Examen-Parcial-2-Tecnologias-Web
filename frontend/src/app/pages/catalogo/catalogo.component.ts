import { Component, OnInit, signal, computed } from '@angular/core';
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {

  // Signal para la lista de productos
  productos = signal<Producto[]>([]);
  
  // Signal para el filtro de búsqueda
  textoBusqueda = signal<string>('');

  // Signal Computado: Filtra automáticamente en tiempo real (Punto 6.8)
  productosFiltrados = computed(() => {
    const texto = this.textoBusqueda().toLowerCase().trim();
    if (!texto) return this.productos();

    return this.productos().filter(producto =>
      producto.nombre.toLowerCase().includes(texto) ||
      producto.marca.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto)
    );
  });

  // Inyectamos ambos servicios en el constructor
  constructor(
    private productoService: ProductoService,
    private carritoService: CarritoService // Inyección necesaria para el carrito
  ) {}

  ngOnInit(): void {
    // Consumo de API de Node.js (MySQL) usando HttpClient (Punto 6.9)
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos.set(data); 
      },
      error: (err) => console.error('Error al cargar productos de MySQL:', err)
    });
  }

  // Método para añadir productos al carrito
  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregar(producto);
    // Log opcional para que verifiques en la consola (F12) que los datos fluyen
    console.log(`Producto añadido: ${producto.nombre}`);
  }
}