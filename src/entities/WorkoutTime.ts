import { Column, Entity } from "typeorm";

@Entity("workout_time", { schema: "climber" })
export class WorkoutTime {
  @Column("int", { primary: true, name: "mem_no" })
  memNo: number;

  @Column("int", { name: "workout_hour", nullable: true })
  workoutHour: number | null;

  @Column("int", { name: "workout_minute", nullable: true })
  workoutMinute: number | null;

  @Column("datetime", { primary: true, name: "reg_date" })
  regDate: Date;
}
