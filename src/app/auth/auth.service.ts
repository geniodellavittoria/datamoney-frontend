import {HttpClient} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import {LoginForm} from "../dto/loginForm";
import {catchError, map} from "rxjs/operators";
import {Observable} from "rxjs";
import {Api} from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static SESSION_KEY = 'sessionData';
  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = Api.login;
  }

  login(loginForm: LoginForm): Observable<any> {
    return this.http.post<SessionData>(this.serviceUrl, loginForm)
      .pipe(map((session: SessionData) => localStorage.setItem(AuthService.SESSION_KEY, session.token)),
        catchError(err => {
          console.log(err);
          return err;
        })
      );
  }

  isLoggedIn() {
    return localStorage.getItem(AuthService.SESSION_KEY) != null;
  }

  logout() {
    localStorage.removeItem(AuthService.SESSION_KEY);
  }
}
