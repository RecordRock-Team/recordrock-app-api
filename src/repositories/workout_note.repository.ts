import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { mysqlDataSource } from 'src/database/mysql_datasource';
import { Center } from 'src/entities/Center';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class WorkoutNoteRepository extends Repository<WorkoutNote> {
  constructor() {
    super(WorkoutNote, mysqlDataSource.createEntityManager());
  }
  private _repository = mysqlDataSource.getRepository(WorkoutNote);
  async getAllNotes() {
    return this.find()
  }
}