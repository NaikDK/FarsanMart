import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isAuthentic = false;

  constructor(private http: HttpClient, private router: Router) {}

  register(user: any) {
    this.http.post('http://localhost:3000/auth/register', user).subscribe({
      next: (res) => {
        this.router.navigate(['login']);
      },
    });
  }

  login(user: any) {
    this.http.post('http://localhost:3000/auth/login', user).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res['idToken']['token']);
        this.isAuthentic = true;
        console.log(this.isAuthentic);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  logout() {
    this.isAuthentic = false;
    this.router.navigate(['login']);
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    return this.isAuthentic;
  }
}
