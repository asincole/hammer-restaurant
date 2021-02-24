import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuListComponent } from './menu-list/menu-list.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@NgModule({
  declarations: [MenuListComponent, EditMenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzFormModule,
    NzMessageModule,
    NzSelectModule,
    NzCardModule,
    NzModalModule,
    NzEmptyModule,
    NzPopconfirmModule,
  ],
})
export class MenuModule {}
