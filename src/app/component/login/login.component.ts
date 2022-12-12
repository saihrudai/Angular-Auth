import { Component, OnInit, NgZone } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'; 
import {Router} from '@angular/router' ; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   loginForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router, 
    private ngZone: NgZone
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''], 
      password: ['']
    })
  } 

  onSubmit() {
    
  }

}
