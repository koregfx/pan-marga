import { RouterModule, Routes } from "@angular/router";
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { HomeComponent } from './components/home/home.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pedidos', component: PedidosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot((app_routes));
