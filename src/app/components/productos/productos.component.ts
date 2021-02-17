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
  productos: Producto[];
  panEutimio: Producto[] = [];
  panIryna: Producto[] = [];
  bolleriaEutimio: Producto[] = [];
  bolleriaIryna: Producto[] = [];

  constructor(private _pedidosService: PedidosService, private router: Router) {
    this.pedido = _pedidosService.getPedidoActual();
    _pedidosService.getProductos().subscribe((data) => {
      this.panEutimio = [];
      this.panIryna = [];
      this.bolleriaEutimio = [];
      this.bolleriaIryna = [];
      this.productos = data.productos;
      this.productos.forEach((e) => {
        e.cantidad = 1;
        switch (e.distribuidor) {
          case 'Pan Eutimio':
            this.panEutimio.push({ ...e });
            break;
          case 'Pan Iryna':
            this.panIryna.push({ ...e });
            break;
          case 'Bolleria Eutimio':
            this.bolleriaEutimio.push({ ...e });
            break;
          case 'Bolleria Iryna':
            this.bolleriaIryna.push({ ...e });
            break;
        }
        const conjunto = {};
      });
    });
    if (this.pedido == undefined) {
      this.router.navigate(['/home']);
    }
    if (this.pedido.nombre == undefined) {
      this.router.navigate(['/home']);
    }
  }
  navigateToPanEutimio() {
    this.router
      .navigate(['productos'], { fragment: 'panEutimio' })
      .then((res) => {
        let testElement = document.getElementById('panEutimio');
        if (testElement != undefined) testElement.scrollIntoView(true);
      });
  }
  navigateToPanIryna() {
    this.router
      .navigate(['productos'], { fragment: 'panIrina' })
      .then((res) => {
        let testElement = document.getElementById('panIrina');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  navigateTobolloEutimio() {
    this.router
      .navigate(['productos'], { fragment: 'bolloEutimio' })
      .then((res) => {
        let testElement = document.getElementById('bolloEutimio');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  navigateTobolloIryna() {
    this.router
      .navigate(['productos'], { fragment: 'bolloIryna' })
      .then((res) => {
        let testElement = document.getElementById('bolloIryna');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  addPanToPedido(pan: Producto): void {
    if (this.pedido.productos == undefined) {
      this.pedido.productos = [];
    }
    if (this.pedido.productos.some((e) => e._id == pan._id)) {
      this.pedido.productos[
        this.pedido.productos.findIndex((e) => e._id == pan._id)
      ].cantidad = pan.cantidad;
    } else {
      this.pedido.productos.push({ ...pan });
    }
  }
}
