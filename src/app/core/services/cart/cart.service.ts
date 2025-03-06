import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _http:HttpClient) { }
  headers:any={
    token:localStorage.getItem('userToken')
  }
  addProductToCart(id:string):Observable<any>{
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        "productId":id
      },
      {
        headers:this.headers
      }
    );
  }
  getCartProduct():Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers:this.headers
      }
    );
  }
  updateProductInCart(id:string,count:number):Observable<any>{
    return this._http.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        count:count
      },
      {
        headers:this.headers
      }
    );
  }
  deleteProduct(id:string):Observable<any>{
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers:this.headers
      }
    );
  }
  clearCart():Observable<any>{
    return this._http.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
      {
        headers:this.headers
      }
    );
  }
}
