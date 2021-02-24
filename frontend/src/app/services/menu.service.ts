import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { Observable } from 'rxjs';
import { MenuItem } from '../pages/menu/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenuList(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${BASE_URL}/menu`);
  }

  getSingleMenuItem(menuItemId: string): Observable<MenuItem> {
    return this.http.get<MenuItem>(`${BASE_URL}/menu/${menuItemId}`);
  }

  saveMenuItem(menuItem: Partial<MenuItem>): Observable<any> {
    if (menuItem.id) {
      return this.updateMenuItem(menuItem);
    } else {
      const { id, ...newMenuItem } = menuItem;
      return this.createMenuItem(newMenuItem);
    }
  }

  createMenuItem(menuItem: Partial<MenuItem>): Observable<MenuItem> {
    return this.http.post<MenuItem>(`${BASE_URL}/menu/`, menuItem);
  }

  updateMenuItem(menuItem: Partial<MenuItem>): Observable<any> {
    return this.http.put(`${BASE_URL}/menu/`, menuItem);
  }

  deleteMenuItem(menuItemId: string): Observable<any> {
    return this.http.delete(`${BASE_URL}/menu/${menuItemId}`);
  }
}
