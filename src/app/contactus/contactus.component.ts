import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {

  contactUsForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(){
      this.contactUsForm = this.formBuilder.group({
        'firstName': [null, Validators.required],
        'lastName': [null, Validators.required],
        'email': [null, Validators.required, Validators.email],
      });
  }

  submit(formData: NgForm){

  }
}
