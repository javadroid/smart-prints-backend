import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserSqlModel } from './user.sql-schema';


@Entity({ name: 'designs' })
export class DesignSqlModel {
  
  @PrimaryGeneratedColumn('uuid') // Generates a unique string ID like Mongoose
  _id: string;

  @Column() // This column will store the foreign key (the user's ID)
  id: string;
  @Column() 
  userID: string;

  @ManyToOne(() => UserSqlModel, { eager: true })
  @JoinColumn({ name: 'userID' }) 
  user: UserSqlModel;
  
  @Column()
  name: string;

  @Column()
  url: string;

  @Column({
    type: 'simple-array',
    nullable: true, 
    comment: 'Stores an array of string tags.',
  })
  tags?: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}