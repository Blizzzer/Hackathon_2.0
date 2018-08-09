import { Component, OnInit, Input } from '@angular/core';
import { LectureDto } from './lecture.dto'

@Component({
  selector: 'app-lecture-item',
  templateUrl: './lecture-item.component.html',
  styleUrls: ['./lecture-item.component.css']
})
export class LectureItemComponent implements OnInit {

  @Input() lecture: LectureDto;

  constructor() { }

  ngOnInit() {
  }

}
