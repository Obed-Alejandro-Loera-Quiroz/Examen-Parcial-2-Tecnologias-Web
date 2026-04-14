import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {
  private apiUrl = 'http://localhost:3000/contacto'; 
  
  constructor(private http: HttpClient) {}
  enviarMensaje(datos: Contacto): Observable<any>{
    return this.http.post(this.apiUrl, datos);
  }
}
