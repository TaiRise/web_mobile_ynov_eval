import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MaterialModule } from './material.module';
import { TemplatesModule } from './templates/templates.module';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

@ NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    TemplatesModule,
    NewsModule,
    UserModule,
    AuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
