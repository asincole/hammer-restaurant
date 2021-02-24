import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenuItem } from './entity/menu.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([MenuItem]), UsersModule],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
