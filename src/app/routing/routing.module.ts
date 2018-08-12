import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LecturesComponent } from '../lectures/lectures.component';
import { LectureDetailsComponent } from '../lecture-details/lecture-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/lectures', pathMatch: 'full' },
  { path: 'lectures', component: LecturesComponent },
  { path: 'lecture/:id', component: LectureDetailsComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule { }
