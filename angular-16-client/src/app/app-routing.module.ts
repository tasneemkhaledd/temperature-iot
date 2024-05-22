import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempsListComponent } from './components/temps-list/temps-list.component';
import { TempDetailsComponent } from './components/temp-details/temp-details.component';
import { AddTempComponent } from './components/add-temp/add-temp.component';
import {signupComponent} from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
//import {loginComponent} from './components/login/login.component';
import { googlemapComponent } from './components/googlemap/googlemap.component';
const routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full' },
  { path: 'temps', component: TempsListComponent },
  { path: 'temps/:id', component: TempDetailsComponent },
  { path: 'add', component: AddTempComponent },
  { path:'signup' , component:signupComponent},
  { path: 'login', component: LoginComponent },
  {path :'googlemap',component:googlemapComponent}
  //{ path:'login' , component:loginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
