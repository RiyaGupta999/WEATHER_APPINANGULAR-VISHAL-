import { Component } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-applic';
  constructor(private toastr: ToastrService){}
  showToastr(){
    this.toastr.warning('BE CAUTIOUS,STAY INDOORS','HARSH WEATHER CONDITIONS');
  }
  
}
