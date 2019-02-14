import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatInputModule,
  MatExpansionModule,
  MatCardModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatExpansionModule,
  MatCardModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@ NgModule({
  declarations: [],
  imports: materialModules,
  exports: materialModules,
  providers: []
})
export class MaterialModule {}
