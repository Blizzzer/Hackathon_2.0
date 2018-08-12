import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Configuration } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class LectureDetailsService {
  private actionUrl: string;
  constructor(private http: HttpClient, private _conf: Configuration) {
    this.actionUrl = _conf.Server;
  }

  public getLecture<LectureDto>(id: number): Promise<LectureDto> {
      return this.http.get<LectureDto>(this.actionUrl + 'lectures/' + id).toPromise();
  }
}
