/* import { Component,OnInit  } from '@angular/core';
import { Auth } from 'src/app/models/auth.model';
import {AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  auths?: Auth[];
  currentAuth: Auth = {};
  currentIndex = -1;
  email = '';
  password= '';
  logged = false;
  constructor(private authservice: AuthService , private router: Router) {}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.authservice.getAll().subscribe({
      next: (data) => {
        this.auths = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentAuth = {};
    this.currentIndex = -1;
  }

  setActiveUser(auth: Auth, index: number): void {
    this.currentAuth = auth;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.authservice.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }

  searchemail(): void {
    this.currentAuth = {};
    this.currentIndex = -1;
   let logged = false;
     this.authservice.findByemail(this.authservice).subscribe({
      next: (data) => {
        this.auths = data;
        logged = true;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
 
 /* if (this.auths) {
  // Find the user by email
  const user = this.auths.find((auth) => auth.email === this.email);

  if (user && user.password === this.password) {
    console.log('Login successful');
    logged = true;
    this.router.navigate(['/temps']); // Redirect to the home page
  } else {
    console.log('Login failed');
  }
} else {
  console.error('User data not yet retrieved');
} */




  



  /* auths?: Auth[];
  currentAuth: Auth = {};
  currentIndex = -1;
  email = '';

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.authservice.getAll().subscribe({
      next: (data) => {
        this.auths = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentAuth = {};
    this.currentIndex = -1;
  }

  setActiveUser(auth: Auth, index: number): void {
    this.currentAuth = auth;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.authservice.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
*/
/* import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  auths?: Auth[];
  currentAuth: Auth = {};
  currentIndex = -1;
  email = '';
  password = '';
  logged = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.retrieveUser();
  }

  retrieveUser(): void {
    this.authService.getAll().subscribe({
      next: (data) => {
        this.auths = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }

  refreshList(): void {
    this.retrieveUser();
    this.currentAuth = {};
    this.currentIndex = -1;
  }

  setActiveUser(auth: Auth, index: number): void {
    this.currentAuth = auth;
    this.currentIndex = index;
  }

  removeAllUsers(): void {
    this.authService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }
  searchemail(): void {
    this.currentAuth = {};
    this.currentIndex = -1;

    const emailToSearch = this.email;

     this.authService.findByemail(emailToSearch).subscribe({
      next: (data) => {
        this.auths = data;
        this.logged = true;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
} */

  //searchemail(): void {
  //  this.currentAuth = {};
  //  this.currentIndex = -1;
//
  //  this.authService.findByemail(this.email).subscribe({
  //    next: (data) => {
  //      this.auths = data;
//
  //      // Check if the user is found and the password matches
  //      const user = this.auths.find((auth) => auth.password === this.password);
//
  //      if (user) {
  //        console.log('Login successful');
  //        this.logged = true;
  //        this.router.navigate(['/temps']); // Redirect to the home page
  //      } else {
  //        console.log('Login failed');
  //        this.logged = false;
  //      }
  //    },
  //    error: (e) => {
  //      console.error('Error during login', e);
  //      // Handle error, e.g., display a user-friendly message
  //    },
  //  });
  //}
  import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../services/Main.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-Add_Data',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  Loginform: FormGroup;
  errorMessage: string = '';
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService,
  ) { 
    this.Loginform = this.formBuilder.group({
      email: [''],
      password: [''],
    })
    
  }
  ngOnInit() { }
  onSubmit(): any {
    
    this.crudService.Login(this.Loginform.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/googlemap'))
      }, (err) => {
        console.log(err);
        this.errorMessage = 'Invalid email or password';
    });
  }
  onsign(): any {
    this.ngZone.run(() => this.router.navigateByUrl('/signup'))
      
  }
}

  