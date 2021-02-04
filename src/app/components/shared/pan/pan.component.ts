import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pan } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css']
})
export class PanComponent {

  @Input() pan: Pan;
  @Output() panAñadido: EventEmitter<Pan>;


  constructor() {
    this.panAñadido = new EventEmitter();
  }


  addCantidad(): void {
    this.pan.cantidad++;
  }

  lessCantidad(): void {
    this.pan.cantidad--;
  }

  addPan(): void {
    this.panAñadido.emit(this.pan);
  }
}
