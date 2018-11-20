import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
{ path: 'dashboard', component: ProductsComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'admin', component: AdminComponent },
{ path: '', component: ProductsComponent },
{ path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
