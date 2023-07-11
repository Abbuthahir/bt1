import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  loginResult = '';
  constructor( public router: Router) { }
  loginUser() {
    return true;
  }
 reload() {
    return this.router.navigate(['']);
  }
}
export const canActivateTeam = () => {
  const auth = inject(AuthGuardService);
  if (auth.loginResult === 'success') {
    return auth.loginUser();
  }
  else {
    return auth.reload();
  }
}