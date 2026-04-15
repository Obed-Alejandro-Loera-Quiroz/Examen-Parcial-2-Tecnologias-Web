import { Component, signal } from '@angular/core';
import { ContactoService } from '../../core/services/contacto.service';
import Swal from 'sweetalert2';

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
  cargando = signal<boolean>(false);

  constructor(private contactoService: ContactoService) {}

enviarFormulario(formulario: any) {
  if (formulario.valid) {

    this.cargando.set(true);

    this.contactoService.enviarMensaje(formulario.value).subscribe({
      next: () => {
        this.mensajeConfirmacion.set('Mensaje enviado correctamente y guardado en la base de datos');
        this.enviado.set(true);
        formulario.reset();
        this.cargando.set(false);
      },
      error: () => {
        this.mensajeConfirmacion.set('Error al enviar el mensaje');
        this.enviado.set(false);
        this.cargando.set(false);
      }
    });

  }
}

}