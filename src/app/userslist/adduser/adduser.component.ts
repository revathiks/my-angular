import { Component, OnInit } from '@angular/core';
import { users } from '../../mock-table';
import { UsertableService } from '../../usertable.service';
import { NgForm } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../../register.service';
import {Router} from "@angular/router";
import {states, statesRecords} from '../../state';
import { DatepickerOptions,NgDatepickerModule } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';


@Component({  
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userform:FormGroup;
  formvalues:any;
  statusMsg:string;
  //statess=statesRecords;
   requiredMsg:string="This field is required";

   selectedCountry = 0;
   selectedState = 0;
   states = [];
  cities = [];
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2019,
    // displayFormat: 'MMM D[,] YYYY',
    // barTitleFormat: 'MMMM YYYY',
    // dayNamesFormat: 'dd',
    // firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    // locale: frLocale,
    // minDate: new Date(Date.now()), // Minimal selectable date
    // maxDate: new Date(Date.now()),  // Maximal selectable date
    // barTitleIfEmpty: 'Click to select a date'
      displayFormat:'DD/MM/YYYY'
  };
   
  constructor(private fb:FormBuilder,private regserv:RegisterService,private router:Router) {
    this.createaddForm();   
   //  this.options=new NgDatepickerModule();
   }

  ngOnInit() {
  }
  createaddForm()
  {
     this.userform=this.fb.group({
      'name':[null,Validators.required],
      'email':[null,Validators.required],
      'password':[null,Validators.required],
     'country':[null,Validators.required],
     'city':[null,Validators.required],
     'state':[null,Validators.required],
     'dob':[null,Validators.required]
     });
  }

  onadduserSubmit(form:NgForm)
  {  
    let formvalues=form.value;  
    console.log(formvalues) ;
    // by using formname.values methos
    // this.regserv.userregister(formvalues).subscribe(data => {
    //   console.log(data);
    // })
    //
    let someFormData = new FormData();
    Object.keys(formvalues).forEach(k => {
      someFormData.append(k, formvalues[k]);
    });
   // someFormData.append('date', '1');
    console.log(someFormData);
    this.regserv.userregister(someFormData).subscribe(data => {
      console.log(data);
      if(data['registerstatus']=="success")
      {
        //this.statusMsg="successfully registered";
        this.router.navigate(['/userslist']);
      }
      else{
        this.statusMsg="Failed to register";
      }
    })   

  }

  //static county,state.,cities

  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedState = 0;
    this.cities = [];
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }
  onSelectState(state_id: number) {
    this.selectedState = state_id;
    this.cities = this.getCity().filter((item) => {
      return item.state_id === Number(state_id)
    });
  }
  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }
 
  getStates() {
    return [
      { id: 1, country_id: 1, name: 'Andhra Pradesh' },
      { id: 2, country_id: 1, name: 'Madhya Pradesh' },
      { id: 3, country_id: 2, name: 'San Francisco' },
      { id: 4, country_id: 2, name: 'Los Angeles' },
      { id: 5, country_id: 3, name: 'New South Wales' },
      { id: 6, country_id: 3, name: 'Victoria' },
    ]
  }
 
  getCity() {
    return [
      { id: 1, state_id: 1, name: 'Guntur' },
      { id: 2, state_id: 1, name: 'Vijayawada' },
      { id: 3, state_id: 1, name: 'Nellore' },
      { id: 4, state_id: 1, name: 'Kadapa' },
      { id: 5, state_id: 2, name: 'Warangal' },
      { id: 6, state_id: 2, name: 'Hyderabad' },
      { id: 7, state_id: 2, name: 'Karimnagar' },
      { id: 8, state_id: 2, name: 'Kadapa' },
      { id: 9, state_id: 3, name: 'SOMA' },
      { id: 10, state_id: 3, name: 'Richmond' },
      { id: 11, state_id: 3, name: 'Sunset' },
      { id: 12, state_id: 4, name: 'Burbank' },
      { id: 13, state_id: 4, name: 'Hollywood' },
      { id: 14, state_id: 5, name: 'Sunset' },
      { id: 15, state_id: 5, name: 'Burbank' },
      { id: 16, state_id: 5, name: 'Hollywood' },
      { id: 17, state_id: 6, name: 'Benalla' },
      { id: 18, state_id: 6, name: 'Melbourne' },
    ]
  }
}
