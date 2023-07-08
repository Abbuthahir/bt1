import { inject, Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  loginResult = 'success';
  constructor(){}
  loginUser() {
   return true;
  }
}
export const canActivateTeam = () => {
  const auth = inject(AuthGuardService);
  if (auth.loginResult === 'success') {
    return auth.loginUser();
  }
  return false;
}