import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import {HeroesComponent} from  '../heroes/heroes.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { InputelementsComponent } from '../inputelements/inputelements.component';
import { UserslistComponent } from '../userslist/userslist.component';
import { EmployeesComponent } from '../employees/employees.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AdduserComponent } from '../userslist/adduser/adduser.component';
import { EdituserComponent } from '../userslist/edituser/edituser.component';
import { CareerComponent } from '../career/career.component';
const routes: Routes = [
{
      path: 'aboutus',
      component: AboutusComponent,
},
{
    path: 'contactus',
    component: ContactusComponent,
},  
{
  path: 'sampleinput',
  component: InputelementsComponent,
},

{
  path: 'userslist',
  component: UserslistComponent,
},
{
  path: 'employees',
  component: EmployeesComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'register',
  component: RegisterComponent,
},
{
  path: 'adduser',
  component: AdduserComponent,
},
{
  path: 'edituser/:id',
  component: EdituserComponent,
},
{
  path: 'career',
  component: CareerComponent,
},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
