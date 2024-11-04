import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AdminProductListComponent } from './admin-product-list/admin-product-list.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductsListComponent},
  {path:"admin", component:AdminProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
