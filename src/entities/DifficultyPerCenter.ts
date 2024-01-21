import { Column, Entity } from "typeorm";

@Entity("difficulty_per_center", { schema: "climber" })
export class DifficultyPerCenter {
  @Column("varchar", { primary: true, name: "center_headquarter", length: 100 })
  centerHeadquarter: string;

  @Column("smallint", { primary: true, name: "grade" })
  grade: number;

  @Column("varchar", { name: "color", nullable: true, length: 10 })
  color: string | null;
}
