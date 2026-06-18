import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'gallery' })
export class GallerySqlModel {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  title: string;

  @Column()
  imageUrl: string;

  @Column({
    type: 'simple-array',
    nullable: true,
    comment: 'Stores additional image URLs.',
  })
  imageUrls?: string[];

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({
    type: 'simple-array',
    nullable: true,
    comment: 'Stores an array of tags.',
  })
  tags?: string[];

  @CreateDateColumn({ type: 'datetime', precision: 6 })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', precision: 6 })
  updatedAt: Date;
}
