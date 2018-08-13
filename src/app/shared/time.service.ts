import { Injectable } from '@angular/core';
import { Time } from './time.model';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  public static timeToMsec(time: Time): number{
    return ((time.hour*60*60*1000)+(time.minute*60*1000)+(time.second*1000));
  }
  public static msecToTime(msec: number): Time{
    return new Time(
        Math.floor(msec/(1000*60*60)), 
        msec/(1000*60) % 60, 
        msec/(1000) % 60, 
    );
  }
}
