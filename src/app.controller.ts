import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  getHello(): string {
    console.log("들어왔다~");
    return this.appService.getHello();
  }

  @Get('/calendar')
  async getCalendar() {
    const calendarInfo = [
      {
        "center_fullname": "더클라임 사당점", 
        "clear_record": "[ {보라:3}, {남색:4} ]",
        "daily_memo": "행클했다"
      },
      {
        "center_fullname": "더클라임 사당점", 
        "clear_record": "[ {보라:3}, {남색:7} ]",
        "daily_memo": "빵클했다"
      }
    ]
    return calendarInfo;
  }
}
