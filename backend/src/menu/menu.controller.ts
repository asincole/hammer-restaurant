import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { MenuItem } from './entity/menu.entity';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(
    @Body() createMenuItemDto: CreateMenuItemDto,
    @Request() req,
  ): Promise<MenuItem> {
    const { userId } = req.user;
    return this.menuService.create(userId, createMenuItemDto);
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Body() updateMenuItemDto: UpdateMenuItemDto): Promise<UpdateResult> {
    return this.menuService.updateOne(updateMenuItemDto.id, updateMenuItemDto);
  }

  @Get()
  findAll(): Promise<MenuItem[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MenuItem> {
    return this.menuService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.menuService.remove(id);
  }
}
