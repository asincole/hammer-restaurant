import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'edit/:id', component: EditMenuComponent, canActivate: [AuthGuard] },
  { path: 'create', component: EditMenuComponent, canActivate: [AuthGuard] },
  { path: '', component: MenuListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
