import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        async (response) => {
          this.message.success('Logged in successfully');
          this.authService.tokenSetter(response.access_token);
          this.authService.isUserLoggedIn();
          const navigateUrl = this.authService.redirectUrl || '/menu';
          await this.router.navigateByUrl(navigateUrl);
        },
        (error) => {
          this.message.error(error.error.message);
        }
      );
    }
  }
}
