import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { mysqlDataSource } from 'src/database/mysql_datasource';
import { Center } from 'src/entities/Center';
import { DifficultyPerCenter } from 'src/entities/DifficultyPerCenter';
import { TodayClear } from 'src/entities/TodayClear';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DifficultyPerCenterRepository extends Repository<DifficultyPerCenter> {
  constructor() {
    super(DifficultyPerCenter, mysqlDataSource.createEntityManager());
  }
  private _repository = mysqlDataSource.getRepository(DifficultyPerCenter);
  async getAllDifficultyInfo() {
    return this.find()
  }
}