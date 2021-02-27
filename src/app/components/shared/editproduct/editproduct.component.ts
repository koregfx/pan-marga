import { Producto, PedidosService } from './../../../services/pedido.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  @Input() product:Producto;
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
    this._pedidoservice.changeProducto(this.product._id,productChanges)
      .subscribe(data => {
        Swal.fire({
        title: 'Cambio Realizado',
        background:'#aeaeae'

        })
        this.Update();
      });


  }
  deleteProduct(){
    Swal.fire({
      title: 'Estas Segura Margarita?',
      text: `Estas segura de borrar ${this.product.nombre}`,
      showConfirmButton: true,
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      background:'#aeaeae',
    }
    ).then(resp=>{
      if(resp.isConfirmed)
      {
        this._pedidoservice.deleteProducto(this.product._id)
        .subscribe(data => {
          this.Update();
        });

      }
    })
  }

  Update():void{
    this.Change.emit();
  }
  ngOnInit(): void {
  }

}
