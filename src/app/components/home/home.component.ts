import { Component, OnInit } from '@angular/core';
import { PedidosService, Pedido } from '../../services/pedido.service';

import { formatDate } from '@angular/common';


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})
export class HomeComponent {
    nombre: string;
    fecha: string;
    pedido: Pedido;
    constructor(private _pedidosService: PedidosService) {
        this.pedido = this._pedidosService.getPedidoActual();
        if (this.pedido.nombre == undefined) {
            this.nombre = 'Introduzca el nombre';
        } else {
            this.nombre = this.pedido.nombre;
        }
        if (this.pedido.fecha == undefined) {
            this.fecha = formatDate(new Date(), 'yyyy-MM-dd', 'en');
        } else {
            this.fecha = this.pedido.fecha;
        }
        this.setNameAndDate(this.nombre, this.fecha);
    }

    setNameAndDate(name: string, date: string) {
        if (name === '') {
            name = 'Introduzca el nombre';
        }
        this._pedidosService.setpedidoName(name);
        this._pedidosService.setPedidoDate(date);
    }
}