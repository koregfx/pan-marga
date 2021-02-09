import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  Pedido,
  PedidosService,
  Producto,
} from '../../services/pedido.service';

@Component({
  selector: 'app-productos',
  templateUrl: 'productos.component.html',
  styleUrls: ['productos.component.css'],
})
export class ProductosComponent {
  pedido: Pedido;
  panes: Producto[];
  constructor(private _pedidosService: PedidosService, private router: Router) {
    this.pedido = _pedidosService.getPedidoActual();
    this.panes = _pedidosService.getPanes();
    if (this.pedido == undefined) {
      this.router.navigate(['/home']);
    }
    if (this.pedido.nombre == undefined) {
      this.router.navigate(['/home']);
    }
  }

  addPanToPedido(pan: Producto): void {
    if (this.pedido.productos == undefined) {
      this.pedido.productos = [];
    }
    if (this.pedido.productos.some((e) => e.nombre == pan.nombre)) {
      this.pedido.productos[
        this.pedido.productos.findIndex((e) => e.nombre == pan.nombre)
      ].cantidad = pan.cantidad;
    } else {
      this.pedido.productos.push({ ...pan });
    }
  }
}
