import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { dataSource } from 'src/database/data_source';
import { Center } from 'src/entities/Center';
import { TodayClear } from 'src/entities/TodayClear';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { DataSource, Repository } from 'typeorm';

// @Injectable()
// export class TodayClearRepository extends Repository<TodayClear> {
//   constructor(dataSource: DataSource) {
//     super(TodayClear, dataSource.createEntityManager());
//   }
  
//   async getAllCenters() {
//     return this.find()
//   }
// }
export const TodayClearRepository = dataSource.getRepository(TodayClear)