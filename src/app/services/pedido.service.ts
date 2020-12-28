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
        },
        {
            tipo: 'bocadillo',
            peso: 120,
            precio: 0.55,
            masa: 'viena',
            cantidad: 0
        }
    ];
    private pedidos: Pedido[];

    private pedidoActual: Pedido =
        {
        };

    constructor() {
        console.log('servicio de Pedidos listo para usar');
    }
    getPanes(): Pan[] {
        return this.panes;
    }
    getPedidoActual(): Pedido {
        return this.pedidoActual;
    }
    setpedidoName(name: string): void {
        this.pedidoActual.nombre = name;
        console.log(this.pedidoActual);
    }
    sendPedido(pedido: Pedido): void {
        this.pedidoActual = pedido;
        this.pedidos.push(this.pedidoActual);
    }
}


export interface Pedido {
    nombre?: string;
    fecha?: Date;
    pan?: Pan[];
}

export interface Pan {
    tipo: string;
    peso: number;
    precio: number;
    masa: string;
    cantidad: number;
}