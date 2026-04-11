import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Asegúrate de que esta interfaz exista en tus models
import { Producto } from './producto'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  // URL de tu backend de Node.js que ya comprobamos
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  /**
   * Obtiene la lista completa de productos desde MySQL
   * Cumple con: HttpClient, Observable y GET general [cite: 177, 178, 192]
   */
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  /**
   * Obtiene un producto específico por su ID
   * Cumple con: Ruta dinámica y GET por ID [cite: 145, 193]
   */
  getProductoById(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.apiUrl}/${id}`);
  }
}