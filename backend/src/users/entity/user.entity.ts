import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { Exclude, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { MenuItem } from '../../menu/entity/menu.entity';

export type UserRoleType = 'admin' | 'subscriber';
export enum UserRoles {
  Admin = 'admin',
  Subscriber = 'subscriber',
}

@Entity()
export class User {
  @ObjectIdColumn()
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  id: ObjectID;

  @Column()
  @ApiProperty()
  username: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @Column()
  @Exclude()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  dateCreated: string;

  @UpdateDateColumn()
  dateLastUpdated: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: 'subscriber',
  })
  role: UserRoleType;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => MenuItem, (menuItem) => menuItem.user)
  menu: MenuItem[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
