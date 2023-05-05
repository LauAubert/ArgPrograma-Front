import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environments';
import { LocalStorage } from '@ngx-pwa/local-storage';

interface LoginResponse {
  token: string;
  Error: string;
}

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
    private router: Router,
    private localStorage: LocalStorage,
  ) { }

  login() {
    this.http.post<LoginResponse>(environment.apiURL+'login', { user: this.user, password: this.password })
      .subscribe(
        response => {
          if (response.token != null) {
            localStorage.setItem('Authorization', response.token);
            this.backToHome();
          }
          if (response.Error != null) {
            localStorage.removeItem('Authorization');
            alert(JSON.stringify(response));
          }
          console.log(response)
        },
        error => {
          alert('Error de inicio de sesión: '+ error);
        }
      );
  }

  backToHome(){
    window.location.reload();
  }

  ngOnInit(): void {
    if (localStorage.getItem('Authorization') != null) {
      this.router.navigateByUrl('/');
    }
  }
}

