import { Component } from "@angular/core";
import { Pan, Pedido, PedidosService } from '../../services/pedido.service';


@Component({
    selector: 'app-productos',
    templateUrl: 'productos.component.html',
    styleUrls: ['productos.component.css']
})
export class ProductosComponent {
    pedido: Pedido;
    productos: Pan[];
    constructor(private _pedidosService: PedidosService) {
        this.pedido = _pedidosService.getPedidoActual();
        this.productos = _pedidosService.getPanes();
        console.log(this.productos);
    }
}