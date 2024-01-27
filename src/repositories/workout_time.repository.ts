import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { Center } from 'src/entities/Center';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { WorkoutTime } from 'src/entities/WorkoutTime';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class WorkoutTimeRepository extends Repository<WorkoutTime> {
  constructor(dataSource: DataSource) {
    super(WorkoutTime, dataSource.createEntityManager());
  }
  
  async getAllTimes() {
    return this.find()
  }
}