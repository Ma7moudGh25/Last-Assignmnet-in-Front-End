import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../../../shared/interface/auth';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _Http:HttpClient,public router:Router) { }
  register(formData:Auth):Observable<any>{
    return this._Http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,formData);
  }
  login(formData:Auth):Observable<any>{
    return this._Http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,formData);
  }
  logOut(){
    localStorage.removeItem('userToken');
    
    this.router.navigate(['/login'])
  }
}
