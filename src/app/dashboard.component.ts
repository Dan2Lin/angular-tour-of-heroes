/**
 * Created by Administrator on 2017/6/7.
 */
import {Component,OnInit} from "@angular/core";
import {Hero} from "./Hero";
import {HeroService} from "./hero.service";
@Component({
  selector:"my-dashborad",
  templateUrl:'./dashboard.component.html'
})
export class DashboardComponent implements OnInit{
  heroes:Hero[] = [];
  constructor(private heroService:HeroService){}
  ngOnInit():void {
    this.heroService.getHeroes().then((heroes=>this.heroes = heroes.slice(0,4)))
  }
}