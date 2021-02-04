import { Component, Input } from "@angular/core";
import { Pan, Pedido, PedidosService } from "src/app/services/pedido.service";





@Component({
    selector: 'app-pedido-actual',
    templateUrl: 'pedidoActual.component.html',
    styleUrls: ['pedidoActual.component.css']
})
export class PedidoActualComponent {
    @Input() pedido: Pedido;
    @Input() pan: Pan[];

    sendPedido(): void {
        this._pedidoService.sendPedido(this.pedido);
    }
    constructor(private _pedidoService: PedidosService) { }

}