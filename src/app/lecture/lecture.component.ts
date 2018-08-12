import { Component, OnInit } from '@angular/core';
import { LectureDto } from '../lectures/lecture.dto';
import { ActivatedRoute } from '@angular/router';
import { LectureService } from './lecture.service';


@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.css']
})
export class LectureComponent implements OnInit {
  public lecture: LectureDto;
  constructor(private route: ActivatedRoute, private lectureService: LectureService) {
    this.lecture = new LectureDto;
  }

  ngOnInit() {
    this.lectureService.getLecture(Number(this.route.snapshot.paramMap.get('id'))).then((lecture: LectureDto) => {
      this.lecture = lecture;
    });
  }

}
