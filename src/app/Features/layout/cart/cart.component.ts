import { RouterLink } from '@angular/router';
import { Products } from '../../../shared/interface/products';
import { CartService } from './../../../core/services/cart/cart.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cart_items:any;
  productList:any[]=[];
  headers:any={
    token:localStorage.getItem('userToken')
  }
constructor(private _cart:CartService){}
ngOnInit(){
  this.getCartProductItems()
  
}
getCartProductItems()
{
  this._cart.getCartProduct().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.cart_items=res.data;
      this.productList=this.cart_items.products;
    }
  })
}
removeCartProductItem(id:string){
  this._cart.deleteProduct(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.cart_items=res.data;
      this.productList=this.cart_items.products;
    }
  })
}
removeAllProducts(){
  this._cart.clearCart().subscribe({
    next:(res)=>{
      console.log(res);
      this.cart_items=res.data;
      this.productList=this.cart_items.products;
    }
  })
}
}
