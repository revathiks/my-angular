import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { iEmployee } from '../employees';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees : iEmployee[];
  constructor(private empservice:EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees()
  {
    this.empservice.getemployees().subscribe(data => this.employees = data)

  }  

}
