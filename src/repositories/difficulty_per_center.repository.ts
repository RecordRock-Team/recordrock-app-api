import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { Center } from 'src/entities/Center';
import { DifficultyPerCenter } from 'src/entities/DifficultyPerCenter';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class DifficultyPerCenterRepository extends Repository<DifficultyPerCenter> {
  constructor(dataSource: DataSource) {
    super(DifficultyPerCenter, dataSource.createEntityManager());
  }
  
  async getAllDifficultyInfo() {
    return this.find()
  }
}