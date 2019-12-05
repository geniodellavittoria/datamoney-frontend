import { Injectable } from '@angular/core';
import { Api } from 'src/app/config/api';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  [x: string]: any;

  constructor() { }

  register(username: string) {
    return this.http.get(Api.register, registerForm);
  }
}
