import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../user';
import { AuthenticationService } from '../authentication.service';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService) {
  }

  ngOnInit(){
      this.signUpForm = this.formBuilder.group({
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'email': [null, Validators.required, Validators.email],
        'password': [null, Validators.required]
      });
  }

  signUp(formData: NgForm){
    return this.auth.signUp(formData)
    .subscribe(user =>
      console.log(user));
  }
}
