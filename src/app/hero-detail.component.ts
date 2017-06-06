/**
 * Created by Administrator on 2017/6/6.
 */
import {Component,Input} from "@angular/core";
import {Hero} from "./hero";
@Component({
  selector:"hero-detail",
  template:`
    <div *ngIf="hero">
        <h2>{{hero.name}} 的详细信息：</h2>
        <div><label for="">英雄的id:</label>{{hero.id}}</div>
        <div><label for="">英雄的name:</label>
        <input [(ngModel)]="hero.name" placeholder="name"/></div>
    </div>
  `
})

export class HeroDetailComponent{
   @Input() hero:Hero;
}
