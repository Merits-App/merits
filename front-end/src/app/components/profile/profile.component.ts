import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  newSkill: User["skills"];

  constructor() { }

  ngOnInit() {
    console.log('The profile page is connected to the routes.');
    this.newSkill = { languages: '', otherSkills: ''};
    console.log(this.newSkill);
  }
  
  onSubmit(){

  }

  hideModal(){
    var skillsPopup = document.querySelector('#skills-popup');
    
    skillsPopup.setAttribute("style", "display:none");
    console.log('works');
  }
  // hideProjectsModal(){
  //   var projectsPopup = document.querySelector('#projects-popup');
    
  //   projectsPopup.setAttribute("style", "display:none");
  //   console.log('works');
  // }
  
}