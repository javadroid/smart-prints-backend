import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriesSqlModel {
 
  @PrimaryGeneratedColumn('uuid')
  _id: string;
 
  @Column({  })
  name: string;
    @Column({  })
  id: string;
@Column({
   
    default: 'custom',
  })
  type: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}