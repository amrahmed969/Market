import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cards/components/cart/cart.component';
import { AllProductsComponent } from './product/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './product/components/products-details/products-details.component';

const routes: Routes = [
  {path:"products" ,component:AllProductsComponent},
  {path:"detailes/:id",component:ProductsDetailsComponent },
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"products",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
