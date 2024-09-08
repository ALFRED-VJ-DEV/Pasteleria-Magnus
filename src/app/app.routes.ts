import { Routes } from '@angular/router';
import { HomeComponent } from './Views/Components/home/home.component';
import { SaboresComponent } from './Views/Components/pages/sabores/sabores.component';
import { PreciosComponent } from './Views/Components/pages/precios/precios.component';
import { ProductosComponent } from './Views/Components/pages/productos/productos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  {path:'sabores', component: SaboresComponent},
  {path: 'precios', component: PreciosComponent},
  {path:'productos', component: ProductosComponent}
];
