import { Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { MenuItem } from './entity/menu.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UsersService } from '../users/users.service';
import { menuItemListMockData } from './menu-mock-data';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(MenuItem)
    private readonly menuItemRepository: Repository<MenuItem>,
    private readonly usersService: UsersService,
  ) {
    this.createManyOnStartup(menuItemListMockData);
  }

  async create(
    userId: string,
    createMenuItemDto: CreateMenuItemDto,
  ): Promise<MenuItem> {
    const menuItem = new MenuItem(createMenuItemDto);
    menuItem.user = await this.usersService.findOne(userId);
    return this.menuItemRepository.save(menuItem);
  }

  async createManyOnStartup(
    createMenuList: CreateMenuItemDto[],
  ): Promise<MenuItem[]> {
    const menuList = await this.findAll();
    if (menuList.length === 0) {
      const newMenuItemList = createMenuList.map((item) => new MenuItem(item));
      return this.menuItemRepository.save(newMenuItemList);
    }
  }

  findAll(): Promise<MenuItem[]> {
    return this.menuItemRepository.find();
  }

  findOne(id: string): Promise<MenuItem> {
    return this.menuItemRepository.findOne(id);
  }

  updateOne(
    menuItemId: string,
    updateMenuItemDto: UpdateMenuItemDto,
  ): Promise<UpdateResult> {
    return this.menuItemRepository.update(menuItemId, updateMenuItemDto);
  }

  async remove(id: string): Promise<void> {
    await this.menuItemRepository.delete(id);
  }
}
