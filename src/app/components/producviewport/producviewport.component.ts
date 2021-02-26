import { Router } from '@angular/router';
import { Producto, PedidosService } from './../../services/pedido.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producviewport',
  templateUrl: './producviewport.component.html',
  styleUrls: ['./producviewport.component.css']
})
export class ProducviewportComponent implements OnInit {

  productos: Producto[];
  panEutimio: Producto[] = [];
  panIryna: Producto[] = [];
  bolleriaEutimio: Producto[] = [];
  bolleriaIryna: Producto[] = [];
  otros: Producto[] = [];

  constructor(private _pedidosService: PedidosService, private router: Router) {
    this.Update();

  }
  navigateToPanEutimio(): void {
    this.router
      .navigate(['productviewport'], { fragment: 'panEutimio' })
      .then((res) => {
        let testElement = document.getElementById('panEutimio');
        if (testElement != undefined) testElement.scrollIntoView(true);
      });
  }
  navigateToPanIryna(): void {
    this.router
      .navigate(['productviewport'], { fragment: 'panIrina' })
      .then((res) => {
        let testElement = document.getElementById('panIrina');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  navigateTobolloEutimio(): void {
    this.router
      .navigate(['productviewport'], { fragment: 'bolloEutimio' })
      .then((res) => {
        let testElement = document.getElementById('bolloEutimio');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  navigateTobolloIryna(): void {
    this.router
      .navigate(['productviewport'], { fragment: 'bolloIryna' })
      .then((res) => {
        let testElement = document.getElementById('bolloIryna');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  navigateToOtros(): void {
    this.router
      .navigate(['productviewport'], { fragment: 'Otros' })
      .then((res) => {
        let testElement = document.getElementById('Otros');
        if (testElement != undefined) testElement.scrollIntoView();
      });
  }
  Update(){
    this._pedidosService.getProductos().subscribe((data) => {
      this.panEutimio = [];
      this.panIryna = [];
      this.bolleriaEutimio = [];
      this.bolleriaIryna = [];
      this.otros = [];
      this.productos = data.productos;
      this.productos.forEach((e) => {
        e.cantidad = 0;
        switch (e.distribuidor) {
          case 'Pan Eutimio':
            this.panEutimio.push({ ...e });
            break;
          case 'Pan Iryna':
            this.panIryna.push({ ...e });
            break;
          case 'Bolleria Eutimio':
            this.bolleriaEutimio.push({ ...e });
            break;
          case 'Bolleria Iryna':
            this.bolleriaIryna.push({ ...e });
            break;
          case 'Otros':
            this.otros.push({ ...e });
            break;
        }
        const conjunto = {};
      });
    });
  }
  ngOnInit(): void {
  }

}
