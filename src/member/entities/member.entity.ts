import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  memNo: number;

  @Column()
  memId: string;

  @Column()
  memPw: string;

  @Column({ default: true })
  email: string;
}