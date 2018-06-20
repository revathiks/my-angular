import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { NgForm } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  cities=['chennai','salem','madurai'];
  model=new Contact(); 
  formval='';

  onSubmit(form: NgForm)
  {
    console.log("adding form values ");
    console.log(form.value);
    this.formval=JSON.stringify(form.value);
  } 
}
