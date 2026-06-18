import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { GenderEnum } from '@app/enum';


class Mockups { front?: string; back?: string; left?: string; right?: string; }
class DesignRect { top: string; left: string; width: string; height: string; }
class DesignArea { front?: DesignRect; back?: DesignRect; left?: DesignRect; right?: DesignRect; }

@Entity()
export class CategoriesSqlModel {

  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({})
  name: string;
  @Column({})
  id: string;
  @Column({ nullable: true })
  image: string;
  @Column({

    default: 'custom',
  })
  type: string;
  @Column({
    type: 'enum',
    enum: GenderEnum,
    default: GenderEnum.UNISEX,
  })
  gender: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
  @Column({ type: 'json', nullable: true })
  mockups?: Mockups;

  @Column({ type: 'json', nullable: true })
  designArea?: DesignArea;
  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any>;
}
