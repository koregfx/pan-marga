import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class PedidosService {
  private panes: Producto[] = [
    {
      nombre: 'bocadillo pequeño',
      precio: 0.45,
      cantidad: 0,
    },
    {
      nombre: 'bocadillo grande',
      precio: 0.55,
      cantidad: 0,
    },
    {
      nombre: 'candeal 230gr',
      precio: 0.75,
      cantidad: 0,
    },
    {
      nombre: 'viena 230gr',
      precio: 0.75,
      cantidad: 0,
    },
    {
      nombre: 'baguette',
      precio: 0.75,
      cantidad: 0,
    },
    {
      nombre: 'integral 200gr',
      precio: 0.75,
      cantidad: 0,
    },
    {
      nombre: 'candeal 300gr',
      precio: 1.0,
      cantidad: 0,
    },
    {
      nombre: 'viena 300gr',
      precio: 1.0,
      cantidad: 0,
    },
    {
      nombre: 'bazo 300gr',
      precio: 1.0,
      cantidad: 0,
    },
    {
      nombre: 'gallego 300gr',
      precio: 1.0,
      cantidad: 0,
    },
    {
      nombre: 'candeal 450gr',
      precio: 1.3,
      cantidad: 0,
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
  getPanes(): Producto[] {
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
  productos?: Producto[];
  precioTotal?: number;
  pedidoId?: number;
  _id?: number;
}

export interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
}
