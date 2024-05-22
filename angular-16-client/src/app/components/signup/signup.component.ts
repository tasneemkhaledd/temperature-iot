import { Component } from '@angular/core';
import { Auth } from 'src/app/models/auth.model';
import {AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class signupComponent {
  auth: Auth = {
    email: '',
    password: '',
    
  };
  submitted = false;

  constructor(private authservice: AuthService , private router: Router) {}

  saveAuth(): void {
    const data = {
      email: this.auth.email,
      password: this.auth.password
    };

    this.authservice.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
        this.router.navigateByUrl('/googlemap');
      },
      error: (e) => console.error(e)
    });
  }

  newAuth(): void {
    this.submitted = false;
    this.auth = {
      email: '',
      password: '',
      
    };
  }
}
