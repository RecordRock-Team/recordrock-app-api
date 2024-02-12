import { WorkoutTimeRepository } from 'src/repositories/workout_time.repository';
import { DifficultyPerCenterRepository } from './../repositories/difficulty_per_center.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { Center } from 'src/entities/Center';
import { EntityManager } from 'typeorm';
import { CalendarDto, ColorCount } from './dto/calendar.dto';
import { DifficultyPerCenter } from 'src/entities/DifficultyPerCenter';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { WorkoutTime } from 'src/entities/WorkoutTime';
import { TodayClear } from 'src/entities/TodayClear';
import { CenterRepository } from 'src/repositories/center.repository';
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

  /* 
  TABLE
  center, difficulty_per_center, workout_note, workout_time, today_clear

  시나리오: a회원이 1월 한 달 동안 방문한 암장, 암장 당 클리어 기록, 운동 시간
  */

  /**
    param: 월 정보
    return: CalendarDto[]
    detail: 캘린더 화면 및 디테일에 뿌릴 데이터 반환
  */
  async getCalendar(period: Date) {
    const memNo = 1; // 로그인 정보에서 가져올것
    
    // mem_no로 1월 한달 간 클리어한 center_no 리스트 조회
    const year: number = Utils.yearFromDatetime(period);
    const month: number = Utils.monthFromDatetime(period);
    const day: number = Utils.dayFromDatetime(period);

    const queryResult = await this.todayClearRepository
      .createQueryBuilder('tc')
      .select([
        'c.center_headquarter as centerHeadquarter',
        'c.center_branch as centerBranch',
        'tc.clear_no as clearNo',
        'tc.center_no as centerNo',
        'tc.grade as grade',
        'tc.count as count',
        'tc.clear_date as clearDate',
        'dpc.color as color',
        'wn.content as content',
        'wt.workout_hour as workoutHour',
        'wt.workout_minute as workoutMinute'
      ])
      .leftJoin('center', 'c', 'tc.center_no = c.center_no')
      .leftJoin('difficulty_per_center', 'dpc', 'tc.grade = dpc.grade')
      .leftJoin('workout_note', 'wn', 'tc.mem_no = wn.mem_no AND DAY(tc.clear_date) = DAY(wn.clear_date)')
      .leftJoin('workout_time', 'wt', 'tc.mem_no = wt.mem_no AND DAY(tc.clear_date) = DAY(wt.clear_date)')
      .where('YEAR(tc.clear_date) = :year', { year })
      .andWhere('MONTH(tc.clear_date) = :month', { month })
      .andWhere('tc.mem_no = :memNo', { memNo })
      .getRawMany();

      const groupedByClearDate : CalendarDto [] = queryResult.reduce((acc, cur) => {
        // 해당 clearDate의 기존 데이터 찾기 또는 초기화
        let entry: CalendarDto = acc.find((v: { clearDate: Date; }) => v.clearDate.getDate() === cur.clearDate.getDate());

        if (!entry) {
          entry = new CalendarDto();
          entry.centerFullname = cur.centerHeadquarter + ' ' + cur.centerBranch;
          entry.clearRecord = [];
          entry.clearDate = cur.clearDate;
          entry.dailyMemo = cur.content;
          entry.workoutHour = cur.workoutHour,
          entry.workoutMinute = cur.workoutMinute,

          acc.push(entry);
        }
        
        // 현재 아이템의 세부 정보를 clearColor 배열에 추가
        entry.clearRecord.push({
          grade: cur.grade,
          count: cur.count,
          color: cur.color,
        });
        // console.log(acc);
        return acc;
      }, []);
      
      console.log(groupedByClearDate);

    return groupedByClearDate
  }
}
