import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder
  ) {}

  registerForm = this.formBuilder.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    address: [''],
    phone: [''],
    dob: [''],
  });

  register() {
    console.log('Worked!!!');
  }
}
