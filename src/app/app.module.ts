import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureItemComponent } from './lectures/lecture-item/lecture-item.component';
import { LectureFormComponent } from './lectures/lecture-form/lecture-form.component';
import { LecturesService } from './lectures/lectures.service';
import { Configuration } from './config/constants';

@NgModule({
  declarations: [
    AppComponent,
    LecturesComponent,
    LectureItemComponent,
    LectureFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [LecturesService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
