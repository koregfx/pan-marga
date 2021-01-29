import { Component, OnInit, Input } from "@angular/core";
import { Pan, Pedido, PedidosService } from "src/app/services/pedido.service";





@Component({
    selector: 'app-pedido-actual',
    templateUrl: 'pedidoActual.component.html',
    styleUrls: ['pedidoActual.component.css']
})
export class PedidoActualComponent implements OnInit {
    @Input() nombre = 'hola';
    @Input() productos: Pan[] = [
        {
            tipo: 'bocadillo',
            peso: 90,
            precio: 0.45,
            masa: 'viena',
            cantidad: 2
        }
    ];
    @Input() pedido: Pedido;
    getNombre(): void {

        if (this.pedido) {
            this.nombre = this.pedido.nombre;
        }
        else {
            this.nombre = 'introducir nombre';
        }
    }
    getProductos(): void {
        if (this.pedido.pan) {
            this.productos = this.pedido.pan;
        } else {
        }
    }
    sendPedido(): void {
        this._pedidoService.sendPedido(this.pedido);
    }
    actualizarData(): void {
        this.pedido = this._pedidoService.getPedidoActual();
        this.getNombre();
        this.getProductos();
    }
    constructor(private _pedidoService: PedidosService) { }

    ngOnInit() {
        console.log(this.nombre);

        this.actualizarData();
    }
}