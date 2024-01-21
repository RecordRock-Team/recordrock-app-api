import { Column, Entity } from "typeorm";

@Entity("workout_note", { schema: "climber" })
export class WorkoutNote {
  @Column("int", { primary: true, name: "note_no" })
  noteNo: number;

  @Column("int", { name: "mem_no", nullable: true })
  memNo: number | null;

  @Column("varchar", { name: "content", nullable: true, length: 1000 })
  content: string | null;

  @Column("datetime", { name: "reg_date", nullable: true })
  regDate: Date | null;
}
