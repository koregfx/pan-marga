import { Component } from '@angular/core';
import { PedidosService, Pedido } from '../../services/pedido.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    pedidoActual: Pedido;
    constructor(private _pedidoService: PedidosService) {

    }

    setPedidoName(name: string): void {
        this._pedidoService.setpedidoName(name);
    }
}