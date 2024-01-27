import { Module } from '@nestjs/common';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CenterRepository } from 'src/repositories/calendar.repository';
import { DifficultyPerCenterRepository } from 'src/repositories/difficulty_per_center.repository';
import { TodayClearRepository } from 'src/repositories/today_clear.repository';
import { WorkoutNoteRepository } from 'src/repositories/workout_note.repository';
import { WorkoutTimeRepository } from 'src/repositories/workout_time.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    CenterRepository, 
    DifficultyPerCenterRepository,
    TodayClearRepository,
    WorkoutNoteRepository,
    WorkoutTimeRepository
    ])
  ],
  controllers: [CalendarController],
  providers: [CalendarService, CenterRepository, DifficultyPerCenterRepository, TodayClearRepository, WorkoutNoteRepository, WorkoutTimeRepository],
})
export class CalendarModule {}
