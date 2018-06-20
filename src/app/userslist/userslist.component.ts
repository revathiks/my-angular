import { Component, OnInit,TemplateRef } from '@angular/core';
import { userRecords } from '../mock-table';
import { users } from '../mock-table';
import { UsertableService } from '../usertable.service';
import { NgForm } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import { Observable, of } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  modalRef: BsModalRef;
  message:string;
   userslist:users[];
   usercolumn=['name','email','status','action'];
   
  constructor(private userlistserice:UsertableService,private router:Router,private modalService: BsModalService,private location: Location) {   
    
   }

  ngOnInit() {
    this.getuserlist();
    // //console.log(this.userslist);
    // for (let i = 0; i < localStorage.length; i++){
    //   let key = localStorage.key(i);
    //   let value = localStorage.getItem(key);
    //   console.log(key, value);
    // }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
  
  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }
  getuserlist(): void {
    
    this.userlistserice.getuserslist()
        .subscribe(data => {
          console.log(data);
          if(data['noRecords'] >0)
          {
            this.userslist=data['users'];
          }
          else{
            this.userslist=[];            
          }
        }
        );
       
  }
  getuserbyid(): void {  
    this.userlistserice.getuserByID(2)
        .subscribe(data => {
          console.log(data);
          if(data['noRecords'] >0)
          {
            this.userslist=data['users'];
          }
          else{
            this.userslist=[];            
          }
        }
        );
       
  }  

  //delete user
  deleteuser(user) { 
    this.userlistserice.deleteUser(user.id)
      .subscribe( data => {
        console.log(data);       
       this.message = 'User deleted!';
        this.modalRef.hide();
        //this.router.navigate(['/userslist']);
        location.reload();
        //this.userslist = this.userslist.filter(u => u !== user);
      },(error)=>{console.log(error);})
  };
  userEdit(uid)
  {    
    this.router.navigate(['edituser/'+uid]);
  }
  

}
