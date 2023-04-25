import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

interface LoginResponse {access_token: string;}

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['../base-modal/base-modal.component.css']
})
export class LoginModalComponent {
  // login(){}
  // backToHome(){}

  user = '';
  password = '';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router,
  ) { }

  login() {
    this.http.post<LoginResponse>('/api/login', { user: this.user, password: this.password })
      .subscribe(
        response => {
          localStorage.setItem('access_token', response.access_token);
          this.backToHome();
        },
        error => {
          console.log('Error de inicio de sesión:', error);
        }
      );
  }

  isUserAuthenticated() {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
  backToHome(){
    this.router.navigateByUrl('/');
  }
}

