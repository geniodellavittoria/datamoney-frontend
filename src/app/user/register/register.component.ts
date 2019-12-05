import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserRegisterForm} from '../../dto/userRegisterForm';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.getRawValue() as UserRegisterForm)
        .subscribe(res => {
          this.router.navigate(['/login']);
        });
    }
  }

}
