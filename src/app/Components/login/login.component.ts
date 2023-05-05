import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
type:string ="password";
isText: boolean = false;
eyeIcon: string = "fa-eye-slash";
loginForm! : FormGroup;

constructor(private fb: FormBuilder){ }

ngOnInit():void{
  this.loginForm = this.fb.group({
    username :['',Validators.required],
    password :['',Validators.required]
  })}

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}

OnSubmit(){
if(this.loginForm.valid){
console.log(this.loginForm.value)
}
else{
  console.log("Form is invalid")
  alert("Your credentials are not entered or invalid")
}}

private validateAllFormFields(formGroup:FormGroup){
   Object.keys(formGroup.controls).forEach(field=>{
    const control = formGroup.get(field);
    if(control instanceof FormGroup){
      this.validateAllFormFields(control)
    }
   })
}

}
