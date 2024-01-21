import { Column, Entity } from "typeorm";

@Entity("center", { schema: "climber" })
export class Center {
  @Column("int", { primary: true, name: "center_no" })
  centerNo: number;

  @Column("varchar", {
    name: "center_headquarter",
    nullable: true,
    length: 100,
  })
  centerHeadquarter: string | null;

  @Column("varchar", { name: "center_branch", nullable: true, length: 100 })
  centerBranch: string | null;

  @Column("varchar", { name: "latitude", nullable: true, length: 100 })
  latitude: string | null;

  @Column("varchar", { name: "longitude", nullable: true, length: 100 })
  longitude: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 30 })
  phone: string | null;
}
