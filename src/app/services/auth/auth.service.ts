import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class AuthService {
  
  private user = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
  cast = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }
  
  login(user : any){
    return this.http.post<any>('/auth/login', user, httpOptions);
  }

  loggedIn(){
    return !!localStorage.getItem('token');  
  }

  register(user : any){
    return this.http.post<any>('/auth/register', user, httpOptions);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  
  getToken(){
    return localStorage.getItem('token');
  }

  getProfile(data){
    let newUser = { username : data.username, avtar : data.avtar };
    localStorage.setItem('user', JSON.stringify(newUser))
    this.user.next(newUser);
  }
}
