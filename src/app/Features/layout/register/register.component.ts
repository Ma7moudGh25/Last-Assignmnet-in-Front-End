import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errMsg:string=''
  constructor(private auth:AuthService,private router:Router){

  }
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null),
  email:new FormControl(null),
  password:new FormControl(null),
  rePassword:new FormControl(null),
  phone:new FormControl(null),
})
submitForm() {
  if (this.registerForm.invalid) {
    this.errMsg = 'Please fill all fields correctly';
    return;
  }

  this.auth.register(this.registerForm.value).subscribe({
    next: (res) => {
      console.log(res);
      this.router.navigate(['/login']); 
    },
    error: (err) => {
      this.errMsg = err.error.message;
    }
  });
}}
