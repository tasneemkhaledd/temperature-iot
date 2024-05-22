import { Component , OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TempService } from 'src/app/services/temp.service';
import { Temp } from 'src/app/models/temp.model'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'temprature';
 
}

