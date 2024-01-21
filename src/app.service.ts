import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCalendar() {
    return [
      {
        center_fullname: '더클라임 사당점',
        clear_record: '[ {보라:3}, {남색:4} ]',
        daily_memo: '행클했다',
        day: 22,
        workout_time_hour: 3,
        workout_time_minute: 25,
      },
      {
        center_fullname: '더클라임 사당점',
        clear_record: '[ {보라:3}, {남색:7} ]',
        daily_memo: '빵클했다',
        day: 22,
        workout_time_hour: 3,
        workout_time_minute: 25,
      },
    ];
  }
}
