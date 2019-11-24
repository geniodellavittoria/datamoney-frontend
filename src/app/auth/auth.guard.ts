import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {

  }

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      console.log('User not authenticated. Redirect to login page');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
