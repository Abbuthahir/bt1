import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 loginForm!: FormGroup;
 signupForm!: FormGroup;
 signupSuccess: boolean = false;


 constructor(private formBuilder: FormBuilder){
  this.loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
})
this.signupForm = new FormGroup({
  username: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  gender: new FormControl('', Validators.required),
  dob: new FormControl('', Validators.required)
})
 }

 ngOnInit() {
  this.signupForm = this.formBuilder.group({
    username: [''],
    gender: [''],
    dob: [''],
    email: [''],
    password: ['']
  });
 }

 onSubmit() {
  const formValues = this.signupForm.value;
  const existingData = localStorage.getItem('signupDetails');
  let signupDetails = existingData ? JSON.parse(existingData) : [];
  signupDetails.push(formValues);
  localStorage.setItem('signupDetails', JSON.stringify(signupDetails));
  console.log(formValues);
  this.signupSuccess = true;
}
}
