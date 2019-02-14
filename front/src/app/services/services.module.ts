import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [],
  providers: [UserService]
})
export class ServiceModule {}
