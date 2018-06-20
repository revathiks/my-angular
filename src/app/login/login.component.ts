import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Http,Response} from '@angular/http';
import {Router} from "@angular/router";
import {CommonService} from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  Message:string;  
  
  constructor(private loginserv:LoginService,private router:Router,private commonserv:CommonService) { }
 
  ngOnInit() {
  }
  userlogin(formdata: NgForm){  
    //console.log(event);
    // event.preventDefault();
    // const target=event.target;
    // const email=target.querySelector('#email').value;
    // const password=target.querySelector('#password').value;
    let someFormData = new FormData();
    Object.keys(formdata.value).forEach(k => {
      someFormData.append(k, formdata.value[k]);
    });
    this.loginserv.checkLogin(someFormData).subscribe( data=> {
      if(data){       
        let loginStatus:string = (data['status']);
        this.Message=loginStatus; 
        if(data['status']=="success"){
          this.commonserv.setLoginStatus(1);
          this.router.navigate(['/userslist']);
        } 

      }
    })
    //console.log(someFormData);

  }

}
