import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

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
  private url = 'https://pan-marga-api.herokuapp.com';
  private pedidoActual: Pedido = {};
  private respuesta: any = {};
  constructor(private http: HttpClient) {
    console.log('servicio de Pedidos listo para usar');
    // this.post(`${this.url}/pedido`, this.pedidoActual).subscribe((resp) =>
    // console.log(resp)
    // );
  }
  get(url: string): any {
    return this.http.get(`${this.url}${url}`);
  }
  getByDate(url: string, date: string): any {
    return this.http.get(`${this.url}${url}/${date}`);
  }
  post(url: string, data: any): any {
    return this.http.post(`${this.url}${url}`, data);
  }
  delete(url: string, data: Pedido): any {
    return this.http.delete(`${this.url}${url}/${data._id}`);
  }
  getPanes(): Pan[] {
    return this.panes;
  }
  getPedidoActual(): Pedido {
    return this.pedidoActual;
  }
  resetPedidoActual(): void {
    this.pedidoActual = {};
  }
  setpedidoName(name: string): void {
    this.pedidoActual.nombre = name;
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
  pedidoId?: number;
  _id?: number;
}

export interface Pan {
  tipo: string;
  peso: number;
  precio: number;
  masa: string;
  cantidad: number;
}
