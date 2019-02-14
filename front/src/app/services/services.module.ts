import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { CommentService } from './comment.service';
import { NewsService } from './news.service';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [],
  providers: [UserService, AuthService, CommentService, NewsService]
})
export class ServiceModule {}
