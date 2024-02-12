import { Injectable } from '@nestjs/common';
import { TypeOrmDataSourceFactory } from '@nestjs/typeorm';
import { mysqlDataSource } from 'src/database/mysql_datasource';
import { Center } from 'src/entities/Center';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class CenterRepository extends Repository<Center> {
  constructor() {
    super(Center, mysqlDataSource.createEntityManager());
  }
  private _repository = mysqlDataSource.getRepository(Center);
  
  async getAllCenters() {
    return await this.find()
  }

  async getCenterFullnameByCenterNo(centerNo:number) : Promise<string> {
    const center = await this.findOne(
      {where: {centerNo}}
    );
    return center.centerHeadquarter+' '+center.centerBranch
  }
}