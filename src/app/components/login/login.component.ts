import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /*
  email: any;
  password: any;
  loggedIn = false;

  constructor(
    private http: HttpClient,
    private authenticationS: AuthenticationService,
    private router: Router
  ) {}
  ngOnInit(): void {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  onSubmit() {
    const url = '//localhost:8080/person/login';
    const body = { email: this.email, password: this.password };
    this.http.post(url, body).subscribe(
      response => {
        this.loggedIn = true;
        this.router.navigate(['/home']);
        localStorage.setItem('loggedIn', 'true');
      },
      error => {
        alert('rechazado');
        this.router.navigate(['/login']);
      }
    );
  }

  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/home']);
  }
}

/*@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  async onSubmit() {
    const url = 'http//localhost:8080/person/login';
    const body = { email: this.email, password: this.password };

    try {
      const response = await this.http.post(url, body).toPromise();
      this.loggedIn = true;
      this.router.navigate(['/home']);
      localStorage.setItem('loggedIn', 'true');
    } catch (error) {
      alert('rechazado');
      this.router.navigate(['/login']);
    }
  }
*/
  //nueva config
  email: string;
  password: string;
  loggedIn = false;

  constructor(private httpClient: HttpClient, private router: Router) {}
  ngOnInit(): void {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  /*onSubmit() {
    const url = 'http://localhost:8080/'; // Ruta al controlador en el backend que maneja la solicitud POST
    const body = { email: this.email, password: this.password }; // Datos del formulario

    this.authenticationS.login(url, body).subscribe(
      data => {
        this.loggedIn = true;
        this.router.navigate(['/home']);
        localStorage.setItem('loggedIn', 'true');
      },
      error => {
        alert('Ingreso Correcto');
        this.router.navigate(['/home']);
      }
    );
  }
 */
  login() {
    const body = { email: this.email, password: this.password };

    if (this.email == 'broggi4@hotmail.com' && this.password == 'emibroggi22') {
      this.loggedIn = true;
      this.router.navigate(['/home']);
      alert('Iniciaste sesion');
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}
