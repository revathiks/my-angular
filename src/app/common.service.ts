import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService { 
  is_loggedin:boolean=false;
  constructor() { }
  setLoginStatus(status)
  {
    if(status==1){this.is_loggedin=true;}
    
  }
  getLoginStatus()
  {
    return this.is_loggedin;
  }
}
