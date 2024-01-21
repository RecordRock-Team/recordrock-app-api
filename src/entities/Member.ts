import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('member', { schema: 'climber' })
export class Member {
  @PrimaryGeneratedColumn({ type: 'int', name: 'memNo' })
  memNo: number;

  @Column('varchar', { name: 'email', length: 50 })
  email: string;

  @Column('date', { name: 'birth', nullable: true })
  birth: string | null;

  @Column('varchar', { name: 'phone', nullable: true, length: 30 })
  phone: string | null;

  @Column('varchar', { primary: true, name: 'platform_code', length: 10 })
  platformCode: string;

  @Column('datetime', { name: 'reg_date', nullable: true })
  regDate: Date | null;
}
