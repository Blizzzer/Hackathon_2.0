import { Component, OnInit, Input } from '@angular/core';
import { LectureDto } from '../../dto/lecture.dto';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {
  @Input() public lecture: LectureDto;
  public isListCollapsed = true;
  constructor() { }

  ngOnInit() {
  }

}
