import { Routes } from '@angular/router';

import { MainLayoutComponent } from './Features/layout/main-layout/main-layout.component';
import { LoginComponent } from './Features/layout/login/login.component';
import { RegisterComponent } from './Features/layout/register/register.component';
import { HomeComponent } from './Features/layout/home/home.component';
import { CartComponent } from './Features/layout/cart/cart.component';
import { ProductsComponent } from './Features/layout/products/products.component';
import { BrandsComponent } from './Features/layout/brands/brands.component';
import { CategoriesComponent } from './Features/layout/categories/categories.component';
import { ProductDetailsComponent } from './Features/layout/product-details/product-details.component';
import { CheckoutComponent } from './Features/layout/checkout/checkout.component';

export const routes: Routes = [

  {path:'',component:MainLayoutComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'cart',component:CartComponent,title:'Cart'},
    {path:'products',component:ProductsComponent,title:'Products'},
    {path:'brands',component:BrandsComponent,title:'Brands'},
    {path:'categories',component:CategoriesComponent,title:'Categories'},
    {path:'productDetails/:id',component:ProductDetailsComponent,title:'Product Details'},
    {path:'login',component:LoginComponent,title:'Sign in'},
    {path:'signup',component:RegisterComponent,title:'Sign up'},
    {path:'checkout',component:CheckoutComponent,title:'Check Out'},
  ]}
];
