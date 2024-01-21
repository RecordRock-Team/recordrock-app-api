import { Column, Entity } from "typeorm";

@Entity("profile", { schema: "climber" })
export class Profile {
  @Column("int", { primary: true, name: "mem_no" })
  memNo: number;

  @Column("varchar", { name: "email", nullable: true, length: 50 })
  email: string | null;

  @Column("varchar", { name: "profile_text", nullable: true, length: 500 })
  profileText: string | null;

  @Column("varchar", { name: "img_url", nullable: true, length: 255 })
  imgUrl: string | null;
}
