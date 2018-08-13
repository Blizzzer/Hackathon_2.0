import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LecturesComponent } from './lectures/lectures.component';
import { LectureFormComponent } from './lectures/lecture-form/lecture-form.component';
import { LecturesService } from './lectures/lectures.service';
import { Configuration } from './config/constants';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule } from './routing/routing.module';
import { LecturesListComponent } from './lectures/lectures-list/lectures-list.component';
import { FormsModule } from '@angular/forms';
import { LectureComponent } from './lecture/lecture.component';
import { LectureDetailsComponent } from './lecture/lecture-details/lecture-details.component';
import { QuestionsListComponent } from './lecture/questions-list/questions-list.component';
import { MsecToHourPipe } from './shared/msecToHour.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LecturesComponent,
    LectureFormComponent,
    NavbarComponent,
    LecturesListComponent,
    LectureComponent,
    LectureDetailsComponent,
    QuestionsListComponent,
    MsecToHourPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [LecturesService, Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
