import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http:HttpClient) { }
  headers:any={
    token:localStorage.getItem('userToken')
  }
  checkOut(id:string):Observable<any>{
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        shippingAddress:FormData
          },    
    {
      headers:this.headers
    }
  );
  }
}
