import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthGuardService){
   this.loginForm = new FormGroup({
     email: new FormControl('', Validators.required),
     password: new FormControl('', Validators.required),
 })
  }
  login(){
    this.auth.loginResult = 'success';
    this.router.navigate(['/products']);
  }
}
