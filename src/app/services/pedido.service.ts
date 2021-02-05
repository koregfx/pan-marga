import { Injectable } from '@angular/core';

@Injectable()
export class PedidosService {
  private panes: Pan[] = [
    {
      tipo: 'bocadillo',
      peso: 90,
      precio: 0.45,
      cantidad: 0,
      masa: 'viena',
    },
    {
      tipo: 'bocadillo',
      peso: 120,
      precio: 0.55,
      cantidad: 0,
      masa: 'viena',
    },
    {
      tipo: 'barra',
      peso: 230,
      precio: 0.75,
      cantidad: 0,
      masa: 'viena',
    },
    {
      tipo: 'barra',
      peso: 230,
      precio: 0.75,
      cantidad: 0,
      masa: 'candeal',
    },
    {
      tipo: 'barra',
      peso: 230,
      precio: 0.75,
      cantidad: 0,
      masa: 'baguette',
    },
    {
      tipo: 'barra',
      peso: 200,
      precio: 0.75,
      cantidad: 0,
      masa: 'integral',
    },
    {
      tipo: 'barra',
      peso: 300,
      precio: 1,
      cantidad: 0,
      masa: 'candeal',
    },
    {
      tipo: 'barra',
      peso: 300,
      precio: 1,
      cantidad: 0,
      masa: 'viena',
    },
    {
      tipo: 'barra',
      peso: 300,
      precio: 1,
      cantidad: 0,
      masa: 'bazo',
    },
    {
      tipo: 'barra',
      peso: 300,
      precio: 1,
      cantidad: 0,
      masa: 'gallego',
    },
    {
      tipo: 'barra',
      peso: 450,
      precio: 1.3,
      cantidad: 0,
      masa: 'candeal',
    },
    {
      tipo: 'barra',
      peso: 450,
      precio: 1.3,
      cantidad: 0,
      masa: 'viena',
    },
    {
      tipo: 'barra',
      peso: 450,
      precio: 1.3,
      cantidad: 0,
      masa: 'bazo',
    },
  ];
  private pedidos: Pedido[] = [
    {
      nombre: 'Adrian',
      fecha: '2021-02-05',
      pan: [
        {
          tipo: 'bocadillo',
          peso: 120,
          precio: 0.55,
          cantidad: 2,
          masa: 'viena',
        },
        {
          tipo: 'bocadillo',
          peso: 90,
          precio: 0.45,
          cantidad: 3,
          masa: 'viena',
        },
        {
          tipo: 'barra',
          peso: 230,
          precio: 0.75,
          cantidad: 4,
          masa: 'baguette',
        },
        {
          tipo: 'barra',
          peso: 200,
          precio: 0.75,
          cantidad: 2,
          masa: 'integral',
        },
        {
          tipo: 'barra',
          peso: 300,
          precio: 1,
          cantidad: 5,
          masa: 'candeal',
        },
      ],
      precioTotal: 11.95,
    },
    {
      nombre: 'Margarita',
      fecha: '2021-02-05',
      pan: [
        {
          tipo: 'bocadillo',
          peso: 120,
          precio: 0.55,
          cantidad: 2,
          masa: 'viena',
        },
        {
          tipo: 'bocadillo',
          peso: 90,
          precio: 0.45,
          cantidad: 1,
          masa: 'viena',
        },
        {
          tipo: 'barra',
          peso: 230,
          precio: 0.75,
          cantidad: 1,
          masa: 'baguette',
        },
      ],
      precioTotal: 2.35,
    },
  ];

  private pedidoActual: Pedido = {};

  constructor() {
    console.log('servicio de Pedidos listo para usar');
  }
  getPanes(): Pan[] {
    return this.panes;
  }
  getPedidoActual(): Pedido {
    return this.pedidoActual;
  }
  getPedidos(): Pedido[] {
    return this.pedidos;
  }
  setpedidoName(name: string): void {
    this.pedidoActual.nombre = name;
  }
  sendPedido(pedido: Pedido): void {
    this.pedidoActual = pedido;
    if (this.pedidos === undefined) {
      this.pedidos = [];
    }
    this.pedidos.push(this.pedidoActual);
    console.log(this.pedidos);
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
  precioTotal?: number;
}

export interface Pan {
  tipo: string;
  peso: number;
  precio: number;
  masa: string;
  cantidad: number;
}
