import { Column, Entity } from "typeorm";

@Entity("platform", { schema: "climber" })
export class Platform {
  @Column("smallint", { primary: true, name: "platform_code" })
  platformCode: number;

  @Column("varchar", { name: "platform_name", nullable: true, length: 20 })
  platformName: string | null;
}
