import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  year = new Date().getFullYear();

  constructor(
    public authService: AuthService,
    private router: Router,
    private message: NzMessageService
  ) {}

  logout(): void {
    this.authService.logout();
    this.message.success('Logged out successfully');
    this.router.navigateByUrl('/auth/login');
  }
}
