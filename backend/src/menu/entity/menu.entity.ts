import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entity/user.entity';
import { Transform } from 'class-transformer';

@Entity()
export class MenuItem {
  @ObjectIdColumn()
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column('simple-array')
  tags: string[];

  @Column()
  sku: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user) => user.menu)
  user: User;

  @CreateDateColumn()
  dateCreated: string;

  @UpdateDateColumn()
  dateLastUpdated: string;

  constructor(partial: Partial<MenuItem>) {
    Object.assign(this, partial);
  }
}
