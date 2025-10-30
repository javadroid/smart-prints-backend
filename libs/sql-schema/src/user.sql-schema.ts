import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { randomInt, randomUUID } from 'crypto';
import { UserType, UserStatus } from '@app/enum';


// --- Type definitions for JSON columns (no decorators needed) ---
class Referral {
  refCode: string;
  status?: "active" | "inactive";
  max: number;
  amount: number;
}

@Entity({ name: 'users' })
export class UserSqlModel {

    @PrimaryGeneratedColumn('uuid') // Using UUID to match Mongoose's default ID type
  _id: string;
  @Column({ nullable: true}) // Using PrimaryColumn because we generate the ID in code
  id: string;

  @Column({ nullable: true })
  title?: string;

  @Column({ nullable: true })
  playerId?: string;
  
  @Column({ 
    type: 'simple-array',
    nullable: true 
  })
  roles: string[];

  @Column({
    type: 'enum',
    enum: UserType,
    default: UserType.USER,
  })
  userType: string;

  @Column({ nullable: true })
  username?: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status?: string;

  @Column({ nullable: true })
  emailStatus?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  fullname: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ nullable: true })
  phone?: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  profileImage?: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column({ default: false })
  isSuperAdmin: boolean;

  @Column({ type: 'date', nullable: true })
  dob?: Date;

  @Column({ nullable: true })
  state?: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  gender?: string;

  @Column({ nullable: true })
  localGovernmentArea?: string;

  @Column({ type: 'json', nullable: true })
  socialMediaProfile?: Record<string, string>;

  @Column({ nullable: true })
  residentialAddress?: string;
  
  @Column({ type: 'json' }) // Stores the Referral object as JSON
  referral: Referral;

  @Column({ nullable: true })
  refBy: string;

  @Column({ nullable: true }) // Storing this separately for easier lookups
  refCode: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

 // --- HOOK 1: RUNS ONLY ON CREATION ---
  @BeforeInsert()
  async setupDefaultsOnInsert() {
    console.log('Running @BeforeInsert Hook');
    // 1. Generate custom ID (only once)
    this.id = randomInt(99999) + randomUUID().replace(/\D/g, "").substring(0, 5);

    // 2. Set default username (only once)
    this.username = this.username || this.email;

    // 3. Generate and set referral code (only once)
    const generatedRefCode =
      (this.username.substring(0, 2) +
      randomInt(99) +
      randomUUID().substring(0, 2)).toUpperCase();
    
    // Initialize the referral object if it doesn't exist
    if (!this.referral) {
      this.referral = {} as Referral;
    }
    
    this.referral.refCode = generatedRefCode;
    this.referral.status = 'active';

    // Also set the top-level refCode for easy querying
    this.refCode = generatedRefCode;
    
    // 4. Hash the initial password
    if (this.password) {
      const salt = await bcrypt.genSalt();
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  // --- HOOK 2: RUNS ONLY ON UPDATES ---
  @BeforeUpdate()
  async hashPasswordOnUpdate() {
   
    // if (this.password && !this.password.startsWith('$2')) {
    //     const salt = await bcrypt.genSalt();
    //     this.password = await bcrypt.hash(this.password, salt);
    // }
  }
}