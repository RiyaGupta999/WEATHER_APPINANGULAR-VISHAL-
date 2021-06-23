import { Component } from '@angular/core';
import {Routes} from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import {MychartComponent} from './mychart/mychart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
export const allAppRoutes: Routes =[
{ path: '', component: WeatherComponent },
{path:'', component: MychartComponent},
{path:'', component:LoginpageComponent}
];