import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { LecturesComponent } from '../lectures/lectures.component';

const routes: Routes = [
  { path: '', redirectTo: '/lectures', pathMatch: 'full' },
  { path: 'lectures', component: LecturesComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class RoutingModule { }
