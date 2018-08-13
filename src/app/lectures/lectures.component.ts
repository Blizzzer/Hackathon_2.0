import { Component, OnInit } from '@angular/core';
import { LecturesService } from './lectures.service';
import { LectureDto } from '../dto/lecture.dto';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})
export class LecturesComponent implements OnInit {
  private lectures: LectureDto[];
  constructor(private lecturesService: LecturesService) { }

  ngOnInit() {
    this.update();
  }

  update(){
    this.lecturesService.getLectures().subscribe((lectures: LectureDto[]) => {
      this.lectures = lectures;
    })
  }


}
