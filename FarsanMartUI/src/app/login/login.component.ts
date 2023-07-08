import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder
  ) {}

  loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  login() {
    const user = this.loginForm.value;
    console.log(user);
    // this.authService.login(user);
  }
}
