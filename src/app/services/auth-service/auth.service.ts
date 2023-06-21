import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {LOCAL_STORAGE_AUTH_TOKEN} from "../../shared/const/localstorage";
import {AuthServiceInterface} from "./auth-service.interface";
import {User, UserRole} from "./user.interface";
import parseJwt from "../../shared/helpers/parseJwt";
import {EnvironmentService} from "../environment-service/environment.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthServiceInterface {
  baseUrl: string;
  private _user?: User;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService,
    private routes: Router
  ) {
    this.baseUrl = `${this.environmentService.getValue('originalBackend')}/auth`
  }

  public login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap((res) => {
          if (res.token) {
            localStorage.setItem(LOCAL_STORAGE_AUTH_TOKEN, res.token);
          }
          return null;
        })
      );
  }

  public logout() {
    localStorage.removeItem(LOCAL_STORAGE_AUTH_TOKEN);
    this.routes.navigate(['login']);
  }

  public get user() {
    if (this.token) {
      const user = parseJwt(this.token);
      this._user = user;
      return user;
    } else return null;
  }

  public get userRoles(): UserRole | undefined {
    if (!this._user) return
    return this._user.roles[0].UserRole.id
  }

  public get token(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_AUTH_TOKEN);
  }
}
