import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router:Router,
    public authSvc: AuthService,
    private _location: Location
    ) { }

  ngOnInit() {
    this.authSvc.cast.subscribe(user => this.user = user); 
  }
  
  user:any={};

  navigate(path){
    this.router.navigate([path])
  }

  backClicked() {
    this._location.back();
  }
  
}
