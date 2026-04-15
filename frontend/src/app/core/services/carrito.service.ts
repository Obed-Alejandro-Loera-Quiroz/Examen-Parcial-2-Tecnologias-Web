import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private storageKey = 'carrito';

  // Estado principal
  private productos = signal<any[]>([]);

  constructor() {
    this.cargarDesdeStorage();
  }

  // =========================
  // COMPUTED (reactivos)
  // =========================

  listaCarrito = computed(() => this.productos());

  totalProductos = computed(() =>
    this.productos().reduce((acc, p) => acc + p.cantidad, 0)
  );

  subtotal = computed(() =>
    this.productos().reduce((acc, p) => acc + (p.precio * p.cantidad), 0)
  );

  // =========================
  // MÉTODOS PRINCIPALES
  // =========================

  agregar(producto: any) {
    this.productos.update(actual => {
      const existe = actual.find(p => p.id === producto.id);
      if (existe) {
        existe.cantidad++;
        return [...actual];
      }
      return [...actual, { ...producto, cantidad: 1 }];
    });
    this.guardarEnStorage();
  }

  // NUEVO: Para el botón "-" (Resta 1 o elimina si llega a 0)
  eliminarUno(id: number) {
    this.productos.update(actual => {
      const item = actual.find(p => p.id === id);
      if (item && item.cantidad > 1) {
        item.cantidad--;
        return [...actual];
      }
      // Si la cantidad es 1 y picas "-", se borra el producto
      return actual.filter(p => p.id !== id);
    });
    this.guardarEnStorage();
  }

  // RENOMBRADO: Para el botón de "Bote de basura" (Borra todo el pack)
  eliminarTodo(id: number) {
    this.productos.update(actual => 
      actual.filter(item => item.id !== id)
    );
    this.guardarEnStorage();
  }

  limpiar() {
    this.productos.set([]);
    this.guardarEnStorage();
  }

  // =========================
  // LOCAL STORAGE
  // =========================

  private guardarEnStorage() {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this.productos())
    );
  }

  private cargarDesdeStorage() {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      try {
        this.productos.set(JSON.parse(data));
      } catch (e) {
        console.error("Error cargando carrito", e);
      }
    }
  }
}