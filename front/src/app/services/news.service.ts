import { Injectable } from '@angular/core';

import { News } from '../models/news.model';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable()
export class NewsService extends BaseService {
  getAll = (): Observable<News[]> => {
    return this.get(`${environment.apiUrl}news`, true) as Observable<News[]>;
  };

  save = (news: News): Observable<News> => {
    return this.post(`${environment.apiUrl}news`, news, true) as Observable<
      News
    >;
  };
}
