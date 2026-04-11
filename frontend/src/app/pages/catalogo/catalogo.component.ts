import { Component, OnInit, signal, computed } from '@angular/core'; // Importamos signal y computed [cite: 169]
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {

  // Usamos un Signal para la lista maestra de productos
  productos = signal<Producto[]>([]);
  
  // Signal para el texto de búsqueda (Two-way binding) [cite: 127, 172]
  textoBusqueda = signal<string>('');

  // Un "computed" se actualiza automáticamente cuando 'productos' o 'textoBusqueda' cambian
  productosFiltrados = computed(() => {
    const texto = this.textoBusqueda().toLowerCase().trim();
    if (!texto) return this.productos();

    return this.productos().filter(producto =>
      producto.nombre.toLowerCase().includes(texto) ||
      producto.marca.toLowerCase().includes(texto) ||
      producto.categoria.toLowerCase().includes(texto)
    );
  });

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    // Consumo de API propia usando HttpClient y Subscribe [cite: 147, 177, 179]
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos.set(data); // Actualizamos el valor del signal
      },
      error: (err) => console.error('Error al cargar productos de MySQL:', err)
    });
  }
  
  // Ya no necesitas la función filtrarProductos() manualmente, 
  // 'computed' lo hace por ti al escribir en el buscador.
}