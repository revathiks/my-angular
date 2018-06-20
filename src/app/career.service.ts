import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  careerApi:string="http://localhost/reactBackend/api/career.php";
  constructor(private http:HttpClient) { }
  submitCareer(formData){
    return this.http.post(this.careerApi,formData);

  }
}
