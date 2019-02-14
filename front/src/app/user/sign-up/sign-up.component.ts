import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService) {}
  user: User = new User();

  nameValidator: FormControl = new FormControl('', [Validators.required]);

  emailValidator: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordValidator: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern(/^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[^\da-zA-Z]).*$/)
  ]);

  confirmPasswordValidator: FormControl = new FormControl('', [
    Validators.required,
    (control: FormControl) => Validators.pattern(this.user.password)(control)
  ]);

  ngOnInit() {
    // this.userService.getAll().subscribe(console.log);
  }

  get formErros(): boolean {
    return this.emailValidator.errors ||
      this.passwordValidator.errors ||
      this.confirmPasswordValidator.errors ||
      this.nameValidator.errors
      ? true
      : false;
  }

  onSubmit = (form: any, e: any): void => {
    console.log(this.emailValidator);
    this.userService.save(this.user).subscribe(console.log);
  };
}
