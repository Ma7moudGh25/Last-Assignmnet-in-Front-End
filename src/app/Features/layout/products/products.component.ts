import { Component } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { Products } from '../../../shared/interface/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
constructor(private product:ProductsService,private _cart:CartService){

}
ngOnInit():void{
this.getAllProducts();
}
productList!:Products[];
getAllProducts(){
  this.product.getProduct().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.productList=res.data;
    }
  })
}
addProduct(id:string){
  this._cart.addProductToCart(id).subscribe({
    next:(res)=>{console.log(res)}
  })
}
}
