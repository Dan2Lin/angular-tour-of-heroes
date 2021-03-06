import { NgModule }      from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {AppComponent }  from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from './hero-search.component';
/*import { HeroSearchComponent }  from './hero-search.component';*/
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    DashboardComponent,
  ],
  providers:[
    HeroService
  ],
  bootstrap:    [
    AppComponent
  ]
})

export class AppModule { }
