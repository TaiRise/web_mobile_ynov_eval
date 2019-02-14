import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class UserService extends BaseService {
  getAll = (): Observable<User[]> => {
    return this.get(`${environment.apiUrl}users`) as Observable<User[]>;
  };

  save = (user: User): Observable<User> => {
    return this.post(`${environment.apiUrl}users`, user) as Observable<User>;
  };
}
