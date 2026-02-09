import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';

@Entity({ name: 'site_settings' })
@Unique(['name'])
export class SiteSettingsSqlModel {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ default: 'default' })
  name: string;

  @Column({
    type: 'enum',
    enum: ['image', 'video'],
    default: 'image',
  })
  heroType: string;

  @Column({ nullable: true })
  heroImage?: string;

  @Column({ nullable: true })
  heroVideo?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
