import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  formvalues:any;
  statusMsg:string;
  requiredMsg:string="This field is required";
  constructor(private fb:FormBuilder,
  private regserv:RegisterService) {
  this.createRegForm();
  }

   createRegForm()
   {
      this.registerForm=this.fb.group({
       'name':[null,Validators.required],
       'email':[null,Validators.required],
       'password':[null,Validators.required]
      });
   }
  ngOnInit() {
  }
  onRegister(formvalues)
  {    
    console.log(formvalues);

    // by using formname.values methos
    // this.regserv.userregister(formvalues).subscribe(data => {
    //   console.log(data);
    // })
    //

    let someFormData = new FormData();
    Object.keys(formvalues).forEach(k => {
      someFormData.append(k, formvalues[k]);
    });
    console.log(someFormData);
    this.regserv.userregister(someFormData).subscribe(data => {
      console.log(data);
      if(data['registerstatus']=="success")
      {
        this.statusMsg="successfully registered";
      }
      else{
        this.statusMsg="Failed to register";
      }
    })

  }

}
