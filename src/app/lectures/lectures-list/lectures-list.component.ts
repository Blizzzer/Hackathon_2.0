import { Component, OnInit } from '@angular/core';
import { LecturesService } from '../lectures.service';
import { LectureDto } from '../lecture.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lectures-list',
  templateUrl: './lectures-list.component.html',
  styleUrls: ['./lectures-list.component.css']
})
export class LecturesListComponent implements OnInit {
  private lectures: LectureDto[];
  constructor(private lecturesService: LecturesService, private router: Router) {
   }

  ngOnInit() {
    this.lecturesService.getLectures().subscribe((lectures: LectureDto[]) => {
      this.lectures = lectures;
    })
  }
  
  onClick(lecture: LectureDto) {
      this.router.navigate(['/lecture/' + lecture.id]);

  }


}
