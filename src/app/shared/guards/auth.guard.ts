import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/user/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean | UrlTree> | Promise<boolean> | boolean {
      return new Promise<UrlTree | boolean>((resolve, reject) => {
        if ( this.authService.isLoggedIn.getValue() == true){
        // if ( localStorage.getItem('isAuth') == '1'){
          return resolve(true);
        }
        resolve(this.router.parseUrl('/auth/login'));
      });
  }
}
