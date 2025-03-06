import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Products } from '../../../shared/interface/products';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  id: string='';
  productDetails!: Products; // منتج واحد وليس مصفوفة

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService,private _cart:CartService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];  
    });
  }

  ngOnInit(): void {
    if (this.id) { 
      this.getSpecificProducts();
    }
  }

  getSpecificProducts(): void {
    this.productService.getSpecificProduct(this.id).subscribe({
      next: (res) => {
        console.log(res.data);
        this.productDetails = res.data; 
      },
      error: (err) => {
        console.error('Error fetching product:', err);
      }
    });
  }
addProduct(id:string){
  this._cart.addProductToCart(id).subscribe({
    next:(res)=>{console.log(res)}
  })
}
}
