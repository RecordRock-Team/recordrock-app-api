import { Column, Entity } from "typeorm";

@Entity("today_clear", { schema: "climber" })
export class TodayClear {
  @Column("int", { primary: true, name: "clear_no" })
  clearNo: number;

  @Column("int", { name: "mem_no", nullable: true })
  memNo: number | null;

  @Column("int", { name: "center_no", nullable: true })
  centerNo: number | null;

  @Column("varchar", { name: "grade", nullable: true, length: 20 })
  grade: string | null;

  @Column("int", { name: "count", nullable: true })
  count: number | null;

  @Column("datetime", { name: "clear_date", nullable: true })
  clearDate: Date | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
