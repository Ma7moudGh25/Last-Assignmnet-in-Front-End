
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  errMsg:string=''
  constructor(private auth:AuthService,private router:Router){

  }
loginForm:FormGroup=new FormGroup({
 
  email:new FormControl(null),
  password:new FormControl(null),
 
})
submitForm() {
  if (this.loginForm.invalid) {
    this.errMsg = 'Please fill all fields correctly';
    return;
  }

  this.auth.login(this.loginForm.value).subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigate(['/home']); 
      localStorage.setItem('userToken',res.token)
    },
    error: (err) => {
      this.errMsg = err.error.message;
    }
  });
}
removeToken(){
  localStorage.removeItem('userToken');
}
}


