import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'product', component: ProductListComponent},
  {path: 'create-product', component: ProductCreateComponent},
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'update-product/:id', component: ProductUpdateComponent},
  {path: 'details-product/:id', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
