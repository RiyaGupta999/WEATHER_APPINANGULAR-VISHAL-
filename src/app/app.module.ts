import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { allAppRoutes } from './routes';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApixuService } from './apixu.service';
import { MychartComponent } from './mychart/mychart.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MychartComponent,
    LoginpageComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  

  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
