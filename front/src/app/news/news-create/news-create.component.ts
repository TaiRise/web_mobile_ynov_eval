import { Component, OnInit } from '@angular/core';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {
  constructor() {}
  news: News = new News();

  ngOnInit() {}
}
