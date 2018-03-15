import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {FlashMessageService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessageService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      email: this.email,
      password: this.password
    };

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['profile']);
      } else {
        this.flashMessage.show('Please reenter your Information', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['login']);
      }
    });
  }
}
