import {inject} from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivateFn, Router,
  RouterStateSnapshot,
} from '@angular/router';
import {AuthService} from "../services/auth-service/auth.service";

export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  if (!authService.token) {
    return router.navigate(['/login']);
  }

  return true
}
