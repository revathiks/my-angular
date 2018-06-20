import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InputelementsComponent } from './inputelements/inputelements.component';
import { UserslistComponent } from './userslist/userslist.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
//import { HttpClient } from '@angular/common/http';
import { EployeesComponent } from './eployees/eployees.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { EmployeeService } from './employee.service';
import {HttpModule} from  '@angular/http'

import { ReactiveFormsModule } from '@angular/forms';
import { AdduserComponent } from './userslist/adduser/adduser.component';
import { EdituserComponent } from './userslist/edituser/edituser.component';
import { CareerComponent } from './career/career.component';
import { NgDatepickerModule } from 'ng2-datepicker';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeaderComponent,
    FooterComponent,
    LeftbarComponent,
    RightbarComponent,
    AboutusComponent,
    ContactusComponent,
    InputelementsComponent,
    UserslistComponent,
    EployeesComponent,
    EmployeesComponent,
    LoginComponent,
    RegisterComponent,
    AdduserComponent,
    EdituserComponent,
    CareerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    NgDatepickerModule,
    ModalModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
