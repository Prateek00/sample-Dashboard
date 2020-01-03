import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse} from '@angular/common/http'
import { AuthService } from '../services/auth/auth.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements HttpInterceptor {
  constructor(
    private authSvc: AuthService,
    private router: Router
  ){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
   request = request.clone({
      setHeaders: {
        Authorization: this.authSvc.getToken() || ''
      }
    });
    return next.handle(request);
  }  
}