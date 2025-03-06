import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PaymentService } from '../../../core/services/payment.service';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  constructor(private pay:PaymentService,private cart:CartService){}
checkoutForm:FormGroup=new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null)
});
id:string='';
getCart(){
  this.cart.getCartProduct().subscribe({
    next:(res)=>{
      console.log(res.data._id)
      this.id=res.data._id;
    //  id= res.data._id;
    }
  })
}
noOnInit():void{
// this.submitData(id);
this.getCart();
this.submitData(this.id);
}


submitData(id:string){
  console.log(this.checkoutForm.value);
  this.pay.checkOut(id).subscribe({
    next:(res)=>{
      console.log(res.data);
    }
  });
}
}
