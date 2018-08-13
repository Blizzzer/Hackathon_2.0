import { Pipe, PipeTransform } from '@angular/core';
import { TimeService } from './time.service';

@Pipe({name: 'msecToHour'})
export class MsecToHourPipe implements PipeTransform {
  transform(value: number): string {
    let time = TimeService.msecToTime(value);
    if(time.minute<10){
        return String(time.hour) + ':0' + String(time.minute);
    } else {
        return String(time.hour) + ':' + String(time.minute);
    }
    
  }
}