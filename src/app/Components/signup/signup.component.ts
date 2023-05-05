import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  type:string ="password";
isText: boolean = false;
eyeIcon: string = "fa-eye-slash";
SignupForm!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(): void {
    this.SignupForm = this.fb.group({
      firstname: ['',Validators.required],
      lastname : ['',Validators.required],
      email    : ['',Validators.required],
      username : ['',Validators.required],
      password : ['',Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

}
