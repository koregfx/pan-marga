import { Component } from '@angular/core';
import { PedidosService } from '../../services/pedido.service';


@Component({
    selector: 'app-pedidos',
    templateUrl: 'pedidos.component.html',
    styleUrls: ['pedidos.component.css']
})
export class PedidosComponent {
    constructor(private _pedidosService: PedidosService) {

    }
}