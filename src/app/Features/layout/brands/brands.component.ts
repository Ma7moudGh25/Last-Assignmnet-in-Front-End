import { Component, signal, WritableSignal } from '@angular/core';
import { BrandsService } from '../../../core/services/brands.service';
import { Brand } from '../../../shared/interface/brand';

@Component({
  selector: 'app-brands',
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {
constructor(private brands:BrandsService){

}
ngOnInit(){
  this.getAllBrands()
}
Brands:Brand[]=[];
getAllBrands(){
this.brands.getBrands().subscribe({
  next:(res)=>{
    console.log(res.data);
    this.Brands=res.data;
    
  },
})
}

}
