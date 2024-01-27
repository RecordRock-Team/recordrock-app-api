import { CalendarService } from './calendar.service';
import { Controller, Get } from '@nestjs/common';

@Controller('/calendar')
export class CalendarController {
  constructor (private readonly calendarService: CalendarService) {}

  @Get('records')
  async getCalendar() {
    return this.calendarService.getCalendar(new Date(2024,0,1));
    
  }
}
