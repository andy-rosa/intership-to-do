import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth-service/auth.service";
import {User} from "../../../../services/auth-service/user.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup
  user?: User;
  error?: any;

  constructor(
    private auth: AuthService,
    private routes: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required, Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  submit() {
    if (this.loginForm.invalid) {
      return
    }
    const {email, password} = this.loginForm.value
    this.auth.login(email, password).subscribe(() => {
      this.loginForm.reset()
      this.routes.navigate([''])
    },
      error => {
        this.error = error
      })
    }
  }
