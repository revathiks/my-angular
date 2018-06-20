import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import {CommonService} from '../common.service';

@Component({
  selector: 'app-rightbar',
  templateUrl: './rightbar.component.html',
  styleUrls: ['./rightbar.component.css']
})
export class RightbarComponent implements OnInit {
  /*hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };*/
  //heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;
 

  constructor(private heroService: HeroService,private commonserv:CommonService) { }
    
  ngOnInit() {
    this.getHeroes();
  //   let uname = localStorage.getItem('user_name');
  //   console.log(uname);
  //   if(uname=="" || uname==null)
  //   {     
  //     this.is_loggedin=0;
  //     // this.loginMenuUrl="/login";
  //     // this.registerMenuUrl="/register";
  //   }else{alert(uname);
  //   // this.loginMenuUrl="/userslist";
  //   this.is_loggedin=1;
   
  // }
    
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  /*getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }*/
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
 
}
