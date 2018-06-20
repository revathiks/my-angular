import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/observable/of';
// +import 'rxjs/add/operator/delay';
import { userRecords } from './mock-table';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Http,Headers } from '@angular/http';
import { catchError } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsertableService {
 

  userlistApi:string="http://localhost/reactBackend/api/userslist.php";
  registerapi:string='http://localhost/reactBackend/api/register.php';
  deleteUserapi:string='http://localhost/reactBackend/api/delete.php';
  userByIdApi:string="http://localhost/reactBackend/api/userdetail.php"
  userUpdateApi:string="http://localhost/reactBackend/api/userupdate.php";
  
  constructor(private http: HttpClient,private http2: Http) { }


  getuserslist():Observable<any[]>{
    return this.http.get<any[]>(this.userlistApi);
  }
  getuserByID(uid:number):Observable<any[]>{
    return this.http.get<any[]>(this.userByIdApi+"?uid="+uid);
  }

  
  deleteUser(id: number) {
    let headers = new HttpHeaders();
    // headers.append('Content-Type','application/x-www-form-urlencoded');    
    // let param="json="+JSON.stringify({'id':id});
    // return this.http2.post(this.deleteUserapi,param,{headers:headers});
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        
      })
    };    
    return this.http.delete(this.deleteUserapi+"?uid="+id)
    
                
  }
  userUpdate(formData)
  {
    return this.http.post(this.userUpdateApi,formData);
  }
 
}
