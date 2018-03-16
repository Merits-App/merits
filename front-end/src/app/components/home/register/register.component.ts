import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ValidateService } from '../../../services/validate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  city: String;
  state: String;
  confirmPassword: String;
  
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
  private router: Router) 
    {

    }


  ngOnInit() {
  }

  registrationSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      city: this.city,
      state: this.state
    };
    
  if (!this.validateService.validateRegister(user)) {
    console.log('Please fill in all fields');
  }

  if (!this.validateService.validateEmail(user.email)) {
    console.log('Please enter a valid email');
    return false;
  }
  
  this.authService.registerUser(user).subscribe(data => {
    if(data === true) {
      console.log('You are now registered!');
      this.router.navigate(['/app-profile']);
    } else {
        console.log('Something went wrong!');
      }
  });
}
