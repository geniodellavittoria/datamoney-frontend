import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  error: string = null;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthService) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  public login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.getRawValue())
        .subscribe(res => {
          this.error = null;
          this.router.navigate(['/users']);
        }, err => {
          this.error = err.error.message;
        });
    }
  }

  register() {
    this.router.navigate(['/user', 'register']);
  }
}
