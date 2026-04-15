import { Component } from '@angular/core';
import { CarritoService } from '../../core/services/carrito.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(public carritoService: CarritoService) {}

}