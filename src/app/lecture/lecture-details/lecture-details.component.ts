import { Component, OnInit, Input } from '@angular/core';
import { LectureDto } from '../../dto/lecture.dto';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.css']
})
export class LectureDetailsComponent implements OnInit {
  @Input() public lecture: LectureDto;
  public isDetailsCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
