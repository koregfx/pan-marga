import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pan, Pedido, PedidosService } from '../../services/pedido.service';

@Component({
  selector: 'app-productos',
  templateUrl: 'productos.component.html',
  styleUrls: ['productos.component.css'],
})
export class ProductosComponent {
  pedido: Pedido;
  panes: Pan[];
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

  addPanToPedido(pan: Pan): void {
    if (this.pedido.pan == undefined) {
      this.pedido.pan = [];
    }
    if (
      this.pedido.pan.some(
        (e) => e.tipo === pan.tipo && e.masa === pan.masa && e.peso === pan.peso
      )
    ) {
      this.pedido.pan[
        this.pedido.pan.findIndex(
          (e) =>
            e.tipo === pan.tipo && e.masa === pan.masa && e.peso === pan.peso
        )
      ].cantidad = pan.cantidad;
    } else {
      this.pedido.pan.push({ ...pan });
    }
    console.log(this.pedido);
  }
}
