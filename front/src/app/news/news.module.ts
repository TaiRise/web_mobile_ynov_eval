import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsCreateComponent } from './news-create/news-create.component';
import { NewsEditComponent } from './news-edit/news-edit.component';

@NgModule({
  declarations: [NewsListComponent, NewsCreateComponent, NewsEditComponent],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
