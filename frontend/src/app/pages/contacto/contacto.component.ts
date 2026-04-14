import { Component, signal } from '@angular/core';
import { ContactoService } from '../../core/services/contacto.service';

@Component({
  selector: 'app-contacto',
  standalone: false,
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  // REQUISITO 6.8: Uso de Signals para manejar el estado local [cite: 169, 170]
  mensajeConfirmacion = signal<string>('');
  enviado = signal<boolean>(false);

  constructor(private contactoService: ContactoService) {}

  enviarFormulario(formulario: any) {
    // Log para depuración en la consola del navegador
    console.log('Datos capturados desde el formulario:', formulario.value);

    if (formulario.valid) {
      // REQUISITO 6.9: Consumo de la API usando HttpClient y subscribe() [cite: 176, 177, 179]
      this.contactoService.enviarMensaje(formulario.value).subscribe({
        next: (res) => {
          console.log('Respuesta exitosa del servidor:', res);
          
          // REQUISITO 4.5: Mostrar mensaje claro de confirmación en pantalla [cite: 86, 88]
          this.mensajeConfirmacion.set('¡Mensaje enviado con éxito y guardado en la base de datos!');
          this.enviado.set(true);
          
          // Limpiamos el formulario para permitir nuevos envíos si el usuario lo desea
          formulario.reset();
        },
        error: (err) => {
          // Si el catálogo funciona pero esto no, revisa la consola para ver el error (ej. 404 o 500)
          console.error('Error al intentar conectar con el servidor:', err);
          this.mensajeConfirmacion.set('Error: No se pudo conectar con el servidor de Node.js.');
          this.enviado.set(false);
        }
      });
    } else {
      console.warn('El formulario es inválido. Verifica los campos obligatorios.');
    }
  }
}