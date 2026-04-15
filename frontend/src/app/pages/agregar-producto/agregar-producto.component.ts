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
      imagen: ['', Validators.required],
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

      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Revisa los campos obligatorios antes de continuar',
        confirmButtonColor: '#2563eb'
      });
      return;
    }

    this.cargando = true;

    this.productoService.addProducto(this.productoForm.value).subscribe({
      next: () => {
        this.cargando = false;

        Swal.fire({
          icon: 'success',
          title: 'Producto agregado',
          text: 'El producto se guardó correctamente',
          confirmButtonColor: '#16a34a'
        }).then(() => {
          this.router.navigate(['/catalogo']);
        });
      },
      error: (err) => {
        this.cargando = false;
        console.error('Error al agregar producto:', err);

        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo guardar el producto',
          confirmButtonColor: '#dc2626'
        });
      }
    });
  }
}