// login.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],
  animations: [
    trigger('moveUp', [
      transition(':enter', [
        style({ transform: 'translateY(60px)' }),
        animate('0.5s', style({ transform: 'translateY(0)' }))
      ])
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  loginError: boolean = false;
  loading: boolean = false;
  loginChecked = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private tokenService: TokenService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginChecked = false;
    this.checkuserLoged();
  }

  ngAfterViewInit(): void {
    this.spinnerPlay();
  }

  checkuserLoged() {
    this.authService.getUser().subscribe({
      next: (resp: any) => {
        this.loginChecked = true;
        if (resp._id) {
          this.router.navigate(['/dashboard']);
        } else if (resp.statusCode === 401) {
          if (localStorage.getItem('refresh_token')) {
            this.router.navigate(['/list']);
          } else {
            this.loginChecked = true;
          }
        } else if (resp.statusCode === 403) {
          this.loginChecked = true;
        }
      },
      error: (resp:any) => {
        if (resp.status === 401) {
          if (localStorage.getItem('refresh_token')) {
            this.router.navigate(['/list']);
          } else {
            this.loginChecked = true;
          }
        } else if (resp.status === 403) {
          this.loginChecked = true; // Casuística por si queremos manejar los errores de autenticación de forma específica en un futuro
        } else {
          this.loginChecked = true;
        }
      },
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.spinnerPlay();
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response: any) => {
          // Manejo de la respuesta exitosa
          this.tokenService.setAccessToken(response.access_token);
          this.tokenService.setRefreshToken(response.refresh_token);

          this.loading = false;
          this.router.navigate(['/list']);
        },
        error: (error: any) => {
          // Manejo de errores
          console.error('Error de autenticación', error);
          this.loginForm.controls['password'].setErrors({
            invalidCredentials: true,
          });
          this.loginError = true; // Muestra un mensaje de error si tienes uno en tu template
          this.loading = false;
        },
      });
    }
  }

  spinnerPlay() {
    requestAnimationFrame(() => {
      const paths = document.querySelectorAll(".svg-container path") as NodeListOf<SVGPathElement>;
  
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.transition = path.style.webkitTransition = "none";
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = `${length}`;
      });
    });
  }
  
  
}
