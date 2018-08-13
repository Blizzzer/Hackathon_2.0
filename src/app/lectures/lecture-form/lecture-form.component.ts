import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LectureDto } from '../../dto/lecture.dto';
import { Time } from '../../shared/time.model';
import { TimeService } from '../../shared/time.service';
import { LecturesService } from '../lectures.service';

@Component({
  selector: 'app-lecture-form',
  templateUrl: './lecture-form.component.html',
  styleUrls: ['./lecture-form.component.css']
})
export class LectureFormComponent implements OnInit {
  public lecture: LectureDto;
  public startTime: Time;
  public finishTime: Time;
  @Output() update = new EventEmitter();
  constructor(private lecturesService: LecturesService) {}

  ngOnInit() {
    this.lecture = new LectureDto;
    this.startTime = new Time(12, 0, 0);
    this.finishTime = new Time(14, 0, 0);
  }

  onSave(){
    this.lecture.startHour = String(TimeService.timeToMsec(this.startTime));
    this.lecture.finishHour = String(TimeService.timeToMsec(this.finishTime));
    this.lecturesService.postLecture(this.lecture).then(()=> {
      this.update.emit();
    });
  }

}
