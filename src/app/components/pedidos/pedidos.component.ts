import { Component } from '@angular/core';
import { Pedido, PedidosService } from '../../services/pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: 'pedidos.component.html',
  styleUrls: ['pedidos.component.css'],
})
export class PedidosComponent {
  pedidos: Pedido[];
  constructor(private _pedidosService: PedidosService) {
    this.pedidos = _pedidosService.getPedidos();
    console.log(this.pedidos);
  }
  deletePedido(pedido: Pedido): void {
    this.pedidos.splice(this.pedidos.indexOf(pedido), 1);
  }
}
