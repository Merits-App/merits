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
  constructor() {

  }

  ngOnInit() {

    // Check window size on page load
    const screenWidth = window.innerWidth;
    // If window is larger than 1000px then show desktop menu, else show mobile menu
    screenWidth >= 1000 ? this.menu = true : this.menu = false;

  }

  showNav() {
    this.menu = true;
  }

  hideNav() {
    this.menu = false;
  }

  toggleNav($event) {
    $event.target.innerWidth >= 1000 ? this.menu = true : this.menu = false;
  }
  hideModal(){
    var popup = document.querySelector('.popup-bg');
    
    popup.setAttribute("style", "display: none");
    console.log('works');
  }
}