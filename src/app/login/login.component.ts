import { Component, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataControllerService } from '../service/data-controller.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;
  @ViewChild('loginForm') form:any;

  constructor(private cookieService: CookieService, 
    public data:DataControllerService,
    public router:Router) { }

  ngOnInit() {
  }
  submit({value, valid}:{value:any, valid:boolean}){
    if(valid){
      this.router.navigate(['home']);
    }else{
      console.log("Form is not valid");
    }
  }
  
}
