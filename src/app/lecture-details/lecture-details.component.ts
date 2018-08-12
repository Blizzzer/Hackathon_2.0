import { Component, OnInit } from '@angular/core';
import { LectureDto } from '../lectures/lecture.dto';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { LectureDetailsService } from './lecture-details.service';


@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit {
  public lecture: LectureDto;
  constructor(private route: ActivatedRoute, private lectureDetailsService: LectureDetailsService) {
    this.lecture = new LectureDto;
  }

  ngOnInit() {
    this.lectureDetailsService.getLecture(Number(this.route.snapshot.paramMap.get('id'))).then((lecture: LectureDto) => {
      this.lecture = lecture;
    });
  }

}
