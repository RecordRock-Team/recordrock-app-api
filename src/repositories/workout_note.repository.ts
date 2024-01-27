import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { Center } from 'src/entities/Center';
import { WorkoutNote } from 'src/entities/WorkoutNote';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class WorkoutNoteRepository extends Repository<WorkoutNote> {
  constructor(dataSource: DataSource) {
    super(WorkoutNote, dataSource.createEntityManager());
  }
  
  async getAllNotes() {
    return this.find()
  }
}