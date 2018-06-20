import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { CareerService } from '../career.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  careerForm:FormGroup;
  //resumefile: FileList;
  resumefile:File = null;
  constructor(private fb:FormBuilder,private careerserv:CareerService,private route:Router) {
    this.createForm();
   }
   createForm()
   {
     this.careerForm=this.fb.group({
      'name':[null,Validators.required],
      'email':[null,Validators.required],      
       'resume':[null,Validators.required]
     })

   }

//    getFiles(event) { 
//     this.files = event.target.files;    
// } 
   onupload(form:NgForm)
   {
    
    let careerFormData = new FormData();
    Object.keys(form.value).forEach(k => {
      careerFormData.append(k, form.value[k]);
    });
    careerFormData.append('upfile', this.resumefile);

    this.careerserv.submitCareer(careerFormData).subscribe(data=>
      {
       
      }
    );
   }

   handleFileInput(files: FileList) { 
    this.resumefile = files[0];
    this.careerForm.value.resume = this.resumefile;
  }

  ngOnInit() {
  }

}
