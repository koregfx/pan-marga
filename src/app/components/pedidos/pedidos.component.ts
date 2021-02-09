import { Component } from '@angular/core';
import {
  Producto,
  Pedido,
  PedidosService,
} from '../../services/pedido.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-pedidos',
  templateUrl: 'pedidos.component.html',
  styleUrls: ['pedidos.component.css'],
})
export class PedidosComponent {
  pedidos: Pedido[] = [];
  fecha: string;

  conjunto: Producto[];
  sumaTotal = 0;

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
    });
  }
  getConjunto() {
    this.conjunto = [];
    this.pedidos.forEach((pedido) => {
      pedido.productos.forEach((pan) => {
        if (this.conjunto.some((e) => e.nombre == pan.nombre)) {
          const index = this.conjunto.findIndex((e) => e.nombre == pan.nombre);
          this.conjunto[index].cantidad += pan.cantidad;
        } else {
          this.conjunto.push({ ...pan });
        }
      });
    });
    this.conjunto.forEach(
      (pan) => (this.sumaTotal += pan.cantidad * pan.precio)
    );
  }
}
