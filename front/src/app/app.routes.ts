import { Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';

import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsCreateComponent } from './news/news-create/news-create.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';

import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

import { NotFoundComponent } from './templates/not-found/not-found.component';
// import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    component: NewsListComponent
  },
  {
    path: 'users',
    children: [
      {
        path: 'edit',
        component: UserEditComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'news',
    children: [
      {
        path: 'edit/:id',
        component: NewsEditComponent
      },
      {
        path: 'create',
        component: NewsCreateComponent
      }
    ],
    // canActivate: [AuthGuard]
  },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'notfound' }
];
