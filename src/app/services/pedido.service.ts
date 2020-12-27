import { Injectable } from '@angular/core';
@Injectable()
export class PedidosService {
    private panes: any[] = [
        {
            tipo: 'bocadillo',
            peso: 90,
            precio: 0.45,
            masa: 'viena'
        },
        {
            tipo: 'bocadillo',
            peso: 120,
            precio: 0.55,
            masa: 'viena'
        }
    ]
    constructor() {
        console.log("servicio de Pedidos listo para usar");
    }
}