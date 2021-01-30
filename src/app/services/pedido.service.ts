import { Injectable } from '@angular/core';

@Injectable()
export class PedidosService {
    private panes: Pan[] = [
        {
            tipo: 'bocadillo',
            peso: 90,
            precio: 0.45,
            cantidad: 0,
            masa: 'viena'
        }
    ];
    private pedidos: Pedido[];

    private pedidoActual: Pedido = {};

    constructor() {
        console.log('servicio de Pedidos listo para usar');
    }
    getPanes(): Pan[] {
        return this.panes;
    }
    getPedidoActual(): Pedido {
        console.log(this.pedidoActual);
        return this.pedidoActual;
    }
    setpedidoName(name: string): void {
        this.pedidoActual.nombre = name;
    }
    sendPedido(pedido: Pedido): void {
        this.pedidoActual = pedido;
        this.pedidos.push(this.pedidoActual);
    }
    setPedidoDate(date: string): void {
        this.pedidoActual.fecha = date;
    }
}


export interface Pedido {
    nombre?: string;
    fecha?: string;
    pan?: Pan[];
}

export interface Pan {
    tipo: string;
    peso: number;
    precio: number;
    masa: string;
    cantidad: number;
}