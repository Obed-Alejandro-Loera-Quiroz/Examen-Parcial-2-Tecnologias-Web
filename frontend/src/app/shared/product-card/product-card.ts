import { Component, Input } from '@angular/core';
import { Producto } from '../../../app/core/services/producto';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
})
export class ProductCardComponent {
  @Input() producto!: Producto;
}