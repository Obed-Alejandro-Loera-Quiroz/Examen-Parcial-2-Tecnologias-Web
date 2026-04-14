import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // REQUISITO 6.8: Usamos Signals para el estado del carrito
  private productos = signal<any[]>([]);

  // Selectores computados (se actualizan solos)
  listaCarrito = computed(() => this.productos());
  
  totalProductos = computed(() => 
    this.productos().reduce((acc, p) => acc + p.cantidad, 0)
  );

  subtotal = computed(() => 
    this.productos().reduce((acc, p) => acc + (p.precio * p.cantidad), 0)
  );

  agregar(producto: any) {
    const actual = this.productos();
    const existe = actual.find(p => p.id === producto.id);

    if (existe) {
      existe.cantidad++;
      this.productos.set([...actual]);
    } else {
      this.productos.set([...actual, { ...producto, cantidad: 1 }]);
    }
  }

  eliminar(id: number) {
    this.productos.update(p => p.filter(item => item.id !== id));
  }

  limpiar() {
    this.productos.set([]);
  }
}