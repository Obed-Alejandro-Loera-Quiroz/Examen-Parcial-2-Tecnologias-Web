import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: '../detalle/detalle.html',
  styleUrls: ['../detalle/detalle.css']
})
export class DetalleComponent implements OnInit {

  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.productoService.getProductoById(id).subscribe(data => {
      this.producto = data;
    });
  }
}