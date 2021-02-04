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
            cantidad: 0,
            masa: 'viena'
        },
        {
            tipo: 'barra',
            peso: 230,
            precio: 0.75,
            cantidad: 0,
            masa: 'viena'
        },
        {
            tipo: 'barra',
            peso: 230,
            precio: 0.75,
            cantidad: 0,
            masa: 'candeal'
        },
        {
            tipo: 'barra',
            peso: 230,
            precio: 0.75,
            cantidad: 0,
            masa: 'baguette'
        },
        {
            tipo: 'barra',
            peso: 200,
            precio: 0.75,
            cantidad: 0,
            masa: 'integral'
        },
        {
            tipo: 'barra',
            peso: 300,
            precio: 1,
            cantidad: 0,
            masa: 'candeal'
        },
        {
            tipo: 'barra',
            peso: 300,
            precio: 1,
            cantidad: 0,
            masa: 'viena'
        },
        {
            tipo: 'barra',
            peso: 300,
            precio: 1,
            cantidad: 0,
            masa: 'bazo'
        },
        {
            tipo: 'barra',
            peso: 300,
            precio: 1,
            cantidad: 0,
            masa: 'gallego'
        },
        {
            tipo: 'barra',
            peso: 450,
            precio: 1.30,
            cantidad: 0,
            masa: 'candeal'
        },
        {
            tipo: 'barra',
            peso: 450,
            precio: 1.30,
            cantidad: 0,
            masa: 'viena'
        },
        {
            tipo: 'barra',
            peso: 450,
            precio: 1.30,
            cantidad: 0,
            masa: 'bazo'
        },
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
    bollo?: any[];
    otros?: any[];
}

export interface Pan {
    tipo: string;
    peso: number;
    precio: number;
    masa: string;
    cantidad: number;
}