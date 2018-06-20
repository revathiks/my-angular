import { Injectable } from '@angular/core';
import { iEmployee } from './employees';
//import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // srcUrl:string="assets/employees.json";
  srcUrl:string="http://localhost/test/employees.php";
  constructor(private http: HttpClient) { }
  getemployees():Observable<iEmployee[]>{
    return this.http.get<iEmployee[]>(this.srcUrl);
  }

}
