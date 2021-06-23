import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {path:'loginpage',component: LoginpageComponent},
  {path:'weatherpage',component:WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
