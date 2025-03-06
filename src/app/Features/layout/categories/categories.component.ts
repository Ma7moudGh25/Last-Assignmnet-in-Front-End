import { resolve } from 'node:path';
import { Component } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories.service';
import { Category } from '../../../shared/interface/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
constructor(private cat:CategoriesService){}
cats:Category[]=[];
getAllCategories()
{
  this.cat.getCategories().subscribe({
    next:(res)=>{
      console.log(res.data);
      this.cats=res.data;
    }
  })
}
ngOnInit(){
this.getAllCategories();
}

}
