import { WorkoutTimeRepository } from 'src/repositories/workout_time.repository';
import { DifficultyPerCenterRepository } from './../repositories/difficulty_per_center.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Center } from 'src/entities/Center';
import { EntityManager } from 'typeorm';
import { CalendarDto } from './dto/calendar.dto';
import { DifficultyPerCenter } from 'src/entities/DifficultyPerCenter';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { WorkoutTime } from 'src/entities/WorkoutTime';
import { TodayClear } from 'src/entities/TodayClear';
import { CenterRepository } from 'src/repositories/calendar.repository';
import { TodayClearRepository } from 'src/repositories/today_clear.repository';
import { WorkoutNoteRepository } from 'src/repositories/workout_note.repository';
import { Utils } from 'src/common/utils/date';

@Injectable()
export class CalendarService {
  constructor(
    private readonly centerRepository: CenterRepository,
    
    private readonly difficultyPerCenterRepository: DifficultyPerCenterRepository,
    
    private readonly todayClearRepository: TodayClearRepository,
    
    private readonly workoutNoteRepository: WorkoutNoteRepository,
    
    private readonly workoutTimeRepository: WorkoutTimeRepository,
  ) {}

  // TABLE
  // center, difficulty_per_center, workout_note, workout_time, today_clear

  /* 
    시나리오: a회원이 1월 한 달 동안 방문한 암장, 암장 당 클리어 기록, 운동 시간
    1. Today_Clear : clear_no, center_no, grade, count
  */ 
  /**
    param: 월 정보
    return: CalendarDto[]
    detail: 캘린더 화면 및 디테일에 뿌릴 데이터 반환
  */
  async getCalendar(period: Date) {

    let calendarInfo: CalendarDto[];
    // this.todayClear.findBy()
    const memNo = 1; // 로그인 정보에서 가져올것
    // mem_no로 1월 한달 간 클리어한 center_no 리스트 조회
    const month = Utils.monthFromDatetime(period);

    /* ** 작업중 **
      const entityManager = EntityManager;
      const clearInfos: TodayClear[] = await entityManager.
      this.todayClearRepository.find({
        where: { 
          memNo: memNo,
          regDate:
        }
        
      });
      console.log(clearInfos); 
    */
    // console.log(await this.difficultyPerCenterRepository.find());
    // console.log(await this.centerRepository.find());
    // console.log(await this.todayClearRepository.find()); // regdate가 아닌 암장 방문한 날짜를 받을 데이트 타입 DB 추가 필요
    // console.log(await this.workoutNoteRepository.find());
    // console.log(await this.workoutTimeRepository.find());

    return [
      {
        center_fullname: '더클라임 사당점',
        clear_record: '[ {보라:3}, {남색:4} ]',
        daily_memo: '행클했다',
        day: 22, // datetime, 수정시간, 수정한 사람, url
        workout_time_hour: 3,
        workout_time_minute: 25,
        image_url: "dflk2@kdjfiwopaour"
      },
      {
        center_fullname: '더클라임 사당점',
        clear_record: '[ {보라:3}, {남색:7} ]',
        daily_memo: '빵클했다',
        day: 22,
        workout_time_hour: 3,
        workout_time_minute: 25,
        image_url: "dflk2@kdjfiwopaour"
      },
    ];
  }
}
