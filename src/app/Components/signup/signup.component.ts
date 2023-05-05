import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/app/Helpers/Validate';
import { AuthService } from 'src/app/Services/auth.service';

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
  constructor(private fb:FormBuilder,private auth:AuthService){}

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

  onSignup(){
    if(this.SignupForm.valid){
      console.log(this.SignupForm.value)
      this.auth.login(this.SignupForm.value)
.subscribe({
  next:(res)=>{
    alert(res.message)
  },
  error:(err)=>{
    alert(err?.error.message)
  }
})
      }
      else{
        console.log("Form is invalid")
        ValidateForm.validateAllFormFields(this.SignupForm);
        alert("Your credentials are empty or invalid")
      }
  }

}
