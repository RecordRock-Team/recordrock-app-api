import { Column, Entity } from "typeorm";

@Entity("center_logo", { schema: "climber" })
export class CenterLogo {
  @Column("varchar", { primary: true, name: "center_headquarter", length: 100 })
  centerHeadquarter: string;

  @Column("varchar", { name: "logo_url", nullable: true, length: 255 })
  logoUrl: string | null;
}
