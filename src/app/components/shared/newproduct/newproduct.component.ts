import Swal from 'sweetalert2';
import { Producto, PedidosService } from '../../../services/pedido.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newproduct',
  templateUrl: 'newproduct.component.html',
  styleUrls: ['newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  @Input() product:Producto={
    nombre:'',
    precio:0,
    distribuidor:'',
    _id:''
  };
  @Output() Change: EventEmitter<void>;
  constructor(private _pedidoservice: PedidosService) {
    this.Change = new EventEmitter();
  }
  postChanges(newnombre:string, newprecio:number, newdistribuidor:string){
    let productChanges:Producto ={
      _id: this.product._id,
      nombre: newnombre,
      precio: newprecio,
      distribuidor: newdistribuidor
    }
    this._pedidoservice.postProducto(productChanges)
      .subscribe(data => {
        Swal.fire({
          title: 'Producto añadido',
          background:'#aeaeae'

          })
        this.Update();
      });
  }

  Update():void{
    this.Change.emit();
  }
  ngOnInit(): void {
  }

}
