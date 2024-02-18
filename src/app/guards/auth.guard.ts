import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isValidToken = inject(LoginService).isValidToken()
  if (!isValidToken){
    inject(Router).navigate(['./login'])
  } 
  return isValidToken;
};
