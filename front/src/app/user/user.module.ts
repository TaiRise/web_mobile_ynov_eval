import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [UserEditComponent, SignUpComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
