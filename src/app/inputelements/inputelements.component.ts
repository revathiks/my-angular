import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputelements',
  templateUrl: './inputelements.component.html',
  styleUrls: ['./inputelements.component.css']
})
export class InputelementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  inputvalues='';
  onkeyup(event:any){
    this.inputvalues += event.target.value+'|';
  }
  items=['reva','shalu','mani'];
  additem(val:string)
  {
    if(val)
    {
    this.items.push(val);
    }
  }
}
