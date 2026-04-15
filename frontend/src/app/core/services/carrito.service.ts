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
    const actual = this.productos();
    const existe = actual.find(p => p.id === producto.id);

    if (existe) {
      existe.cantidad++;
      this.productos.set([...actual]);
    } else {
      this.productos.set([
        ...actual,
        { ...producto, cantidad: 1 }
      ]);
    }

    this.guardarEnStorage();
  }

  eliminar(id: number) {
    this.productos.update(p =>
      p.filter(item => item.id !== id)
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
      this.productos.set(JSON.parse(data));
    }
  }
}