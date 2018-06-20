import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'welcome to SRM TEchnologies';
  sliderImages=['http://www.srmuniv.ac.in/sites/default/files/banner/spl-convocation_0.jpg','http://www.srmuniv.ac.in/sites/default/files/banner/spl-convocation_0.jpg']
  
  constructor() { }

  ngOnInit() {
  }

}
