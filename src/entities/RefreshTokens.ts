import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mem_no", ["memNo"], { unique: true })
@Entity("refresh_tokens", { schema: "climber" })
export class RefreshTokens {
  @PrimaryGeneratedColumn({ type: "int", name: "token_id" })
  tokenId: number;

  @Column("int", { name: "mem_no", unique: true })
  memNo: number;

  @Column("varchar", { name: "access_token", length: 255 })
  accessToken: string;

  @Column("timestamp", { name: "expires_at" })
  expiresAt: Date;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;
}
