import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  [x: string]: any;

  constructor() { }

  register(username: string) {
    // return this.http.get(Api.register, registerForm);
  }
}
