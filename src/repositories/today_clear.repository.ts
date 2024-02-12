// import { Injectable } from '@nestjs/common';
// import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
// import { dataSource } from 'src/database/data_source';
// import { Center } from 'src/entities/Center';
// import { TodayClear } from 'src/entities/TodayClear';
// import { WorkoutNote } from 'src/entities/WorkoutNote';
// import { DataSource, Repository } from 'typeorm';

// export const TodayClearRepository = dataSource.getRepository(TodayClear)
import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { mysqlDataSource } from 'src/database/mysql_datasource';
import { Center } from 'src/entities/Center';
import { DifficultyPerCenter } from 'src/entities/DifficultyPerCenter';
import { TodayClear } from 'src/entities/TodayClear';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TodayClearRepository extends Repository<TodayClear> {
  constructor() {
    super(TodayClear, mysqlDataSource.createEntityManager());
  }

  async getAllClears() {
    return this.find()
  }
  
}


/* 문제의 orm 쿼리 */
// await this.todayClearRepository
//       .createQueryBuilder('tc')
//       .select([
//         'c.center_headquarter',
//         'c.center_branch',
//         'tc.clear_no',
//         'tc.center_no',
//         'tc.grade',
//         'tc.count',
//         'DAY(tc.clear_date)',
//         'dpc.color',
//         'wn.content',
//         'wt.workout_hour',
//         'wt.workout_minute'
//       ])
//       .from('today_clear', 'tc')
//       .leftJoin('center', 'c', 'tc.center_no = c.center_no')
//       .leftJoin('difficulty_per_center', 'dpc', 'tc.grade = dpc.grade')
//       .leftJoin('workout_note', 'wn', 'tc.mem_no = wn.mem_no AND DAY(tc.clear_date) = DAY(wn.clear_date)')
//       .leftJoin('workout_time', 'wt', 'tc.mem_no = wt.mem_no AND DAY(tc.clear_date) = DAY(wt.clear_date)')
//       .where('YEAR(tc.clear_date) = :year', { year: 2024 })
//       .andWhere('MONTH(tc.clear_date) = :month', { month: 1 })
//       .andWhere('tc.mem_no = :memNo', { memNo: 1 })
//       .getRawMany();