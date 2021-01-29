import { Component } from '@angular/core';
import { Pan, Pedido } from './services/pedido.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pan-marga';
  nombre = 'alfonso';
  productos: Pan[] = [
    {
      tipo: 'bocadillo',
      peso: 90,
      precio: 0.45,
      masa: 'viena',
      cantidad: 2
    }
  ];
  pedido: Pedido;
  constructor() {
    console.log(this.nombre);
  }
}
