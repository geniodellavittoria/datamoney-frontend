import { Injectable } from '@angular/core';
import {UserRegisterForm} from '../dto/userRegisterForm';
import {HttpClient} from '@angular/common/http';
import {Api} from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  register(registerForm: UserRegisterForm) {
    return this.http.post(Api.register, registerForm);
  }
}
