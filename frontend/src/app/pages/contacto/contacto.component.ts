import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {

  nombre = '';
  correo = '';
  asunto = '';
  mensaje = '';

  enviado = false;

  enviarFormulario() {
    console.log({
      nombre: this.nombre,
      correo: this.correo,
      asunto: this.asunto,
      mensaje: this.mensaje
    });

    this.enviado = true;
  }
}