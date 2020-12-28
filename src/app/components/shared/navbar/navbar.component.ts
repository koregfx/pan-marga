import { Component, OnInit } from '@angular/core';
import { PedidosService, Pan, Pedido } from '../../../services/pedido.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
    nombre: string;
    productos: Pan[] = [
        {
            tipo: 'bocadillo',
            peso: 90,
            precio: 0.45,
            masa: 'viena',
            cantidad: 2
        }
    ];
    pedido: Pedido;
    getNombre(): void {

        if (this._pedidoService.getPedidoActual()) {
            this.nombre = this._pedidoService.getPedidoActual().nombre;
        }
        else {
            this.nombre = 'introducir nombre';
        }
    }
    getProductos(): void {
        if (this._pedidoService.getPedidoActual()) {
            this.productos = this._pedidoService.getPedidoActual().pan;
        } else {
        }
    }
    sendPedido(): void {
        this._pedidoService.sendPedido(this.pedido);
    }
    constructor(private _pedidoService: PedidosService) { }

    ngOnInit() {
        this.getNombre();
        this.getProductos();
    }
}
