import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  identifier: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  deliverAt: Date;
}
