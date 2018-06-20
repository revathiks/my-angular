import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
is_loggedin:any;
  constructor(private http:HttpClient) { }
  checkLogin(formData):Observable<any[]>{
    return this.http.post<any[]>('http://localhost/reactBackend/api/login.php',formData);
  }
}
