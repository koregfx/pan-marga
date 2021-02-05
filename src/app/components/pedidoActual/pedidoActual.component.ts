import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pan, Pedido, PedidosService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-actual',
  templateUrl: 'pedidoActual.component.html',
  styleUrls: ['pedidoActual.component.css'],
})
export class PedidoActualComponent {
  @Input() pedido: Pedido;
  @Input() pan: Pan[];

  constructor(private _pedidoService: PedidosService, private router: Router) {}
  sendPedido(): void {
    let sumatorio = 0;
    for (const item of this.pedido.pan) {
      sumatorio += item.cantidad * item.precio;
    }
    this.pedido.precioTotal = sumatorio;
    this._pedidoService.sendPedido(this.pedido);
    this.pedido = {};
    this.router.navigate(['/pedidos']);
  }
  deleteItem(pan: Pan): void {
    this.pedido.pan.splice(this.pedido.pan.indexOf(pan), 1);
  }
}
