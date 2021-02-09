import { Component } from '@angular/core';
import { Pedido, PedidosService } from '../../services/pedido.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  templateUrl: 'pedidos.component.html',
  styleUrls: ['pedidos.component.css'],
})
export class PedidosComponent {
  pedidos: Pedido[] = [];
  fecha: string;

  constructor(private _pedidosService: PedidosService) {
    this.getPedidos();
    this.fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en');
  }
  getPedidos(): void {
    this._pedidosService.get('/pedido').subscribe((pedidos) => {
      this.pedidos = pedidos.pedidos;
    });
  }
  deletePedido(pedido: Pedido): void {
    this._pedidosService.delete('/pedido', pedido).subscribe((data) => {
      this._pedidosService.get('/pedido').subscribe((pedidos) => {
        this.pedidos = pedidos.pedidos;
      });
    });
  }
  buscarPorFecha(date: string): void {
    this._pedidosService.getByDate('/pedido', date).subscribe((pedidos) => {
      console.log(pedidos.pedidos);
      this.pedidos = pedidos.pedidos;
      console.log(this.pedidos);
    });
  }
}
