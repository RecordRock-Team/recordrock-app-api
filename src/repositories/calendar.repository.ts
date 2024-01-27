import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { Center } from 'src/entities/Center';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CenterRepository extends Repository<Center> {
  constructor(dataSource: DataSource) {
    super(Center, dataSource.createEntityManager());
  }
  
  async getAllCenters() {
    return this.find()
  }
}