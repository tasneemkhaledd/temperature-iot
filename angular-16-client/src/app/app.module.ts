import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTempComponent } from './components/add-temp/add-temp.component';
import { TempDetailsComponent } from './components/temp-details/temp-details.component';
import { TempsListComponent } from './components/temps-list/temps-list.component';
import {signupComponent} from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { googlemapComponent } from './components/googlemap/googlemap.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    AddTempComponent,
    TempDetailsComponent,
    TempsListComponent,
    signupComponent,
    googlemapComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
