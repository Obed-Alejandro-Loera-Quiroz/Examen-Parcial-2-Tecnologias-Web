import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'iPhone 13',
      categoria: 'Smartphones',
      marca: 'Apple',
      precio: 13999.99,
      stock: 5,
      imagen: 'https://via.placeholder.com/500x350?text=iPhone+13',
      descripcion: 'iPhone 13 con 128GB de almacenamiento.',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Samsung Galaxy S24',
      categoria: 'Smartphones',
      marca: 'Samsung',
      precio: 15999.99,
      stock: 0,
      imagen: 'https://via.placeholder.com/500x350?text=Galaxy+S24',
      descripcion: 'Excelente rendimiento y cámara de alta calidad.',
      disponible: false
    },
    {
      id: 3,
      nombre: 'Xiaomi Redmi Note 13',
      categoria: 'Smartphones',
      marca: 'Xiaomi',
      precio: 6999.99,
      stock: 8,
      imagen: 'https://via.placeholder.com/500x350?text=Redmi+Note+13',
      descripcion: 'Buen rendimiento a precio accesible.',
      disponible: true
    }
  ];

  getProductos(): Observable<Producto[]> {
    return of(this.productos);
  }

  getProductoById(id: number): Observable<Producto | undefined> {
    const producto = this.productos.find(p => p.id === id);
    return of(producto);
  }
}