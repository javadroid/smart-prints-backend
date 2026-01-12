import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "zones" })
export class ZoneSqlModel {
  @PrimaryGeneratedColumn("uuid")
  _id: string;



  @Column()
  name: string;

  @Column()
  lga: string;

  @Column()
  state: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}