import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService) {
  }

  ngOnInit(){
      this.loginForm = this.formBuilder.group({
        'email': [null, Validators.required, Validators.email],
        'password': [null, Validators.required]
      });
  }

  login(formData: NgForm){
    return this.auth.login(formData)
    .subscribe(user =>
      console.log(user));
  }
}
