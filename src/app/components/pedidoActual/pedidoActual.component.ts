import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  Producto,
  Pedido,
  PedidosService,
} from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-actual',
  templateUrl: 'pedidoActual.component.html',
  styleUrls: ['pedidoActual.component.css'],
})
export class PedidoActualComponent {
  @Input() pedido: Pedido;
  @Input() pan: Producto[];

  constructor(private _pedidoService: PedidosService, private router: Router) {}
  sendPedido(): void {
    let sumatorio = 0;
    for (const item of this.pedido.productos) {
      sumatorio += item.cantidad * item.precio;
    }
    this.pedido.precioTotal = sumatorio;
    this._pedidoService.post('/pedido', this.pedido).subscribe((data) => {
      console.log(this.pedido);
      this.pedido = {};
      this._pedidoService.resetPedidoActual();
      this.router.navigate(['/pedidos']);
      console.log(data);
    });
  }
  deleteItem(pan: Producto): void {
    this.pedido.productos.splice(this.pedido.productos.indexOf(pan), 1);
  }
}
