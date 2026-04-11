import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../core/services/producto';
import { ProductoService } from '../../core/services/producto.service';

@Component({
  selector: 'app-detalle',
  standalone: false,
  templateUrl: './detalle.html',
  styleUrls: ['./detalle.css']
})
export class DetalleComponent implements OnInit {

  producto?: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.productoService.getProductoById(id).subscribe(data => {
        this.producto = data;
      });
    });
  }
}