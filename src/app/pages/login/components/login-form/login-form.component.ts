import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../../services/auth-service/auth.service";
import {Router} from "@angular/router";
import {EmailValidatorAsync} from "./validators/email.validator";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm!: FormGroup

  constructor(
    private auth: AuthService,
    private routes: Router,
    private fb: FormBuilder
  ) {
    this.createForm()
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: [null, [
        Validators.required, Validators.email
      ], [EmailValidatorAsync.bind(this)]],
      password: [null, [
        Validators.required
      ]]
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
    })
    }
  }
