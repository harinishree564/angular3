import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myReactiveForm:FormGroup | any;
  
  constructor() {}

ngOnInit():void{
  this.myReactiveForm=new FormGroup({
    'fname':new FormControl(null),
    'lname' : new FormControl(null),
    'passw' : new FormControl(null),
    'email' :  new FormControl(null, [Validators.email,Validators.required])
  });
   onsubmit() {
    console.log(this.myReactiveForm);
   }
}
}