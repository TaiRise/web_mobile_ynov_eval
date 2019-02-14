import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserEditComponent } from './user-edit/user-edit.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../material.module';
import { ServiceModule } from '../services/services.module';

@NgModule({
  declarations: [UserEditComponent, SignUpComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceModule
  ]
})
export class UserModule {}
