import {Component} from '@angular/core';
import {AuthService} from "../../services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get isAuth(): boolean {
    return !!this.authService.token
  }

  get isLoginPage(): boolean {
    return this.router.url !== '/login';
  }

  onLogoutHandler() {
    this.authService.logout();
  }

  onLoginHandler() {
    this.router.navigate(['/login']);
  }
}
