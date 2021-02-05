import { Component, Input } from '@angular/core';
import { Pan, Pedido, PedidosService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-actual',
  templateUrl: 'pedidoActual.component.html',
  styleUrls: ['pedidoActual.component.css'],
})
export class PedidoActualComponent {
  @Input() pedido: Pedido;
  @Input() pan: Pan[];

  sendPedido(): void {
    let sumatorio = 0;
    for (const item of this.pedido.pan) {
      sumatorio += item.cantidad * item.precio;
    }
    this.pedido.precioTotal = sumatorio;
    this._pedidoService.sendPedido(this.pedido);
    this.pedido = {};
  }
  deleteItem(pan: Pan): void {
    this.pedido.pan.splice(this.pedido.pan.indexOf(pan), 1);
  }
  constructor(private _pedidoService: PedidosService) {}
}
