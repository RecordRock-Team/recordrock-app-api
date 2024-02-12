import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { mysqlDataSource } from 'src/database/mysql_datasource';
import { Center } from 'src/entities/Center';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { WorkoutTime } from 'src/entities/WorkoutTime';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class WorkoutTimeRepository extends Repository<WorkoutTime> {
  constructor() {
    super(WorkoutTime, mysqlDataSource.createEntityManager());
  }
  private _repository = mysqlDataSource.getRepository(WorkoutTime);
  
  async getAllTimes() {
    return this.find()
  }
}