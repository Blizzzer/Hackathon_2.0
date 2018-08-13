import { Component, OnInit, Input } from '@angular/core';
import { LecturesService } from '../lectures.service';
import { LectureDto } from '../../dto/lecture.dto';
import { Router } from '@angular/router';
import { TimeService } from '../../shared/time.service';

@Component({
  selector: 'app-lectures-list',
  templateUrl: './lectures-list.component.html',
  styleUrls: ['./lectures-list.component.css']
})
export class LecturesListComponent implements OnInit {
  @Input() lectures: LectureDto[];
  constructor(private router: Router) {
   }

  ngOnInit() {
  }
  
  onClick(lecture: LectureDto) {
      this.router.navigate(['/lecture/' + lecture.id]);

  }

  getStartHour(lecture: LectureDto){
    return TimeService.msecToTime(Number(lecture.startHour));
  }

  getFinishHour(lecture: LectureDto){
    return TimeService.msecToTime(Number(lecture.finishHour));
  }

}
