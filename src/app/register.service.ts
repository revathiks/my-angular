import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http,Headers } from '@angular/http';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerapi:string='http://localhost/reactBackend/api/register.php';
  deleteUserapi:string='http://localhost/reactBackend/api/delete.php';
  // constructor(private http:Http) { }
  // userregister(formData){
  //   var headers = new Headers();
  //   headers.append('Content-Type','application/x-www-form-urlencoded');
  //   let param="json="+JSON.stringify(formData);
  //   return this.http.post(this.registerapi,param,{headers:headers});
  // }
  constructor(private http:HttpClient) { }
  userregister(formData){    
    return this.http.post(this.registerapi,formData);
  }

  
}
