import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../services/auth-service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

 ngOnInit() {
    if (!!this.authService.token) {
      this.router.navigate(['/']);
    }
 }
}
