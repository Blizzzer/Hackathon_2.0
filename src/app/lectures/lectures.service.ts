import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Configuration } from '../config/constants';
import { Observable } from 'rxjs';
import { LectureDto } from '../dto/lecture.dto';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _conf: Configuration) {
    this.actionUrl = _conf.Server;
  }

  public getLectures<LectureDto>(): Observable<LectureDto> {
      return this.http.get<LectureDto>(this.actionUrl + 'lectures');
  }

  public postLecture<LectureDto>(lecture: LectureDto): Promise<LectureDto> {
      return this.http.post<LectureDto>(this.actionUrl + 'lectures', lecture).toPromise();
  } 
}
