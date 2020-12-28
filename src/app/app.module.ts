import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { PedidosService } from './services/pedido.service';


// Routes
import { app_routing } from './app.routes';


// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidosComponent,
    HomeComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    PedidosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
