import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Properties

  menu = true;

  // Methods
  constructor() { }

  ngOnInit() {

    // checkWindow();

  }

  showNav() {
    this.menu = true;
  }

  hideNav() {
    this.menu = false;
  }

  // checkWindow() {
  //   Window.innerWidth >= 1000px ? console.log(1) : console.log(2);
  // };
}
