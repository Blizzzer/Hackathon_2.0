import { Component, OnInit } from '@angular/core';
import { LectureDto } from '../lecture.dto';

@Component({
  selector: 'app-lecture-form',
  templateUrl: './lecture-form.component.html',
  styleUrls: ['./lecture-form.component.css']
})
export class LectureFormComponent implements OnInit {
  public lecture: LectureDto;
  constructor() {}

  ngOnInit() {
    this.lecture = new LectureDto;
  }

  onSave(){
    console.log(typeof this.lecture.finishDate);
    console.log(this.lecture);
  }

}
