import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule]
  // providers: [AuthGuard]
})
export class AuthModule {}
