import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: false,
  templateUrl: './agregar-producto.html',
  styleUrls: ['./agregar-producto.css']
})
export class AgregarProductoComponent {
  productoForm: FormGroup;
  cargando = false;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private router: Router
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      categoria: ['', Validators.required],
      marca: ['', Validators.required],
      precio: [null, [Validators.required, Validators.min(1)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      imagen: ['', Validators.required], // Aquí el usuario escribirá el nombre o URL
      descripcion: ['', [Validators.required, Validators.minLength(10)]],
      disponible: [true, Validators.required]
    });
  }

  get f() {
    return this.productoForm.controls;
  }

  guardarProducto(): void {
    if (this.productoForm.invalid) {
      this.productoForm.markAllAsTouched();
      this.notificarError('Formulario incompleto', 'Revisa los campos obligatorios');
      return;
    }

    this.cargando = true;

    // Enviamos el valor del formulario directamente al servicio
    this.productoService.addProducto(this.productoForm.value).subscribe({
      next: () => {
        this.cargando = false;
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'Producto registrado correctamente',
          confirmButtonColor: '#16a34a'
        }).then(() => this.router.navigate(['/catalogo']));
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error:', err);
        this.notificarError('Error', 'No se pudo guardar el producto');
      }
    });
  }

  private notificarError(titulo: string, msj: string) {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: msj,
      confirmButtonColor: '#2563eb'
    });
  }
}