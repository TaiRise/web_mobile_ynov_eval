import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

import { Auth } from '../../models/auth.model';
import { Login } from '../../models/login.model';

import { Router } from '@angular/router';
import * as jwt from 'jwt-decode';
import { UserLog } from '../../models/user-log.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
  login: Login = new Login();

  emailValidator: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordValidator: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(/^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\da-zA-Z]).*$/)
  ]);

  ngOnInit() {}

  get formErrors(): boolean {
    return this.emailValidator.errors || this.passwordValidator.errors
      ? true
      : false;
  }

  onSubmit = (form: any, e: any): void => {
    this.authService.auth(this.login).subscribe(
      data => {
        if (data.success) {
          try {
            const token = data.token;
            const decoded = jwt(token);
            if (decoded) {
              const user = new UserLog();
              user.userID = decoded.id;
              (user.userEmail = decoded.login), (user.token = token);
              this.authService.updateUser(user);

              this.snackBar.open('Vous êtes connecté', 'OK', {
                duration: 3000
              });
              this.router.navigate(['home']);
            }
          } catch (error) {
            this.snackBar.open('Token Invalid', 'OK', {
              duration: 3000
            });
          }
        }
      },
      error => {
        if (error as Auth) {
          this.snackBar.open('Login / mot de pass invalid', 'OK', {
            duration: 3000
          });
        } else {
          console.log(error);
        }
      }
    );
  };
}
