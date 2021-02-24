import { Component, OnInit } from '@angular/core';
import { MenuItemRendered } from '../menu.interface';
import { MenuService } from '../../../services/menu.service';
import { map } from 'rxjs/operators';
import { AuthService } from '../../../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { foodTags } from '../menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  menuItemList: MenuItemRendered[];
  menuItemListStore: MenuItemRendered[];
  listOfTagOptions = [];
  listFiltered = false;
  foodTags = foodTags;
  isVisible = false;
  selectedMenuItem: MenuItemRendered;
  images = [
    '../../../assets/images/burger.jpg',
    '../../../assets/images/rice.jpg',
    '../../../assets/images/vegetarian.jpg',
  ];
  loading = true;

  constructor(
    private menuService: MenuService,
    public authService: AuthService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.menuService
      .getMenuList()
      .pipe(
        // I did not add an option to upload images to reduce complexity, so I randomly choose an image from the image array above and add it to each menu item
        map((menuItemList) => {
          return menuItemList.map((item) => {
            return {
              ...item,
              imageUrl: Math.floor(Math.random() * 3).toString(),
            };
          });
        })
      )
      .subscribe((response) => {
        this.loading = false;
        this.menuItemList = response;
        this.menuItemListStore = response;
      });
  }

  showModal(menuItem: MenuItemRendered): void {
    this.selectedMenuItem = menuItem;
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  confirmDelete(menuItemId: string): void {
    this.menuService.deleteMenuItem(menuItemId).subscribe((response) => {
      this.menuItemList = this.menuItemList.filter(
        (item) => item.id !== menuItemId
      );
      this.message.success('Menu Item deleted successfully!');
    });
  }

  cancelDelete(): void {
    this.message.info('Delete action cancelled!');
  }

  filterList(): void {
    this.menuItemList = this.menuItemList.filter((menuItem) => {
      this.listFiltered = true;
      return menuItem.tags.some((tag) => this.listOfTagOptions.includes(tag));
    });
  }

  clearFilter(): void {
    this.menuItemList = this.menuItemListStore;
    this.listOfTagOptions = [];
    this.listFiltered = false;
  }
}
