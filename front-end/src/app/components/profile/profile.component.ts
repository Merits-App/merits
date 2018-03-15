import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // Properties
  user: Object;
  menu = true;
  newSkill: User['skills'];

  // Methods
  constructor(private authService: AuthService, private router: Router) {

  }
  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      return false;
    });
    this.newSkill = { languages: '', otherSkills: ''};

    // Check window size on page load
    const screenWidth = window.innerWidth;
    // If window is larger than 1000px then show desktop menu, else show mobile menu
    screenWidth >= 1000 ? this.showNav() : this.hideNav();

  }

  // Check window width on resize. Larger than 1000px show nave, else hide nav
  toggleNav($event) {
    $event.target.innerWidth >= 1000 ? this.showNav() : this.hideNav();
  }

  hideModal() {
    const popup = document.querySelector('.popup-bg');
    popup.setAttribute('style', 'display: none');
  }

  // Display Nav for Desktop
  showNav() {
    this.menu = true;
  }

  // Hide Nav in Hamburger Menu for Mobile
  hideNav() {
    this.menu = false;
  }

  onSubmit() {

  }

  // hideModal(){
  //   var skillsPopup = document.querySelector('#skills-popup');
  //   skillsPopup.setAttribute("style", "display:none");
  //   console.log('works');
  // }
  // hideProjectsModal(){
  //   var projectsPopup = document.querySelector('#projects-popup');
  //   projectsPopup.setAttribute("style", "display:none");
  //   console.log('works');
  // }

}
