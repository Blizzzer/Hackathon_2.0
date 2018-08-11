import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureFormComponent } from './lectures/lecture-form/lecture-form.component';
import { LecturesService } from './lectures/lectures.service';
import { Configuration } from './config/constants';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LecturesComponent,
    LectureFormComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
  ],
  providers: [LecturesService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
