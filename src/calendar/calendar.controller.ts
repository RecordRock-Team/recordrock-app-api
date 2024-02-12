import { CalendarService } from './calendar.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/calendar')
export class CalendarController {
  constructor (private readonly calendarService: CalendarService) { }

  // string으로 들어옴, string to Date로 바꿔서 getCalendar에 보내자
  @Get('records')
  async getCalendar() {

    return this.calendarService.getCalendar(new Date(2024,0,1));
  }
}
