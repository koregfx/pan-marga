import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../services/pedido.service';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css'],
})
export class PanComponent {
  @Input() pan: Producto;
  @Output() panAñadido: EventEmitter<Producto>;

  constructor() {
    this.panAñadido = new EventEmitter();
  }

  addCantidad(): void {
    this.pan.cantidad++;
  }

  lessCantidad(): void {
    this.pan.cantidad--;
    if (this.pan.cantidad < 0) {
      this.pan.cantidad = 0;
    }
  }

  addPan(): void {
    this.panAñadido.emit(this.pan);
  }
}
